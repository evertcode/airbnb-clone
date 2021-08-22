import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 px-32 gap-y-10 py-14 bg-gray-100 text-gray-600'>
      <div className='border-b-2 md:border-b-0 pb-4 space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold uppercase'>Acerca de</h5>
        <p>Cómo funciona Airbnb</p>
        <p>Sala de prensa</p>
        <p>Airbnb 2021</p>
        <p>Inversores</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className='border-b-2 md:border-b-0 pb-4 space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold uppercase'>Comunidad</h5>
        <p>Diversidad y sentido de pertenencia</p>
        <p>Accesibilidad</p>
        <p>Colaboradores de Airbnb</p>
        <p>Invitaciones para huéspedes</p>
      </div>

      <div className='border-b-2 md:border-b-0 pb-4 space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold uppercase'>Anfitrión</h5>
        <p>Hospeda en tu alojamiento</p>
        <p>Ofrece una Experiencia en línea</p>
        <p>Ofrece una Experiencia</p>
        <p>Ser un anfitrión responsable</p>
        <p>Centro de recursos</p>
      </div>

      <div className='border-b-2 md:border-b-0 pb-4 space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold uppercase'>Asistencia</h5>
        <p>Centro de Ayuda</p>
        <p>Opciones de Cancelación</p>
        <p>Ayuda para vecios</p>
        <p>Confianza y seguridad</p>
      </div>
    </div>
  )
}

export default Footer
