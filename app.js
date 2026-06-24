const EMAIL = "sharixa393@gmail.com";
const PHONE = "9643528235";

const collections = {
  men: {
    label: "Male",
    headline: "Sharp frames for everyday confidence",
    shade: "#80A8C4",
    frame: ["#111D22", "#273C42", "#7A4A31", "#1D2F58", "#56514A"],
    lens: ["#7FA9C9", "#9AB7A9", "#B8A67D", "#6F8799", "#8C9AA8"],
    names: ["Aviator Edge", "Metro Square", "Carbon Flex", "Drive Polar", "Boardroom Classic"],
    fits: ["Aviator", "Rectangle", "Square", "Sport", "Wayfarer"]
  },
  women: {
    label: "Female",
    headline: "Elegant silhouettes with refined details",
    shade: "#D86D5B",
    frame: ["#231C23", "#794850", "#A56A43", "#3D2A52", "#74411F"],
    lens: ["#D6A2AA", "#B896C9", "#E3BE89", "#A9C0C4", "#B7766A"],
    names: ["Catwalk Glow", "Pearl Round", "Rose Mirage", "Velvet Club", "Luxe Butterfly"],
    fits: ["Cat Eye", "Round", "Butterfly", "Oval", "Clubmaster"]
  },
  kids: {
    label: "Child",
    headline: "Lightweight goggles made for active days",
    shade: "#7BB9A7",
    frame: ["#206B72", "#E08A3E", "#6378D8", "#D95778", "#72A344"],
    lens: ["#9ED9E6", "#F4C06F", "#A7B3F0", "#F0A2B5", "#B7D98B"],
    names: ["Junior Pop", "Playproof Mini", "Sunny Dash", "Campus Cool", "Tiny Trail"],
    fits: ["Round", "Flexible", "Sport", "Oval", "Square"]
  }
};

const shapePaths = {
  Aviator: {
    left: "M59 112 C64 82 95 78 120 92 C134 100 128 139 111 153 C92 169 55 151 59 112Z",
    right: "M180 92 C205 78 236 82 241 112 C245 151 208 169 189 153 C172 139 166 100 180 92Z"
  },
  Rectangle: {
    left: "M56 97 Q56 82 71 82 H127 Q142 82 142 97 V135 Q142 150 127 150 H71 Q56 150 56 135Z",
    right: "M158 97 Q158 82 173 82 H229 Q244 82 244 97 V135 Q244 150 229 150 H173 Q158 150 158 135Z"
  },
  Square: {
    left: "M54 94 Q56 78 75 77 H125 Q143 78 146 96 L139 136 Q136 154 116 155 H77 Q58 154 55 136Z",
    right: "M154 96 Q157 78 175 77 H225 Q244 78 246 94 L245 136 Q242 154 223 155 H184 Q164 154 161 136Z"
  },
  Sport: {
    left: "M50 105 C66 78 121 74 148 92 C139 128 124 153 88 154 C61 154 45 132 50 105Z",
    right: "M152 92 C179 74 234 78 250 105 C255 132 239 154 212 154 C176 153 161 128 152 92Z"
  },
  Wayfarer: {
    left: "M55 88 L144 80 L134 150 H76 Q61 149 58 134Z",
    right: "M156 80 L245 88 L242 134 Q239 149 224 150 H166Z"
  },
  "Cat Eye": {
    left: "M47 96 C78 72 122 82 146 104 C130 145 95 162 64 143 C52 135 47 118 47 96Z",
    right: "M154 104 C178 82 222 72 253 96 C253 118 248 135 236 143 C205 162 170 145 154 104Z"
  },
  Round: {
    left: "M58 116 A42 42 0 1 0 142 116 A42 42 0 1 0 58 116Z",
    right: "M158 116 A42 42 0 1 0 242 116 A42 42 0 1 0 158 116Z"
  },
  Butterfly: {
    left: "M50 94 C78 69 132 77 150 106 C139 144 108 167 72 151 C53 143 45 117 50 94Z",
    right: "M150 106 C168 77 222 69 250 94 C255 117 247 143 228 151 C192 167 161 144 150 106Z"
  },
  Oval: {
    left: "M55 116 C55 91 75 80 103 82 C131 84 148 96 146 119 C144 144 125 155 99 154 C72 153 55 141 55 116Z",
    right: "M154 119 C152 96 169 84 197 82 C225 80 245 91 245 116 C245 141 228 153 201 154 C175 155 156 144 154 119Z"
  },
  Clubmaster: {
    left: "M57 95 Q94 75 143 94 L135 146 Q100 162 65 145Z",
    right: "M157 94 Q206 75 243 95 L235 145 Q200 162 165 146Z"
  },
  Flexible: {
    left: "M56 102 Q80 80 122 86 Q146 92 142 120 Q138 151 103 153 Q62 155 56 126Z",
    right: "M158 120 Q154 92 178 86 Q220 80 244 102 L244 126 Q238 155 197 153 Q162 151 158 120Z"
  }
};

