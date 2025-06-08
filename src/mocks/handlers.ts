import {delay, HttpResponse, http} from 'msw'
import fruits from './data/fruits.json' with {type: 'json'}

export const handlers = [
	http.get('/fruits', async () => {
		await delay('real')
		return HttpResponse.json(fruits)
	})
]
