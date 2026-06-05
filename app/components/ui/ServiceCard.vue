<script setup lang="ts">
defineProps<{
  title: string
  description: string
  items: string[]
}>()
</script>

<template>
  <article class="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
      <span class="text-xl">◆</span>
    </div>

    <h3 class="text-xl font-bold text-white">
      {{ title }}
    </h3>

    <p class="mt-3 text-sm leading-6 text-slate-300">
      {{ description }}
    </p>

    <ul class="mt-5 space-y-2 text-sm text-slate-400">
      <li
        v-for="item in items"
        :key="item"
        class="flex gap-2"
      >
        <span class="text-cyan-300">•</span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </article>
</template>
