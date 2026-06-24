// 起点脚本：交互基本为空，请根据试题要求补充

// TODO: 滚动时导航栏样式变化（半透明毛玻璃）
// TODO: 移动端汉堡菜单开关
// TODO: 可选 — 滚动进入视口时的淡入动画

function initNavScrollEffect() {
  const globalNav = document.querySelector(".global-nav");

  if (!globalNav) return;

  const updateNavState = () => {
    globalNav.classList.toggle("is-scrolled", window.scrollY > 10);
  };

  updateNavState();
  window.addEventListener("scroll", updateNavState);
}

function initMobileMenu() {
  const globalNav = document.querySelector(".global-nav");
  const menuToggle = document.querySelector(".nav-menu-toggle");
  const mobileMenu = document.querySelector(".nav-mobile-menu");

  if (!globalNav || !menuToggle || !mobileMenu) return;

  const closeMenu = () => {
    globalNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  };

  const toggleMenu = () => {
    const isOpen = globalNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  };

  menuToggle.addEventListener("click", toggleMenu);

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

function initScrollReveal() {
  const revealItems = document.querySelectorAll(
    ".hero-content, .product-card, .service-card, .promo-banner"
  );

  if (!revealItems.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -48px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  initNavScrollEffect();
  initMobileMenu();
  initScrollReveal();
});
