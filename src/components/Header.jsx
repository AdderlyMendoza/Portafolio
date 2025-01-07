import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    // Estado para controlar si el menú en móvil está abierto o cerrado
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleAnchorClick = (event, targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Restamos 80px para no tapar con el header fijo
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <header className="fixed top-0 bg-stone-900 text-white z-50 w-full h-20 px-4 sm:px-6 md:px-12 lg:px-[20rem] flex items-center justify-between animate-fade animate-duration-[2s]">
                {/* Logo */}
                <div className="flex items-center pl-5">
                    <div className="text-xl font-bold">
                        <Link to="/Portafolio" className="hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'Inicio')}>
                            <span className="font-semibold flex items-center">&lt;ADDERLY.M/&gt;</span>
                        </Link>
                    </div>
                </div>

                {/* Menú de navegación en pantallas grandes */}
                <nav className="hidden md:flex space-x-4 pr-5">
                    <Link to="/Portafolio#Experiencia" className="hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'Experiencia')}>Experiencia</Link>
                    <Link to="/Portafolio#Proyectos" className="hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'Proyectos')}>Proyectos</Link>
                    <Link to="/Portafolio#SobreMi" className="hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'SobreMi')}>Sobre Mi</Link>
                </nav>

                {/* Botón de hamburguesa para pantallas pequeñas */}
                <div className="md:hidden flex items-center pr-5">
                    <button 
                        className="text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Menú desplegable en pantallas pequeñas */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-stone-900 text-white">
                    <div className="flex flex-col items-center">
                        <Link to="/Portafolio#Experiencia" className="p-4 hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'Experiencia')}>Experiencia</Link>
                        <Link to="/Portafolio#Proyectos" className="p-4 hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'Proyectos')}>Proyectos</Link>
                        <Link to="/Portafolio#SobreMi" className="p-4 hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'SobreMi')}>Sobre Mi</Link>
                    </div>
                </div>
            )}
        </>
    );
};
