import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  id: string | null;
  profile: string | null;
  name: string | null;
  login: (id: string, profile: string, name: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  login: (id: string, profile: string, name: string) =>
    set({ isLoggedIn: true, id, profile, name }),
  logout: () => set({ isLoggedIn: false, id: null, profile: null, name: null }),
  id: null,
  profile: null,
  name: null,
}));

export default useAuthStore;
