import { rest } from 'msw'

const handlers = [
	rest.get(
		'https://614c99f03c438c00179faa84.mockapi.io/fruits',
		(_, response, context) =>
			response(
				context.json([
					{
						name: 'Apple',
						image: {
							author: {
								name: 'Matheus Cenali',
								url: 'https://unsplash.com/@cenali'
							},
							color: '#bb3335',
							url: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?fit=crop&q=60&auto=format'
						},
						metadata: [
							{
								name: 'Vitamin A',
								value: '3 μg'
							},
							{
								name: 'Vitamin B1',
								value: '0.017 mg'
							}
						]
					},
					{
						name: 'Banana',
						image: {
							author: {
								name: 'Ilona Frey',
								url: 'https://unsplash.com/@mensur'
							},
							color: '#d6c218',
							url: 'https://images.unsplash.com/photo-1606050627722-3646950540ca?fit=crop&q=60&auto=format'
						},
						metadata: [
							{
								name: 'Vitamin B1',
								value: '0.031 mg'
							},
							{
								name: 'Vitamin B2',
								value: '0.073 mg'
							}
						]
					}
				])
			)
	)
]

export default handlers
