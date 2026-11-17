/**
 * ALAN AMOR - PORTFOLIO INTERACTIVITY & TECH EFFECTS
 */

// --- DICTIONARY FOR ES / EN LOCALIZATION ---
const i18n = {
  es: {
    header_role: "Fullstack Developer · Java & Spring",
    nav_about: "Sobre mí",
    nav_tech: "Tecnologías",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    header_cta: "Hablemos",

    hero_badge: "Disponible para nuevos desafíos profesionales",
    hero_title_1: "Desarrollo soluciones",
    hero_title_2: "robustas, escalables y orientadas a valor",
    hero_desc: "Soy Alan Amor, Desarrollador Fullstack especializado en el ecosistema <strong>Java 17, Spring Boot, Spring Data JPA y MySQL</strong>, complementado con interfaces web limpias y funcionales. Construyo aplicaciones pensando en arquitectura mantenible, lógica de negocio sólida y entrega continua de valor.",

    kpi_focus_label: "Especialidad Core",
    kpi_approach_label: "Enfoque Técnico",
    kpi_approach_val: "Arquitectura Limpia & JPA",
    kpi_delivery_label: "Impacto",
    kpi_delivery_val: "Fullstack End-to-End",

    btn_view_projects: "Explorar proyectos",
    btn_contact: "Contactar",

    tag_value: "Propuesta de valor",
    value_heading: "Lo que aporto a tu equipo técnico",
    value_sub: "Enfoque pragmático combinando backend robusto, buenas prácticas y velocidad de entrega.",

    card_1_title: "Desarrollo End-to-End",
    card_1_desc: "Capacidad probada para conectar la capa de datos y lógica de negocio con interfaces limpias, asegurando consistencia entre el frontend y los endpoints del backend.",
    card_2_title: "Ecosistema Java & Spring",
    card_2_desc: "Especialización en Java 17, Spring Boot, Spring Data JPA, validaciones complejas con Bean Validation y MySQL para crear sistemas confiables y testeables.",
    card_3_title: "Calidad, Mantenibilidad y Agilidad",
    card_3_desc: "Código legible, arquitectura MVC ordenada, control de versiones con Git y comunicación fluida para integrarme y aportar valor desde el primer sprint.",

    tag_stack: "Stack Tecnológico",
    tech_heading: "Tecnologías & Herramientas",
    tech_sub: "Herramientas con las que diseño, implemento y despliego software de punta a punta.",

    type_core_backend: "Core Backend",
    type_framework: "Framework",
    type_persistence: "ORM & Persistencia",
    type_database: "Base de Datos",
    type_template: "Template Engine",
    type_frontend_lang: "Lenguaje Frontend",
    type_markup: "Semántica Web",
    type_styling: "Estilos & Layout",
    type_ui_framework: "Framework UI",
    type_backend: "Backend & APIs",
    type_vcs: "Control de Versiones",
    type_build: "Build & Deps",

    tag_projects: "Portfolio de Proyectos",
    projects_heading: "Proyectos Destacados",
    projects_sub: "Evidencia de trabajo real: sistemas web completos, decisiones de arquitectura y soluciones orientadas al usuario.",

    filter_all: "Todos",
    filter_fullstack: "Fullstack & Java",
    filter_frontend: "Frontend",

    badge_featured: "Destacado · Fullstack Enterprise",

    cuidado_eyebrow: "Gestión Cooperativa & Auditoría",
    cuidado_tab_1: "Auditoría y Asistencias",
    cuidado_tab_2: "Gestión de Socios",
    cuidado_tab_3: "Padrón de Clientes",
    cuidado_tab_4: "Cuadro Tarifario",
    zoom_hint: "Ampliar captura",
    cuidado_desc: "Sistema web integral para la gestión y auditoría operativa de una cooperativa de cuidado y enfermería. Construido con arquitectura MVC en capas, validación rigurosa de reglas de negocio y persistencia relacional optimizada.",
    cuidado_cap_1: "Auditoría y consulta histórica de asistencias (filtros, exportación PDF / Excel)",
    cuidado_cap_2: "Gestión y buscador indexado de socios (cuidadores y enfermeros)",
    cuidado_cap_3: "Padrón de clientes y pacientes con vinculación de familiares",
    cuidado_cap_4: "Servicios y cuadro tarifario parametrizable por tramos y días",
    cuidado_feat_1: "Auditoría con exportación a PDF y Excel (.xlsx)",
    cuidado_feat_2: "Buscador indexado A-Z de socios y pacientes",
    cuidado_feat_3: "Tarifario dinámico (tramos <12h/12h+, feriados)",

    barber_eyebrow: "Gestión de Reservas & Clientes",
    barber_desc: "Plataforma web para reservas y administración integral de turnos, profesionales y servicios en barberías y salones de belleza.",

    sumar_eyebrow: "Salud Pública & Formulario",
    sumar_desc: "Formulario interactivo de reclamos y consultas para el Programa Sumar + del Ministerio de Salud de Santa Fe.",

    inmo_eyebrow: "Real Estate & Inversión",
    inmo_desc: "Landing page inmobiliaria orientada a propiedades de categoría, inversión de alto perfil y contacto comercial directo.",

    vin_eyebrow: "Moda de Autor & Branding",
    vin_desc: "Marca de moda de autor con identidad visual clásico-futurista, tipografía cuidada y estética vanguardista.",

    link_repo: "Repositorio",
    link_demo: "GitHub Pages",
    link_view_screens: "Ver capturas",

    tag_contact: "Contacto",
    contact_heading: "¿Hablamos sobre tu próximo proyecto?",
    contact_sub: "Disponible para incorporarme a equipos ágiles de producto como Desarrollador Fullstack o Backend.",
    contact_ready: "Respuesta activa en menos de 24 horas",
    btn_copy_email: "Copiar email",
    btn_send_email: "Enviar correo",
    copied_toast: "¡Email copiado al portapapeles!"
  },
  en: {
    header_role: "Fullstack Developer · Java & Spring",
    nav_about: "About",
    nav_tech: "Technologies",
    nav_projects: "Projects",
    nav_contact: "Contact",
    header_cta: "Let's Talk",

    hero_badge: "Available for new professional challenges",
    hero_title_1: "Building robust, scalable,",
    hero_title_2: "and value-driven web solutions",
    hero_desc: "I am Alan Amor, a Fullstack Developer specialized in the <strong>Java 17, Spring Boot, Spring Data JPA, and MySQL</strong> ecosystem, paired with clean, accessible frontend interfaces. I engineer software with maintainable architecture, solid business logic, and continuous value delivery.",

    kpi_focus_label: "Core Specialty",
    kpi_approach_label: "Technical Approach",
    kpi_approach_val: "Clean Architecture & JPA",
    kpi_delivery_label: "Impact",
    kpi_delivery_val: "Fullstack End-to-End",

    btn_view_projects: "Explore projects",
    btn_contact: "Contact me",

    tag_value: "Value Proposition",
    value_heading: "What I bring to your team",
    value_sub: "A pragmatic approach uniting solid backend engineering, clean practices, and fast delivery cadence.",

    card_1_title: "End-to-End Development",
    card_1_desc: "Proven capability connecting database schemas and complex business logic with clean UIs, ensuring high consistency between frontend and backend endpoints.",
    card_2_title: "Java & Spring Ecosystem",
    card_2_desc: "Deep focus on Java 17, Spring Boot, Spring Data JPA, thorough business validations with Bean Validation, and MySQL for robust, testable systems.",
    card_3_title: "Quality, Maintainability & Speed",
    card_3_desc: "Readable code, structured MVC architecture, Git version control, and clear technical communication to create immediate value from sprint one.",

    tag_stack: "Tech Stack",
    tech_heading: "Technologies & Tools",
    tech_sub: "The toolset I use to architect, build, and deploy software from end to end.",

    type_core_backend: "Core Backend",
    type_framework: "Framework",
    type_persistence: "ORM & Persistence",
    type_database: "Database",
    type_template: "Template Engine",
    type_frontend_lang: "Frontend Language",
    type_markup: "Web Semantics",
    type_styling: "Styling & Layout",
    type_ui_framework: "UI Framework",
    type_backend: "Backend & APIs",
    type_vcs: "Version Control",
    type_build: "Build & Deps",

    tag_projects: "Featured Work",
    projects_heading: "Selected Projects",
    projects_sub: "Real-world production code: end-to-end web systems, architectural choices, and user-centered solutions.",

    filter_all: "All",
    filter_fullstack: "Fullstack & Java",
    filter_frontend: "Frontend",

    badge_featured: "Featured · Fullstack Enterprise",

    cuidado_eyebrow: "Cooperative Management & Auditing",
    cuidado_tab_1: "Attendance Audit",
    cuidado_tab_2: "Caregivers & Nurses",
    cuidado_tab_3: "Clients & Patients",
    cuidado_tab_4: "Tariff Schedule",
    zoom_hint: "Zoom screenshot",
    cuidado_desc: "Comprehensive web platform for managing and auditing a caregiving and nursing cooperative. Engineered with layered MVC architecture, strict business rule validations, and optimized relational persistence.",
    cuidado_cap_1: "Attendance auditing and historical queries (filters, PDF/Excel export)",
    cuidado_cap_2: "A-Z indexed search and management for caregivers & nurses",
    cuidado_cap_3: "Client and patient directory linked with responsible relatives",
    cuidado_cap_4: "Dynamic hourly rates and holiday-based tariff schedules",
    cuidado_feat_1: "Attendance auditing with PDF & Excel (.xlsx) exports",
    cuidado_feat_2: "A-Z indexed member & patient search",
    cuidado_feat_3: "Dynamic tariff calculation (<12h/12h+, weekend, holidays)",

    barber_eyebrow: "Appointment Booking & Management",
    barber_desc: "Web application for online booking and complete management of shifts, stylists, and catalogued services in barbershops.",

    sumar_eyebrow: "Public Health & Forms",
    sumar_desc: "Interactive claim and inquiry form developed for Programa Sumar + under the Santa Fe Ministry of Health.",

    inmo_eyebrow: "Real Estate & Investments",
    inmo_desc: "High-end real estate landing page designed for luxury properties, prime investments, and commercial conversion.",

    vin_eyebrow: "Designer Fashion & Branding",
    vin_desc: "Author fashion label featuring a classic-futuristic aesthetic, curated typography, and avant-garde visuals.",

    link_repo: "Repository",
    link_demo: "Live Demo",
    link_view_screens: "View screenshots",

    tag_contact: "Contact",
    contact_heading: "Let's discuss your next project",
    contact_sub: "Available to join agile product teams as a Fullstack or Backend Software Developer.",
    contact_ready: "Active response within 24 hours",
    btn_copy_email: "Copy email",
    btn_send_email: "Send email",
    copied_toast: "Email copied to clipboard!"
  },
  pt: {
    header_role: "Fullstack Developer · Java & Spring",
    nav_about: "Sobre mim",
    nav_tech: "Tecnologias",
    nav_projects: "Projetos",
    nav_contact: "Contato",
    header_cta: "Conversar",

    hero_badge: "Disponível para novos desafios profissionais",
    hero_title_1: "Desenvolvo soluções",
    hero_title_2: "robustas, escaláveis e orientadas a valor",
    hero_desc: "Sou Alan Amor, Desenvolvedor Fullstack especializado no ecossistema <strong>Java 17, Spring Boot, Spring Data JPA e MySQL</strong>, complementado com interfaces web limpas e funcionais. Construo aplicações focando em arquitetura sustentável, lógica de negócio sólida e entrega contínua de valor.",

    kpi_focus_label: "Especialidade Core",
    kpi_approach_label: "Abordagem Técnica",
    kpi_approach_val: "Arquitetura Limpa & JPA",
    kpi_delivery_label: "Impacto",
    kpi_delivery_val: "Fullstack End-to-End",

    btn_view_projects: "Explorar projetos",
    btn_contact: "Entrar em contato",

    tag_value: "Proposta de valor",
    value_heading: "O que agrego à sua equipe técnica",
    value_sub: "Abordagem pragmática unindo backend robusto, boas práticas e velocidade de entrega.",

    card_1_title: "Desenvolvimento End-to-End",
    card_1_desc: "Capacidade comprovada de conectar a camada de dados e lógica de negócio com interfaces limpas, garantindo consistência entre o frontend e os endpoints do backend.",
    card_2_title: "Ecossistema Java & Spring",
    card_2_desc: "Especialização em Java 17, Spring Boot, Spring Data JPA, validações complexas com Bean Validation e MySQL para criar sistemas confiáveis e testáveis.",
    card_3_title: "Qualidade, Manutenibilidade e Agilidade",
    card_3_desc: "Código legível, arquitetura MVC organizada, controle de versão com Git e comunicação técnica clara para gerar valor desde o primeiro sprint.",

    tag_stack: "Stack Tecnológico",
    tech_heading: "Tecnologias & Ferramentas",
    tech_sub: "Ferramentas com as quais projeto, construo e implemento software de ponta a ponta.",

    type_core_backend: "Core Backend",
    type_framework: "Framework",
    type_persistence: "ORM & Persistência",
    type_database: "Banco de Dados",
    type_template: "Template Engine",
    type_frontend_lang: "Linguagem Frontend",
    type_markup: "Semântica Web",
    type_styling: "Estilos & Layout",
    type_ui_framework: "Framework UI",
    type_backend: "Backend & APIs",
    type_vcs: "Controle de Versão",
    type_build: "Build & Deps",

    tag_projects: "Portfólio de Projetos",
    projects_heading: "Projetos em Destaque",
    projects_sub: "Evidência de trabalho real: sistemas web completos, decisões de arquitetura e soluções orientadas ao usuário.",

    filter_all: "Todos",
    filter_fullstack: "Fullstack & Java",
    filter_frontend: "Frontend",

    badge_featured: "Destaque · Fullstack Enterprise",

    cuidado_eyebrow: "Gestão Cooperativa & Auditoria",
    cuidado_tab_1: "Auditoria e Frequência",
    cuidado_tab_2: "Gestão de Cooperados",
    cuidado_tab_3: "Cadastro de Clientes",
    cuidado_tab_4: "Tabela Tarifária",
    zoom_hint: "Ampliar captura",
    cuidado_desc: "Sistema web completo para a gestão e auditoria operacional de uma cooperativa de cuidadores e enfermagem. Desenvolvido com arquitetura MVC em camadas, validação rigorosa de regras de negócio e persistência relacional otimizada.",
    cuidado_cap_1: "Auditoria e consulta histórica de frequência (filtros, exportação PDF / Excel)",
    cuidado_cap_2: "Gestão e busca indexada de cooperados (cuidadores e enfermeiros)",
    cuidado_cap_3: "Cadastro de clientes e pacientes com vínculo de familiares responsáveis",
    cuidado_cap_4: "Serviços e tabela de tarifas parametrizável por turnos e dias",
    cuidado_feat_1: "Auditoria com exportação para PDF e Excel (.xlsx)",
    cuidado_feat_2: "Buscador indexado A-Z de cooperados e pacientes",
    cuidado_feat_3: "Cálculo dinâmico de tarifas (turnos <12h/12h+, feriados)",

    barber_eyebrow: "Gestão de Agendamentos & Clientes",
    barber_desc: "Plataforma web para agendamento online e gerenciamento integral de horários, profissionais e serviços em barbearias e salões.",

    sumar_eyebrow: "Saúde Pública & Formulários",
    sumar_desc: "Formulário interativo de solicitações e consultas para o Programa Sumar + do Ministério da Saúde de Santa Fe.",

    inmo_eyebrow: "Mercado Imobiliário & Investimentos",
    inmo_desc: "Landing page imobiliária focada em imóveis de alto padrão, investimentos estratégicos e conversão comercial.",

    vin_eyebrow: "Moda Autoral & Branding",
    vin_desc: "Marca de moda autoral com identidade visual clássico-futurista, tipografia refinada e estética de vanguarda.",

    link_repo: "Repositório",
    link_demo: "Demonstração",
    link_view_screens: "Ver capturas",

    tag_contact: "Contato",
    contact_heading: "Vamos conversar sobre o seu próximo projeto?",
    contact_sub: "Disponível para integrar equipes ágeis de produto como Desenvolvedor Fullstack ou Backend.",
    contact_ready: "Resposta ativa em menos de 24 horas",
    btn_copy_email: "Copiar e-mail",
    btn_send_email: "Enviar e-mail",
    copied_toast: "E-mail copiado para a área de transferência!"
  }
};

