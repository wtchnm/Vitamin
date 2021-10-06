import '@testing-library/jest-dom'
import server from 'mocks/server'
import 'whatwg-fetch'

beforeAll(() => {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: jest.fn().mockImplementation(() => ({
			matches: false,
			addEventListener: jest.fn(),
			removeEventListener: jest.fn()
		}))
	})

	server.listen({ onUnhandledRequest: 'error' })
})

afterEach(() => {
	server.resetHandlers()
})

afterAll(() => {
	server.close()
})
