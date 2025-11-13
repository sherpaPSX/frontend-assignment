import {persist} from 'zustand/middleware';
import {create} from 'zustand/react';
import {Tokens, User} from './api';

interface AuthState {
  tokens: Tokens | null;
  user: User | null;
  login: (tokens: Tokens, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      tokens: null,
      user: null,
      login: (tokens, user) => set({tokens, user}),
      logout: () => set({tokens: null, user: null}),
    }),
    {name: 'auth-storage'}
  )
);
