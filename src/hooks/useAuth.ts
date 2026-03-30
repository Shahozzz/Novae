import { useMemo, useState } from 'react';

type AuthUser = {
  id: string;
  displayName: string;
  email?: string;
};

type UseAuthResult = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export function useAuth(): UseAuthResult {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = () => {
    setUser({
      id: 'demo-user',
      displayName: 'Admin User',
      email: 'admin@example.com'
    });
  };

  const logout = () => {
    setUser(null);
  };

  return useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout
    }),
    [user]
  );
}
