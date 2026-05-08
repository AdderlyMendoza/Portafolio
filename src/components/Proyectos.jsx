import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaBook } from 'react-icons/fa';
import { SiTrello } from 'react-icons/si';
import proyectos from "../proyectos.json";

const FILTER_TAGS = ['Todos', 'React Js', 'Django', 'Laravel', 'Angular', 'VueJs', 'Python', "Docker"]

const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(min-width: 640px)').matches)
    useEffect(() => {
        const mq = window.matchMedia('(min-width: 640px)')
        const handler = (e) => setIsDesktop(e.matches)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])
    return isDesktop
}

const getLinkIcon = (nombre) => {
    const n = nombre.toLowerCase()
    if (n.includes('github')) return <FaGithub className="mr-1.5 shrink-0" />
    if (n.includes('trello')) return <SiTrello className="mr-1.5 shrink-0" />
    if (n.includes('public')) return <FaBook className="mr-1.5 shrink-0" />
    return <FaExternalLinkAlt className="mr-1.5 shrink-0 text-[10px]" />
}

const ProyectoCard = ({ proyecto }) => (
    <div className="flex flex-col bg-stone-800 rounded-xl overflow-hidden border border-stone-700 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-900/30 hover:-translate-y-1 transition-all duration-300">
        <div className="h-1 bg-gradient-to-r from-blue-700 to-blue-400" />

        <div className="flex flex-col flex-1 p-5">
            <div className="flex flex-wrap gap-1.5 mb-3">
                {proyecto.lenguajes.map((lang, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs font-medium bg-stone-700 text-blue-300 rounded-md">
                        {lang}
                    </span>
                ))}
            </div>

            <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                {proyecto.titulo}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-4 flex-1">
                {proyecto.descripcion}
            </p>

            {proyecto.links.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-stone-700">
                    {proyecto.links.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs font-semibold text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            {getLinkIcon(link.nombre)}
                            {link.nombre}
                        </a>
                    ))}
                </div>
            )}
        </div>
    </div>
)

export const Proyectos = () => {
    const [filtro, setFiltro] = useState('Todos')
    const [mostrarTodos, setMostrarTodos] = useState(false)
    const isDesktop = useIsDesktop()

    const inicial = isDesktop ? 3 : 2
    const tags = FILTER_TAGS.filter(t => t === 'Todos' || proyectos.some(p => p.lenguajes.includes(t)))
    const filtrados = filtro === 'Todos' ? proyectos : proyectos.filter(p => p.lenguajes.includes(filtro))
    const visibles = mostrarTodos ? filtrados : filtrados.slice(0, inicial)
    const restantes = filtrados.length - inicial

    const handleFiltro = (tag) => {
        setFiltro(tag)
        setMostrarTodos(false)
    }

    return (
        <div className="pb-8 reveal mb-12 mt-4">
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => handleFiltro(tag)}
                        className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors ${
                            filtro === tag
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'bg-transparent border-stone-600 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {visibles.map((proyecto, index) => (
                    <ProyectoCard proyecto={proyecto} key={index} />
                ))}
            </div>

            {filtrados.length === 0 && (
                <p className="text-gray-500 text-center py-12 text-sm">
                    No hay proyectos con esta tecnología.
                </p>
            )}

            {filtrados.length > inicial && (
                <div className="flex items-center justify-center mt-8">
                    <button
                        onClick={() => setMostrarTodos(!mostrarTodos)}
                        className="px-6 py-2 bg-blue-700 text-white text-sm font-semibold rounded-md hover:bg-blue-800 transition-colors"
                    >
                        {mostrarTodos ? 'Mostrar menos' : `Mostrar ${restantes} más`}
                    </button>
                </div>
            )}
        </div>
    )
}
