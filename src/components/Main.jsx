import '../App.css';
import React from 'react';
import logoMain from '../assets/logoMain1.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMiniDocumentArrowDown } from 'react-icons/hi2';
import Cv from '../assets/Profile.pdf';

export const Main = () => {
    return (

        <div className="h-screen flex flex-row items-center justify-center p-[10rem]">

            <div className=" flex items-center justify-end p-4 animate-fade animate-duration-[2s]">
                <img src={logoMain} alt="Logo" className="w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px]" />
            </div>

            <div className=" flex flex-col px-4 animate-fade animate-duration-[2s]">
                <h1 className="text-4xl text-white font-bold mb-2 text-left mi-font">
                    Hi, I´m <strong className='text-blue-500'>&lt;ADDERLY.M/&gt;</strong>
                </h1>
                <p className="text-2xl text-white text-left ">
                    Ingeniero de sistemas con <strong>+2</strong> años de experiencia en el desarrollo de aplicaciones web. Mi enfoque se centra en simplificar tareas cotidianas, mejorar la productividad y
                    optimizar procesos.
                </p>
                <div className='flex flex-row mt-10 md:justify-start justify-center'>
                    <a href={Cv} download="CV Adderly Mendoza Nina" className="border-gray-600 hover:bg-stone-800 text-white p-4 text-3xl">
                        <HiMiniDocumentArrowDown />
                    </a>
                    <a href="https://github.com/AdderlyMendoza" className="border-gray-600 hover:bg-stone-800 text-white p-4 text-3xl">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/adderly-mendoza-nina-1407702a5/" className="border-gray-600 hover:bg-stone-800 text-white p-4 text-3xl">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>

    );
};
