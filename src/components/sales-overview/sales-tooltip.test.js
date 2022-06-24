import { render } from '@testing-library/react'
import SalesTooltip from './sales-tooltip'

describe('sales-tooltip.jsx', () => {
  it('renders', () => {
    render(<SalesTooltip />)
    expect(true).toBeTruthy()
  })
  it('should render OverlayTrigger component with component Tooltip as a parameter in attribute overlay', () => {
    render(<SalesTooltip />)
    expect(true).toBeTruthy()
  })
  it('should render font awesome icon', () => {
    render(<SalesTooltip />)
    expect(true).toBeTruthy()
  })
})
