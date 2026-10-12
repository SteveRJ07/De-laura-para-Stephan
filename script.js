/* ================================================================= */
/*  PRESENTE DE ANIVERSÁRIO PARA STEPHAN - Script Principal         */
/*  Tema: Masculino Elegante (Preto Profundo + Dourado #C99B55)        */
/*  Layout Paginado (6 Páginas) com Gestos e Animações Fluidas         */
/* ================================================================= */

// ============================================================
//  ESTADO GLOBAL
// ============================================================
let currentPage = 1;
const totalPages = 6;
let isAnimating = false;
let musicPlaying = false;
let envelopeOpened = false;
let celebrated = false;

// Qualidades para a Página 4 com mensagens românticas personalizadas
const qualidades = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    title: "Generosidade",
    message: "Admiro a tua forma única de cuidar de todos ao teu redor, entregando sempre o teu melhor sem esperar nada em troca."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
    title: "Determinação",
    message: "A tua garra e coragem para perseguir cada um dos teus objetivos inspiram-me a crescer e ser melhor todos os dias."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3c-1.5 3-4 6-7 7 3 1 5.5 4 7 7 1.5-3 4-6 7-7-3-1-5.5-4-7-7z"/><path d="M12 17v4M5 10H1M23 10h-4"/></svg>`,
    title: "Humildade",
    message: "Mesmo com todas as tuas conquistas e talentos, manténs um coração simples, nobre e incrivelmente acolhedor."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: "Respeito",
    message: "A forma carinhosa, atenciosa e leal como me tratas e valorizas todas as pessoas que amas ao teu redor."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    title: "Carinho",
    message: "Os teus abraços quentes, os teus beijos e os pequenos gestos diários que transformam qualquer momento num instante mágico."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"/></svg>`,
    title: "Inteligência",
    message: "A tua mente brilhante, sabedoria para me aconselhar e a visão incrível que tens para o nosso futuro juntos."
  }
];

// ============================================================
//  INICIALIZAÇÃO QUANDO O DOM ESTIVER PRONTO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initTopBar();
  renderQualidades();
  initDotsNavigation();
  initTouchGestures();
  initKeyboardNavigation();
  createSparkles();
  updateNavigationState();
  initImagePlaceholders();
  initAudioVolume();
});

function initAudioVolume() {
  const audio = document.getElementById("bg-music");
  if (audio) {
    audio.volume = 0.08;
  }
}

// ============================================================
//  TOP BAR & NAVEGAÇÃO DE PÁGINAS
// ============================================================
function initTopBar() {
  const topBar = document.getElementById("top-bar");
  if (topBar) {
    topBar.classList.add("visible");
  }
}

