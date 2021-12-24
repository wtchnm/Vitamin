import type { ComponentMeta, ComponentStory } from '@storybook/react'
import fruits from '../mocks/data/fruits.json'
import Fruit from './Fruit'

export default {
	component: Fruit,
	argTypes: {
		onClick: { action: 'clicked' }
	}
} as ComponentMeta<typeof Fruit>

export const Default: ComponentStory<typeof Fruit> = properties => (
	<div className='w-80'>
		<Fruit {...properties} />
	</div>
)
Default.args = {
	index: 0,
	fruit: fruits[0]
}
