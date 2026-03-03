interface Properties {
	error?: unknown
}

export function LoadingOrError({error}: Properties) {
	return (
		<div className='flex min-h-screen items-center justify-center'>
			<h1 className='text-xl'>
				{error instanceof Error ? error.message : 'Loading...'}
			</h1>
		</div>
	)
}
