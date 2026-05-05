# Sitio web MGR Inmobiliaria

## Estructura del sitio

```
web-mgr/
├── index.html                          # Página principal — captación y tasación
├── propiedades.html                    # Catálogo de propiedades
├── quienes-somos.html                  # Página institucional
└── propiedades/                        # Páginas individuales de propiedades
    ├── departamento-palermo.html       # DEMO — reemplazar con propiedad real
    ├── ph-belgrano.html                # DEMO — reemplazar con propiedad real
    └── departamento-villa-urquiza.html # DEMO — reemplazar con propiedad real
```

---

## ⚠ Advertencia importante antes de publicar

Las 3 páginas dentro de `propiedades/` son **propiedades de demostración ficticias**.
**No publicar el sitio con estas propiedades** sin haberlas reemplazado por propiedades reales,
o al menos sin haber eliminado el aviso de demo que aparece en cada página.

---

## Antes de publicar — reemplazá los placeholders

### En los 5 archivos HTML principales:

| Placeholder | Qué reemplazar | Dónde buscar en el HTML |
|---|---|---|
| `549XXXXXXXXXX` | Tu número de WhatsApp sin `+` ni espacios (ej: `5491156781234`) | Buscá `549XXXXXXXXXX` — hay múltiples apariciones por archivo |
| `mgr_inmobiliaria` | Tu usuario de Instagram | Solo en `index.html` |
| `contacto@mgr.com.ar` | Tu email de contacto | Solo en `index.html` |

Usá **Buscar y Reemplazar** (Cmd+H en Mac, Ctrl+H en Windows) para reemplazar todas las apariciones de `549XXXXXXXXXX` en cada archivo.

---

## Publicar en Netlify (más fácil — drag & drop)

1. Entrá a **netlify.com** y creá una cuenta gratuita
2. En el dashboard: **"Add new site" → "Deploy manually"**
3. Arrastrá la carpeta `web-mgr` completa al área de drop
4. Tu sitio queda publicado en una URL tipo `mgr-abc123.netlify.app`
5. (Opcional) En **Site settings → Domain management** → vinculá tu dominio propio

## Publicar en Vercel

1. Entrá a **vercel.com** y creá una cuenta gratuita
2. **"Add New → Project"** → subí la carpeta `web-mgr`
3. Tu sitio queda publicado automáticamente

---

## Cómo abrir páginas individuales de propiedades

Abrí `propiedades.html` en el browser y hacé clic en cualquier card — va a navegar a la página individual de esa propiedad en `propiedades/`.

Para probar directamente: abrí `propiedades/departamento-palermo.html` desde tu carpeta local.

---

## Cómo reemplazar propiedades ficticias por reales

### En `propiedades.html` (catálogo):
1. Editá cada card `<!-- PROPIEDAD DEMO X -->` con los datos reales
2. Actualizá el `href` del stretched link para que apunte a la nueva página individual
3. Actualizá el barrio, tipo, ambientes y m²
4. Cuando tengas propiedades reales, eliminá el aviso `<!-- Aviso cartera en desarrollo -->`

### En cada página individual (`propiedades/`):
Para agregar una propiedad real, copiá una de las páginas de demo y reemplazá:

| Sección | Qué reemplazar |
|---|---|
| `<!-- REEMPLAZAR: IMAGEN -->` | Reemplazá el `div.photo-placeholder` por `<img src="foto.jpg" class="w-full h-full object-cover">` |
| `<!-- REEMPLAZAR: PLANO -->` | Reemplazá el bloque de plano por `<img src="plano.jpg" ...>` |
| `<!-- REEMPLAZAR: VIDEO -->` | Pegá el `<iframe>` de YouTube o Matterport en el bloque de video |
| Descripción | Reemplazá el texto dentro de `<!-- REEMPLAZAR: descripción -->` |
| Ficha técnica | Actualizá ambientes, m², piso, expensas, etc. |
| Aviso DEMO | Eliminá el banner rojo de "PROPIEDAD DE DEMOSTRACIÓN" |

---

## Para actualizar el sitio después de publicarlo

1. Editá los archivos HTML necesarios
2. Volvé a Netlify/Vercel y subí la carpeta nuevamente (drag & drop)

---

## Dominio propio (recomendado)

Podés conseguir un dominio `.com.ar` por ~$3 USD/año en **nic.ar**.

Sugerencias:
- `mgrinmobiliaria.com.ar`
- `mgr-propiedades.com.ar`
- `mgrcaba.com.ar`

---

## Futuro panel administrador

Actualmente el sitio es completamente estático (HTML puro). Para agregar o editar propiedades hay que modificar los archivos HTML manualmente.

En una próxima etapa se puede sumar un **CMS (Content Management System)** o backend que permita:
- Agregar, editar y eliminar propiedades desde una interfaz visual (sin tocar código)
- Subir fotos desde el panel
- Gestionar leads y consultas recibidas por WhatsApp
- Publicar en portales inmobiliarios directamente desde el panel

**Opciones para esa etapa:**
- **Netlify CMS / Decap CMS**: gratuito, se integra sobre el sitio estático actual sin cambiar la arquitectura
- **Tina CMS**: interfaz visual en tiempo real, también sobre estático
- **WordPress + WP2Static**: panel familiar, exporta a HTML estático para deploy gratuito
- **Backend propio (Node/Django + base de datos)**: máxima flexibilidad, requiere hosting con servidor

Esta evolución no requiere reescribir el sitio desde cero — se puede construir encima de la base actual.

---

## Checklist antes de publicar

- [ ] Número de WhatsApp reemplazado en los 5 archivos HTML
- [ ] Instagram reemplazado en `index.html`
- [ ] Email reemplazado en `index.html`
- [ ] Páginas demo reemplazadas con propiedades reales (o eliminadas si no hay cartera aún)
- [ ] Aviso "cartera en desarrollo" en `propiedades.html` actualizado o eliminado
- [ ] Banners de demo eliminados de las páginas individuales
