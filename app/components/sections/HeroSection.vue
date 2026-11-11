<script setup lang="ts">
import { apps } from '~/data/site'

const { buildWhatsAppUrl } = useWhatsApp()
const base = useRuntimeConfig().app.baseURL
</script>

<template>
  <section class="hero">
    <div class="container">
      <span class="eyebrow">Caballero Core</span>
      <h1>Tecnología que <span class="grad-text">sí funciona</span> para tu negocio.</h1>
      <p class="lead">
        Páginas web, apps, sistemas a la medida e inteligencia artificial para negocios que quieren vender más y trabajar menos. Te explicamos todo claro y entregamos a tiempo.
      </p>

      <div class="cta-row">
        <a
          class="btn btn-primary"
          :href="buildWhatsAppUrl('Hola, me gustaría platicar sobre un proyecto con Caballero Core.')"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AppIcon name="whatsapp" />
          Platica tu proyecto
        </a>
        <NuxtLink to="/servicios" class="btn btn-secondary">Ver servicios</NuxtLink>
      </div>

      <div class="trust">
        <span><AppIcon name="pin" />Metepec, Edo. Méx.</span>
        <span><AppIcon name="web" />Atención remota en todo México</span>
        <span><AppIcon name="clock" />Lun–Sáb · 9:00 a 21:00</span>
      </div>

      <div class="mosaic" aria-label="Algunos proyectos publicados">
        <template v-for="app in apps" :key="app.name">
          <a v-if="app.href" :href="app.href" target="_blank" rel="noopener noreferrer" :title="app.name">
            <img :src="base + app.img" :alt="app.name" width="110" height="110">
          </a>
          <div v-else :title="`${app.name} (próximamente)`">
            <img :src="base + app.img" :alt="`${app.name}, próximamente`" width="110" height="110">
          </div>
        </template>
      </div>
      <p class="mosaic-caption">Apps y juegos diseñados, programados y publicados por nosotros.</p>
    </div>
  </section>
</template>
