export const useWhatsApp = () => {
  const workPhone = '527221240597'
  const personalPhone = '527228868540'

  const buildWhatsAppUrl = (
    message = 'Hola, quiero cotizar una solución con Caballero Core.',
    phone = workPhone
  ) => {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  }

  return {
    workPhone,
    personalPhone,
    buildWhatsAppUrl
  }
}
