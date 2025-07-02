module.exports = function (api) {
  const defaultConfigFunc = require('shakapacker/package/babel/preset.js');
  const resultConfig = defaultConfigFunc(api);
  const isProductionEnv = api.env('production');

  resultConfig.presets = resultConfig.presets.filter(preset => {
    if (Array.isArray(preset)) {
      return preset[0] !== '@babel/preset-env' && preset[0] !== '@babel/preset-typescript';
    }
    return preset !== '@babel/preset-env' && preset !== '@babel/preset-typescript';
  });

  const additionalPresets = [
    ['@babel/preset-react', {
      runtime: 'automatic',
      development: !isProductionEnv,
    }],
  ];

  const additionalPlugins = [
    process.env.WEBPACK_SERVE && 'react-refresh/babel',
    isProductionEnv && ['babel-plugin-transform-react-remove-prop-types', { removeImport: true }],
  ].filter(Boolean);

  resultConfig.presets = [...resultConfig.presets, ...additionalPresets];
  resultConfig.plugins = [...resultConfig.plugins, ...additionalPlugins];

  return resultConfig;
};
