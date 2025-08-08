import process from 'node:process'
import {defineConfig, devices} from '@playwright/test'

export default defineConfig({
	forbidOnly: Boolean(process.env.CI),
	fullyParallel: true,
	projects: [
		{
			name: 'chromium',
			use: {...devices['Desktop Chrome']}
		},
		{
			name: 'Mobile Chrome',
			use: {...devices['Pixel 5']}
		}
	],
	reporter: 'html',
	retries: process.env.CI ? 2 : 0,
	testDir: './tests',
	use: {
		baseURL: 'http://localhost:5173',
		trace: 'on-first-retry'
	},
	webServer: {
		command: 'pnpm dev',
		reuseExistingServer: !process.env.CI,
		url: 'http://localhost:5173'
	},
	workers: process.env.CI ? 1 : undefined
})
