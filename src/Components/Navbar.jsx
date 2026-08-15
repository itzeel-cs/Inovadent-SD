import logoPrincipal from '../assets/img/logo/principal.png';
import { useState } from 'react'
import {Icon} from  '@iconify/react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false) 

  return (
  <>



<nav className="w-full bg-white/50 ">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Barra principal */}
        <div className="flex items-center justify-between">

          {/* Logo */}

          <a
            href="#inicio"
            className="text-2xl font-bold text-blue-600">
            <img src={logoPrincipal} alt="logo" className="min-w-10 max-w-12 " />
          </a>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-blue-600 transition" >
              Presentacion
            </a>
            <a
              href="#servicios"
              className="text-gray-700 hover:text-blue-600 transition">
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-gray-700 hover:text-blue-600 transition">
              Ubicacion
            </a>

            <a
              href="#contacto"
              className="text-gray-700 hover:text-blue-600 transition">
              Publicaciones
            </a>

            <a
              href="#contacto"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition">
              Agendar cita
            </a>
          </div>

          {/* Botón móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
            aria-label="Abrir menú" >
            <Icon
              icon={isOpen ? 'mdi:close' : 'mdi:menu'}
              className="text-3xl" />
          </button>

        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">

            <a
              href="#inicio"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600" >
              Inicio
            </a>

            <a
              href="#servicios"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600" >
              Servicios
            </a>

            <a
              href="#nosotros"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600" >
              Ubicacion
            </a>

            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600" >
              Publicaciones
            </a>

            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white text-center px-5 py-2.5 rounded-full" >
              Agendar cita
            </a>

          </div>
        )}

      </div>
    </nav>
  </>
  )
}

export default Navbar