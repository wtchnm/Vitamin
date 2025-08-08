import {Link} from 'react-router'
import type {Fruit as FruitType} from '@/api/fruits'
import {useMediaQuery} from '@/utils/useMediaQuery'
import {ImageAttribution} from './ImageAttribution'

const PREFERRED_IMAGE_WIDTH = 384
const MOBILE_PADDING = 16
const ASPECT_RATIO_WIDTH = 16
const ASPECT_RATIO_HEIGHT = 9
const IMAGE_INDEX_BELOW_THE_FOLD = 3

interface Properties {
	fruit: FruitType
	index: number
}

export function Fruit({fruit, index}: Properties) {
	const isTabletAndUp = useMediaQuery('(min-width: 600px)')

	const imageWidth = Math.min(
		PREFERRED_IMAGE_WIDTH,
		window.innerWidth - MOBILE_PADDING
	)
	const imageHeight = imageWidth / (ASPECT_RATIO_WIDTH / ASPECT_RATIO_HEIGHT)

	return (
		<Link
			className='select-none rounded-lg shadow-lg focus:outline-3 focus:outline-gray-500 dark:shadow-2xl'
			to={fruit.name.toLowerCase()}
		>
			<div className='relative'>
				<img
					alt={fruit.name}
					decoding={
						!isTabletAndUp && index >= IMAGE_INDEX_BELOW_THE_FOLD
							? 'async'
							: 'sync'
					}
					height={imageHeight}
					loading={
						!isTabletAndUp && index >= IMAGE_INDEX_BELOW_THE_FOLD
							? 'lazy'
							: 'eager'
					}
					src={`${fruit.image.url}&w=${
						imageWidth * window.devicePixelRatio
					}&h=${imageHeight * window.devicePixelRatio}`}
					style={{
						backgroundColor: fruit.image.color
					}}
					width={imageWidth}
				/>
				<ImageAttribution author={fruit.image.author} />
			</div>
			<h3 className='p-6 font-bold text-xl'>{fruit.name}</h3>
		</Link>
	)
}
