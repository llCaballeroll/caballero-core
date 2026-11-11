<script setup lang="ts">
import { services } from '~/data/site'

defineProps<{ title?: string, sub?: string, link?: boolean }>()
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-head row">
        <div>
          <span class="eyebrow">Servicios</span>
          <h2 class="section-title">{{ title || 'Todo lo tecnológico, en un solo lugar.' }}</h2>
          <p class="section-sub">{{ sub || 'En vez de buscar un diseñador, un programador y un técnico por separado, te acompañamos de principio a fin.' }}</p>
        </div>
        <NuxtLink v-if="link" to="/servicios" class="text-link">Ver todos los servicios</NuxtLink>
      </div>
      <div class="services">
        <ServiceCard v-for="s in services" :key="s.slug" :service="s" />
      </div>
    </div>
  </section>
</template>
