<script setup lang="ts">
const { buildWhatsAppUrl } = useWhatsApp()
</script>

<template>
  <section class="section-padding">
    <div class="section-container grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p class="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
          Caballero Core · by Luis Caballero
        </p>

        <h1 class="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
          Tu negocio merece tecnología que
          <span class="gradient-text">sí funcione.</span>
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Diseñamos páginas web, apps móviles y herramientas a la medida que te ahorran tiempo, te ayudan a vender más y dejan de darte dolores de cabeza. Sin tecnicismos, sin promesas vacías: solo soluciones que entregamos y te explicamos claro.
        </p>

        <div class="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            :href="buildWhatsAppUrl('Hola, me gustaría platicar sobre un proyecto con Caballero Core.')"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Platica tu proyecto por WhatsApp
          </a>

          <BaseButton href="/servicios" variant="secondary">
            Ver qué hacemos
          </BaseButton>
        </div>

        <div class="mt-8 flex flex-wrap gap-3 text-xs font-medium text-slate-400">
          <span class="rounded-full border border-white/10 px-4 py-2">Metepec, Edo. Méx.</span>
          <span class="rounded-full border border-white/10 px-4 py-2">Atención remota en todo México</span>
          <span class="rounded-full border border-white/10 px-4 py-2">Lun–Sáb · 9:00 a 21:00</span>
        </div>
      </div>

      <div class="glass-card relative rounded-[2rem] p-6">
        <div class="rounded-[1.5rem] border border-white/10 bg-slate-950 p-6">
          <div class="mb-6 flex gap-2">
            <span class="h-3 w-3 rounded-full bg-red-400" />
            <span class="h-3 w-3 rounded-full bg-yellow-400" />
            <span class="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <pre class="overflow-hidden text-sm leading-7 text-slate-300"><code>const caballeroCore = {
  marca: 'Caballero Core',
  fundador: 'Luis Caballero',
  haceFalta: [
    'Página web profesional',
    'App móvil',
    'Sistema interno a la medida',
    'Reportes y procesos automáticos',
    'Soporte técnico confiable'
  ],
  experiencia: '7+ años en TI',
  cobertura: 'Todo México (remoto)',
  estado: 'Listo para escucharte'
}</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>
