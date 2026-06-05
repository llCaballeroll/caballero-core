<script setup lang="ts">
const open = ref(false)

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Sobre mí', to: '/sobre-mi' },
  { label: 'Contacto', to: '/contacto' }
]
</script>

<template>
  <div>
    <button
      class="rounded-xl border border-white/10 px-3 py-2 text-sm text-white"
      @click="open = !open"
    >
      Menú
    </button>

    <div
      v-if="open"
      class="absolute left-6 right-6 top-24 rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl"
    >
      <nav class="flex flex-col gap-4">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-base font-medium text-slate-200"
          @click="open = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>
