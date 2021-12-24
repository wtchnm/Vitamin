const tsconfigPaths = require('vite-tsconfig-paths').default

module.exports = {
	stories: ['../src/**/*.stories.tsx'],
	addons: [
		'@storybook/addon-controls',
		'@storybook/addon-actions',
		'@storybook/addon-viewport'
	],
	framework: '@storybook/react',
	core: {
		builder: 'storybook-builder-vite'
	},
	features: {
		storyStoreV7: true
	},
	async viteFinal(config) {
		config.plugins.push(tsconfigPaths())
		return config
	}
}
