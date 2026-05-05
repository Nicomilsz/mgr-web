# Plan: Web MVP MGR — Captación de Propiedades en CABA

**Creado:** 2026-05-05
**Estado:** Implementado
**Pedido:** Crear web MVP para inmobiliaria MGR, orientada a captar propietarios en CABA, con copy de conversión, WhatsApp integrado, formulario de tasación y diseño minimalista profesional.

---

## Descripción General

### Qué Logra Este Plan

Se construye un sitio web de una sola página (landing page) en HTML + Tailwind CSS que actúa como punto de confianza y captación para MGR. La página convierte visitantes (propietarios con intención de vender) en contactos reales a través de un formulario de tasación gratuita y un botón de WhatsApp. El resultado es un archivo `index.html` listo para publicar sin necesidad de servidor ni framework.

### Por Qué Importa

MGR está en su primer mes operativo con 0 propiedades captadas. Una presencia web simple pero profesional legitima la marca frente a propietarios dudosos, diferencia a MGR de intermediarios informales y activa un canal pasivo de captación 24/7 sin esfuerzo adicional. Es el paso mínimo para no perder oportunidades por falta de credibilidad digital.

---

## Estado Actual

### Estructura Existente Relevante

- `contexto/info-negocio.md` — Describe MGR, su modelo y diferencial operativo
- `contexto/estrategia.md` — Prioridad 4: "construir presencia digital simple pero profesional"
- `contexto/proyectos.md` — "Desarrollo de web MGR" está en Backlog
- `salidas/` — Vacío, primer entregable del workspace

### Brechas o Problemas que se Abordan

- MGR no tiene presencia web → propietarios que buscan referencias no encuentran nada
- Sin web, WhatsApp e Instagram no tienen respaldo de credibilidad
- No hay forma pasiva de recibir consultas (todo depende de outreach activo)

---

## Cambios Propuestos

### Resumen de Cambios

- Crear `salidas/web-mgr/index.html` — landing page completa, lista para abrir en browser y deployar
- Crear `salidas/web-mgr/README.md` — instrucciones de deploy en Vercel/Netlify (sin código)
- Mover "Desarrollo de web MGR" de Backlog a Completados en `contexto/proyectos.md`
- Actualizar `contexto/datos-actuales.md` — registrar canal web como activo

### Nuevos Archivos a Crear

| Ruta del Archivo | Propósito |
|---|---|
| `salidas/web-mgr/index.html` | Landing page completa — todo el HTML, CSS (Tailwind CDN) y JS en un solo archivo |
| `salidas/web-mgr/README.md` | Guía de deploy paso a paso para Vercel y Netlify sin conocimientos técnicos |

### Archivos a Modificar

| Ruta del Archivo | Cambios |
|---|---|
| `contexto/proyectos.md` | Mover "Desarrollo de web MGR" de Backlog → En desarrollo → Completados |
| `contexto/datos-actuales.md` | Actualizar "Canales activos" de 1 a 2 (agregar Web) |

---

## Decisiones de Diseño

### Decisiones Clave Tomadas

1. **HTML + Tailwind CDN (sin build tools)**: Cero configuración técnica. El archivo funciona con doble clic. Deploy con drag & drop en Netlify. Cero dependencias de Node, npm o frameworks. Ideal para alguien sin experiencia técnica avanzada.

2. **Una sola página (no multi-página)**: Para un MVP sin cartera todavía, una landing de conversión es más efectiva que un sitio con múltiples páginas vacías. Reduce el tiempo de implementación de días a horas.

3. **Audiencia primaria = propietarios, no compradores**: El copy está 100% orientado a captar propiedades. Los compradores vendrán cuando haya cartera. Invertir el enfoque ahora sería prematuro.

4. **CTA principal = WhatsApp (no email)**: Consistente con el canal principal de MGR. Reduce fricción. El formulario es CTA secundario para quienes prefieren no llamar.

5. **Paleta bordó/vino oscuro + rosa/fucsia + blanco**: Inspirada en Rodríguez Inmobiliaria. El fondo vino oscuro (`#2d0a17`) transmite solidez y exclusividad. El acento fucsia (`#c93d65`) aporta modernidad y energía sin caer en genérico. El blanco y grises cálidos equilibran legibilidad. Esta combinación diferencia a MGR visualmente de la mayoría de inmobiliarias que usan azul corporativo o verde.

