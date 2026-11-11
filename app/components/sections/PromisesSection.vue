<script setup lang="ts">
import { promises } from '~/data/site'

defineProps<{ alt?: boolean }>()
</script>

<template>
  <section class="section" :class="{ 'section-alt': alt }">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Por qué Caballero Core</span>
        <h2 class="section-title">Así es trabajar con nosotros.</h2>
      </div>
      <div class="promises">
        <div v-for="p in promises" :key="p.title" v-reveal class="promise">
          <div class="service-icon"><AppIcon :name="p.icon" /></div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
