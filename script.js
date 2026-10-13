/* ================================================================= */
/*  PRESENTE DE ANIVERSÁRIO PARA STEPHAN - Script Principal         */
/*  Tema: Masculino Elegante (Preto Profundo + Dourado #C99B55)        */
/*  Navegação Fluida, Interatividade Ágil e Responsiva               */
/* ================================================================= */

// ============================================================
//  ESTADO GLOBAL
// ============================================================
let currentPage = 1;
const totalPages = 6;
let isAnimating = false;
let musicPlaying = false;
let celebrated = false;

// Fotos da galeria
const galleryPhotos = [
  {
    src: "foto1.jpg",
    title: "Nós dois ♡",
    desc: "It’s the little moments with you that make me the happiest. ❤️ The simple things, like holding your hand, hugging you, laughing together, playing around, or just being close to you, mean more to me than you could ever imagine. I never realized how special those little moments were until distance made me miss them so much. 🥹❤️ Sometimes, all I want is to go back to those days, even just for a little while, to hold you again and enjoy the simple happiness of having you by my side. I miss our little moments more than words can explain"
  },
  {
    src: "foto2.jpg",
    title: "O teu sorriso ✨",
    desc: "Your smile is so beautiful, it seems to have a light of its own. 🥹❤️ It’s one of the most beautiful things about you, and I love the way it lights up your face. If you could see how beautiful you look when you smile, you would understand why your smile is so special"
  },
  {
    src: "foto3.jpg",
    title: "Para sempre nós 🖤",
    desc: "Your hand in mine, and my heart at peace. ❤️🫶🏽 May God allow us to continue holding hands through every moment of life ♾️❤️"
  },
  {
    src: "foto4.jpg",
    title: "Tu e eu, Stephan 🖤",
    desc: "Caminhar ao teu lado é o meu maior presente de todos os dias."
  }
];

// Qualidades para a Página 4
const qualidades = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    title: "Generosidade",
    message: "Admiro a tua forma única de cuidar de todos ao teu redor, entregando sempre o teu melhor sem esperar nada em troca."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
    title: "Determinação",
    message: "A tua garra e coragem para perseguir cada um dos teus objetivos inspiram-me a crescer e ser melhor todos os dias."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3c-1.5 3-4 6-7 7 3 1 5.5 4 7 7 1.5-3 4-6 7-7-3-1-5.5-4-7-7z"/><path d="M12 17v4M5 10H1M23 10h-4"/></svg>`,
    title: "Humildade",
    message: "Mesmo com todas as tuas conquistas e talentos, manténs um coração simples, nobre e incrivelmente acolhedor."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: "Respeito",
    message: "A forma carinhosa, atenciosa e leal como me tratas e valorizas todas as pessoas que amas ao teu redor."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    title: "Carinho",
    message: "Os teus abraços quentes, os teus beijos e os pequenos gestos diários que transformam qualquer momento num instante mágico."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"/></svg>`,
    title: "Inteligência",
    message: "A tua mente brilhante, sabedoria para me aconselhar e a visão incrível que tens para o nosso futuro juntos."
  }
];

// ============================================================
//  INICIALIZAÇÃO NO CARREGAMENTO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initTopBar();
  renderQualidades();
  initDotsNavigation();
  initTouchGestures();
  initKeyboardNavigation();
  initHashRouting();
  createSparkles();
  initImagePlaceholders();
  initAudio();
  updateNavigationState();
});

// ============================================================
//  ÁUDIO
// ============================================================
function initAudio() {
  const audio = document.getElementById("bg-music");
  if (audio) {
    audio.volume = 0.12;
  }
}

function toggleMusic() {
  const audio = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const iconOn = document.getElementById("music-icon-on");
  const iconOff = document.getElementById("music-icon-off");

  if (!audio) return;

  if (musicPlaying) {
    audio.pause();
    musicPlaying = false;
    if (musicBtn) musicBtn.classList.remove("playing");
    if (iconOn) iconOn.style.display = "none";
    if (iconOff) iconOff.style.display = "block";
  } else {
    audio.volume = 0.12;
    audio.play().then(() => {
      musicPlaying = true;
      if (musicBtn) musicBtn.classList.add("playing");
      if (iconOn) iconOn.style.display = "block";
      if (iconOff) iconOff.style.display = "none";
    }).catch((err) => {
      console.warn("Reprodução automática bloqueada pelo navegador.", err);
    });
  }
}

