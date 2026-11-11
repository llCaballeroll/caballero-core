<script setup lang="ts">
import { brand } from '~/data/site'

defineProps<{ full?: boolean, alt?: boolean }>()
const base = useRuntimeConfig().app.baseURL

const timeline = [
  { date: '2026 — hoy', role: 'Responsable de TI y software', place: 'Cadena de restaurantes · 26 sucursales' },
  { date: '2025 — 2026', role: 'Desarrollador de apps independiente', place: 'Apps y juegos en App Store y Google Play' },
  { date: '2022 — 2025', role: 'Gerente de Tecnologías de la Información', place: 'Industria · equipo de 5 personas' },
  { date: '2022', role: 'Consultor de datos (ETL)', place: 'Capgemini' },
  { date: '2019 — 2022', role: 'Auxiliar de TI', place: 'Industria · soporte y ERP' }
]

const skills = ['Páginas web', 'Flutter (Android e iOS)', 'SwiftUI', 'C# / .NET', 'SQL Server', 'Python', 'Google Apps Script', 'Agentes de IA', 'Redes y Fortinet', 'Windows Server']
</script>

<template>
  <section class="section" :class="{ 'section-alt': alt }">
    <div class="container about">
      <div v-reveal class="about-card">
        <img :src="base + 'img/perfil.jpg'" alt="Luis Caballero" width="132" height="132">
        <h3>{{ brand.founder }}</h3>
        <p>Fundador · Ingeniero en TI</p>
        <div class="links">
          <a :href="brand.portfolio" target="_blank" rel="noopener noreferrer">Portafolio</a>
          <a :href="brand.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a :href="brand.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div class="about-text">
        <span class="eyebrow">Sobre mí</span>
        <h2 class="section-title" style="margin-bottom: 20px">Hablas directo con quien hace el trabajo.</h2>
        <p>
          Soy Luis Caballero, Ingeniero en Tecnologías de la Información con <strong>más de 7 años</strong> en desarrollo de software, soporte, infraestructura y dirección de equipos de TI.
        </p>
        <p>
          Caballero Core nace para que la tecnología deje de ser un dolor de cabeza: escucho lo que necesitas, te lo explico sin tecnicismos y entrego algo que sí te sirve. Hoy trabajo con <strong>inteligencia artificial</strong> en cada proyecto para entregar más rápido y con mejor calidad.
        </p>

        <template v-if="full">
          <div class="timeline">
            <div v-for="t in timeline" :key="t.role" class="tl-item">
              <span>{{ t.date }}</span>
              <div><b>{{ t.role }}</b><em>{{ t.place }}</em></div>
            </div>
          </div>
          <div class="chips" style="margin-top: 24px">
            <span v-for="s in skills" :key="s" class="chip">{{ s }}</span>
          </div>
        </template>
        <NuxtLink v-else to="/sobre-mi" class="text-link" style="margin-top: 20px">Conocer más</NuxtLink>
      </div>
    </div>
  </section>
</template>