6. **Sin sección de propiedades en cartera**: MGR no tiene cartera aún. Incluir una sección vacía restaría credibilidad. Se agrega en una segunda iteración.

7. **Formulario de tasación sin backend**: El formulario usa un enlace `mailto:` o redirige a WhatsApp con los datos pre-cargados. Sin servidor, sin base de datos, funciona inmediatamente.

### Alternativas Consideradas

- **Next.js / React**: Descartado. Requiere Node, build steps, hosting con soporte JS. Innecesario para MVP de una página.
- **Webflow / Wix**: Descartado. Crea dependencia de plataforma, costo mensual, y no queda en el workspace del usuario.
- **Multi-página (Home + Propiedades + Contacto)**: Descartado para MVP. Con cartera vacía, las páginas adicionales dañan la credibilidad.

### Preguntas Abiertas

1. **Número de WhatsApp de MGR** — Necesario para el botón de contacto. Placeholder: `+54 9 11 XXXX-XXXX`
2. **¿Tiene logo MGR?** — Si no hay logo, se usa tipografía "MGR" en bold como logotipo de texto.
3. **Colores de marca MGR** — Paleta definida: fondo vino oscuro `#2d0a17`, acento fucsia `#c93d65`, blanco `#ffffff`, gris cálido claro `#faf6f7`. Sin logo propio aún → logotipo tipográfico "MGR" en bold blanco.
4. **Email de contacto** — Para el formulario y footer. Placeholder: `contacto@mgr.com.ar`
5. **¿Se va a deployar en un dominio propio?** — Si hay dominio (ej. `mgrinmobiliaria.com.ar`), se menciona en el README. Si no, se usa el subdominio gratuito de Vercel/Netlify.

---

## Tareas Paso a Paso

### Paso 1: Definir estructura de secciones y copy

Escribir el contenido completo de cada sección antes de codear. El copy es la parte más importante de la landing — determina si un propietario llama o no.

**Secciones de la landing (en orden):**

1. **Navbar** — Logo MGR + botón "Contactanos" (→ WhatsApp)
2. **Hero** — Headline principal + subtítulo + 2 CTAs
3. **Números / prueba social** — 3 datos que generan confianza
4. **Cómo funciona** — 3 pasos del proceso de venta con MGR
5. **Por qué MGR** — 4 diferenciales clave
6. **Formulario de tasación gratuita** — 5 campos simples + botón enviar
7. **Footer** — Datos de contacto + WhatsApp + Instagram

**Copy completo por sección:**

---

**NAVBAR**
- Logo: `MGR` (tipografía bold, blanco, sobre fondo vino oscuro)
- Tagline pequeña: `Inmobiliaria` (blanco semitransparente, al lado o debajo del logo)
- Link derecho: `Contactanos` (botón con borde fucsia, texto blanco → abre wa.me)

---

**HERO**
- Fondo: vino oscuro `#2d0a17` con textura sutil (gradiente oscuro) o foto desaturada de CABA con overlay oscuro
- Headline: `Vendé tu propiedad en CABA con quien realmente se ocupa`
- Subtítulo: `En MGR acompañamos cada etapa de la venta con trato directo, gestión profesional y total claridad. Sin vueltas.`
- Línea de confianza (pequeña, debajo del subtítulo, con ícono de reloj o check): `Respondemos todas las consultas el mismo día.`
- CTA 1 (principal): `Pedí tu tasación gratuita` (botón relleno fucsia → scroll a formulario)
- CTA 2 (secundario): `Escribinos por WhatsApp` (botón con borde blanco → wa.me con mensaje pre-cargado)

---

**DIFERENCIALES (3 columnas, fondo blanco o gris cálido)**
- `Sin costo inicial` — Tasamos tu propiedad sin cargo y sin compromiso. Empezamos cuando vos lo decidís.
- `Gestión de punta a punta` — Publicación, visitas, negociación y escritura. Nos ocupamos de cada paso.
- `Respuesta el mismo día` — Respondemos todas las consultas antes de que termine el día. Sin formularios que demoran.

---

