import type { ComponentMeta, ComponentStory } from '@storybook/react'
import LoadingOrError from './LoadingOrError'

export default {
	component: LoadingOrError
} as ComponentMeta<typeof LoadingOrError>

export const Loading: ComponentStory<typeof LoadingOrError> = () => (
	<LoadingOrError />
)

export const Error: ComponentStory<typeof LoadingOrError> = () => (
	<LoadingOrError error={new window.Error('Failed to fetch')} />
)
