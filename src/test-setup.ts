import '@testing-library/jest-dom/vitest'
import {server} from './mocks/server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
