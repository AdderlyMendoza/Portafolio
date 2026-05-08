import '../App.css';
import React from 'react';
import logoMain from '../assets/logoMain1.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMiniDocumentArrowDown } from 'react-icons/hi2';
import Cv from '../assets/Profile.pdf';
import { Sparkles } from "./Sparkles.jsx"

export const Main = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <Sparkles density={1200} className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] -z-1" />

            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 flex flex-col items-center justify-center lg:flex-row gap-8">
                <div className="flex justify-center animate-fade animate-duration-[2s]">
                    <img src={logoMain} alt="Logo" className="w-2/3 sm:w-64 lg:w-72 pt-20 lg:pt-0" />
                </div>

                <div className="flex flex-col animate-fade animate-duration-[2s]">
                    <h1 className="text-4xl text-white font-bold mb-2 text-left">
                        Hi, I´m <strong className='text-blue-500'>&lt;ADDERLY.M/&gt;</strong>
                    </h1>
                    <p className="md:text-lg text-gray-100 text-left text-md max-w-xl">
                        Ingeniero de Sistemas con <strong>+3 años</strong> de experiencia en desarrollo web y de escritorio. Especializado en <strong>Laravel, Django, Vue.js y React.js</strong>, aplicando arquitecturas MVC y creando interfaces modernas con <strong>Tailwind CSS</strong>. Además, cuento con experiencia en <strong>Docker</strong> para la contenerización y despliegue de aplicaciones.
                    </p>
                    <div className='flex flex-row mt-5 md:justify-start justify-center'>
                        <a href="https://canva.link/u9qrhb9yc7ji440" className="hover:bg-stone-800 text-white p-4 text-3xl" target="_blank"> 
                            <HiMiniDocumentArrowDown />
                        </a>
                        <a href="https://github.com/AdderlyMendoza" className="hover:bg-stone-800 text-white p-4 text-3xl" target="_blank">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/adderly-mendoza-nina-1407702a5/" className="hover:bg-stone-800 text-white p-4 text-3xl" target="_blank">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
