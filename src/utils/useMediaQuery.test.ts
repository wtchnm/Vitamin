import {act, renderHook} from '@testing-library/react'
import {useMediaQuery} from './useMediaQuery'

const BELOW_MIN_WIDTH = 599
const MIN_WITDH = 600

describe('useMediaQuery', () => {
	it('renders', () => {
		window.happyDOM?.setViewport({
			height: BELOW_MIN_WIDTH,
			width: BELOW_MIN_WIDTH
		})

		const {result} = renderHook(() =>
			useMediaQuery(`(min-width: ${MIN_WITDH}px)`)
		)
		expect(result.current).toBeFalsy()

		act(() =>
			window.happyDOM?.setViewport({height: MIN_WITDH, width: MIN_WITDH})
		)

		expect(result.current).toBeTruthy()
	})
})
