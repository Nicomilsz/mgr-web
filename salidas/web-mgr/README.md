# Sitio web MGR Inmobiliaria

Sitio estático generado con **Eleventy (11ty)** y administrado con **Decap CMS**.

---

## Estructura del proyecto

```
web-mgr/
├── src/
│   ├── index.njk                  # Página principal (captación / tasación)
│   ├── propiedades.njk            # Catálogo de propiedades
│   ├── quienes-somos.njk          # Página institucional
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk           # Shell HTML base (head, navbar, footer, WA)
│   │   │   └── propiedad.njk      # Layout de página individual de propiedad
│   │   ├── navbar.njk             # Barra de navegación
│   │   ├── footer-full.njk        # Footer con contacto (usado en home)
│   │   └── footer-slim.njk        # Footer compacto (resto de páginas)
│   ├── _data/
│   │   └── site.js                # Datos globales: WA, Instagram, email, año
│   ├── propiedades/
│   │   ├── propiedades.json       # Config de colección (layout + tag)
│   │   └── *.md                   # Una propiedad por archivo Markdown
│   ├── admin/
│   │   ├── index.html             # Panel Decap CMS
│   │   └── config.yml             # Configuración del CMS
│   └── assets/
│       └── uploads/               # Fotos subidas desde el CMS
├── _site/                         # Salida del build (generado, no editar)
├── .eleventy.js                   # Configuración de Eleventy
├── package.json
└── netlify.toml                   # Build config para Netlify (en raíz del repo)
```

---

## Correr localmente

```bash
# Requiere Node.js 18+
cd salidas/web-mgr
npm install
npm run dev
```

Abrí `http://localhost:8080` en el browser.

Para solo buildear sin servidor:
```bash
npm run build
```

La salida queda en `_site/`.

---

## Panel de administración (/admin)

El panel CMS está en `/admin` del sitio publicado.

### Cómo funciona la autenticación

- Se usa **GitHub como backend** (no Netlify Identity).
- Solo usuarios con **acceso de escritura al repositorio** `Nicomilsz/mgr-web` pueden autenticarse.
- La autenticación usa OAuth de GitHub, gestionado por Netlify como proxy OAuth.

### Configuración necesaria en GitHub y Netlify (solo una vez)

**1. Crear OAuth App en GitHub:**
- Ir a: `https://github.com/settings/developers` → OAuth Apps → New OAuth App
- **Application name:** MGR Admin
- **Homepage URL:** `https://TU-SITIO.netlify.app`
- **Authorization callback URL:** `https://api.netlify.com/auth/done`
- Copiar el **Client ID** y generar un **Client secret**

**2. Configurar en Netlify:**
- Ir a: Site settings → Access control → OAuth
- En "Authentication providers" → instalar GitHub
- Pegar el Client ID y Client secret del paso anterior

> ⚠ NO activar Netlify Identity. Solo es la sección OAuth en Access control.

### Cómo entrar al admin

1. Ir a `https://TU-SITIO.netlify.app/admin`
2. Hacer clic en "Login with GitHub"
3. Autorizar el acceso a la cuenta de GitHub

---

## Cómo cargar una propiedad

### Desde el panel admin (recomendado)

1. Ir a `/admin` del sitio
2. Ir a la colección **Propiedades** → **New Propiedades**
3. Completar los campos:
   - **Título**: nombre descriptivo
   - **Barrio**, **Tipo**, **Ambientes**, etc.
   - **Descripción**: texto libre
   - **Características**: lista de features (una por línea)
4. **No marcar "Publicada"** hasta tener todo completo
5. Guardar → Decap CMS crea un commit en el repo automáticamente
6. Netlify detecta el commit y hace el deploy

### Manualmente (archivo Markdown)

Crear `src/propiedades/nombre-propiedad.md` con este formato:

```yaml
---
title: "Título de la propiedad"
publicada: false
destacada: false
estado: borrador
barrio: Palermo
tipo: Departamento
ambientes: 3
dormitorios: 2
banos: 1
superficie_cubierta: 60
superficie_total: 65
precio_texto: "USD 120.000"
expensas: "$45.000/mes"
descripcion: "<p>Descripción de la propiedad...</p>"
caracteristicas:
  - "Balcón al frente"
  - "Ascensor"
fotos: []
---
```

---

## Cómo subir fotos

### Desde el panel admin

1. En el formulario de propiedad, ir al campo **Fotos**
2. Hacer clic en **Add** → **Choose an image**
3. Subir desde la computadora o elegir una existente
4. Las fotos se guardan en `src/assets/uploads/`

### Manualmente

Copiar las fotos a `src/assets/uploads/` y referenciarlas en el frontmatter:

```yaml
fotos:
  - "/assets/uploads/foto-1.jpg"
  - "/assets/uploads/foto-2.jpg"
```

---

## Cómo publicar o despublicar una propiedad

### Publicar

1. Abrir la propiedad en `/admin`
2. Activar el toggle **Publicada** → `true`
3. Cambiar **Estado** a `publicada`
4. Guardar — la propiedad aparece en el catálogo en el próximo deploy

### Despublicar

1. Desactivar el toggle **Publicada** → `false`
2. Guardar — desaparece del catálogo en el próximo deploy

> Las propiedades con `publicada: false` no aparecen en `/propiedades/` pero sus URLs individuales siguen funcionando (útil para preview).

---

## Deploy automático en Netlify

Cada vez que se guarda desde el panel (o se hace un `git push`):

1. Decap CMS hace un commit en el repositorio GitHub
2. Netlify detecta el commit automáticamente
3. Netlify corre `npm run build` desde `salidas/web-mgr/`
4. Publica el nuevo `_site/` en ~30-60 segundos

El `netlify.toml` en la raíz del repo configura:
```toml
[build]
  base    = "salidas/web-mgr"
  command = "npm run build"
  publish = "_site"
```

---

## Datos globales del sitio

Editar `src/_data/site.js` para cambiar número de WhatsApp, Instagram o email:

```js
module.exports = {
  wa: {
    number: "5491149808910",
    ...
  },
  instagram: "mgr_inmobiliaria",
  email: "contacto@mgr.com.ar",
};
```

---

## Dominio propio (recomendado)

Conseguir un dominio `.com.ar` por ~$3 USD/año en **nic.ar**.

Sugerencias: `mgrinmobiliaria.com.ar`, `mgr-propiedades.com.ar`, `mgrcaba.com.ar`

En Netlify: Site settings → Domain management → Add custom domain.
