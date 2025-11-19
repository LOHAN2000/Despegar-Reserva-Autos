
export function haySuperposicion(inicioA, finA, inicioB, finB) {
  const dateInicioA = new Date(inicioA);
  const dateFinA = new Date(finA);
  const dateInicioB = new Date(inicioB);
  const dateFinB = new Date(finB);

  return dateInicioA.getTime() < dateFinB.getTime() && dateFinA.getTime() > dateInicioB.getTime();
}