const ExperienciaItem = ({ puesto, empresa, fecha, descripcion }) => {
    return (
        <div className="reveal">
            <li className="mb-10 ml-6 flex flex-nowrap ">
                <div className="w-1/3">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-1 ring-gray-700 bg-stone-900">
                        <svg className="w-2.5 h-2.5 text-blue-900 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-blue-500">
                        {puesto}
                    </h3>
                    <time className="block mb-2 text-md font-normal leading-none text-gray-400">
                        {empresa}
                    </time>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                        {fecha}
                    </time>
                </div>

                <div className="w-full ml-4">
                    <p className="font-normal">
                        {/* {descripcion} */}
                        {descripcion.map((linea, index) => (
                            <p key={index} className="mb-2 text-md text-gray-100">
                                {linea}
                            </p>
                        ))}
                    </p>
                </div>

            </li>
        </div>

    );
};

export const Experiencia = () => {
    return (
        <div className="flex justify-center py-8 mb-12">
            <ol className="relative border-l-2 border-gray-700 max-w-3xl w-full">
                <ExperienciaItem
                    puesto="Ingeniero de Sistemas"
                    empresa="Dirección de Admisión UNA PUNO"
                    fecha="Marzo - Diciembre | 2024"
                    descripcion={[
                        "Desarrollé un sistema web para la evaluación de exámenes tipo simulacro en diversas áreas (Ingenierías, Biomédicas y Sociales), con su respectiva ponderación. Este sistema optimizó el proceso de calificación, mejorando la eficiencia y precisión en la evaluación de las pruebas.",
                        "Diseñé e implementé un sistema para optimizar la creación de tipos de prueba (P, Q, R, S, T), lo que permitió reducir el tiempo de creación de estos tipos de prueba hasta en un 50%, mejorando significativamente la eficiencia del proceso.",
                        "Desarrollé y mantuve la página web de la Dirección, con el objetivo de proporcionar información actualizada y relevante sobre los procesos de admisión a los postulantes, mejorando la comunicación y accesibilidad de los contenidos.",
                        "Colaboré en diversas áreas, brindando apoyo en los procesos de inscripción y admisión, así como en otras tareas operativas, contribuyendo a la eficiencia y mejora en la gestión administrativa"
                    ]}
                />
                <ExperienciaItem
                    puesto="Practicante como Ingeniero de Sistemas"
                    empresa="Gobierno Regional de Puno"
                    fecha="Abril - Agosto | 2023"
                    descripcion={[
                        "Desarrollé un sistema para aleatorizar exámenes de admisión que ayudó a reducir el tiempo de este proceso.",
                        "Implementé un sistema para calificar exámenes de tipo simulacro de manera automatizada.",
                        "Realicé la página web de la Dirección para mantener informado a los postulantes.",
                        "Colaboré en los procesos de inscripción y admisión.",
                        "Proporcioné soporte y mantenimiento de software y hardware en la entidad."
                    ]}
                />
                <ExperienciaItem
                    puesto="Practicante como Ingeniero de Sistemas"
                    empresa="Tribunal de Honor UNA PUNO"
                    fecha="Agosto - Noviembre | 2022"
                    descripcion={[
                        "Desarrollé un sistema para el manejo de expedientes de la oficina, reduciendo significativamente los tiempos de búsqueda de expedientes.",
                        "Realicé la página web del tribunal para mantener informado a los estudiantes y docentes de la UNA PUNO.",
                        "Proporcioné soporte y mantenimiento de software y hardware en la entidad."
                    ]}
                />
            </ol>
        </div>
    );
};
