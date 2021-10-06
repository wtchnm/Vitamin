import { render } from '@testing-library/react'
import type { PropsWithChildren, ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false
		}
	}
})
function Wrapper({ children }: PropsWithChildren<unknown>): ReactElement {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default function renderWithProviders(ui: ReactElement): void {
	render(ui, {
		wrapper: Wrapper
	})
}
