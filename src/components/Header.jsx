import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

    return (
        <>
            <header className="fixed top-0 bg-stone-900 text-white md:p-4 flex items-center justify-between w-full h-20 animate-fade animate-duration-[2s]">
                <div className="flex items-center pl-5">
                    <div className="text-xl font-bold">
                        <Link to="/Portafolio" className="hover:text-gray-300">
                            <span className='font-semibold flex items-center'>&lt;ADDERLY.M/&gt;</span>
                        </Link>
                    </div>
                </div>
                <nav className="flex space-x-4 pr-5">
                    <Link to="/Portafolio" className="hover:text-gray-300">Inicio</Link> {/* Enlaces */}
                    <Link to="/Curriculum" className="hover:text-gray-300">Curriculum</Link>
                    <Link to="/Proyectos" className="hover:text-gray-300">Proyectos</Link>
                    <Link to="/Contacto" className="hover:text-gray-300">Contacto</Link>
                </nav>
            </header>
        </>
    )
}
