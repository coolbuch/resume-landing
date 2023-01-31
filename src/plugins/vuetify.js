// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  components,
  directives,
  ssr: true,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: String(colors.grey.lighten3), // #E53935
          secondary: String(colors.grey.lighten4), 
        },
      },
    },
  },
})