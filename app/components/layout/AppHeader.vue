<script setup lang="ts">
import { navLinks } from '~/data/site'

const open = ref(false)
const route = useRoute()
const { buildWhatsAppUrl } = useWhatsApp()
const base = useRuntimeConfig().app.baseURL

watch(() => route.fullPath, () => { open.value = false })

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <header class="navbar" :class="{ 'is-open': open }">
    <nav class="container nav-inner" aria-label="Principal">
      <NuxtLink to="/" class="brand" aria-label="Caballero Core, inicio">
        <img :src="base + 'logo.svg'" alt="" width="28" height="28">
        <span>Caballero Core</span>
      </NuxtLink>

      <ul id="nav-links" class="nav-links">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </li>
      </ul>

      <div class="nav-actions">
        <ThemeToggle />
        <a
          class="btn btn-primary nav-cta"
          :href="buildWhatsAppUrl()"
          target="_blank"
          rel="noopener noreferrer"
        >Cotizar</a>
        <button
          class="icon-btn menu-toggle"
          type="button"
          :aria-expanded="open"
          aria-controls="nav-links"
          :aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
          @click="open = !open"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path class="bar bar-1" d="M4 8h16" /><path class="bar bar-2" d="M4 16h16" /></svg>
        </button>
      </div>
    </nav>
  </header>
</template>
