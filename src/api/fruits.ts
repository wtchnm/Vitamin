import * as v from 'valibot'

const Fruit = v.object({
	name: v.string(),
	image: v.object({author: v.string(), color: v.string(), url: v.string()}),
	metadata: v.array(v.object({name: v.string(), value: v.string()}))
})
export type Fruit = v.InferOutput<typeof Fruit>

const Fruits = v.array(Fruit)

export async function getFruits() {
	const response = await fetch('/fruits')
	if (!response.ok) {
		throw new Error('Failed to fetch')
	}
	return v.parse(Fruits, await response.json())
}
