import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleAnchorClick = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth',
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 bg-stone-900 text-white z-50 w-full h-20 animate-fade animate-duration-[2s]">
                <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
                    <div className="text-xl font-bold">
                        <Link to="/Portafolio" className="hover:text-gray-300" onClick={() => handleAnchorClick('Inicio')}>
                            <span className="font-semibold">&lt;ADDERLY.M/&gt;</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        <Link to="/Portafolio#Experiencia" className="hover:text-gray-300 text-sm" onClick={() => handleAnchorClick('Experiencia')}>Experiencia</Link>
                        <Link to="/Portafolio#Proyectos" className="hover:text-gray-300 text-sm" onClick={() => handleAnchorClick('Proyectos')}>Proyectos</Link>
                        <Link to="/Portafolio#SobreMi" className="hover:text-gray-300 text-sm" onClick={() => handleAnchorClick('SobreMi')}>Sobre Mi</Link>
                    </nav>

                    <div className="md:hidden">
                        <button className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {mobileMenuOpen && (
                <div className="md:hidden fixed top-20 left-0 w-full bg-stone-900 text-white z-40">
                    <div className="flex flex-col items-center">
                        <Link to="/Portafolio#Experiencia" className="p-4 hover:text-gray-300" onClick={() => handleAnchorClick('Experiencia')}>Experiencia</Link>
                        <Link to="/Portafolio#Proyectos" className="p-4 hover:text-gray-300" onClick={() => handleAnchorClick('Proyectos')}>Proyectos</Link>
                        <Link to="/Portafolio#SobreMi" className="p-4 hover:text-gray-300" onClick={() => handleAnchorClick('SobreMi')}>Sobre Mi</Link>
                    </div>
                </div>
            )}
        </>
    );
};
