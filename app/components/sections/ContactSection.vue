<script setup lang="ts">
import { brand } from '~/data/site'

const { buildWhatsAppUrl, personalPhone } = useWhatsApp()
</script>

<template>
  <section class="section">
    <div class="container contact-grid">
      <div class="contact-list">
        <a v-reveal class="contact-item" :href="buildWhatsAppUrl('Hola, quiero información sobre Caballero Core.')" target="_blank" rel="noopener noreferrer">
          <span class="ci-icon wa"><AppIcon name="whatsapp" /></span>
          <span class="ci-text"><span>WhatsApp principal</span><strong>722 124 0597</strong></span>
          <svg class="chevron" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 2l6 6-6 6" /></svg>
        </a>
        <a v-reveal class="contact-item" :href="buildWhatsAppUrl('Hola, quiero información sobre Caballero Core.', personalPhone)" target="_blank" rel="noopener noreferrer">
          <span class="ci-icon wa"><AppIcon name="whatsapp" /></span>
          <span class="ci-text"><span>WhatsApp alterno</span><strong>722 886 8540</strong></span>
          <svg class="chevron" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 2l6 6-6 6" /></svg>
        </a>
        <a v-reveal class="contact-item" :href="`mailto:${brand.email}`">
          <span class="ci-icon"><AppIcon name="mail" /></span>
          <span class="ci-text"><span>Correo</span><strong>luis.caballero1199<wbr>@outlook.com</strong></span>
          <svg class="chevron" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 2l6 6-6 6" /></svg>
        </a>
      </div>

      <div v-reveal class="info-panel">
        <div class="info-row">
          <AppIcon name="pin" />
          <div><span>Dónde estamos</span><b>{{ brand.location }}</b></div>
        </div>
        <div class="info-row">
          <AppIcon name="web" />
          <div><span>A quién atendemos</span><b>{{ brand.coverage }}</b></div>
        </div>
        <div class="info-row">
          <AppIcon name="clock" />
          <div><span>Horario</span><b>{{ brand.hours }}</b></div>
        </div>
        <div class="info-row">
          <AppIcon name="bolt" />
          <div><span>Tiempo de respuesta</span><b>El mismo día, en horario de atención</b></div>
        </div>
      </div>
    </div>
  </section>
</template>
