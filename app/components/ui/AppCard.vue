<script setup lang="ts">
import type { App } from '~/data/site'

const props = defineProps<{ app: App }>()
const base = useRuntimeConfig().app.baseURL
</script>

<template>
  <component
    :is="props.app.href ? 'a' : 'div'"
    v-reveal
    class="app"
    :href="props.app.href"
    :target="props.app.href ? '_blank' : undefined"
    :rel="props.app.href ? 'noopener noreferrer' : undefined"
    :aria-label="props.app.soon ? `${props.app.name}, próximamente` : undefined"
  >
    <div class="app-top">
      <div class="app-icon">
        <span v-if="props.app.soon" class="soon">Próximamente</span>
        <img :src="base + props.app.img" alt="" width="76" height="76" loading="lazy">
      </div>
      <svg v-if="props.app.href" class="chevron" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 2l6 6-6 6" /></svg>
    </div>
    <h3>{{ props.app.name }}</h3>
    <p class="desc">{{ props.app.text }}</p>
    <p class="meta">{{ props.app.meta }}</p>
  </component>
</template>
