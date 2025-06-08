import {App} from 'App'
import {server} from 'mocks/server'
import {HttpResponse, http} from 'msw'
import {queryClient, render, screen} from 'test-utils'

it('renders apple', async () => {
	const {user} = render(<App />)

	expect(screen.getByText('Loading...')).toBeInTheDocument()

	await expect(screen.findAllByRole('link')).resolves.toHaveLength(6)

	const button = await screen.findByRole('link', {name: /Apple/})
	await user.click(button)

	await expect(screen.findByText('Vitamin K')).resolves.toBeInTheDocument()
})

it('renders home page when trying to access an invalid fruit', async () => {
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
