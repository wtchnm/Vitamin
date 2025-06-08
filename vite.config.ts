/// <reference types="vitest/config" />

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => ({
	plugins: [tsconfigPaths(), react(), tailwindcss()],
	test: {
		bail: 1,
		clearMocks: true,
		coverage: {
			enabled: true,
			exclude: ['src/main.tsx', 'src/mocks/browser.ts'],
			include: ['src/**/*'],
			reporter: ['text', 'lcov'],
			reportsDirectory: 'coverage',
			thresholds: {
				'100': true
			}
		},
		css: false,
		environment: 'happy-dom',
		globals: true,
		include: ['src/**/*.test.ts?(x)'],
		setupFiles: 'src/test-setup.ts'
	}
}))
