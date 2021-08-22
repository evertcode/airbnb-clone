// global SEO config
const title =
  'Airbnb clon: alojamientos vacacionales, cabañas, casas en la playa, alojamientos únicos y experiencias'
const description =
  'Encuentra alojamientos vacacionales, cabañas, casas en la Todo es posible gracias a los anfitriones en Airbnb.'

const SEO = {
  title,
  description,
  canonical: 'https://airbnb.evertcode.com',
  openGraph: {
    type: 'website',
    locale: 'es-MX',
    url: 'https://airbnb.evertcode.com',
    title,
    description,
    images: [
      {
        url: 'https://links.evertcode.com/cqo',
        alt: title,
        width: 1200,
        height: 627,
      },
    ],
  },
  twitter: {
    handle: '@evertcode',
    site: '@evertcode',
    cardType: 'summary_large_image',
  },
}

export default SEO
