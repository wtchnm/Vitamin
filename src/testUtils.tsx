import { render } from '@testing-library/react'
import type { PropsWithChildren, ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			cacheTime: 0
		}
	}
})
function Wrapper({ children }: PropsWithChildren<unknown>): ReactElement {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>{children}</BrowserRouter>
		</QueryClientProvider>
	)
}

export const DESKTOP_RESOLUTION_WIDTH = 1280
export const DESKTOP_RESOLUTION_HEIGHT = 800

export const MOBILE_RESOLUTION_WIDTH = 414
export const MOBILE_RESOLUTION_HEIGHT = 896

export default function renderWithProviders(ui: ReactElement): void {
	render(ui, {
		wrapper: Wrapper
	})
}
