import { buscarAutosDisponibles } from '../models/AutoModel.js'

export class AutoController {
  static async getAutos (req, res) {
    const { location, fechaRecogida, fechaDevolucion } = req.query;

    if (!location || !fechaRecogida || !fechaDevolucion) {
      return res.status(400).json({error: 'Faltan parámetros de búsqueda: locación, fechaRecogida y fechaDevolucion son obligatorios.'})
    }

    const recogida = new Date(fechaRecogida);
    const devolucion = new Date(fechaDevolucion);

    if (devolucion.getTime() <= recogida.getTime()) {
      return res.status(400).json({
        error: 'La fecha de devolucion debe ser posterior a la fecha de recogida'
      })
    }

    try {
      const params = { location, fechaRecogida, fechaDevolucion };
      const autos = await buscarAutosDisponibles(params);

      return res.status(200).json(autos);
    } catch (error) {
      console.error('Error en el controlador al buscar autos:', error);
      
      return res.status(500).json({
        error: 'Ocurrió un error interno en el servidor. Intente más tarde'
      })
    }

  }
}