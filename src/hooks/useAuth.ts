import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { supabase } from '../lib/supabase';

export interface AuthUser {
  id: string;
  email: string;
  displayName?: string;
  role?: 'admin' | 'user';
}

export interface UseAuthResult {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export function useAuth(): UseAuthResult {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setIsLoading(false);
      return;
    }

    let mounted = true;

    const mapUser = (sessionUser: { id: string; email?: string | null; user_metadata?: Record<string, unknown> } | null) =>
      sessionUser
        ? {
            id: sessionUser.id,
            email: sessionUser.email ?? '',
            displayName:
              (typeof sessionUser.user_metadata?.display_name === 'string' && sessionUser.user_metadata.display_name) ||
              (typeof sessionUser.user_metadata?.name === 'string' && sessionUser.user_metadata.name) ||
              sessionUser.email ||
              'Admin',
            role: 'admin' as const,
          }
        : null;

    const syncUser = async () => {
      const { data } = await supabase.auth.getSession();

      if (!mounted) return;

      setUser(mapUser(data.session?.user ?? null));
      setIsLoading(false);
    };

    syncUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(mapUser(session?.user ?? null));
      setIsLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const login = async () => {
    await navigate({ to: '/admin-login' });
  };

  const logout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
  };

  return useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      logout,
    }),
    [isLoading, user, navigate]
  );
}
