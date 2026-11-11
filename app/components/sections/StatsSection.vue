<script setup lang="ts">
import { stats } from '~/data/site'
</script>

<template>
  <section class="section section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Experiencia</span>
        <h2 class="section-title">Años resolviendo la tecnología de empresas reales.</h2>
      </div>
      <div class="stats">
        <div v-for="s in stats" :key="s.label" v-reveal class="stat">
          <b>{{ s.value }}</b>
          <span>{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
