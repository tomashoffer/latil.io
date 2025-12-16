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

El formulario está conectado a `/api/contact/route.ts` y envía emails a **contact@latil.io** usando Resend.

### Configuración de Resend

1. Crear cuenta en [Resend](https://resend.com) (plan gratuito: 3,000 emails/mes)
2. Obtener tu API Key desde el dashboard (Dashboard → API Keys → Create API Key)
3. Crear archivo `.env.local` en la raíz del proyecto:
```bash
RESEND_API_KEY=re_tu_api_key_real_aqui
RESEND_TEST_EMAIL=tu_email@gmail.com  # Opcional: para pruebas en desarrollo
RESEND_FROM_EMAIL=contact@latil.io  # Opcional: por defecto usa contact@latil.io
```

**Importante:** 
- El archivo `.env.local` ya está en `.gitignore`, así que no se subirá a Git
- Reemplazá `re_tu_api_key_real_aqui` con tu API key real de Resend
- `RESEND_TEST_EMAIL`: Opcional. Si está configurado, los emails se envían a ese email (útil para pruebas). Si no, se envían a `contact@latil.io`
- `RESEND_FROM_EMAIL`: Opcional. Por defecto usa `contact@latil.io` (requiere dominio verificado en Resend)
- En producción (Netlify/Vercel), agregá `RESEND_API_KEY` en la configuración del proyecto

4. **Dominio verificado:** El dominio `latil.io` ya está verificado en Resend. Los emails se envían desde `contact@latil.io` a `contact@latil.io`.

El email se envía automáticamente a **contact@latil.io** cuando alguien completa el formulario con toda la información del contacto.

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

