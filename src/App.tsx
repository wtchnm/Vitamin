import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Switch>
					<Route exact path='/' component={Gallery} />
					<Route path='/:fruitName' component={Details} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}