function tryPlayMusicOnFirstInteraction() {
  const audio = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const iconOn = document.getElementById("music-icon-on");
  const iconOff = document.getElementById("music-icon-off");

  if (audio && !musicPlaying) {
    audio.volume = 0.12;
    audio.play().then(() => {
      musicPlaying = true;
      if (musicBtn) musicBtn.classList.add("playing");
      if (iconOn) iconOn.style.display = "block";
      if (iconOff) iconOff.style.display = "none";
    }).catch(() => {});
  }
}

// ============================================================
//  NAVEGAÇÃO E ESTADOS
// ============================================================
function initTopBar() {
  const topBar = document.getElementById("top-bar");
  if (topBar) {
    topBar.classList.add("visible");
  }
}

function updateNavigationState() {
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

  const prevArrow = document.getElementById("nav-prev");
  const nextArrow = document.getElementById("nav-next");

  if (prevArrow) {
    if (currentPage <= 1) {
      prevArrow.classList.add("disabled");
      prevArrow.setAttribute("aria-disabled", "true");
    } else {
      prevArrow.classList.remove("disabled");
      prevArrow.removeAttribute("aria-disabled");
    }
  }

  if (nextArrow) {
    if (currentPage >= totalPages) {
      nextArrow.classList.add("disabled");
      nextArrow.setAttribute("aria-disabled", "true");
    } else {
      nextArrow.classList.remove("disabled");
      nextArrow.removeAttribute("aria-disabled");
    }
  }

  const dots = document.querySelectorAll(".nav-dot");
  dots.forEach((dot, index) => {
    const pageNum = index + 1;
    if (pageNum === currentPage) {
      dot.classList.add("active");
      dot.setAttribute("aria-selected", "true");
    } else {
      dot.classList.remove("active");
      dot.setAttribute("aria-selected", "false");
    }
  });
}

function goToPage(targetPage, updateHash = true) {
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
    }, 450);
  } else {
    isAnimating = false;
  }

  currentPage = targetPage;
  updateNavigationState();

  if (newPage) {
    newPage.scrollTop = 0;
  }

  if (updateHash) {
    window.location.hash = `secao-${currentPage}`;
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

function initHashRouting() {
  function readHash() {
    const hash = window.location.hash;
    const match = hash.match(/secao-(\d+)/);
    if (match) {
      const page = parseInt(match[1], 10);
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        goToPage(page, false);
      }
    }
  }

  window.addEventListener("hashchange", readHash);
  if (window.location.hash) {
    readHash();
  }
}

// ============================================================
//  GESTOS DE TOQUE E TECLADO
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
      const modal = document.getElementById("photo-modal");
      if (modal && modal.classList.contains("active")) return;

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
    const modal = document.getElementById("photo-modal");
    const isModalOpen = modal && modal.classList.contains("active");

    if (isModalOpen) {
      if (e.key === "Escape") {
        closePhotoModal();
      }
      return;
    }

    if (e.key === "ArrowRight" || e.key === "PageDown") {
      goToNextPage();
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      goToPrevPage();
    } else if (e.key === "Home") {
      goToPage(1);
    } else if (e.key === "End") {
      goToPage(totalPages);
    }
  });
}

function handleCardKey(event, index) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openPhotoModal(index);
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
    wrapper.setAttribute("aria-expanded", "true");
    if (label) label.textContent = "FECHAR CARTA";
  } else {
    wrapper.classList.remove("open");
    wrapper.setAttribute("aria-expanded", "false");
    if (label) label.textContent = "ABRIR CARTA";
  }
}

const envWrap = document.getElementById("envelope-wrapper");
if (envWrap) {
  envWrap.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openEnvelope();
    }
  });
}

// ============================================================
//  PÁGINA 4: CARTÕES DE QUALIDADES (FLIP CARD)
// ============================================================
function renderQualidades() {
  const grid = document.getElementById("qualidades-grid");
  if (!grid) return;

  grid.innerHTML = "";
  qualidades.forEach((item) => {
    const card = document.createElement("div");
    card.className = "qualidade-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-expanded", "false");
    card.setAttribute("aria-label", `Qualidade: ${item.title}. Toque para virar.`);

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

    function toggleCard() {
      const isFlipped = card.classList.toggle("flipped");
      card.setAttribute("aria-expanded", isFlipped ? "true" : "false");
    }

    card.addEventListener("click", toggleCard);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleCard();
      }
    });

    grid.appendChild(card);
  });
}

