// ===== Dummy realistic products with images =====
const PRODUCTS = [
  {
    id: 1,
    name: "Daawat Rozana Super Basmati Rice 5kg",
    category: "Groceries",
    price: 629,
    brand: "Daawat",
    rating: 4.5,
    description: "Long-grain basmati rice ideal for daily cooking and biryani.",
    image: "https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Tata Salt Iodized 1kg",
    category: "Groceries",
    price: 25,
    brand: "Tata",
    rating: 4.7,
    description: "Refined iodized salt for everyday use.",
    image: "https://images.pexels.com/photos/4110259/pexels-photo-4110259.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Fortune Sunlite Sunflower Oil 1L",
    category: "Groceries",
    price: 155,
    brand: "Fortune",
    rating: 4.4,
    description: "Light cooking oil with neutral taste.",
    image: "https://images.pexels.com/photos/4110235/pexels-photo-4110235.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Men's Slim Fit Cotton Checks Shirt",
    category: "Dresses",
    price: 899,
    brand: "Roadster",
    rating: 4.2,
    description: "Casual cotton shirt with checkered pattern.",
    image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    name: "Women's Floral A‑Line Midi Dress",
    category: "Dresses",
    price: 1499,
    brand: "AND",
    rating: 4.6,
    description: "Rayon midi dress with floral print.",
    image: "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    name: "Unisex Oversized Graphic T‑Shirt",
    category: "Dresses",
    price: 599,
    brand: "H&M",
    rating: 4.3,
    description: "Soft cotton tee with streetwear graphic.",
    image: "https://images.pexels.com/photos/7671159/pexels-photo-7671159.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 7,
    name: "boAt Airdopes 141 Bluetooth Earbuds",
    category: "Electronics",
    price: 1299,
    brand: "boAt",
    rating: 4.3,
    description: "Up to 42 hours playtime, ENx noise cancellation.",
    image: "https://images.pexels.com/photos/7862651/pexels-photo-7862651.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 8,
    name: "Samsung Galaxy M35 5G (8GB, 128GB)",
    category: "Electronics",
    price: 18999,
    brand: "Samsung",
    rating: 4.4,
    description: "6.5\" sAMOLED display, 50MP camera, 6000 mAh battery.",
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 9,
    name: "HP 15s 11th Gen Core i5 Laptop",
    category: "Electronics",
    price: 52999,
    brand: "HP",
    rating: 4.1,
    description: "15.6\" FHD, 8GB RAM, 512GB SSD, Windows 11.",
    image: "https://images.pexels.com/photos/18104/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 10,
    name: "Fastrack Casual Analog Watch for Men",
    category: "Watches",
    price: 2195,
    brand: "Fastrack",
    rating: 4.2,
    description: "Leather strap, 5 ATM water resistance.",
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 11,
    name: "Fire‑Boltt Ninja Call Pro Smartwatch",
    category: "Watches",
    price: 1999,
    brand: "Fire‑Boltt",
    rating: 4.1,
    description: "Bluetooth calling, SpO2, 60+ sports modes.",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 12,
    name: "Titan Raga Viva Analog Watch for Women",
    category: "Watches",
    price: 4595,
    brand: "Titan",
    rating: 4.5,
    description: "Elegant stainless‑steel strap watch.",
    image: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 13,
    name: "Rich Dad Poor Dad (Anniversary Edition)",
    category: "Books",
    price: 349,
    brand: "Robert T. Kiyosaki",
    rating: 4.6,
    description: "Personal finance classic on money mindset.",
    image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 14,
    name: "Atomic Habits",
    category: "Books",
    price: 429,
    brand: "James Clear",
    rating: 4.8,
    description: "Improve habits with small daily changes.",
    image: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 15,
    name: "Introduction to Algorithms, 4th Edition",
    category: "Books",
    price: 999,
    brand: "Cormen et al.",
    rating: 4.5,
    description: "Comprehensive algorithms reference.",
    image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const STORAGE_KEYS = {
  SEARCHES: "neo_searches",
  LAST_SEARCH: "neo_last_search",
  CART: "neo_cart",
  ORDERS: "neo_orders",
  THEME: "neo_theme",
  NAME: "neo_name",
  FAVORITES: "neo_favorites"
};

function loadJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function logSearch(term) {
  if (!term) return;
  let list = loadJSON(STORAGE_KEYS.SEARCHES, []);
  list.unshift(term);
  list = [...new Set(list)].slice(0, 15);
  saveJSON(STORAGE_KEYS.SEARCHES, list);
  localStorage.setItem(STORAGE_KEYS.LAST_SEARCH, term);
}

// Cart helpers
function getCart() {
  return loadJSON(STORAGE_KEYS.CART, []);
}

function setCart(cart) {
  saveJSON(STORAGE_KEYS.CART, cart);
  updateCartCount();
}

function addToCart(productId, qty = 1) {
  qty = Number(qty) || 1;
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === productId);
  if (idx >= 0) {
    cart[idx].qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  setCart(cart);
}

function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (!el) return;
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  el.textContent = totalQty;
}

// Favorites
function getFavorites() {
  return loadJSON(STORAGE_KEYS.FAVORITES, []);
}

function toggleFavorite(productId) {
  let favs = getFavorites();
  if (favs.includes(productId)) {
    favs = favs.filter(id => id !== productId);
  } else {
    favs.push(productId);
  }
  saveJSON(STORAGE_KEYS.FAVORITES, favs);
  return favs;
}

function isFavorite(productId) {
  return getFavorites().includes(productId);
}
