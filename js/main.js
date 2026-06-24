// 起点脚本：交互基本为空，请根据试题要求补充

// TODO: 滚动时导航栏样式变化（半透明毛玻璃）
// TODO: 移动端汉堡菜单开关
// TODO: 可选 — 滚动进入视口时的淡入动画

const products = [
  {
    name: "徕卡 M11 真皮保护套",
    category: "徕卡真皮保护套",
    description: "为徕卡 M11 系列打造的贴合式真皮保护套，兼顾手感、保护与经典外观。",
    image: "assets/products/leica-m11-leather.png",
    theme: "dark",
    featured: true,
    ctaLearn: "查看样式",
    ctaBuy: "咨询购买",
  },
  {
    name: "徕卡 Q3 真皮保护套",
    category: "徕卡真皮保护套",
    description: "围绕 Q3 机身比例定制，保留便携感，同时提升日常携行保护。",
    image: "assets/products/leica-q3-leather.jpg",
    theme: "light",
    featured: true,
    ctaLearn: "查看样式",
    ctaBuy: "咨询购买",
  },
  {
    name: "Sofort 2 真皮三件套",
    category: "徕卡真皮保护套",
    description: "为即时成像设备打造的保护组合，兼顾收纳、握持与随身搭配。",
    image: "assets/products/leica-sofort2-kit.jpg",
    theme: "light",
    featured: false,
    ctaLearn: "查看样式",
    ctaBuy: "咨询购买",
  },
  {
    name: "哈苏&徕卡羊皮袋",
    category: "哈苏&徕卡羊皮袋",
    description: "柔软细腻的贴身收纳方案，适合机身、镜头与日常携行保护。",
    image: "assets/products/leica-hasselblad-sheepskin-bag.jpg",
    theme: "dark",
    featured: true,
    ctaLearn: "查看样式",
    ctaBuy: "咨询购买",
  },
  {
    name: "哈苏 X2D 碳纤维保护套",
    category: "哈苏碳纤维保护套",
    description: "轻量碳纤维材质结合精确贴合设计，为中画幅机身提供稳定防护。",
    image: "assets/products/hasselblad-x2d-carbon.jpg",
    theme: "dark",
    featured: true,
    ctaLearn: "查看样式",
    ctaBuy: "咨询购买",
  },
  {
    name: "徕卡 D-Lux 8 碳纤维手柄",
    category: "徕卡碳纤维保护套手柄",
    description: "强化单手握持稳定性，保留轻盈外观，让随身拍摄更从容。",
    image: "assets/products/leica-dlux8-carbon-grip.jpg",
    theme: "light",
    featured: false,
    ctaLearn: "查看样式",
    ctaBuy: "咨询购买",
  },
  {
    name: "徕卡 M11 碳纤维手柄",
    category: "徕卡碳纤维保护套手柄",
    description: "面向 M 系列机身的轻量握持配件，提升操控稳定性与机身保护。",
    image: "assets/products/leica-m11-carbon-grip.jpg",
    theme: "dark",
    featured: false,
    ctaLearn: "查看样式",
    ctaBuy: "咨询购买",
  },
  {
    name: "徕卡 Q3 碳纤维手柄",
    category: "徕卡碳纤维保护套手柄",
    description: "贴合 Q 系列机身轮廓，兼顾轻量、防护与长时间拍摄握持体验。",
    image: "assets/products/leica-q3-carbon-grip.jpg",
    theme: "light",
    featured: false,
    ctaLearn: "查看样式",
    ctaBuy: "咨询购买",
  },
];

function createProductCard(product) {
  const article = document.createElement("article");
  article.className = `product-card is-${product.theme || "light"}`;

  article.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <div class="product-cta">
      <a href="#" class="btn">${product.ctaLearn}</a>
      <a href="#" class="btn btn-buy">${product.ctaBuy}</a>
    </div>
    <img src="${product.image}" alt="${product.name}" class="product-image" />
  `;

  return article;
}

function renderFeaturedProducts() {
  const featuredContainer = document.querySelector("[data-product-featured]");

  if (!featuredContainer) return;

  products
    .filter((product) => product.featured)
    .forEach((product) => {
      featuredContainer.appendChild(createProductCard(product));
    });
}

function renderProductGroups() {
  const groupContainer = document.querySelector("[data-product-groups]");

  if (!groupContainer) return;

  const categories = [...new Set(products.map((product) => product.category))];

  categories.forEach((category) => {
    const section = document.createElement("section");
    section.className = "product-category";

    const title = document.createElement("h3");
    title.className = "product-category-title";
    title.textContent = category;

    const grid = document.createElement("div");
    grid.className = "product-grid";

    products
      .filter((product) => product.category === category)
      .forEach((product) => {
        grid.appendChild(createProductCard(product));
      });

    section.append(title, grid);
    groupContainer.appendChild(section);
  });
}

function initProductRendering() {
  renderFeaturedProducts();
  renderProductGroups();
}

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
  initProductRendering();
  initScrollReveal();
});
