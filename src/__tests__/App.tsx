import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from 'App'
import renderWithProviders from 'testUtils'

describe('<App />', () => {
	it('renders', async () => {
		window.history.pushState({}, 'Home', '/')
		renderWithProviders(<App />)

		expect(screen.getByText('Loading...')).toBeInTheDocument()
		expect(await screen.findByText('Apple')).toBeInTheDocument()
		userEvent.click(screen.getByText('Apple'))

		expect(screen.getByText('Loading...')).toBeInTheDocument()
		expect(
			await screen.findByText('Vitamins per 100 g (3.5 oz)')
		).toBeInTheDocument()
	})
})
