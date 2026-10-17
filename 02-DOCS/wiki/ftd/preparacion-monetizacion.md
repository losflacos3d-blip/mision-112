---
author: losflacos3d-blip
branch: main
status: in-progress
---
# Preparación de Google AdSense y Amazon Afiliados

## Intent
Dejar listos los pasos y la preparación técnica para retomar las solicitudes con el propietario en casa. No enviar solicitudes ni activar publicidad o comisiones.

## Scope
Guía con fuentes oficiales, datos pendientes y borrador de consulta a Amazon que describe el público real. AdSense: opción de compilación para insertar exclusivamente una etiqueta meta de verificación cuando exista un identificador real. No se amplía la CSP, no se instalan rastreadores y no se crean cuentas.

## Checklist
- [x] Documentar los pasos de AdSense, cómo resolver la URL aceptada y el tratamiento infantil.
- [x] Preparar Amazon sin presentar una web infantil como adulta.
- [x] Probar que la etiqueta meta opcional no carga anuncios y que los identificadores inválidos se rechazan.
- [x] Mantener anuncios, comisiones y envíos desactivados.

## Evidence
El propietario no tiene cuenta de afiliación. Google y Amazon todavía no han aprobado Misión 112. Faltan el ID de editor de Google, los datos del titular y resolver la admisibilidad de la web en Amazon.

Guía creada en `02-DOCS/monetizacion/PREPARAR_ADSENSE_Y_AMAZON.md`, con fuentes oficiales de Google y Amazon consultadas el 17/10/2026. El borrador de consulta no se ha enviado. La ruta actual de GitHub Pages no se da por aceptada en AdSense; no se ha cambiado de dominio.

Pruebas del compilador: primero fallaron las dos regresiones nuevas; tras la corrección, los cuatro casos del archivo pasaron. Comprueban publicación pública, paquete PHP, etiqueta de verificación sin anuncios y rechazo de ID inválido antes de escribir. El ID de los tests es sintético y solo se usa en carpetas temporales que se eliminan. La compilación normal sigue sin incluir un ID de AdSense.

`node --check scripts/build.mjs`: código de salida 0. No se ha ampliado la CSP, activado publicidad, generado vendedores autorizados en ads.txt ni publicado ningún cambio.

## Next
Retomar con el propietario en casa: cuenta de AdSense, URL admitida e ID real. Preparar la publicación verificable antes de enviar la revisión a Google. Amazon requiere resolver la elegibilidad de la web antes de enviar una solicitud.
