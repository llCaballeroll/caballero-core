<script setup lang="ts">
import { steps } from '~/data/site'

defineProps<{ alt?: boolean }>()
</script>

<template>
  <section class="section" :class="{ 'section-alt': alt }">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Cómo trabajamos</span>
        <h2 class="section-title">Cinco pasos, sin enredos.</h2>
        <p class="section-sub">No necesitas saber de tecnología para trabajar con nosotros.</p>
      </div>
      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.title" v-reveal class="step">
          <span class="step-n">{{ i + 1 }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
