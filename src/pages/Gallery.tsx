import getFruits from 'api/getFruits'
import Fruit from 'components/Fruit'
import Head from 'components/Head'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'
import type { IFruit } from 'types'

export default function GalleryPage(): ReactElement {
	const history = useHistory()
	function onClick(fruit: IFruit): void {
		window.scrollTo(0, 0)
		history.push(fruit.name.toLowerCase())
	}

	const { isLoading, isError, error, data } = useQuery('fruits', getFruits)
	if (isLoading || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<>
			<Head title='Vitamin' />
			<div className='m-2 md:m-0 min-h-screen grid gap-2 place-content-center grid-cols-[minmax(0,384px)] md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				{data?.map((fruit, index) => (
					<Fruit
						key={`FruitCard-${fruit.name}`}
						index={index}
						fruit={fruit}
						onClick={onClick}
					/>
				))}
			</div>
		</>
	)
}
