import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import fruits from 'mocks/data/fruits.json'
import type { useHistory } from 'react-router'
import Fruit from '../Fruit'

const mockHistoryPush = jest.fn()
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: (): Partial<ReturnType<typeof useHistory>> => ({
		push: mockHistoryPush
	})
}))

function renderFruit(): void {
	render(<Fruit fruit={fruits[0]} index={0} />)
}

describe('<Fruit />', () => {
	it('renders', () => {
		renderFruit()

		expect(screen.getByText('Photo by')).toBeInTheDocument()
		expect(
			screen.getByRole('link', { name: 'Matheus Cenali' })
		).toBeInTheDocument()
		expect(screen.getByText('on')).toBeInTheDocument()
		expect(screen.getByRole('link', { name: 'Unsplash' })).toBeInTheDocument()

		expect(screen.getByText('Apple')).toBeInTheDocument()
	})
	it('redirect to fruit details page on enter', () => {
		renderFruit()

		screen.getByTestId('FruitCard').focus()
		// No action should be performed
		userEvent.keyboard('a')
		userEvent.keyboard('[Enter]')

		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		expect(mockHistoryPush).toHaveBeenCalledTimes(1)
		expect(mockHistoryPush).toHaveBeenCalledWith('apple')
	})
	it('redirect to photographer profile page on image attribute link click', () => {
		renderFruit()

		userEvent.click(screen.getByRole('link', { name: 'Matheus Cenali' }))

		expect(mockHistoryPush).toHaveBeenCalledTimes(0)
	})
})
