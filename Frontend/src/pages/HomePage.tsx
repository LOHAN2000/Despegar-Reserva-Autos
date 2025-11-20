import { Hero } from "../components/Hero"
import { Resultados } from "../components/Resultados"
import { SearchBar } from "../components/SearchBar"


export const HomePage = () => {
  return (
    <div className='h-screen bg-white flex flex-col'>
      <Hero/>
      <SearchBar/>
      <Resultados/>
    </div>
  )
}