function updateNavigationState() {
  // Atualiza contador de página
  const counter = document.getElementById("page-counter");
  const backBtn = document.getElementById("back-btn");

  if (counter) {
    counter.textContent = `${currentPage} / ${totalPages}`;
    if (currentPage > 1) {
      counter.classList.add("show");
    } else {
      counter.classList.remove("show");
    }
  }

  if (backBtn) {
    if (currentPage > 1) {
      backBtn.classList.add("show");
    } else {
      backBtn.classList.remove("show");
    }
  }

  // Atualiza botões de navegação no rodapé
  const prevArrow = document.getElementById("nav-prev");
  const nextArrow = document.getElementById("nav-next");

  if (prevArrow) {
    if (currentPage <= 1) {
      prevArrow.classList.add("disabled");
    } else {
      prevArrow.classList.remove("disabled");
    }
  }

  if (nextArrow) {
    if (currentPage >= totalPages) {
      nextArrow.classList.add("disabled");
    } else {
      nextArrow.classList.remove("disabled");
    }
  }

  // Atualiza dots indicadores
  const dots = document.querySelectorAll(".nav-dot");
  dots.forEach((dot, index) => {
    if (index + 1 === currentPage) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function goToPage(targetPage) {
  if (targetPage < 1 || targetPage > totalPages || targetPage === currentPage || isAnimating) {
    return;
  }

  isAnimating = true;
  const isForward = targetPage > currentPage;
  const oldPage = document.getElementById(`page-${currentPage}`);
  const newPage = document.getElementById(`page-${targetPage}`);

  if (oldPage && newPage) {
    oldPage.classList.remove("active");
    if (isForward) {
      oldPage.classList.add("exit-left");
    } else {
      oldPage.classList.add("exit-right");
    }

    newPage.classList.remove("exit-left", "exit-right");
    newPage.classList.add("active");

    setTimeout(() => {
      oldPage.classList.remove("exit-left", "exit-right");
      isAnimating = false;
    }, 600);
  } else {
    isAnimating = false;
  }

  currentPage = targetPage;
  updateNavigationState();

  if (newPage) {
    newPage.scrollTop = 0;
  }

  if (currentPage > 1 && !musicPlaying) {
    tryPlayMusicOnFirstInteraction();
  }
}

function goToNextPage() {
  if (currentPage < totalPages) {
    goToPage(currentPage + 1);
  }
}

function goToPrevPage() {
  if (currentPage > 1) {
    goToPage(currentPage - 1);
  }
}

function initDotsNavigation() {
  const dots = document.querySelectorAll(".nav-dot");
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const page = parseInt(dot.getAttribute("data-page"), 10);
      if (page) goToPage(page);
    });
  });
}

// ============================================================
//  GESTOS DE TOQUE (SWIPE MOBILE) E TECLADO
// ============================================================
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function initTouchGestures() {
  const container = document.getElementById("pages-container");
  if (!container) return;

  container.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    },
    { passive: true }
  );

  container.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipeGesture();
    },
    { passive: true }
  );
}

function handleSwipeGesture() {
  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;

  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
    if (diffX < 0) {
      goToNextPage();
    } else {
      goToPrevPage();
    }
  }
}

function initKeyboardNavigation() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "PageDown") {
      goToNextPage();
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      goToPrevPage();
    }
  });
}

// ============================================================
//  ÁUDIO / MÚSICA DE FUNDO (VOLUME FIXADO EM 8%)
// ============================================================
function toggleMusic() {
  const audio = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const iconOn = document.getElementById("music-icon-on");
  const iconOff = document.getElementById("music-icon-off");

  if (!audio) return;

  audio.volume = 0.08; // 8% de volume

  if (musicPlaying) {
    audio.pause();
    musicPlaying = false;
    if (musicBtn) musicBtn.classList.remove("playing");
    if (iconOn) iconOn.style.display = "none";
    if (iconOff) iconOff.style.display = "block";
  } else {
    audio.play().then(() => {
      musicPlaying = true;
      if (musicBtn) musicBtn.classList.add("playing");
      if (iconOn) iconOn.style.display = "block";
      if (iconOff) iconOff.style.display = "none";
    }).catch(() => {
      console.log("Autoplay bloqueado pelo navegador.");
    });
  }
}

function tryPlayMusicOnFirstInteraction() {
  const audio = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const iconOn = document.getElementById("music-icon-on");
  const iconOff = document.getElementById("music-icon-off");

  if (audio && !musicPlaying) {
    audio.volume = 0.08; // 8% de volume
    audio.play().then(() => {
      musicPlaying = true;
      if (musicBtn) musicBtn.classList.add("playing");
      if (iconOn) iconOn.style.display = "block";
      if (iconOff) iconOff.style.display = "none";
    }).catch(() => {});
  }
}

// ============================================================
//  PÁGINA 2: ABERTURA DO ENVELOPE
// ============================================================
function openEnvelope() {
  const wrapper = document.getElementById("envelope-wrapper");
  const label = document.getElementById("btn-carta-label");
  if (!wrapper) return;

  const isOpen = wrapper.classList.contains("open");
  if (!isOpen) {
    wrapper.classList.add("open");
    envelopeOpened = true;
    if (label) label.textContent = "FECHAR CARTA";
    createWaxSealParticles(wrapper);
  } else {
    wrapper.classList.remove("open");
    if (label) label.textContent = "ABRIR CARTA";
  }
}