// ============================================================
//  PÁGINA 5: CELEBRAÇÃO (SOPRAR VELAS + CONFETES DOURADOS)
// ============================================================
function celebrar() {
  if (celebrated) return;
  celebrated = true;

  const boloImg = document.getElementById("pedido-bg-img");
  const btnLabel = document.getElementById("btn-celebrar-label");

  if (boloImg) {
    boloImg.classList.add("candle-blown");
  }

  if (btnLabel) {
    btnLabel.textContent = "✨ VELAS APAGADAS! PARABÉNS! ✨";
  }

  // Disparo dos confetes dourados especiais de celebração
  launchGoldenConfetti(85);

  // Transição suave para a última surpresa após celebrar
  setTimeout(() => {
    goToPage(6);
  }, 2500);
}

function launchGoldenConfetti(count = 75) {
  const colors = [
    "#C99B55", // Dourado nobre
    "#E8C97A", // Dourado claro brilhante
    "#F5E4B8", // Champanhe
    "#A07A3A", // Bronze
    "#FFFFFF"  // Brilho branco
  ];

  const w = window.innerWidth;
  const h = window.innerHeight;

  for (let i = 0; i < count; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti-piece";

    const startX = w * 0.5 + (Math.random() - 0.5) * 140;
    const startY = h * 0.72;

    const angle = (Math.PI * 1.8 * Math.random()) - (Math.PI * 0.9);
    const speed = 260 + Math.random() * 380;
    const dx = Math.sin(angle) * speed;
    const dy = -Math.cos(angle) * speed + 240;

    const isRect = Math.random() > 0.4;
    const sizeW = 6 + Math.random() * 8;
    const sizeH = isRect ? 10 + Math.random() * 12 : sizeW;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const duration = 2.2 + Math.random() * 1.4;

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
      --delay: ${Math.random() * 0.25}s;
    `;

    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), (duration + 0.5) * 1000);
  }
}

// ============================================================
//  MODAL / LIGHTBOX DE FOTOS
// ============================================================
function openPhotoModal(index) {
  if (index < 0 || index >= galleryPhotos.length) return;
  const photo = galleryPhotos[index];

  const modal = document.getElementById("photo-modal");
  const modalImg = document.getElementById("photo-modal-img");
  const modalTitle = document.getElementById("photo-modal-title");
  const modalDesc = document.getElementById("photo-modal-desc");

  if (!modal || !modalImg) return;

  modalImg.src = photo.src;
  modalImg.alt = photo.title;
  if (modalTitle) modalTitle.textContent = photo.title;
  if (modalDesc) modalDesc.textContent = photo.desc;

  modal.classList.add("active");
}

function closePhotoModal(event) {
  const modal = document.getElementById("photo-modal");
  if (modal) {
    modal.classList.remove("active");
  }
}

// Fechar com ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePhotoModal();
  }
});

// ============================================================
//  BRILHOS SUTIS NO FUNDO
// ============================================================
function createSparkles() {
  const container = document.getElementById("sparkles");
  if (!container) return;

  container.innerHTML = "";
  const total = 18;

  for (let i = 0; i < total; i++) {
    const sp = document.createElement("div");
    sp.className = "sparkle";
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 5;
    const dur = 3 + Math.random() * 4;
    const size = 2 + Math.random() * 2.5;

    sp.style.cssText = `
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      animation-delay: ${delay}s;
      animation-duration: ${dur}s;
      background: ${Math.random() > 0.5 ? "#C99B55" : "#E8C97A"};
    `;

    container.appendChild(sp);
  }
}

// ============================================================
//  FALLBACK PARA IMAGENS
// ============================================================
function initImagePlaceholders() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("error", () => {
      const placeholderSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
          <rect width="100%" height="100%" fill="#120e09"/>
          <text x="50%" y="50%" text-anchor="middle" fill="#C99B55" font-family="sans-serif" font-size="14" letter-spacing="2">FOTO DE CASAL</text>
        </svg>
      `;
      img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(placeholderSVG)}`;
      img.style.objectFit = "cover";
    });
  });
}