const products = Object.entries(collections).flatMap(([category, config]) => {
  return Array.from({ length: 20 }, (_, index) => {
    const n = index + 1;
    const fit = config.fits[index % config.fits.length];
    const baseName = config.names[index % config.names.length];
    const frame = config.frame[index % config.frame.length];
    const lens = config.lens[(index + Math.floor(index / 3)) % config.lens.length];
    const price = category === "kids" ? 799 + index * 95 : category === "women" ? 1199 + index * 130 : 999 + index * 140;
    return {
      id: `${category}-${String(n).padStart(2, "0")}`,
      category,
      title: `${baseName} ${String(n).padStart(2, "0")}`,
      fit,
      price,
      frame,
      lens,
      accent: config.shade,
      tag: n % 5 === 0 ? "New" : n % 4 === 0 ? "Polarized" : n % 3 === 0 ? "UV400" : "Lightweight"
    };
  });
});

const state = {
  category: new URLSearchParams(window.location.search).get("category") || "all",
  query: "",
  sort: "featured",
  cart: load("shariqa-cart", []),
  wishlist: load("shariqa-wishlist", [])
};

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function save() {
  localStorage.setItem("shariqa-cart", JSON.stringify(state.cart));
  localStorage.setItem("shariqa-wishlist", JSON.stringify(state.wishlist));
}

function currency(value) {
  return `Rs. ${value.toLocaleString("en-IN")}`;
}

