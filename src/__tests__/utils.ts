import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'
import { useMediaQuery } from 'utils'

const BELOW_MIN_WIDTH = 599
const MIN_WITDH = 600

describe('useMediaQuery', () => {
	it('renders', () => {
		window.resizeTo(BELOW_MIN_WIDTH, 0)
		const { result } = renderHook(() =>
			useMediaQuery(`(min-width: ${MIN_WITDH}px)`)
		)
		expect(result.current).toBeFalsy()

		act(() => window.resizeTo(MIN_WITDH, 0))

		expect(result.current).toBeTruthy()
	})
})
