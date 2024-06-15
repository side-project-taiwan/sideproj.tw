import { render } from '@testing-library/react'
import Page from '../page'

describe('Root page', () => {
  test('Should render logo correctly', async () => {
    const { getByLabelText } = render(<Page />)

    expect(getByLabelText('banner-carousel')).toBeVisible()
  })
})
