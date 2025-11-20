
export const Hero = () => {
  return (
    <div className='relative overflow-hidden h-120 text-white'>
      <div className='absolute inset-0'>
        <img src={'/despegar.jpg'} className='w-full h-full object-cover'/>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className='relative z-10 flex flex-col justify-center items-center h-full'>
        <h1 className="text-6xl font-bold leading-tight mb-4">Reserva un auto con nosotros</h1>
        <p className="text-2xl text-gray-300 mb-8">Ofertas en renta de autos en múltiples destinos</p>
        <a href="#" className="bg-red-600 text-white hover:bg-900 hover:bg-red-700 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
      </div>
    </div>
  )
}
