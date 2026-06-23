export default defineNuxtConfig({
  compatibilityDate: '2026-06-05',

  srcDir: 'app/',

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'es-MX'
      },
      title: 'Caballero Core | Páginas web, apps y soporte técnico para tu negocio',
      meta: [
        {
          name: 'description',
          content:
            'Caballero Core, por Luis Caballero: páginas web, apps móviles, sistemas a la medida, automatización de reportes y soporte técnico para negocios y emprendedores en todo México.'
        },
        {
          name: 'keywords',
          content:
            'Caballero Core, Luis Caballero, diseño de páginas web, apps móviles, soporte técnico, mantenimiento de computadoras, automatización, reportes, consultoría TI, Metepec, Toluca, Estado de México'
        },
        {
          name: 'author',
          content: 'Luis Caballero'
        },
        {
          name: 'theme-color',
          content: '#020617'
        },
        {
          property: 'og:title',
          content: 'Caballero Core · Tecnología que sí funciona'
        },
        {
          property: 'og:description',
          content:
            'Páginas web, apps móviles, sistemas a la medida y soporte técnico para negocios reales. Atendemos en todo México.'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:locale',
          content: 'es_MX'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        }
      ]
    }
  },

  nitro: {
    prerender: {
      routes: ['/', '/servicios', '/proyectos', '/sobre-mi', '/contacto']
    }
  }
})
