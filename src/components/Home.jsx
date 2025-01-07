import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; // Importa ScrollReveal
import { Main } from './Main';
import { Experiencia } from './Experiencia.jsx';
import { Proyectos } from './Proyectos.jsx';
import { SobreMi } from './SobreMi.jsx';

export const Home = () => {

    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            delay: 200,
            distance: '50px',
            duration: 1000,
            origin: 'bottom',
            opacity: 0,
        });

        // ScrollReveal().reveal('.reveal2', { delay: 500, origin: 'left', distance: '100px', duration: 1500 });
    }, []);

    return (
        <div className="bg-stone-900 md:px-[21rem] border border-stone-900">

            {/* Componente Main */}
            <div id='Inicio'></div>
            <Main/>

            {/* Sección de Experiencia */}
            <div className="flex items-center text-white font-bold reveal" id="Experiencia">
                <svg className="size-9 ml-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                    <path d="M12 12l0 .01"></path>
                    <path d="M3 13a20 20 0 0 0 18 0"></path>
                </svg>
                <h1 className="px-2 text-2xl">Experiencia</h1>
            </div>
            <Experiencia/>

            {/* Sección de Proyectos */}
            <div className="flex items-center text-white font-bold reveal" id="Proyectos">
                <svg className="size-10 ml-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8l-4 4l4 4"></path>
                    <path d="M17 8l4 4l-4 4"></path>
                    <path d="M14 4l-4 16"></path>
                </svg>
                <h1 className="px-2 text-2xl">Proyectos</h1>
            </div>
            <Proyectos />

            {/* Sección de Sobre Mi */}
            <div className="flex items-center text-white font-bold reveal" id="SobreMi">
                <svg className="size-10 ml-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                    <path d="M15 19l2 2l4 -4"></path>
                </svg>
                <h1 className="px-2 text-2xl">Sobre Mi</h1>
            </div>
            <SobreMi />

        </div>
    );
};
