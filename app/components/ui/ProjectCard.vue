<script setup lang="ts">
defineProps<{
  title: string
  category: string
  description: string
}>()
</script>

<template>
  <article class="glass-card rounded-3xl p-6">
    <p class="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
      {{ category }}
    </p>

    <h3 class="mt-4 text-xl font-bold text-white">
      {{ title }}
    </h3>

    <p class="mt-3 text-sm leading-6 text-slate-300">
      {{ description }}
    </p>
  </article>
</template>
