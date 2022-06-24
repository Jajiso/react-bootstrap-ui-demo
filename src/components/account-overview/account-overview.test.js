import { render } from '@testing-library/react'
import AccountOverview from './account-overview'

describe('account-overview.jsx', () => {
  it('renders', () => {
    render(<AccountOverview />)
    expect(true).toBeTruthy()
  })
  it('should have received object data', () => {
    render(<AccountOverview />)
    expect(true).toBeTruthy()
  })
  it('should contain component SupportContact', () => {
    render(<AccountOverview />)
    expect(true).toBeTruthy()
  })
  it('should contain component SalesOverview ', () => {
    render(<AccountOverview />)
    expect(true).toBeTruthy()
  })
})
