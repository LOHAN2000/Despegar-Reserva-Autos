
export interface Auto {
  id: string;
  marca: string;
  modelo: string;
  capacidad: number;
  precioPorDia: number;
  tipo: string;
}

export interface SearchParams {
  locacion: string;
  fechaRecogida: string;
  fechaDevolucion: string;
}