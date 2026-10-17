---
author: losflacos3d-blip
branch: main
status: in-progress
---
# Misión 112 — Plataforma web educativa modular de emergencias

## Intent
Crear la plataforma web educativa y gamificada **Misión 112** para niños de 7 a 12 años con una arquitectura 100% modular e independiente del riesgo: un único motor con 4 minijuegos reutilizables, 2 niveles de edad (7-9 y 10-12 años), diploma imprimible y zona docente/familia. Como existen más catástrofes posibles además de inundaciones, incendios y terremotos y el equipo debe esperar a saber cuál le toca, la plataforma se prepara con un **sistema de fichas intercambiables** (catálogo ampliado de emergencias + plantilla instantánea) para activar o cargar cualquier catástrofe asignada en segundos.

## Scope
**Qué entra:**
- Aplicación web interactiva lista para abrir en cualquier navegador sin depender de servidores complejos.
- Selector de perfil del niño: nombre del agente y franja de edad (**7-9 años Junior** / **10-12 años Senior**).
- Base de datos modular de catástrofes (`data/catastrofes.js`) diseñada como fichas enchufables: incluye ya **Inundaciones, Incendios, Terremotos, Tormentas/Rayos, Ola de Calor, Nevada/Ola de Frío, Volcanes y Apagón**, más una plantilla universal para añadir cualquier otra catástrofe del sorteo en menos de 1 minuto.
- **Modo Sorteo / Selector de Misión Activa**: permite elegir desde la Zona Docente (o con un solo ajuste) cuál es la catástrofe que ha tocado para que toda la web (colores, iconos, 4 juegos, diploma y guía docente) se transforme automáticamente a esa única catástrofe.
- **4 motores de minijuegos reutilizables** que se alimentan automáticamente de la catástrofe activa:
  1. *Mochila de Emergencia*: seleccionar los objetos útiles y descartar los incorrectos.
  2. *Antes, Durante y Después*: clasificar y ordenar qué hacer en cada fase de la emergencia.
  3. *Radar de Decisiones (Mito o Realidad)*: detectar acciones seguras frente a peligrosas.
  4. *Simulador 112*: entrenamiento guiado de llamada al 112 (Qué ocurre, Dónde estás, Quién está contigo).
- **Generador de Diploma Oficial 112**: se adapta dinámicamente al nombre de la catástrofe que haya tocado.
- **Zona Docente y Familia**: guía didáctica adaptable a la catástrofe activa y panel para seleccionar o personalizar la catástrofe del sorteo.

**Qué queda fuera:**
- Cuentas con contraseña o guardado de datos personales en servidores externos (por privacidad infantil, todo funciona en el propio dispositivo).
- Juegos con gráficos 3D pesados que requieran instalación.

