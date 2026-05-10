# /review-mgr

Revisión completa del proyecto MGR Inmobiliaria antes de commitear.

Usa la skill `code-reviewer` como base y aplica además el checklist específico de MGR.

---

## Instrucciones

Ejecutá cada verificación en orden y reportá el resultado al final con el formato indicado.

---

## 1. Git

```bash
cd /Users/nicomilsz/Desktop/Claude/espacio-de-trabajo-claude
git status
git diff --stat
```

- Describir qué archivos están modificados o nuevos.
- Verificar que `.claude/settings.local.json` **no** esté en el staging. Si lo está, avisar explícitamente.
- Verificar que `_site/` y `node_modules/` no estén siendo trackeados.

---

## 2. Build

```bash
cd /Users/nicomilsz/Desktop/Claude/espacio-de-trabajo-claude/salidas/web-mgr
npm run build
```

- Si falla, marcar como **No aprobar** y detener la revisión.
- Si pasa, registrar tiempo de build y archivos generados.

---

## 3. Archivos prohibidos

Verificar que los cambios no incluyan:

- `_site/` (directorio de output de Eleventy — nunca commitear)
- `node_modules/` (nunca commitear)
- Capturas de pantalla o imágenes temporales subidas por error
- `.env` u otros archivos con credenciales
- `.claude/settings.local.json` (se auto-modifica, nunca va al commit)

---

## 4. Eleventy — estructura y templates

Revisar si se modificaron archivos de layouts o includes:

```bash
git diff --name-only | grep -E "_includes|layouts|base\.njk|navbar|footer"
```

Si hay cambios en esos archivos, verificar:

- `base.njk`: título/SEO correcto, GA4 script presente, analytics.js cargado, JSON-LD válido.
- `navbar.njk`: links activos correctos, `isHome`, `isPropiedades`, `isTasacion`, `isQuienesSomos`.
- `footer-full.njk` / `footer-slim.njk`: links de navegación completos.
- Layouts (`propiedad.njk`): data attributes de analytics intactos.
- Rutas nuevas: verificar que tienen `permalink` correcto en frontmatter.
- Links internos: no dejar hrefs rotos (`/tasacion-profesional/`, `/propiedades/`, `/quienes-somos/`).

---

## 5. Decap CMS

Si se modificaron archivos relacionados con el CMS:

- `src/admin/config.yml`: no cambiar `backend`, `repo`, ni `branch` sin confirmación explícita.
- No romper la estructura de colecciones ni campos de propiedades.
- Compatibilidad con archivos `.md` en `src/propiedades/`: todos deben compilar sin error.
- No cambiar slugs de propiedades existentes (rompe URLs publicadas).

---

## 6. Catálogo — 3 modos

Verificar que `config.json` y `propiedades.njk` mantienen los 3 modos intactos:

| Modo | Esperado |
|------|----------|
| `visible` | Grid de propiedades + CTA propietarios arriba |
| `en_formacion` | Solo card "Cartera en formación" con 2 botones WA diferenciados |
| `oculto` | Página de espera, sin grid, sin link "Propiedades" en navbar |

Verificar que el valor actual de `config.catalogo.modo` sea `"visible"` para producción.

---

## 7. WhatsApp

Buscar todos los links `wa.me` en los archivos modificados:

```bash
grep -r "wa.me" salidas/web-mgr/src --include="*.njk" --include="*.md" --include="*.js"
```

Verificar:
- Número siempre: `5491149808910` (sin `+`, sin espacios)
- Formato correcto: `https://wa.me/5491149808910?text=...`
- Mensajes pre-escritos coherentes con el CTA que los dispara
- No exponer datos personales en mensajes automáticos

---

## 8. Google Analytics 4

```bash
grep -n "G-M03941JQK0\|gtag\|analytics.js" salidas/web-mgr/src/_includes/layouts/base.njk
grep -rn "data-analytics-event" salidas/web-mgr/src --include="*.njk" | head -30
```

Verificar:
- Measurement ID `G-M03941JQK0` definido solo en `src/_data/site.js` (único lugar)
- Script GA4 y `analytics.js` cargados en `base.njk` dentro del bloque `{% if site.ga4Id %}`
- No hay segundo script GA4 duplicado en ninguna página
- CTAs principales tienen `data-analytics-event`
- `analytics.js` no genera errores en consola ni bloquea navegación
- No se envían datos personales (nombres, teléfonos, mensajes completos)

---

## 9. Responsive

Verificar visualmente o por inspección de clases Tailwind en archivos modificados:

- **Navbar**: `md:flex` desktop / `md:hidden` mobile. Botón hamburguesa visible en mobile.
- **Hero home**: logo 64px mobile (`w-16 h-16`), 80/96px desktop. Texto legible. Botones en columna (`flex-col sm:flex-row`).
- **Cards**: grid responsive (`grid-cols-1 sm:grid-cols-2`).
- **Secciones**: sin `overflow-x` visible en mobile.
- **Botones**: área táctil mínima `py-3` o `py-4`.

---

## 10. Copy y restricciones legales

```bash
grep -ri "tasación gratuita\|sin cargo\|sin costo\|gratis\|banco nación\|matrícula\|colegio profesional" salidas/web-mgr/src --include="*.njk" --include="*.md"
```

Verificar que no aparece:
- "tasación gratuita" / "sin cargo" / "sin costo" / "gratis"
- "tasadora oficial del Banco Nación" o similar
- Número de matrícula inventado
- Dirección física inventada
- Redes sociales o teléfonos inventados
- Tono exagerado o afirmaciones imposibles de sostener legalmente

---

## Formato de respuesta

```markdown
# Review MGR

## Estado
[Aprobado | Aprobado con observaciones | No aprobar]

## Riesgos
- [lista breve de riesgos encontrados, o "Ninguno"]

## Build
[✅ Pasó en Xs — N archivos | ❌ Falló: error]

## Archivos modificados
- lista de archivos con cambios pendientes

## Archivos que NO deben commitearse
- lista (si aplica)

## Comandos sugeridos
git restore .claude/settings.local.json
git add [archivos exactos]
git commit -m "[mensaje descriptivo]"
git push
```
