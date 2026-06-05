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
      title: 'Caballero Core | Desarrollo, soporte y soluciones tecnológicas',
      meta: [
        {
          name: 'description',
          content:
            'Caballero Core by Luis Caballero: páginas web, sistemas, apps, automatización, soporte técnico, mantenimiento y consultoría TI para negocios.'
        },
        {
          name: 'keywords',
          content:
            'Caballero Core, Luis Caballero, desarrollo web, sistemas web, apps móviles, soporte técnico, mantenimiento, automatización, Excel, SQL Server, Metepec, Toluca'
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
          content: 'Caballero Core'
        },
        {
          property: 'og:description',
          content:
            'Desarrollo, soporte y soluciones tecnológicas para negocios reales.'
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
