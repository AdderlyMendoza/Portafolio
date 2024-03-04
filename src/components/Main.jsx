import '../App.css'
import React from 'react'
import { Link } from 'react-router-dom'
import boku from "../assets/bokuto.jpg"

export const Main = () => {

    const url_foto = "https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg"

    const bokuto = "https://i.pinimg.com/736x/99/88/d5/9988d5b6136f44c7c338db294a830c87.jpg"

    return (
        <div className="h-full flex items-center justify-center animate animate-fade animate-duration-[2s]">
            <div className="flex flex-wrap items-center justify-center">

                <div className="md:w-1/2 p-4 flex items-center justify-end md:text-right rounded-full w-[90%]">
                    <img src={boku} alt="" className='rounded-full'/>
                </div>

                <div className="text-justify md:w-[50%] md:flex md:flex-col md:items-left md:justify-center px-6 lg:pr-[8rem]">
                    <h1 className='text-center text-8xl text-black font-bold mb-10 md:text-left mi-font'>
                        Hola
                    </h1>
                    <h1 className='text-center text-4xl text-black font-bold mb-2 md:text-left'>
                        Un poco de mí
                    </h1>
                    <p className='text-2xl text-black pt-4'>
                        Soy <strong>Adderly Mendoza Nina</strong>, Bachiller en Ingeniería de Sistemas y esta página web es para ti.
                    </p>
                    <p className='text-2xl text-black mb-10'>
                        De un estudiante a otro. ¡Espero disfrute y aprenda mucho!
                    </p>
                    <div className='md:flex md:flex-wrap flex justify-center'>

                        <button className="rounded-full bg-red-400 hover:bg-red-600 text-white px-4 py-2 text-base sm:text-lg md:text-lg lg:text-lg xl:text-2xl">
                            <Link to="/Curriculum"> 💼 Currículum</Link>
                        </button>
                        <button className="rounded-full bg-yellow-400 hover:bg-yellow-600 text-white px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
                            <Link to="/Proyectos"> 💻 Proyectos</Link>
                        </button>
                        <button className="rounded-full bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
                            <Link to="/Contacto"> 🤑 Contacto</Link>
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}
