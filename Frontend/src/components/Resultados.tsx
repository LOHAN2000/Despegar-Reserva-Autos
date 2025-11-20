import React from 'react'
import { useAutoStore } from '../store/autoStore';

export const Resultados = () => {

  const { autos, isLoading,  } = useAutoStore();

  return (
    <div className='bg-gray-100 py-12 flex flex-col h-screen'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6 border-l-4 border-orange-500 pl-4'>Autos Recomendados</h1>
      {isLoading && (
            <div className="text-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600 font-medium">Buscando las mejores ofertas...</p>
            </div>
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {autos.length > 0 ? (
          autos.map((auto) => (
            <div key={auto.id} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col'>
              <div className='h-48 bg-gray-200 flex items-center justify-center overflow-hidden'>
                <img src={`https://placehold.co/600x400?text=${auto.marca}+${auto.modelo}`} alt={auto.modelo} className="w-full h-full object-cover"/>
              </div>
              <div className="p-6 flex flex-row">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">{auto.marca}</p>
                        <h3 className="text-xl font-bold text-gray-900">{auto.modelo}</h3>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded uppercase">
                        {auto.tipo}
                    </span>
                </div>
                <div className="flex items-center gap-4 mt-4 text-gray-600 text-sm">
                    <span className="flex items-center gap-1">
                        👥 {auto.capacidad} Pasajeros
                    </span>
                    <span className="flex items-center gap-1">
                        ⚙️ Auto
                    </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">No hay autos para mostrar. ¡Intenta realizar una búsqueda!</p>
          </div>
        )}
      </div>
    </div>
  )
}
