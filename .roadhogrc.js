export default {
  autoprefixer: {
    browsers: [
      'last 7 versions',
      'Android >= 4.2',
      'iOS >= 6'
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
