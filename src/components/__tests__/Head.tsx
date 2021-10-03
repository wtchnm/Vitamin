import { render } from '@testing-library/react'
import Head from 'components/Head'

describe('<Head />', () => {
	it('render', () => {
		render(<Head title='Head test' />)
		expect(document.title).toBe('Head test')
	})
})
