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

export const DESKTOP_RESOLUTION_WIDTH = 1280
export const DESKTOP_RESOLUTION_HEIGHT = 800

export const MOBILE_RESOLUTION_WIDTH = 414
export const MOBILE_RESOLUTION_HEIGHT = 896

export default function renderWithProviders(
	ui: ReactElement,
	includeRouter = true
): void {
	render(ui, {
		wrapper: ({ children }: PropsWithChildren<unknown>): ReactElement => (
			<QueryClientProvider client={queryClient}>
				{includeRouter ? <BrowserRouter>{children}</BrowserRouter> : children}
			</QueryClientProvider>
		)
	})
}
