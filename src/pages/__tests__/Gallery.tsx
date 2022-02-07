import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import GalleryPage from 'pages/Gallery'
import renderWithProviders, {
	MOBILE_RESOLUTION_HEIGHT,
	MOBILE_RESOLUTION_WIDTH
} from 'testUtils'

async function renderGalleryPage(): Promise<void> {
	renderWithProviders(<GalleryPage />)
	await waitForElementToBeRemoved(screen.queryByText('Loading...'))
}

describe('<Gallery />', () => {
	it('renders', async () => {
		await renderGalleryPage()

		expect(screen.getByRole('img', { name: 'Apple' })).toHaveAttribute(
			'loading',
			'eager'
		)
		expect(screen.getByText('Banana')).toBeInTheDocument()
	})
	it('renders with mobile resolution', async () => {
		window.resizeTo(MOBILE_RESOLUTION_WIDTH, MOBILE_RESOLUTION_HEIGHT)
		await renderGalleryPage()

		expect(screen.getByRole('img', { name: 'Grape' })).toHaveAttribute(
			'loading',
			'lazy'
		)
	})
})