let currentLang = localStorage.getItem("preferred_lang") || "es";

function applyLanguage(lang) {
  if (!i18n[lang]) lang = "es";
  currentLang = lang;
  localStorage.setItem("preferred_lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("data-lang", lang);

  const dict = i18n[lang] || i18n.es;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-val") === lang);
  });
}

function initLanguageToggle() {
  const langBtns = document.querySelectorAll(".lang-btn");
  if (!langBtns.length) return;

  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang-val");
      if (selectedLang) {
        applyLanguage(selectedLang);
      }
    });
  });

  applyLanguage(currentLang);
}

// --- 3D INTERACTIVE TILT FOR TECH STACK ---
function initTech3DHover() {
  const techCards = document.querySelectorAll(".tech-item");
  if (!techCards.length) return;

  techCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -16;
      const rotateY = ((x / rect.width) - 0.5) * 16;

      card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
      card.style.setProperty("--mx", `${((x / rect.width) * 100).toFixed(2)}%`);
      card.style.setProperty("--my", `${((y / rect.height) * 100).toFixed(2)}%`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--mx", "50%");
      card.style.setProperty("--my", "50%");
    });
  });
}

// --- PROJECT CAROUSELS ---
function initProjectCarousels() {
  const carousels = document.querySelectorAll("[data-project-carousel]");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const slides = Array.from(track ? track.children : []);
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
    const counterEl = carousel.querySelector("[data-carousel-current]");
    const containerArticle = carousel.closest(".project-card");
    const screenTabs = containerArticle ? Array.from(containerArticle.querySelectorAll(".screen-tab")) : [];
    const mockUrlEl = containerArticle ? containerArticle.querySelector("#cuidadoMockUrl") : null;

    if (!track || slides.length <= 1) {
      carousel.classList.add("is-static");
      return;
    }

    let activeIndex = 0;

    const updateCarousel = () => {
      track.style.transform = `translateX(-${activeIndex * 100}%)`;
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === activeIndex);
        dot.setAttribute("aria-current", dotIndex === activeIndex ? "true" : "false");
      });
      if (counterEl) {
        counterEl.textContent = activeIndex + 1;
      }

      // Update screen tabs if present
      if (screenTabs.length) {
        screenTabs.forEach((tab, tabIndex) => {
          const isActive = tabIndex === activeIndex;
          tab.classList.toggle("active", isActive);
          tab.setAttribute("aria-selected", isActive ? "true" : "false");
        });
      }

      // Update simulated browser URL bar
      if (mockUrlEl && slides[activeIndex]) {
        const customUrl = slides[activeIndex].getAttribute("data-url");
        if (customUrl) {
          mockUrlEl.textContent = customUrl;
        }
      }
    };

    prevButton?.addEventListener("click", () => {
      activeIndex = (activeIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    nextButton?.addEventListener("click", () => {
      activeIndex = (activeIndex + 1) % slides.length;
      updateCarousel();
    });

    dots.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => {
        activeIndex = dotIndex;
        updateCarousel();
      });
    });

    // Screen tabs click binding
    if (screenTabs.length) {
      screenTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const targetIndex = parseInt(tab.getAttribute("data-slide-target"), 10);
          if (!isNaN(targetIndex) && targetIndex >= 0 && targetIndex < slides.length) {
            activeIndex = targetIndex;
            updateCarousel();
          }
        });
      });
    }

    // Touch Swipe support
    let startX = 0;
    let endX = 0;
    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          activeIndex = (activeIndex + 1) % slides.length;
        } else {
          activeIndex = (activeIndex - 1 + slides.length) % slides.length;
        }
        updateCarousel();
      }
    }, { passive: true });

    updateCarousel();
  });
}

