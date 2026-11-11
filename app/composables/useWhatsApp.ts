export const useWhatsApp = () => {
  const workPhone = '527221240597'
  const personalPhone = '527228868540'

  const buildWhatsAppUrl = (
    message = 'Hola, quiero cotizar un proyecto con Caballero Core.',
    phone = workPhone
  ) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return { workPhone, personalPhone, buildWhatsAppUrl }
}
