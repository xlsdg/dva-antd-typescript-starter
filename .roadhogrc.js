export default {
  autoprefixer: {
    browsers: [
      '> 1%',
      'IE >= 9',
      'last 2 versions'
    ]
  },
  disableCSSModules: false,
  entry: 'src/index.ts',
  env: {
    development: {
      multipage: false,
      publicPath: '/',
      extraBabelPlugins: [
        'dva-hmr'
      ]
    },
    production: {
      multipage: true,
      publicPath: '/dva-antd-typescript-starter/'
    }
  },
  extraBabelPlugins: [
    'transform-runtime',
    ['import', {
      libraryDirectory: 'es',
      libraryName: 'antd',
      style: true
    }]
  ],
  hash: true,
  ignoreMomentLocale: true
};
