<script setup lang="ts">
const { buildWhatsAppUrl, workPhone, personalPhone } = useWhatsApp()

const email = 'luis.caballero1199@outlook.com'
</script>

<template>
  <section class="section-padding border-t border-white/10">
    <div class="section-container">
      <div class="glass-card rounded-[2rem] p-8 md:p-12">
        <div class="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Contacto
            </p>

            <h2 class="mt-4 text-4xl font-black text-white md:text-5xl">
              Cuéntanos qué necesitas. Te respondemos hoy mismo.
            </h2>

            <p class="mt-5 max-w-2xl text-slate-300">
              No importa si todavía no tienes claro qué quieres ni cómo se llama. Escríbenos con palabras normales lo que necesitas resolver y nosotros lo traducimos a una solución concreta y un costo claro.
            </p>

            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                :href="buildWhatsAppUrl('Hola, me gustaría platicar sobre un proyecto con Caballero Core.', workPhone)"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Escribir por WhatsApp
              </a>

              <a
                :href="`mailto:${email}`"
                class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Mandar correo
              </a>
            </div>
          </div>

          <div class="space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                WhatsApp (principal)
              </p>
              <a
                :href="buildWhatsAppUrl('Hola, quiero información sobre Caballero Core.', workPhone)"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 block text-lg font-bold text-white hover:text-cyan-300"
              >
                722 124 0597
              </a>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                WhatsApp (alterno)
              </p>
              <a
                :href="buildWhatsAppUrl('Hola, quiero información sobre Caballero Core.', personalPhone)"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 block text-lg font-bold text-white hover:text-cyan-300"
              >
                722 886 8540
              </a>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                Correo
              </p>
              <a
                :href="`mailto:${email}`"
                class="mt-1 block text-sm font-semibold text-white hover:text-cyan-300"
              >
                {{ email }}
              </a>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                Dónde estamos
              </p>
              <p class="mt-1 text-sm text-slate-300">
                Metepec, Estado de México
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                A quién atendemos
              </p>
              <p class="mt-1 text-sm text-slate-300">
                A toda la república de forma remota. Visitas presenciales según zona.
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                Horario
              </p>
              <p class="mt-1 text-sm text-slate-300">
                Lunes a sábado · 9:00 a 21:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
