import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

    const handleAnchorClick = (event, targetId) => {
        // event.preventDefault();  // Prevenir el comportamiento predeterminado del enlace

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Desplazar con un offset (ajustar el valor del desplazamiento según el tamaño de tu header)
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Aquí restamos 80px para evitar que quede tapado por el header
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <header className="fixed top-0 bg-stone-900 text-white z-50 px-[20rem] flex items-center justify-between w-full h-20 animate-fade animate-duration-[2s]">
                <div className="flex items-center pl-5">
                    <div className="text-xl font-bold">
                        <Link to="/Portafolio" className="hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'Inicio')}>
                            <span className='font-semibold flex items-center'>&lt;ADDERLY.M/&gt;</span>
                        </Link>
                    </div>
                </div>
                <nav className="flex space-x-4 pr-5">
                    {/* <Link to="/Portafolio" className="hover:text-gray-300">Inicio</Link> Enlaces */}
                    <Link to="/Portafolio#Experiencia" className="hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'Experiencia')}>Experiencia</Link>
                    <Link to="/Portafolio#Proyectos" className="hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'Proyectos')}>Proyectos</Link>
                    <Link to="/Portafolio#SobreMi" className="hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'SobreMi')}>Sobre Mi</Link>
                </nav>
            </header>
        </>
    )
}
