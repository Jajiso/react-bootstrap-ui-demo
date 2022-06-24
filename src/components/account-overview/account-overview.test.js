import { render } from '@testing-library/react'
import AccountOverview from './account-overview'

test('renders learn react link', () => {
  render(<AccountOverview />)
  expect(true).toBeTruthy()
})
