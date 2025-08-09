import {HttpResponse, http} from 'msw'
import {App} from './App'
import {server} from './mocks/server'
import {queryClient, render, screen} from './test-utils'

const widths = [360, 1280]

it.each(widths)(
	'should show a list of fruits and then select one with %o viewport',
	async width => {
		window.happyDOM?.setViewport({width, height: 720})
		const {user} = render(<App />, {route: '/'})

		await expect(screen.findAllByRole('link')).resolves.toHaveLength(6)

		const button = await screen.findByRole('link', {name: /Apple/})
		await user.click(button)

		await expect(screen.findByText('Vitamin K')).resolves.toBeInTheDocument()
	}
)

it('redirects home page when trying to access an invalid fruit', async () => {
	render(<App />, {route: '/invalid-fruit'})

	await expect(screen.findAllByRole('link')).resolves.toHaveLength(6)
})

it('renders error', async () => {
	queryClient.clear()
	server.use(http.get('/fruits', () => new HttpResponse(null, {status: 500})))
	render(<App />)

	await expect(
		screen.findByText('Failed to fetch')
	).resolves.toBeInTheDocument()
})
