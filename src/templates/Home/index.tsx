import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Word Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://worldtrips.vercel.app/"
        openGraph={{
          url: 'https://worldtrips.vercel.app/',
          title: 'Word Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://worldtrips.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Word Trips'
            }
          ],
          site_name: 'Word Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
