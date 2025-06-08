/// <reference types="vite/client" />

import type DetachedWindowApi from 'happy-dom/lib/window/DetachedWindowAPI.js'

declare global {
	interface Window {
		happyDOM?: DetachedWindowApi
	}
}
