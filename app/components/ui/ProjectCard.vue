<script setup lang="ts">
defineProps<{
  title: string
  category: string
  description: string
  href?: string
  linkLabel?: string
}>()
</script>

<template>
  <article class="glass-card flex flex-col rounded-3xl p-6">
    <p class="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
      {{ category }}
    </p>

    <h3 class="mt-4 text-xl font-bold text-white">
      {{ title }}
    </h3>

    <p class="mt-3 flex-1 text-sm leading-6 text-slate-300">
      {{ description }}
    </p>

    <a
      v-if="href"
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
    >
      {{ linkLabel || 'Ver proyecto' }} →
    </a>
  </article>
</template>