**CÓMO FUNCIONA**
- Numeración grande en fucsia, línea conectora entre pasos
- Paso 1: `Tasación sin cargo` — Completás el formulario o nos escribís. Coordinamos una evaluación de tu propiedad sin costo ni compromiso.
- Paso 2: `Publicación y gestión activa` — Publicamos en los principales portales, atendemos consultas y organizamos visitas con compradores calificados.
- Paso 3: `Cierre con acompañamiento` — Negociamos en tu nombre y te acompañamos hasta la escritura. Vos cobrás, nosotros nos ocupamos.

---

**POR QUÉ MGR**
- Grid 2x2, fondo blanco, iconos lineales simples en fucsia
- `Trato cercano` — Siempre hablás con la misma persona. Sabemos quién sos y qué necesitás.
- `Respuesta el mismo día` — Contestamos consultas rápido. Sin demoras que hacen perder oportunidades.
- `Gestión profesional` — Organizamos cada etapa del proceso. Nada queda librado al azar.
- `Conexión interior–CABA` — Trabajamos con compradores del interior del país que buscan propiedades en Capital. Un canal de demanda que muchas inmobiliarias no aprovechan.

---

**FORMULARIO DE TASACIÓN GRATUITA**
- Fondo: gris cálido `#faf6f7` con sección de título sobre fondo vino oscuro
- Título (sobre fondo oscuro): `Tasamos tu propiedad sin cargo`
- Subtítulo: `Completá el formulario y te contactamos para coordinar la tasación.`
- Campos (sobre fondo claro):
  - Nombre completo (texto)
  - Teléfono / WhatsApp (tel)
  - Tipo de propiedad (select: Departamento / Casa / PH / Local comercial / Otro)
  - Barrio o zona (texto)
  - Superficie aproximada en m² (número, opcional)
- Botón: `Solicitar tasación gratuita` (fucsia, full-width en mobile)
- Acción: genera URL wa.me con mensaje pre-cargado: `Hola, me interesa una tasación para mi propiedad. Datos: [nombre], [tipo], [barrio], [m²]`
- Nota debajo del botón: `Te respondemos el mismo día.`

---

**FOOTER**
- Fondo: vino oscuro `#2d0a17`
- Logo MGR (blanco) + tagline: `Inmobiliaria en CABA`
- WhatsApp: `<!-- REEMPLAZAR: WHATSAPP -->`
- Instagram: `<!-- REEMPLAZAR: INSTAGRAM -->`
- Email: `<!-- REEMPLAZAR: EMAIL -->`
- Texto legal: `© 2026 MGR. Todos los derechos reservados.`

---

**Archivos afectados:**
- (ninguno todavía — esta es la fase de planificación del contenido)

---

### Paso 2: Crear carpeta de salida

Crear la estructura de carpetas donde vive el entregable.

**Acciones:**
- Crear directorio `salidas/web-mgr/`
- Este directorio contendrá `index.html` y `README.md`

**Archivos afectados:**
- `salidas/web-mgr/` (directorio nuevo)

---

### Paso 3: Crear `index.html` — landing completa

Construir el archivo HTML completo con Tailwind CSS via CDN. Todo en un solo archivo. Sin archivos CSS separados, sin JavaScript externo excepto el CDN de Tailwind.

**Especificaciones técnicas:**
- `<head>`: Tailwind CDN via script tag, Google Fonts `Inter` (weights 400/500/700), meta tags completos (title, description, viewport, theme-color)
- **Paleta de colores (variables CSS custom properties en `:root` para facilitar cambios futuros):**
  - `--color-dark: #2d0a17` — fondo hero, navbar, footer
  - `--color-accent: #c93d65` — botones primarios, numeración, iconos, hover states
  - `--color-accent-hover: #a8305a` — hover del botón acento
  - `--color-light: #faf6f7` — fondo de secciones alternas
  - `--color-white: #ffffff` — texto sobre fondo oscuro, fondos principales
  - `--color-text: #1a0a0e` — texto principal sobre fondo claro
  - `--color-text-muted: #6b3a45` — texto secundario, labels
