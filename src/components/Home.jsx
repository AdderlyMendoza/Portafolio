import React, { useEffect } from 'react';
import { Main } from './Main';
import { Experiencia } from './Experiencia.jsx';
import { Proyectos } from './Proyectos.jsx';
import { SobreMi } from './SobreMi.jsx';

export const Home = () => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8')
                        entry.target.classList.add('animate-fade-up')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        )
        document.querySelectorAll('.reveal').forEach(el => {
            el.classList.add('opacity-0', 'translate-y-8', 'transition-none')
            observer.observe(el)
        })
        return () => observer.disconnect()
    }, [])

    return (
        <div className="bg-stone-900">
            <div id='Inicio'></div>
            <Main />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">

                <div className="flex items-center text-white font-bold reveal pt-8" id="Experiencia">
                    <svg className="size-9" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                        <path d="M12 12l0 .01"></path>
                        <path d="M3 13a20 20 0 0 0 18 0"></path>
                    </svg>
                    <h2 className="px-2 text-2xl">Experiencia</h2>
                </div>
                <Experiencia />

                <div className="flex items-center text-white font-bold reveal pt-4" id="Proyectos">
                    <svg className="size-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 8l-4 4l4 4"></path>
                        <path d="M17 8l4 4l-4 4"></path>
                        <path d="M14 4l-4 16"></path>
                    </svg>
                    <h2 className="px-2 text-2xl">Proyectos</h2>
                </div>
                <Proyectos />

                <div className="flex items-center text-white font-bold reveal pt-4" id="SobreMi">
                    <svg className="size-10" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                        <path d="M15 19l2 2l4 -4"></path>
                    </svg>
                    <h2 className="px-2 text-2xl">Sobre Mi</h2>
                </div>
                <SobreMi />

            </div>
        </div>
    );
};
