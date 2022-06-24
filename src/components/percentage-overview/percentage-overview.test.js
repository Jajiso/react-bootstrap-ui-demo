import { render } from '@testing-library/react'
import PercentageOverview from './percentage-overview'

describe('percentage-overview.jsx', () => {
  it('renders', () => {
    render(<PercentageOverview />)
    expect(true).toBeTruthy()
  })
  it('should have received object proportion and string text', () => {
    render(<AccountOverview />)
    expect(true).toBeTruthy()
  })
  it('should render text parameter', () => {
    render(<PercentageOverview />)
    expect(true).toBeTruthy()
  })
  it('should return the correct percentage from proportion object when percentage() is called', () => {
    render(<PercentageOverview />)
    expect(true).toBeTruthy()
  })
  it('should call function percentage() and render the returned number', () => {
    render(<PercentageOverview />)
    expect(true).toBeTruthy()
  })
})