function createWaxSealParticles(targetElement) {
  const rect = targetElement.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 24; i++) {
    const p = document.createElement("div");
    p.className = "confetti-piece";
    const angle = (Math.PI * 2 * i) / 24;
    const distance = 40 + Math.random() * 80;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const size = 3 + Math.random() * 5;

    p.style.cssText = `
      left: ${centerX}px;
      top: ${centerY}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: radial-gradient(circle, #E8C97A, #C99B55);
      --dx: ${dx}px;
      --dy: ${dy}px;
      --rz: ${Math.random() * 360}deg;
      --fall-duration: ${0.8 + Math.random() * 0.6}s;
      box-shadow: 0 0 10px rgba(201, 155, 85, 0.6);
    `;

    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1500);
  }
}

// ============================================================
//  PÁGINA 4: RENDERIZAÇÃO DAS QUALIDADES (FLIP CARD INTERATIVO)
// ============================================================
function renderQualidades() {
  const grid = document.getElementById("qualidades-grid");
  if (!grid) return;

  grid.innerHTML = "";
  qualidades.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "qualidade-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Qualidade: ${item.title}. Clique para revelar.`);
    card.style.animationDelay = `${0.1 + index * 0.08}s`;

    card.innerHTML = `
      <div class="qualidade-card-inner">
        <div class="qualidade-card-front">
          <div class="qualidade-icon">${item.icon}</div>
          <div class="qualidade-label">${item.title}</div>
          <div class="qualidade-tap-hint">Toque para ver ✨</div>
        </div>
        <div class="qualidade-card-back">
          <div class="qualidade-back-title">${item.title}</div>
          <p class="qualidade-back-text">${item.message}</p>
        </div>
      </div>
    `;

    // Evento de toque/clique para virar o cartão no mobile e PC
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      createMiniSparkle(card);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("flipped");
        createMiniSparkle(card);
      }
    });

    grid.appendChild(card);
  });
}

