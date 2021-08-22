import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { DateRangePicker } from 'react-date-range'
import { es } from 'date-fns/locale'

import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)

  const router = useRouter()

  const resetInput = () => {
    setSearchInput('')
    setNoOfGuests(1)
    setStartDate(new Date())
    setEndDate(new Date())
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    })
  }

  const selectedRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
      {/* left */}
      <div
        onClick={() => router.push('/')}
        className='relative flex items-center h-10 cursor-pointer'
      >
        <Image
          alt='airbnb clone'
          src='https://links.evertcode.com/hkj'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* middle search */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400'
          type='text'
          placeholder={placeholder || 'Empieza tu búsqueda'}
        />
        <SearchIcon className='h-8 hidden md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>

      {/* right */}
      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Hazte anfitrión</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>

      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            rangeColors={['#fd5b61']}
            ranges={[selectedRange]}
            minDate={new Date()}
            onChange={handleSelect}
            locale={es}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>Invitados</h2>
            <UsersIcon className='h-5' />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type='number'
              min='1'
              className='w-12 pl-2 outline-none text-lg text-red-400'
            />
          </div>
          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>
              Cancelar
            </button>
            <button onClick={handleSearch} className='flex-grow text-red-400'>
              Buscar
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
