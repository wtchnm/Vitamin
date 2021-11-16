import { act, render } from '@testing-library/react'
import { useMediaQuery } from 'utils'

const BELOW_MIN_WIDTH = 599
const MIN_WITDH = 600

describe('useMediaQuery', () => {
	it('renders', () => {
		function Test(): JSX.Element {
			const matches = useMediaQuery(`(min-width: ${MIN_WITDH}px)`)

			return <div>matches: {String(matches)}</div>
		}
		window.resizeTo(BELOW_MIN_WIDTH, 0)
		const { container } = render(<Test />)
		expect(container).toHaveTextContent('matches: false')

		act(() => window.resizeTo(MIN_WITDH, 0))

		expect(container).toHaveTextContent('matches: true')
	})
})
