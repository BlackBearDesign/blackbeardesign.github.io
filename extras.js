/* BlackBear extras: fix del header, idioma ES/EN, WhatsApp, antispam, preview en hover.
   Se carga en index.html y categories.html */
(function () {
  var WA_NUMBER = "522211319056"; // sin + ni espacios

  /* ---------- 1. FIX HEADER (link activo invisible sobre blanco) ---------- */
  var nav = document.querySelector('.unslate_co--site-nav');
  function syncNav() {
    if (!nav) return;
    var m = getComputedStyle(nav).backgroundColor.match(/[\d.]+/g) || [];
    var light = m.length >= 3 && (m[3] === undefined || parseFloat(m[3]) > 0.5) &&
                +m[0] > 200 && +m[1] > 200 && +m[2] > 200;
    nav.classList.toggle('on-light', light);
  }
  ['scroll', 'resize', 'load'].forEach(function (ev) { window.addEventListener(ev, function () { syncNav(); setTimeout(syncNav, 350); }); });
  syncNav();

  /* ---------- 2. IDIOMA ES / EN ---------- */
  var ES = {
    "Home": "Inicio", "Portfolio": "Portafolio", "About": "Sobre mí", "Services": "Servicios",
    "Skills": "Resultados", "Results": "Resultados", "Testimonial": "Testimonios", "Journal": "Diario", "Contact": "Contacto",
    "View my work": "Ver mi trabajo", "Get a quote": "Cotizar mi proyecto",
    "Video Category": "Categorías de video", "Back to Portfolio": "Volver al portafolio",
    "Project Description": "Descripción", "Project Date": "Fecha", "Client": "Cliente",
    "About Me": "Sobre mí", "We can make it together": "Hagámoslo juntos",
    "I am a versatile video editor focused on client satisfaction. I adapt to any project type, ensuring the final result perfectly matches your vision. We make it happen together.": "Soy un editor de video versátil enfocado en la satisfacción del cliente. Me adapto a cualquier tipo de proyecto para que el resultado final coincida con tu visión. Lo hacemos realidad juntos.",
    "Expert in Premiere, After Effects, and AI-driven workflows. As a freelancer, I deliver high-quality visual content by combining technical precision with the full power of the Adobe Creative Cloud.": "Experto en Premiere, After Effects y flujos de trabajo con IA. Como freelancer, entrego contenido visual de alta calidad combinando precisión técnica con todo el poder de Adobe Creative Cloud.",
    "Download my CV": "Descargar mi CV",
    "My Services": "Mis servicios",
    "Professional": "Edición", "Video Editing": "de Video Profesional",
    "Narrative and commercial editing for any format. I transform raw footage into high-impact pieces that meet your goals.": "Edición narrativa y comercial para cualquier formato. Convierto material en bruto en piezas de alto impacto que cumplen tus objetivos.",
    "Advanced animations and visual effects. I bring dynamism and a professional edge to your projects through motion.": "Animaciones avanzadas y efectos visuales. Le doy dinamismo y un acabado profesional a tus proyectos a través del movimiento.",
    "Social Media": "Contenido para", "Content": "Redes Sociales",
    "Videos optimized for TikTok, Reels, and Shorts. Fast, dynamic editing designed specifically to grab attention online.": "Videos optimizados para TikTok, Reels y Shorts. Edición rápida y dinámica pensada para captar la atención en línea.",
    "Full": "Postproducción", "Post-Production": "Completa",
    "Professional color grading and audio cleaning. I ensure every delivery has a flawless technical finish in both image and sound.": "Corrección de color y limpieza de audio profesionales. Cada entrega tiene un acabado técnico impecable en imagen y sonido.",
    "Visual Asset": "Diseño de", "Design": "Recursos Visuales",
    "Graphic elements, covers, and visual resources. I use design tools to complement and enhance your video's aesthetic.": "Elementos gráficos, portadas y recursos visuales. Uso herramientas de diseño para complementar y realzar la estética de tu video.",
    "AI-Powered": "Soluciones", "Solutions": "con IA",
    "Integrating AI tools into the workflow. Process optimization and innovative effects for truly unique results.": "Integro herramientas de IA en el flujo de trabajo. Procesos optimizados y efectos innovadores para resultados únicos.",
    "How I Work": "Cómo trabajo",
    "Brief": "Brief", "You tell me your idea, references and deadline.": "Me cuentas tu idea, referencias y fecha de entrega.",
    "First Cut": "Primer corte", "I deliver a first version for you to review.": "Te entrego una primera versión para revisar.",
    "Revisions": "Revisiones", "We adjust together until it is exactly what you imagined.": "Ajustamos juntos hasta que quede exactamente como lo imaginaste.",
    "Delivery": "Entrega", "Final files in the formats you need, ready to publish.": "Archivos finales en los formatos que necesites, listos para publicar.",
    "Videos delivered": "Videos entregados", "Happy clients": "Clientes felices", "Years of experience": "Años de experiencia", "Client satisfaction": "Satisfacción del cliente",
    "My Happy Clients": "Clientes felices", "My Journal": "Mi diario", "Get In Touch": "Contáctame",
    "Name": "Nombre", "Email (Optional)": "Correo (opcional)", "Phone (Optional)": "Teléfono (opcional)",
    "Write your message...": "Escribe tu mensaje...", "Email": "Correo", "Phone": "Teléfono",
    "* Please provide at least an email or a phone number.": "* Indica al menos un correo o un teléfono.",
    "🚀 Sending...": "🚀 Enviando...", "✓ Message sent!": "✓ ¡Mensaje enviado!",
    "BlackBear. All rights reserved.": "BlackBear. Todos los derechos reservados.",
    "Copyright © 2026 BlackBear. All rights reserved.": "Copyright © 2026 BlackBear. Todos los derechos reservados.",
    "Scroll": "Desliza",
    /* categories.html */
    "VIDEO CATEGORIES": "CATEGORÍAS DE VIDEO", "Select a category to filter my work": "Elige una categoría para filtrar mi trabajo",
    "Back to Categories": "Volver a categorías", "Back to Category Grid": "Volver a la categoría",
    "Description": "Descripción", "Date": "Fecha", "// BACK TO HOME //": "// VOLVER AL INICIO //",
    /* blog-single.html */
    "← PREVIOUS POST": "← ENTRADA ANTERIOR", "NEXT POST →": "SIGUIENTE ENTRADA →",
    "Leave a comment": "Deja un comentario", "Name *": "Nombre *", "Message *": "Mensaje *",
    /* order.html */
    "Synchronizing with studio...": "Sincronizando con el estudio...", "Project Title": "Título del proyecto",
    "Preview (Demo)": "Vista previa (Demo)", "Production in Progress": "Producción en curso",
    "Your project is currently being edited in queue order. You will receive a notification when the preview is ready for review.": "Tu proyecto se está editando por orden de llegada. Recibirás una notificación cuando la vista previa esté lista para revisión.",
    "Status": "Estado", "AVAILABLE:": "DISPONIBLES:", "NO REVISIONS LEFT": "NO QUEDAN REVISIONES",
    "REQUEST EXTRA REVISION": "SOLICITAR REVISIÓN EXTRA", "✓ Request sent via email": "✓ Solicitud enviada por correo",
    "Check your inbox for confirmation": "Revisa tu bandeja para la confirmación", "Total Investment": "Inversión total",
    "Loading agreement...": "Cargando acuerdo...", "Scroll down to read all terms": "Desplázate para leer todos los términos",
    "Terms read completely": "Términos leídos por completo", "I ACCEPT THE TERMS AND CONDITIONS": "ACEPTO LOS TÉRMINOS Y CONDICIONES",
    "Upload payment proof (PNG/JPG)": "Sube tu comprobante de pago (PNG/JPG)", "SUBMIT PAYMENT": "ENVIAR PAGO",
    "PAYMENT PROOF SENT": "COMPROBANTE ENVIADO", "Projects are handled in order of request.": "Los proyectos se atienden por orden de solicitud.",
    "WAITING FOR": "EN ESPERA DE", "ADMINISTRATOR": "LA VERIFICACIÓN DEL", "VERIFICATION.": "ADMINISTRADOR.",
    "REQUEST PROJECT START": "SOLICITAR INICIO DEL PROYECTO",
    "Projects are produced in order of request. Legacy clients receive priority queue placement.": "Los proyectos se producen por orden de solicitud. Los clientes Legacy tienen prioridad en la cola.",
    "REQUEST CHANGES": "SOLICITAR CAMBIOS", "No revisions available. Please request an extra revision.": "No hay revisiones disponibles. Solicita una revisión extra.",
    "Describe the changes needed": "Describe los cambios necesarios", "SEND REQUEST": "ENVIAR SOLICITUD", "✓ Changes requested!": "✓ ¡Cambios solicitados!",
    "ACCEPT VIDEO": "ACEPTAR VIDEO", "Final Payment Required": "Pago final requerido",
    "Upload the second payment proof. Administrator verification required to unlock master file.": "Sube el segundo comprobante de pago. Se requiere verificación del administrador para liberar el archivo maestro.",
    "Upload second payment proof": "Sube el segundo comprobante de pago", "SUBMIT FINAL PAYMENT": "ENVIAR PAGO FINAL", "FINAL PAYMENT SENT": "PAGO FINAL ENVIADO",
    "Optional Payment": "Pago opcional", "Submit your payment proof when ready.": "Envía tu comprobante de pago cuando estés listo.",
    "Upload payment proof": "Sube tu comprobante de pago", "PAYMENT SENT": "PAGO ENVIADO",
    "Binance Payment Details": "Datos de pago Binance", "Nickname:": "Alias:", "GO TO BINANCE PAY": "IR A BINANCE PAY", "CLOSE": "CERRAR",
    "DOWNLOAD VIDEO": "DESCARGAR VIDEO", "LEAVE A REVIEW": "DEJAR UNA RESEÑA", "✓ THANK YOU FOR YOUR REVIEW": "✓ GRACIAS POR TU RESEÑA",
    "Share your experience": "Comparte tu experiencia", "SUBMIT REVIEW": "ENVIAR RESEÑA", "✓ Thank you!": "✓ ¡Gracias!",
    "Your Name": "Tu nombre", "Your Country": "Tu país", "Tell us about your experience...": "Cuéntanos tu experiencia...",
    "Describe in detail what changes you need...": "Describe en detalle los cambios que necesitas...",
    "AWAITING PAYMENT": "ESPERANDO PAGO", "REQUEST PROJECT": "SOLICITAR PROYECTO", "IN PRODUCTION": "EN PRODUCCIÓN",
    "UNDER REVIEW": "EN REVISIÓN", "COMPLETED": "COMPLETADO", "No description available.": "Sin descripción disponible.",
    "ORDER ID REQUIRED": "SE REQUIERE EL ID DEL PEDIDO", "ORDER NOT FOUND": "PEDIDO NO ENCONTRADO", "CONNECTION ERROR": "ERROR DE CONEXIÓN",
    "SENDING...": "ENVIANDO...", "STARTING PRODUCTION...": "INICIANDO PRODUCCIÓN...", "COMPLETING ORDER...": "COMPLETANDO PEDIDO..."
  };
  var PAT = [[/^ORDER FOR (.+)$/, 'PEDIDO DE $1'], [/^FILE: (.+)$/, 'ARCHIVO: $1']];
  /* Textos que ya están en español en la página (ej. modales de banco): se pasan a inglés si el visitante está en EN */
  var EN = {
    "🏦 Transferencia Interbancaria México": "🏦 Mexico Bank Transfer", "CLABE Interbancaria:": "Interbank CLABE:",
    "Banco:": "Bank:", "Titular:": "Account holder:", "COPIAR CLABE": "COPY CLABE", "COPIAR IBAN": "COPY IBAN",
    "✓ Copiado al portapapeles": "✓ Copied to clipboard", "CERRAR": "CLOSE",
    "🇪🇸 Transferencia IBAN España": "🇪🇸 Spain IBAN Transfer", "TRANSFER MÉXICO": "MEXICO TRANSFER",
    "IBAN ESPAÑA": "IBAN SPAIN", "🇪🇸 IBAN ESPAÑA": "🇪🇸 IBAN SPAIN", "MÉXICO": "MEXICO"
  };
  var orig = new WeakMap(), lang = 'en';
  var BTN_ES = "Enviar mensaje", btnOrig = null;

  function walk(root, fn) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        var inContract = n.parentNode.closest && n.parentNode.closest('.contract-box');
        return (p === 'SCRIPT' || p === 'STYLE' || inContract || !n.nodeValue.trim()) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var n; while ((n = w.nextNode())) fn(n);
  }
  function translateDom(l) {
    walk(document.body, function (n) {
      var base = orig.has(n) ? orig.get(n) : n.nodeValue;
      var key = base.replace(/\s+/g, ' ').trim();
      var es = ES[key];
      if (!es) for (var i = 0; i < PAT.length; i++) { if (PAT[i][0].test(key)) { es = key.replace(PAT[i][0], PAT[i][1]); break; } }
      var tgt = (l === 'es') ? es : EN[key];
      if (tgt) {
        if (!orig.has(n)) orig.set(n, base);
        n.nodeValue = base.match(/^\s*/)[0] + tgt + base.match(/\s*$/)[0];
      } else if (orig.has(n)) {
        n.nodeValue = orig.get(n);
      }
    });
    document.querySelectorAll('[placeholder]').forEach(function (el) {
      if (!el.dataset.bbPh) el.dataset.bbPh = el.getAttribute('placeholder');
      el.setAttribute('placeholder', (l === 'es' && ES[el.dataset.bbPh]) ? ES[el.dataset.bbPh] : el.dataset.bbPh);
    });
  }
  function applyLang(l) {
    lang = l; window.bbLang = l;
    document.documentElement.lang = l;
    translateDom(l);
    [['contactSubmitBtn', 'Enviar mensaje'], ['submitBtn', 'Publicar comentario']].forEach(function (b) {
      var el = document.getElementById(b[0]); if (!el) return;
      if (!el.dataset.bbOrig) el.dataset.bbOrig = el.value;
      el.value = l === 'es' ? b[1] : el.dataset.bbOrig;
    });
    var t = document.querySelector('.lang-toggle'); if (t) t.textContent = l === 'es' ? 'EN' : 'ES';
    try { localStorage.setItem('bb_lang', l); } catch (e) {}
    window.dispatchEvent(new Event('bb-lang'));
  }

  /* ---------- 3. Botones flotantes (se inyectan solos) ---------- */
  function build() {
    var t = document.createElement('button');
    t.className = 'lang-toggle'; t.type = 'button'; t.setAttribute('aria-label', 'Change language');
    t.onclick = function () { applyLang(lang === 'es' ? 'en' : 'es'); updateWA(); };
    document.body.appendChild(t);

    var wa = document.createElement('a');
    wa.className = 'wa-float'; wa.target = '_blank'; wa.rel = 'noopener'; wa.setAttribute('aria-label', 'WhatsApp');
    wa.innerHTML = '<svg viewBox="0 0 32 32"><path d="M16 4C9.4 4 4 8.5 4 14c0 3 1.6 5.6 4.1 7.4L7 27l5.2-2.6c1.200.3 2.500.5 3.800.5 6.600 0 12-4.500 12-10S22.600 4 16 4z"/></svg>';
    document.body.appendChild(wa);
    window.updateWA = function () {
      var msg = lang === 'es' ? 'Hola, vi tu portafolio y me gustaría cotizar un proyecto.' : 'Hi, I saw your portfolio and I would like to get a quote for a project.';
      wa.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
    };
  }

  /* ---------- 4. Antispam (honeypot) ---------- */
  function honeypot() {
    var f = document.getElementById('contactFormMain'); if (!f) return;
    var hp = document.createElement('input');
    hp.type = 'text'; hp.name = 'website'; hp.tabIndex = -1; hp.autocomplete = 'off';
    hp.setAttribute('aria-hidden', 'true'); hp.style.cssText = 'position:absolute;left:-9999px;opacity:0;height:0;width:0;';
    f.appendChild(hp);
    f.addEventListener('submit', function (e) {
      if (hp.value) { e.preventDefault(); e.stopImmediatePropagation(); }
    }, true);
  }

  /* ---------- 5. Preview de video al pasar el mouse ----------
     Requiere una columna opcional "PreviewURL" (mp4 corto) en tu Google Sheet */
  document.addEventListener('mouseover', function (e) {
    var a = e.target.closest && e.target.closest('.portfolio-item');
    if (!a || a.querySelector('.hv-preview')) return;
    var m = (a.getAttribute('onclick') || '').match(/openProject\('([^']+)'\)/); if (!m) return;
    var list = window.portfolioItems || (typeof allItems !== 'undefined' ? allItems : []);
    var it = list.find(function (x) { return x.ID == m[1]; });
    if (!it || !it.PreviewURL) return;
    var v = document.createElement('video');
    v.className = 'hv-preview'; v.src = it.PreviewURL; v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
    a.appendChild(v); var p = v.play(); if (p && p.catch) p.catch(function () {});
  });
  document.addEventListener('mouseout', function (e) {
    var a = e.target.closest && e.target.closest('.portfolio-item');
    if (a && !a.contains(e.relatedTarget)) { var v = a.querySelector('.hv-preview'); if (v) v.remove(); }
  });

  /* ---------- Traductor global EN->ES (window.bbTr) ---------- */
  function hash(str) { var h = 0; for (var i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0; return h; }
  function decode(t) { var x = document.createElement('textarea'); x.innerHTML = t; return x.value; }
  function chunks(text) {
    var out = [], cur = '';
    (text.match(/[^.!?]+[.!?]*\s*/g) || [text]).forEach(function (sn) {
      if ((cur + sn).length > 450 && cur) { out.push(cur); cur = ''; }
      while (sn.length > 450) { out.push(sn.slice(0, 450)); sn = sn.slice(450); }
      cur += sn;
    });
    if (cur) out.push(cur);
    return out;
  }
  window.bbTr = async function (text) {
    if (!text || !String(text).trim()) return text;
    var key = 'bb_tr_' + hash(text);
    try { var c = localStorage.getItem(key); if (c) return c; } catch (e) {}
    try {
      var parts = [], cs = chunks(text);
      for (var i = 0; i < cs.length; i++) {
        var r = await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(cs[i]) + '&langpair=en|es&de=maximolairdesign@gmail.com');
        var jn = await r.json();
        var t = jn && jn.responseData && jn.responseData.translatedText;
        if (!t || jn.responseStatus != 200 || /MYMEMORY WARNING/i.test(t)) return text;
        parts.push(decode(t).trim());
      }
      var res = parts.join(' ');
      try { localStorage.setItem(key, res); } catch (e) {}
      return res;
    } catch (e) { return text; }
  };

  /* ---------- Páginas con contenido dinámico (data-bb-observe) ---------- */
  if (document.body.hasAttribute('data-bb-observe')) {
    var tmr;
    new MutationObserver(function () {
      clearTimeout(tmr);
      tmr = setTimeout(function () { if (lang === 'es') translateDom('es'); }, 120);
    }).observe(document.body, { childList: true, subtree: true });
  }

  /* ---------- Inicio ---------- */
  build(); honeypot();
  if (document.body.hasAttribute('data-bb-nowa')) { var w = document.querySelector('.wa-float'); if (w) w.remove(); }
  var saved = null; try { saved = localStorage.getItem('bb_lang'); } catch (e) {}
  applyLang(saved || ((navigator.language || '').toLowerCase().indexOf('es') === 0 ? 'es' : 'en'));
  updateWA();
})();
