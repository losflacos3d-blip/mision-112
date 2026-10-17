// ============================================================================
// MISIÓN 112 — CATÁLOGO MODULAR DE CATÁSTROFES Y EMERGENCIAS (PROTECCIÓN CIVIL)
// ============================================================================
// Estructura pensada para "Modo Sorteo": cualquier catástrofe usa exactamente
// los mismos 4 motores de juego, los 2 niveles de edad (7-9 y 10-12), el diploma
// y la Zona Docente/Familia.

window.CATALOGO_CATASTROFES = {
  inundaciones: {
    id: "inundaciones",
    bloque: "Agua y Costa",
    nombre: "Inundaciones y Lluvias Torrenciales",
    nombreCorto: "Inundaciones",
    icono: "🌊",
    colorPrimario: "#0284c7",
    colorSecundario: "#e0f2fe",
    lema: "¡Con el agua fuerte, sube siempre a lo más alto!",
    resumenJunior: "Cuando llueve muchísimo en poco tiempo, el agua puede cubrir calles y plantas bajas. Tu misión es saber subir a lugares altos y no cruzar nunca zonas con agua en movimiento.",
    resumenSenior: "Las lluvias torrenciales, DANAs y crecidas de ríos o ramblas pueden inundar calles y garajes en minutos. Aprenderás a interpretar alertas meteorológicas, proteger la vivienda y evitar las corrientes de agua.",
    reglasOro: [
      "Sube a las plantas altas de tu casa o edificio; nunca bajes al sótano ni al garaje.",
      "Jamás cruces a pie ni en coche una calle o barranco por donde baje agua.",
      "Corta la luz y el gas si el agua empieza a entrar en casa."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 objetos que SÍ debes llevar si sube el agua.",
      instruccionSenior: "Selecciona los 5 objetos esenciales de tu kit de inundación (cuidado con las trampas).",
      items: [
        { id: "radio", icono: "📻", nombre: "Radio a pilas", correcto: true, nivel: "ambos", explicacion: "Permite escuchar los avisos de Protección Civil aunque se corte la electricidad e internet." },
        { id: "linterna", icono: "🔦", nombre: "Linterna impermeable", correcto: true, nivel: "ambos", explicacion: "Imprescindible si se corta la luz por seguridad." },
        { id: "agua", icono: "💧", nombre: "Botellas de agua potable", correcto: true, nivel: "ambos", explicacion: "El agua del grifo puede contaminarse durante una inundación." },
        { id: "botiquin", icono: "🩹", nombre: "Botiquín y medicinas", correcto: true, nivel: "ambos", explicacion: "Básico para primeros auxilios y tratamientos necesarios." },
        { id: "documentos", icono: "🪪", nombre: "Documentos en bolsa cerrada", correcto: true, nivel: "10-12", explicacion: "Guardar documentación y teléfonos de emergencia en plástico evita que el agua los destruya." },
        { id: "secador", icono: "🔌", nombre: "Aparatos con cable para enchufar", correcto: false, nivel: "ambos", explicacion: "¡Peligro! Agua y electricidad enchufada son muy peligrosos." },
        { id: "juguetes_pesados", icono: "🛹", nombre: "Monopatín y juguetes grandes", correcto: false, nivel: "ambos", explicacion: "Ocupan sitio y te impiden subir rápido a zonas altas con las manos libres." },
        { id: "velas", icono: "🕯️", nombre: "Velas encendidas", correcto: false, nivel: "10-12", explicacion: "Pueden provocar un incendio si hay escapes de gas; usa siempre linterna." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Limpiar desagües y escuchar el aviso de tormenta", textoSenior: "Revisar desagües, colocar objetos valiosos en alto y consultar alertas oficiales de AEMET/112", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Subir a los pisos de arriba y no bajar al garaje", textoSenior: "Subir a plantas superiores, desconectar el interruptor eléctrico y jamás bajar a sótanos ni usar el ascensor", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Esperar a que digan que es seguro y no beber agua de charcos", textoSenior: "Comprobar que no hay daños estructurales ni cables caídos y beber solo agua embotellada", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Aprender cuál es el sitio más alto cerca de casa", textoSenior: "Localizar las zonas altas de evacuación y saber que los cauces secos (ramblas) pueden llenarse de golpe", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Alejarse de ríos, puentes y calles con corriente", textoSenior: "Si el agua rodea el coche, salir por la ventanilla hacia un lugar alto: 40 cm de agua arrastran un vehículo", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Avisar a los adultos si ves un cable roto en el suelo", textoSenior: "Ventilar y limpiar con cuidado sin tocar enchufes húmedos hasta revisar la instalación", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Bajar corriendo al garaje para sacar las bicis o el coche cuando empieza a entrar agua.", textoSenior: "Bajar al garaje subterráneo o usar el ascensor para salvar el coche durante una lluvia torrencial.", esSeguro: false, explicacion: "¡Nunca! Los garajes y ascensores se llenan de agua rapidísimo y son el mayor peligro en inundaciones." },
      { id: "r2", textoJunior: "Subir a la planta más alta de la casa con tu familia.", textoSenior: "Desconectar el interruptor general de la luz y subir con la familia a la planta más alta.", esSeguro: true, explicacion: "¡Correcto! Estar en alto y sin corriente eléctrica te mantiene a salvo." },
      { id: "r3", textoJunior: "Cruzar una calle inundada porque el agua solo me llega por las rodillas.", textoSenior: "Cruzar a pie una calle con corriente porque el agua apenas cubre hasta la rodilla.", esSeguro: false, explicacion: "¡Peligro! Solo 15-20 cm de agua en movimiento pueden derribarte y las alcantarillas pueden estar abiertas sin verse." },
      { id: "r4", textoJunior: "Hacer caso solo a los avisos del 112, profesores y padres.", textoSenior: "Contrastar los avisos en canales oficiales (112, AEMET) e ignorar rumores por redes sociales.", esSeguro: true, explicacion: "¡Muy bien! Los canales oficiales dan las instrucciones reales de tu zona." },
      { id: "r5", textoJunior: "Quedarse jugando en la orilla de un río para ver cómo sube el agua.", textoSenior: "Acercarse a puentes, riberas o ramblas secas para grabar vídeos de la crecida.", esSeguro: false, nivel: "10-12", explicacion: "Las crecidas súbitas llegan como una ola repentina y pueden romper orillas o puentes en segundos." }
    ],
    simulador112: {
      situacion: "Llueve muchísimo, el agua ya entra por el portal de tu edificio y ves que un vecino mayor en la planta baja necesita ayuda.",
      pasos: [
        {
          pregunta: "1. ¿Qué es lo primero que haces antes de marcar el 112?",
          opciones: [
            { texto: "Ponerme a salvo en una zona alta y respirar hondo para hablar claro.", correcta: true, feedback: "¡Exacto! Primero tu seguridad en zona alta y calma para que el operador te entienda." },
            { texto: "Bajar nadando por la escalera para ver hasta dónde llega el agua.", correcta: false, feedback: "¡No! Nunca bajes hacia el agua; ponte primero en un piso alto." },
            { texto: "Gritar por el teléfono sin dejar hablar al operador.", correcta: false, feedback: "Si gritas no podrán saber dónde estás para mandar ayuda." }
          ]
        },
        {
          pregunta: "2. La operadora del 112 dice: 'Emergencias 112, ¿qué ocurre?'. ¿Qué respondes?",
          opciones: [
            { texto: "El agua está inundando la planta baja de nuestro edificio y hay un vecino mayor atrapado.", correcta: true, feedback: "¡Perfecto! Has dicho qué pasa y quién necesita ayuda en una frase clara." },
            { texto: "Está lloviendo mucho en mi ciudad, ¿cuándo va a parar?", correcta: false, feedback: "El 112 es solo para emergencias reales, no para consultar el tiempo." },
            { texto: "¡Socorro, venid ya! (y colgar el teléfono rápido).", correcta: false, feedback: "¡Nunca cuelgues! Si cuelgas, no saben qué pasa ni a dónde ir." }
          ]
        },
        {
          pregunta: "3. Te preguntan: '¿Dónde estáis exactamente?'. ¿Cuál es la mejor respuesta?",
          opciones: [
            { texto: "Calle Mayor número 14, edificio azul junto a la panadería; nosotros estamos en el 2º piso.", correcta: true, feedback: "¡Brillante! Dirección exacta, punto de referencia y en qué planta estáis." },
            { texto: "En mi casa, la que tiene una puerta marrón.", correcta: false, feedback: "Con eso los bomberos no pueden encontrar tu calle." },
            { texto: "Salgo a la calle inundada a esperaros en la esquina.", correcta: false, feedback: "¡Jamás salgas al agua! Espera siempre dentro en la planta alta." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Reconocer el peligro del agua en movimiento (incluso con poca profundidad).",
        "Identificar los puntos seguros (plantas altas) y los puntos prohibidos (garajes, sótanos, ascensores, ramblas).",
        "Aprender a desconectar suministros (10-12 años) y mantener la calma al avisar al 112."
      ],
      actividadAula: "Mapa de Zonas Altas: Dibujar el plano del colegio o de casa señalando en verde las plantas altas seguras y en rojo sótanos, garajes y ascensores.",
      consejoFamilia: "Acordad en casa dónde están el cuadro eléctrico y la llave de agua/gas, y revisad juntos qué objetos subiríais si hay alerta roja por lluvias."
    }
  },

  incendios: {
    id: "incendios",
    bloque: "Fuego",
    nombre: "Incendios (Hogar, Colegio y Forestales)",
    nombreCorto: "Incendios",
    icono: "🔥",
    colorPrimario: "#ea580c",
    colorSecundario: "#ffedd5",
    lema: "¡Con humo, agáchate a gatas y cierra las puertas al salir!",
    resumenJunior: "El fuego y el humo son muy rápidos. Tu misión es saber salir agachado por debajo del humo, tocar las puertas con el dorso de la mano y no esconderte nunca.",
    resumenSenior: "En un incendio el mayor peligro es inhalar el humo tóxico que sube al techo. Aprenderás la técnica de evacuación a gatas, el confinamiento seguro si no puedes salir y la prevención en casa y en el bosque.",
    reglasOro: [
      "Si hay humo, camina a gatas cerca del suelo (el aire limpio está abajo).",
      "Cierra las puertas al salir para frenar el fuego y NUNCA uses el ascensor.",
      "Si no puedes salir por el humo, enciérrate en una habitación con ventana, pon trapos húmedos bajo la puerta y hazte ver."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 elementos que te ayudan a protegerte o prevenir un incendio.",
      instruccionSenior: "Selecciona los 5 elementos clave de seguridad y evacuación ante incendios.",
      items: [
        { id: "trapo", icono: "🧣", nombre: "Paño o toalla húmeda", correcto: true, nivel: "ambos", explicacion: "Sirve para tapar nariz y boca ante el humo o sellar la rendija inferior de la puerta." },
        { id: "detector", icono: "🚨", nombre: "Detector de humo", correcto: true, nivel: "ambos", explicacion: "Avisa con un pitido fuerte en cuanto detecta humo, incluso de noche." },
        { id: "llaves", icono: "🔑", nombre: "Llaves de casa a mano", correcto: true, nivel: "ambos", explicacion: "Dejar las llaves siempre en el mismo sitio junto a la puerta permite salir sin perder segundos." },
        { id: "linterna_f", icono: "🔦", nombre: "Linterna de mano", correcto: true, nivel: "ambos", explicacion: "El humo oscurece los pasillos y se puede cortar la luz; la linterna guía la salida." },
        { id: "extintor", icono: "🧯", nombre: "Extintor (para adultos)", correcto: true, nivel: "10-12", explicacion: "Conocer dónde está el extintor en el colegio o portal permite a los adultos apagar un conato inicial." },
        { id: "agua_sarten", icono: "🪣", nombre: "Cubo de agua para sartén con aceite", correcto: false, nivel: "ambos", explicacion: "¡Peligro! Echar agua al aceite ardiendo hace que salten llamas; se apaga tapando la sartén." },
        { id: "mochila_juguetes", icono: "🎮", nombre: "Pararse a recoger consolas y juguetes", correcto: false, nivel: "ambos", explicacion: "¡Jamás pierdas tiempo recogiendo cosas ni vuelvas a entrar por nada!" },
        { id: "ascensor", icono: "🛗", nombre: "Usar el ascensor para bajar rápido", correcto: false, nivel: "10-12", explicacion: "El ascensor puede bloquearse sin luz y su hueco actúa como chimenea de humo." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "No jugar nunca con mecheros, cerillas ni enchufes", textoSenior: "Instalar detectores de humo, no sobrecargar regletas y conocer las salidas de emergencia", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Salir a gatas bajo el humo cerrando puertas sin usar ascensor", textoSenior: "Tocar el pomo con el dorso de la mano: si no quema, salir a gatas cerrando puertas; si quema, sellar la puerta y pedir ayuda en la ventana", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Ir al punto de encuentro en la calle y no volver a entrar", textoSenior: "Reunirse en el punto de encuentro exterior, confirmar que están todos y esperar a los bomberos sin regresar al interior", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "En el campo, no tirar basura ni cristales", textoSenior: "En el monte: no hacer fuego, no tirar cristales ni colillas y conocer caminos despejados", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Si se prende tu ropa: parar, tirarse al suelo y rodar", textoSenior: "Si prende la ropa: NO correr; aplicar 'Parar, Tirarse al suelo y Rodar' cubriéndose la cara con las manos", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Decir a los médicos si has respirado humo", textoSenior: "Solicitar revisión sanitaria si se ha inhalado humo o ceniza aunque uno se sienta bien", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Esconderse debajo de la cama o dentro de un armario si tienes miedo del fuego.", textoSenior: "Ocultarse en un armario o en el baño sin ventana para protegerse del humo.", esSeguro: false, explicacion: "¡Nunca te escondas! Los bomberos necesitan verte y escucharte; si no puedes salir, ve a una habitación con ventana a la calle." },
      { id: "r2", textoJunior: "Caminar agachado a gatas si hay humo en el pasillo.", textoSenior: "Avanzar a gatas pegado al suelo y a la pared con un paño húmedo en nariz y boca.", esSeguro: true, explicacion: "¡Exacto! El humo caliente sube al techo y abajo queda el aire respirable." },
      { id: "r3", textoJunior: "Abrir de golpe una puerta cuyo pomo está muy caliente.", textoSenior: "Abrir una puerta cerrada cuando notas calor o sale humo por sus bordes.", esSeguro: false, explicacion: "¡Peligro! Si la puerta o el pomo queman, el fuego está justo detrás. Déjala cerrada y sella la rendija." },
      { id: "r4", textoJunior: "Cerrar las puertas detrás de ti mientras sales de casa.", textoSenior: "Cerrar todas las puertas a tu paso (sin echar la llave) al evacuar la vivienda.", esSeguro: true, explicacion: "¡Muy bien! Una puerta cerrada quita oxígeno al fuego y frena el avance del humo." },
      { id: "r5", textoJunior: "Echar un vaso de agua a una sartén que tiene fuego en el aceite.", textoSenior: "Intentar apagar una sartén en llamas echándole agua del grifo.", esSeguro: false, nivel: "10-12", explicacion: "El agua hace explotar el aceite hirviendo. Se apaga apagando el fuego de la cocina y cubriendo con una tapadera o paño húmedo." }
    ],
    simulador112: {
      situacion: "Huele mucho a quemado, ves salir humo negro de la cocina y la escalera para salir está despejada.",
      pasos: [
        {
          pregunta: "1. ¿Cuándo debes hacer la llamada al 112?",
          opciones: [
            { texto: "En cuanto hayamos salido a la calle (o desde la ventana con la puerta cerrada si no podemos salir).", correcta: true, feedback: "¡Correcto! Primero sal del peligro cerrando puertas y llama desde fuera." },
            { texto: "Quedarme dentro de la cocina llena de humo mientras hablo por teléfono.", correcta: false, feedback: "¡Peligro! Tres bocanadas de humo negro son muy tóxicas; sal primero y cierra la puerta." },
            { texto: "Después de recoger mi mochila del colegio y mis juguetes.", correcta: false, feedback: "En un incendio cada segundo cuenta; sal sin recoger nada." }
          ]
        },
        {
          pregunta: "2. El operador del 112 te atiende. ¿Qué información clave le das?",
          opciones: [
            { texto: "Hay un incendio en la cocina de nuestro piso, ya hemos salido cerrando la puerta y no queda nadie dentro.", correcta: true, feedback: "¡Excelente! Decir si queda alguien dentro o si ya habéis salido ayuda muchísimo a los bomberos." },
            { texto: "Hay humo pero voy a volver a entrar yo solo con un vaso de agua.", correcta: false, feedback: "¡Jamás vuelvas a entrar en un sitio con fuego o humo!" },
            { texto: "Solo decir '¡Fuego!' y colgar.", correcta: false, feedback: "No cuelgues hasta que el operador te confirme que tiene la dirección." }
          ]
        },
        {
          pregunta: "3. Si el humo estuviera en la escalera del edificio y NO pudieras salir a la calle, ¿qué harías?",
          opciones: [
            { texto: "Quedarme dentro de casa, cerrar la puerta, poner toallas húmedas abajo y asomarme al balcón o ventana.", correcta: true, feedback: "¡Regla de oro! Nunca bajes por una escalera llena de humo; confínate y hazte ver en la ventana." },
            { texto: "Bajar corriendo a ciegas por la escalera llena de humo.", correcta: false, feedback: "La escalera con humo actúa como una chimenea y es muy peligrosa." },
            { texto: "Meterme en el ascensor para cruzar el humo rápido.", correcta: false, feedback: "El ascensor nunca se usa en un incendio." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Dominar las dos reglas vitales: avanzar a gatas bajo el humo y cerrar puertas al paso.",
        "Distinguir cuándo evacuar (salida limpia) y cuándo confinarse en una habitación con ventana (escalera con humo).",
        "Aprender la maniobra 'Parar, Tirarse y Rodar' y la prevención en cocina, enchufes y monte."
      ],
      actividadAula: "Simulacro del Detective del Humo: Practicar en clase el recorrido hasta el patio agachándose en un tramo imaginario de humo y nombrando al encargado de cerrar la puerta.",
      consejoFamilia: "Comprobad juntos si tenéis detector de humo en el pasillo, elegid un punto de encuentro en la calle (por ejemplo, una farola o banco frente al portal) y recordad dejar las llaves puestas o en un cuenco junto a la puerta."
    }
  },

  terremotos: {
    id: "terremotos",
    bloque: "Tierra y Montaña",
    nombre: "Terremotos y Sismos",
    nombreCorto: "Terremotos",
    icono: "🌍",
    colorPrimario: "#b45309",
    colorSecundario: "#fef3c7",
    lema: "¡Agáchate, Cúbrete y Agárrate hasta que deje de temblar!",
    resumenJunior: "En un terremoto el suelo tiembla durante unos segundos. Tu misión es meterte bajo una mesa fuerte, cubrirte la cabeza y no salir corriendo mientras tiembla.",
    resumenSenior: "Durante un sismo el mayor riesgo no es que el suelo se abra, sino la caída de objetos, cristales y muebles. Dominarás la técnica 'Agáchate, Cúbrete y Agárrate' y la evacuación segura tras el temblor ante posibles réplicas.",
    reglasOro: [
      "Mientras tiembla: AGÁCHATE de rodillas, CÚBRETE bajo una mesa firme y AGÁRRATE a sus patas.",
      "Aléjate de ventanas, espejos, estanterías altas y lámparas.",
      "NO corras hacia las escaleras ni uses el ascensor mientras dura el temblor; sal cuando pare."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 objetos que debes tener en tu mochila de emergencia sísmica.",
      instruccionSenior: "Selecciona los 5 objetos clave para estar preparado tras un terremoto y sus réplicas.",
      items: [
        { id: "silbato", icono: "📢", nombre: "Silbato de emergencia", correcto: true, nivel: "ambos", explicacion: "Permite pedir ayuda haciendo mucho ruido sin cansar la voz ni tragar polvo." },
        { id: "linterna_t", icono: "🔦", nombre: "Linterna y pilas", correcto: true, nivel: "ambos", explicacion: "Los terremotos suelen cortar la luz; nunca uses cerillas por si hay fugas de gas." },
        { id: "zapatos", icono: "👟", nombre: "Calzado cerrado con suela dura", correcto: true, nivel: "ambos", explicacion: "Tras un temblor suele haber cristales rotos en el suelo; ten zapatillas cerca de la cama." },
        { id: "agua_comida", icono: "🥫", nombre: "Agua y comida que no se estropee", correcto: true, nivel: "ambos", explicacion: "Barritas energéticas y agua para pasar las primeras horas en el punto de encuentro." },
        { id: "botiquin_t", icono: "⛑️", nombre: "Botiquín de primeros auxilios", correcto: true, nivel: "10-12", explicacion: "Para curar pequeños cortes o golpes producidos por objetos caídos." },
        { id: "jarron", icono: "🏺", nombre: "Adornos de cristal en estanterías altas", correcto: false, nivel: "ambos", explicacion: "Los objetos pesados o de cristal en alto pueden caer durante el temblor." },
        { id: "velas_t", icono: "🕯️", nombre: "Velas y mecheros", correcto: false, nivel: "ambos", explicacion: "¡Peligro! Un terremoto puede romper tuberías de gas; encender fuego puede causar una explosión." },
        { id: "patinete", icono: "🛴", nombre: "Patinete eléctrico enchufado", correcto: false, nivel: "10-12", explicacion: "No sirve en una evacuación por escaleras y obstaculiza las puertas de salida." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Sujetar las estanterías a la pared y buscar mesas fuertes", textoSenior: "Fijar estanterías a la pared, no poner objetos pesados sobre la cama y localizar los sitios seguros de cada sala", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Agacharse, cubrirse bajo una mesa y agarrarse lejos de cristales", textoSenior: "Aplicar 'Agáchate, Cúbrete y Agárrate' bajo una mesa o junto a un muro de carga interior, lejos de ventanas", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Cuando deje de temblar, ponerse zapatos y salir por la escalera a una plaza abierta", textoSenior: "Al parar el temblor, calzarse, cerrar agua/luz/gas, bajar por escaleras y acudir a un espacio abierto atento a réplicas", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Guardar una linterna y zapatillas al lado de la cama", textoSenior: "Preparar la mochila de 72 horas y acordar con la familia un punto de reunión en una plaza despejada", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Si estás en el patio o la calle, aléjate de muros y farolas", textoSenior: "En el exterior: ir a una zona abierta lejos de fachadas, balcones, cables eléctricos y árboles", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "No tocar cristales rotos y usar mensajes en vez de llamadas largas", textoSenior: "Comunicarse por SMS/mensajería para no saturar líneas y usar el teléfono solo para emergencias al 112", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Salir corriendo por las escaleras mientras todo el edificio está temblando.", textoSenior: "Correr hacia las escaleras o balcones en pleno terremoto para intentar salir antes de que acabe.", esSeguro: false, explicacion: "¡Peligro! Durante el temblor es cuando caen cristales y cornisas y te puedes caer por la escalera. Espera protegido a que pare." },
      { id: "r2", textoJunior: "Agacharse bajo el pupitre o mesa, cubrirse el cuello y agarrarse fuerte.", textoSenior: "Hacer 'Agáchate, Cúbrete y Agárrate' bajo una mesa resistente protegiendo cabeza y nuca.", esSeguro: true, explicacion: "¡Perfecto! Esa es la maniobra oficial mundial que evita golpes por caída de objetos." },
      { id: "r3", textoJunior: "Ponerse al lado de una ventana grande para mirar qué pasa en la calle.", textoSenior: "Asomarse a la ventana o quedarse junto a una librería alta de cristal durante el sismo.", esSeguro: false, explicacion: "Los cristales pueden romperse con la vibración y las estanterías no fijadas pueden volcar." },
      { id: "r4", textoJunior: "Cuando termina el temblor, salir con calma con los profesores o padres a una zona abierta.", textoSenior: "Evacuar con calma al terminar el sismo por las escaleras hacia un patio o plaza sin cables ni fachadas cerca.", esSeguro: true, explicacion: "¡Muy bien! Así estarás en un sitio despejado por si ocurre una réplica (un segundo temblor más pequeño)." },
      { id: "r5", textoJunior: "Encender una vela o cerilla si el terremoto ha ocurrido de noche y no hay luz.", textoSenior: "Usar un mechero o encender interruptores si notas olor a gas tras el terremoto.", esSeguro: false, nivel: "10-12", explicacion: "Cualquier chispa o llama puede inflamar una fuga de gas rota por el sismo; usa siempre linterna a pilas." }
    ],
    simulador112: {
      situacion: "Acaba de terminar un temblor fuerte. Habéis salido a la plaza con tu familia, pero ves que ha caído un poste eléctrico echando chispas sobre un coche vacío.",
      pasos: [
        {
          pregunta: "1. ¿Qué debes hacer respecto al poste eléctrico antes de llamar al 112?",
          opciones: [
            { texto: "Alejarnos todos muchos metros del cable y avisar a la gente para que nadie se acerque.", correcta: true, feedback: "¡Muy bien! Nunca te acerques a cables caídos tras un terremoto." },
            { texto: "Acercarme a apartar el cable con un palo.", correcta: false, feedback: "¡Peligro mortal! Los cables de la calle tienen alta tensión." },
            { texto: "Volver a entrar corriendo al edificio a buscar herramientas.", correcta: false, feedback: "No debes volver a entrar al edificio por si hay réplicas." }
          ]
        },
        {
          pregunta: "2. ¿Cuándo debemos llamar al 112 después de un terremoto?",
          opciones: [
            { texto: "Solo si hay heridos, incendios, cables caídos, olor a gas o personas atrapadas, para no bloquear las líneas.", correcta: true, feedback: "¡Exacto! Si todos llaman solo para preguntar '¿ha habido un terremoto?', el 112 se bloquea." },
            { texto: "Llamar siempre aunque estemos todos bien solo para contar que se ha movido la lámpara.", correcta: false, feedback: "Si no hay peligro ni heridos, deja libre la línea para quienes sí necesitan rescate." },
            { texto: "Llamar diez veces seguidas colapsando el teléfono.", correcta: false, feedback: "Una sola llamada clara basta para activar la ayuda." }
          ]
        },
        {
          pregunta: "3. Hablas con el 112 por el cable con chispas. ¿Qué les dices?",
          opciones: [
            { texto: "En la Plaza del Sol frente al número 8 ha caído un cable eléctrico con chispas tras el temblor; no hay heridos y nos hemos alejado.", correcta: true, feedback: "¡Perfecto! Ubicación exacta, tipo de peligro y confirmación de que no hay heridos." },
            { texto: "Ha temblado el suelo y tengo susto.", correcta: false, feedback: "Recuerda indicar el peligro concreto (el cable caído) y la dirección de la plaza." },
            { texto: "Decirles que estamos bien y colgar sin mencionar el cable con chispas.", correcta: false, feedback: "Un cable con chispas puede causar un incendio o electrocutar a alguien; hay que avisarlo." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Automatizar el gesto 'Agáchate, Cúbrete y Agárrate' en menos de 3 segundos al oír la señal.",
        "Entender que no se evacúa DURANTE la sacudida sino DESPUÉS, protegiéndose de posibles réplicas.",
        "Uso responsable de las telecomunicaciones tras un sismo (no saturar el 112 si no hay emergencia)."
      ],
      actividadAula: "Reto Tortuga (7-9) / Maniobra Sísmica (10-12): Al sonar una palmada o silbato, toda la clase se coloca bajo su mesa agarrando las patas durante 15 segundos y luego realiza la salida ordenada al patio.",
      consejoFamilia: "Haced una inspección en casa buscando 'objetos saltarines' (cuadros pesados sobre las camas, estanterías sin anclar a la pared) y colocad una linterna y zapatillas junto a las camas."
    }
  },

  volcanes: {
    id: "volcanes",
    bloque: "Tierra y Montaña",
    nombre: "Erupciones Volcánicas y Ceniza",
    nombreCorto: "Volcanes",
    icono: "🌋",
    colorPrimario: "#be123c",
    colorSecundario: "#ffe4e6",
    lema: "¡Protégete de la ceniza con gafas y mascarilla y sigue las rutas de evacuación!",
    resumenJunior: "Un volcán avisa antes de despertar expulsando humo, ceniza y lava. Tu misión es proteger tus ojos y nariz de la ceniza y preparar tu mochila por si hay que evacuar.",
    resumenSenior: "El riesgo volcánico incluye coladas de lava, caída de ceniza (piroclastos), gases y pequeños sismos previos. Aprenderás a sellar puertas contra la ceniza, proteger vías respiratorias y ojos, y evacuar ordenadamente.",
    reglasOro: [
      "Si cae ceniza volcánica: usa mascarilla (o paño), gafas protectoras y ropa de manga larga.",
      "Cierra ventanas, puertas y conductos de ventilación para que la ceniza no entre en casa.",
      "Jamás te acerques a las coladas de lava, laderas del volcán ni valles bajos por donde pueda bajar."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 objetos especiales para protegerte de la ceniza de un volcán.",
      instruccionSenior: "Selecciona los 5 elementos indispensables en una alerta o evacuación volcánica.",
      items: [
        { id: "gafas", icono: "🥽", nombre: "Gafas cerradas o de protección", correcto: true, nivel: "ambos", explicacion: "La ceniza volcánica es roca diminuta muy abrasiva que irrita y daña los ojos." },
        { id: "mascarilla", icono: "😷", nombre: "Mascarilla FFP2 o pañuelo", correcto: true, nivel: "ambos", explicacion: "Evita que respires el polvo fino de la ceniza volcánica." },
        { id: "agua_v", icono: "💧", nombre: "Botellas de agua cerradas", correcto: true, nivel: "ambos", explicacion: "Para beber y limpiar ojos o piel, manteniendo los envases bien tapados contra la ceniza." },
        { id: "radio_v", icono: "📻", nombre: "Radio con pilas y linterna", correcto: true, nivel: "ambos", explicacion: "Permite seguir las órdenes de evacuación del semáforo volcánico de Protección Civil." },
        { id: "gorra", icono: "🧢", nombre: "Gorra y camiseta de manga larga", correcto: true, nivel: "10-12", explicacion: "Cubre el pelo y la piel para que la ceniza ácida no cause irritación." },
        { id: "lentillas", icono: "👁️", nombre: "Ponerse lentillas en vez de gafas", correcto: false, nivel: "10-12", explicacion: "¡Peligro! Si entra ceniza bajo una lentilla puede arañar la córnea; usa siempre gafas." },
        { id: "dron", icono: "🛸", nombre: "Volar un juguete o dron hacia el volcán", correcto: false, nivel: "ambos", explicacion: "Estorba a los helicópteros y drones científicos de vigilancia y emergencia." },
        { id: "sandalias", icono: "🩴", nombre: "Chanclas abiertas", correcto: false, nivel: "ambos", explicacion: "En una evacuación volcánica necesitas calzado cerrado y resistente." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Conocer los colores del semáforo volcánico (verde, amarillo, naranja y rojo)", textoSenior: "Conocer el semáforo volcánico (verde, amarillo, naranja, rojo), tener la mochila lista y saber el punto de reunión", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Cerrar ventanas por la ceniza y salir con gafas y mascarilla si avisan de evacuar", textoSenior: "Sellar rendijas con paños húmedos ante ceniza/gases y evacuar inmediatamente hacia zonas altas si las autoridades lo ordenan", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "No volver a casa hasta que lo diga Protección Civil y limpiar la ceniza sin echarle agua", textoSenior: "Recoger la ceniza en bolsas secas (con agua se vuelve pesada como cemento y atasca desagües) y no limpiar tejados sin seguridad", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Guardar comida, agua y una ficha con el teléfono de tus padres", textoSenior: "Tapar depósitos de agua exteriores para que no se contaminen con ceniza", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Alejarse de barrancos y valles por donde pueda bajar lava", textoSenior: "Evitar zonas bajas y hondonadas donde puedan acumularse gases volcánicos pesados", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Lavar bien la fruta y verdura antes de comerla", textoSenior: "No conducir si hay mucha ceniza en la calzada porque es muy resbaladiza y obstruye los motores", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Frotarse los ojos con las manos si te entra ceniza del volcán.", textoSenior: "Frotarse los ojos con fuerza si notas arenilla o ceniza volcánica en la calle.", esSeguro: false, explicacion: "¡Nunca te frotes! La ceniza volcánica son microcristales de roca que arañan el ojo; lávalo con abundante agua limpia." },
      { id: "r2", textoJunior: "Cerrar todas las ventanas y puertas si empieza a caer ceniza.", textoSenior: "Quedarse en el interior cerrando ventanas, persianas y tiros de chimenea o aire acondicionado mientras llueve ceniza.", esSeguro: true, explicacion: "¡Correcto! Así mantienes el aire de casa limpio y libre de partículas." },
      { id: "r3", textoJunior: "Echar manguerazos de agua para limpiar la ceniza por el desagüe.", textoSenior: "Limpiar grandes cantidades de ceniza volcánica con manguera hacia las alcantarillas.", esSeguro: false, explicacion: "¡Error! La ceniza volcánica mezclada con agua forma una pasta dura como el cemento que bloquea todas las tuberías. Se barre humedeciéndola muy poquito y se mete en bolsas." },
      { id: "r4", textoJunior: "Seguir el camino de evacuación con tu familia cuando el semáforo volcánico lo indique.", textoSenior: "Acudir con la mochila preparada al punto de encuentro oficial en cuanto se ordene la evacuación preventiva.", esSeguro: true, explicacion: "¡Exacto! Los volcanes dan señales a los científicos y evacuar a tiempo salva todas las vidas." }
    ],
    simulador112: {
      situacion: "Cae mucha ceniza en tu barrio y notas un olor muy fuerte como a huevos podridos (azufre) que hace toser a tu familia.",
      pasos: [
        {
          pregunta: "1. ¿Qué hacéis en casa nada más notar los gases y la ceniza?",
          opciones: [
            { texto: "Cerrar todas las ventanas, poner paños húmedos en las rendijas, ponernos mascarilla y subir a la planta alta.", correcta: true, feedback: "¡Muy bien! Los gases volcánicos suelen acumularse en zonas bajas; cerrar y subir os protege." },
            { texto: "Abrir las ventanas de par en par para que entre más ceniza.", correcta: false, feedback: "Si abres, entrará más gas y ceniza de la calle." },
            { texto: "Bajar al sótano a respirar allí.", correcta: false, feedback: "¡Peligro! Los gases pesados del volcán se acumulan en sótanos y partes bajas." }
          ]
        },
        {
          pregunta: "2. Llamas al 112 porque a tu abuelo le cuesta respirar por el gas y la ceniza. ¿Qué dices?",
          opciones: [
            { texto: "Estamos en Calle del Pino 5, 2ºA; entra olor fuerte a gas volcánico y mi abuelo tiene dificultad para respirar.", correcta: true, feedback: "¡Perfecto! Dirección exacta, causa (gases/ceniza) y síntoma médico urgente." },
            { texto: "El volcán está echando humo, ¿podéis apagarlo?", correcta: false, feedback: "Un volcán no se apaga; el 112 coordina rescates, atención médica y evacuaciones." },
            { texto: "Voy a salir corriendo hacia el cráter para ver de dónde sale el humo.", correcta: false, feedback: "Jamás te acerques a la zona de exclusión del volcán." }
          ]
        },
        {
          pregunta: "3. El 112 os indica que un vehículo de Protección Civil va a evacuar vuestra calle. ¿Cómo salís?",
          opciones: [
            { texto: "Con gafas, mascarilla, manga larga, calzado cerrado y nuestra mochila de emergencia lista.", correcta: true, feedback: "¡Excelente agente 112! Equipamiento completo contra la ceniza." },
            { texto: "En pantalón corto, chanclas y sin taparnos la boca.", correcta: false, feedback: "La ceniza irrita la piel, los ojos y los pulmones." },
            { texto: "Escondiéndonos para no ir al punto de evacuación.", correcta: false, feedback: "Seguir la evacuación oficial es lo que garantiza estar totalmente a salvo." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Comprender el Semáforo Volcánico (Verde, Amarillo, Naranja, Rojo) como herramienta científica de prevención.",
        "Conocer la protección frente a ceniza (gafas, mascarilla, barrido en seco) y gases (evitar sótanos y hondonadas).",
        "Valorar el trabajo de vulcanólogos y equipos de emergencia en una evacuación ordenada."
      ],
      actividadAula: "El Semáforo del Volcán: Juego en el aula donde el docente levanta tarjetas Verde (vida normal), Amarilla (atentos y revisar mochila), Naranja (preparados para salir) y Roja (evacuación ordenada al punto de reunión).",
      consejoFamilia: "Si vivís o viajáis a zonas volcánicas (como Canarias), tened en el botiquín gafas de protección estancas, mascarillas FFP2 y suero fisiológico para lavado ocular."
    }
  },

  tormentas: {
    id: "tormentas",
    bloque: "Clima Extremo",
    nombre: "Tormentas Eléctricas, Rayos y Granizo",
    nombreCorto: "Tormentas y Rayos",
    icono: "⚡",
    colorPrimario: "#6d28d9",
    colorSecundario: "#ede9fe",
    lema: "¡Si oyes el trueno, busca refugio dentro y aléjate de árboles aislados y del agua!",
    resumenJunior: "Los rayos buscan las cosas altas, el metal y el agua. Tu misión es entrar en un edificio o coche cerrado cuando oigas truenos y no ponerte nunca debajo de un árbol solitario.",
    resumenSenior: "Durante una tormenta eléctrica, la regla '30/30' (si entre el relámpago y el trueno pasan menos de 30 segundos, el rayo está cerca) te avisa para refugiarte en un edificio o coche con ventanillas cerradas.",
    reglasOro: [
      "En el exterior: NUNCA te refugies debajo de un árbol aislado ni en tiendas de campaña.",
      "Sal inmediatamente del mar, piscinas, ríos o charcos y aléjate de vallas metálicas y bicis.",
      "El lugar más seguro es dentro de una casa o dentro de un coche con puertas y ventanillas cerradas."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 objetos seguros cuando hay aviso de tormenta eléctrica.",
      instruccionSenior: "Selecciona los 5 elementos adecuados ante una tormenta fuerte (evita lo que atrae o conduce electricidad).",
      items: [
        { id: "chubasquero", icono: "🧥", nombre: "Chubasquero con capucha (sin puntas metálicas)", correcto: true, nivel: "ambos", explicacion: "Te protege de la lluvia sin usar una varilla metálica en alto como la de un paraguas." },
        { id: "linterna_rayo", icono: "🔦", nombre: "Linterna a pilas", correcto: true, nivel: "ambos", explicacion: "Segura si la tormenta hace saltar los plomos en casa." },
        { id: "calzado_goma", icono: "🥾", nombre: "Botas con suela de goma", correcto: true, nivel: "ambos", explicacion: "Te mantienen seco y ayudan a aislarte del suelo húmedo." },
        { id: "mochila_imper", icono: "🎒", nombre: "Mochila sin estructura metálica", correcto: true, nivel: "ambos", explicacion: "En excursiones al campo es importante no llevar objetos metálicos que sobresalgan." },
        { id: "bateria", icono: "🔋", nombre: "Batería externa cargada (sin enchufar a la pared)", correcto: true, nivel: "10-12", explicacion: "Permite cargar el móvil sin tenerlo conectado al enchufe de la pared durante los rayos." },
        { id: "paraguas_metal", icono: "☂️", nombre: "Paraguas con punta metálica en campo abierto", correcto: false, nivel: "ambos", explicacion: "¡Peligro! Levantar una punta metálica en una zona abierta atrae las descargas eléctricas." },
        { id: "cana", icono: "🎣", nombre: "Caña de pescar o palo de golf", correcto: false, nivel: "ambos", explicacion: "Son objetos largos y conductores junto al agua o en praderas abiertas: altísimo riesgo de rayo." },
        { id: "cometa", icono: "🪁", nombre: "Volar una cometa con viento de tormenta", correcto: false, nivel: "10-12", explicacion: "El hilo húmedo en las nubes conduce directamente la electricidad de los rayos." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Mirar el tiempo antes de ir de excursión o a la piscina", textoSenior: "Consultar los avisos de AEMET antes de excursiones al campo, montaña o playa y posponer si hay alerta de tormentas", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Entrar en un edificio o coche cerrado, salir del agua y no ponerse bajo árboles", textoSenior: "En casa: cerrar ventanas para evitar corrientes de aire y desenchufar aparatos. Fuera: entrar en edificio o coche cerrado; si estás en el campo sin refugio, ponerte en cuclillas con los pies juntos", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Esperar media hora desde el último trueno antes de volver al patio o la piscina", textoSenior: "Esperar 30 minutos desde el último trueno antes de reanudar actividades al aire libre y revisar si han caído ramas o cables", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Recoger toldos y macetas del balcón si viene tormenta con granizo", textoSenior: "Asegurar objetos de terrazas y balcones que puedan caer por las rachas de viento de la tormenta", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "En casa, no ducharse ni tocar aparatos enchufados durante los rayos", textoSenior: "Evitar usar aparatos conectados a la red eléctrica y grifos metálicos mientras caen rayos cerca", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Avisar a un adulto si un rayo ha quemado un árbol o poste", textoSenior: "Comprobar el cuadro eléctrico si ha saltado el diferencial y alertar al 112 si un rayo ha provocado humo en el monte", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Correr a ponerse debajo del único árbol grande que hay en medio del parque cuando caen rayos.", textoSenior: "Refugiarse bajo un árbol solitario o una caseta abierta en el campo durante una tormenta eléctrica.", esSeguro: false, explicacion: "¡Es el error más peligroso! Los árboles aislados atraen los rayos por su altura y la descarga salta a quien está debajo." },
      { id: "r2", textoJunior: "Salir enseguida de la piscina o de la playa en cuanto oyes el primer trueno.", textoSenior: "Salir del agua (piscina, mar o río) y secarse en un edificio cerrado al escuchar el primer trueno aunque aún no llueva.", esSeguro: true, explicacion: "¡Muy bien! El agua transmite la electricidad a gran distancia y los rayos pueden caer antes de que empiece a llover." },
      { id: "r3", textoJunior: "Meternos dentro del coche de papá o mamá con las ventanillas subidas si nos pilla la tormenta sin edificios cerca.", textoSenior: "Refugiarse dentro de un coche cerrado con el motor apagado y sin tocar las partes metálicas de la carrocería.", esSeguro: true, explicacion: "¡Correcto! La carrocería metálica del coche hace de escudo ('jaula de Faraday') y desvía la electricidad al suelo sin dañar a los de dentro." },
      { id: "r4", textoJunior: "Tumbarse estirado del todo en el suelo del campo si hay rayos.", textoSenior: "Tumbarse completamente plano en el suelo mojado en mitad del campo cuando hay rayos.", esSeguro: false, explicacion: "¡No te tumbes! Cuanta más superficie de tu cuerpo toque el suelo, más peligroso es. La postura de emergencia en el campo es en cuclillas (hecho una bolita), con los pies juntos y tapándote los oídos." }
    ],
    simulador112: {
      situacion: "Estás en casa viendo la tormenta desde lejos de la ventana y ves que un rayo cae en unos pinos frente a tu calle y empieza a salir fuego y humo.",
      pasos: [
        {
          pregunta: "1. ¿Qué haces en casa antes de avisar al 112?",
          opciones: [
            { texto: "Mantener las ventanas cerradas para que no entren corrientes ni humo y avisar a los adultos de casa.", correcta: true, feedback: "¡Muy bien! Las corrientes de aire pueden atraer descargas y el humo no debe entrar." },
            { texto: "Salir a la calle con un paraguas metálico bajo los rayos para ver el árbol de cerca.", correcta: false, feedback: "¡Peligro doble! Siguen cayendo rayos y el árbol está ardiendo." },
            { texto: "Subir al tejado del edificio para verlo mejor.", correcta: false, feedback: "El tejado es el punto más alto y peligroso durante una tormenta eléctrica." }
          ]
        },
        {
          pregunta: "2. Llamas al 112 para avisar del incendio por el rayo. ¿Qué dices?",
          opciones: [
            { texto: "Un rayo acaba de caer en los pinos frente a la Calle Olivo 10 y está saliendo fuego y humo.", correcta: true, feedback: "¡Perfecto! Avisar rápido de un rayo que prende árboles evita un gran incendio forestal." },
            { texto: "Ha sonado un trueno muy fuerte y me he asustado.", correcta: false, feedback: "El trueno por sí solo es normal; lo importante es avisar de que ha prendido fuego a los árboles." },
            { texto: "Decir solo 'hay fuego en un árbol' sin decir en qué pueblo ni calle estás.", correcta: false, feedback: "Siempre hay que dar la ubicación o referencias claras." }
          ]
        },
        {
          pregunta: "3. Si un amigo estuviera en una excursión y la tormenta les sorprende en el campo sin coches ni casas cerca, ¿qué consejo del 112 deben seguir?",
          opciones: [
            { texto: "Bajar de las cimas, alejarse de árboles solitarios y vallas, separarse unos metros y ponerse en cuclillas con los pies juntos.", correcta: true, feedback: "¡Regla de experto! La posición de seguridad en cuclillas con pies juntos minimiza el contacto con el suelo." },
            { texto: "Subir todos juntos a lo más alto de la colina y abrir los paraguas.", correcta: false, feedback: "Las cimas y los paraguas son los puntos donde más caen los rayos." },
            { texto: "Meterse en el río para no mojarse con la lluvia.", correcta: false, feedback: "El agua es muy conductora de la electricidad." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Aprender la regla de los 30 segundos (contar segundos entre el relámpago y el trueno: menos de 30 s = peligro cercano).",
        "Conocer por qué los árboles aislados, el agua y las cumbres son peligrosos y por qué una casa o coche cerrado son seguros.",
        "Practicar la postura de seguridad en cuclillas con pies juntos para campo abierto."
      ],
      actividadAula: "Calculadora de Tormentas: Explicar cómo el sonido viaja a 1 km cada 3 segundos (si cuentas 9 segundos entre el relámpago y el trueno, la tormenta está a 3 km) y practicar la postura de bolita en cuclillas.",
      consejoFamilia: "En verano o en excursiones a la montaña y piscina, consultad siempre el radar de tormentas antes de salir y respetad la espera de 30 minutos tras el último trueno."
    }
  },

  ola_calor: {
    id: "ola_calor",
    bloque: "Clima Extremo",
    nombre: "Olas de Calor y Altas Temperaturas",
    nombreCorto: "Ola de Calor",
    icono: "☀️",
    colorPrimario: "#d97706",
    colorSecundario: "#fef9c3",
    lema: "¡Bebe agua sin esperar a tener sed, busca la sombra y evita el sol del mediodía!",
    resumenJunior: "Cuando hace muchísimo calor varios días seguidos, nuestro cuerpo puede agotarse. Tu misión es beber agua a menudo, usar gorra y crema solar y jugar a la sombra.",
    resumenSenior: "Las olas de calor pueden provocar deshidratación y golpes de calor (una urgencia médica grave). Aprenderás a mantener fresca la casa, proteger a personas vulnerables y mascotas, y actuar ante un mareo por calor.",
    reglasOro: [
      "Bebe agua frecuentemente aunque no tengas sed y come fruta y comidas frescas.",
      "Evita hacer deporte o correr al sol en las horas centrales del día (de 12:00 a 17:00).",
      "NUNCA se debe dejar a un niño, persona mayor o mascota dentro de un coche aparcado al sol, ni un minuto."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 objetos para protegerte en un día de ola de calor.",
      instruccionSenior: "Selecciona los 5 elementos esenciales para prevenir la deshidratación y el golpe de calor.",
      items: [
        { id: "cantimplora", icono: "🍼", nombre: "Cantimplora con agua fresca", correcto: true, nivel: "ambos", explicacion: "Hidratarse a pequeños sorbos todo el día evita el golpe de calor." },
        { id: "gorra_sol", icono: "🧢", nombre: "Gorra o sombrero transpirable", correcto: true, nivel: "ambos", explicacion: "Protege la cabeza de la radiación solar directa." },
        { id: "crema", icono: "🧴", nombre: "Crema protectora solar", correcto: true, nivel: "ambos", explicacion: "Evita quemaduras solares que además impiden que la piel regule bien la temperatura." },
        { id: "ropa_clara", icono: "👕", nombre: "Ropa ligera, holgada y de colores claros", correcto: true, nivel: "ambos", explicacion: "Los colores claros reflejan el sol y dejan transpirar el sudor." },
        { id: "fruta", icono: "🍉", nombre: "Fruta fresca (sandía, melón, naranja)", correcto: true, nivel: "10-12", explicacion: "Aporta agua, vitaminas y sales minerales que se pierden al sudar." },
        { id: "abrigo_negro", icono: "🧥", nombre: "Sudadera gruesa oscura a pleno sol", correcto: false, nivel: "ambos", explicacion: "Atrapa el calor y sube peligrosamente la temperatura corporal." },
        { id: "refresco_azucar", icono: "🥤", nombre: "Bebidas con muchísimo azúcar o muy calientes", correcto: false, nivel: "10-12", explicacion: "No hidratan igual que el agua y aumentan la sensación de sed." },
        { id: "partido_sol", icono: "⚽", nombre: "Jugar un partido intenso a las 15:00 sin sombra", correcto: false, nivel: "ambos", explicacion: "Hacer ejercicio intenso en las horas de más sol es la causa principal de golpe de calor." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Bajar las persianas por la mañana cuando da el sol en las ventanas", textoSenior: "Ventilar la casa de noche o a primera hora y bajar persianas y toldos antes de que entre el sol directo", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Beber agua a menudo, estar en sitios frescos y no correr al sol del mediodía", textoSenior: "Beber agua cada poco tiempo, permanecer en lugares frescos o climatizados entre las 12 h y las 17 h y cuidar de bebés y abuelos", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Si alguien se marea por el calor, llevarlo a la sombra y avisar a un adulto", textoSenior: "Si alguien sufre agotamiento o golpe de calor (piel muy caliente, mareo, confusión), llevarlo a un sitio fresco, refrescarle nuca y axilas y llamar al 112", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Preparar ropa clara, gorra y crema solar antes de salir", textoSenior: "Consultar los avisos por altas temperaturas de AEMET y planificar las actividades físicas a primera o última hora del día", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "No dejar nunca a nadie ni a las mascotas esperando dentro del coche al sol", textoSenior: "Evitar comidas copiosas o bebidas muy azucaradas y comprobar que nunca quede nadie ni mascotas dentro de un vehículo cerrado", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Reponer agua y sales comiendo fruta fresca cuando baje el sol", textoSenior: "Hidratarse de forma progresiva tras la exposición al calor y revisar que los medicamentos en casa se hayan conservado en lugar fresco", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Esperar a tener la boca muy seca y mucha sed para beber el primer vaso de agua del día.", textoSenior: "Beber agua únicamente cuando sientes muchísima sed durante una ola de calor.", esSeguro: false, explicacion: "Cuando sientes mucha sed tu cuerpo ya ha empezado a deshidratarse; en olas de calor hay que beber agua regularmente sin esperar." },
      { id: "r2", textoJunior: "Quedarse esperando dentro del coche aparcado al sol con las ventanillas casi cerradas.", textoSenior: "Dejar a una mascota o esperar dentro de un coche aparcado al sol 'solo 10 minutos'.", esSeguro: false, explicacion: "¡Peligro extremo! Un coche al sol funciona como un horno y su temperatura sube 20 grados en pocos minutos." },
      { id: "r3", textoJunior: "Bajar las persianas durante el día y abrir las ventanas por la noche cuando refresca.", textoSenior: "Mantener persianas bajadas en las fachadas soleadas de día y ventilar de madrugada.", esSeguro: true, explicacion: "¡Correcto! Ese truco mantiene la casa varios grados más fresca de forma natural." },
      { id: "r4", textoJunior: "Poner paños frescos con agua en la frente y el cuello a un amigo que está mareado por el calor.", textoSenior: "Colocar en la sombra, aflojar la ropa y aplicar paños húmedos tibios/frescos en cuello, frente y axilas a quien sufre calor extremo.", esSeguro: true, explicacion: "¡Muy bien! Enfriar poco a poco en la sombra mientras llega ayuda es el primer auxilio correcto." }
    ],
    simulador112: {
      situacion: "Estás en el parque a las 4 de la tarde con mucho calor y una persona mayor se sienta en un banco muy confundida, con la piel roja, muy caliente y seca, y casi no puede responder.",
      pasos: [
        {
          pregunta: "1. ¿Qué es lo primero que hacéis mientras marcáis el 112?",
          opciones: [
            { texto: "Asegurar que esté a la sombra, abanicarle y refrescarle la frente y el cuello con agua sin obligarle a beber si está aturdido.", correcta: true, feedback: "¡Excelente! Si una persona está muy mareada o semiinconsciente no debe tragar líquido por riesgo de atragantarse; refresca su piel por fuera." },
            { texto: "Ponerle al sol para que sude más.", correcta: false, feedback: "¡No! En un golpe de calor el cuerpo ya no puede regular su temperatura y hay que sacarlo del sol." },
            { texto: "Dejarle solo e irnos a casa sin decir nada.", correcta: false, feedback: "Un golpe de calor es una emergencia médica; hay que pedir ayuda de inmediato." }
          ]
        },
        {
          pregunta: "2. Hablas con el 112. ¿Qué síntomas importantes cuentas?",
          opciones: [
            { texto: "Hay una persona mayor con posible golpe de calor: tiene la piel muy caliente y roja, está confundida y hace muchísimo calor.", correcta: true, feedback: "¡Perfecto! Esos datos indican al médico del 112 que es una urgencia por golpe de calor." },
            { texto: "Hace mucho sol hoy en el parque.", correcta: false, feedback: "Debes explicar que hay un paciente con síntomas graves por el calor." },
            { texto: "Decir que se ha hecho un esguince jugando en la nieve.", correcta: false, feedback: "Da siempre los datos reales de lo que ves." }
          ]
        },
        {
          pregunta: "3. ¿Qué haces hasta que llega la ambulancia del 112?",
          opciones: [
            { texto: "Seguir refrescándole con paños húmedos en la sombra, mantener la línea abierta si el médico da instrucciones y señalar la entrada del parque a la ambulancia.", correcta: true, feedback: "¡Gran trabajo de equipo! Guiar a la ambulancia ahorra minutos valiosos." },
            { texto: "Meterle de golpe en una bañera con bloques de hielo congelado.", correcta: false, feedback: "Los cambios bruscos con hielo extremo son peligrosos; se usan paños frescos y ventilación." },
            { texto: "Irnos antes de que lleguen los sanitarios.", correcta: false, feedback: "Acompaña siempre hasta que los servicios de emergencia se hagan cargo." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Distinguir entre tener calor normal y los signos de alerta de un golpe de calor (piel roja/seca, mareo, dolor de cabeza, confusión).",
        "Adquirir hábitos de hidratación, fotoprotección y horarios seguros de juego.",
        "Empatizar con los grupos más vulnerables al calor: bebés, personas mayores, trabajadores al aire libre y mascotas."
      ],
      actividadAula: "Patrulla de Hidratación y Sombra: Diseñar un cartel para el recreo indicando las zonas de sombra del patio y recordar el 'brindis de agua' antes y después del recreo.",
      consejoFamilia: "En alertas naranjas o rojas por calor, llamad a diario a los abuelos o vecinos mayores que vivan solos para comprobar que beben agua y tienen la casa fresca."
    }
  },

  nevadas: {
    id: "nevadas",
    bloque: "Clima Extremo",
    nombre: "Nevadas Intensas, Olas de Frío y Hielo",
    nombreCorto: "Nevadas y Frío",
    icono: "❄️",
    colorPrimario: "#0369a1",
    colorSecundario: "#e0f2fe",
    lema: "¡Abrígate por capas como una cebolla y ten mucho cuidado con el hielo y las estufas!",
    resumenJunior: "En una gran nevada las calles se llenan de nieve y hielo resbaladizo. Tu misión es abrigarte con varias capas, caminar como un pingüino sobre el hielo y vigilar las estufas en casa.",
    resumenSenior: "Las olas de frío y temporales de nieve pueden bloquear carreteras, congelar tuberías y provocar caídas por placas de hielo o intoxicaciones por braseros y estufas mal ventiladas.",
    reglasOro: [
      "Vístete con varias capas finas y cálidas (regla de la cebolla), gorro, guantes y calzado con suela antideslizante.",
      "En casa: ventila a diario si usas estufas de gas, leña o braseros, y apágalos siempre antes de dormir.",
      "Evita viajar en coche si hay alerta por fuerte nevada; camina con pasos cortos sobre el hielo."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 objetos necesarios para estar seguro en una gran nevada.",
      instruccionSenior: "Selecciona los 5 elementos clave para el hogar o el coche ante un temporal de nieve.",
      items: [
        { id: "gorro_guantes", icono: "🧤", nombre: "Gorro, bufanda y guantes impermeables", correcto: true, nivel: "ambos", explicacion: "Gran parte del calor del cuerpo se pierde por la cabeza y las manos." },
        { id: "mantas", icono: "🛌", nombre: "Mantas térmicas o de abrigo", correcto: true, nivel: "ambos", explicacion: "Esenciales en casa si falla la calefacción y obligatorias en el maletero del coche en invierno." },
        { id: "botas_nieve", icono: "🥾", nombre: "Calzado con suela de goma con dibujo profundo", correcto: true, nivel: "ambos", explicacion: "Evita resbalones en las peligrosas placas de hielo de las aceras." },
        { id: "linterna_pilas", icono: "🔦", nombre: "Linterna, radio y batería móvil al 100%", correcto: true, nivel: "ambos", explicacion: "El peso de la nieve y el hielo puede cortar cables eléctricos." },
        { id: "cadenas", icono: "⛓️", nombre: "Cadenas para el coche y depósito lleno", correcto: true, nivel: "10-12", explicacion: "Si es imprescindible circular, hay que llevar cadenas/neumáticos de invierno, depósito lleno y comida." },
        { id: "brasero_cerrado", icono: "🔥", nombre: "Dejar un brasero de carbón encendido toda la noche sin ventilar", correcto: false, nivel: "ambos", explicacion: "¡Peligro mortal! Produce monóxido de carbono, un gas invisible y sin olor muy tóxico." },
        { id: "zapatos_lisos", icono: "👞", nombre: "Zapatos de suela lisa para correr por el hielo", correcto: false, nivel: "ambos", explicacion: "Las suelas lisas resbalan en las placas de hielo y causan fracturas." },
        { id: "ropa_mojada", icono: "👕", nombre: "Quedarse con los calcetines y la ropa mojados de nieve", correcto: false, nivel: "10-12", explicacion: "La ropa húmeda enfría el cuerpo rapidísimo y puede causar hipotermia." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Tener ropa de abrigo, comida en la despensa y no salir en coche si avisan de gran nevada", textoSenior: "Revisar calefacción y tejados, tener reservas de comida/medicinas y proteger la llave de paso del agua para que no se congele", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Quedarse en casa calentito, ventilar si hay estufas y apagarlas al ir a dormir", textoSenior: "Evitar desplazamientos, dejar correr un hilito de agua en un grifo en noches de helada extrema para que no revienten tuberías y ventilar estufas de combustión", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Caminar con cuidado por las placas de hielo y no pasar bajo tejados con carámbanos o bloques de nieve", textoSenior: "Echar sal en la entrada del portal, caminar con pasos cortos tipo pingüino y evitar pasar bajo cornisas o árboles cargados de nieve y hielo", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Llevar mantas y cadenas en el maletero del coche en invierno", textoSenior: "Comprobar el estado de neumáticos/cadenas, llevar el depósito de combustible lleno y una manta térmica en el vehículo", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Cambiarse enseguida si los calcetines o guantes se mojan con la nieve", textoSenior: "Sustituir de inmediato cualquier prenda húmeda por ropa seca para evitar la pérdida rápida de calor corporal (hipotermia)", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Sacudir con cuidado la nieve acumulada en balcones sin tirarla a quien pase debajo", textoSenior: "Retirar la nieve acumulada en accesos y terrazas con precaución de no arrojarla a la vía pública sobre peatones", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Ponerse tres prendas cómodas por capas (camiseta térmica, forro polar y abrigo impermeable) en vez de un solo abrigo encima del pijama fino.", textoSenior: "Vestirse por capas ('técnica de la cebolla') para retener el aire caliente entre prenda y prenda.", esSeguro: true, explicacion: "¡Exacto! Varias capas abrigan mucho más porque el aire entre ellas actúa como aislante térmico." },
      { id: "r2", textoJunior: "Poner la ropa mojada directamente pegada encima del radiador eléctrico o estufa.", textoSenior: "Cubrir una estufa eléctrica o halógena con ropa húmeda para secarla más rápido.", esSeguro: false, explicacion: "¡Peligro de incendio! Nunca cubras estufas ni acerques cortinas, sofás o ropa a menos de un metro." },
      { id: "r3", textoJunior: "Caminar después de la nevada justo por debajo de los bordes de los tejados donde cuelgan bloques de hielo.", textoSenior: "Pasar bajo aleros de edificios o ramas de árboles muy dobladas por el peso de la nieve helada.", esSeguro: false, explicacion: "¡Cuidado arriba! Cuando sale el sol tras la nevada, los bloques de hielo, carámbanos y ramas caen de golpe." },
      { id: "r4", textoJunior: "Si el coche se queda parado en la nieve con tus padres, quedarse dentro abrigados y comprobar que el tubo de escape no esté tapado por la nieve.", textoSenior: "Si quedáis bloqueados en carretera por la nieve: permanecer dentro del vehículo, encender la calefacción a ratos con una ventanilla un poco abierta y liberar de nieve el tubo de escape.", esSeguro: true, explicacion: "¡Muy bien! El coche os protege del viento helado y mantener limpio el tubo de escape evita que entren gases dentro." }
    ],
    simulador112: {
      situacion: "Ha nevado toda la noche, en casa tenéis encendida una estufa de gas o brasero con todo cerrado y de repente tu hermano y tu madre dicen que les duele mucho la cabeza y están muy mareados y con sueño.",
      pasos: [
        {
          pregunta: "1. ¡Atención! Dolor de cabeza y mareo en todos a la vez con una estufa encendida. ¿Qué haces de inmediato?",
          opciones: [
            { texto: "Apagar la estufa, abrir las ventanas de par en par para que entre aire limpio y salir de esa habitación.", correcta: true, feedback: "¡Acabas de salvar a tu familia! Es una intoxicación por mala combustión (monóxido de carbono): ventilar al instante es vital." },
            { texto: "Subir más fuerte la estufa y cerrar aún más las puertas.", correcta: false, feedback: "¡Peligro! Eso aumentaría el gas tóxico en la habitación." },
            { texto: "Echarse todos a dormir sin abrir la ventana.", correcta: false, feedback: "¡Nunca! Ese sueño repentino con estufas de gas o braseros es síntoma de falta de oxígeno." }
          ]
        },
        {
          pregunta: "2. Con las ventanas ya abiertas, llamas al 112. ¿Qué explicas?",
          opciones: [
            { texto: "Teníamos una estufa de gas encendida en el salón y mi madre y mi hermano están muy mareados y con fuerte dolor de cabeza; ya he apagado la estufa y abierto ventanas.", correcta: true, feedback: "¡Perfecto! El médico del 112 sabrá enseguida que necesitan oxígeno urgente." },
            { texto: "Hace mucho frío en la calle y está todo blanco.", correcta: false, feedback: "Explica siempre el problema médico urgente y la causa (la estufa)." },
            { texto: "Pedir que vengan a quitarnos la nieve del balcón.", correcta: false, feedback: "La urgencia real es el mareo por el gas de la estufa." }
          ]
        },
        {
          pregunta: "3. Si otro día ves en la acera helada a un vecino que ha resbalado en una placa de hielo y no puede levantarse porque le duele mucho el brazo o la cadera, ¿qué haces?",
          opciones: [
            { texto: "No moverle a la fuerza, abrigarle con una manta o abrigo para que no coja frío en el suelo y llamar al 112.", correcta: true, feedback: "¡Excelente! Ante una posible fractura en el hielo, no se le levanta de un tirón y se le protege del frío del suelo." },
            { texto: "Tirar fuerte de su brazo herido para levantarle corriendo.", correcta: false, feedback: "Si hay un hueso roto, tirar de él empeora la lesión." },
            { texto: "Echarle cubos de agua fría por encima.", correcta: false, feedback: "En el suelo helado lo más importante es abrigarle mientras llega la ambulancia." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Conocer la protección térmica por capas y el peligro de la hipotermia con ropa mojada.",
        "Prevenir el riesgo invisible de las estufas de combustión/braseros (ventilar siempre y apagar al dormir) y de los incendios por radiadores cubiertos.",
        "Identificar los peligros posteriores a la nevada: placas de hielo ocultas y desprendimiento de nieve/carámbanos de tejados y árboles."
      ],
      actividadAula: "El Paso del Pingüino: Practicar cómo caminar sobre superficies heladas (rodillas ligeramente flexionadas, cuerpo un poco inclinado hacia delante, pasos muy cortos apoyando toda la suela y manos fuera de los bolsillos).",
      consejoFamilia: "Jamás dejéis las manos dentro de los bolsillos al caminar con hielo (necesitáis los brazos libres para equilibraros) y revisad las rejillas de ventilación de calderas y estufas antes del invierno."
    }
  },

  vientos: {
    id: "vientos",
    bloque: "Clima Extremo",
    nombre: "Vientos Fuertes, Vendavales y Temporales",
    nombreCorto: "Vientos Fuertes",
    icono: "💨",
    colorPrimario: "#0d9488",
    colorSecundario: "#ccfbf1",
    lema: "¡Recoge las macetas del balcón y aléjate de árboles, grúas y cornisas!",
    resumenJunior: "Cuando el viento sopla con muchísima fuerza puede tirar ramas, macetas y carteles. Tu misión es recoger todo lo del balcón y no caminar por parques ni debajo de andamios.",
    resumenSenior: "Los vendavales y rachas huracanadas superan los 80-100 km/h y convierten objetos sueltos en proyectiles. Aprenderás a asegurar la vivienda antes de la alerta y a identificar las zonas de caída en la vía pública.",
    reglasOro: [
      "En casa: retira macetas, sillas y objetos de balcones y ventanas, y cierra bien puertas y persianas.",
      "En la calle: aléjate de parques con árboles, cornisas, muros viejos, andamios, grúas y vallas publicitarias.",
      "Cuidado al abrir o cerrar puertas de casa o del coche: una racha fuerte puede pillar los dedos."
    ],
    mochila: {
      instruccionJunior: "Elige las 4 acciones u objetos correctos cuando hay alerta por viento muy fuerte.",
      instruccionSenior: "Selecciona los 5 elementos y medidas de autoprotección ante un temporal de viento.",
      items: [
        { id: "macetas_dentro", icono: "🪴", nombre: "Meter dentro las macetas del balcón", correcto: true, nivel: "ambos", explicacion: "Evita que el viento las tire a la acera y hieran a alguien que pase." },
        { id: "toldo", icono: "⛺", nombre: "Recoger los toldos y asegurar persianas", correcto: true, nivel: "ambos", explicacion: "Un toldo extendido con vendaval hace efecto vela y puede arrancarse de la fachada." },
        { id: "gafas_viento", icono: "🥽", nombre: "Gafas para proteger los ojos del polvo", correcto: true, nivel: "10-12", explicacion: "Si tienes que salir por urgencia, el viento levanta arena, polvo y pequeñas ramas." },
        { id: "linterna_viento", icono: "🔦", nombre: "Linterna y móvil cargado", correcto: true, nivel: "ambos", explicacion: "Las ramas caídas sobre el tendido eléctrico suelen provocar cortes de luz." },
        { id: "calzado_firme", icono: "👟", nombre: "Calzado cerrado y ropa ajustada", correcto: true, nivel: "ambos", explicacion: "Evita tropezar con ramas u objetos arrastrados por el viento." },
        { id: "paraguas_viento", icono: "☔", nombre: "Abrir un paraguas grande en medio del vendaval", correcto: false, nivel: "ambos", explicacion: "El viento lo rompe al instante, te quita visibilidad y puede empujarte." },
        { id: "parque_arboles", icono: "🌳", nombre: "Ir a jugar debajo de los árboles grandes del parque", correcto: false, nivel: "ambos", explicacion: "¡Peligro! Con rachas fuertes, las ramas grandes o árboles enteros pueden partirse y caer." },
        { id: "bici_viento", icono: "🚲", nombre: "Salir en bicicleta o patinete con alerta naranja de viento", correcto: false, nivel: "10-12", explicacion: "Una racha lateral puede empujarte hacia la calzada o derribarte." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Quitar las macetas y juguetes de la ventana o terraza y recoger el toldo", textoSenior: "Retirar macetas, jaulas y objetos de alféizares y balcones, recoger toldos y cerrar bien ventanas y contraventanas", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Quedarse dentro de casa o del cole y no pasar por parques con árboles ni obras", textoSenior: "Evitar salir a la calle; si estás fuera, alejarte de árboles, muros, andamios y vallas, y no acercarte a espigones o paseos marítimos", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Mirar si hay ramas o tejas sueltas antes de salir al patio y no tocar cables en el suelo", textoSenior: "Revisar que no hayan quedado tejas, cristales o ramas a punto de caer y avisar al 112 si hay árboles o cables cortando la calle", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Comprobar que las puertas y ventanas cierran sin dar portazos por corrientes", textoSenior: "Cerrar ventanas interiores y exteriores para anular las corrientes de aire que pueden reventar cristales o dar portazos", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "No ir en bici ni patinete cuando hay vendaval", textoSenior: "Si se viaja en coche, reducir la velocidad y sujetar fuerte el volante al adelantar camiones o salir de túneles por el efecto pantalla", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Comprobar que las macetas y el toldo siguen bien sujetos antes de volver a usarlos", textoSenior: "Inspeccionar el estado de antenas, canalones y pérgolas del patio o terraza antes de salir bajo ellos", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Quitar todas las macetas de la barandilla del balcón antes de que empiece el viento fuerte.", textoSenior: "Asegurar o meter en casa todos los objetos sueltos de balcones y terrazas cuando se anuncia alerta por viento.", esSeguro: true, explicacion: "¡Muy bien! Así proteges a todas las personas que caminan por la calle." },
      { id: "r2", textoJunior: "Cruzar por un parque lleno de árboles altos mientras sopla un viento huracanado.", textoSenior: "Atajar por dentro de un parque arbolado o junto a un edificio en obras con andamios durante el temporal.", esSeguro: false, explicacion: "¡Mucho peligro! Los parques suelen cerrarse con alerta de viento porque las ramas pesadas pueden caer sin previo aviso." },
      { id: "r3", textoJunior: "Sujetar con cuidado las puertas al abrirlas o cerrarlas cuando hay corriente de viento.", textoSenior: "Cerrar las ventanas para evitar corrientes internas que den portazos y sujetar fuerte la puerta del coche al abrir.", esSeguro: true, explicacion: "¡Exacto! Las corrientes de viento cierran las puertas de golpe con muchísima fuerza." },
      { id: "r4", textoJunior: "Ir al paseo marítimo a ver cómo las olas gigantes saltan por encima del muro con el viento.", textoSenior: "Acercarse al borde de un espigón o acantilado durante un temporal marítimo de viento.", esSeguro: false, explicacion: "¡Jamás! Un golpe de mar junto al viento puede arrastrarte al agua en un segundo." }
    ],
    simulador112: {
      situacion: "Desde la ventana ves que una racha de viento muy fuerte ha derribado un árbol grande en mitad de tu calle, aplastando una farola y bloqueando el paso.",
      pasos: [
        {
          pregunta: "1. ¿Qué haces al ver caer el árbol y la farola?",
          opciones: [
            { texto: "Quedarme dentro de casa lejos del cristal de la ventana y observar si hay alguien herido cerca.", correcta: true, feedback: "¡Correcto! Estás seguro dentro y compruebas visualmente la situación para informar al 112." },
            { texto: "Salir corriendo a la calle bajo el vendaval para intentar mover las ramas y tocar la farola.", correcta: false, feedback: "¡Peligro! Pueden caer más ramas o tejas y la farola rota tiene cables eléctricos." },
            { texto: "Sacar medio cuerpo por la ventana abierta con el viento soplando.", correcta: false, feedback: "Con rachas fuertes, las ventanas deben permanecer cerradas." }
          ]
        },
        {
          pregunta: "2. Llamas al 112. ¿Qué información das al operador?",
          opciones: [
            { texto: "En la Avenida de la Paz número 22 el viento ha tirado un árbol grande sobre una farola cortando toda la calle; no se ve a nadie atrapado debajo.", correcta: true, feedback: "¡Perfecto! Así saben que deben enviar a los bomberos para cortar el árbol y a los técnicos eléctricos por la farola." },
            { texto: "Hace muchísimo viento hoy y se mueven las hojas.", correcta: false, feedback: "Debes avisar del obstáculo concreto y peligroso: el árbol y la farola caídos." },
            { texto: "Decir que se ha caído un árbol sin decir en qué calle ni ciudad estás.", correcta: false, feedback: "Sin la dirección exacta los bomberos no sabrán a dónde acudir." }
          ]
        },
        {
          pregunta: "3. Mientras llegan los bomberos, ves desde tu balcón cerrado que un peatón se acerca hacia la farola caída. ¿Qué es lo más prudente?",
          opciones: [
            { texto: "Avisarle en voz alta desde un lugar seguro para que no pise cerca de la farola ni pase bajo el árbol.", correcta: true, feedback: "¡Genial! Alertar a otros sin ponerte en riesgo evita accidentes." },
            { texto: "Tirarle una maceta desde el balcón para llamar su atención.", correcta: false, feedback: "¡Jamás! Nunca lances objetos por la ventana." },
            { texto: "Bajar a sentarte debajo de las ramas rotas del árbol.", correcta: false, feedback: "Las ramas partidas pueden terminar de desprenderse en cualquier momento." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Identificar la responsabilidad propia en casa: asegurar balcones, macetas y toldos para no dañar a los demás.",
        "Reconocer las zonas de exclusión en la calle durante alertas de viento (parques, árboles, andamios, cornisas, espigones).",
        "Conocer el código de colores de alertas meteorológicas (Amarillo, Naranja, Rojo)."
      ],
      actividadAula: "Inspectores de Balcones y Patios: Hacer una lista de control (checklist) de qué cosas del patio del colegio o de la terraza de casa podrían volar con un viento de 90 km/h.",
      consejoFamilia: "Cuando AEMET active aviso amarillo o naranja por viento, haced con los niños la 'ronda del balcón' para recoger toldos, asegurar persianas y retirar macetas de las barandillas."
    }
  },

  maremotos: {
    id: "maremotos",
    bloque: "Agua y Costa",
    nombre: "Maremotos, Tsunamis y Fenómenos Costeros",
    nombreCorto: "Maremotos y Costa",
    icono: "🌊",
    colorPrimario: "#1d4ed8",
    colorSecundario: "#dbeafe",
    lema: "¡Si tiembla la tierra en la playa o el mar se retira de golpe, corre a una zona alta!",
    resumenJunior: "En la costa, las olas gigantes o las corrientes pueden ser peligrosas. Tu misión es respetar las banderas de la playa y subir a una colina o piso alto si el mar se retira de repente.",
    resumenSenior: "Los riesgos costeros incluyen temporales marítimos, corrientes de resaca y tsunamis (olas generadas por un terremoto submarino). Conocerás las señales naturales de alerta y la evacuación vertical o hacia tierras altas.",
    reglasOro: [
      "Respeta siempre la bandera de la playa: con bandera ROJA está prohibido bañarse o meterse en la orilla.",
      "Señal de Tsunami: si estás en la costa y sientes un terremoto fuerte o ves que el mar retrocede de golpe dejando la arena seca, sube inmediatamente a un monte o piso alto (3ª planta o más).",
      "Si una corriente de resaca te arrastra mar adentro: no nades contra ella; mantén la calma, flota y nada en paralelo a la playa."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 elementos seguros para la costa y evacuación ante alerta marítima.",
      instruccionSenior: "Selecciona los 5 elementos clave de seguridad costera y evacuación por maremoto.",
      items: [
        { id: "chaleco", icono: "🦺", nombre: "Chaleco salvavidas homologado (en deportes náuticos)", correcto: true, nivel: "ambos", explicacion: "Mantiene a flote de verdad, a diferencia de los hinchables de juguete." },
        { id: "silbato_mar", icono: "📢", nombre: "Silbato y linterna impermeable", correcto: true, nivel: "ambos", explicacion: "Ayuda a que los equipos de salvamento te localicen rápido." },
        { id: "calzado_mar", icono: "👟", nombre: "Zapatillas cerradas a mano para evacuar rápido", correcto: true, nivel: "ambos", explicacion: "Para subir rápido a zonas altas sin cortarse los pies." },
        { id: "agua_sol", icono: "💧", nombre: "Agua potable y radio/móvil con alertas activadas", correcto: true, nivel: "ambos", explicacion: "Recibe los avisos de la Red de Alerta Nacional (ES-Alert) en el móvil." },
        { id: "mapa_evac", icono: "🗺️", nombre: "Conocer los carteles azules de 'Ruta de Evacuación Tsunami'", correcto: true, nivel: "10-12", explicacion: "Muchas playas españolas (Cádiz, Huelva, Mediterráneo, Canarias) tienen señales azules que indican la cuesta hacia zona alta." },
        { id: "flotador_viento", icono: "🦄", nombre: "Colchoneta hinchable con viento o bandera roja", correcto: false, nivel: "ambos", explicacion: "¡Peligro! El viento y las corrientes arrastran las colchonetas mar adentro en segundos." },
        { id: "espigon", icono: "🪨", nombre: "Caminar por rocas y espigones con olas grandes", correcto: false, nivel: "ambos", explicacion: "Una ola inesperada ('golpe de mar') te tira contra las rocas y te arrastra." },
        { id: "recoger_peces", icono: "🐚", nombre: "Entrar donde el mar se ha retirado de golpe a recoger conchas", correcto: false, nivel: "10-12", explicacion: "¡Peligro mortal! Cuando el mar se retira de repente, significa que una gran ola (tsunami) va a llegar en minutos." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Mirar el color de la bandera al llegar a la playa y fijarse en las cuestas para subir", textoSenior: "Comprobar la bandera de la playa, localizar el puesto de socorristas y conocer las rutas hacia zonas altas (+30 metros o edificios altos de hormigón)", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Si tiembla en la playa o el mar se retira, subir rápido a pie a un sitio alto", textoSenior: "Ante sismo en la costa, retirada súbita del mar o alerta oficial: evacuar a pie (sin coger el coche para no causar atascos) hacia terreno alto o la planta 3ª o superior de un edificio sólido", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Quedarse en la zona alta hasta que Protección Civil diga que ya no vienen más olas", textoSenior: "Permanecer en la zona alta: un tsunami es una serie de varias olas y la segunda o tercera ola puede llegar horas después y ser más grande que la primera", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Acordar un sitio alto de encuentro con tu familia si vais a la playa", textoSenior: "Identificar los carteles azules de 'Ruta de Evacuación por Tsunami' y fijar un punto de encuentro familiar en zona elevada", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Alejarse también de las orillas de ríos que desembocan en el mar", textoSenior: "Alejarse de rías, desembocaduras de ríos y puertos deportivos, ya que las olas de maremoto penetran con mucha fuerza por los cauces", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "No beber agua de grifos cercanos a la playa hasta que digan que es potable", textoSenior: "No entrar en edificios inundados por el mar sin revisión técnica ni consumir agua hasta que se confirme su potabilidad", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Bañarse en la playa cuando ondea la bandera roja porque 'yo sé nadar muy bien'.", textoSenior: "Meterse al agua hasta la cintura con bandera roja o temporal costero.", esSeguro: false, explicacion: "¡Prohibido! Con bandera roja las corrientes de resaca arrastran incluso a nadadores expertos." },
      { id: "r2", textoJunior: "Subir corriendo a una colina o edificio alto si estás en la playa y el agua del mar desaparece hacia atrás de repente.", textoSenior: "Evacuar inmediatamente a pie hacia terreno elevado si sientes un terremoto en la playa o ves retirarse el mar de forma anormal.", esSeguro: true, explicacion: "¡Esa señal salva miles de vidas! El retroceso repentino del mar es el aviso natural de un maremoto." },
      { id: "r3", textoJunior: "Bajar de nuevo a la playa en cuanto pasa la primera ola grande de un maremoto.", textoSenior: "Regresar a la costa inmediatamente después de que se retire la primera ola de un tsunami.", esSeguro: false, explicacion: "¡Nunca bajes! Un tsunami no es una sola ola, sino un tren de olas que puede durar horas. Solo se baja cuando Protección Civil da el fin de la alerta." },
      { id: "r4", textoJunior: "Hacer señales con los brazos al socorrista y nadar hacia un lado (paralelo a la arena) si notas que una corriente te lleva hacia dentro.", textoSenior: "Ante una corriente de resaca: conservar fuerzas flotando, nadar paralelo a la orilla para salir del canal de corriente y pedir ayuda levantando un brazo.", esSeguro: true, explicacion: "¡Exacto! Nadar de frente contra la corriente te agota; nadando hacia un lado sales de ella fácilmente." }
    ],
    simulador112: {
      situacion: "Hay temporal costero con bandera roja y grandes olas. Desde el paseo marítimo ves que una ola ha golpeado a una persona que se acercó al espigón y ha caído al agua.",
      pasos: [
        {
          pregunta: "1. ¿Qué es lo que NUNCA debes hacer y qué haces en su lugar?",
          opciones: [
            { texto: "NO tirarme yo al mar bravo; llamar inmediatamente al 112 (y avisar al socorrista), no perderla de vista y lanzarle un salvavidas o algo que flote desde lugar seguro.", correcta: true, feedback: "¡Regla de oro del rescate acuático! Si te tiras con temporal habrá dos víctimas; pide ayuda profesional y lanza un objeto flotante sin bajar a las rocas." },
            { texto: "Tirarme yo solo de cabeza a las olas gigantes entre las rocas.", correcta: false, feedback: "¡Peligro extremo! Con bandera roja y rocas el mar te arrastraría a ti también." },
            { texto: "Dejar de mirar al agua y marcharme sin avisar a nadie.", correcta: false, feedback: "Mantener el contacto visual con la persona en el agua es clave para guiar al helicóptero o lancha de Salvamento." }
          ]
        },
        {
          pregunta: "2. Hablas con el 112. ¿Qué datos das para activar a Salvamento Marítimo y socorristas?",
          opciones: [
            { texto: "En la Playa de la Concha, junto al espigón norte frente al restaurante El Faro, una ola ha arrastrado a una persona al agua; la vemos flotando a unos 20 metros.", correcta: true, feedback: "¡Perfecto! Nombre de la playa, zona exacta del espigón y que seguís viéndola en el agua." },
            { texto: "Hay una persona en el mar en alguna playa.", correcta: false, feedback: "Debes indicar el nombre exacto de la playa y el punto de referencia en la orilla." },
            { texto: "Las olas están muy altas hoy.", correcta: false, feedback: "Informa de inmediato de que hay una persona en el agua que necesita rescate urgente." }
          ]
        },
        {
          pregunta: "3. Mientras llega la lancha o helicóptero de rescate, ¿cuál es tu misión en el paseo seguro?",
          opciones: [
            { texto: "Seguir señalando con el brazo hacia donde está la persona en el agua para que los rescatadores la localicen al instante al llegar.", correcta: true, feedback: "¡Brillante! Desde el barco o el aire es difícil ver una cabeza entre las olas; tu brazo señalando desde el paseo les guía directo." },
            { texto: "Bajar a la punta resbaladiza del espigón donde rompen las olas.", correcta: false, feedback: "No bajes nunca a las rocas mojadas donde ya ha saltado una ola." },
            { texto: "Colgar y apagar el móvil.", correcta: false, feedback: "Mantén el teléfono operativo por si el equipo de rescate te pide la posición actualizada." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Respetar el código de banderas de playa (Verde, Amarilla, Roja) y el peligro de espigones y corrientes de resaca.",
        "Reconocer las 3 señales de alerta de tsunami: terremoto en la costa, retirada repentina del mar o rugido fuerte del océano / aviso ES-Alert.",
        "Aprender la regla de oro ante alguien arrastrado por el agua: Avisar (112), Lanzar algo que flote y No lanzarse con mala mar."
      ],
      actividadAula: "El Juego de las Banderas y la Corriente: Dibujar en la pizarra cómo funciona una corriente de resaca (como una cinta transportadora hacia dentro) y trazar con tiza el camino lateral para salir de ella sin cansarse.",
      consejoFamilia: "En vacaciones en la costa, fijaos siempre al llegar a la playa en dónde está la torre del socorrista, el color de la bandera y qué edificio alto o cuesta usaríais en caso de emergencia."
    }
  },

  quimico: {
    id: "quimico",
    bloque: "Tecnológicos y Cotidianos",
    nombre: "Riesgo Químico y Nube Tóxica (Confinamiento)",
    nombreCorto: "Riesgo Químico",
    icono: "☣️",
    colorPrimario: "#ca8a04",
    colorSecundario: "#fef08a",
    lema: "¡Con alerta química o nube tóxica: entra en el edificio más cercano, cierra todo y confínate!",
    resumenJunior: "Si hay un escape de gas o humo químico de una fábrica o camión, la regla es al revés que en un incendio: NO hay que salir a la calle, sino entrar rápido bajo techo y cerrar todas las ventanas.",
    resumenSenior: "En accidentes industriales o de mercancías peligrosas con nube tóxica, la medida de autoprotección principal es el CONFINAMIENTO: refugiarase en el edificio más cercano, apagar la ventilación/aire acondicionado y sellar puertas y ventanas.",
    reglasOro: [
      "CONFINAMIENTO: Entra en casa, el colegio o el edificio más cercano y NO salgas a la calle.",
      "Cierra puertas, ventanas y persianas, apaga el aire acondicionado y sella rendijas con cinta o trapos húmedos.",
      "Los padres NO deben ir a buscar a los niños al colegio durante la alerta: en el colegio ya están confinados y seguros."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 elementos que sirven para protegerte en un confinamiento por nube química.",
      instruccionSenior: "Selecciona los 5 elementos clave para sellar una habitación e informarse durante una alerta química.",
      items: [
        { id: "cinta", icono: "テープ", nombre: "Cinta adhesiva ancha (precinto)", correcto: true, nivel: "ambos", explicacion: "Sirve para sellar las uniones de las ventanas y que no entre el aire exterior." },
        { id: "trapos_hum", icono: "🧣", nombre: "Toallas y paños húmedos", correcto: true, nivel: "ambos", explicacion: "Para tapar la rendija inferior de las puertas y respirar a través de ellos si fuera necesario." },
        { id: "radio_q", icono: "📻", nombre: "Radio o móvil con alertas ES-Alert", correcto: true, nivel: "ambos", explicacion: "Permite saber cuándo Protección Civil declara el fin del confinamiento." },
        { id: "agua_q", icono: "💧", nombre: "Botellas de agua cerradas en la habitación", correcto: true, nivel: "ambos", explicacion: "Para hidratarse mientras dura el confinamiento en la habitación interior." },
        { id: "habitacion_int", icono: "🚪", nombre: "Elegir la habitación más interior y con menos ventanas", correcto: true, nivel: "10-12", explicacion: "Cuantas menos ventanas al exterior tenga la sala, más fácil es aislarla." },
        { id: "aire_acond", icono: "❄️", nombre: "Encender el aire acondicionado o ventilación de la calle", correcto: false, nivel: "ambos", explicacion: "¡Prohibido! Los sistemas de ventilación meten dentro el aire contaminado de la calle." },
        { id: "ir_colegio", icono: "🚗", nombre: "Salir en coche a la calle para recoger a los niños del cole", correcto: false, nivel: "ambos", explicacion: "¡Error grave! En la calle y en el coche te expones a la nube tóxica; el colegio aplica su propio protocolo de confinamiento." },
        { id: "curiosear", icono: "👀", nombre: "Abrir el balcón para oler o ver la nube de humo", correcto: false, nivel: "10-12", explicacion: "Abrir una ventana rompe el aislamiento de toda la vivienda." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Reconocer el sonido de las sirenas de aviso químico o el pitido de alerta en el móvil", textoSenior: "Conocer las sirenas de aviso químico de tu municipio, el sistema ES-Alert y tener cinta adhesiva y radio en casa", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Entrar al edificio más cercano, cerrar ventanas y persianas y apagar el aire acondicionado", textoSenior: "Confinarse de inmediato, cerrar ventanas/persianas, desconectar climatización, sellar rendijas con cinta o paños húmedos y no salir al exterior", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Cuando Protección Civil avise de que ya ha pasado el peligro, abrir todas las ventanas para ventilar", textoSenior: "Solo tras el aviso oficial de fin de emergencia, abrir ventanas para renovar el aire interior de la vivienda", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Saber cuál es la habitación más interior y con menos ventanas de casa", textoSenior: "Identificar de antemano la habitación más interior y elevada de la vivienda (evitando sótanos porque muchos gases pesan más que el aire)", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "No encender fuego ni chispas y cerrar la llave del gas durante el confinamiento", textoSenior: "Cortar la llave del gas, evitar encender llamas o interruptores si se percibe olor extraño y seguir la radio oficial", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Lavar bien con agua cualquier juguete o fruta que hubiera quedado fuera", textoSenior: "Seguir las instrucciones sanitarias sobre lavado de superficies exteriores y no tocar residuos depositados en la calle", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Salir corriendo a la calle cuando suena la sirena de nube química.", textoSenior: "Evacuar a la calle por tu cuenta cuando Protección Civil ordena confinamiento por accidente químico.", esSeguro: false, explicacion: "¡Al revés! En un incendio dentro de casa se sale; pero en una nube química el peligro está en el aire de la calle, así que hay que ENTRAR y encerrarse." },
      { id: "r2", textoJunior: "Cerrar todas las ventanas, bajar persianas y poner un trapo húmedo bajo la puerta.", textoSenior: "Apagar campanas extractoras y aire acondicionado, cerrar ventanas y sellar rendijas con cinta o paños húmedos.", esSeguro: true, explicacion: "¡Perfecto! Así conviertes tu habitación o tu aula en una burbuja segura." },
      { id: "r3", textoJunior: "Si estás en el colegio, quedarte dentro de clase con tu profesor sin que tus padres salgan a la calle a buscarte.", textoSenior: "Permanecer confinados dentro del centro escolar hasta el fin de la alerta sin que las familias acudan en coche.", esSeguro: true, explicacion: "¡Regla vital! Los colegios son lugares seguros con plan de confinamiento; ir a buscarlos expone a padres e hijos en la calle." },
      { id: "r4", textoJunior: "Llamar al 112 solo para preguntar '¿por qué suena la sirena de la calle?'.", textoSenior: "Llamar masivamente al 112 para pedir información general cuando suena una alerta química.", esSeguro: false, explicacion: "No llames al 112 para pedir información general porque bloqueas la línea para los heridos; escucha la radio o lee el mensaje ES-Alert del móvil." }
    ],
    simulador112: {
      situacion: "Vais en autobús o paseando y veis que un camión cisterna con paneles naranjas de 'Mercancías Peligrosas' ha sufrido un accidente y empieza a salir un vapor extraño del depósito.",
      pasos: [
        {
          pregunta: "1. ¿Qué es lo primero que hacéis al ver el camión con paneles naranjas echando vapor?",
          opciones: [
            { texto: "Alejarnos enseguida en dirección contraria al viento (cuesta arriba si es posible) y entrar en el edificio más cercano cerrando puertas y ventanas.", correcta: true, feedback: "¡Excelente! Nunca camines hacia donde el viento lleva el vapor; aléjate y confínate bajo techo." },
            { texto: "Acercarnos a tocar el líquido o respirar el vapor para ver a qué huele.", correcta: false, feedback: "¡Peligro extremo! Las sustancias de un camión cisterna pueden ser tóxicas o corrosivas." },
            { texto: "Quedarnos parados justo al lado del camión haciendo fotos.", correcta: false, feedback: "Aléjate siempre al menos varios cientos de metros y entra en un edificio." }
          ]
        },
        {
          pregunta: "2. Ya a salvo dentro de un edificio lejano, llamas al 112. ¿Qué dato de un camión de mercancías peligrosas es súper útil si lo has visto de lejos?",
          opciones: [
            { texto: "Decir el kilómetro o calle exacta, que tiene un panel rectangular naranja y que sale vapor del depósito.", correcta: true, feedback: "¡Genial! El panel naranja indica a los bomberos que es una mercancía peligrosa para que lleven trajes especiales." },
            { texto: "Acercarme pegado al camión con humo para leer los números pequeños.", correcta: false, feedback: "¡Nunca te acerques! Solo di que lleva panel naranja desde lejos." },
            { texto: "No decir que es un camión cisterna.", correcta: false, feedback: "Saber que es una cisterna con fuga cambia por completo los equipos que envía el 112." }
          ]
        },
        {
          pregunta: "3. Suena en los móviles el pitido de ES-Alert ordenando confinamiento en todo el barrio. ¿Qué hacéis dentro del edificio?",
          opciones: [
            { texto: "Cerrar ventanas y rejillas, apagar el aire acondicionado y esperar dentro hasta que llegue el mensaje oficial de fin de alerta.", correcta: true, feedback: "¡Misión superada! Has aplicado el protocolo de confinamiento químico a la perfección." },
            { texto: "Salir a la calle corriendo hasta nuestra casa que está a 2 kilómetros.", correcta: false, feedback: "Caminar 2 km al aire libre durante una nube química es muy peligroso; quédate en el edificio donde estás." },
            { texto: "Bajar al garaje subterráneo sin ventilación.", correcta: false, feedback: "Muchos gases pesan más que el aire y bajan a los sótanos; mejor una habitación interior en planta superior." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Comprender la diferencia fundamental entre EVACUAR (salir, como en un incendio interior) y CONFINARSE (entrar y cerrar todo, como en una nube química).",
        "Identificar los paneles naranjas de transporte de mercancías peligrosas y las alertas ES-Alert.",
        "Transmitir a las familias por qué NO deben acudir al colegio durante una alerta química."
      ],
      actividadAula: "Operación Burbuja Segura: Practicar en 1 minuto cómo el aula se convierte en una cápsula hermética (cerrar ventanas, bajar persianas, apagar ventilación y colocar una toalla en la base de la puerta).",
      consejoFamilia: "Recordad la regla de oro escolar: en caso de alerta por nube química en horario lectivo, vuestros hijos están seguros y protegidos dentro del aula; no cojáis el coche ni vayáis al centro hasta que Protección Civil levante el confinamiento."
    }
  },

  apagon: {
    id: "apagon",
    bloque: "Tecnológicos y Cotidianos",
    nombre: "Gran Apagón Eléctrico y Emergencias en Casa",
    nombreCorto: "Gran Apagón",
    icono: "🔦",
    colorPrimario: "#475569",
    colorSecundario: "#f1f5f9",
    lema: "¡Con linterna, radio a pilas y la nevera cerrada, un apagón se supera con calma!",
    resumenJunior: "Si se va la luz en toda la ciudad, dejan de funcionar las lámparas, la tele, los semáforos y los ascensores. Tu misión es usar linternas (nunca velas), no abrir la nevera y ahorrar batería del móvil.",
    resumenSenior: "Un apagón prolongado afecta a la iluminación, ascensores, semáforos, bombas de agua y redes móviles. Aprenderás a gestionar la energía de reserva, conservar los alimentos del frigorífico y desenchufar aparatos sensibles.",
    reglasOro: [
      "Usa siempre linternas a pilas o recargables; NUNCA dejes velas encendidas (causan muchos incendios durante los apagones).",
      "Mantén la puerta de la nevera y del congelador CERRADA para que el frío aguante muchas horas.",
      "Deja solo una lámpara encendida para saber cuándo vuelve la luz y desenchufa ordenadores, teles y estufas."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 objetos más útiles para tener en casa en el 'Kit del Apagón'.",
      instruccionSenior: "Selecciona los 5 elementos esenciales de preparación familiar ante un corte de suministro eléctrico.",
      items: [
        { id: "linterna_led", icono: "🔦", nombre: "Linterna LED y pilas de repuesto", correcto: true, nivel: "ambos", explicacion: "Ilumina durante muchísimas horas sin ningún riesgo de incendio." },
        { id: "radio_pilas", icono: "📻", nombre: "Radio portátil a pilas o dinamo", correcto: true, nivel: "ambos", explicacion: "Si caen las antenas de internet y telefonía, la radio FM/AM sigue funcionando para dar avisos." },
        { id: "powerbank", icono: "🔋", nombre: "Batería externa (Powerbank) cargada", correcto: true, nivel: "ambos", explicacion: "Mantiene con carga el teléfono para emergencias." },
        { id: "comida_fria", icono: "🥫", nombre: "Comida que no necesite cocinarse y agua", correcto: true, nivel: "ambos", explicacion: "Si tienes cocina eléctrica (vitrocerámica/inducción) o se corta la bomba de agua del edificio, podrás comer y beber sin problema." },
        { id: "efectivo", icono: "💶", nombre: "Un poco de dinero en efectivo (para adultos)", correcto: true, nivel: "10-12", explicacion: "Sin electricidad no funcionan los datáfonos de tarjeta ni los cajeros automáticos." },
        { id: "velas_apagon", icono: "🕯️", nombre: "Poner velas encendidas cerca de las cortinas o la cama", correcto: false, nivel: "ambos", explicacion: "¡Peligro! Es la primera causa de incendio en viviendas durante los apagones." },
        { id: "abrir_nevera", icono: "🧊", nombre: "Abrir y cerrar la nevera cada 5 minutos para mirar dentro", correcto: false, nivel: "ambos", explicacion: "Si no la abres, una nevera conserva el frío unas 4-6 horas y un congelador lleno hasta 24-48 horas." },
        { id: "ascensor_apagon", icono: "🛗", nombre: "Usar el ascensor cuando la luz parpadea", correcto: false, nivel: "10-12", explicacion: "Puedes quedarte encerrado entre dos plantas si vuelve a cortarse el suministro." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Guardar siempre la linterna en un sitio fijo que todos conozcan a oscuras", textoSenior: "Tener una linterna en un lugar fijo accesible a oscuras, baterías cargadas y saber si el corte es solo de tu casa (cuadro eléctrico) o de toda la calle", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Usar linterna, no abrir la nevera y desenchufar la tele y el ordenador", textoSenior: "Desenchufar electrodomésticos para evitar averías por subidas de tensión, dejar una sola luz encendida de aviso, ahorrar batería del móvil (modo ahorro) y no abrir el frigorífico", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Esperar unos minutos cuando vuelva la luz antes de enchufar los aparatos", textoSenior: "Al volver la luz, esperar 10 minutos a que se estabilice la red antes de volver a enchufar aparatos y comprobar el estado de los alimentos refrigerados", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Tener comida que no necesite cocinarse y botellas de agua en la despensa", textoSenior: "Contar en casa con conservas listas para comer, agua potable (las bombas de presión de los edificios paran sin luz) y saber abrir la puerta del garaje en modo manual", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Si hay que cruzar la calle, mirar el doble porque los semáforos no funcionan", textoSenior: "No usar nunca ascensores ni velas encendidas y extremar la precaución en cruces peatonales por el apagado de semáforos", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Volver a cargar las linternas y baterías externas para la próxima vez", textoSenior: "Poner en hora los equipos necesarios y recargar al 100% las baterías externas y linternas utilizadas durante el corte", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Tener siempre una linterna en el mismo cajón para poder encontrarla aunque sea de noche y no haya luz.", textoSenior: "Asignar un punto fijo en casa para las linternas y pilas que toda la familia conozca de memoria.", esSeguro: true, explicacion: "¡Exacto! Si cada día está en un sitio distinto, a oscuras no podrás encontrarla sin tropezar." },
      { id: "r2", textoJunior: "Dejar la plancha o la estufa eléctrica encendida cuando se va la luz y marcharse de casa.", textoSenior: "Olvidar encendidos hornos, vitrocerámicas o estufas eléctricas durante un apagón.", esSeguro: false, explicacion: "¡Muy peligroso! Cuando la luz vuelva de repente, se calentarán solos sin que te des cuenta y pueden provocar un incendio." },
      { id: "r3", textoJunior: "Cruzar la calle con muchísimo cuidado porque en un apagón los semáforos están apagados.", textoSenior: "Extremar la precaución en los pasos de peatones porque los semáforos y farolas dejan de funcionar.", esSeguro: true, explicacion: "¡Muy bien pensado! Sin semáforos hay que mirar el doble y hacerse ver con ropa clara o la linterna." },
      { id: "r4", textoJunior: "Ponerse a ver vídeos y jugar en el móvil hasta gastar toda la batería durante el apagón.", textoSenior: "Gastar la batería del teléfono móvil jugando o haciendo videollamadas durante un corte eléctrico general.", esSeguro: false, explicacion: "El móvil debe ponerse en 'modo ahorro de batería' y reservarse por si hay que comunicarse o recibir avisos de emergencia." }
    ],
    simulador112: {
      situacion: "Se ha ido la luz en todo el edificio y al pasar por el rellano escuchas a una vecina que se ha quedado encerrada dentro del ascensor parado entre dos pisos.",
      pasos: [
        {
          pregunta: "1. ¿Qué es lo primero que haces al oír a la vecina dentro del ascensor parado?",
          opciones: [
            { texto: "Hablarle desde fuera para tranquilizarla, decirle que no intente forzar la puerta para salir por el hueco y avisar a un adulto/112.", correcta: true, feedback: "¡Importantísimo! El mayor peligro en un ascensor parado es intentar salir por un hueco a medias por si el ascensor se mueve; dentro está segura esperando asistencia." },
            { texto: "Intentar abrir las puertas del ascensor haciendo palanca con un hierro.", correcta: false, feedback: "¡Peligro! Forzar las puertas de un ascensor entre plantas es muy peligroso." },
            { texto: "Asustarla diciéndole que no hay aire dentro.", correcta: false, feedback: "Mito falso: los ascensores tienen rejillas de ventilación y el aire nunca se acaba; lo mejor es darle calma." }
          ]
        },
        {
          pregunta: "2. El botón de alarma del ascensor no funciona por el apagón y la vecina es diabética y se marea. Llamas al 112. ¿Qué dices?",
          opciones: [
            { texto: "En Calle Luna 7 hay un apagón y una vecina diabética se ha quedado encerrada en el ascensor entre el 1º y el 2º piso y empieza a marearse.", correcta: true, feedback: "¡Perfecto! Cuando hay una persona vulnerable o con un problema de salud encerrada en un ascensor, los bomberos dan prioridad inmediata." },
            { texto: "Se me ha apagado la tele de casa, ¿cuándo vuelve la luz?", correcta: false, feedback: "Para averías eléctricas normales se llama a la compañía eléctrica, NO al 112. Al 112 se llama porque hay una persona atrapada con riesgo de salud." },
            { texto: "Decir que hay alguien en un ascensor y colgar sin dar la calle.", correcta: false, feedback: "Siempre indica calle, número y entre qué plantas está parado el ascensor." }
          ]
        },
        {
          pregunta: "3. Mientras llegan los bomberos con tu linterna en el rellano, ¿qué haces?",
          opciones: [
            { texto: "Acompañar a la vecina hablándole con calma a través de la puerta e iluminar la entrada y la escalera cuando entren los bomberos.", correcta: true, feedback: "¡Eres un auténtico Agente 112! Dar tranquilidad y facilitar el paso a los bomberos a oscuras es de gran ayuda." },
            { texto: "Irte y dejar el portal cerrado con llave para que los bomberos no puedan entrar.", correcta: false, feedback: "Facilitar el acceso al portal (sobre todo si el portero automático no funciona sin luz) es clave." },
            { texto: "Encender papeles en la escalera para dar luz.", correcta: false, feedback: "Jamás uses fuego para iluminar; usa siempre tu linterna." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Distinguir cuándo un apagón es una avería doméstica y cuándo requiere llamar al 112 (solo si hay personas atrapadas, electrodependientes o emergencias).",
        "Aprender las reglas de oro del apagón: linterna sí / velas no, nevera cerrada, electrodomésticos desenchufados y ahorro de batería.",
        "Saber actuar con calma si alguien queda encerrado en un ascensor (nunca forzar puertas, mantener la calma)."
      ],
      actividadAula: "Misión Ahorro de Energía y Luz: Crear una ficha recortable para colgar en el cuadro eléctrico de casa con el dibujo de dónde se guarda la linterna familiar.",
      consejoFamilia: "Comprobad hoy mismo dónde tenéis las linternas en casa: ¿podrían vuestros hijos encontrarlas completamente a oscuras sin usar una silla? Guardad una linterna y una radio a pilas en un cajón bajo y accesible."
    }
  },

  aludes: {
    id: "aludes",
    bloque: "Tierra y Montaña",
    nombre: "Desprendimientos de Tierra, Rocas y Aludes",
    nombreCorto: "Desprendimientos y Aludes",
    icono: "⛰️",
    colorPrimario: "#57534e",
    colorSecundario: "#f5f5f4",
    lema: "¡Atento a las señales de la ladera y aléjate de barrancos y muros agrietados!",
    resumenJunior: "En las montañas o laderas con mucha lluvia o nieve, la tierra, las piedras o la nieve pueden resbalar cuesta abajo. Tu misión es ir siempre por caminos marcados y avisar si ves caer piedras.",
    resumenSenior: "Los deslizamientos de tierra, desprendimientos de rocas y aludes de nieve ocurren sobre todo tras lluvias intensas, deshielos o sismos. Aprenderás a detectar signos previos en el terreno y a evacuar lateralmente fuera de la trayectoria.",
    reglasOro: [
      "Tras lluvias muy fuertes o deshielo, aléjate de acantilados, taludes de tierra, laderas empinadas y barrancos.",
      "Señales de aviso: árboles o postes inclinados, grietas nuevas en el suelo/muros o pequeños desprendimientos de piedras.",
      "Si ves bajar un desprendimiento o alud: aléjate corriendo hacia los LADOS (hacia terreno más alto), nunca cuesta abajo delante de él."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 objetos para ir seguro por la montaña.",
      instruccionSenior: "Selecciona los 5 elementos de seguridad en rutas de montaña y zonas con riesgo de desprendimiento.",
      items: [
        { id: "silbato_m", icono: "📢", nombre: "Silbato de emergencia en la mochila", correcto: true, nivel: "ambos", explicacion: "El sonido del silbato llega muy lejos en la montaña para pedir rescate." },
        { id: "movil_loc", icono: "📱", nombre: "Móvil con batería llena y ubicación GPS", correcto: true, nivel: "ambos", explicacion: "Permite enviar la posición exacta al 112 en zonas de montaña." },
        { id: "ropa_vistosa", icono: "🦺", nombre: "Ropa de abrigo de colores muy vivos (naranja, rojo, amarillo)", correcto: true, nivel: "ambos", explicacion: "Los colores llamativos permiten que los helicópteros de rescate te vean desde el aire entre las rocas o la nieve." },
        { id: "botas_mont", icono: "🥾", nombre: "Botas de montaña bien atadas", correcto: true, nivel: "ambos", explicacion: "Sujetan el tobillo en caminos con piedras sueltas." },
        { id: "casco_m", icono: "⛑️", nombre: "Casco protector (en cañones, cuevas o zonas de roca)", correcto: true, nivel: "10-12", explicacion: "Protege la cabeza ante la caída de pequeñas piedras de los taludes." },
        { id: "tirar_piedras", icono: "🪨", nombre: "Lanzar piedras desde arriba de un camino por diversión", correcto: false, nivel: "ambos", explicacion: "¡Prohibido y muy peligroso! Una piedra lanzada desde arriba coge velocidad, arrastra a otras y puede golpear a senderistas abajo." },
        { id: "fuera_pista", icono: "⛷️", nombre: "Salirse de las pistas marcadas cuando hay aviso de aludes", correcto: false, nivel: "10-12", explicacion: "Las zonas cerradas por peligro de aludes tienen nieve inestable que se desprende al pisarla." },
        { id: "auriculares", icono: "🎧", nombre: "Caminar con auriculares a todo volumen bajo un acantilado", correcto: false, nivel: "ambos", explicacion: "Te impide escuchar el crujido o el ruido de piedras cayendo que avisa de un desprendimiento." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Consultar el tiempo y no ir a barrancos o acantilados si ha llovido mucho", textoSenior: "Consultar el boletín de peligro de aludes (escala del 1 al 5) o alertas de lluvia, y respetar los caminos cortados por riesgo de desprendimiento", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Si caen piedras o barro de una ladera, apartarse rápido hacia un lado seguro", textoSenior: "Si escuchas un estruendo o ves deslizarse tierra/nieve: correr en dirección perpendicular (hacia un lateral elevado), nunca en la misma dirección de bajada", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "No acercarse a la zona donde han caído las rocas y avisar al 112", textoSenior: "No pisar la zona del derrumbe (suele ser inestable y pueden caer más rocas después) y avisar al 112 si corta una carretera o sendero", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Avisar siempre en casa de qué camino vais a hacer por la montaña", textoSenior: "Planificar la ruta informando a familiares del itinerario y horario previsto, y observar si hay grietas nuevas o árboles inclinados en las laderas", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Si no puedes apartarte, protegerte la cabeza con los brazos y la mochila", textoSenior: "Al cruzar un tramo expuesto en montaña, hacerlo de uno en uno dejando distancia entre compañeros y vigilando la ladera superior", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Fijarse en el número de kilómetro de la carretera para decírselo al 112", textoSenior: "Señalizar con seguridad si el desprendimiento invade una vía y facilitar el punto kilométrico exacto a los equipos de emergencia", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Tirar piedras rodando por una cuesta de la montaña donde puede haber gente caminando más abajo.", textoSenior: "Empujar rocas por una ladera o caminar por el borde de un acantilado de tierra húmeda.", esSeguro: false, explicacion: "¡Nunca! Tirar piedras puede provocar un desprendimiento mayor y herir a personas o animales que van por el sendero inferior." },
      { id: "r2", textoJunior: "Salir hacia los lados hacia una zona firme si ves que empieza a bajar barro o piedras por un barranco.", textoSenior: "Escapar en dirección lateral (hacia los lados de la ladera) si se inicia un deslizamiento de tierra o alud.", esSeguro: true, explicacion: "¡Exacto! Un alud o deslizamiento baja más rápido que cualquier persona corriendo cuesta abajo; la salida siempre es hacia un lado." },
      { id: "r3", textoJunior: "Pasar por debajo de una valla que dice 'Camino cortado por desprendimientos'.", textoSenior: "Saltarse una cinta de Protección Civil que cierra un sendero o playa bajo un acantilado.", esSeguro: false, explicacion: "Si un sendero o cala está cerrado por desprendimientos, es porque los geólogos han detectado grietas que pueden caer en cualquier momento." },
      { id: "r4", textoJunior: "Llevar ropa de colores llamativos cuando vas de excursión a la montaña.", textoSenior: "Vestir prendas de colores vivos en la montaña y decir siempre a alguien qué ruta vas a hacer y a qué hora volverás.", esSeguro: true, explicacion: "¡Regla de oro del montañero! Facilitas la localización visual y la alerta temprana." }
    ],
    simulador112: {
      situacion: "Tras varios días de lluvia, vas en el coche con tu familia por una carretera de montaña y veis que acaban de caer grandes rocas y tierra cortando los dos carriles un poco más adelante.",
      pasos: [
        {
          pregunta: "1. ¿Qué debe hacer el conductor inmediatamente al ver el desprendimiento en la carretera?",
          opciones: [
            { texto: "Frenar con cuidado lejos de las rocas, poner las luces de emergencia y retroceder o apartarse a un tramo donde no haya ladera encima.", correcta: true, feedback: "¡Muy bien! Detrás de un primer desprendimiento suelen caer más rocas de la misma pared." },
            { texto: "Parar el coche justo debajo de la pared de donde siguen cayendo piedras.", correcta: false, feedback: "¡Peligro! Nunca te detengas justo debajo del talud inestable." },
            { texto: "Bajar a los niños a jugar encima del montón de tierra recién caída.", correcta: false, feedback: "El terreno recién desprendido es muy inestable y peligroso." }
          ]
        },
        {
          pregunta: "2. Llamáis al 112. ¿Qué información es fundamental dar?",
          opciones: [
            { texto: "En la carretera M-601, cerca del kilómetro 12, ha habido un desprendimiento de rocas que corta toda la calzada; no vemos ningún coche atrapado.", correcta: true, feedback: "¡Perfecto! El número de carretera y el hito kilométrico (las señales blancas con el km) permiten mandar a mantenimiento y Guardia Civil al punto exacto." },
            { texto: "Hay piedras en el monte.", correcta: false, feedback: "Hay que especificar que cortan una carretera y dar el punto kilométrico o referencia." },
            { texto: "No llamar porque como nosotros podemos dar la vuelta ya no importa.", correcta: false, feedback: "Avisar al 112 evita que otro vehículo que venga detrás de noche o tras una curva choque contra las rocas." }
          ]
        },
        {
          pregunta: "3. ¿En qué cartel de la carretera debes fijarte para decirle al 112 dónde estás exactamente?",
          opciones: [
            { texto: "En los carteles kilométricos del borde de la carretera (que indican el nombre de la vía, ej. A-1 / N-340, y el kilómetro).", correcta: true, feedback: "¡Truco maestro! Fijarse en el cartel del kilómetro es la mejor forma de dar tu posición en cualquier carretera." },
            { texto: "En el color de las nubes.", correcta: false, feedback: "Las nubes no sirven para localizar un punto en el mapa." },
            { texto: "En la matrícula de nuestro propio coche.", correcta: false, feedback: "Lo que necesitan saber es la carretera y el kilómetro." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Aprender a leer las señales de la naturaleza en laderas y acantilados (grietas, caída de gravilla, árboles inclinados, lluvias previas).",
        "Conocer la dirección de escape lateral ante un deslizamiento o alud y las reglas de seguridad en la montaña.",
        "Saber identificar el punto kilométrico en una carretera para avisar al 112."
      ],
      actividadAula: "Lectores de Carretera y Montaña: Enseñar cómo son los hitos kilométricos de las carreteras españolas y el código de 5 niveles del Boletín de Peligro de Aludes.",
      consejoFamilia: "Cuando vayáis de excursión al campo o a calas con acantilados, respetad siempre las vallas de peligro de desprendimiento y enseñad a los niños a fijarse en el nombre del sendero y los puntos kilométricos."
    }
  },

  nuclear: {
    id: "nuclear",
    bloque: "Tecnológicos y Cotidianos",
    nombre: "Riesgo Nuclear y Radiológico",
    nombreCorto: "Riesgo Radiológico",
    icono: "☢️",
    colorPrimario: "#7c3aed",
    colorSecundario: "#f3e8ff",
    lema: "¡Ante alerta radiológica: confínate bajo techo, cierra ventilación y escucha a Protección Civil!",
    resumenJunior: "Las centrales nucleares tienen muchísimas medidas de seguridad. Si alguna vez suena una alerta en su zona, tu misión es entrar en casa o en el cole, cerrar ventanas y seguir las instrucciones oficiales.",
    resumenSenior: "Los Planes de Emergencia Nuclear (PEN) protegen las zonas cercanas a centrales mediante tres medidas clave: el confinamiento en edificios cerrados, el control de agua/alimentos y las pautas sanitarias oficiales.",
    reglasOro: [
      "CONFINAMIENTO: Entra en el edificio más cercano, cierra puertas y ventanas y apaga el aire acondicionado.",
      "Consume únicamente agua embotellada y alimentos guardados en envases cerrados o dentro de la nevera.",
      "Sigue exclusivamente las instrucciones de Protección Civil por radio o ES-Alert; nunca tomes medicamentos por tu cuenta sin indicación sanitaria."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 objetos necesarios para el kit de confinamiento radiológico.",
      instruccionSenior: "Selecciona los 5 elementos del kit de preparación en zonas de plan de emergencia nuclear.",
      items: [
        { id: "radio_n", icono: "📻", nombre: "Radio a pilas y móvil con cargador", correcto: true, nivel: "ambos", explicacion: "Imprescindible para recibir los comunicados oficiales del Consejo de Seguridad Nuclear y Protección Civil." },
        { id: "agua_emb", icono: "💧", nombre: "Agua embotellada precintada", correcto: true, nivel: "ambos", explicacion: "Garantiza agua totalmente aislada del exterior." },
        { id: "conservas", icono: "🥫", nombre: "Alimentos en lata o envases cerrados", correcto: true, nivel: "ambos", explicacion: "Los alimentos envasados están protegidos de cualquier partícula exterior." },
        { id: "cinta_n", icono: "テープ", nombre: "Cinta adhesiva y paños para sellar", correcto: true, nivel: "ambos", explicacion: "Impide la entrada de polvo o aire exterior por las rendijas." },
        { id: "ropa_cambio", icono: "👕", nombre: "Bolsa de plástico y muda de ropa limpia", correcto: true, nivel: "10-12", explicacion: "Si vienes de la calle, quitarte la ropa exterior, guardarla en una bolsa cerrada y ducharte elimina el 90% del polvo externo." },
        { id: "verdura_huerto", icono: "🥬", nombre: "Comer fruta o verdura recién cogida del jardín exterior", correcto: false, nivel: "ambos", explicacion: "Los alimentos al aire libre pueden tener polvo depositado y no deben consumirse." },
        { id: "ventilador_ext", icono: "🌀", nombre: "Encender el extractor que mete aire de la calle", correcto: false, nivel: "ambos", explicacion: "Toda entrada de aire exterior debe permanecer apagada y cerrada." },
        { id: "pastillas_sin_orden", icono: "💊", nombre: "Tomar pastillas de farmacia sin que lo ordene Sanidad", correcto: false, nivel: "10-12", explicacion: "El yodo u otros fármacos solo se toman si las autoridades sanitarias lo indican expresamente." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Conocer el plan del colegio y tener agua embotellada y radio en casa", textoSenior: "Conocer las zonas del Plan de Emergencia Nuclear de tu comarca y mantener un kit con agua embotellada, conservas y radio", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Entrar en casa o el colegio, cerrar todas las ventanas y no salir al patio", textoSenior: "Confinarse en habitaciones interiores o sótanos cerrados, apagar ventilación exterior y consumir solo agua y comida envasada", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Salir solo cuando avise Protección Civil por la radio o el móvil", textoSenior: "Seguir el orden de las estaciones de clasificación o evacuación si las autoridades lo organizan y esperar el aviso oficial de fin de alerta", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Guardar cinta adhesiva y bolsas de plástico junto al kit de emergencia", textoSenior: "Tener preparadas bolsas de plástico cerrables y cinta aislante para sellar rejillas de ventilación si se activa la alerta", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Meter también a las mascotas dentro de casa para que no estén en el jardín", textoSenior: "Resguardar a los animales domésticos en el interior y evitar tocar objetos que hayan estado expuestos al aire libre", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Si venías de la calle, guardar la ropa en una bolsa y ducharte con agua y jabón", textoSenior: "Realizar la descontaminación preventiva (guardar la ropa exterior en bolsa cerrada y ducharse) y atender las pautas de control alimentario", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Quedarse dentro del colegio con las ventanas bien cerradas si suena una alerta radiológica.", textoSenior: "Permanecer confinados en el edificio escolar sin que las familias salgan a la carretera a recoger a los alumnos.", esSeguro: true, explicacion: "¡Correcto! Los muros de los edificios protegen y dejan las carreteras libres para los equipos de emergencia." },
      { id: "r2", textoJunior: "Salir a jugar al jardín y beber agua de una fuente de la calle durante la alerta.", textoSenior: "Consumir agua de pozos abiertos o verduras del huerto exterior durante la alerta.", esSeguro: false, explicacion: "¡No! Durante la alerta solo se consume agua embotellada y comida guardada bajo techo." },
      { id: "r3", textoJunior: "Si estabas en la calle cuando sonó el aviso: entrar en casa, cambiarte de ropa y darte una ducha con agua y jabón.", textoSenior: "Guardar la ropa exterior en una bolsa cerrada y ducharse con agua y jabón suave al entrar de la calle.", esSeguro: true, explicacion: "¡Muy bien! Así eliminas cualquier partícula de polvo que pudiera haber quedado en la ropa o el pelo." },
      { id: "r4", textoJunior: "Hacer caso a un mensaje de un desconocido en internet en vez de a Protección Civil.", textoSenior: "Difundir bulos por redes sociales sin comprobar el canal oficial del 112 y el CSN.", esSeguro: false, explicacion: "En emergencias tecnológicas solo debes seguir los avisos oficiales de Protección Civil (ES-Alert y radio nacional)." }
    ],
    simulador112: {
      situacion: "Recibís en el móvil familiar un mensaje de prueba o alerta de Protección Civil indicando confinamiento preventivo en vuestro municipio.",
      pasos: [
        {
          pregunta: "1. ¿Qué es lo primero que hacéis en casa al leer el mensaje de alerta?",
          opciones: [
            { texto: "Entrar todos, cerrar ventanas y persianas, apagar el aire acondicionado y sintonizar la radio o canal oficial de Protección Civil.", correcta: true, feedback: "¡Perfecto! El confinamiento inmediato y escuchar la fuente oficial es la regla número uno." },
            { texto: "Llamar 20 veces al 112 aunque nadie esté herido solo para preguntar qué pasa.", correcta: false, feedback: "Recuerda: el 112 debe quedar libre para urgencias reales; la información general se da por radio y ES-Alert." },
            { texto: "Salir a pasear por el campo para mirar de lejos.", correcta: false, feedback: "Ante una alerta de confinamiento nunca se debe salir al exterior." }
          ]
        },
        {
          pregunta: "2. Vuestro vecino mayor vive solo en el piso de al lado, no tiene móvil y está en su balcón sin haberse enterado del aviso. ¿Qué hacéis?",
          opciones: [
            { texto: "Avisarle desde nuestra puerta o por el telefonillo interior para que entre en su casa, cierre sus ventanas y ponga la radio.", correcta: true, feedback: "¡Gran gesto ciudadano! Ayudar a que los vecinos vulnerables se enteren del confinamiento sin salir a la calle es ejemplar." },
            { texto: "No decirle nada y dejarle toda la tarde en el balcón abierto.", correcta: false, feedback: "Avisar a mayores que no usan móvil ayuda a proteger a toda la comunidad." },
            { texto: "Bajar a la calle a dar un paseo con él.", correcta: false, feedback: "Ambos debéis permanecer dentro del edificio con todo cerrado." }
          ]
        },
        {
          pregunta: "3. ¿Cuándo debéis llamar al 112 durante el confinamiento?",
          opciones: [
            { texto: "Únicamente si tenemos una urgencia médica, un incendio o una persona en peligro que necesita rescate o asistencia sanitaria.", correcta: true, feedback: "¡Exacto! Así los operadores del 112 pueden atender al segundo a quien de verdad tiene una urgencia vital." },
            { texto: "Para preguntar si mañana habrá colegio.", correcta: false, feedback: "Los avisos sobre clases los comunica Educación por sus canales oficiales, no el teléfono 112." },
            { texto: "Para gastar una broma.", correcta: false, feedback: "Las bromas al 112 están prohibidas porque ocupan una línea que puede estar salvando una vida." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Conocer el protocolo de confinamiento y protección respiratoria/cutánea.",
        "Entender la higiene de descontaminación básica (cambio de ropa en bolsa cerrada y ducha) y la seguridad alimentaria (agua embotellada y envases cerrados).",
        "Diferenciar entre canales de información general (ES-Alert, radio) y el teléfono de urgencias vitales (112)."
      ],
      actividadAula: "Detectives contra los Bulos: Analizar cómo es un mensaje oficial ES-Alert de Protección Civil frente a un rumor falso de internet.",
      consejoFamilia: "Mantened siempre en la despensa un lote rotatorio de agua embotellada y conservas para 72 horas, junto con una radio a pilas."
    }
  },

  sanitaria: {
    id: "sanitaria",
    bloque: "Tecnológicos y Cotidianos",
    nombre: "Primeros Auxilios, Emergencias Sanitarias y Aglomeraciones",
    nombreCorto: "Primeros Auxilios y Multitudes",
    icono: "🚑",
    colorPrimario: "#dc2626",
    colorSecundario: "#fee2e2",
    lema: "¡Proteger, Avisar al 112 y Socorrer (Conducta PAS) manteniendo siempre la calma!",
    resumenJunior: "En casa, en el cole o en una fiesta con mucha gente puede ocurrir un accidente o alguien puede ponerse malito. Tu misión es aprender la regla P-A-S (Proteger, Avisar al 112 y Socorrer) y no perderte en multitudes.",
    resumenSenior: "La Conducta PAS (Proteger, Avisar, Socorrer) es la base de todos los primeros auxilios. Aprenderás a comprobar si alguien responde y respira, la Posición Lateral de Seguridad, cómo actuar en atragantamientos y la seguridad en grandes eventos.",
    reglasOro: [
      "Conducta PAS: 1º PROTEGER el lugar para no hacerte daño tú, 2º AVISAR al 112 (y a un adulto) y 3º SOCORRER sin mover bruscamente al herido.",
      "En fiestas, conciertos o aglomeraciones: acuerda siempre un punto de encuentro con tu familia, lleva el teléfono de tus padres apuntado y localiza las salidas de emergencia.",
      "Si alguien se desmaya pero respira: ponlo de lado (Posición Lateral de Seguridad); si se atraganta y puede toser, anímale a toser."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 objetos de tu botiquín y seguridad para excursiones o grandes eventos.",
      instruccionSenior: "Selecciona los 5 elementos esenciales de primeros auxilios y autoprotección en eventos multitudinarios.",
      items: [
        { id: "pulsera_tel", icono: "🏷️", nombre: "Pulsera o tarjeta con el teléfono de tus padres", correcto: true, nivel: "ambos", explicacion: "Si te despistas en una fiesta o multitud, Policía o Protección Civil podrán llamar a tu familia al instante." },
        { id: "gasas", icono: "🩹", nombre: "Gasas estériles, tiritas y suero fisiológico", correcto: true, nivel: "ambos", explicacion: "Lo básico y más seguro para limpiar y cubrir heridas leves." },
        { id: "guantes_bot", icono: "🧤", nombre: "Guantes desechables en el botiquín", correcto: true, nivel: "10-12", explicacion: "Para curar una herida con higiene sin infectarla." },
        { id: "agua_jabon", icono: "🧼", nombre: "Agua limpia y jabón neutro", correcto: true, nivel: "ambos", explicacion: "Las heridas y las quemaduras leves se lavan primero con agua limpia." },
        { id: "hielo_envuelto", icono: "🧊", nombre: "Bolsa de frío cubierta con un paño (para chichones o golpes)", correcto: true, nivel: "ambos", explicacion: "Baja la inflamación de un golpe sin quemar la piel con el hielo directo." },
        { id: "pasta_dientes", icono: "🪥", nombre: "Echar pasta de dientes o mantequilla en una quemadura", correcto: false, nivel: "ambos", explicacion: "¡Mito peligroso! Nunca eches pasta de dientes en una quemadura: atrapa el calor e infecta la piel. Usa solo agua fresca corriendo durante 10-15 minutos." },
        { id: "algodon_herida", icono: "☁️", nombre: "Meter algodón deshilachado dentro de una herida abierta", correcto: false, nivel: "10-12", explicacion: "Las hebras de algodón se quedan pegadas dentro de la herida; usa siempre gasas estériles." },
        { id: "empujar_multitud", icono: "🏃", nombre: "Correr y empujar en una escalera llena de gente", correcto: false, nivel: "ambos", explicacion: "En aglomeraciones hay que caminar con calma, fijarse en las salidas de emergencia y nunca empujar." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Aprenderte el número 112, la dirección de tu casa y el punto de encuentro en fiestas", textoSenior: "Memorizar tu dirección, llevar contacto de emergencia, localizar las salidas (carteles verdes) al entrar a un recinto y conocer la Conducta PAS", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Si hay un accidente: 1º Protegerte tú, 2º Avisar a un adulto y al 112, 3º Acompañar al herido", textoSenior: "Aplicar P-A-S: asegurar la zona, comprobar consciencia y respiración, llamar al 112 con el manos libres y seguir las indicaciones del médico coordinador", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Abrir la puerta a los sanitarios del 112 y contarles qué ha pasado con calma", textoSenior: "Facilitar la entrada a la ambulancia, informar de alergias o medicinas si se conocen y dejar espacio para que trabajen los sanitarios", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Revisar con tus padres que el botiquín de casa tenga gasas, tiritas y suero", textoSenior: "Mantener el botiquín doméstico actualizado (gasas estériles, suero fisiológico, antiséptico) y fuera del alcance de niños muy pequeños", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Si alguien no se despierta pero sí respira, ponerlo de lado con cuidado", textoSenior: "Colocar en Posición Lateral de Seguridad (PLS) a quien está inconsciente pero respira con normalidad, sin darle nada de beber", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Reponer las gasas o tiritas que se hayan usado del botiquín", textoSenior: "Anotar la hora a la que empezaron los síntomas para informarla al equipo médico y reponer el material usado del botiquín", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Poner la mano o el dedo quemado debajo del chorro de agua fresca del grifo durante un buen rato.", textoSenior: "Enfriar una quemadura leve únicamente con agua fresca del grifo durante 10-15 minutos sin reventar ampollas ni aplicar cremas caseras.", esSeguro: true, explicacion: "¡Perfecto! El agua fresca detiene el calor en la piel y alivia el dolor de forma segura." },
      { id: "r2", textoJunior: "Echar la cabeza muy hacia atrás si a un amigo le sangra la nariz.", textoSenior: "Inclinar la cabeza hacia atrás cuando alguien tiene una hemorragia nasal.", esSeguro: false, explicacion: "¡Mito muy común! Si echas la cabeza hacia atrás, la sangre baja hacia la garganta y el estómago. Hay que inclinar la cabeza ligeramente hacia DELANTE y presionar la parte blanda de la nariz 5-10 minutos." },
      { id: "r3", textoJunior: "Quitarle de golpe el casco a un motorista o ciclista que acaba de caerse fuerte al suelo.", textoSenior: "Intentar quitar el casco o levantar de pie a alguien que ha sufrido un golpe fuerte en la cabeza o la espalda.", esSeguro: false, explicacion: "¡Nunca! Mover el cuello o quitar el casco sin formación puede dañar la médula espinal; espera a los sanitarios del 112." },
      { id: "r4", textoJunior: "Si te pierdes de tus padres en una feria llena de gente, quedarte quieto en un sitio visible y pedir ayuda a un policía, guardia de seguridad o voluntario de Protección Civil (chaleco naranja/amarillo).", textoSenior: "En una aglomeración: localizar los carteles verdes de Salida de Emergencia y acudir a personal uniformado (Policía, Protección Civil, Cruz Roja) si te separas del grupo.", esSeguro: true, explicacion: "¡Regla de oro! Ellos tienen emisoras conectadas para localizar a tu familia en minutos." }
    ],
    simulador112: {
      situacion: "Estás en casa solo con tu abuela, de repente se cae al suelo en el pasillo, la llamas por su nombre moviéndole suave el hombro pero no abre los ojos, aunque ves que su pecho sí sube y baja (respira).",
      pasos: [
        {
          pregunta: "1. Según la regla P-A-S (Proteger, Avisar, Socorrer), ¿qué haces primero?",
          opciones: [
            { texto: "Comprobar que no hay nada peligroso alrededor (cristales, cables), ver que sí respira y marcar inmediatamente el 112 poniendo el altavoz (manos libres).", correcta: true, feedback: "¡Brillante! Poner el altavoz del teléfono te permite tener las dos manos libres mientras el médico del 112 te guía paso a paso." },
            { texto: "Darle un vaso de agua por la boca aunque esté inconsciente.", correcta: false, feedback: "¡Peligro! Jamás des de beber ni comer a una persona inconsciente porque se atragantaría." },
            { texto: "Intentar levantarla a peso tú solo por las escaleras.", correcta: false, feedback: "No debes levantarla; puedes caerte con ella o empeorar una lesión." }
          ]
        },
        {
          pregunta: "2. El médico del 112 te escucha por el altavoz. ¿Qué le dices?",
          opciones: [
            { texto: "Soy su nieto, estamos en Calle Jardín 3, piso 1ºB; mi abuela se ha caído al suelo, no responde cuando la llamo pero sí respira.", correcta: true, feedback: "¡Información de 10! Saber que 'no responde pero sí respira' es el dato más importante para los médicos del 112." },
            { texto: "Mi abuela tiene sueño.", correcta: false, feedback: "Dile claramente que se ha desmayado / no responde a tu voz." },
            { texto: "Decir 'venid a casa de mi abuela' y colgar el teléfono.", correcta: false, feedback: "No cuelgues; el médico del 112 te va a enseñar cómo colocarla mientras llega la ambulancia." }
          ]
        },
        {
          pregunta: "3. Como tu abuela respira pero está inconsciente y no se ha dado un golpe fuerte de altura, el médico del 112 te pide ponerla de lado y abrir la puerta de casa. ¿Por qué se pone de lado (Posición Lateral de Seguridad)?",
          opciones: [
            { texto: "Para que no se atragante con su propia lengua o si vomita, y quitar el pestillo de la puerta de entrada para que entren los sanitarios.", correcta: true, feedback: "¡Eres un héroe de los Primeros Auxilios! Colocarla de lado protege su respiración y quitar el pestillo permite entrar al equipo médico." },
            { texto: "Para ponerle tres almohadas encima de la cara.", correcta: false, feedback: "La cara y la nariz deben quedar totalmente despejadas para respirar bien." },
            { texto: "Para echar la llave por dentro y que nadie pueda abrir la puerta.", correcta: false, feedback: "Recuerda destrabar siempre el cerrojo de la puerta para que los sanitarios puedan entrar." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Interiorizar el orden P-A-S (Proteger, Avisar, Socorrer) ante cualquier accidente escolar o doméstico.",
        "Desmontar falsos mitos de primeros auxilios (cabeza hacia delante en sangrado nasal, solo agua en quemaduras, no quitar el casco).",
        "Aprender a colocar en Posición Lateral de Seguridad (PLS) y a usar el altavoz del móvil al hablar con el 112."
      ],
      actividadAula: "Taller P-A-S y Posición Lateral: Por parejas sobre colchonetas de educación física, practicar cómo doblar una rodilla y el brazo contrario para girar suavemente a un compañero hacia un lado (Posición Lateral de Seguridad).",
      consejoFamilia: "Pegad en la puerta de la nevera una tarjeta visible con la dirección exacta de casa (calle, número, piso, código postal y municipio) y los teléfonos de contacto: con los nervios de una emergencia real, a los niños (y a los adultos) les ayuda leer la dirección escrita."
    }
  },

  costeros: {
    id: "costeros",
    bloque: "Agua y Costa",
    nombre: "Fenómenos Costeros, Oleaje y Corrientes de Resaca",
    nombreCorto: "Fenómenos Costeros",
    icono: "🏖️",
    colorPrimario: "#0369a1",
    colorSecundario: "#e0f2fe",
    lema: "¡Con bandera roja o temporal, lejos de las rocas y del espigón!",
    resumenJunior: "El mar tiene mucha fuerza cuando hay viento y olas grandes. Tu misión es mirar siempre la bandera del socorrista, no acercarte a las rocas con oleaje y saber salir de las corrientes.",
    resumenSenior: "Los temporales marítimos (golpes de mar) y las corrientes de retorno o resaca causan la mayoría de rescates en la costa. Aprenderás a identificar canales de corriente en la orilla y a respetar los cierres de paseos marítimos.",
    reglasOro: [
      "Con bandera ROJA está prohibido bañarse; con AMARILLA solo hasta la cintura y con mucha precaución.",
      "Durante un temporal costero, no te acerques a espigones, acantilados ni paseos marítimos donde rompan las olas.",
      "Si una corriente te lleva hacia dentro: flota, no nades contra ella y nada en paralelo a la arena."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 elementos seguros para un día en la costa.",
      instruccionSenior: "Selecciona los 5 elementos y hábitos de autoprotección frente a riesgos en la costa.",
      items: [
        { id: "chaleco_c", icono: "🦺", nombre: "Chaleco salvavidas homologado", correcto: true, nivel: "ambos", explicacion: "Imprescindible en embarcaciones, kayaks o tablas de paddle surf." },
        { id: "crema_agua", icono: "🧴", nombre: "Agua fresca, gorra y protección solar", correcto: true, nivel: "ambos", explicacion: "Previene la insolación y deshidratación en la playa." },
        { id: "bandera_verde", icono: "🟢", nombre: "Bañarse en playas vigiladas por socorristas", correcto: true, nivel: "ambos", explicacion: "Las playas con puesto de socorrismo tienen vigilancia y rescate inmediato." },
        { id: "escarpines", icono: "👟", nombre: "Calzado acuático cerrado (escarpines)", correcto: true, nivel: "ambos", explicacion: "Evita resbalones y cortes con rocas o erizos." },
        { id: "boya_nat", icono: "🛟", nombre: "Boya naranja de visibilidad al nadar", correcto: true, nivel: "10-12", explicacion: "Permite que las embarcaciones te vean y te da un apoyo para flotar si te cansas." },
        { id: "selfie_olas", icono: "🤳", nombre: "Hacerse fotos en el borde del espigón con olas gigantes", correcto: false, nivel: "ambos", explicacion: "¡Peligro mortal! Los golpes de mar arrastran cada año a personas que se acercan a hacer fotos." },
        { id: "colchoneta_mar", icono: "🦩", nombre: "Usar hinchables grandes cuando sopla viento hacia el mar", correcto: false, nivel: "ambos", explicacion: "El viento de tierra empuja los flotadores mar adentro muy rápido." },
        { id: "saltar_rocas", icono: "🪨", nombre: "Tirarse de cabeza desde rocas sin saber la profundidad", correcto: false, nivel: "10-12", explicacion: "Hay rocas ocultas bajo el agua que provocan lesiones graves de cuello y cabeza." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Comprobar la bandera de la playa y dónde está el socorrista", textoSenior: "Consultar la predicción marítima de AEMET, localizar el puesto de socorristas y observar si hay canales de corriente (zonas sin espuma donde el agua tira hacia dentro)", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "No acercarse al paseo marítimo si hay alerta de olas grandes y nadar de lado si hay corriente", textoSenior: "Respetar los cordones policiales en paseos marítimos y, ante una corriente de resaca, nadar en paralelo a la orilla sin agotarse", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Avisar al socorrista o al 112 si ves a alguien en apuros sin tirarte tú", textoSenior: "Si alguien cae al mar con oleaje, llamar al 112, lanzar un elemento flotante y mantener contacto visual sin saltar al agua brava", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "No aparcar nunca el coche en paseos marítimos o espigones cuando avisan de temporal", textoSenior: "Retirar vehículos y embarcaciones pequeñas de zonas bajas de costa o espigones ante avisos por fenómenos costeros", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Bañarse siempre dentro de la zona de boyas amarillas", textoSenior: "Permanecer dentro del canal balizado con boyas amarillas y no usar colchonetas hinchables cuando sopla viento de tierra", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "No caminar descalzo por la arena si el temporal ha arrastrado maderas o cristales", textoSenior: "Evitar acercarse a acantilados tras un temporal marítimo (la base puede haber quedado socavada) y avisar si hay daños en el paseo", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Acercarse a la barandilla del paseo marítimo cuando las olas saltan por encima.", textoSenior: "Saltarse la cinta de cierre del paseo marítimo para ver romper las olas del temporal.", esSeguro: false, explicacion: "¡Nunca! Una ola mayor ('ola vagabunda') puede saltar el muro y arrastrarte al mar." },
      { id: "r2", textoJunior: "Bañarse siempre cerca del puesto del socorrista cuando hay bandera verde.", textoSenior: "Nadar en zonas vigiladas, dentro de las boyas amarillas y respetando las indicaciones de megafonía.", esSeguro: true, explicacion: "¡Perfecto! Las boyas amarillas separan a los bañistas de los barcos y motos de agua." },
      { id: "r3", textoJunior: "Tirarse de cabeza desde un acantilado o espigón de piedras.", textoSenior: "Saltar al mar desde rocas, puentes o espigones donde no se ve el fondo.", esSeguro: false, explicacion: "¡Altísimo riesgo! La marea cambia la profundidad y un golpe contra el fondo causa lesiones medulares." },
      { id: "r4", textoJunior: "Si te cansas nadando, ponerte boca arriba haciendo la estrella para flotar y descansar.", textoSenior: "Flotar boca arriba manteniendo la calma y levantar un brazo para pedir ayuda al socorrista.", esSeguro: true, explicacion: "¡Exacto! Flotar boca arriba apenas gasta energía mientras llega el socorrista." }
    ],
    simulador112: {
      situacion: "Estás en la playa con viento fuerte y ves que el viento está alejando muy rápido mar adentro a un niño subido en una colchoneta hinchable.",
      pasos: [
        {
          pregunta: "1. ¿Qué haces en el primer segundo?",
          opciones: [
            { texto: "Avisar a gritos al socorrista de la playa, llamar al 112 y no quitar los ojos de la colchoneta.", correcta: true, feedback: "¡Muy bien! Los socorristas tienen motos de agua y lanchas para alcanzar una colchoneta empujada por el viento." },
            { texto: "Coger otra colchoneta hinchable para ir detrás.", correcta: false, feedback: "El viento os arrastraría a los dos mar adentro." },
            { texto: "Irte a tomar un helado sin decir nada.", correcta: false, feedback: "Cada minuto el viento aleja más la colchoneta; hay que avisar al instante." }
          ]
        },
        {
          pregunta: "2. Hablas con el 112 (Salvamento Marítimo). ¿Qué información das?",
          opciones: [
            { texto: "En la Playa de Levante, frente a la torre de socorrismo número 2, el viento lleva mar adentro a un niño en una colchoneta azul.", correcta: true, feedback: "¡Excelente! Playa, número de torre/referencia y color del hinchable." },
            { texto: "Hay un flotador en el agua.", correcta: false, feedback: "Diles en qué playa estáis y que hay un niño encima siendo arrastrado." },
            { texto: "Colgar sin decir el nombre de la playa.", correcta: false, feedback: "El nombre de la playa y el municipio son esenciales." }
          ]
        },
        {
          pregunta: "3. ¿Qué lección aprendemos sobre las colchonetas e hinchables en el mar?",
          opciones: [
            { texto: "Son juguetes para piscina, no salvavidas, y nunca deben usarse en el mar cuando hay viento o corriente.", correcta: true, feedback: "¡10 de 10! Los hinchables hacen efecto vela con el viento." },
            { texto: "Que sirven para cruzar el océano.", correcta: false, feedback: "En el mar solo son seguros los chalecos homologados." },
            { texto: "Que se usan mejor con bandera roja.", correcta: false, feedback: "Con bandera roja nadie debe entrar al agua." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Conocer los peligros específicos del litoral: golpes de mar en espigones, corrientes de resaca, saltos desde rocas y viento con hinchables.",
        "Aprender a identificar visualmente una corriente de resaca y cómo salir de ella nadando en paralelo.",
        "Aplicar la regla de no lanzarse al rescate en mar bravo y avisar a socorristas / 112."
      ],
      actividadAula: "Detectives de la Playa: Analizar una lámina de una playa para rodear en verde las conductas seguras (crema, bandera verde, boyas) y en rojo las imprudencias (saltar de rocas, colchoneta con viento, espigón con olas).",
      consejoFamilia: "Evitad comprar grandes colchonetas hinchables para playas abiertas con viento y enseñad a los niños a hacer 'la estrella' boca arriba para flotar sin cansarse."
    }
  },

  incendios_forestales: {
    id: "incendios_forestales",
    bloque: "Fuego",
    nombre: "Incendios Forestales y Protección del Monte",
    nombreCorto: "Incendios Forestales",
    icono: "🌲",
    colorPrimario: "#c2410c",
    colorSecundario: "#ffedd5",
    lema: "¡En el monte ni una chispa: si ves humo, llama al 112 y aléjate en contra del viento!",
    resumenJunior: "Nuestros bosques son el hogar de muchos animales y nos dan aire limpio. Tu misión es no tirar nunca basura ni cristales en el campo, avisar al 112 si ves una columna de humo y no ir nunca cuesta arriba si hay fuego.",
    resumenSenior: "El 90% de los incendios forestales se pueden evitar. Aprenderás por qué el fuego sube rapidísimo por las laderas empujado por el viento y cómo evacuar hacia zonas bajas, despejadas o ya quemadas.",
    reglasOro: [
      "Prevención total: jamás hagas fuego en el monte, ni tires cristales, petardos o basura.",
      "Si ves una columna de humo en el campo o monte, llama inmediatamente al 112 indicando desde dónde la ves.",
      "Si te sorprende un incendio en el campo: aléjate en dirección CONTRARIA al viento y baja hacia caminos o claros; NUNCA corras ladera arriba."
    ],
    mochila: {
      instruccionJunior: "Elige los 4 objetos de un excursionista responsable que cuida el bosque.",
      instruccionSenior: "Selecciona los 5 elementos clave para una salida segura al monte en época de riesgo de incendios.",
      items: [
        { id: "bolsa_basura", icono: "🗑️", nombre: "Bolsa para llevarte toda tu basura y botellas", correcto: true, nivel: "ambos", explicacion: "Dejar botellas de vidrio o latas en el campo es peligroso y ensucia el monte." },
        { id: "cantimplora_f", icono: "💧", nombre: "Agua abundante y comida fría (bocadillo)", correcto: true, nivel: "ambos", explicacion: "Llevar comida lista evita usar hornillos o hacer barbacoas en el bosque." },
        { id: "movil_112", icono: "📱", nombre: "Móvil con batería al 100% para avisar al 112", correcto: true, nivel: "ambos", explicacion: "Permite alertar al instante si divisas una columna de humo." },
        { id: "calzado_monte", icono: "🥾", nombre: "Botas de campo y ropa de algodón", correcto: true, nivel: "ambos", explicacion: "Protegen los pies y son más seguras que las telas sintéticas." },
        { id: "mapa_sendero", icono: "🗺️", nombre: "Conocer las pistas anchas y cortafuegos", correcto: true, nivel: "10-12", explicacion: "Saber por dónde volver a la carretera o a un claro sin vegetación es vital." },
        { id: "barbacoa_verano", icono: "🍖", nombre: "Encender una hoguera o barbacoa en el bosque", correcto: false, nivel: "ambos", explicacion: "¡Totalmente prohibido! Una sola chispa llevada por el viento quema miles de árboles." },
        { id: "petardos", icono: "🧨", nombre: "Tirar petardos o cohetes cerca del campo seco", correcto: false, nivel: "ambos", explicacion: "Los petardos prenden el pasto seco en un segundo." },
        { id: "aparcar_hierba", icono: "🚗", nombre: "Aparcar el coche encima de hierba seca alta", correcto: false, nivel: "10-12", explicacion: "El tubo de escape del coche está muy caliente y puede prender la hierba seca debajo." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Llevarse toda la basura del campo y no encender fuego ni tirar petardos", textoSenior: "Mantener limpias de maleza seca las parcelas de casas cercanas al monte y no usar fuego ni maquinaria que suelte chispas en verano", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Llamar al 112 al ver humo y alejarse hacia abajo y en contra del viento", textoSenior: "Avisar al 112, alejarse por los laterales en dirección opuesta al viento hacia zonas sin vegetación y nunca subir hacia la cima de la ladera", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "No pisar la zona quemada y respetar el trabajo de los agentes forestales", textoSenior: "No entrar en zonas recién quemadas (quedan rescoldos ocultos muy calientes y árboles inestables) y colaborar en la protección del suelo", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Aparcar el coche en zonas limpias sin hierba seca debajo y dejando libres los caminos", textoSenior: "Estacionar el vehículo en sentido de salida sobre terreno sin pasto seco y dejar siempre despejadas las pistas y barreras para los camiones de bomberos", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Si el humo llega a tu casa del campo, cerrar ventanas, persianas y llave del gas", textoSenior: "En urbanizaciones próximas al monte: cerrar ventanas, persianas y llave del gas, retirar objetos combustibles del jardín y seguir las órdenes de la Guardia Civil", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "Participar en actividades del colegio para cuidar y reforestar el bosque", textoSenior: "Respetar los acotados de regeneración forestal tras el incendio para que las nuevas plantas sujeten la tierra y eviten la erosión", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Correr cuesta arriba hacia la cima de la montaña si ves fuego más abajo.", textoSenior: "Intentar escapar de un incendio forestal corriendo ladera arriba por delante del fuego.", esSeguro: false, explicacion: "¡Peligro extremo! El fuego sube por las cuestas muchísimo más rápido que una persona corriendo porque el aire caliente sube y seca los árboles de arriba. Baja siempre y sal por los lados." },
      { id: "r2", textoJunior: "Llamar enseguida al 112 en cuanto ves salir una columna de humo en el monte, aunque parezca pequeña.", textoSenior: "Dar aviso inmediato al 112 al divisar humo en el bosque indicando el lugar y el color del humo.", esSeguro: true, explicacion: "¡Así se salvan los bosques! Avisar en los primeros minutos permite que los helicópteros y retenes lo apaguen antes de que crezca." },
      { id: "r3", textoJunior: "Esconderse dentro de un pozo o una cueva pequeña sin salida si hay un incendio en el bosque.", textoSenior: "Refugiarse en cuevas, barrancos estrechos o pozos durante un incendio forestal.", esSeguro: false, explicacion: "¡Nunca! El fuego consume el oxígeno y llena de humo las cuevas y barrancos estrechos." },
      { id: "r4", textoJunior: "Si vives en una urbanización cerca del campo, cerrar todas las ventanas, persianas y llave del gas si se acerca humo, y evacuar si lo pide la Guardia Civil.", textoSenior: "En viviendas cercanas al monte: retirar objetos combustibles del jardín, cerrar ventanas/persianas y evacuar de inmediato si las autoridades lo ordenan.", esSeguro: true, explicacion: "¡Correcto! Seguir las órdenes de evacuación o confinamiento de los bomberos y Guardia Civil es la regla número uno." }
    ],
    simulador112: {
      situacion: "Estás de excursión por un sendero con tu familia y a lo lejos, en la ladera de enfrente, veis empezar a subir una columna de humo blanco y gris entre los pinos.",
      pasos: [
        {
          pregunta: "1. ¿Qué hacéis nada más ver la columna de humo en el monte?",
          opciones: [
            { texto: "Pararnos en un lugar seguro y despejado, fijarnos bien de dónde sale el humo y llamar inmediatamente al 112.", correcta: true, feedback: "¡Brillante! En los incendios forestales, cada minuto que se gana al avisar vale oro." },
            { texto: "Pensar 'seguro que ya habrá llamado otra persona' y seguir andando sin avisar.", correcta: false, feedback: "Es preferible que el 112 reciba varios avisos a tiempo que ninguno." },
            { texto: "Caminar hacia el fuego para verlo de cerca.", correcta: false, feedback: "El viento puede cambiar de dirección de repente; aléjate siempre del humo." }
          ]
        },
        {
          pregunta: "2. El operador del 112 os pregunta qué veis. ¿Qué datos ayudan más a los bomberos forestales?",
          opciones: [
            { texto: "Estamos en el mirador de Valdelatas; vemos humo blanco saliendo del pinar de la ladera norte, cerca de la torre eléctrica, y el viento sopla hacia el este.", correcta: true, feedback: "¡Informe de auténtico Agente Forestal! Lugar desde donde miras, referencia del humo y hacia dónde sopla el viento." },
            { texto: "Hay humo en algún sitio del campo.", correcta: false, feedback: "Da siempre el nombre del camino, pueblo o punto de referencia más cercano." },
            { texto: "Colgar antes de que nos pregunten el municipio.", correcta: false, feedback: "En España hay muchos pueblos con nombres parecidos; di siempre el municipio y provincia." }
          ]
        },
        {
          pregunta: "3. Después de avisar al 112, ¿hacia dónde debéis regresar?",
          opciones: [
            { texto: "Volver por el camino ancho hacia el pueblo o carretera en dirección contraria al humo, dejando libre el paso para los camiones de bomberos.", correcta: true, feedback: "¡Perfecto! Salir a zona segura y no obstaculizar las pistas forestales para que pasen las autobombas." },
            { texto: "Aparcar nuestro coche en medio de la pista forestal bloqueando la barrera.", correcta: false, feedback: "¡Nunca bloquees las barreras ni pistas del monte! Por ahí entran los camiones de bomberos." },
            { texto: "Meternos entre los matorrales altos y secos.", correcta: false, feedback: "Camina siempre por zonas despejadas, caminos o carreteras." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Sensibilizar sobre la prevención de incendios forestales (basura cero, prohibición de fuego y petardos).",
        "Comprender el comportamiento básico del fuego en el monte (sube rápido por las laderas y avanza con el viento).",
        "Aprender a dar un aviso temprano de columna de humo al 112 y a dejar libres los accesos forestales."
      ],
      actividadAula: "Guardianes del Bosque: Crear insignias o decálogos de 'Excursionista 112' para llevar en las salidas escolares a la naturaleza.",
      consejoFamilia: "En excursiones al campo, aparcad siempre el coche en zonas habilitadas sin hierba seca debajo, en sentido de salida y dejando totalmente libres las cancelas y pistas para los camiones de bomberos."
    }
  },

  mercancias: {
    id: "mercancias",
    bloque: "Tecnológicos y Cotidianos",
    nombre: "Accidentes en Transporte de Mercancías Peligrosas",
    nombreCorto: "Mercancías Peligrosas",
    icono: "🚛",
    colorPrimario: "#d97706",
    colorSecundario: "#fef3c7",
    lema: "¡Si ves un camión o tren con panel naranja accidentado, aléjate a favor del viento y llama al 112!",
    resumenJunior: "Algunos camiones y trenes llevan líquidos o gases especiales y tienen un cartel rectangular naranja. Si sufren un accidente, tu misión es alejarte muchísimo sin tocar ni oler nada y avisar al 112.",
    resumenSenior: "El transporte de mercancías peligrosas (TPC/TPF) se identifica por el panel rectangular naranja con números y rombos de peligro. Aprenderás a alejarte cuesta arriba y con el viento de espaldas y a informar al 112 desde distancia segura.",
    reglasOro: [
      "Identifica el PANEL NARANJA en camiones y vagones de tren: indica que transportan sustancias inflamables, tóxicas o corrosivas.",
      "Ante un accidente de un vehículo con panel naranja: aléjate de inmediato (mínimo 300-500 metros), cuesta arriba y con el viento a tu espalda.",
      "NUNCA te acerques a curiosear, no toques líquidos derramados ni enciendas fuego o chispas."
    ],
    mochila: {
      instruccionJunior: "Elige las 4 cosas que te ayudan a actuar bien ante un accidente en carretera.",
      instruccionSenior: "Selecciona los 5 elementos y medidas clave de autoprotección ante accidentes de mercancías peligrosas.",
      items: [
        { id: "chaleco_refl", icono: "🦺", nombre: "Chaleco reflectante (al salir del coche en lugar seguro)", correcto: true, nivel: "ambos", explicacion: "Obligatorio para ser visible en carretera tras detenerse lejos del peligro." },
        { id: "movil_112_m", icono: "📱", nombre: "Móvil para llamar al 112 a distancia", correcto: true, nivel: "ambos", explicacion: "Permite alertar sin acercarse al vehículo accidentado." },
        { id: "panuelo_m", icono: "🧣", nombre: "Pañuelo o mascarilla para cubrir nariz y boca", correcto: true, nivel: "ambos", explicacion: "Útil mientras te alejas hacia un edificio cerrado." },
        { id: "panel_naranja_info", icono: "🟧", nombre: "Reconocer el Panel Rectangular Naranja", correcto: true, nivel: "ambos", explicacion: "Saber qué significa ese cartel naranja permite avisar a los bomberos de que es una carga especial." },
        { id: "ventana_coche", icono: "🚗", nombre: "Cerrar ventanillas y apagar ventilación del coche al alejarse", correcto: true, nivel: "10-12", explicacion: "Evita que entren vapores dentro del habitáculo del vehículo." },
        { id: "acercarse_leer", icono: "🔍", nombre: "Acercarse a 2 metros de la fuga para ver qué líquido cae", correcto: false, nivel: "ambos", explicacion: "¡Peligro mortal! Muchos gases son invisibles o inflamables; jamás te acerques." },
        { id: "pisar_charco", icono: "🥾", nombre: "Pisar un charco derramado por un camión cisterna", correcto: false, nivel: "ambos", explicacion: "Puede ser un ácido corrosivo o combustible muy inflamable." },
        { id: "mechero_cerca", icono: "🔥", nombre: "Encender fuego o chispas cerca del accidente", correcto: false, nivel: "10-12", explicacion: "Los vapores inflamables pueden explotar a distancia con una sola chispa." }
      ]
    },
    fases: [
      { id: "f1", fase: "antes", textoJunior: "Conocer que los camiones con cartel naranja llevan cargas especiales", textoSenior: "Reconocer los paneles naranjas y las etiquetas con forma de rombo (llama = inflamable, calavera = tóxico, probeta = corrosivo)", nivel: "ambos" },
      { id: "f2", fase: "durante", textoJunior: "Alejarse mucho con el viento en la espalda o entrar en un edificio cerrando ventanas", textoSenior: "Detenerse lejos, antes del accidente, caminar en sentido contrario a donde va el humo/viento o confinarse en el edificio más próximo", nivel: "ambos" },
      { id: "f3", fase: "despues", textoJunior: "Esperar a que la Guardia Civil y los bomberos limpien toda la zona", textoSenior: "Respetar el perímetro de seguridad de los bomberos NBQ y Guardia Civil hasta que la vía quede descontaminada", nivel: "ambos" },
      { id: "f4", fase: "antes", textoJunior: "Guardar una mayor distancia de seguridad al circular detrás de un camión cisterna", textoSenior: "Aumentar la distancia de seguridad en carretera respecto a vehículos con panel naranja y fijarse en los puntos kilométricos", nivel: "10-12" },
      { id: "f5", fase: "durante", textoJunior: "Subir las ventanillas y apagar el aire del coche si pasas lejos de un accidente", textoSenior: "En el vehículo: cerrar ventanillas, desconectar la entrada de aire exterior y no accionar ningún elemento que produzca chispas", nivel: "10-12" },
      { id: "f6", fase: "despues", textoJunior: "No tocar nunca cajas, bidones ni restos que hayan quedado en la cuneta", textoSenior: "No recoger ni manipular recipientes o restos próximos al lugar del siniestro y seguir las rutas alternativas de Tráfico", nivel: "10-12" }
    ],
    radar: [
      { id: "r1", textoJunior: "Detenerse muy lejos si ves un camión con cartel naranja volcado y avisar enseguida al 112.", textoSenior: "Mantener una distancia de seguridad grande, situarse con el viento a la espalda y llamar al 112.", esSeguro: true, explicacion: "¡Exacto! Con el viento a tu espalda, cualquier humo o gas se aleja de ti en vez de venir hacia tu cara." },
      { id: "r2", textoJunior: "Pasar con el coche o la bici justo por encima del líquido que está saliendo de una cisterna rota.", textoSenior: "Atravesar una nube de vapor o un charco derramado por un camión con paneles naranjas.", esSeguro: false, explicacion: "¡Nunca! El motor caliente de un coche puede inflamar el vapor o el líquido puede ser corrosivo." },
      { id: "r3", textoJunior: "Si vives justo al lado de donde ha volcado un camión cisterna, entrar en casa y cerrar todas las ventanas y el aire acondicionado.", textoSenior: "Confinarse en casa cerrando ventanas y ventilación si ocurre un accidente de mercancías peligrosas frente a tu calle.", esSeguro: true, explicacion: "¡Muy bien! El confinamiento impide que los vapores entren en tu vivienda." },
      { id: "r4", textoJunior: "Acercarse al camión accidentado para coger cajas que se hayan caído a la carretera.", textoSenior: "Acercarse a manipular bultos, bidones o cajas caídas de un transporte con señalización de peligro.", esSeguro: false, explicacion: "¡Prohibido y peligrosísimo! Los bidones o paquetes pueden contener sustancias tóxicas o radiactivas." }
    ],
    simulador112: {
      situacion: "Desde la ventana del autobús escolar veis en la autovía de enfrente un camión cisterna con un cartel rectangular naranja que ha chocado y tiene un escape de líquido en la calzada.",
      pasos: [
        {
          pregunta: "1. ¿Qué es lo más seguro que debe hacer vuestro autobús?",
          opciones: [
            { texto: "No pasar junto al camión, cerrar las ventanillas y la entrada de aire exterior del autobús y detenerse en una zona segura lejana.", correcta: true, feedback: "¡Excelente! Aislar el aire interior y mantener gran distancia protege a todos los pasajeros." },
            { texto: "Parar justo al lado del charco y abrir todas las ventanillas.", correcta: false, feedback: "Eso haría que los vapores entraran directamente al autobús." },
            { texto: "Bajar todos los niños a la autovía.", correcta: false, feedback: "Bajar a la calzada de una autovía con una fuga química es doblemente peligroso." }
          ]
        },
        {
          pregunta: "2. Avisáis al 112. ¿Qué detalle del camión es el más importante mencionar?",
          opciones: [
            { texto: "Que es un camión cisterna con PANEL NARANJA de mercancías peligrosas y tiene una fuga de líquido en el km 24 de la A-2.", correcta: true, feedback: "¡Perfecto! Al escuchar 'panel naranja con fuga', el 112 activa el plan especial de mercancías peligrosas (TRANSCAM/MPC)." },
            { texto: "Que el camión tiene las ruedas negras.", correcta: false, feedback: "Lo que activa el protocolo especial de bomberos es saber que lleva el panel naranja y tiene fuga." },
            { texto: "No decir en qué carretera está.", correcta: false, feedback: "En carretera siempre hay que dar el nombre de la vía y el kilómetro." }
          ]
        },
        {
          pregunta: "3. Si desde lejos con prismáticos o zoom se vieran los números del panel naranja (por ejemplo, 33 arriba y 1203 abajo), ¿para qué les sirven al 112?",
          opciones: [
            { texto: "Porque esos números les dicen exactamente qué sustancia lleva (ej. gasolina) y qué peligro tiene, sin que nadie tenga que acercarse.", correcta: true, feedback: "¡Nivel experto desbloqueado! El número de arriba indica el peligro y el de abajo (número ONU) la sustancia exacta." },
            { texto: "Son el precio del camión.", correcta: false, feedback: "Son el código internacional de emergencia (código Kemler y número ONU)." },
            { texto: "Para jugar al bingo.", correcta: false, feedback: "Es un código internacional que conocen todos los bomberos del mundo." }
          ]
        }
      ]
    },
    guiaDocente: {
      objetivos: [
        "Reconocer visualmente el Panel Naranja de transporte de mercancías peligrosas y los pictogramas en forma de rombo.",
        "Entender que ante un accidente con panel naranja la prioridad es la DISTANCIA, situarse con el viento a la espalda o CONFINARSE.",
        "Conocer la utilidad de los códigos del panel naranja para los bomberos (siempre desde lejos, sin acercarse nunca)."
      ],
      actividadAula: "El Código Secreto de los Bomberos: Mostrar en clase un dibujo del panel naranja (nº de peligro arriba, nº de producto abajo) y los rombos de peligro (inflamable, tóxico, corrosivo) como si fueran señales secretas para proteger a la población.",
      consejoFamilia: "En los viajes familiares por carretera, jugad a detectar qué camiones llevan el rectángulo naranja y recordad juntos qué significan sus símbolos y por qué hay que dejarles siempre buena distancia de seguridad."
    }
  }
};


