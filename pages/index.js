import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>
          Airbnb clon: alojamientos vacacionales, cabañas, casas en la playa,
          alojamientos únicos y experiencias
        </title>
        <link rel='icon' type='image/png' href='/favicon.png' />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>
            Descubre alojamientos cerca de ti
          </h2>

          {/* Pull some data from a server */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData.map(({ location, img, distance }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>
            Vive en cualquier lugar del mundo
          </h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide pt-3'>
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://links.evertcode.com/7hp'
          title='Anímate a ser anfitrión'
          description='Comparte tu espacio para ganar dinero extra y aprovechar nuevas oportunidades.'
          buttonText='Más información'
        />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.evertcode.com/xkz').then(
    (res) => res.json()
  )

  const cardsData = await fetch('https://links.evertcode.com/r9n').then((res) =>
    res.json()
  )

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