function productSvg(product, large = false) {
  const shape = shapePaths[product.fit] || shapePaths.Rectangle;
  const bg = product.category === "men" ? "#E9F0F2" : product.category === "women" ? "#F7E8E5" : "#E6F2E9";
  const sparkle = product.category === "kids" ? "M38 52 L47 63 L36 72 L27 61Z" : "M37 55 L43 63 L34 69 L28 60Z";
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${large ? 640 : 420}" height="${large ? 430 : 320}" viewBox="0 0 300 220">
    <rect width="300" height="220" rx="18" fill="${bg}"/>
    <circle cx="238" cy="42" r="28" fill="${product.accent}" opacity=".28"/>
    <circle cx="64" cy="176" r="24" fill="#E8C36B" opacity=".24"/>
    <path d="${sparkle}" fill="${product.accent}" opacity=".46"/>
    <path d="M18 93 C48 89 53 101 58 115" stroke="${product.frame}" stroke-width="8" stroke-linecap="round" opacity=".95"/>
    <path d="M282 93 C252 89 247 101 242 115" stroke="${product.frame}" stroke-width="8" stroke-linecap="round" opacity=".95"/>
    <path d="${shape.left}" fill="${product.lens}" opacity=".78"/>
    <path d="${shape.right}" fill="${product.lens}" opacity=".78"/>
    <path d="${shape.left}" fill="none" stroke="${product.frame}" stroke-width="9" stroke-linejoin="round"/>
    <path d="${shape.right}" fill="none" stroke="${product.frame}" stroke-width="9" stroke-linejoin="round"/>
    <path d="M141 111 C146 106 154 106 159 111" fill="none" stroke="${product.frame}" stroke-width="7" stroke-linecap="round"/>
    <path d="M79 94 C94 86 116 88 130 100" fill="none" stroke="#FFFFFF" stroke-width="5" opacity=".28" stroke-linecap="round"/>
    <path d="M180 94 C195 86 217 88 231 100" fill="none" stroke="#FFFFFF" stroke-width="5" opacity=".28" stroke-linecap="round"/>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function icon(name) {
  const icons = {
    bag: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 8h12l-1 13H7L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',
    heart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
    menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    plus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg>',
    search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    phone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9Z"/></svg>',
    shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
    eye: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
    truck: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1"><path d="M3 6h12v10H3z"/><path d="M15 10h4l2 3v3h-6z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
    filter: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 7h16M7 12h10M10 17h4"/></svg>'
  };
  return icons[name] || "";
}

function productCard(product) {
  const wished = state.wishlist.includes(product.id);
  return `
    <article class="product-card reveal" data-category="${product.category}" data-name="${product.title.toLowerCase()} ${product.fit.toLowerCase()} ${product.tag.toLowerCase()}">
      <div class="product-media">
        <img src="${productSvg(product)}" alt="${product.title} ${collections[product.category].label} goggles">
        <button class="icon-button wish ${wished ? "active" : ""}" type="button" data-wish="${product.id}" aria-label="Add ${product.title} to wishlist">${icon("heart")}</button>
      </div>
      <div class="product-info">
        <h3>${product.title}</h3>
        <div class="meta"><span>${collections[product.category].label}</span><span>${product.fit} - ${product.tag}</span></div>
        <div class="price-row">
          <span class="price">${currency(product.price)}</span>
          <button class="small-button" type="button" data-add="${product.id}" aria-label="Add ${product.title} to cart">${icon("bag")}</button>
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;
  let list = products.filter((product) => {
    const categoryMatch = state.category === "all" || product.category === state.category;
    const text = `${product.title} ${product.fit} ${product.tag} ${collections[product.category].label}`.toLowerCase();
    return categoryMatch && text.includes(state.query.toLowerCase());
  });
  if (state.sort === "low") list = [...list].sort((a, b) => a.price - b.price);
  if (state.sort === "high") list = [...list].sort((a, b) => b.price - a.price);
  if (state.sort === "name") list = [...list].sort((a, b) => a.title.localeCompare(b.title));

  grid.innerHTML = list.map(productCard).join("");
  document.querySelectorAll("[data-count]").forEach((node) => {
    const cat = node.dataset.count;
    node.textContent = cat === "all" ? products.length : products.filter((p) => p.category === cat).length;
  });
  revealNow();
}

function renderFeatured() {
  const grid = document.querySelector("[data-featured-grid]");
  if (!grid) return;
  const featured = [...products.slice(0, 4), ...products.slice(20, 24), ...products.slice(40, 44)];
  grid.innerHTML = featured.map(productCard).join("");
  revealNow();
}

function renderCategoryVisuals() {
  document.querySelectorAll("[data-category-visual]").forEach((img) => {
    const product = products.find((item) => item.category === img.dataset.categoryVisual);
    img.src = productSvg(product, true);
  });
}

function setCategory(category) {
  state.category = category;
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === category);
  });
  renderProducts();
}

function updateBadges() {
  const total = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll("[data-cart-count]").forEach((node) => (node.textContent = total));
  document.querySelectorAll("[data-wishlist-count]").forEach((node) => (node.textContent = state.wishlist.length));
}

function addToCart(id) {
  const current = state.cart.find((item) => item.id === id);
  if (current) current.qty += 1;
  else state.cart.push({ id, qty: 1 });
  save();
  renderCart();
  openDrawer();
}

function toggleWish(id) {
  state.wishlist = state.wishlist.includes(id)
    ? state.wishlist.filter((item) => item !== id)
    : [...state.wishlist, id];
  save();
  updateBadges();
  renderProducts();
  renderFeatured();
}

function renderCart() {
  const drawerItems = document.querySelector("[data-drawer-items]");
  if (!drawerItems) return;
  updateBadges();
  if (!state.cart.length) {
    drawerItems.innerHTML = '<p class="form-note">Your cart is empty. Add a frame you like and Shariqa will receive your inquiry.</p>';
  } else {
    drawerItems.innerHTML = state.cart
      .map((item) => {
        const product = products.find((p) => p.id === item.id);
        if (!product) return "";
        return `
        <div class="drawer-item">
          <img src="${productSvg(product)}" alt="${product.title}">
          <div>
            <h3>${product.title}</h3>
            <p>${currency(product.price)} - ${collections[product.category].label}</p>
            <div class="qty">
              <button type="button" data-qty="${product.id}" data-step="-1" aria-label="Decrease quantity">-</button>
              <strong>${item.qty}</strong>
              <button type="button" data-qty="${product.id}" data-step="1" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="remove" type="button" data-remove="${product.id}" aria-label="Remove ${product.title}">${icon("close")}</button>
        </div>`;
      })
      .join("");
  }
  const total = state.cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  document.querySelectorAll("[data-cart-total]").forEach((node) => (node.textContent = currency(total)));
}

function changeQty(id, step) {
  const item = state.cart.find((entry) => entry.id === id);
  if (!item) return;
  item.qty += Number(step);
  if (item.qty <= 0) state.cart = state.cart.filter((entry) => entry.id !== id);
  save();
  renderCart();
}

function openDrawer() {
  document.body.classList.add("drawer-open");
  document.querySelector("[data-drawer]")?.classList.add("open");
  document.querySelector("[data-backdrop]")?.classList.add("open");
}

function closeDrawer() {
  document.body.classList.remove("drawer-open");
  document.querySelector("[data-drawer]")?.classList.remove("open");
  document.querySelector("[data-backdrop]")?.classList.remove("open");
}

function checkoutEmail() {
  if (!state.cart.length) return;
  const lines = state.cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? `${product.title} x ${item.qty} - ${currency(product.price * item.qty)}` : "";
  });
  const total = document.querySelector("[data-cart-total]")?.textContent || "";
  const subject = "New Shariqa Eyewear order inquiry";
  const body = `Hello Shariqa,%0D%0A%0D%0AI want to ask about these goggles:%0D%0A${encodeURIComponent(lines.join("\n"))}%0D%0A%0D%0ATotal: ${encodeURIComponent(total)}%0D%0APhone: ${PHONE}`;
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
}

function wireForms() {
  document.querySelectorAll("[data-inquiry-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "";
      const phone = data.get("phone") || "";
      const email = data.get("email") || "";
      const category = data.get("category") || "";
      const message = data.get("message") || "";
      const subject = `Shariqa Eyewear inquiry from ${name}`;
      const body = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Category: ${category}`,
        "",
        `Message: ${message}`
      ].join("\n");
      const status = form.querySelector("[data-form-status]");
      if (status) status.textContent = "Opening email app for sharixa393@gmail.com...";
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
}

