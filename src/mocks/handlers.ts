import { http, HttpResponse } from 'msw'
import fruits from './data/fruits.json'

const handlers = [
	http.get('https://614c99f03c438c00179faa84.mockapi.io/fruits', () =>
		HttpResponse.json(fruits)
	)
]

export default handlers
