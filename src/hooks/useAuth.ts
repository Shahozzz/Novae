import { useMemo, useState } from 'react';

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
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = async () => {
    setUser({
      id: 'demo-user',
      email: 'admin@novae-systems.com',
      displayName: 'Admin',
      role: 'admin',
    });
  };

  const logout = async () => {
    setUser(null);
  };

  return useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      isLoading: false,
      login,
      logout,
    }),
    [user]
  );
}