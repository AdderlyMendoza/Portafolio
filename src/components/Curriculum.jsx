import React from 'react'

export const Curriculum = () => {
  return (
    <div className='flex flex-col px-10 '>
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
              2023 - 2024
            </div>
            <div className='col-span-2'>
              <strong>Editora</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illo, eaque eum quaerat nulla, nemo commodi minima tempora fuga perferendis explicabo ipsum. Totam vel sapiente iusto, inventore obcaecati quis temporibus.</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3 '>
              2025555
            </div>
            <div className='col-span-2'>
              <strong>Editora</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illo, eaque eum quaerat nulla, nemo commodi minima tempora fuga perferendis explicabo ipsum. Totam vel sapiente iusto, inventore obcaecati quis temporibus.</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3 '>
              EDITAR FECHA
            </div>
            <div className='col-span-2'>
              <strong>Editora</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illo, eaque eum quaerat nulla, nemo commodi minima tempora fuga perferendis explicabo ipsum. Totam vel sapiente iusto, inventore obcaecati quis temporibus.</p>
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
              2023 - 2024
            </div>
            <div className='col-span-2'>
              <strong>Editora</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illo, eaque eum quaerat nulla, nemo commodi minima tempora fuga perferendis explicabo ipsum. Totam vel sapiente iusto, inventore obcaecati quis temporibus.</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3 '>
              2025555
            </div>
            <div className='col-span-2'>
              <strong>Editora</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illo, eaque eum quaerat nulla, nemo commodi minima tempora fuga perferendis explicabo ipsum. Totam vel sapiente iusto, inventore obcaecati quis temporibus.</p>
            </div>
          </div>
          <div className=' grid grid-cols-3 col-span-4 mt-3'>
            <div className='grid justify-end mr-3 '>
              EDITAR FECHA
            </div>
            <div className='col-span-2'>
              <strong>Editora</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illo, eaque eum quaerat nulla, nemo commodi minima tempora fuga perferendis explicabo ipsum. Totam vel sapiente iusto, inventore obcaecati quis temporibus.</p>
            </div>
          </div>
        </div>
      </div>
      {/* HABILIDADES */}
    </div>

  )
}
