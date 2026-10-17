---
author: losflacos3d-blip
branch: main
status: in-progress
---
# Implementación de los 5 Blindajes de Seguridad, SEO/AEO, AdSense y Tienda Escaparate — Misión 112

## Intent
Implementar sobre el proyecto web existente **Misión 112** una arquitectura de seguridad desde el diseño y por defecto organizada en **cinco blindajes**, junto con posicionamiento técnico/de contenidos **SEO y AEO**, preparación limpia para **Google AdSense** (sin inventar identificadores ni activar seguimiento sin consentimiento) y una **tienda escaparate** de equipamiento de autoprotección y montaña orientada a solicitud de presupuesto o contacto.

## Correspondencia de los Cinco Blindajes
1. **Blindaje 1 — Autenticación, autorización y control de acceso** *(antes: Acceso oculto con contraseña)*:
   - Mantiene los disparadores actuales (`3 clics` en `#brand-home` `🚨 112`, `?admin=1` / `#admin` y `Alt + A`), pero exige autenticación antes de mostrar `renderVistaDocente`.
   - Verificación criptográfica mediante `Web Crypto API` (`SHA-256` con sal) en cliente y soporte para verificación en servidor (`admin-api.php`), sin contraseñas en texto plano en el código.
   - Bloqueo temporal anti-fuerza bruta (5 minutos tras 3 intentos fallidos), caducidad automática de sesión tras 15 minutos de inactividad en `sessionStorage`, y salida limpia en 1 clic (**"⬅️ Cancelar y volver al juego"** y **"🔒 Cerrar sesión segura"**) que limpia `?admin=1` de la URL.
2. **Blindaje 2 — Protección de datos y privacidad** *(antes: Sanitización XSS, QR local y cumplimiento RGPD/COPPA)*:
   - Sanitización obligatoria `escaparHtml()` en todas las entradas de usuario (nombre del agente, creador de catástrofes, filtros y solicitud de presupuesto).
   - Eliminación de llamadas externas a `api.qrserver.com`, usando exclusivamente el recurso local `qr-mision-112.png`.
   - Minimización de datos (cero envío de datos infantiles a terceros), anuncios no personalizados por defecto (`TFCD` / `npa=1`) y modal de **Política de Privacidad, Aviso Legal y Cookies** con textos provisionales claramente señalados.
3. **Blindaje 3 — Seguridad de APIs y controles específicos para funciones de IA** *(antes: Protección de archivos internos de IA y validación de entradas)*:
   - Cabeceras `Content-Security-Policy (CSP)`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN` y `Referrer-Policy` en `index.html` y `.htaccess`.
   - Bloqueo explícito en `.htaccess` de rutas y documentos internos de agentes de IA (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `CONVENTIONS.md`, `01-TOOLS/`, `02-DOCS/`, `.rsc/`).
   - Validación estricta de esquema y longitud en el creador de catástrofes y en el endpoint opcional `admin-api.php` (con protección CSRF y límite de peticiones).
4. **Blindaje 4 — Gestión de secretos, dependencias e infraestructura**:
   - Valores sensibles fuera del repositorio: plantilla `config/admin-config.example.json` y `.env.example`, con exclusión en `.gitignore` de los archivos reales (`config/admin-config.json`, `.env`, `logs/`).
   - Enmascarado visual (`••••`) de identificadores en el panel Admin con botón de mostrar/ocultar.
   - Cero dependencias externas en tiempo de ejecución.
5. **Blindaje 5 — Registros, auditoría, copias de seguridad y pruebas de seguridad**:
   - Registro de auditoría (`Audit Log`) de eventos de seguridad (accesos, fallos, bloqueos, cambios de misión/configuración, copias de seguridad) consultable y exportable desde el panel Admin.
   - Sistema de **Copia de Seguridad y Restauración (JSON)** con validación de integridad desde el panel Admin.
   - Suite de pruebas automatizadas (`tests/security-and-features.test.js`) para verificar los 5 blindajes, SEO/AEO, AdSense y la tienda escaparate.

## Checklist
- [x] **Tarea 1 — Catálogo modular de Tienda Escaparate (`data/tienda.js`)**: Crear catálogo con categorías (*Primeros Auxilios, Abrigo y Lluvia, Mochilas y Transporte, Orientación y Señalización, Accesorios 3D*), fichas técnicas y llamadas a solicitar presupuesto/contactar con valores provisionales claramente señalados.
- [x] **Tarea 2 — Archivos de configuración, infraestructura y SEO técnico (`.gitignore`, `.htaccess`, `config/admin-config.example.json`, `admin-api.php`, `ads.txt`, `robots.txt`, `sitemap.xml`)**: Crear las plantillas de configuración sin secretos, reglas de servidor y archivos de indexación/publicidad con marcadores provisionales.
- [x] **Tarea 3 — Estructura HTML, CSP, SEO/AEO y Contenedor AdSense (`index.html`, `styles.css`)**: Añadir cabeceras CSP/SEO, datos estructurados JSON-LD (`WebApplication`, `FAQPage`, `ItemList`), pestaña de Tienda Escaparate, sección AEO de Preguntas Frecuentes, espacio AdSense desactivado por defecto y estilos para el modal de autenticación, tienda y textos legales.
- [x] **Tarea 4 — Implementación de los 5 Blindajes, Tienda Escaparate y Panel Admin en `app.js`**: Integrar autenticación `SHA-256` con bloqueo anti-fuerza bruta y caducidad, salida limpia para alumnos, registro de auditoría, copia de seguridad/restauración, vista de tienda con solicitud de presupuesto y modal legal.
- [x] **Tarea 5 — Pruebas automatizadas de seguridad y funcionalidad (`tests/security-and-features.test.js`)**: Ejecutar y documentar la suite de verificación sobre el código implementado.

## Evidence
- Ejecución de `node -c app.js; node -c data/tienda.js; node -c data/catastrofes.js; node tests/security-and-features.test.js`:
  - `[OK] Catálogo de catástrofes intacto: 17/17 misiones operativas.`
  - `[OK] Tienda Escaparate verificada: 6 fichas con marcadores provisionales y sin pagos automáticos.`
  - `[OK] Blindaje 1 (Autenticación, autorización, bloqueo anti-fuerza bruta y salida limpia) verificado.`
  - `[OK] Blindaje 2 (Sanitización XSS, QR 100% local y Privacidad Infantil TFCD/NPA) verificado.`
  - `[OK] Blindaje 3 (CSP, protección de archivos IA en .htaccess y API segura) verificado.`
  - `[OK] Blindaje 4 (Secretos fuera del repositorio y ads.txt provisional sin IDs inventados) verificado.`
  - `[OK] Blindaje 5 (Registros de auditoría, copias de seguridad JSON y suite de pruebas) verificado.`
  - `[OK] SEO Técnico y AEO (JSON-LD WebApplication + FAQPage + ItemList, robots.txt y sitemap.xml) verificados.`
  - `=== TODAS LAS COMPROBACIONES SUPERADAS CON ÉXITO (7/7 BLOQUES OK) ===`

## Next
Revisión por parte del propietario de los 5 entregables y de la lista de datos pendientes antes de publicar en `losflacos3d.es`.
