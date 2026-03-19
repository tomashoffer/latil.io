# Manual de marca — Latil.io

Guía de uso de colores, logos y tipografía para mantener la identidad visual de Latil.io en todos los canales.

---

## 1. Colores principales

### 1.1 Paleta Primary (azul)

Uso: tecnología, confianza, interfaces secundarias.

| Nombre   | Hex       | Uso sugerido                    |
|----------|-----------|----------------------------------|
| primary-50  | `#eff6ff` | Fondos muy suaves                |
| primary-100 | `#dbeafe` | Fondos, hover suave              |
| primary-200 | `#bfdbfe` | Bordes, fondos de cards          |
| primary-300 | `#93c5fd` | Iconos secundarios               |
| primary-400 | `#60a5fa` | Links, estados hover             |
| **primary-500** | `#3b82f6` | **Color principal azul**         |
| **primary-600** | `#2563eb` | **Botones, CTAs secundarios**    |
| primary-700 | `#1d4ed8` | Hover en botones                 |
| primary-800 | `#1e40af` | Texto sobre fondos claros        |
| primary-900 | `#1e3a8a` | Texto de máximo contraste        |

### 1.2 Paleta Accent (violeta)

Uso: marca principal, CTAs, títulos, iconos de marca, elementos destacados.

| Nombre   | Hex       | Uso sugerido                    |
|----------|-----------|----------------------------------|
| accent-50  | `#f5f3ff` | Fondos muy suaves                |
| accent-100 | `#ede9fe` | Anillos de fotos, fondos         |
| accent-200 | `#ddd6fe` | Bordes suaves                    |
| accent-300 | `#c4b5fd` | Iconos en estado normal          |
| accent-400 | `#a78bfa` | Hover en links                   |
| **accent-500** | `#8b5cf6` | **Violeta medio**               |
| **accent-600** | `#7c3aed` | **Color principal de marca**    |
| accent-700 | `#6d28d9` | Hover en botones primarios       |
| accent-800 | `#5b21b6` | Texto sobre fondos claros        |
| accent-900 | `#4c1d95` | Máximo contraste violeta         |

### 1.3 Neutros (Tailwind por defecto)

- **Texto principal:** `gray-900` (#111827)  
- **Texto secundario:** `gray-600` (#4b5563)  
- **Bordes:** `gray-100` / `gray-200`  
- **Fondos:** `white`, `gray-50`, `slate-50`  

---

## 2. Gradiente de marca

El logo y los elementos hero usan un gradiente que une azul y violeta.

### Especificación

- **Tipo:** lineal, diagonal (arriba-izquierda → abajo-derecha).  
- **Dirección CSS:** `135deg` (equivalente a `to bottom right`).

**Valores exactos:**

```css
background: linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%);
```

**En Tailwind:**

```html
class="bg-gradient-to-br from-primary-500 to-accent-600"
```

**Variante más oscura (CTAs, fondos fuertes):**

```html
class="bg-gradient-to-br from-accent-600 to-purple-600"
```

### Uso recomendado del gradiente

- Logo principal (icono y wordmark).  
- Fondos de secciones CTA.  
- Botones primarios.  
- Favicon y iconos de app.  

---

## 3. Logos

### 3.1 Archivos de logo

| Asset | Ruta | Uso |
|-------|------|-----|
| Wordmark con gradiente | `/logos/latil-wordmark-gradient.png` | Navbar, footer, comunicaciones sobre fondo claro u oscuro (según contraste). |
| Icono 96px | `/logos/latil-icon-96-gradient.png` | Favicon, Apple touch icon, redes. |
| Favicon | `/favicon.svg` | Pestaña del navegador. |

### 3.2 Reglas de uso del logo

**Hacer:**

- Usar el wordmark con gradiente en fondos que aseguren buen contraste (blanco, grises muy claros o fondos oscuros con logo en blanco si existe versión).  
- Respetar un área de respiro mínima alrededor del logo (por ejemplo, la altura de la “L” o del wordmark).  
- Mantener la proporción del símbolo/wordmark; escalar sin deformar.  

**Evitar:**

- Cambiar los colores del gradiente (no reemplazar por un solo color sin criterio de marca).  
- Comprimir o estirar el logo.  
- Colocar el logo sobre fondos que lo hagan ilegible o que confundan con el gradiente.  
- Añadir efectos (sombras fuertes, contornos, distorsiones).  

### 3.3 Colores del logo

- Gradiente: de **primary-500** (#3b82f6) a **accent-600** (#7c3aed).  
- En fondos oscuros: usar versión en blanco si está disponible; si no, asegurar que el gradiente tenga suficiente contraste.  

---

## 4. Tipografía

### 4.1 Familia principal

- **Inter** (variable: `--font-inter`).  
- Pesos en uso: 300, 400, 500, 600, 700, 800, 900.  

### 4.2 Uso recomendado

| Uso | Peso | Clase Tailwind (ej.) |
|-----|------|----------------------|
| Títulos hero / H1 | 700–800 | `font-bold` / `font-extrabold` |
| Títulos de sección / H2 | 700 | `font-bold` |
| Subtítulos / H3 | 600 | `font-semibold` |
| Cuerpo | 400 | `font-normal` |
| Cuerpo secundario | 400 con `text-gray-600` | — |
| Botones, labels | 500–600 | `font-medium` / `font-semibold` |
| Captions | 400 | `text-sm` |

### 4.3 Importación (ya usada en el proyecto)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
```

---

## 5. Uso de color en producto

- **Un solo color de acento en UI:** para títulos, iconos de marca y links usar **solo accent (violeta)**. No mezclar azul y verde en esos elementos; mantiene la marca consistente.  
- **Botón primario:** gradiente `from-accent-600 to-purple-600` o sólido `accent-600`.  
- **Links e iconos (ej. LinkedIn):** `text-accent-600` / `hover:text-accent-700`.  
- **Rings y bordes de fotos/avatares:** `ring-accent-100` o `border-accent-200`.  

---

## 6. Resumen rápido

| Elemento | Especificación |
|----------|----------------|
| **Color principal de marca** | Violeta `#7c3aed` (accent-600) |
| **Color secundario** | Azul `#2563eb` (primary-600) |
| **Gradiente logo / hero** | `linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)` |
| **Tipografía** | Inter (300–900) |
| **Wordmark** | `/logos/latil-wordmark-gradient.png` |
| **Icono** | `/logos/latil-icon-96-gradient.png` |

---

*Documento generado para uso interno y con proveedores. Actualizar si se añaden nuevas versiones de logo o colores oficiales.*
