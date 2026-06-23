<script setup lang="ts">
const links = [
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Sobre mí', to: '/sobre-mi' },
  { label: 'Contacto', to: '/contacto' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
    <div class="section-container flex h-20 items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/logo.svg" alt="Caballero Core" class="h-10 w-10">
        <div>
          <p class="text-sm font-black uppercase tracking-[0.25em] text-white">
            Caballero Core
          </p>
          <p class="text-xs text-slate-400">
            Tecnología que sí funciona
          </p>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <NuxtLink
        to="/contacto"
        class="hidden rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 md:inline-flex"
      >
        Contáctanos
      </NuxtLink>

      <MobileMenu class="md:hidden" />
    </div>
  </header>
</template>
