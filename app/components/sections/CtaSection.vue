<script setup lang="ts">
const { buildWhatsAppUrl } = useWhatsApp()
</script>

<template>
  <section class="section">
    <div class="container">
      <div v-reveal class="cta-band">
        <h2>¿Tienes una idea o un problema que resolver?</h2>
        <p>Cuéntanos con tus palabras. Te respondemos hoy mismo con una propuesta clara.</p>
        <div class="cta-row">
          <a
            class="btn btn-whatsapp"
            :href="buildWhatsAppUrl('Hola, me gustaría platicar sobre un proyecto con Caballero Core.')"
            target="_blank"
            rel="noopener noreferrer"
          ><AppIcon name="whatsapp" />Escribir por WhatsApp</a>
          <NuxtLink to="/contacto" class="btn btn-light">Otras formas de contacto</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
