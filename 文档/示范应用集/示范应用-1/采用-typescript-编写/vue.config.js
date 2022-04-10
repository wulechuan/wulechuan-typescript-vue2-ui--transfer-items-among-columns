const pathUtils = require('path')
function resolvePathOfThisProject (relativePath) { return pathUtils.join(__dirname, relativePath) }

const {
    buildVueConfig,
} = require('./vue.config.wlc-common')

module.exports = buildVueConfig({
    dev: {
        server: {
            defaultPort: 8119,
        },
    },

    distribution: {
        outputRootFolderPath: 'dist',
    },

    webpackAliases: {
        decideMoreAliases (webpackConfig) {
            const modulePathOfAxiosInstances = resolvePathOfThisProject('./node_modules/vue')

            webpackConfig.resolve.alias
                .set('vue', modulePathOfAxiosInstances)
        },
    },
})
