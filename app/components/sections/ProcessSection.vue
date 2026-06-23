<script setup lang="ts">
const steps = [
  { title: 'Nos cuentas', description: 'Platícanos qué necesitas, aunque no sepas cómo se llama técnicamente.' },
  { title: 'Revisamos', description: 'Analizamos tu caso y te decimos qué es lo mejor para ti, sin venderte de más.' },
  { title: 'Cotizamos claro', description: 'Te entregamos un presupuesto sin letras chiquitas ni sorpresas.' },
  { title: 'Lo hacemos', description: 'Construimos la solución y te mantenemos al tanto del avance.' },
  { title: 'Te acompañamos', description: 'Entregamos, te capacitamos y seguimos ahí cuando lo necesites.' }
]
</script>

<template>
  <section class="section-padding border-t border-white/10">
    <div class="section-container">
      <div class="max-w-2xl">
        <p class="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
          Cómo trabajamos
        </p>

        <h2 class="mt-4 text-4xl font-black text-white md:text-5xl">
          Cinco pasos simples, sin enredos.
        </h2>

        <p class="mt-5 text-slate-300">
          No necesitas saber de tecnología para trabajar con nosotros. Así de claro es el camino desde la primera plática hasta la entrega.
        </p>
      </div>

      <div class="mt-12 grid gap-4 md:grid-cols-5">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="glass-card rounded-3xl p-6"
        >
          <p class="text-3xl font-black text-cyan-300">
            0{{ index + 1 }}
          </p>

          <p class="mt-4 font-bold text-white">
            {{ step.title }}
          </p>

          <p class="mt-2 text-sm leading-6 text-slate-400">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