- **Tipografía:** Inter. Headline hero: `text-4xl md:text-5xl lg:text-6xl font-bold`. Subtítulos: `text-lg md:text-xl font-medium`. Body: `text-base font-normal`.
- **Layout:** `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`, responsive mobile-first
- **Estructura HTML semántica** con secciones nombradas via id (`#hero`, `#como-funciona`, `#por-que-mgr`, `#tasacion`, `#contacto`) para escalabilidad futura
- **Navbar:** sticky, fondo `--color-dark`, transición de sombra al scroll (JS inline 3 líneas). Logo "MGR" en bold blanco + tagline "Inmobiliaria" en texto pequeño semitransparente. Botón "Contactanos" con borde fucsia.
- **Hero:** fondo `--color-dark`, texto blanco, layout una columna centrada, headline grande, dos botones en fila (fucsia relleno + borde blanco)
- **Diferenciales:** 3 columnas (`grid grid-cols-1 md:grid-cols-3`), fondo blanco, iconos SVG inline simples en fucsia
- **Cómo funciona:** fondo `--color-light`, 3 pasos numerados, número grande en fucsia (`text-6xl font-black opacity-20` de fondo), descripción
- **Por qué MGR:** fondo blanco, grid 2x2, iconos SVG lineales fucsia, título + descripción por card
- **Formulario:** sección dividida — título sobre fondo `--color-dark` (texto blanco), form sobre fondo `--color-light`. Campos con `border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c93d65]`. Botón full-width fucsia.
- **Footer:** fondo `--color-dark`, texto blanco/semitransparente, links a WhatsApp e Instagram con íconos SVG inline
- **Botón flotante WhatsApp:** posición fija esquina inferior derecha, fondo `--color-accent` (fucsia), ícono WhatsApp SVG blanco, sombra sutil `shadow-lg`. Integrado a la paleta — no usa el verde genérico de WhatsApp. En hover: `--color-accent-hover`. Incluye tooltip "Escribinos" visible en desktop al hacer hover.
- **Formulario action:** JS inline que intercepta el submit, construye el mensaje con los campos y abre `https://wa.me/549XXXXXXXXXX?text=...` en nueva pestaña. Sin backend ni envío de email.

**Acciones:**
- Crear `salidas/web-mgr/index.html` con el HTML completo según especificaciones
- Reemplazar placeholders (número WhatsApp, email, Instagram) con valores reales o marcados claramente con `<!-- REEMPLAZAR: ... -->`
- Verificar que el archivo se abra correctamente en Chrome/Safari con doble clic

**Archivos afectados:**
- `salidas/web-mgr/index.html` (nuevo)

---

### Paso 4: Crear `README.md` — guía de deploy

Instrucciones simples y no técnicas para publicar el sitio en línea.

**Contenido del README:**

```
# Cómo publicar el sitio de MGR

## Opción 1 — Netlify (más fácil, drag & drop)
1. Entrá a netlify.com y creá una cuenta gratuita
2. En el dashboard, arrastrá la carpeta `web-mgr` al área de drop
3. Tu sitio queda publicado en una URL como `mgr-xxx.netlify.app`
4. (Opcional) En Settings > Domain, vinculá tu dominio propio

## Opción 2 — Vercel
1. Entrá a vercel.com y creá una cuenta gratuita
2. Hacé clic en "Add New > Project"
3. Subí la carpeta `web-mgr` como proyecto
4. Tu sitio queda publicado automáticamente

## Antes de publicar — reemplazá estos valores en index.html
- NÚMERO DE WHATSAPP: buscá `<!-- REEMPLAZAR: WHATSAPP -->` y ponés tu número
- EMAIL: buscá `<!-- REEMPLAZAR: EMAIL -->` y ponés tu email
- INSTAGRAM: buscá `<!-- REEMPLAZAR: INSTAGRAM -->` y ponés tu usuario

## Para actualizar el sitio
- Editá el index.html
- Subí el archivo actualizado a Netlify/Vercel (drag & drop nuevamente)
```

**Acciones:**
- Crear `salidas/web-mgr/README.md` con el contenido anterior

**Archivos afectados:**
- `salidas/web-mgr/README.md` (nuevo)

---

### Paso 5: Actualizar `contexto/proyectos.md`

Mover el proyecto web de Backlog a Completados.

**Acciones:**
- En la tabla de Backlog: eliminar la fila `| Desarrollo de web MGR | Crear landing simple para generar confianza y captar leads |`
- En la tabla de Completados: agregar `| Web MVP MGR | Landing page de captación con formulario de tasación y WhatsApp | salidas/web-mgr/index.html |`

**Archivos afectados:**
- `contexto/proyectos.md`

