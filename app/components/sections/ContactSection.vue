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
              ¿Tienes un problema tecnológico o una idea por desarrollar?
            </h2>

            <p class="mt-5 max-w-2xl text-slate-300">
              Escríbeme con tu necesidad: página web, sistema, app, soporte técnico, mantenimiento, automatización, reportes o consultoría TI. Revisamos el caso, definimos alcance y preparamos una cotización clara.
            </p>

            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                :href="buildWhatsAppUrl('Hola, quiero cotizar un proyecto o servicio con Caballero Core.', workPhone)"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                WhatsApp de trabajo
              </a>

              <a
                :href="`mailto:${email}`"
                class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Enviar correo
              </a>
            </div>
          </div>

          <div class="space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                WhatsApp principal
              </p>
              <a
                :href="buildWhatsAppUrl('Hola, quiero información de Caballero Core.', workPhone)"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 block text-lg font-bold text-white hover:text-cyan-300"
              >
                722 124 0597
              </a>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                WhatsApp alternativo
              </p>
              <a
                :href="buildWhatsAppUrl('Hola, quiero información de Caballero Core.', personalPhone)"
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
                Base
              </p>
              <p class="mt-1 text-sm text-slate-300">
                Metepec, Estado de México · C.P. 52172
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                Cobertura
              </p>
              <p class="mt-1 text-sm text-slate-300">
                Atención remota nacional y atención presencial sujeta a zona.
              </p>
            </div>

            <div>
              <p class="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                Horario
              </p>
              <p class="mt-1 text-sm text-slate-300">
                9:00 AM - 21:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
