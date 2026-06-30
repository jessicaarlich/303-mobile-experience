import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'evergreen',
    themes: {
      evergreen: {
        dark: false,
        colors: {
          primary: '#1F5C43',
          secondary: '#CFA63A',
          accent: '#CFA63A',
          background: '#F3F5F2',
          surface: '#FFFFFF',
          success: '#2E7D32',
          info: '#2F6D8C',
          warning: '#A36A00',
          error: '#B23A2E',
        },
      },
    },
  },
  defaults: {
    VCard: {
      rounded: 'xl',
      elevation: 1,
    },
    VChip: {
      rounded: 'pill',
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

export default vuetify
