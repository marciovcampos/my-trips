import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'Contagem',
          slug: 'contagem',
          location: {
            latitude: -19.9386,
            longitude: -44.0529
          }
        },
        {
          id: '2',
          name: 'Recife',
          slug: 'recife',
          location: {
            latitude: -8.0314,
            longitude: -34.5251
          }
        }
      ]}
    />
  )
}
