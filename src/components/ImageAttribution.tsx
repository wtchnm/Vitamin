interface Properties {
	author: string
}

export function ImageAttribution({author}: Properties) {
	return (
		<>
			<div className='absolute top-0 h-full w-full bg-linear-to-b from-transparent via-transparent to-current text-black text-opacity-50' />
			<div className='absolute right-1 bottom-1 px-1 text-sm text-white'>
				Photo by {author} on Unsplash
			</div>
		</>
	)
}
