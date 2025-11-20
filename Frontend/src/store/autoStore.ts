import { create } from "zustand";
import type { Auto, SearchParams } from "../types";

interface AutoState {
  autos: Auto[];
  searchParams: SearchParams;
  isLoading: boolean;
  error: string | null;

  searchAutos: () => Promise<void>;
  setSearchParams: (params: SearchParams) => void;
  setIsLoading: (loading: boolean) => void;
  setError: (message: string | null) => void;
}

export const useAutoStore = create<AutoState>((set, get) => ({
  autos: [],
  searchParams: {
    locacion: '',
    fechaRecogida: '',
    fechaDevolucion: '',
  },
  isLoading: false,
  error: null,

  setSearchParams: (params) => set({ searchParams: params }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setError: (message) => set({ error: message }),
  searchAutos: async () => {

    const { searchParams } = get();

    if (!searchParams.locacion || !searchParams.fechaRecogida || !searchParams.fechaDevolucion) {
      alert("Por favor completa todos los campos");
      return;
    }

    set({ isLoading: true, error: null})

    try {
      const query = new URLSearchParams({
        location: searchParams.locacion,
        fechaRecogida: searchParams.fechaRecogida,
        fechaDevolucion: searchParams.fechaDevolucion,
      }).toString();

      const response = await fetch(`http://localhost:3000/api/auto/autos?${query}`);
      if(!response.ok) throw new Error("Error al obtener datos del servidor");

      const data = await response.json();
      set({ autos: data, isLoading: false });


    } catch (error) {
      console.error(error);
      set({ error: "Error al obtener datos del servidor", isLoading: false });
    }

  }

}))
