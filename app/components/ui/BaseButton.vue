<script setup lang="ts">
defineProps<{
  href?: string
  variant?: 'primary' | 'secondary'
}>()
</script>

<template>
  <NuxtLink
    v-if="href"
    :to="href"
    :class="[
      'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300',
      variant === 'secondary'
        ? 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
        : 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
    ]"
  >
    <slot />
  </NuxtLink>

  <button
    v-else
    :class="[
      'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300',
      variant === 'secondary'
        ? 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
        : 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
    ]"
  >
    <slot />
  </button>
</template>
