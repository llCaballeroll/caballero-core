const baseURL = process.env.NUXT_APP_BASE_URL || '/'

// Pone el tema guardado antes de pintar la página (evita el parpadeo claro/oscuro).
const themeInit = "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}"

export default defineNuxtConfig({
  compatibilityDate: '2026-06-05',

  srcDir: 'app/',

  css: ['~/assets/css/main.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  app: {
    baseURL,
    head: {
      htmlAttrs: {
        lang: 'es-MX'
      },
      title: 'Caballero Core | Páginas web, apps, sistemas e IA para tu negocio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content:
            'Caballero Core, por Luis Caballero: páginas web, apps móviles, sistemas a la medida, inteligencia artificial, reportes automáticos y soporte técnico para negocios en todo México.'
        },
        {
          name: 'keywords',
          content:
            'Caballero Core, Luis Caballero, páginas web, apps móviles, inteligencia artificial, automatización, sistemas a la medida, soporte técnico, consultoría TI, Metepec, Toluca, Estado de México'
        },
        { name: 'author', content: 'Luis Caballero' },
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:title', content: 'Caballero Core · Tecnología que sí funciona' },
        {
          property: 'og:description',
          content: 'Páginas web, apps, sistemas a la medida e inteligencia artificial para negocios reales. Atendemos en todo México.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'es_MX' },
        { property: 'og:image', content: `${baseURL}apple-touch-icon.png` }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg` },
        { rel: 'apple-touch-icon', href: `${baseURL}apple-touch-icon.png` }
      ],
      script: [
        { innerHTML: themeInit, tagPosition: 'head' }
      ]
    }
  },

  nitro: {
    prerender: {
      routes: ['/', '/servicios', '/proyectos', '/sobre-mi', '/contacto']
    }
  }
})
