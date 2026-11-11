<script setup lang="ts">
import { aiPoints } from '~/data/site'

const { buildWhatsAppUrl } = useWhatsApp()
</script>

<template>
  <section class="section ai-tile">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Inteligencia artificial</span>
        <h2 class="section-title ai-title">La IA, aterrizada a tu negocio.</h2>
        <p class="section-sub">Nada de promesas futuristas: usos concretos que te ahorran horas desde la primera semana.</p>
      </div>
      <div class="ai-grid">
        <article v-for="p in aiPoints" :key="p.title" v-reveal class="ai-card">
          <div class="ai-icon"><AppIcon :name="p.icon" /></div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </article>
      </div>
      <div class="ai-foot">
        <a
          class="btn btn-light"
          :href="buildWhatsAppUrl('Hola, quiero saber cómo usar inteligencia artificial en mi negocio.')"
          target="_blank"
          rel="noopener noreferrer"
        >Quiero usar IA en mi negocio</a>
        <NuxtLink to="/servicios#ia" class="text-link">Cómo lo hacemos</NuxtLink>
      </div>
    </div>
  </section>
</template>
