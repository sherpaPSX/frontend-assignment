import {persist} from 'zustand/middleware';
import {create} from 'zustand/react';
import {Tokens} from './api';

interface AuthState {
  tokens: Tokens | null;
  username: string | null;
  login: (tokens: Tokens, username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      tokens: null,
      username: null,
      login: (tokens, username) => set({tokens, username}),
      logout: () => set({tokens: null, username: null}),
    }),
    {name: 'auth-storage'}
  )
);
