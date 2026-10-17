---
author: losflacos3d-blip
branch: main
status: in-progress
---
# Catálogo para familias con compra en una tienda externa

## Intent
El propietario quiere recomendar productos sin vender, cobrar ni gestionar devoluciones. Sustituir el escaparate provisional por una selección con fichas reales y enlaces de compra externos.

## Scope
Seis productos de Decathlon documentados en sus fichas oficiales. Información dirigida a adultos, filtros, búsqueda y enlaces HTTPS seguros. Sin carrito, presupuestos, formularios de clientes, precios copiados ni seguimiento. No se registra una cuenta, no se activa afiliación y no se publica sin confirmación. Una cuenta aprobada y las condiciones del programa quedan pendientes; no se garantiza que admita una web infantil.

## Checklist
- [x] Comprobar fichas y registrar fuentes oficiales.
- [x] Sustituir datos provisionales y solicitud de presupuesto por enlaces externos.
- [x] Mantener navegación accesible, búsqueda y filtros.
- [x] Actualizar textos, datos estructurados y privacidad al modelo de recomendación.
- [x] Ejecutar regresiones y probar el catálogo en navegador.

## Evidence
El usuario confirma que no quiere una tienda ni gestionar devoluciones. La compra y su atención se realizarán en el comercio externo. El propietario confirma que no tiene cuenta de afiliación.

Fuentes oficiales consultadas el 17/10/2026; no se ha comprado ni probado físicamente el material. La comprobación de fichas no demuestra existencias por talla/color ni constituye una certificación de producto:
- [Linterna Forclaz DYNAMO 100 V2](https://www.decathlon.es/es/p/linterna-de-montana-foco-15-lumenes-forclaz-dynamo-100-v2/325763/c177c382m8665146).
- [Mochila infantil MH500, 10 L](https://www.decathlon.es/es/p/mochila-de-montana-y-trekking-ninos-10l-quechua-mh500-azul/308403/c195m8975747).
- [Silbato con brújula de orientación 50](https://www.decathlon.es/es/p/silbato-multifuncion-brujula-orientacion-50-naranja/301966/c50m8584952).
- [Chaqueta infantil MH100 zip](https://www.decathlon.es/es/p/chaqueta-impermeable-de-senderismo-ninos-7-15-anos-mh100-zip-azul/362568/c5m8939031).
- [Manta térmica reutilizable Forclaz](https://www.decathlon.es/es/p/manta-termica-de-montana-y-trekking-forclaz-reutilizable/312111/m8572289).
- [Cantimplora isotérmica de 0,5 L](https://www.decathlon.es/es/p/botella-termica-de-montana-y-trekking-acero-inoxidable-0-5l-quechua-mh500/301267/c260m8809552).

`npm test`: 24 pruebas aprobadas y 0 fallos. Las cuatro nuevas comprueban fuentes y enlaces, ausencia de presupuestos/formularios, filtros/búsqueda y rechazo de una URL javascript manipulada.

Edge: ocho recorridos aprobados. El nuevo recorrido comprueba seis enlaces de producto, búsqueda, filtros, atributos de seguridad y ausencia del formulario de compradores. El catálogo sigue funcionando en modo estático y en móvil.

No se ha publicado ni activado seguimiento, una cuenta de afiliación o comisiones. Las salidas anteriores de compilación se conservan; se genera una carpeta nueva para revisar este cambio.

Programa investigado: [Decathlon Afiliados](https://afiliacion.decathlon.es/) y [ficha oficial de Decathlon ES en Awin](https://ui.awin.com/merchant-profile/105405). La ficha de Awin admite contenido editorial y exige revisar las solicitudes. No se ha confirmado la aceptación de Misión 112 ni se han aceptado sus condiciones. No se deben atribuir comisiones a productos de marketplace, servicios o productos personalizados: la ficha del programa los excluye. Los enlaces actuales siguen siendo normales.

Vista previa local preparada en `http://127.0.0.1:56384/?vista=tienda` con los archivos de `dist-catalogo-20261017`.

## Next
Revisar la vista local del catálogo. Para monetizar faltan una cuenta aprobada y verificar las condiciones del programa para este sitio. La publicación pública sigue pendiente de confirmación.


## Continuación acordada con el propietario
El propietario quiere valorar productos de Amazon además de los de Decathlon y mantiene pendiente Google AdSense. Las solicitudes se harán juntos cuando vuelva a casa; no se ha creado ninguna cuenta ni enviado ninguna solicitud.

Amazon Afiliados: sus [requisitos oficiales](https://afiliados.amazon.es/help/operating/policies) excluyen sitios dirigidos a niños. Misión 112 está diseñada para 7–12 años, por lo que no se debe presentar la web como una página de adultos ni asumir que basta una pestaña para familias. Antes de añadir enlaces monetizados o solicitar el programa, resolver su admisibilidad; un proyecto independiente para adultos sería una decisión nueva, no un cambio de etiqueta.

Google AdSense: revisar los [requisitos de participación](https://support.google.com/adsense/answer/9724?hl=es) y las [políticas para contenido infantil](https://support.google.com/adsense/answer/10502938?hl=es-001). La documentación actual de Google sustituye TFCD/TFUA por TFAT para el tratamiento por edad; no reutilizar los antiguos comentarios del proyecto como configuración válida. La publicidad sigue deshabilitada.

Al retomar: revisar la URL pública definitiva y los datos del titular, preparar Decathlon y AdSense, y resolver Amazon antes de enviar su solicitud. El propietario iniciará sesión y revisará los datos y condiciones de las cuentas.
