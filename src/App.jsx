import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeContactos, Chat, Informacion, Starships, Planets, Movies } from './Pages'
import './global.css'



/**
 * Un componente funcional que renderiza la aplicación principal.
 *
 * Utiliza la biblioteca react-router-dom para definir rutas para diferentes páginas.
 * 
 * @return {JSX.Element} El elemento JSX que representa la aplicación.
 */
function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<HomeContactos />} />
          <Route path='/chat/:id' element={<Chat />} />
          <Route path='/informacion/:id' element={<Informacion />} />
          <Route path='/starships' element={<Starships />} />
          <Route path='/planets' element={<Planets />} /> 
          <Route path='/movies' element={<Movies />} />       
        </Routes>
    </>
  )
}

export default App
