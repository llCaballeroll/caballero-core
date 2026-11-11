// En el HTML prerenderizado el contenido sale visible (sin la clase .reveal),
// así se lee aunque JavaScript no cargue; en el cliente se anima.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', { getSSRProps: () => ({}) })
})