// --- PROJECT FILTERING ---
function initProjectFilters() {
  const filterTabs = document.querySelectorAll(".filter-tab");
  const projectCards = document.querySelectorAll(".project-card");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const filterValue = tab.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "none";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.96)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

// --- IMAGE LIGHTBOX / MODAL ---
function initImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const modalClose = document.getElementById("modalClose");
  const modalBackdrop = document.getElementById("modalBackdrop");

  if (!modal || !modalImage) return;

  function openModal(src, captionText) {
    modalImage.src = src;
    modalCaption.textContent = captionText || "";
    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => {
      modalImage.src = "";
    }, 300);
  }

  // Bind to all zoomable images
  document.querySelectorAll("[data-zoomable]").forEach((img) => {
    img.addEventListener("click", () => {
      const slide = img.closest(".project-carousel__slide");
      const caption = slide?.querySelector(".slide-caption")?.textContent || img.alt;
      openModal(img.src, caption);
    });
  });

  // Bind to any trigger button
  document.querySelectorAll("[data-zoom-trigger]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-zoom-trigger");
      openModal(src, "CuidadoCoop - Auditoría y Asistencias");
    });
  });

  // Bind CuidadoCoop browser header zoom button
  const cuidadoZoomCurrent = document.getElementById("cuidadoZoomCurrent");
  if (cuidadoZoomCurrent) {
    cuidadoZoomCurrent.addEventListener("click", () => {
      const counterEl = document.querySelector("#cuidadoCarousel [data-carousel-current]");
      const currentIdx = counterEl ? (parseInt(counterEl.textContent, 10) - 1) : 0;
      const allSlides = document.querySelectorAll("#cuidadoCarousel .project-carousel__slide");
      const currentSlide = allSlides[currentIdx] || allSlides[0];
      const img = currentSlide?.querySelector("img");
      const caption = currentSlide?.querySelector(".slide-caption")?.textContent || img?.alt;
      if (img) openModal(img.src, caption);
    });
  }

  modalClose?.addEventListener("click", closeModal);
  modalBackdrop?.addEventListener("click", closeModal);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-active")) {
      closeModal();
    }
  });
}

// --- COPY EMAIL INTERACTION ---
function initCopyEmail() {
  const copyBtn = document.getElementById("copyEmailBtn");
  const copyBtnText = document.getElementById("copyBtnText");
  const copyFeedback = document.getElementById("copyFeedback");
  const email = "alan43009459@gmail.com";

  if (!copyBtn) return;

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const temp = document.createElement("input");
      temp.value = email;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }

    const dict = i18n[currentLang] || i18n.es;
    if (copyFeedback) copyFeedback.textContent = dict.copied_toast;
    if (copyBtnText) copyBtnText.textContent = currentLang === "es" ? "¡Copiado!" : currentLang === "pt" ? "Copiado!" : "Copied!";

    copyBtn.style.transform = "scale(0.96)";
    setTimeout(() => {
      copyBtn.style.transform = "";
    }, 150);

    setTimeout(() => {
      if (copyFeedback) copyFeedback.textContent = "";
      if (copyBtnText) copyBtnText.textContent = dict.btn_copy_email;
    }, 3000);
  });
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initLanguageToggle();
  initTech3DHover();
  initProjectCarousels();
  initProjectFilters();
  initImageModal();
  initCopyEmail();
});
