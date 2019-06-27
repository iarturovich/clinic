const pkg = require('./package')

module.exports = {
  mode: 'universal',

  // server: {
  //   port: 8000,
  //   host: '95.59.24.139'
  // },

  head: {
    title: 'Клиника',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#409EFF' },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.css'
  ],

  plugins: [
    '@/plugins/globals',
    '@/plugins/axios'
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/moment', { locales: ['ru'], defaultLocale: 'ru' }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },

  proxy: {
    '/api/': 'http://aman-medicus.kz'
  },

  // moment: {
  //   locales: ['ru']
  // },

  build: {
    transpile: [/^element-ui/],

    extend(config, ctx) {
    }
  }
}
