import React from 'react'

export const SobreMi = () => {
    return (
        <div className="text-gray-100 mt-4 mb-8 py-4 [&>p>strong]:text-blue-500 reveal">
            <p>
                Soy Ingeniero de Sistemas con <strong>+3 años</strong> de experiencia en el desarrollo de aplicaciones web y de escritorio. Me especializo en la implementación de arquitecturas basadas en MVC utilizando <strong>Laravel y Django</strong>  para el Backend, y desarrollo interfaces interactivas con <strong>Vue.js y React.js </strong> en el Frontend. Para los estilos, empleo <strong>Tailwind CSS</strong>, lo que me permite crear interfaces modernas y altamente personalizables.
            </p>
            <br />
            <p>
                Mi enfoque en el desarrollo está basado en las mejores prácticas, utilizando <strong>Git</strong> para el control de versiones y trabajando en entornos colaborativos y remotos con equipos multidisciplinarios. Además, tengo experiencia aplicando metodologías ágiles como <strong>Scrum y XP</strong>, lo que me permite entregar soluciones de manera iterativa, enfocándome en la calidad y la mejora continua. Tengo dominio de bases de datos, especialmente con <strong>SQL</strong>, y experiencia utilizando <strong>Docker</strong> para la contenerización y despliegue de aplicaciones en servidores <strong>VPS</strong>. Mi objetivo es mantenerme actualizado con las últimas tecnologías y enfoques para desarrollar aplicaciones robustas, escalables y fáciles de mantener.
            </p>

            <div className='mt-8 flex justify-between text-gray-400'>
                <p>Adderly Mendoza | 2025</p>
                <a href="mailto:aderly19xd@gmail.com" className='hover:text-gray-500'>Contacto</a>
            </div>

        </div>
    )
}
