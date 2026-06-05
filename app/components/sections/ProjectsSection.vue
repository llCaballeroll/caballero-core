<script setup lang="ts">
const projects = [
  {
    title: 'Sitios web para negocios locales',
    category: 'Web',
    description: 'Diseño y desarrollo de sitios informativos para negocios, marcas personales y servicios profesionales como ferreterías, estudios de belleza y psicología.'
  },
  {
    title: 'Automatización de reportes operativos',
    category: 'Datos',
    description: 'Automatización de reportes, consultas SQL, archivos Excel, procesos administrativos y análisis de información para operación multi-sucursal.'
  },
  {
    title: 'Sistemas internos para operación restaurantera',
    category: 'Software',
    description: 'Herramientas internas y procesos de soporte para operación, reportes, ventas, ERP, Softrestaurant, TOTVS, Kepler y bases de datos.'
  },
  {
    title: 'Apps móviles con Flutter',
    category: 'Mobile',
    description: 'Desarrollo de aplicaciones móviles, prototipos y experiencias digitales usando Flutter, Dart y arquitectura multiplataforma.'
  },
  {
    title: 'Caballero Game Studio',
    category: 'Gaming',
    description: 'Videojuegos y experiencias interactivas como Amon: The Mystic Oracle, Bounce Royale y Snake Islands.'
  },
  {
    title: 'Soporte e infraestructura TI',
    category: 'IT',
    description: 'Soporte técnico, mantenimiento, configuración de equipos, operación de sistemas, redes, infraestructura y atención a usuarios.'
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
            Experiencia aplicada a problemas reales.
          </h2>

          <p class="mt-5 text-slate-300">
            Trabajo con proyectos reales de desarrollo, soporte, automatización, sitios web, operación de sistemas y soluciones tecnológicas para negocios.
          </p>
        </div>

        <BaseButton href="/proyectos" variant="secondary">
          Ver proyectos
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
