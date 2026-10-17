---
author: losflacos3d-blip
branch: main
status: in-progress
---
# Correcciones de la auditoría del 17 de octubre de 2026

## Intent
Corregir los fallos reproducidos sin publicar cambios ni inventar datos comerciales.

## Scope
Autenticación PHP obligatoria para administración compartida, configuración privada sin contraseña inicial, límites por IP, escrituras comprobadas, copias completas, progreso por edad y publicación mediante lista de archivos permitidos. Los juegos siguen funcionando en alojamiento estático. AdSense permanece desactivado hasta una integración real y una revisión específica de privacidad. No se reutilizan credenciales ni servicios de otros proyectos.

## Checklist
- [x] Sustituir autenticación local por API y comprobar rechazo de sesiones falsificadas, CSRF y caducidad.
- [x] Comprobar bloqueo por IP entre sesiones distintas y fallo seguro sin configuración privada.
- [x] Exportar/restaurar configuración, variantes e historial; rechazar copias inválidas sin cambios parciales.
- [x] Separar progreso por misión y edad; aislar respuestas al cambiar de nivel.
- [x] Generar publicación estática y PHP sin documentos internos; usar la URL pública verificada.
- [x] Sustituir pruebas de texto por regresiones de comportamiento y verificar el catálogo.
- [x] Documentar instalación privada, límites y resultados reales.

## Evidence
- Antes de corregir: las regresiones fallaron por sesión local falsificable, medallas compartidas, autenticación PHP y bloqueo por sesión.
- `npm test`: 20 pruebas, 20 aprobadas, 0 fallos, código de salida 0.
- API ejecutada con PHP 8.3 en contenedores efímeros. Prueba real de escritura fallida con archivo montado en solo lectura: HTTP 503 y archivo anterior intacto.
- Edge sin interfaz: siete comprobaciones aprobadas. Carga de juegos y teclado, progreso por edad, login y guardado, variantes y copias desde el panel, misión compartida entre contextos independientes, logout HTTP 401 y vistas móviles de misión/diploma/tienda, alojamiento estático con documentos internos HTTP 404 y consultas comerciales deshabilitadas.
- `php -l`: sin errores en API ni configurador. `node --check`: sin errores en app y validación de datos. `git diff --check`: sin errores; Git avisa de normalización LF/CRLF.
- `npm run build` y paquete PHP: salidas `dist` y `dist-servidor` creadas. Hash SHA-256 de `dist/app.js` idéntico al código verificado. Sin secretos en los paquetes; la carpeta privada del paquete PHP solo incluye su regla de denegación.
- Contenedores de pruebas eliminados; no se modificaron servicios existentes. No se alteró el archivo previo sin seguimiento `qr-code.png`.
- README actualizado con instrucciones de administración, migración, privacidad y publicación. Acción manual de Pages preparada, sin ejecutar ni cambiar la configuración remota.

## Next
Confirmar la sustitución de la web pública y el cambio del origen de GitHub Pages a Actions. El panel completo necesita alojamiento PHP con HTTPS y una contraseña generada en la carpeta privada del servidor. Datos comerciales solicitados al propietario, todavía pendientes; anuncios y consultas comerciales permanecen deshabilitados. No se ha realizado publicación, commit ni push.
