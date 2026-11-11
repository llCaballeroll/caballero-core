<script setup lang="ts">
import { apps, cases } from '~/data/site'

defineProps<{ full?: boolean, alt?: boolean }>()
const base = useRuntimeConfig().app.baseURL
</script>

<template>
  <section class="section" :class="{ 'section-alt': alt }">
    <div class="container">
      <div class="section-head row">
        <div>
          <span class="eyebrow">Proyectos</span>
          <h2 class="section-title">Trabajo que puedes abrir y probar.</h2>
          <p class="section-sub">Apps y juegos propios publicados en App Store y Google Play: la mejor prueba de que sabemos llevar una idea hasta las tiendas.</p>
        </div>
        <NuxtLink v-if="!full" to="/proyectos" class="text-link">Ver todos los proyectos</NuxtLink>
      </div>

      <div class="apps">
        <AppCard v-for="app in apps" :key="app.name" :app="app" />
      </div>

      <template v-if="full">
        <div class="section-head" style="margin-top: 80px">
          <span class="eyebrow">Experiencia en empresas</span>
          <h2 class="section-title">Sistemas que sostienen operaciones reales.</h2>
          <p class="section-sub">Proyectos internos para empresas donde la tecnología no se puede detener.</p>
        </div>
        <div class="cases">
          <article v-for="c in cases" :key="c.title" v-reveal class="case">
            <div class="service-icon"><AppIcon :name="c.icon" /></div>
            <div>
              <span class="tag">{{ c.tag }}</span>
              <h3>{{ c.title }}</h3>
              <p>{{ c.text }}</p>
            </div>
          </article>
        </div>

        <a
          v-reveal
          class="book"
          href="https://play.google.com/store/books/details/Luis_Angel_Caballero_Jardon_Sin_Parpados?id=oanBEQAAQBAJ&hl=es_MX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="base + 'img/libro-sin-parpados.jpg'" alt="" width="64" height="96" loading="lazy">
          <div>
            <span class="eyebrow">También escribimos</span>
            <h3>Sin Párpados</h3>
            <p>Libro publicado en Google Play Libros.</p>
          </div>
          <svg class="chevron" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 2l6 6-6 6" /></svg>
        </a>
      </template>
    </div>
  </section>
</template>
