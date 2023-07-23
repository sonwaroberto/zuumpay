import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    host: '0.0.0.0'
  },
  head: {
    titleTemplate: '%s',
    title: 'ZuumPay Web Services',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href:"https://fonts.googleapis.com/icon?family=Material+Icons", rel:"stylesheet"}
    ],
    script: [
      {src:'https://kit.fontawesome.com/87f44b06a1.js', crossorigin:"anonymous"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  router: {
    extendRoutes (routes, resolve) {
      routes.push({
      name: 'NuxtError',
      path: '*',
      component: resolve(__dirname, './components/nuxt-error.vue')
      // component: ()=>interopDefault(import('./components/nuxt-error.vue')),
      })
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vee-validate',
    '~/plugins/global-mixin',
  ],
  middleware: [
    '~/middleware/auth',
    '~/middleware/guest',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  ssr: false,

  target: 'static',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAbZd8aWY8Ss8wyoyxwvEtEk9_zWs-_UmI",
          authDomain: "zuumpay-web-services.firebaseapp.com",
          databaseURL: "https://zuumpay-web-services-default-rtdb.firebaseio.com",
          projectId: "zuumpay-web-services",
          storageBucket: "zuumpay-web-services.appspot.com",
          messagingSenderId: "207276947090",
          appId: "1:207276947090:web:e95928abb385b72843584b",
          measurementId: "G-SHL6L5YE5N"
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        }
      }
    ],
  ],
  axios: {
    baseURL: 'http://localhost:5001/zuumpay-web-services/us-central1',
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: "#4652B0",
          secondary: "#021291",
          onPrimary: "#fff",
          accent: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.deepOrange.accent4,
          error: colors.red.accent4,
          success: colors.green.accent3,
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
