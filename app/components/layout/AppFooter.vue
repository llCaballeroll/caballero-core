<script setup lang="ts">
import { brand, services } from '~/data/site'

const { buildWhatsAppUrl } = useWhatsApp()
const base = useRuntimeConfig().app.baseURL
const year = 2026
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <NuxtLink to="/" class="brand">
            <img :src="base + 'logo.svg'" alt="" width="28" height="28">
            <span>Caballero Core</span>
          </NuxtLink>
          <p>Páginas web, apps, sistemas, IA y soporte técnico para negocios en todo México.</p>
        </div>

        <div>
          <h4>Servicios</h4>
          <ul>
            <li v-for="s in services.slice(0, 5)" :key="s.slug">
              <NuxtLink :to="`/servicios#${s.slug}`">{{ s.title }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4>Caballero Core</h4>
          <ul>
            <li><NuxtLink to="/proyectos">Proyectos</NuxtLink></li>
            <li><NuxtLink to="/sobre-mi">Sobre mí</NuxtLink></li>
            <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
            <li><a :href="brand.portfolio" target="_blank" rel="noopener noreferrer">Portafolio</a></li>
          </ul>
        </div>

        <div>
          <h4>Contacto</h4>
          <ul>
            <li><a :href="buildWhatsAppUrl()" target="_blank" rel="noopener noreferrer">WhatsApp 722 124 0597</a></li>
            <li><a :href="`mailto:${brand.email}`">Correo</a></li>
            <li>{{ brand.location }}</li>
            <li>Lun–Sáb · 9:00 a 21:00</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ year }} Caballero Core · por {{ brand.founder }}</p>
        <p>Tecnología que sí funciona, para negocios reales.</p>
      </div>
    </div>
  </footer>
</template>
