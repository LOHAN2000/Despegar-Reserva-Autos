import React from 'react'
import { useAutoStore } from '../store/autoStore';

export const SearchBar = () => {

  const { searchParams, setSearchParams, searchAutos} = useAutoStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value});
  }

  const handleSearch = async () => {
    searchAutos();
  }

  return (
    <div className='mx-auto px-4 relative z-20 -m-10'>
      <div className='bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col lg:flex-row gap-4 items-end p-3'>
        <div className='flex-1 w-full'>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Destino</label>
          <div className='flex items-center bg-gray-50 rounded-md border border-gray-200 p-2'>
            <span className='text-gray-400 mr-2'>🎈</span>
            <select name="locacion" value={searchParams.locacion} onChange={handleChange} className="bg-transparent w-full outline-none text-gray-700 font-semibold cursor-pointer appearance-none">
              <option value="">Selecciona destino</option>
              <option value="Lima">Lima</option>
              <option value="Cusco">Cusco</option>
              <option value="Arequipa">Arequipa</option>
            </select>          
          </div>
        </div>
        <div className='flex-1 w-full'>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Desde</label>
          <div className="flex items-center bg-gray-50 rounded-md border border-gray-200 p-2">
              <span className="text-gray-400 mr-2">📅</span>
              <input type="date" name='fechaRecogida' value={searchParams.fechaRecogida} onChange={handleChange} className='bg-transparent w-full outline-none text-gray-700 font-semibold'/>
          </div>
        </div>
        <div className='flex-1 w-full'>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Hasta</label>
          <div className="flex items-center bg-gray-50 rounded-md border border-gray-200 p-2">
              <span className="text-gray-400 mr-2">📅</span>
              <input type="date" name='fechaDevolucion' value={searchParams.fechaDevolucion} onChange={handleChange}className='bg-transparent w-full outline-none text-gray-700 font-semibold'/>
          </div>
        </div>
        <div className='w-full lg:w-auto'>
          <button onClick={handleSearch} className='w-full bg-red-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-md transition duration-200 shadow-lg flex justify-center items-center gap-2 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>Buscar
          </button>
        </div>
      </div>
    </div>
  )
}
