/// <reference types="vite/client" />

import type DetachedWindowApi from 'happy-dom/lib/window/DetachedWindowAPI.js'

declare global {
	var happyDOM: DetachedWindowApi | undefined
}
