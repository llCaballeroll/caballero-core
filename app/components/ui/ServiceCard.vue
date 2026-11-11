<script setup lang="ts">
import type { Service } from '~/data/site'

const props = defineProps<{ service: Service }>()
</script>

<template>
  <article v-reveal :id="props.service.slug" class="service" :class="{ featured: props.service.featured }">
    <div class="service-icon"><AppIcon :name="props.service.icon" /></div>
    <span v-if="props.service.featured" class="badge">Nuevo</span>
    <h3>{{ props.service.title }}</h3>
    <p>{{ props.service.summary }}</p>
    <ul>
      <li v-for="item in props.service.items" :key="item">
        <AppIcon name="check" />
        <span>{{ item }}</span>
      </li>
    </ul>
  </article>
</template>
