<template>
  <div class="min-h-screen overflow-hidden bg-slate-950">
    <div class="fixed inset-0 -z-10">
      <div class="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div class="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[120px]" />
      <div class="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[120px]" />
    </div>

    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
