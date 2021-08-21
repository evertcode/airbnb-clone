import { useRouter } from 'next/router'
import { format } from 'date-fns'

import Header from '../components/Header'
import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'

function Search({ searchResults }) {
  const router = useRouter()

  const { location, startDate, endDate, noOfGuests } = router.query

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')

  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ estancias - {range} - para {noOfGuests} número de invitados
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Estancias en {location}
          </h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancelación gratuita</p>
            <p className='button'>Tipo de lugar</p>
            <p className='button'>Precio</p>
            <p className='button'>Recervación inmediata</p>
            <p className='button'>Más filtros</p>
          </div>

          <div className='flex flex-col'>
            {searchResults.map((item) => (
              <InfoCard
                key={item.img}
                location={item.location}
                img={item.img}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults,
    },
  }
}
