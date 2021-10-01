import type { KeyboardEvent, ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import type { IFruit } from 'types'
import { useMediaQuery } from 'utils'
import ImageAttribution from './ImageAttribution'

const PREFERRED_IMAGE_WIDTH = 384
const MOBILE_PADDING = 16
const ASPECT_RATIO_WIDTH = 16
const ASPECT_RATIO_HEIGHT = 9
const IMAGE_INDEX_BELOW_THE_FOLD = 3

interface Properties {
	fruit: IFruit
	index: number
}

export default function Fruit({ fruit, index }: Properties): ReactElement {
	const isTabletAndUp = useMediaQuery('(min-width: 600px)')

	const history = useHistory()
	function onClick(): void {
		window.scrollTo(0, 0)
		history.push(fruit.name.toLowerCase())
	}

	function onKeyDown(event: KeyboardEvent<HTMLElement>): void {
		if (event.key === 'Enter') {
			onClick()
		}
	}

	const imageWidth = Math.min(
		PREFERRED_IMAGE_WIDTH,
		window.innerWidth - MOBILE_PADDING
	)
	const imageHeight = imageWidth / (ASPECT_RATIO_WIDTH / ASPECT_RATIO_HEIGHT)

	return (
		<div
			data-cy='FruitCard'
			className='select-none focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-gray-500 focus:border-gray-300 cursor-pointer overflow-hidden shadow-lg dark:shadow-2xl rounded-lg'
			role='button'
			tabIndex={0}
			onClick={onClick}
			onKeyDown={onKeyDown}
		>
			<div className='relative'>
				<img
					data-cy='FruitCardImage'
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
			<h3 data-cy='FruitCardName' className='p-6 font-bold text-xl'>
				{fruit.name}
			</h3>
		</div>
	)
}
