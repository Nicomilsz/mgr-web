# /performance-mgr

Revisión de performance para la web de MGR Inmobiliaria antes de pushear cambios visuales, imágenes, animaciones o scripts.

Ejecutar especialmente después de: agregar imágenes, cambiar animaciones CSS/JS, modificar el hero, agregar secciones nuevas o tocar `analytics.js`.

---

## Instrucciones

Ejecutá cada verificación y reportá al final con el formato indicado.

---

## 1. Imágenes

```bash
find salidas/web-mgr/src/assets -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" \) -exec ls -lh {} \; | sort -k5 -rh | head -20
```

Verificar:
- Listar archivos de imagen con su tamaño.
- Alertar si algún archivo pesa más de **500 KB** (PNG/JPG sin optimizar).
- Alertar si algún PNG pesa más de **1 MB**.
- El logo circular `mgr-logo-circular.png` (~1.4MB) está justificado por ser el único asset de marca — no convertir sin confirmación.
- **No convertir ni comprimir nada sin confirmación explícita del usuario.**
- Sugerir WebP/AVIF solo como recomendación si hay imágenes de propiedades grandes.

---

## 2. CSS y animaciones

Revisar archivos Nunjucks y CSS modificados recientemente:

```bash
git diff --name-only | grep -E "\.njk|\.css"
```

Verificar que:
- Las animaciones usan **solo `transform` y `opacity`** (propiedades que no disparan layout/paint).
- No hay animaciones sobre `width`, `height`, `top`, `left`, `margin`, `padding` (costosas).
- Las transiciones tienen duración razonable (≤ 700ms). Nada por encima de 1s salvo casos justificados.
- El scroll reveal usa `IntersectionObserver` y **no** `scroll` event listener.
- Existe bloque `prefers-reduced-motion` que deshabilita todas las animaciones.
- No hay `will-change` innecesario en muchos elementos.
- El bridge de transición hero→contenido (`linear-gradient`) es puramente decorativo y no afecta layout.

---

## 3. JavaScript

```bash
wc -l salidas/web-mgr/src/assets/js/analytics.js
grep -n "addEventListener\|setInterval\|setTimeout" salidas/web-mgr/src/assets/js/analytics.js
grep -n "window.onscroll\|document.onscroll\|scroll.*function" salidas/web-mgr/src/assets/js/analytics.js
```

Verificar:
- `analytics.js` es liviano (< 60 líneas).
- Usa event delegation (`document.addEventListener('click', ...)`) — no listener por elemento.
- No hay `scroll` listeners (costosos). El scroll reveal usa `IntersectionObserver`.
- No hay `setInterval` ni `setTimeout` largos.
- `analytics.js` falla silenciosamente si `gtag` no está disponible (no rompe navegación).
- No se agregaron dependencias externas nuevas (revisar si hay `<script src="...">` no esperados en base.njk).

```bash
grep -n "<script src=" salidas/web-mgr/src/_includes/layouts/base.njk
```

Scripts esperados en base.njk: Tailwind CDN, GA4, `analytics.js`. Ninguno más.

---

## 4. Build

```bash
cd /Users/nicomilsz/Desktop/Claude/espacio-de-trabajo-claude/salidas/web-mgr
npm run build
```

- Registrar tiempo de build.
- Si hay warnings, listarlos.
- Si falla, marcar como **Alto** y detener.

---

## 5. URLs a revisar localmente

Después del build, levantar el servidor y verificar:

```bash
cd /Users/nicomilsz/Desktop/Claude/espacio-de-trabajo-claude/salidas/web-mgr
npm run dev
```

| URL | Qué revisar |
|-----|-------------|
| `http://localhost:8080/` | Hero: gradiente, logo, bridge de transición, scroll reveal al bajar |
| `http://localhost:8080/propiedades/` | Grid de cards, CTA propietarios, modo catálogo correcto |
| `http://localhost:8080/tasacion-profesional/` | Secciones, CTAs, responsive |
| `http://localhost:8080/quienes-somos/` | Layout, logo hero, responsive |

**Mobile (DevTools → 375px):**
- Logo hero: no más de 64px en mobile
- Botones en columna, área táctil cómoda
- Navbar: botón hamburguesa visible, menú desplegable funciona
- Hero: texto legible, no desborde horizontal
- Secciones de cards: una columna en mobile

**Performance en DevTools (Lighthouse o Network):**
- Ninguna imagen mayor a 500 KB cargándose sin necesidad
- No hay render-blocking scripts en `<head>` (GA4 tiene `async`)
- `analytics.js` se carga al final del body

---

## Formato de respuesta

```markdown
# Performance MGR

## Riesgo
[Bajo | Medio | Alto]

## Problemas detectados
- [lista de problemas concretos, o "Ninguno detectado"]

## Sugerencias
- [lista de mejoras concretas y accionables]

## Build
[✅ Pasó en Xs | ❌ Falló: error]

## Antes de commitear — revisar visualmente
- [checklist de qué mirar en el browser antes de hacer push]
```