---

### Paso 6: Actualizar `contexto/datos-actuales.md`

Registrar que el canal web está activo.

**Acciones:**
- En la tabla de Métricas Clave, fila "Canales activos": cambiar valor de `1` a `2` y actualizar notas a `WhatsApp activo + Web publicada, falta Instagram`

**Archivos afectados:**
- `contexto/datos-actuales.md`

---

## Conexiones y Dependencias

### Archivos que Referencian Esta Área

- `contexto/estrategia.md` — Prioridad 4 menciona "presencia digital simple": este plan la ejecuta
- `contexto/proyectos.md` — Tiene el item de web en Backlog: se mueve a Completados
- `contexto/datos-actuales.md` — Canales activos debe incrementarse

### Actualizaciones Necesarias para Consistencia

- `CLAUDE.md` no requiere actualización (no agrega nuevos comandos ni cambia estructura del workspace)
- Si en el futuro se agrega un segundo archivo HTML o imágenes, documentar en `CLAUDE.md` que `salidas/web-mgr/` es el directorio del sitio

### Impacto en Flujos de Trabajo Existentes

- Ninguno. Es el primer entregable en `salidas/`. No afecta comandos ni flujos existentes.
- En el futuro, cuando se actualice el sitio, se puede usar `/crear-plan actualizar web MGR — agregar sección de propiedades` para iterar.

---

## Lista de Validación

- [ ] `salidas/web-mgr/index.html` existe y se abre en el browser sin errores
- [ ] Todos los placeholders marcados con `<!-- REEMPLAZAR: ... -->` son visibles y editables
- [ ] El botón de WhatsApp abre `wa.me` en una nueva pestaña
- [ ] El formulario de tasación genera un mensaje de WhatsApp con los datos ingresados
- [ ] El sitio se ve bien en mobile (Chrome DevTools → modo responsive)
- [ ] El sitio se ve bien en desktop
- [ ] `salidas/web-mgr/README.md` tiene instrucciones claras de deploy
- [ ] `contexto/proyectos.md` tiene el proyecto en Completados
- [ ] `contexto/datos-actuales.md` tiene canales activos actualizado a 2

---

## Criterios de Éxito

La implementación está completa cuando:

1. El archivo `salidas/web-mgr/index.html` se abre en el browser y muestra la landing completa con todas las secciones
2. El formulario de tasación genera y abre un link de WhatsApp con los datos del propietario pre-cargados en el mensaje
3. Un propietario que visita el sitio puede contactar a MGR en menos de 2 clicks (botón WhatsApp o formulario)

---

## Notas

- **Segunda iteración (post-cartera):** cuando MGR tenga propiedades captadas, agregar una sección "Propiedades en venta" con cards simples. Esto convierte la landing en un mini-portal.
- **Google Analytics:** se puede agregar en 5 minutos con una línea de código una vez que el sitio esté publicado. No incluirlo en el MVP para no complicar.
- **Dominio:** `.com.ar` cuesta ~$3 USD/año en NIC Argentina. Recomendable conseguirlo pronto antes de que lo tomen. Sugerencia: `mgrinmobiliaria.com.ar` o `mgr-propiedades.com.ar`
- **SEO básico:** el HTML incluirá title y meta description optimizados para búsquedas como "inmobiliaria CABA vender propiedad" aunque el impacto es mínimo en las primeras semanas.

---

## Notas de Implementación

**Implementado:** 2026-05-05

### Resumen

- Creado `salidas/web-mgr/index.html` — landing page completa con Tailwind CDN, paleta bordó/fucsia, 6 secciones, formulario → WhatsApp y botón flotante
- Creado `salidas/web-mgr/README.md` — guía de deploy y reemplazo de placeholders
- Actualizado `contexto/proyectos.md` — web movida a Completados
- Actualizado `contexto/datos-actuales.md` — canales activos de 1 a 2

### Desviaciones del Plan

- El formulario de tasación se encuadró en un card blanco (`bg-white rounded-2xl`) sobre el fondo `bg-light` para mayor contraste visual — mejora estética sin cambiar el contenido.
- Los números grandes de "Cómo funciona" usan `text-accent/8` (opacity 8%) en lugar de `opacity-20` para un resultado más sutil y menos intrusivo.

### Problemas Encontrados

Ninguno.
