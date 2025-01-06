import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import proyectos from "../proyectos.json";

export const Proyectos = () => {

    return (
        <>
            <div className="flex flex-col items-center pb-8 reveal mb-12">
                {
                    proyectos.map((proyecto, index) => {
                        return (
                            <div className="ml-8 flex rounded-xl text-gray-700 shadow-lg max-h-[21rem] flex-row mt-10 " key={index}>
                                <div className="w-2/5 text-gray-700 rounded-r-none rounded-xl shrink-0">
                                    <img src={process.env.PUBLIC_URL + proyecto.imagen} className="object-cover w-full h-full rounded-l-md" />
                                </div>
                                <div className="p-6">
                                    <h6 className="flex mb-4 font-sans text-xs leading-relaxed tracking-normal text-white">
                                        {
                                            proyecto.lenguajes.map((lenguaje, i) => {
                                                return (
                                                    <div className="flex items-center p-2 mr-2 text-xs font-bold text-center rounded-lg bg-stone-800 text-white" type="button">
                                                        {lenguaje}
                                                    </div>
                                                );
                                            })
                                        }
                                    </h6>
                                    <h4 className="block mb-2 font-sans text-lg font-bold text-blue-500">
                                        {proyecto.titulo}
                                    </h4>
                                    <p className="block mb-8 font-sans text-sm font-normal text-gray-500 leading-relaxed ">
                                        {proyecto.descripcion}
                                    </p>
                                    <div className='flex'>
                                        {
                                            proyecto.links.map((link, i) => {
                                                return (
                                                    <a href={link.url}>
                                                        <button className="flex items-center p-2 font-sans text-sm font-bold text-center rounded-lg hover:bg-stone-800 text-white" type="button">
                                                            {link.nombre}
                                                        </button>
                                                    </a>
                                                );
                                            })

                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );

};