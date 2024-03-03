import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

    const url_foto_h = "https://i.pinimg.com/736x/c6/cc/83/c6cc83e01a447b5c81a7ba726bf374ff.jpg"

    return (
        <>
            <header className="bg-gray-800 text-white p-4 flex items-center justify-between w-full h-20">
                <div className="flex items-center">
                    <div className="text-xl font-bold">
                        <img src={url_foto_h} className='rounded-full h-12' />
                    </div>
                </div>
                <nav className="flex space-x-4">
                    <Link to="/" className="hover:text-gray-300">Inicio</Link> {/* Enlaces */}
                    <Link to="/Curriculum" className="hover:text-gray-300">Curriculum</Link>
                    <Link to="/Proyectos" className="hover:text-gray-300">Proyectos</Link>
                    <Link to="/Contacto" className="hover:text-gray-300">Contacto</Link>
                </nav>
            </header>
        </>
    )
}
