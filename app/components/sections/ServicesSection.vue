<script setup lang="ts">
const services = [
  {
    title: 'Páginas Web & Landing Pages',
    description: 'Sitios modernos, rápidos y responsivos para negocios, marcas personales, servicios profesionales y comercios locales.',
    items: ['Sitios informativos', 'Landing pages', 'Catálogos digitales', 'Optimización responsive']
  },
  {
    title: 'Sistemas Web & Herramientas Internas',
    description: 'Desarrollo de sistemas a medida para operación, control, reportes, administración y flujos internos de negocio.',
    items: ['Paneles administrativos', 'Herramientas internas', 'Control operativo', 'Integraciones']
  },
  {
    title: 'Apps Móviles',
    description: 'Aplicaciones móviles, prototipos, MVPs y experiencias interactivas desarrolladas con tecnologías modernas como Flutter.',
    items: ['Apps Android/iOS', 'Prototipos', 'MVPs', 'Experiencias interactivas']
  },
  {
    title: 'Automatización & Datos',
    description: 'Automatización de procesos, reportes, Excel avanzado, Google Sheets, SQL Server, macros, dashboards y bases de datos.',
    items: ['Python', 'SQL Server', 'Excel avanzado', 'Reportes automáticos']
  },
  {
    title: 'Soporte Técnico & Mantenimiento',
    description: 'Diagnóstico, mantenimiento, formateo, optimización, instalación de software, respaldos y soporte remoto o presencial según zona.',
    items: ['PCs y laptops', 'Windows / Linux', 'Respaldo de información', 'Optimización']
  },
  {
    title: 'Consultoría TI para Negocios',
    description: 'Revisión de procesos, sistemas existentes, infraestructura, operación tecnológica y propuestas de mejora para negocios.',
    items: ['Diagnóstico técnico', 'Procesos', 'Infraestructura', 'Recomendaciones']
  }
]
</script>

<template>
  <section class="section-padding border-t border-white/10">
    <div class="section-container">
      <div class="max-w-3xl">
        <p class="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
          Servicios
        </p>

        <h2 class="mt-4 text-4xl font-black text-white md:text-5xl">
          Soluciones tecnológicas de principio a fin.
        </h2>

        <p class="mt-5 text-slate-300">
          Caballero Core centraliza desarrollo, automatización, soporte y consultoría para ayudarte a resolver necesidades tecnológicas sin complicarte con múltiples proveedores.
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          v-bind="service"
        />
      </div>
    </div>
  </section>
</template>
