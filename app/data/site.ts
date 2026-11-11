// Contenido del sitio en un solo lugar: editar aquí cambia todas las páginas.

export type IconName =
  | 'web' | 'system' | 'mobile' | 'automation' | 'ai' | 'support' | 'consulting'
  | 'chart' | 'store' | 'fingerprint' | 'book' | 'chat' | 'doc' | 'spark' | 'shield'
  | 'clock' | 'pin' | 'mail' | 'whatsapp' | 'check' | 'people' | 'bolt'

export const brand = {
  name: 'Caballero Core',
  tagline: 'Tecnología que sí funciona',
  founder: 'Luis Caballero',
  email: 'luis.caballero1199@outlook.com',
  location: 'Metepec, Estado de México',
  coverage: 'Todo México de forma remota · visitas según zona',
  hours: 'Lunes a sábado · 9:00 a 21:00',
  portfolio: 'https://llcaballeroll.github.io/portafolioweb/',
  linkedin: 'https://linkedin.com/in/caballero-jardon-luis-angel-97bb51216',
  github: 'https://github.com/llCaballeroll'
}

export const stats = [
  { value: '7+', label: 'años resolviendo TI en empresas' },
  { value: '26', label: 'sucursales con soporte y sistemas a cargo' },
  { value: '5', label: 'apps y juegos propios publicados o en revisión' },
  { value: 'IA', label: 'en cada proyecto para entregar más rápido' }
]

export interface Service {
  slug: string
  icon: IconName
  title: string
  summary: string
  items: string[]
  featured?: boolean
}

export const services: Service[] = [
  {
    slug: 'web',
    icon: 'web',
    title: 'Páginas web que venden',
    summary: 'Sitios rápidos y claros que se ven perfectos en el celular, para que tus clientes te encuentren, te entiendan y te escriban.',
    items: ['Sitios de marca e informativos', 'Landing pages para campañas', 'Catálogos digitales', 'Botón directo a WhatsApp y Google Maps']
  },
  {
    slug: 'ia',
    icon: 'ai',
    title: 'Inteligencia artificial para tu negocio',
    summary: 'Ponemos la IA a trabajar en lo que hoy te quita horas: leer documentos, ordenar información, responder dudas y preparar reportes.',
    items: ['Automatizaciones con IA', 'Asistentes para tu equipo', 'Análisis de datos y resúmenes', 'Capacitación para usar IA en el día a día'],
    featured: true
  },
  {
    slug: 'sistemas',
    icon: 'system',
    title: 'Sistemas a la medida',
    summary: 'Ordenamos tu operación en una sola herramienta: ventas, inventario, asistencias o lo que hoy vive en hojas sueltas.',
    items: ['Paneles administrativos', 'Programas para Windows y Mac', 'Conexión con tu punto de venta o ERP', 'Accesos por rol']
  },
  {
    slug: 'apps',
    icon: 'mobile',
    title: 'Apps para Android e iOS',
    summary: 'Diseñamos, programamos y publicamos tu app en las tiendas, desde la idea hasta las actualizaciones.',
    items: ['Android y iOS con un solo desarrollo', 'Publicación en App Store y Google Play', 'Prototipos para validar tu idea', 'Compras dentro de la app y anuncios']
  },
  {
    slug: 'reportes',
    icon: 'automation',
    title: 'Reportes y tableros automáticos',
    summary: 'Tus números al día sin copiar y pegar: reportes que se arman solos y tableros que puedes abrir desde el celular.',
    items: ['Tableros web para dirección', 'Excel y Google Sheets conectados', 'Consultas a bases de datos', 'Cifras validadas contra la fuente']
  },
  {
    slug: 'soporte',
    icon: 'support',
    title: 'Soporte y consultoría TI',
    summary: 'Atendemos tus equipos cuando fallan, les damos mantenimiento y te decimos sin rodeos qué conviene mejorar.',
    items: ['Diagnóstico y reparación, remota o en sitio', 'Mantenimiento preventivo y respaldos', 'Redes, internet e impresoras', 'Plan de mejora y revisión de proveedores']
  }
]

export const aiPoints = [
  { icon: 'doc' as IconName, title: 'Documentos que se leen solos', text: 'Facturas, pedidos o formatos que la IA revisa, ordena y pasa a tu Excel o sistema.' },
  { icon: 'chat' as IconName, title: 'Asistentes para tu equipo', text: 'Respuestas rápidas sobre tus procesos, manuales y productos, con tu propia información.' },
  { icon: 'chart' as IconName, title: 'Datos que se explican', text: 'Resúmenes de ventas, gastos o solicitudes en lenguaje claro, con cifras verificadas.' },
  { icon: 'bolt' as IconName, title: 'Desarrollo más rápido', text: 'Trabajamos con agentes de IA para programar y probar: menos tiempo de entrega y mejor costo.' }
]

