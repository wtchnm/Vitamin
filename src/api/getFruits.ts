import type { IFruit } from 'types'

export default async function getFruits(): Promise<IFruit[]> {
	return (
		await fetch('https://614c99f03c438c00179faa84.mockapi.io/fruits')
	).json() as Promise<IFruit[]>
}