function revealNow() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => observer.observe(item));
}

function hydrateIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icon(node.dataset.icon);
  });
}

function init() {
  hydrateIcons();
  renderCategoryVisuals();
  renderFeatured();
  renderProducts();
  renderCart();
  wireForms();

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === state.category);
    button.addEventListener("click", () => setCategory(button.dataset.tab));
  });
  document.querySelector("[data-search]")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderProducts();
  });
  document.querySelector("[data-sort]")?.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });
  document.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add]");
    const wish = event.target.closest("[data-wish]");
    const cart = event.target.closest("[data-open-cart]");
    const close = event.target.closest("[data-close-cart]");
    const remove = event.target.closest("[data-remove]");
    const qty = event.target.closest("[data-qty]");
    const checkout = event.target.closest("[data-checkout]");
    const menu = event.target.closest("[data-menu]");
    if (add) addToCart(add.dataset.add);
    if (wish) toggleWish(wish.dataset.wish);
    if (cart) openDrawer();
    if (close || event.target.matches("[data-backdrop]")) closeDrawer();
    if (remove) {
      state.cart = state.cart.filter((item) => item.id !== remove.dataset.remove);
      save();
      renderCart();
    }
    if (qty) changeQty(qty.dataset.qty, qty.dataset.step);
    if (checkout) checkoutEmail();
    if (menu) document.querySelector("[data-nav]")?.classList.toggle("open");
  });
  revealNow();
}

document.addEventListener("DOMContentLoaded", init);
