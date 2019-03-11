
module.exports = {
  mode: 'universal',
  head: {
    title: '福瑞至',
    titleTemplate: '%s | 福瑞至',
    meta: [
      { charset: 'utf-8' },
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { hid: 'description', name: 'description', content: '福瑞至' },
      { hid: 'keywords', name: 'keywords', content: '福瑞至' },
      { name: 'author', content: '424500157@qq.com' },
      { name: 'viewport', content: 'initial-scale=1,maximum-scale=1, minimum-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  loading: {
    color: '#409EFF',
    height: '3px',
  },
  router: {
    base: '/frz', // 测试环境非根目录，释放此路径
    // base: '/',                // 生产环境在艮目路，始放此路径
    mode: 'hash',
  },
  css: [ '~assets/css/common.css' ],
  plugins: [
    '~plugins/iview.js',
    '~plugins/axios.js',
    '~plugins/lazyload.js',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  srcDir: 'client/',
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/v1': 'http://116.62.63.151:8110',
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
        config.module.rules.push({
          test: /\.(js)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [ '@babel/preset-env' ],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-syntax-dynamic-import',
                [
                  'import',
                  {
                    libraryName: 'iview',
                    libraryDirectory: 'src/components',
                  },
                ],
              ],
            },
          },
          exclude: /node_modules/,
        });
      }
    },
  },
};
