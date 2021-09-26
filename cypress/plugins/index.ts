import * as codeCoverageTask from '@cypress/code-coverage/task'

const pluginConfig: Cypress.PluginConfig = (on, config) => {
	void codeCoverageTask(on, config)
	return config
}

export default pluginConfig
