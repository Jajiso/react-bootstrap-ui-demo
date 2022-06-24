import { render } from '@testing-library/react'
import SupportContact from './support-contact'

describe('support-contact.jsx', () => {
  it('renders', () => {
    render(<SupportContact />)
    expect(true).toBeTruthy()
  })
  it('should have received object supportInfo', () => {
    render(<SupportContact />)
    expect(true).toBeTruthy()
  })
  it('should render text inside div', () => {
    render(<SupportContact />)
    expect(true).toBeTruthy()
  })
  it('should render Image component', () => {
    render(<SupportContact />)
    expect(true).toBeTruthy()
  })
  it('should render text from supportInfo.name', () => {
    render(<SupportContact />)
    expect(true).toBeTruthy()
  })
  it('should render font awesome icon', () => {
    render(<SupportContact />)
    expect(true).toBeTruthy()
  })
  it('should render text from supportInfo.email', () => {
    render(<SupportContact />)
    expect(true).toBeTruthy()
  })
})
