import { screen } from '@testing-library/react'
import GalleryPage from 'pages/Gallery'
import renderWithProviders from 'testUtils'

describe('<Gallery />', () => {
	it('render', async () => {
		renderWithProviders(<GalleryPage />)
		expect(screen.getByText('Loading...')).toBeInTheDocument()

		await expect(screen.findByText('Apple')).resolves.toBeInTheDocument()
		expect(screen.getByText('Banana')).toBeInTheDocument()
	})
})
