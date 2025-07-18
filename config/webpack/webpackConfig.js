// The source code including full typescript support is available at: 
// https://github.com/shakacode/react_on_rails_demo_ssr_hmr/blob/master/config/webpack/webpackConfig.js

const clientWebpackConfig = require('./clientWebpackConfig');
const serverWebpackConfig = require('./serverWebpackConfig');

const webpackConfig = (envSpecific) => {
  const clientConfig = clientWebpackConfig();

// Agregar opciones de watch para evitar depender del comportamiento del IDE
  clientConfig.watchOptions = {
    poll: 1000,              // chequea cambios cada 1 segundo
    aggregateTimeout: 300,   // espera un poco para agrupar múltiples cambios
    ignored: /node_modules/, // ignora la carpeta node_modules
  };
  const serverConfig = serverWebpackConfig();

  if (envSpecific) {
    envSpecific(clientConfig, serverConfig);
  }

  let result;
  // For HMR, need to separate the the client and server webpack configurations
  if (process.env.WEBPACK_SERVE || process.env.CLIENT_BUNDLE_ONLY) {
    // eslint-disable-next-line no-console
    console.log('[React on Rails] Creating only the client bundles.');
    result = clientConfig;
  } else if (process.env.SERVER_BUNDLE_ONLY) {
    // eslint-disable-next-line no-console
    console.log('[React on Rails] Creating only the server bundle.');
    result = serverConfig;
  } else {
    // default is the standard client and server build
    // eslint-disable-next-line no-console
    console.log('[React on Rails] Creating both client and server bundles.');
    result = [clientConfig, serverConfig];
  }

  // To debug, uncomment next line and inspect "result"
  // debugger
  return result;
};

module.exports = webpackConfig;