## Checklist
- [x] **Tarea 1 — Base de datos modular de catástrofes (`data/catastrofes.js`)**: Crear el archivo de contenido con las 17 catástrofes oficiales en dos niveles (7-9 y 10-12 años) para los 4 juegos. *Prueba:* el archivo carga sin errores y expone las 17 catástrofes con sus 4 bloques de juego cada una.
- [x] **Tarea 2 — Interfaz principal, selector de edad y mapa de misiones (`index.html`, `styles.css`)**: Crear el diseño visual infantil/juvenil de Misión 112, registro rápido de nombre + edad (7-9 / 10-12) y panel de misión. *Prueba:* se puede elegir nombre, cambiar entre 7-9 y 10-12 años y entrar a la misión activa.
- [x] **Tarea 3 — Los 4 motores de minijuegos reutilizables (`app.js`)**: Programar Mochila de Emergencia, Antes/Durante/Después, Radar de Decisiones y Simulador 112 conectados a los datos de la catástrofe activa. *Prueba:* al completar cada uno de los 4 juegos se otorga su medalla y cambia la dificultad según la edad elegida.
- [x] **Tarea 4 — Diploma personalizado y Zona Docente/Familia con selector de sorteo**: Añadir la pantalla de diploma imprimible al lograr las 4 medallas y la pestaña Docente/Familia con el interruptor para fijar la catástrofe que toque en el sorteo. *Prueba:* el diploma muestra el nombre y misión superada, y desde Zona Docente se puede fijar una única catástrofe como activa.
- [x] **Tarea 5 — Botón de Ruleta Aleatoria en Zona Docente (`app.js`)**: Añadir un botón interactivo "🎲 Ruleta aleatoria para el aula" en el panel de sorteo que elija una catástrofe al azar con animación breve y la seleccione. *Prueba:* el botón existe en `renderVistaDocente` y selecciona una catástrofe válida de las 17.
- [x] **Tarea 6 — Completar 6 tarjetas Senior de Antes/Durante/Después en las 17 catástrofes (`data/catastrofes.js`)**: Añadir las 3 tarjetas de nivel `10-12` (1 antes, 1 durante, 1 después) en las 12 catástrofes que solo tenían 3 tarjetas. *Prueba:* script de verificación confirma 6 tarjetas Senior y 3 tarjetas Junior en las 17 catástrofes.
- [x] **Tarea 7 — Limpieza de repositorio y publicación web en GitHub Pages (`.gitignore`, `README.md`, `git push`)**: Ignorar archivos internos del asistente en `.gitignore`, subir los cambios a `main` y activar/documentar la URL pública de GitHub Pages. *Prueba:* `git status` limpio y cambios subidos al repositorio remoto.
- [x] **Tarea 8 — Acceso oculto mixto a Zona Docente (`index.html`, `app.js`)**: Ocultar el botón de Zona Docente y el aviso de desbloqueo al público general, permitiendo entrar a los creadores mediante 5 clics seguidos en el logo `🚨 112` o mediante `?admin=1` en la URL. *Prueba:* por defecto `#nav-docente` está oculto y se activa con `?admin=1` o 5 clics en `#brand-home`.
- [x] **Tarea 9 — Eliminar el selector de catástrofes de la pantalla principal y corregir acceso Admin (`app.js`, `index.html`)**: Quitar por completo el bloque "Catálogo de Emergencias 112 (17 misiones listas)" de `renderVistaMision` para que solo se vea la misión activa y sus 4 juegos; corregir la prioridad de `?admin` / `#admin` sobre `vista=mision`, activar con 3 clics en `🚨 112` y añadir versión anti-caché en `index.html`. *Prueba:* `renderVistaMision` no renderiza `catalog-section` y `?admin` / `#admin` / 3 clics abren siempre la vista `docente`.
- [x] **Tarea 10 — Crear código QR imprimible para el cartel escolar y generador QR en panel Admin (`qr-mision-112.png`, `qr-mision-112.svg`, `cartel-qr.html`, `app.js`)**: Generar archivos de imagen QR listos para pegar en el cartel de los alumnos (`https://losflacos3d-blip.github.io/mision-112/`), plantilla imprimible `cartel-qr.html` y tarjeta de QR dinámico en `renderVistaDocente`. *Prueba:* `qr-mision-112.png`, `qr-mision-112.svg` y `cartel-qr.html` existen y son válidos, y el panel Admin muestra el QR listo para descargar.
- [x] **Tarea 11 — Crear cartel completo de exposición con el código QR en la esquina inferior izquierda (`cartel-exposicion.html`, `app.js`)**: Diseñar el cartel completo para exponer/imprimir (adaptable a cualquiera de las 17 catástrofes de `data/catastrofes.js`, con Antes/Durante/Después, Mochila de Emergencia, protocolo 112 y el código QR ubicado en la esquina inferior izquierda) y enlazarlo desde el panel Admin. *Prueba:* `cartel-exposicion.html` carga las 17 catástrofes, sitúa el bloque QR en la esquina inferior izquierda (`bottom-left`) y es imprimible en una página.

## Evidence
- Verificación mediante script Node.js sobre `data/catastrofes.js` y `app.js`: `Total catástrofes: 17 ['inundaciones', 'incendios', 'terremotos', 'volcanes', 'tormentas', 'ola_calor', 'nevadas', 'vientos', 'maremotos', 'quimico', 'apagon', 'aludes', 'nuclear', 'sanitaria', 'costeros', 'incendios_forestales', 'mercancias'] — VERIFICACIÓN 17/17 OK.`
- Verificación de tarjetas Antes/Durante/Después en las 17 catástrofes: `Junior fases: 3, Senior fases: 6 en las 17 catástrofes — ALL 17 OK: true`.
- Verificación sintáctica (`node -c app.js` y `node -c data/catastrofes.js`) sin errores y botón `btn-ruleta-sorteo` enlazado en `renderVistaDocente` y `enlazarEventosDocente`.
- Verificación de eliminación de `catalog-section` en `renderVistaMision` y traslado exclusivo a `renderVistaDocente`, más prioridad de `?admin` / `#admin` / 3 clics en `#brand-home` / `Alt+A` y control anti-caché (`?v=4`) en `index.html`.
- Generación y verificación visual de `qr-mision-112.png` (1000x1000 px), `qr-mision-112.svg`, `cartel-qr.html` y `cartel-exposicion.html` con el bloque `.qr-corner-left` en la esquina inferior izquierda.
- GitHub Pages activo y publicado en `https://losflacos3d-blip.github.io/mision-112/`.

## Next
Todas las tareas completadas y desplegadas en GitHub Pages.
