// ============================================================================
// MISIÓN 112 — MOTOR INTERACTIVO REUTILIZABLE (4 JUEGOS + DIPLOMA + DOCENTE)
// ============================================================================

(function () {
  const STORAGE_KEY = "mision112_estado_v1";
  const CUSTOM_CATS_KEY = "mision112_catastrofes_custom_v1";

  // Cargar catástrofes personalizadas si el equipo creó alguna desde Zona Docente
  function cargarCatastrofesCustom() {
    try {
      const raw = localStorage.getItem(CUSTOM_CATS_KEY);
      if (raw) {
        const custom = JSON.parse(raw);
        Object.assign(window.CATALOGO_CATASTROFES, custom);
      }
    } catch (e) {
      console.warn("No se pudieron leer catástrofes personalizadas:", e);
    }
  }

  cargarCatastrofesCustom();

  // Estado inicial combinado (URL + localStorage)
  const estado = {
    nombreAgente: "",
    edad: "7-9", // "7-9" (Junior) o "10-12" (Senior)
    catastrofeActiva: "inundaciones",
    bloqueFiltro: "Todos",
    vistaActiva: "mision", // "mision" | "diploma" | "docente"
    juegoActivo: "mochila", // "mochila" | "fases" | "radar" | "simulador112"
    modoSorteoBloqueado: false, // Si es true, oculta el catálogo y deja fija solo la catástrofe elegida
    modoCreador: false, // Oculto por defecto; se activa con 5 clics en el logo 🚨 112 o con ?admin=1
    progreso: {}, // { [catastrofeId]: { mochila: bool, fases: bool, radar: bool, simulador112: bool } }
    // Estado temporal del juego en curso
    mochilaSeleccion: [],
    mochilaVerificado: false,
    fasesSeleccion: {},
    fasesVerificado: false,
    radarSeleccion: {},
    radarVerificado: false,
    simSeleccion: {},
    simVerificado: false
  };

  function cargarEstadoGuardado() {
    try {
      const guardado = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (guardado.nombreAgente) estado.nombreAgente = guardado.nombreAgente;
      if (guardado.edad === "7-9" || guardado.edad === "10-12") estado.edad = guardado.edad;
      if (guardado.catastrofeActiva && window.CATALOGO_CATASTROFES[guardado.catastrofeActiva]) {
        estado.catastrofeActiva = guardado.catastrofeActiva;
      }
      if (typeof guardado.modoSorteoBloqueado === "boolean") {
        estado.modoSorteoBloqueado = guardado.modoSorteoBloqueado;
      }
      if (guardado.progreso && typeof guardado.progreso === "object") {
        estado.progreso = guardado.progreso;
      }
    } catch (e) {
      console.warn("Error leyendo estado local:", e);
    }

    // Leer parámetros de la URL (tiene prioridad para compartir enlaces directos del sorteo)
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get("catastrofe");
    if (catParam && window.CATALOGO_CATASTROFES[catParam]) {
      estado.catastrofeActiva = catParam;
    }
    const edadParam = params.get("edad");
    if (edadParam === "7-9" || edadParam === "10-12") {
      estado.edad = edadParam;
    }
    const vistaParam = params.get("vista");
    if (vistaParam === "mision" || vistaParam === "diploma") {
      estado.vistaActiva = vistaParam;
    }
    const juegoParam = params.get("juego");
    if (["mochila", "fases", "radar", "simulador112"].includes(juegoParam)) {
      estado.juegoActivo = juegoParam;
    }
    // Comprobar acceso Admin DESPUÉS de vistaParam para que ?admin=1 o #admin tengan siempre prioridad
    const hash = (window.location.hash || "").toLowerCase();
    const esAdminUrl =
      params.has("admin") ||
      params.has("creador") ||
      vistaParam === "docente" ||
      hash.includes("admin") ||
      hash.includes("docente");
    if (esAdminUrl) {
      estado.modoCreador = true;
      estado.vistaActiva = "docente";
    }
  }

  function guardarEstado() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          nombreAgente: estado.nombreAgente,
          edad: estado.edad,
          catastrofeActiva: estado.catastrofeActiva,
          modoSorteoBloqueado: true,
          progreso: estado.progreso
        })
      );
    } catch (e) {
      // Ignorar si almacenamiento restringido
    }

    // Sincronizar URL sin recargar página (conservando ?admin=1 si está en la vista docente)
    try {
      const params = new URLSearchParams();
      params.set("catastrofe", estado.catastrofeActiva);
      params.set("edad", estado.edad);
      if (estado.vistaActiva === "docente" && estado.modoCreador) {
        params.set("admin", "1");
      } else {
        params.set("vista", estado.vistaActiva === "diploma" ? "diploma" : "mision");
        params.set("juego", estado.juegoActivo);
      }
      const nuevaUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, "", nuevaUrl);
    } catch (e) {
      // Ignorar en entornos file:// si replaceState da aviso
    }
  }

  function obtenerProgresoCatastrofe(catId) {
    if (!estado.progreso[catId]) {
      estado.progreso[catId] = {
        mochila: false,
        fases: false,
        radar: false,
        simulador112: false
      };
    }
    return estado.progreso[catId];
  }

  function contarMedallas(catId) {
    const p = obtenerProgresoCatastrofe(catId);
    return [p.mochila, p.fases, p.radar, p.simulador112].filter(Boolean).length;
  }

  function reiniciarIntentoJuegoActual() {
    estado.mochilaSeleccion = [];
    estado.mochilaVerificado = false;
    estado.fasesSeleccion = {};
    estado.fasesVerificado = false;
    estado.radarSeleccion = {};
    estado.radarVerificado = false;
    estado.simSeleccion = {};
    estado.simVerificado = false;
  }

  function aplicarColoresMision(cat) {
    document.documentElement.style.setProperty("--mission-primary", cat.colorPrimario || "#0284c7");
    document.documentElement.style.setProperty("--mission-secondary", cat.colorSecundario || "#e0f2fe");
  }

  // ==========================================================================
  // RENDERIZADO GENERAL
  // ==========================================================================
  function render() {
    const cat = window.CATALOGO_CATASTROFES[estado.catastrofeActiva] || window.CATALOGO_CATASTROFES.inundaciones;
    aplicarColoresMision(cat);
    guardarEstado();

    // Actualizar controles de cabecera
    const inputNombre = document.getElementById("agent-name-input");
    if (inputNombre && document.activeElement !== inputNombre) {
      inputNombre.value = estado.nombreAgente;
    }

    document.querySelectorAll(".age-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.age === estado.edad);
    });

    document.getElementById("nav-mision").classList.toggle("active-view", estado.vistaActiva === "mision");
    document.getElementById("nav-diploma").classList.toggle("active-view", estado.vistaActiva === "diploma");
    const btnDocente = document.getElementById("nav-docente");
    if (btnDocente) {
      btnDocente.style.display = estado.modoCreador ? "inline-flex" : "none";
      btnDocente.classList.toggle("active-view", estado.vistaActiva === "docente");
    }

    const medallasActuales = contarMedallas(cat.id);
    const badgeDiploma = document.getElementById("diploma-count-badge");
    if (badgeDiploma) {
      badgeDiploma.textContent = `${medallasActuales}/4`;
    }

    const contenedor = document.getElementById("app-content");
    if (!contenedor) return;

    if (estado.vistaActiva === "diploma") {
      contenedor.innerHTML = renderVistaDiploma(cat);
      enlazarEventosDiploma(cat);
    } else if (estado.vistaActiva === "docente" && estado.modoCreador) {
      contenedor.innerHTML = renderVistaDocente(cat);
      enlazarEventosDocente(cat);
    } else {
      estado.vistaActiva = "mision";
      contenedor.innerHTML = renderVistaMision(cat);
      enlazarEventosMision(cat);
    }
  }

  // ==========================================================================
  // VISTA 1: MISIÓN Y LOS 4 JUEGOS REUTILIZABLES (SIN SELECTOR DE CATÁSTROFES)
  // ==========================================================================
  function renderVistaMision(cat) {
    const prog = obtenerProgresoCatastrofe(cat.id);
    const medallas = contarMedallas(cat.id);
    const esJunior = estado.edad === "7-9";

    // Cabecera Hero de la Catástrofe Activa
    const heroHtml = `
      <section class="mission-hero">
        <div>
          <div class="hero-badge-row">
            <span class="pill-tag">📂 Bloque: ${cat.bloque}</span>
            <span class="pill-tag">🎂 Nivel: ${esJunior ? "7-9 años (Agente Junior)" : "10-12 años (Agente Senior)"}</span>
          </div>
          <h2>${cat.icono} Misión: ${cat.nombre}</h2>
          <div class="mission-lema">${cat.lema}</div>
          <p class="mission-desc">${esJunior ? cat.resumenJunior : cat.resumenSenior}</p>
          <div class="golden-rules">
            <h3>⭐ Las 3 Reglas de Oro de Protección Civil</h3>
            <ul>
              ${cat.reglasOro.map((r) => `<li>${r}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="hero-progress-box">
          <div class="hero-big-icon">${cat.icono}</div>
          <div style="font-weight:800;font-size:0.95rem;">Progreso de Misión</div>
          <div class="medals-row">
            <div class="medal-slot ${prog.mochila ? "won" : ""}" title="Juego 1: Mochila">${prog.mochila ? "🎒" : "1"}</div>
            <div class="medal-slot ${prog.fases ? "won" : ""}" title="Juego 2: Antes, Durante y Después">${prog.fases ? "⏱️" : "2"}</div>
            <div class="medal-slot ${prog.radar ? "won" : ""}" title="Juego 3: Radar de Decisiones">${prog.radar ? "🛡️" : "3"}</div>
            <div class="medal-slot ${prog.simulador112 ? "won" : ""}" title="Juego 4: Simulador 112">${prog.simulador112 ? "📞" : "4"}</div>
          </div>
          <div style="font-size:0.85rem;margin-bottom:0.65rem;"><strong>${medallas} de 4</strong> medallas conseguidas</div>
          ${
            medallas === 4
              ? `<button class="btn-primary" id="btn-ir-diploma-hero" style="background:#facc15;color:#0f172a;width:100%;">🎓 ¡Ver mi Diploma!</button>`
              : `<div style="font-size:0.78rem;color:#e2e8f0;">Supera los 4 juegos de abajo para desbloquear tu Diploma Oficial 112.</div>`
          }
        </div>
      </section>
    `;

    // Pestañas de los 4 Juegos Reutilizables
    const juegosMeta = [
      { id: "mochila", num: "Juego 1", titulo: "Mochila 112", icono: "🎒", completado: prog.mochila },
      { id: "fases", num: "Juego 2", titulo: "Antes / Durante / Después", icono: "⏱️", completado: prog.fases },
      { id: "radar", num: "Juego 3", titulo: "Radar ¿Seguro o Peligro?", icono: "🛡️", completado: prog.radar },
      { id: "simulador112", num: "Juego 4", titulo: "Simulador Llamada 112", icono: "📞", completado: prog.simulador112 }
    ];

    const tabsHtml = `
      <nav class="games-nav" aria-label="Los 4 minijuegos de la misión">
        ${juegosMeta
          .map(
            (j) => `
          <button class="game-tab ${estado.juegoActivo === j.id ? "active" : ""}" data-juego="${j.id}">
            <div class="game-tab-left">
              <span class="game-tab-icon">${j.icono}</span>
              <div>
                <span class="game-tab-num">${j.num}</span>
                <span class="game-tab-title">${j.titulo}</span>
              </div>
            </div>
            <span class="game-status-badge" title="${j.completado ? "Medalla conseguida" : "Pendiente"}">
              ${j.completado ? "✅" : "⚪"}
            </span>
          </button>
        `
          )
          .join("")}
      </nav>
    `;

    let contenidoJuegoHtml = "";
    if (estado.juegoActivo === "mochila") {
      contenidoJuegoHtml = renderJuegoMochila(cat, esJunior);
    } else if (estado.juegoActivo === "fases") {
      contenidoJuegoHtml = renderJuegoFases(cat, esJunior);
    } else if (estado.juegoActivo === "radar") {
      contenidoJuegoHtml = renderJuegoRadar(cat, esJunior);
    } else {
      contenidoJuegoHtml = renderJuegoSimulador112(cat, esJunior);
    }

    return `
      ${heroHtml}
      ${tabsHtml}
      <div class="game-stage">
        ${contenidoJuegoHtml}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // JUEGO 1: MOCHILA DE EMERGENCIA
  // --------------------------------------------------------------------------
  function obtenerItemsMochilaPorEdad(cat, esJunior) {
    return cat.mochila.items.filter((item) => (esJunior ? item.nivel === "ambos" : true));
  }

  function renderJuegoMochila(cat, esJunior) {
    const items = obtenerItemsMochilaPorEdad(cat, esJunior);
    const totalCorrectos = items.filter((i) => i.correcto).length;
    const instruccion = esJunior ? cat.mochila.instruccionJunior : cat.mochila.instruccionSenior;

    let resultadoBanner = "";
    if (estado.mochilaVerificado) {
      const aciertos = items.filter(
        (i) => (i.correcto && estado.mochilaSeleccion.includes(i.id)) || (!i.correcto && !estado.mochilaSeleccion.includes(i.id))
      ).length;
      const todoBien = aciertos === items.length;

      resultadoBanner = todoBien
        ? `<div class="result-banner success">
            <div>🎉 <strong>¡Mochila perfecta!</strong> Has elegido exactamente los ${totalCorrectos} objetos seguros y has evitado todas las trampas. ¡Medalla conseguida!</div>
            <button class="btn-primary" data-next-game="fases">Ir al Juego 2: Antes, Durante y Después ➡️</button>
          </div>`
        : `<div class="result-banner warning">
            <div>🧐 <strong>¡Casi lo tienes!</strong> Revisa las tarjetas en rojo y verde para ver la explicación de cada objeto y vuelve a comprobar.</div>
            <button class="btn-secondary" id="btn-reintentar-mochila">Intentar de nuevo 🔄</button>
          </div>`;
    }

    return `
      <div class="game-header">
        <div>
          <h3>🎒 Juego 1: Prepara tu Mochila para ${cat.nombreCorto}</h3>
          <p>${instruccion} (Seleccionados: <strong>${estado.mochilaSeleccion.length}</strong> de ${totalCorrectos} recomendados)</p>
        </div>
        <span class="pill-tag" style="background:#f1f5f9;color:#0f172a;">Nivel ${estado.edad} años</span>
      </div>

      <div class="mochila-grid">
        ${items
          .map((item) => {
            const estaMarcado = estado.mochilaSeleccion.includes(item.id);
            let claseExtra = estaMarcado ? "packed" : "";
            let feedbackHtml = "";

            if (estado.mochilaVerificado) {
              const esAcierto = (item.correcto && estaMarcado) || (!item.correcto && !estaMarcado);
              claseExtra = esAcierto ? "correct-reveal" : "wrong-reveal";
              feedbackHtml = `
                <div class="item-feedback">
                  <strong>${item.correcto ? "✅ Sí llevar:" : "⚠️ No llevar:"}</strong> ${item.explicacion}
                </div>
              `;
            }

            return `
              <div class="item-card ${claseExtra}" data-item-id="${item.id}">
                <div class="item-top">
                  <span class="item-emoji">${item.icono}</span>
                  <div>
                    <div class="item-title">${item.nombre}</div>
                    <div style="font-size:0.78rem;font-weight:700;color:#475569;">
                      ${estaMarcado ? "🎒 Dentro de la mochila" : "➕ Pulsa para meter"}
                    </div>
                  </div>
                </div>
                ${feedbackHtml}
              </div>
            `;
          })
          .join("")}
      </div>

      <div class="game-actions">
        <button class="btn-secondary" id="btn-limpiar-mochila">Vaciar mochila</button>
        <button class="btn-primary" id="btn-comprobar-mochila">✅ Comprobar mi Mochila</button>
      </div>
      ${resultadoBanner}
    `;
  }

  // --------------------------------------------------------------------------
  // JUEGO 2: ANTES, DURANTE Y DESPUÉS
  // --------------------------------------------------------------------------
  function obtenerFasesPorEdad(cat, esJunior) {
    return cat.fases.filter((f) => (esJunior ? f.nivel === "ambos" : true));
  }

  function renderJuegoFases(cat, esJunior) {
    const fases = obtenerFasesPorEdad(cat, esJunior);

    let resultadoBanner = "";
    if (estado.fasesVerificado) {
      const aciertos = fases.filter((f) => estado.fasesSeleccion[f.id] === f.fase).length;
      const todoBien = aciertos === fases.length;

      resultadoBanner = todoBien
        ? `<div class="result-banner success">
            <div>🎉 <strong>¡Orden temporal perfecto (${aciertos}/${fases.length})!</strong> Sabes qué hacer ANTES para prevenir, DURANTE para protegerte y DESPUÉS para volver a la calma. ¡Medalla conseguida!</div>
            <button class="btn-primary" data-next-game="radar">Ir al Juego 3: Radar de Decisiones ➡️</button>
          </div>`
        : `<div class="result-banner warning">
            <div>🧐 Has acertado <strong>${aciertos} de ${fases.length}</strong>. Fíjate en las filas marcadas en rojo y corrige el momento adecuado.</div>
          </div>`;
    }

    return `
      <div class="game-header">
        <div>
          <h3>⏱️ Juego 2: ¿Cuándo debo hacerlo? (Antes, Durante o Después)</h3>
          <p>Indica si cada acción se hace <strong>ANTES</strong> (prevenir), <strong>DURANTE</strong> (emergencia) o <strong>DESPUÉS</strong> (recuperación) de ${cat.nombreCorto.toLowerCase()}.</p>
        </div>
        <span class="pill-tag" style="background:#f1f5f9;color:#0f172a;">Nivel ${estado.edad} años</span>
      </div>

      <div class="fases-list">
        ${fases
          .map((f) => {
            const elegida = estado.fasesSeleccion[f.id] || "";
            const texto = esJunior ? f.textoJunior : f.textoSenior;
            let claseFila = "";
            let pistaHtml = "";

            if (estado.fasesVerificado) {
              const ok = elegida === f.fase;
              claseFila = ok ? "correct-reveal" : "wrong-reveal";
              pistaHtml = ok
                ? `<div style="width:100%;font-size:0.82rem;color:#14532d;font-weight:700;">✅ ¡Correcto! Esto se hace <strong>${f.fase.toUpperCase()}</strong>.</div>`
                : `<div style="width:100%;font-size:0.82rem;color:#7f1d1d;font-weight:700;">❌ Revisa: piensa si es para prepararse (ANTES), protegerse en el momento (DURANTE) o al terminar (DESPUÉS).</div>`;
            }

            return `
              <div class="fase-row ${claseFila}">
                <div class="fase-text">🔹 ${texto}</div>
                <div class="fase-buttons">
                  <button class="fase-btn ${elegida === "antes" ? "selected" : ""}" data-fase-id="${f.id}" data-valor="antes">1️⃣ ANTES</button>
                  <button class="fase-btn ${elegida === "durante" ? "selected" : ""}" data-fase-id="${f.id}" data-valor="durante">2️⃣ DURANTE</button>
                  <button class="fase-btn ${elegida === "despues" ? "selected" : ""}" data-fase-id="${f.id}" data-valor="despues">3️⃣ DESPUÉS</button>
                </div>
                ${pistaHtml}
              </div>
            `;
          })
          .join("")}
      </div>

      <div class="game-actions">
        <button class="btn-secondary" id="btn-limpiar-fases">Reiniciar respuestas</button>
        <button class="btn-primary" id="btn-comprobar-fases">✅ Comprobar Fases</button>
      </div>
      ${resultadoBanner}
    `;
  }

  // --------------------------------------------------------------------------
  // JUEGO 3: RADAR DE DECISIONES (¿SEGURO O PELIGROSO?)
  // --------------------------------------------------------------------------
  function obtenerRadarPorEdad(cat, esJunior) {
    return cat.radar.filter((r) => (esJunior ? r.nivel !== "10-12" : true));
  }

  function renderJuegoRadar(cat, esJunior) {
    const preguntas = obtenerRadarPorEdad(cat, esJunior);

    let resultadoBanner = "";
    if (estado.radarVerificado) {
      const aciertos = preguntas.filter((r) => estado.radarSeleccion[r.id] === r.esSeguro).length;
      const todoBien = aciertos === preguntas.length;

      resultadoBanner = todoBien
        ? `<div class="result-banner success">
            <div>🎉 <strong>¡Radar 112 al 100% (${aciertos}/${preguntas.length})!</strong> Sabes distinguir las conductas seguras de los mitos y peligros. ¡Medalla conseguida!</div>
            <button class="btn-primary" data-next-game="simulador112">Ir al Juego 4: Simulador Llamada 112 ➡️</button>
          </div>`
        : `<div class="result-banner warning">
            <div>🧐 Has acertado <strong>${aciertos} de ${preguntas.length}</strong>. Lee las explicaciones de abajo y ajusta las respuestas incorrectas.</div>
          </div>`;
    }

    return `
      <div class="game-header">
        <div>
          <h3>🛡️ Juego 3: Radar de Decisiones — ¿Es Seguro o es Peligroso?</h3>
          <p>Analiza cada situación de <strong>${cat.nombreCorto}</strong> y decide si es una conducta segura o un peligro/mito.</p>
        </div>
        <span class="pill-tag" style="background:#f1f5f9;color:#0f172a;">Nivel ${estado.edad} años</span>
      </div>

      <div class="radar-list">
        ${preguntas
          .map((r) => {
            const seleccion = estado.radarSeleccion[r.id];
            const texto = esJunior ? r.textoJunior : r.textoSenior;
            let explicacionHtml = "";

            if (estado.radarVerificado) {
              const acertado = seleccion === r.esSeguro;
              explicacionHtml = `
                <div class="radar-explanation ${acertado ? "ok" : "ko"}">
                  ${acertado ? "✅ ¡Acierto! " : "❌ ¡Ojo! "} ${r.explicacion}
                </div>
              `;
            }

            return `
              <div class="radar-card">
                <div class="radar-top">
                  <div class="radar-question">${texto}</div>
                  <div class="radar-choices">
                    <button class="choice-btn ${seleccion === true ? "selected-safe" : ""}" data-radar-id="${r.id}" data-safe="true">✅ Acción Segura</button>
                    <button class="choice-btn ${seleccion === false ? "selected-danger" : ""}" data-radar-id="${r.id}" data-safe="false">⚠️ ¡Peligro / Mito!</button>
                  </div>
                </div>
                ${explicacionHtml}
              </div>
            `;
          })
          .join("")}
      </div>

      <div class="game-actions">
        <button class="btn-secondary" id="btn-limpiar-radar">Reiniciar radar</button>
        <button class="btn-primary" id="btn-comprobar-radar">✅ Comprobar Radar</button>
      </div>
      ${resultadoBanner}
    `;
  }

  // --------------------------------------------------------------------------
  // JUEGO 4: SIMULADOR DE LLAMADA AL 112
  // --------------------------------------------------------------------------
  function renderJuegoSimulador112(cat) {
    const sim = cat.simulador112;
    const pasos = sim.pasos;

    let resultadoBanner = "";
    if (estado.simVerificado) {
      const aciertos = pasos.filter((paso, idx) => {
        const elegidaIdx = estado.simSeleccion[idx];
        return elegidaIdx !== undefined && paso.opciones[elegidaIdx] && paso.opciones[elegidaIdx].correcta;
      }).length;
      const todoBien = aciertos === pasos.length;

      resultadoBanner = todoBien
        ? `<div class="result-banner success">
            <div>🎉 <strong>¡Llamada 112 impecable!</strong> Has mantenido la calma, dado la ubicación exacta y seguido las instrucciones. ¡Has ganado la medalla final!</div>
            <button class="btn-primary" id="btn-ver-diploma-final">🎓 ¡Recoger mi Diploma Oficial 112!</button>
          </div>`
        : `<div class="result-banner warning">
            <div>📞 Has completado correctamente <strong>${aciertos} de ${pasos.length}</strong> pasos de la llamada. Revisa los consejos del operador 112 en cada paso y vuelve a comprobar.</div>
          </div>`;
    }

    return `
      <div class="game-header">
        <div>
          <h3>📞 Juego 4: Simulador de Llamada de Emergencia al 112</h3>
          <p>Entrena cómo hablar con la sala de emergencias 112: <strong>Qué pasa, Dónde estás y Quién necesita ayuda</strong>.</p>
        </div>
        <span class="pill-tag" style="background:#fee2e2;color:#991b1b;">☎️ 112 — Gratuito y 24h</span>
      </div>

      <div class="phone-simulator">
        <div class="phone-header">
          <div>
            <strong>🚨 CENTRAL DE EMERGENCIAS 112</strong>
            <div style="font-size:0.78rem;color:#94a3b8;">Llamada de entrenamiento — ${cat.nombreCorto}</div>
          </div>
          <div class="call-status">● En línea (Altavoz activo)</div>
        </div>

        <div class="scenario-bubble">
          <strong>📍 Situación de emergencia:</strong> ${sim.situacion}
        </div>

        ${pasos
          .map((paso, idx) => {
            const elegidaIdx = estado.simSeleccion[idx];
            let feedbackHtml = "";
            if (estado.simVerificado && elegidaIdx !== undefined) {
              const op = paso.opciones[elegidaIdx];
              feedbackHtml = `
                <div class="sim-feedback ${op.correcta ? "ok" : "ko"}">
                  ${op.correcta ? "✅ Operador 112: " : "⚠️ Operador 112: "} ${op.feedback}
                </div>
              `;
            }

            return `
              <div class="sim-step-box">
                <div class="sim-step-title">${paso.pregunta}</div>
                <div class="sim-options">
                  ${paso.opciones
                    .map((op, opIdx) => {
                      let claseBtn = "";
                      if (elegidaIdx === opIdx) {
                        if (!estado.simVerificado) {
                          claseBtn = "selected-correct";
                        } else {
                          claseBtn = op.correcta ? "selected-correct" : "selected-wrong";
                        }
                      }
                      return `
                        <button class="sim-opt-btn ${claseBtn}" data-sim-step="${idx}" data-sim-opt="${opIdx}">
                          ${elegidaIdx === opIdx ? "🔘" : "⚪"} ${op.texto}
                        </button>
                      `;
                    })
                    .join("")}
                </div>
                ${feedbackHtml}
              </div>
            `;
          })
          .join("")}
      </div>

      <div class="game-actions">
        <button class="btn-secondary" id="btn-limpiar-sim">Reiniciar llamada</button>
        <button class="btn-primary" id="btn-comprobar-sim">📞 Enviar respuestas al 112</button>
      </div>
      ${resultadoBanner}
    `;
  }

  // ==========================================================================
  // VISTA 2: DIPLOMA OFICIAL PERSONALIZADO E IMPRIMIBLE
  // ==========================================================================
  function renderVistaDiploma(cat) {
    const prog = obtenerProgresoCatastrofe(cat.id);
    const medallas = contarMedallas(cat.id);
    const nombreMostrar = estado.nombreAgente.trim() || "Agente de Protección Civil";
    const rango = estado.edad === "7-9" ? "Agente Junior 112 (7-9 años)" : "Agente Senior 112 (10-12 años)";
    const fechaHoy = new Date().toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    return `
      <div class="no-print" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:0.75rem;">
        <button class="btn-secondary" id="btn-volver-mision">⬅️ Volver a los juegos de ${cat.nombreCorto}</button>
        <div style="display:flex;gap:0.65rem;align-items:center;">
          <button class="btn-primary" id="btn-imprimir-diploma">🖨️ Imprimir / Guardar Diploma en PDF</button>
        </div>
      </div>

      <div class="diploma-card">
        <div class="diploma-seal">🚨 CUERPO ESCOLAR DE AUTOPROTECCIÓN — MISIÓN 112</div>
        <h2>DIPLOMA OFICIAL DE AGENTE 112</h2>
        <p style="color:#475569;font-size:1rem;">Se otorga el presente reconocimiento a:</p>

        <div class="diploma-agent-name">${escaparHtml(nombreMostrar)}</div>

        <p style="font-size:1.05rem;max-width:620px;margin:0.5rem auto;color:#1e293b;">
          Con el rango de <strong>${rango}</strong>, por su preparación en prevención, autoprotección y actuación ante emergencias en la especialidad de:
        </p>

        <div style="background:var(--mission-secondary);border:2px solid var(--mission-primary);display:inline-block;padding:0.6rem 1.4rem;border-radius:14px;margin:0.75rem 0;font-size:1.25rem;font-weight:900;">
          ${cat.icono} ${cat.nombre}
        </div>

        <div class="diploma-medals-grid">
          <div class="diploma-medal-item ${prog.mochila ? "earned" : ""}">
            <div style="font-size:2rem;">${prog.mochila ? "🎒🏅" : "🎒🔒"}</div>
            <div style="font-weight:800;font-size:0.9rem;margin-top:0.25rem;">Mochila 112</div>
            <div style="font-size:0.78rem;color:#64748b;">${prog.mochila ? "Superado" : "Pendiente"}</div>
          </div>
          <div class="diploma-medal-item ${prog.fases ? "earned" : ""}">
            <div style="font-size:2rem;">${prog.fases ? "⏱️🏅" : "⏱️🔒"}</div>
            <div style="font-weight:800;font-size:0.9rem;margin-top:0.25rem;">Antes / Durante / Después</div>
            <div style="font-size:0.78rem;color:#64748b;">${prog.fases ? "Superado" : "Pendiente"}</div>
          </div>
          <div class="diploma-medal-item ${prog.radar ? "earned" : ""}">
            <div style="font-size:2rem;">${prog.radar ? "🛡️🏅" : "🛡️🔒"}</div>
            <div style="font-weight:800;font-size:0.9rem;margin-top:0.25rem;">Radar de Decisiones</div>
            <div style="font-size:0.78rem;color:#64748b;">${prog.radar ? "Superado" : "Pendiente"}</div>
          </div>
          <div class="diploma-medal-item ${prog.simulador112 ? "earned" : ""}">
            <div style="font-size:2rem;">${prog.simulador112 ? "📞🏅" : "📞🔒"}</div>
            <div style="font-weight:800;font-size:0.9rem;margin-top:0.25rem;">Simulador 112</div>
            <div style="font-size:0.78rem;color:#64748b;">${prog.simulador112 ? "Superado" : "Pendiente"}</div>
          </div>
        </div>

        <p style="font-size:0.92rem;color:#334155;font-style:italic;margin-bottom:1.25rem;">
          Lema de la misión: "${cat.lema}"
        </p>

        <div style="display:flex;justify-content:space-around;align-items:center;border-top:2px dashed #cbd5e1;padding-top:1rem;font-size:0.86rem;color:#475569;flex-wrap:wrap;gap:1rem;">
          <div>📅 Fecha: <strong>${fechaHoy}</strong></div>
          <div>🏅 Medallas en esta misión: <strong>${medallas} / 4</strong></div>
          <div>☎️ Emergencias: <strong>112 (Proteger · Avisar · Socorrer)</strong></div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // VISTA 3: ZONA DOCENTE / ADMIN (OCULTA AL PÚBLICO)
  // ==========================================================================
  function renderVistaDocente(cat) {
    const todas = Object.values(window.CATALOGO_CATASTROFES);
    const bloques = ["Todos", ...new Set(todas.map((c) => c.bloque))];
    const filtradas =
      estado.bloqueFiltro === "Todos" ? todas : todas.filter((c) => c.bloque === estado.bloqueFiltro);
    const urlSorteoDirecta = `${window.location.origin !== "null" ? window.location.origin : ""}${window.location.pathname}?catastrofe=${cat.id}&edad=${estado.edad}`;

    return `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h2 style="font-size:1.5rem;">👩‍🏫 Panel Oculto de Creadores y Zona Docente</h2>
          <p style="color:#475569;font-size:0.94rem;">El selector de catástrofes solo es visible aquí. En la pantalla principal únicamente se muestra la misión activa.</p>
        </div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          <button class="btn-secondary" id="btn-volver-desde-docente">⬅️ Ver Misión</button>
          <button class="btn-primary" id="btn-ocultar-docente" title="Ocultar el botón de Zona Docente y volver a la vista de alumnos">🔒 Guardar y salir a Vista Pública</button>
        </div>
      </div>

      <!-- CATÁLOGO VISUAL EXCLUSIVO PARA ADMIN -->
      <section class="catalog-section no-print" aria-label="Selector de Catástrofes (Solo Admin)">
        <div class="catalog-header">
          <div>
            <h2>🧭 Selector de Catástrofe Activa (${todas.length} misiones listas)</h2>
            <p style="font-size:0.84rem;color:#64748b;">Pulsa sobre cualquier catástrofe para dejarla activa en la pantalla principal.</p>
          </div>
          <div class="block-filters">
            ${bloques
              .map(
                (b) =>
                  `<button class="filter-chip ${estado.bloqueFiltro === b ? "active" : ""}" data-bloque="${b}">${b}</button>`
              )
              .join("")}
          </div>
        </div>
        <div class="catastrofe-grid">
          ${filtradas
            .map((c) => {
              const m = contarMedallas(c.id);
              return `
                <button class="cat-card ${c.id === cat.id ? "selected" : ""}" data-cat="${c.id}">
                  <span class="cat-icon">${c.icono}</span>
                  <div class="cat-info">
                    <span class="cat-block-tag">${c.bloque}</span>
                    <span class="cat-name" title="${c.nombre}">${c.nombreCorto}</span>
                    <span class="cat-medals-mini">${m === 4 ? "🏆 Completada" : `🏅 ${m}/4 medallas`}</span>
                  </div>
                </button>
              `;
            })
            .join("")}
        </div>
      </section>

      <div class="teacher-panel">
        <!-- COLUMNA 1: PANEL MODO SORTEO -->
        <div class="panel-card highlight-sorteo">
          <h3>🎯 Fijar Catástrofe del Sorteo o Elegir al Azar</h3>
          <p style="font-size:0.9rem;color:#78350f;margin-bottom:1rem;">
            Elige la catástrofe que os ha tocado o usa la ruleta. Al pulsar el botón verde, la web quedará lista mostrando solo esa misión.
          </p>

          <div class="form-group">
            <label for="select-catastrofe-sorteo">Catástrofe activa actualmente:</label>
            <select id="select-catastrofe-sorteo" class="form-control">
              ${todas
                .map(
                  (c) =>
                    `<option value="${c.id}" ${c.id === cat.id ? "selected" : ""}>${c.icono} [${c.bloque}] ${c.nombre}</option>`
                )
                .join("")}
            </select>
          </div>

          <div style="display:flex;gap:0.65rem;flex-wrap:wrap;margin-top:1rem;">
            <button class="btn-primary" id="btn-aplicar-sorteo">✅ Activar esta catástrofe y salir a la misión</button>
            <button class="btn-secondary" id="btn-ruleta-sorteo" title="Elegir una catástrofe al azar para practicar en clase">🎲 Ruleta aleatoria para el aula</button>
          </div>
          <div id="ruleta-resultado-msg" style="margin-top:0.6rem;font-size:0.88rem;font-weight:800;color:#b45309;display:none;"></div>

          <div style="margin-top:1.1rem;padding-top:0.9rem;border-top:1px dashed #d97706;font-size:0.82rem;color:#78350f;">
            <strong>🔗 Enlace público directo a esta misión (${cat.nombreCorto}):</strong>
            <input type="text" readonly class="form-control" value="${urlSorteoDirecta}" style="margin-top:0.35rem;font-size:0.78rem;background:#fff;" onclick="this.select()" />
            <div style="display:flex;align-items:center;gap:1rem;margin-top:0.85rem;background:#fff;padding:0.75rem;border-radius:12px;border:1px solid #fde68a;flex-wrap:wrap;">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=12&ecc=M&data=${encodeURIComponent(urlSorteoDirecta)}" alt="Código QR de la misión ${cat.nombreCorto}" style="width:110px;height:110px;border-radius:8px;border:1px solid #e2e8f0;" />
              <div style="flex:1;min-width:180px;">
                <strong style="display:block;color:#0f172a;font-size:0.88rem;margin-bottom:0.25rem;">📱 QR para el Cartel Escolar</strong>
                <p style="color:#475569;font-size:0.78rem;margin-bottom:0.5rem;">Escanea este QR con el móvil o descárgalo para imprimirlo y pegarlo en el cartel.</p>
                <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
                  <a href="cartel-exposicion.html?mision=${encodeURIComponent(cat.id)}" target="_blank" rel="noopener" class="btn-primary" style="font-size:0.76rem;padding:0.35rem 0.65rem;text-decoration:none;">🖼️ Abrir Cartel Completo con QR</a>
                  <a href="qr-mision-112.png" download="qr-mision-112.png" class="btn-secondary" style="font-size:0.76rem;padding:0.35rem 0.65rem;text-decoration:none;">⬇️ Solo QR (PNG)</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- COLUMNA 2: GUÍA DIDÁCTICA DE LA CATÁSTROFE ACTIVA -->
        <div class="panel-card">
          <h3>📚 Guía Didáctica: ${cat.icono} ${cat.nombreCorto}</h3>
          <p style="font-size:0.86rem;color:#64748b;margin-bottom:0.75rem;">
            Basada en el <em>Plan de Formación ante Emergencias de Protección Civil en Centros Educativos</em> (Primaria: 7-9 y 10-12 años).
          </p>

          <div style="margin-bottom:0.9rem;">
            <strong style="font-size:0.9rem;color:#0f172a;">🎯 Objetivos de aprendizaje:</strong>
            <ul style="padding-left:1.2rem;font-size:0.88rem;color:#334155;margin-top:0.25rem;">
              ${cat.guiaDocente.objetivos.map((o) => `<li>${o}</li>`).join("")}
            </ul>
          </div>

          <div style="background:#f0fdf4;border-left:4px solid #16a34a;padding:0.75rem;border-radius:0 10px 10px 0;margin-bottom:0.85rem;font-size:0.88rem;">
            <strong>🏫 Actividad práctica para el Aula:</strong><br/>
            ${cat.guiaDocente.actividadAula}
          </div>

          <div style="background:#eff6ff;border-left:4px solid #0284c7;padding:0.75rem;border-radius:0 10px 10px 0;font-size:0.88rem;">
            <strong>🏠 Misión en Familia (Hogar):</strong><br/>
            ${cat.guiaDocente.consejoFamilia}
          </div>
        </div>
      </div>

      <!-- FILA 2: ADAPTACIÓN POR EDAD + CREADOR RÁPIDO DE CATÁSTROFE -->
      <div class="teacher-panel" style="margin-top:1.5rem;">
        <div class="panel-card">
          <h3>🎂 Cómo adapta Misión 112 los dos niveles de edad</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.9rem;margin-top:0.75rem;font-size:0.88rem;">
            <div style="background:#f8fafc;padding:0.9rem;border-radius:12px;border:1px solid #e2e8f0;">
              <strong>🧒 Nivel 1: 7 a 9 años (Junior)</strong>
              <ul style="padding-left:1.1rem;margin-top:0.4rem;color:#334155;">
                <li>Frases cortas, directas y muy visuales.</li>
                <li>Menos elementos distractores en la mochila (6 objetos).</li>
                <li>3 tarjetas clave en Antes/Durante/Después.</li>
                <li>Enfoque en obedecer a adultos, no esconderse y reconocer el 112.</li>
              </ul>
            </div>
            <div style="background:#f8fafc;padding:0.9rem;border-radius:12px;border:1px solid #e2e8f0;">
              <strong>🧑 Nivel 2: 10 a 12 años (Senior)</strong>
              <ul style="padding-left:1.1rem;margin-top:0.4rem;color:#334155;">
                <li>Explicación del porqué científico y técnico de cada norma.</li>
                <li>8 objetos en la mochila con trampas sutiles.</li>
                <li>6 tarjetas completas en Antes/Durante/Después.</li>
                <li>Desmontaje de bulos, corte de suministros y autoprotección autónoma.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="panel-card">
          <h3>➕ ¿Os ha tocado otra catástrofe muy específica? Créala en 30 segundos</h3>
          <p style="font-size:0.85rem;color:#475569;margin-bottom:0.75rem;">
            Si os asignan una variante con otro nombre (por ejemplo: <em>Sequía extrema, Vendaval en el patio, Accidente en laboratorio</em>), puedes crear su ficha al instante tomando una base:
          </p>
          <div class="form-group">
            <label>Nombre de vuestra catástrofe asignada:</label>
            <input type="text" id="custom-cat-nombre" class="form-control" placeholder="Ej: Tormenta de Arena y Viento / Sequía..." />
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.65rem;">
            <div class="form-group">
              <label>Icono (Emoji):</label>
              <input type="text" id="custom-cat-icono" class="form-control" value="🚨" />
            </div>
            <div class="form-group">
              <label>Plantilla base de reglas:</label>
              <select id="custom-cat-base" class="form-control">
                ${todas.map((c) => `<option value="${c.id}">Basar en: ${c.nombreCorto}</option>`).join("")}
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Lema principal de la misión:</label>
            <input type="text" id="custom-cat-lema" class="form-control" placeholder="Ej: ¡Con calma y prevención, superamos la misión!" />
          </div>
          <button class="btn-primary" id="btn-crear-custom-cat">✨ Crear y activar esta catástrofe</button>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // EVENTOS INTERACTIVOS
  // ==========================================================================
  function enlazarEventosMision(cat) {
    const esJunior = estado.edad === "7-9";

    const btnDiplomaHero = document.getElementById("btn-ir-diploma-hero");
    if (btnDiplomaHero) {
      btnDiplomaHero.addEventListener("click", () => {
        estado.vistaActiva = "diploma";
        render();
      });
    }

    document.querySelectorAll("[data-juego]").forEach((btn) => {
      btn.addEventListener("click", () => {
        estado.juegoActivo = btn.dataset.juego;
        render();
      });
    });

    document.querySelectorAll("[data-next-game]").forEach((btn) => {
      btn.addEventListener("click", () => {
        estado.juegoActivo = btn.dataset.nextGame;
        render();
      });
    });

    // Eventos Juego 1: Mochila
    document.querySelectorAll("[data-item-id]").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.dataset.itemId;
        estado.mochilaVerificado = false;
        if (estado.mochilaSeleccion.includes(id)) {
          estado.mochilaSeleccion = estado.mochilaSeleccion.filter((x) => x !== id);
        } else {
          estado.mochilaSeleccion.push(id);
        }
        render();
      });
    });

    const btnLimpiarMochila = document.getElementById("btn-limpiar-mochila");
    if (btnLimpiarMochila) {
      btnLimpiarMochila.addEventListener("click", () => {
        estado.mochilaSeleccion = [];
        estado.mochilaVerificado = false;
        render();
      });
    }

    const btnReintentarMochila = document.getElementById("btn-reintentar-mochila");
    if (btnReintentarMochila) {
      btnReintentarMochila.addEventListener("click", () => {
        estado.mochilaVerificado = false;
        render();
      });
    }

    const btnComprobarMochila = document.getElementById("btn-comprobar-mochila");
    if (btnComprobarMochila) {
      btnComprobarMochila.addEventListener("click", () => {
        estado.mochilaVerificado = true;
        const items = obtenerItemsMochilaPorEdad(cat, esJunior);
        const aciertos = items.filter(
          (i) => (i.correcto && estado.mochilaSeleccion.includes(i.id)) || (!i.correcto && !estado.mochilaSeleccion.includes(i.id))
        ).length;
        if (aciertos === items.length) {
          obtenerProgresoCatastrofe(cat.id).mochila = true;
        }
        render();
      });
    }

    // Eventos Juego 2: Fases
    document.querySelectorAll("[data-fase-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        estado.fasesVerificado = false;
        estado.fasesSeleccion[btn.dataset.faseId] = btn.dataset.valor;
        render();
      });
    });

    const btnLimpiarFases = document.getElementById("btn-limpiar-fases");
    if (btnLimpiarFases) {
      btnLimpiarFases.addEventListener("click", () => {
        estado.fasesSeleccion = {};
        estado.fasesVerificado = false;
        render();
      });
    }

    const btnComprobarFases = document.getElementById("btn-comprobar-fases");
    if (btnComprobarFases) {
      btnComprobarFases.addEventListener("click", () => {
        estado.fasesVerificado = true;
        const fases = obtenerFasesPorEdad(cat, esJunior);
        const aciertos = fases.filter((f) => estado.fasesSeleccion[f.id] === f.fase).length;
        if (aciertos === fases.length) {
          obtenerProgresoCatastrofe(cat.id).fases = true;
        }
        render();
      });
    }

    // Eventos Juego 3: Radar
    document.querySelectorAll("[data-radar-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        estado.radarVerificado = false;
        estado.radarSeleccion[btn.dataset.radarId] = btn.dataset.safe === "true";
        render();
      });
    });

    const btnLimpiarRadar = document.getElementById("btn-limpiar-radar");
    if (btnLimpiarRadar) {
      btnLimpiarRadar.addEventListener("click", () => {
        estado.radarSeleccion = {};
        estado.radarVerificado = false;
        render();
      });
    }

    const btnComprobarRadar = document.getElementById("btn-comprobar-radar");
    if (btnComprobarRadar) {
      btnComprobarRadar.addEventListener("click", () => {
        estado.radarVerificado = true;
        const preguntas = obtenerRadarPorEdad(cat, esJunior);
        const aciertos = preguntas.filter((r) => estado.radarSeleccion[r.id] === r.esSeguro).length;
        if (aciertos === preguntas.length) {
          obtenerProgresoCatastrofe(cat.id).radar = true;
        }
        render();
      });
    }

    // Eventos Juego 4: Simulador 112
    document.querySelectorAll("[data-sim-step]").forEach((btn) => {
      btn.addEventListener("click", () => {
        estado.simVerificado = false;
        const step = Number(btn.dataset.simStep);
        const opt = Number(btn.dataset.simOpt);
        estado.simSeleccion[step] = opt;
        render();
      });
    });

    const btnLimpiarSim = document.getElementById("btn-limpiar-sim");
    if (btnLimpiarSim) {
      btnLimpiarSim.addEventListener("click", () => {
        estado.simSeleccion = {};
        estado.simVerificado = false;
        render();
      });
    }

    const btnComprobarSim = document.getElementById("btn-comprobar-sim");
    if (btnComprobarSim) {
      btnComprobarSim.addEventListener("click", () => {
        estado.simVerificado = true;
        const pasos = cat.simulador112.pasos;
        const aciertos = pasos.filter((paso, idx) => {
          const elegidaIdx = estado.simSeleccion[idx];
          return elegidaIdx !== undefined && paso.opciones[elegidaIdx] && paso.opciones[elegidaIdx].correcta;
        }).length;
        if (aciertos === pasos.length) {
          obtenerProgresoCatastrofe(cat.id).simulador112 = true;
        }
        render();
      });
    }

    const btnVerDiplomaFinal = document.getElementById("btn-ver-diploma-final");
    if (btnVerDiplomaFinal) {
      btnVerDiplomaFinal.addEventListener("click", () => {
        estado.vistaActiva = "diploma";
        render();
      });
    }
  }

  function enlazarEventosDiploma() {
    const btnVolver = document.getElementById("btn-volver-mision");
    if (btnVolver) {
      btnVolver.addEventListener("click", () => {
        estado.vistaActiva = "mision";
        render();
      });
    }
    const btnImprimir = document.getElementById("btn-imprimir-diploma");
    if (btnImprimir) {
      btnImprimir.addEventListener("click", () => {
        window.print();
      });
    }
  }

  function enlazarEventosDocente() {
    document.querySelectorAll("[data-bloque]").forEach((btn) => {
      btn.addEventListener("click", () => {
        estado.bloqueFiltro = btn.dataset.bloque;
        render();
      });
    });

    document.querySelectorAll("[data-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        estado.catastrofeActiva = btn.dataset.cat;
        reiniciarIntentoJuegoActual();
        render();
      });
    });

    const btnVolver = document.getElementById("btn-volver-desde-docente");
    if (btnVolver) {
      btnVolver.addEventListener("click", () => {
        estado.vistaActiva = "mision";
        render();
      });
    }

    const btnOcultar = document.getElementById("btn-ocultar-docente");
    if (btnOcultar) {
      btnOcultar.addEventListener("click", () => {
        estado.modoCreador = false;
        estado.vistaActiva = "mision";
        render();
      });
    }

    const selectSorteo = document.getElementById("select-catastrofe-sorteo");
    if (selectSorteo) {
      selectSorteo.addEventListener("change", () => {
        estado.catastrofeActiva = selectSorteo.value;
        reiniciarIntentoJuegoActual();
        render();
      });
    }

    const btnAplicarSorteo = document.getElementById("btn-aplicar-sorteo");
    if (btnAplicarSorteo) {
      btnAplicarSorteo.addEventListener("click", () => {
        const sel = document.getElementById("select-catastrofe-sorteo");
        if (sel) estado.catastrofeActiva = sel.value;
        estado.modoCreador = false;
        estado.vistaActiva = "mision";
        reiniciarIntentoJuegoActual();
        render();
      });
    }

    const btnRuletaSorteo = document.getElementById("btn-ruleta-sorteo");
    if (btnRuletaSorteo) {
      btnRuletaSorteo.addEventListener("click", () => {
        const todasIds = Object.keys(window.CATALOGO_CATASTROFES);
        const candidatas = todasIds.length > 1 ? todasIds.filter((id) => id !== estado.catastrofeActiva) : todasIds;
        const azarId = candidatas[Math.floor(Math.random() * candidatas.length)];
        estado.catastrofeActiva = azarId;
        reiniciarIntentoJuegoActual();
        render();
        const msg = document.getElementById("ruleta-resultado-msg");
        const elegida = window.CATALOGO_CATASTROFES[azarId];
        if (msg && elegida) {
          msg.style.display = "block";
          msg.textContent = `🎉 ¡La ruleta ha elegido: ${elegida.icono} ${elegida.nombre}!`;
        }
      });
    }

    const btnCrearCustom = document.getElementById("btn-crear-custom-cat");
    if (btnCrearCustom) {
      btnCrearCustom.addEventListener("click", () => {
        const nombreInput = document.getElementById("custom-cat-nombre");
        const iconoInput = document.getElementById("custom-cat-icono");
        const baseSelect = document.getElementById("custom-cat-base");
        const lemaInput = document.getElementById("custom-cat-lema");

        const nombre = (nombreInput ? nombreInput.value : "").trim();
        if (!nombre) {
          alert("Escribe el nombre de la catástrofe asignada.");
          return;
        }
        const baseId = baseSelect ? baseSelect.value : "inundaciones";
        const plantilla = JSON.parse(JSON.stringify(window.CATALOGO_CATASTROFES[baseId]));
        const nuevoId = "custom_" + Date.now();

        plantilla.id = nuevoId;
        plantilla.nombre = nombre;
        plantilla.nombreCorto = nombre.slice(0, 22);
        plantilla.icono = (iconoInput && iconoInput.value.trim()) || "🚨";
        if (lemaInput && lemaInput.value.trim()) {
          plantilla.lema = lemaInput.value.trim();
        }

        window.CATALOGO_CATASTROFES[nuevoId] = plantilla;
        try {
          const guardadas = JSON.parse(localStorage.getItem(CUSTOM_CATS_KEY) || "{}");
          guardadas[nuevoId] = plantilla;
          localStorage.setItem(CUSTOM_CATS_KEY, JSON.stringify(guardadas));
        } catch (e) {
          // Ignorar
        }

        estado.catastrofeActiva = nuevoId;
        estado.modoCreador = false;
        estado.vistaActiva = "mision";
        reiniciarIntentoJuegoActual();
        render();
      });
    }
  }

  function escaparHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Inicialización al cargar el DOM
  document.addEventListener("DOMContentLoaded", () => {
    cargarEstadoGuardado();

    const inputNombre = document.getElementById("agent-name-input");
    if (inputNombre) {
      inputNombre.addEventListener("input", (e) => {
        estado.nombreAgente = e.target.value;
        guardarEstado();
      });
    }

    document.querySelectorAll(".age-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        estado.edad = btn.dataset.age;
        render();
      });
    });

    // Acceso oculto 1: 3 clics seguidos en el logo 🚨 112
    let clicsLogo = 0;
    let temporizadorLogo = null;
    document.getElementById("brand-home").addEventListener("click", () => {
      clicsLogo += 1;
      if (temporizadorLogo) clearTimeout(temporizadorLogo);
      if (clicsLogo >= 3) {
        clicsLogo = 0;
        estado.modoCreador = true;
        estado.vistaActiva = "docente";
        render();
        return;
      }
      temporizadorLogo = setTimeout(() => {
        clicsLogo = 0;
      }, 2500);
    });

    // Acceso oculto 2: escribir #admin en la URL sin recargar
    window.addEventListener("hashchange", () => {
      const h = (window.location.hash || "").toLowerCase();
      if (h.includes("admin") || h.includes("docente")) {
        estado.modoCreador = true;
        estado.vistaActiva = "docente";
        render();
      }
    });

    // Acceso oculto 3: atajo de teclado Alt + A
    window.addEventListener("keydown", (e) => {
      if (e.altKey && (e.key === "a" || e.key === "A")) {
        e.preventDefault();
        estado.modoCreador = true;
        estado.vistaActiva = "docente";
        render();
      }
    });

    document.getElementById("nav-mision").addEventListener("click", () => {
      estado.vistaActiva = "mision";
      render();
    });

    document.getElementById("nav-diploma").addEventListener("click", () => {
      estado.vistaActiva = "diploma";
      render();
    });

    document.getElementById("nav-docente").addEventListener("click", () => {
      estado.vistaActiva = "docente";
      render();
    });

    render();
  });
})();
