<script setup lang="ts">
const steps = [
  'Revisión de necesidad',
  'Diagnóstico y alcance',
  'Cotización clara',
  'Desarrollo o solución',
  'Entrega y soporte'
]
</script>

<template>
  <section class="section-padding border-t border-white/10">
    <div class="section-container">
      <div class="max-w-2xl">
        <p class="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
          Proceso
        </p>

        <h2 class="mt-4 text-4xl font-black text-white md:text-5xl">
          Revisamos, cotizamos y entregamos.
        </h2>
      </div>

      <div class="mt-12 grid gap-4 md:grid-cols-5">
        <div
          v-for="(step, index) in steps"
          :key="step"
          class="glass-card rounded-3xl p-6"
        >
          <p class="text-3xl font-black text-cyan-300">
            0{{ index + 1 }}
          </p>

          <p class="mt-4 font-bold text-white">
            {{ step }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
