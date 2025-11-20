import { db } from '../utils/firebase.js'
import { haySuperposicion } from '../utils/dataUtils.js'

export async function buscarAutosDisponibles(params) {
  const { location, fechaRecogida, fechaDevolucion } = params;

  const autosSnapshot = await db.collection('autos')
                                  .where('ubicacion', '==', location)
                                  .get();

  let autosInventario = [];

  autosSnapshot.forEach(doc => {
    autosInventario.push({
      id: doc.id,
      ...doc.data()
    })
  })

  const reservasSnapshot = await db.collection('reservas').get();

  let reservas = [];

  reservasSnapshot.forEach(doc => {
    reservas.push(doc.data())
  })

  const autosDisponibles = autosInventario.filter(auto => {
    const estaReservado = reservas.some(reserva => {

      if (reserva.autoId === auto.id) {
        return haySuperposicion(
          fechaRecogida,
          fechaDevolucion,
          reserva.fechaRecogida,
          reserva.fechaDevolucion
        );
      }

      return false;
    })

    return !estaReservado;
  })

  return autosDisponibles;
}
