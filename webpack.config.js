module.exports = function(config, env) {
  if (env === 'production') {
    config.entry = {
      index: ['babel-polyfill', './src/index.ts'],
      common: ['react', 'react-dom']
    };

  }
  return config;
};
