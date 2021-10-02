import { render } from '@testing-library/react'
import Head from 'components/Head'

test('Render', () => {
	render(<Head title='Head test' />)
	expect(document.title).toBe('Head test')
})
