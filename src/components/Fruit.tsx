import type { KeyboardEvent, ReactElement } from 'react'
import type { IFruit } from 'types'
import { useMediaQuery } from 'utils'
import ImageAttribution from './ImageAttribution'

const PREFERRED_IMAGE_WIDTH = 384
const MOBILE_PADDING = 16
const ASPECT_RATIO_WIDTH = 16
const ASPECT_RATIO_HEIGHT = 9
const IMAGE_INDEX_BELOW_THE_FOLD = 3

interface Properties {
	index: number
	fruit: IFruit
	onClick: (fruit: IFruit) => void
}

export default function Fruit({
	index,
	fruit,
	onClick
}: Properties): ReactElement {
	const isTabletAndUp = useMediaQuery('(min-width: 600px)')

	function onKeyDown(event: KeyboardEvent<HTMLElement>): void {
		if (event.key === 'Enter') {
			onClick(fruit)
		}
	}

	const imageWidth = Math.min(
		PREFERRED_IMAGE_WIDTH,
		window.innerWidth - MOBILE_PADDING
	)
	const imageHeight = imageWidth / (ASPECT_RATIO_WIDTH / ASPECT_RATIO_HEIGHT)

	return (
		<div
			data-testid='FruitCard'
			className='overflow-hidden rounded-lg shadow-lg cursor-pointer select-none focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-gray-500 focus:border-gray-300 dark:shadow-2xl'
			role='button'
			tabIndex={0}
			onClick={(): void => onClick(fruit)}
			onKeyDown={onKeyDown}
		>
			<div className='relative'>
				<img
					data-testid='FruitCardImage'
					loading={
						!isTabletAndUp && index >= IMAGE_INDEX_BELOW_THE_FOLD
							? 'lazy'
							: 'eager'
					}
					decoding={
						!isTabletAndUp && index >= IMAGE_INDEX_BELOW_THE_FOLD
							? 'async'
							: 'sync'
					}
					width={imageWidth}
					height={imageHeight}
					style={{
						backgroundColor: fruit.image.color
					}}
					src={`${fruit.image.url}&w=${
						imageWidth * window.devicePixelRatio
					}&h=${imageHeight * window.devicePixelRatio}`}
					alt={fruit.name}
				/>
				<ImageAttribution author={fruit.image.author} />
			</div>
			<h3 data-testid='FruitCardName' className='p-6 text-xl font-bold'>
				{fruit.name}
			</h3>
		</div>
	)
}
