import Map from '.'
import { render, screen } from '@testing-library/react'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place ', () => {
    const place = {
      id: '1',
      name: 'Contagem',
      slug: 'contagem',
      location: {
        latitude: -19.9386,
        longitude: -44.0529
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Recife',
      slug: 'recife',
      location: {
        latitude: -8.0314,
        longitude: -34.5251
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/contagem/i)).toBeInTheDocument()
    expect(screen.getByTitle(/recife/i)).toBeInTheDocument()
  })
})
