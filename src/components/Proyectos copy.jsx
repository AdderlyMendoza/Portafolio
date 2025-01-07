import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import proyectos from "../proyectos.json";

export const Proyectos = () => {
  // Estado para controlar si mostrar todos los proyectos
  const [mostrarTodos, setMostrarTodos] = useState(false);

  // Función para alternar el estado de mostrar todos los proyectos
  const toggleMostrarTodos = () => {
    setMostrarTodos(!mostrarTodos);
  };

  return (
    <>
      <div className="flex flex-col items-center pb-8 reveal mb-12">
        {
          proyectos.slice(0, 2).map((proyecto, index) => (
            <div className="ml-8 md:flex md:flex-row flex flex-col rounded-xl text-gray-700 shadow-lg max-h-[21rem] mt-10 hover:bg-black/50 group" key={index}>
              <div className="md:w-2/5 w-1/2 text-gray-700 rounded-r-none rounded-xl shrink-0">
                <img src={process.env.PUBLIC_URL + proyecto.imagen} className="object-cover w-full h-full rounded-l-md group-hover:grayscale" />
              </div>
              <div className="p-6">
                <h6 className="flex mb-4 font-sans text-xs leading-relaxed tracking-normal text-white">
                  {
                    proyecto.lenguajes.map((lenguaje, i) => (
                      <div className="flex items-center p-2 mr-2 text-xs font-bold text-center rounded-lg bg-stone-800 text-white" key={i}>
                        {lenguaje}
                      </div>
                    ))
                  }
                </h6>
                <h4 className="block mb-2 font-sans text-lg font-bold text-blue-500">
                  {proyecto.titulo}
                </h4>
                <p className="block mb-8 font-sans text-sm font-normal text-gray-500 leading-relaxed">
                  {proyecto.descripcion}
                </p>
                <div className='flex'>
                  {
                    proyecto.links.map((link, i) => (
                      <a href={link.url} key={i}>
                        <button className="flex items-center p-2 font-sans text-sm font-bold text-center rounded-lg hover:bg-stone-800 text-white" type="button">
                          {link.nombre}
                        </button>
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
          ))

        }

        {/* Mostrar el resto de los proyectos si "mostrarTodos" es verdadero */}
        {
          mostrarTodos && proyectos.slice(2).map((proyecto, index) => (
            <div className="ml-8 flex rounded-xl text-gray-700 shadow-lg max-h-[21rem] flex-row mt-10 hover:bg-black/50 group" key={index}>
              <div className="w-2/5 text-gray-700 rounded-r-none rounded-xl shrink-0">
                <img src={process.env.PUBLIC_URL + proyecto.imagen} className="object-cover w-full h-full rounded-l-md group-hover:grayscale" />
              </div>
              <div className="p-6">
                <h6 className="flex mb-4 font-sans text-xs leading-relaxed tracking-normal text-white">
                  {
                    proyecto.lenguajes.map((lenguaje, i) => (
                      <div className="flex items-center p-2 mr-2 text-xs font-bold text-center rounded-lg bg-stone-800 text-white" key={i}>
                        {lenguaje}
                      </div>
                    ))
                  }
                </h6>
                <h4 className="block mb-2 font-sans text-lg font-bold text-blue-500">
                  {proyecto.titulo}
                </h4>
                <p className="block mb-8 font-sans text-sm font-normal text-gray-500 leading-relaxed">
                  {proyecto.descripcion}
                </p>
                <div className='flex'>
                  {
                    proyecto.links.map((link, i) => (
                      <a href={link.url} key={i}>
                        <button className="flex items-center p-2 font-sans text-sm font-bold text-center rounded-lg hover:bg-stone-800 text-white" type="button">
                          {link.nombre}
                        </button>
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }

        {/* Botón para alternar la visibilidad de los proyectos */}
        <button
          onClick={toggleMostrarTodos}
          className="mt-8 px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
        >
          {mostrarTodos ? 'Ocultar' : 'Mostrar más'}
        </button>
      </div>
    </>
  );
};