function createMiniSparkle(element) {
  const rect = element.getBoundingClientRect();
  for (let i = 0; i < 6; i++) {
    const dot = document.createElement("div");
    dot.className = "sparkle";
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;
    dot.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      opacity: 1;
      transform: scale(1.5);
      transition: all 0.6s ease;
      background: #E8C97A;
    `;
    element.style.position = "relative";
    element.appendChild(dot);
    setTimeout(() => {
      dot.style.opacity = "0";
      dot.style.transform = "scale(0) translateY(-15px)";
      setTimeout(() => dot.remove(), 600);
    }, 100);
  }
}

// ============================================================
//  PÁGINA 5: CELEBRAÇÃO (SOPRAR VELAS + CONFETIS DOURADOS)
// ============================================================
function celebrar() {
  if (celebrated) return;
  celebrated = true;

  const boloImg = document.getElementById("pedido-bg-img");
  if (boloImg) {
    boloImg.classList.add("candle-blown");
  }

  // Disparo espetacular de confetes dourados
  launchGoldenConfetti(80);

  // Transição suave para a última surpresa após celebrar
  setTimeout(() => {
    goToPage(6);
  }, 2200);
}

function launchGoldenConfetti(count = 70) {
  const colors = [
    "#C99B55", // Dourado principal
    "#E8C97A", // Dourado claro brilhante
    "#F5E4B8", // Champanhe
    "#A07A3A", // Bronze
    "#FFFFFF"  // Reflexo branco
  ];

  const w = window.innerWidth;
  const h = window.innerHeight;

  for (let i = 0; i < count; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti-piece";

    const startX = w * 0.5 + (Math.random() - 0.5) * 120;
    const startY = h * 0.7;

    const angle = (Math.PI * 1.8 * Math.random()) - (Math.PI * 0.9);
    const speed = 260 + Math.random() * 380;
    const dx = Math.sin(angle) * speed;
    const dy = -Math.cos(angle) * speed + 220;

    const isRect = Math.random() > 0.4;
    const sizeW = 6 + Math.random() * 8;
    const sizeH = isRect ? 10 + Math.random() * 12 : sizeW;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const duration = 2.2 + Math.random() * 1.5;

    conf.style.cssText = `
      left: ${startX}px;
      top: ${startY}px;
      width: ${sizeW}px;
      height: ${sizeH}px;
      border-radius: ${isRect ? "2px" : "50%"};
      background: ${color};
      box-shadow: 0 0 8px ${color}88;
      --dx: ${dx}px;
      --dy: ${dy}px;
      --rz: ${Math.random() * 720 - 360}deg;
      --fall-duration: ${duration}s;
      --delay: ${Math.random() * 0.3}s;
    `;

    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), (duration + 0.5) * 1000);
  }
}

// ============================================================
//  SPARKLES FLUTUANTES NO FUNDO
// ============================================================
function createSparkles() {
  const container = document.getElementById("sparkles");
  if (!container) return;

  container.innerHTML = "";
  const total = 25;

  for (let i = 0; i < total; i++) {
    const sp = document.createElement("div");
    sp.className = "sparkle";
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 5;
    const dur = 3 + Math.random() * 4;
    const size = 2 + Math.random() * 3;

    sp.style.cssText = `
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      animation-delay: ${delay}s;
      animation-duration: ${dur}s;
      background: ${Math.random() > 0.5 ? "#C99B55" : "#E8C97A"};
      box-shadow: 0 0 6px rgba(201, 155, 85, 0.5);
    `;

    container.appendChild(sp);
  }
}

// ============================================================
//  FALLBACK ELEGANTE PARA IMAGENS
// ============================================================
function initImagePlaceholders() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("error", () => {
      const width = img.getAttribute("width") || 400;
      const height = img.getAttribute("height") || 400;
      const placeholderSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 400 400">
          <defs>
            <radialGradient id="grad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#261d14"/>
              <stop offset="60%" stop-color="#120e09"/>
              <stop offset="100%" stop-color="#080808"/>
            </radialGradient>
            <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#E8C97A"/>
              <stop offset="100%" stop-color="#C99B55"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)"/>
          <circle cx="200" cy="180" r="45" fill="none" stroke="url(#gold)" stroke-width="1.5" opacity="0.4"/>
          <path d="M190 180l10-10 10 10M200 170v20" stroke="url(#gold)" stroke-width="1.5" stroke-linecap="round"/>
          <text x="50%" y="260" text-anchor="middle" fill="#C99B55" font-family="sans-serif" font-size="12" letter-spacing="3" opacity="0.6">FOTO DE CASAL</text>
        </svg>
      `;
      img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(placeholderSVG)}`;
      img.style.objectFit = "cover";
    });
  });
}

// ============================================================
//  MODAL / LIGHTBOX DE FOTOS DO CASAL
// ============================================================
function openPhotoModal(imgSrc, title, desc) {
  const modal = document.getElementById("photo-modal");
  const modalImg = document.getElementById("photo-modal-img");
  const modalTitle = document.getElementById("photo-modal-title");
  const modalDesc = document.getElementById("photo-modal-desc");

  if (!modal || !modalImg) return;

  modalImg.src = imgSrc;
  if (modalTitle) modalTitle.textContent = title || "";
  if (modalDesc) modalDesc.textContent = desc || "";

  modal.classList.add("active");
}

function closePhotoModal(event) {
  const modal = document.getElementById("photo-modal");
  if (modal) {
    modal.classList.remove("active");
  }
}

// Fechar com a tecla ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePhotoModal();
  }
});
