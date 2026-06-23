<script setup lang="ts">
const services = [
  {
    title: 'Páginas web que sí venden',
    description: 'Sitios rápidos, claros y bonitos que se ven bien en celular y desktop. Pensados para que tus clientes te encuentren, te entiendan y te contacten.',
    items: ['Sitios informativos y de marca', 'Landing pages para campañas', 'Catálogos digitales', 'Optimización para Google y móvil']
  },
  {
    title: 'Sistemas a la medida para tu operación',
    description: 'Plataformas internas que ordenan tu negocio: registro de ventas, control de inventario, reportes, accesos por rol y todo lo que hoy haces en hojas sueltas.',
    items: ['Paneles administrativos', 'Control de procesos internos', 'Reportes en tiempo real', 'Integración con tus herramientas']
  },
  {
    title: 'Apps móviles Android e iOS',
    description: 'Desarrollamos apps para que tu negocio viva también en el celular de tus clientes o de tu equipo: catálogos, pedidos, herramientas internas o ideas propias.',
    items: ['Android y iOS desde un solo desarrollo', 'Publicación en tiendas', 'Prototipos y MVPs', 'Mantenimiento y actualizaciones']
  },
  {
    title: 'Automatización de tareas y reportes',
    description: 'Eliminamos el trabajo repetitivo: reportes que se generan solos, archivos que se actualizan automáticamente y datos que se consolidan sin que muevas un dedo.',
    items: ['Reportes automáticos por correo', 'Excel y Google Sheets inteligentes', 'Conexión con bases de datos', 'Tableros de indicadores']
  },
  {
    title: 'Soporte técnico y mantenimiento',
    description: 'Atendemos tu equipo cuando algo deja de funcionar y le damos mantenimiento antes de que falle. Respaldos seguros, equipos optimizados y atención remota o en sitio.',
    items: ['Diagnóstico y reparación', 'Mantenimiento preventivo', 'Respaldo de información', 'Instalación y configuración']
  },
  {
    title: 'Consultoría TI para tu negocio',
    description: 'Revisamos cómo funciona tu tecnología hoy y te decimos sin rodeos qué se puede mejorar, qué conviene cambiar y qué te está costando dinero sin que lo sepas.',
    items: ['Diagnóstico claro y honesto', 'Propuestas paso a paso', 'Acompañamiento en la decisión', 'Revisión de proveedores actuales']
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
          Un solo lugar para resolver lo tecnológico.
        </h2>

        <p class="mt-5 text-slate-300">
          En lugar de buscar un diseñador por aquí, un programador por allá y un técnico por otro lado, nosotros te acompañamos de principio a fin. Tú nos cuentas qué necesitas y nosotros lo resolvemos.
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
