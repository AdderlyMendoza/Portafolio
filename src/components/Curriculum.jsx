import React from 'react'

export const Curriculum = () => {
  return (
    <div className='flex flex-col px-10 mb:pt-4 md:px-20'>
      <div>
        <h1 className='text-4xl my-10'>Currículum</h1>
      </div>
      {/* EXPERIENCIA LABORAL */}
      <div className='grid grid-cols-6'>
        <div className='col-span-2'>
          <strong>Experiencia Laboral</strong>
        </div>
        <div className='grid col-span-4 grid-row-4'>
          <div className='grid grid-cols-3 col-span-4'>
            <div className='grid justify-end mr-3'>
              04/2023 - 08/2023
            </div>
            <div className='col-span-2'>
              <strong>Gobierno Regional Puno</strong>
              <ul className='list-disc pl-6'>
                <li>Participé en la gestión de redes de computadoras</li>
                <li>Realicé el diseño, configuración y mantenimiento de la infraestructura de red.
                </li>
                <li>Colaboré en la resolución de problemas y la implementación de proyectos de expansión de
                  redes de computadoras.
                </li>
                <li>Realicé soporte y mantenimiento de software y hardware en la entidad.
                </li>
              </ul>
            </div>
          </div>
          <div className='grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
              08/2022 - 11/2022
            </div>
            <div className='col-span-2'>
              <strong>Universidad Nacional del Altiplano Puno</strong>
              <ul className='list-disc pl-6'>
                <li>Realicé el diseño e implementación de un sistema web para la gestión de expedientes (PHP,
                  HTML, CSS, BOOTSTRAP)</li>
                <li>Creé un servidor local con acceso restringido a solo empleadores de la entidad.
                </li>
                <li>Ayudé en el soporte y mantenimiento de software y hardware de la oficina.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <hr className="my-6 border-gray-500  w-[100%]" />

      {/* EDUCACION */}
      <div className='grid grid-cols-6 '>
        <div className='col-span-2'>
          <strong>Educación</strong>
        </div>
        <div className=' grid col-span-4 grid-row-4'>
          <div className=' grid grid-cols-3 col-span-4'>
            <div className='grid justify-end mr-3'>
              Actualidad
            </div>
            <div className='col-span-2'>
              <strong>Titulo de Ingeniero de Sistemas</strong>
              <p>Universidad Nacional del Altiplano Puno</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
              10/2023
            </div>
            <div className='col-span-2'>
              <strong>Bachiller en Ingenieria de Sistemas </strong>
              <p>Universidad Nacional del Altiplano Puno</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3 '>
              07/2023
            </div>
            <div className='col-span-2'>
              <strong>Egresado de la Escuela Profesional de Ingeniería de Sistemas</strong>
              <p>Universidad Nacional del Altiplano Puno</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-500  w-[100%]" />

      {/* HABILIDADES */}
      <div className='grid grid-cols-6 '>
        <div className='col-span-2'>
          <strong>Conocimientos Técnicos</strong>
        </div>
        <div className=' grid col-span-4 grid-row-4'>
          <div className=' grid grid-cols-3 col-span-4'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Lenguajes de Programación</strong>
              <p>Python, PHP, JavaScript, C++.</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Desarrollo Web</strong>
              <p>React, Tailwind CSS, Laravel, Bootstrap, AdminLT, HTML, CSS.</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Base de Datos</strong>
              <p>SQL.</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Sistemas Operativos</strong>
              <p>Linux, Windows.</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Redes</strong>
              <p>Cableado Estructurado, Configuración y Solución de Redes.</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Soporte</strong>
              <p>Hardware y Software.</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-500  w-[100%]" />

      {/* DIPLOMAS Y CERTIFICACIONES */}
      <div className='grid grid-cols-6 '>
        <div className='col-span-2'>
          <strong>Diplomas y Certificaciones</strong>
        </div>
        <div className=' grid col-span-4 grid-row-4'>
          <div className=' grid grid-cols-3 col-span-4'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Programación con JavaScript</strong>
              <p>Fundación Movistar | 40 Horas</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Ofimática Avanzado</strong>
              <p>Colegio de Profesores del Perú | 120 Horas.</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Administración y Seguridad en Redes</strong>
              <p>Colegio de Ingenieros del Perú - Universidad Nacional del Altiplano | 120 Horas</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Linux Básico</strong>
              <p>Cisco Networking Academy | 120 Horas</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Congreso Internacional Peruano - Argentino de Ingenieria de Sistemas</strong>
              <p>Universidad de Salta Argentina & Universidad Nacional del Altiplano Puno | 120 Horas.</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Trabajo en Equipo</strong>
              <p>Programa Nacional de Becas y Crédito Educativo del Perú | 10 Horas.</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Desarrollo Ético y Valores</strong>
              <p>Programa Nacional de Becas y Crédito Educativo del Perú | 10 Horas.</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-500  w-[100%]" />

      {/* PUBLICACIONES */}
      <div className='grid grid-cols-6 '>
        <div className='col-span-2'>
          <strong>Publicaciones</strong>
        </div>
        <div className=' grid col-span-4 grid-row-4'>
          <div className=' grid grid-cols-3 col-span-4'>
            <div className='grid justify-end mr-3'>
              07/2021
            </div>
            <div className='col-span-2'>
              <strong>Research Trends at UNAP: a Historical Analysis</strong>
              <p>EasyChair</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-500  w-[100%]" />

      {/* LOGORS OBTENIDOS */}
      <div className='grid grid-cols-6 '>
        <div className='col-span-2'>
          <strong>Logros Obtenidos / Reconocimientos</strong>
        </div>
        <div className=' grid col-span-4 grid-row-4'>
          <div className=' grid grid-cols-3 col-span-4'>
            <div className='grid justify-end mr-3'>
              10/2023
            </div>
            <div className='col-span-2'>
              <strong>Reconocimiento Primeros Puestos</strong>
              <p>Universidad Nacional del Altiplano Puno</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
              09/2019
            </div>
            <div className='col-span-2'>
              <strong>Beca Alto Rendimiento Académico</strong>
              <p>Programa Nacional de Becas y Crédito Educativo del Perú</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-500  w-[100%]" />

      {/* IDIOMAS */}
      <div className='grid grid-cols-6 '>
        <div className='col-span-2'>
          <strong>Idiomas</strong>
        </div>
        <div className=' grid col-span-4 grid-row-4'>
          <div className=' grid grid-cols-3 col-span-4'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Inglés</strong>
              <p>Básico | Aprendiendo 😃 </p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3'>
            </div>
            <div className='col-span-2'>
              <strong>Castellano</strong>
              <p>Avanzado | Lengua Materna</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
