import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import fruits from 'mocks/data/fruits.json'
import Fruit from '../Fruit'

function renderFruit(): { onClick: jest.Mock } {
	const onClick = jest.fn()
	render(<Fruit fruit={fruits[0]} index={0} onClick={onClick} />)
	return { onClick }
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
		const { onClick } = renderFruit()

		screen.getByTestId('FruitCard').focus()
		// No action should be performed
		userEvent.keyboard('a')
		userEvent.keyboard('[Enter]')

		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		expect(onClick).toHaveBeenCalledTimes(1)
		expect(onClick).toHaveBeenCalledWith(fruits[0])
	})
	it('redirect to photographer profile page on image attribute link click', () => {
		const { onClick } = renderFruit()

		userEvent.click(screen.getByRole('link', { name: 'Matheus Cenali' }))

		expect(onClick).toHaveBeenCalledTimes(0)
	})
})