export interface App {
  name: string
  text: string
  meta: string
  img: string
  href?: string
  soon?: boolean
}

export const apps: App[] = [
  { name: 'MUTA', text: 'Gira, atrapa y muta. Juego casual con 20 skins y dos modos de juego.', meta: 'Android · iPhone', img: 'img/apps/juego-muta.jpg', href: 'https://llcaballeroll.github.io/muta_web/' },
  { name: 'Orbita – Wrist Browser', text: 'Navegador web completo para Apple Watch, en 33 idiomas.', meta: 'Apple Watch · iPhone', img: 'img/apps/app-orbita.jpg', href: 'https://llcaballeroll.github.io/orbita_browser_web/' },
  { name: 'Snake Islands', text: 'El clásico renovado: 10 islas, 77 skins y récords en línea.', meta: 'iPhone · Android', img: 'img/apps/juego-snake-islands.jpg', href: 'https://llcaballeroll.github.io/snake_islands_web/' },
  { name: 'Amon: The Mystic Oracle', text: 'Un oráculo de entretenimiento que responde a tu voz.', meta: 'iPhone · Android', img: 'img/apps/juego-amon-oracle.jpg', href: 'https://llcaballeroll.github.io/amon_oracle_web/' },
  { name: 'Bounce Royale', text: 'Arcade de un toque con modo competitivo contra 5 rivales.', meta: 'iPhone · Android', img: 'img/apps/juego-bounce-royale.jpg', href: 'https://llcaballeroll.github.io/bounce_royale_web/' },
  { name: 'Crazy Chicken', text: 'Persecución en una granja de juguete, con modelos 3D hechos con IA.', meta: 'En desarrollo', img: 'img/apps/juego-crazy-chicken.jpg', soon: true }
]

export const cases = [
  { icon: 'chart' as IconName, tag: 'Reportes', title: 'Tableros para la dirección', text: 'Ventas, compras y asistencias de una cadena de restaurantes en tableros web que se abren desde el celular, con cifras validadas contra la base de datos.' },
  { icon: 'store' as IconName, tag: 'Sistemas', title: 'Operación de 26 sucursales', text: 'Programas para Windows y Mac que juntan en un clic la información de todas las sucursales y generan los históricos en Excel.' },
  { icon: 'fingerprint' as IconName, tag: 'Sistemas', title: 'Checador con huella digital', text: 'Control de asistencia con lector biométrico, horarios flexibles y cálculo automático de horas para nómina.' },
  { icon: 'shield' as IconName, tag: 'Infraestructura', title: 'TI de una planta industrial', text: 'Redes, firewalls, respaldos, mesa de ayuda e implementación de ERP para más de 100 usuarios.' }
]

export const steps = [
  { title: 'Nos cuentas', text: 'Platícanos qué necesitas con tus palabras. No hace falta saber cómo se llama técnicamente.' },
  { title: 'Te proponemos', text: 'Analizamos tu caso y te recomendamos lo que de verdad te conviene, sin venderte de más.' },
  { title: 'Cotizamos claro', text: 'Un presupuesto por escrito, con tiempos y alcances, sin letras chiquitas.' },
  { title: 'Construimos', text: 'Te enseñamos avances reales y ajustamos contigo antes de entregar.' },
  { title: 'Te acompañamos', text: 'Entregamos, te capacitamos y seguimos aquí cuando lo necesites.' }
]

export const promises = [
  { icon: 'people' as IconName, title: 'Trato directo', text: 'Hablas con quien hace el trabajo. Sin intermediarios ni call centers.' },
  { icon: 'check' as IconName, title: 'Precios claros', text: 'Sabes cuánto cuesta y qué incluye antes de empezar.' },
  { icon: 'clock' as IconName, title: 'Respuesta el mismo día', text: 'De lunes a sábado te contestamos en horario de atención.' },
  { icon: 'spark' as IconName, title: 'Tecnología actual', text: 'Usamos IA y herramientas modernas para entregar más rápido.' }
]

export const navLinks = [
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Sobre mí', to: '/sobre-mi' },
  { label: 'Contacto', to: '/contacto' }
]
