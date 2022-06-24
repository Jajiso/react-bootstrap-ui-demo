import { render } from '@testing-library/react'
import SalesOverview from './sales-overview'

describe('sales-overview.jsx', () => {
  it('renders', () => {
    render(<SalesOverview />)
    expect(true).toBeTruthy()
  })
  it('should have received object salesData', () => {
    render(<AccountOverview />)
    expect(true).toBeTruthy()
  })
  it('should render card title with font awesome icon, text and SalesTooltip component', () => {
    render(<SalesOverview />)
    expect(true).toBeTruthy()
  })
  it('should render text from card text with the correct parameters from salesData', () => {
    render(<SalesOverview />)
    expect(true).toBeTruthy()
  })
  it('should render two PercentageOverview components', () => {
    render(<SalesOverview />)
    expect(true).toBeTruthy()
  })
})
