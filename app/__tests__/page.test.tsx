import { render } from '@testing-library/react'
import Page from '../page'

describe('Root page', () => {
  test('Should render logo correctly', async () => {
    const { getByAltText } = render(<Page />)

    expect(getByAltText('logo')).toBeInTheDocument()
  })
})
