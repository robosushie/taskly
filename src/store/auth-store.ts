// authStore.ts
import { create } from "zustand";

type AuthState = {
  user: any;
  error: any;
  authorized: boolean;
  setUser: (user: any) => void;
  setError: (error: any) => void;
  setAuthorized: (authorized: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: null,
  authorized: false,
  setUser: (user) => set({ user }),
  setError: (error) => set({ error }),
  setAuthorized: (authorized) => set({ authorized }),
}));
