<script setup lang="ts">
defineProps<{ eyebrow: string, title: string, text: string }>()
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">{{ eyebrow }}</span>
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  </section>
</template>
