
export default {
  // mode: 'universal',
  target: 'static',
  // router: { base: 'home/momo/Desktop/Nuxt-Master/dist/' },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#68d391' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/main.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/sass/main.sass',
    purgeCSSInDev: false,
    exposeConfig: false
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-sass-resources-loader',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    // cache
    '@nuxtjs/component-cache',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],  /*cache 15 minutes*/
  ],
  styleResources: {
    sass: [
      'assets/sass/_variables.sass'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    extractCss: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  generate: {
      // dir: 'folder name'
    }

}
