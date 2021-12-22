import { render, screen } from '@testing-library/react'
import LoadingOrError from '../LoadingOrError'

describe('<LoadingOrError />', () => {
	it('renders', async () => {
		render(<LoadingOrError />)

		expect(await screen.findByText('Loading...')).toBeInTheDocument()
	})
	it('renders with an error message', async () => {
		render(<LoadingOrError error={new Error('Failed to fetch')} />)

		expect(await screen.findByText('Failed to fetch')).toBeInTheDocument()
	})
})
