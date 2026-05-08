import { useState } from 'react';

const EXPERIENCIAS = [
    {
        puesto: "Ingeniero de Sistemas",
        empresa: "Gobierno Regional de Puno",
        fecha: "Agosto | 2025 - Actualidad",
        descripcion: [
            "Colaborando y mejorando sistemas informáticos en la entidad, contribuyendo a la eficiencia y mejora en la gestión administrativa.",
            "Colaboré en la implementación del plan Cero Papel impulsado por el Gobierno Regional, identificando y abordando problemas relacionados con la generación de papeletas de salida para los trabajadores. Desarrollé un sistema digitalizado con funcionalidades de firma digital, eliminando la necesidad de papeletas físicas.",
            "A través del mismo plan, trabajé en la digitalización de los reportes de almacén utilizados en las obras ejecutadas por la entidad, lo que resultó en una reducción del 95% en el consumo de papel."
        ]
    },
    {
        puesto: "Ingeniero de Sistemas",
        empresa: "Dirección de Admisión UNA PUNO",
        fecha: "Marzo | 2024 - Julio | 2025",
        descripcion: [
            "Desarrollé un sistema web para la evaluación de exámenes tipo simulacro en diversas áreas (Ingenierías, Biomédicas y Sociales), con su respectiva ponderación. Este sistema optimizó el proceso de calificación, mejorando la eficiencia y precisión en la evaluación de las pruebas.",
            "Diseñé e implementé un sistema para optimizar la creación de tipos de prueba (P, Q, R, S, T), lo que permitió reducir el tiempo de creación de estos tipos de prueba hasta en un 50%, mejorando significativamente la eficiencia del proceso.",
            "Desarrollé y mantuve la página web de la Dirección, con el objetivo de proporcionar información actualizada y relevante sobre los procesos de admisión a los postulantes, mejorando la comunicación y accesibilidad de los contenidos.",
            "Colaboré en diversas áreas, brindando apoyo en los procesos de inscripción y admisión, así como en otras tareas operativas, contribuyendo a la eficiencia y mejora en la gestión administrativa"
        ]
    },
    {
        puesto: "Ingeniero de Sistemas",
        empresa: "MICON SAC",
        fecha: "Agosto | 2023 - Febrero | 2024",
        descripcion: [
            "Desarrollé sistema de control de asistencias para los trabajadores de la empresa, lo que permitió mejorar la gestión de recursos humanos y optimizar el seguimiento de las horas trabajadas.",
            "Desarrollé un script para automatizar el proceso de generación de documentos, lo que permitió reducir el tiempo de este proceso en un 75%, mejorando la eficiencia y productividad en la gestión de documentos.",
            "Colaboré en diversas áreas, brindando apoyo en las distintas oficinas de la Entidad, contribuyendo a la eficiencia y mejora en la gestión administrativa"
        ]
    },
    {
        puesto: "Practicante como Ingeniero de Sistemas",
        empresa: "Gobierno Regional de Puno",
        fecha: "Abril - Agosto | 2023",
        descripcion: [
            "Desarrollé un sistema para aleatorizar exámenes de admisión que ayudó a reducir el tiempo de este proceso.",
            "Implementé un sistema para calificar exámenes de tipo simulacro de manera automatizada.",
            "Realicé la página web de la Dirección para mantener informado a los postulantes.",
            "Colaboré en los procesos de inscripción y admisión.",
            "Proporcioné soporte y mantenimiento de software y hardware en la entidad."
        ]
    },
    {
        puesto: "Practicante como Ingeniero de Sistemas",
        empresa: "Tribunal de Honor UNA PUNO",
        fecha: "Agosto - Noviembre | 2022",
        descripcion: [
            "Desarrollé un sistema para el manejo de expedientes de la oficina, reduciendo significativamente los tiempos de búsqueda de expedientes.",
            "Realicé la página web del tribunal para mantener informado a los estudiantes y docentes de la UNA PUNO.",
            "Proporcioné soporte y mantenimiento de software y hardware en la entidad."
        ]
    }
]

const ExperienciaItem = ({ puesto, empresa, fecha, descripcion }) => (
    <div>
        <li className="mb-10 ml-6 md:flex md:flex-nowrap">
            <div className="md:w-1/3">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-1 ring-gray-700 bg-stone-900">
                    <svg className="w-2.5 h-2.5 text-blue-900 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-blue-500">{puesto}</h3>
                <time className="block mb-2 text-md font-normal leading-none text-gray-400">{empresa}</time>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{fecha}</time>
            </div>
            <div className="w-full md:ml-4">
                <div className="md:text-base text-sm">
                    {descripcion.map((linea, index) => (
                        <p key={index} className="mb-2 text-md text-gray-100">{linea}</p>
                    ))}
                </div>
            </div>
        </li>
    </div>
)

export const Experiencia = () => {
    const [mostrarTodos, setMostrarTodos] = useState(false)

    const visibles = mostrarTodos ? EXPERIENCIAS : EXPERIENCIAS.slice(0, 2)
    const restantes = EXPERIENCIAS.length - 2

    return (
        <div className="flex flex-col items-center py-8 mb-12 px-4">
            <ol className="relative border-l-2 border-gray-700 max-w-3xl w-full">
                {visibles.map((exp, i) => (
                    <ExperienciaItem key={i} {...exp} />
                ))}
            </ol>

            {EXPERIENCIAS.length > 2 && (
                <button
                    onClick={() => setMostrarTodos(!mostrarTodos)}
                    className="mt-2 px-6 py-2 text-sm font-semibold text-gray-400 border border-stone-600 rounded-md hover:border-blue-500 hover:text-blue-400 transition-colors"
                >
                    {mostrarTodos ? 'Ver menos' : `Ver ${restantes} experiencia${restantes > 1 ? 's' : ''} más`}
                </button>
            )}
        </div>
    )
}
