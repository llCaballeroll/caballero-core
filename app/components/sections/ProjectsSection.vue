<script setup lang="ts">
const projects = [
  {
    title: 'Sitios web para negocios reales',
    category: 'Web',
    description: 'Páginas para ferreterías, estudios de belleza, consultorios y marcas personales que necesitaban una presencia clara, profesional y fácil de mantener.'
  },
  {
    title: 'Reportes que se generan solos',
    category: 'Automatización',
    description: 'Procesos que antes tomaban horas cada día —descargar archivos, consolidar ventas, mandar reportes— ahora corren solos y llegan listos al correo.'
  },
  {
    title: 'Sistemas internos para operación multi-sucursal',
    category: 'Software',
    description: 'Herramientas hechas a la medida para controlar ventas, inventarios y operación entre varias sucursales, con reportes centralizados y accesos por rol.'
  },
  {
    title: 'Snake Islands',
    category: 'App móvil · Juego',
    description: 'Más que un clásico: un nuevo desafío. Versión moderna del juego de la serpiente, publicada y disponible para jugar en navegador.',
    href: 'https://llcaballeroll.github.io/snake_islands_web/',
    linkLabel: 'Jugar ahora'
  },
  {
    title: 'Amon: The Mystic Oracle',
    category: 'App móvil · Juego',
    description: 'El destino, revelado por tu voz. Experiencia interactiva con reconocimiento de voz, desarrollada con Flutter para Android e iOS.',
    href: 'https://llcaballeroll.github.io/amon_oracle_web/',
    linkLabel: 'Conocer el proyecto'
  },
  {
    title: 'Bounce Royale',
    category: 'App móvil · Juego',
    description: 'El rey del rebote. Juego casual desarrollado con Flutter y Flame Engine, pensado para sesiones rápidas y divertidas.',
    href: 'https://llcaballeroll.github.io/bounce_royale_web/',
    linkLabel: 'Conocer el proyecto'
  },
  {
    title: 'Sin Párpados',
    category: 'Publicación',
    description: 'Libro escrito y publicado en Google Play Books. Demuestra que en Caballero Core también nos atrevemos con proyectos creativos propios.',
    href: 'https://play.google.com/store/books/details/Luis_Angel_Caballero_Jardon_Sin_Parpados?id=oanBEQAAQBAJ&hl=es_MX',
    linkLabel: 'Ver en Google Play'
  },
  {
    title: 'Soporte e infraestructura TI',
    category: 'Soporte',
    description: 'Atención a usuarios, configuración de equipos, redes y servidores; mantenimiento preventivo y correctivo para que el día a día no se detenga.'
  }
]
</script>

<template>
  <section class="section-padding border-t border-white/10">
    <div class="section-container">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-3xl">
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            Proyectos y experiencia
          </p>

          <h2 class="mt-4 text-4xl font-black text-white md:text-5xl">
            Trabajo real que puedes ver y tocar.
          </h2>

          <p class="mt-5 text-slate-300">
            Cada proyecto que tomamos lo entregamos terminado y funcionando. Aquí tienes una muestra: desde sitios para negocios locales hasta juegos publicados que puedes abrir y probar ahora mismo.
          </p>
        </div>

        <BaseButton href="/proyectos" variant="secondary">
          Ver todos los proyectos
        </BaseButton>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </div>
    </div>
  </section>
</template>
