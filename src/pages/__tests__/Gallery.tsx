import { screen } from '@testing-library/react'
import GalleryPage from 'pages/Gallery'
import renderWithProviders, {
	MOBILE_RESOLUTION_HEIGHT,
	MOBILE_RESOLUTION_WIDTH
} from 'testUtils'

async function renderGalleryPage(): Promise<void> {
	renderWithProviders(<GalleryPage />)
}

describe('<Gallery />', () => {
	it('renders', async () => {
		await renderGalleryPage()

		await expect(
			screen.findByRole('img', { name: 'Apple' })
		).resolves.toHaveAttribute('loading', 'eager')
		expect(screen.getByText('Banana')).toBeInTheDocument()
	})
	it('renders with mobile resolution', async () => {
		window.resizeTo(MOBILE_RESOLUTION_WIDTH, MOBILE_RESOLUTION_HEIGHT)
		await renderGalleryPage()

		await expect(
			screen.findByRole('img', { name: 'Grape' })
		).resolves.toHaveAttribute('loading', 'lazy')
	})
})
