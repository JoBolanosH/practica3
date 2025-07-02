// config/webpack/development.js

const webpackConfig = require('./webpackConfig');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const developmentEnvOnly = (clientWebpackConfig, _serverWebpackConfig) => {
  if (process.env.WEBPACK_SERVE === 'true') {
    clientWebpackConfig.plugins.push(
        new ReactRefreshWebpackPlugin({
          overlay: {
            sockIntegration: 'wds',
          },
        })
    );
  }
};

module.exports = webpackConfig(developmentEnvOnly);
