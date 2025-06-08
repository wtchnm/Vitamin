import {useEffect, useState} from 'react'

export function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia(query)

		function onMediaQueryChange() {
			setMatches(mediaQuery.matches)
		}

		mediaQuery.addEventListener('change', onMediaQueryChange)

		setMatches(mediaQuery.matches)

		return () => {
			mediaQuery.removeEventListener('change', onMediaQueryChange)
		}
	}, [query])

	return matches
}
