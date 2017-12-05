module.exports = function(config, env) {
  if (env === 'production') {
    config.entry = {
      index: './src/index.ts',
      common: ['react', 'react-dom']
    };

  }
  return config;
};
