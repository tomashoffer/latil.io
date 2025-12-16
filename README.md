# Latil.io - Landing Page

Landing page moderna y profesional para Latil.io construida con Next.js 14+, TypeScript y Tailwind CSS.

## 🚀 Características

- **Next.js 14+** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos modernos
- **Framer Motion** para animaciones suaves
- **React Hook Form + Zod** para validación de formularios
- **Responsive Design** mobile-first
- **SEO Optimizado** con meta tags y structured data
- **Dark Mode Ready** (preparado para toggle)

## 📦 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## 🏗️ Estructura del Proyecto

```
/app
  /api
    /contact
      route.ts          # API endpoint para formulario
  layout.tsx            # Layout principal con Navbar/Footer
  page.tsx              # Página principal
  globals.css           # Estilos globales

/components
  /layout
    Navbar.tsx          # Navegación sticky
    Footer.tsx          # Footer
  /sections
    Hero.tsx            # Sección hero
    Problems.tsx        # Problemas que resolvemos
    SolutionCloud.tsx   # Solución Cloud/FinOps
    SolutionFinance.tsx # Solución Finanzas
    Clients.tsx         # Logos de clientes
    About.tsx           # Quiénes somos
    ContactCTA.tsx      # Formulario de contacto
  /ui
    Button.tsx          # Componente botón
    Card.tsx            # Componente card
    Input.tsx           # Input con label
    Textarea.tsx        # Textarea con label
    Select.tsx          # Select con label
  /animations
    FadeIn.tsx          # Animación fade in on scroll
    CountUp.tsx         # Animación contador numérico

/lib
  utils.ts              # Utilidades (cn helper)
  validations.ts        # Schemas Zod
```

## 🎨 Personalización

### Colores

Los colores se pueden personalizar en `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },  // Azul principal
  accent: { ... },   // Púrpura/violeta
}
```

### Contenido

Todo el contenido está en los componentes de secciones dentro de `/components/sections/`.

## 📝 Formulario de Contacto

El formulario está conectado a `/api/contact/route.ts`. Para integrar con servicios reales:

1. **Email**: Integrar Resend o SendGrid
2. **CRM**: Conectar con HubSpot, Salesforce, etc.
3. **Base de datos**: Guardar leads en PostgreSQL/MongoDB

Ejemplo con Resend:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({ ... });
```

## 🚢 Deploy

### Vercel (Recomendado)

1. Push a GitHub
2. Conectar repo en Vercel
3. Deploy automático

### Otros

```bash
npm run build
npm start
```

## 📊 Performance

- Lighthouse Score objetivo: >90
- Optimización de imágenes con Next.js Image
- Lazy loading de componentes
- Code splitting automático

## 🔧 Próximos Pasos

- [ ] Integrar Calendly/Cal.com widget
- [ ] Agregar Google Analytics
- [ ] Implementar dark mode toggle
- [ ] Agregar más animaciones
- [ ] Optimizar imágenes reales
- [ ] Integrar email service (Resend/SendGrid)
- [ ] Conectar con CRM

## 📄 Licencia

Privado - Latil.io

