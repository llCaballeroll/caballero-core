// Directiva v-reveal: aparición suave al entrar en pantalla.
export default defineNuxtPlugin((nuxtApp) => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const io = !reduce && 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io!.unobserve(e.target)
          }
        }
      }, { rootMargin: '0px 0px -6% 0px' })
    : null

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement) {
      // Lo que ya está en pantalla al cargar no se anima (evita parpadeo).
      if (!io || el.getBoundingClientRect().top < window.innerHeight) return
      el.classList.add('reveal')
      io.observe(el)
    },
    unmounted(el: HTMLElement) {
      io?.unobserve(el)
    }
  })
})
