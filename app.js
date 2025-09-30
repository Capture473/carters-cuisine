const DEFAULT_MEALS = [
  {
    id: 'seafood-boil',
    name: 'Garlic Butter Seafood Boil',
    description: 'Shrimp, crab, andouille sausage, corn, and potatoes tossed in our house garlic butter.',
    day: 'Day 1',
    calories: 720,
    protein: 42,
    image: 'https://images.unsplash.com/photo-1604908177522-4023f7ddc5b6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'oil-down',
    name: 'Grenadian Oil Down Bowl',
    description: 'Breadfruit simmered in coconut milk with callaloo, pumpkin, turmeric, and smoked turkey.',
    day: 'Day 1',
    calories: 640,
    protein: 28,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'jerk-chicken',
    name: 'Jerk Chicken Power Plate',
    description: 'Fire-grilled jerk chicken with roasted sweet potatoes, callaloo, and pineapple salsa.',
    day: 'Day 2',
    calories: 580,
    protein: 46,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'veggie-bowl',
    name: 'Island Veggie Nourish Bowl',
    description: 'Curry chickpeas, turmeric quinoa, roasted peppers, and coconut lime dressing.',
    day: 'Day 2',
    calories: 510,
    protein: 22,
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'citrus-salmon',
    name: 'Citrus Glazed Salmon',
    description: 'Orange-ginger glazed salmon with coconut rice and blistered green beans.',
    day: 'Day 3',
    calories: 560,
    protein: 38,
    image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=800&q=80',
  },
];

const DEFAULT_MEAL_PRICE_USD = 20;

const DEFAULT_EXTRAS = [
  { id: 'plantain-chips', name: 'Crispy Plantain Chips', price: 6 },
  { id: 'hydration-boost', name: 'Sorrel & Citrus Hydration Boost', price: 8 },
  { id: 'protein-bite', name: 'Cocoa Protein Energy Bite', price: 4 },
  { id: 'avocado-salsa', name: 'Avocado Herb Salsa', price: 3 },
];

const DEFAULT_INVENTORY = [
  { id: 'snapper', item: 'Fresh Snapper Fillets', onHand: 12, unit: 'lbs', reorderPoint: 5 },
  { id: 'breadfruit', item: 'Breadfruit', onHand: 8, unit: 'whole', reorderPoint: 3 },
  { id: 'callaloo', item: 'Callaloo Bundles', onHand: 15, unit: 'bundles', reorderPoint: 6 },
  { id: 'containers', item: 'Meal Prep Containers', onHand: 90, unit: 'pcs', reorderPoint: 40 },
  { id: 'ginger', item: 'Fresh Ginger Root', onHand: 6, unit: 'lbs', reorderPoint: 2 },
];

const DEFAULT_TESTIMONIALS = [
  {
    id: 't1',
    name: 'Kayla, Term 2',
    message: 'Having meals dropped to my dorm keeps me from skipping study blocks. The portions fuel me all day.',
  },
  {
    id: 't2',
    name: 'Marcus, Term 3',
    message: 'The jerk chicken prep means one less thing to stress about during exams. Always fresh and on time.',
  },
  {
    id: 't3',
    name: 'Priya, Clinical Years',
    message: 'Meal prep Fridays are clutch — balanced dishes that fit my schedule and taste like home.',
  },
];

const DEFAULT_INSTAGRAM_POSTS = [
  {
    id: 'ig-default-1',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
    caption: 'Fresh jerk chicken trays heading out to SGU housing.',
    permalink: 'https://www.instagram.com/carterscuisinegrenada/',
  },
  {
    id: 'ig-default-2',
    image: 'https://images.unsplash.com/photo-1604908177522-4023f7ddc5b6?auto=format&fit=crop&w=800&q=80',
    caption: 'Seafood boil nights keep the island cravings satisfied.',
    permalink: 'https://www.instagram.com/carterscuisinegrenada/',
  },
  {
    id: 'ig-default-3',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80',
    caption: 'Veggie nourish bowls lined up for Friday pickups.',
    permalink: 'https://www.instagram.com/carterscuisinegrenada/',
  },
  {
    id: 'ig-default-4',
    image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=800&q=80',
    caption: 'Glazed salmon finishing in the kitchen pass.',
    permalink: 'https://www.instagram.com/carterscuisinegrenada/',
  },
  {
    id: 'ig-default-5',
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80',
    caption: 'Fresh produce haul ready for prep day.',
    permalink: 'https://www.instagram.com/carterscuisinegrenada/',
  },
  {
    id: 'ig-default-6',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80',
    caption: 'Hydration boosters in rotation for long lecture days.',
    permalink: 'https://www.instagram.com/carterscuisinegrenada/',
  },
];

const DEFAULT_INTEGRATIONS = {
  paypalClientId: '',
  mealPriceUsd: DEFAULT_MEAL_PRICE_USD,
  paypalCheckoutLink: '',
  instagramUsername: 'carterscuisinegrenada',
  instagramToken: '',
};

const PAYPAL_CURRENCY = 'USD';
const DEFAULT_OWNER_EMAIL = 'carterscuisinegrenada@gmail.com';

let paypalSdkPromise = null;
let paypalIntegrationListenerRegistered = false;

const STORAGE_KEYS = {
  meals: 'cartersCuisineMeals',
  extras: 'cartersCuisineExtras',
  inventory: 'cartersCuisineInventory',
  surveyEmail: 'cartersCuisineSurveyEmail',
  testimonials: 'cartersCuisineTestimonials',
  integrations: 'cartersCuisineIntegrations',
  testimonialInbox: 'cartersCuisineTestimonialInbox',
  instagramCache: 'cartersCuisineInstagramCache',
  lastOrder: 'cartersCuisineLastOrder',
};

const DISH_SELECT_LIMIT = { min: 3, max: 5 };
const MENU_DAY_SEQUENCE = ['Day 1', 'Day 2', 'Day 3'];

let ownerImageMap = {};
let mealState = [];

let testimonialRotation = {
  timerId: null,
  index: 0,
  items: [],
};

const OWNER_SESSION_KEY = 'cartersCuisineOwnerSession';
const OWNER_CREDENTIALS = {
  username: 'admin@carterscuisine.com',
  password: 'CookForSGU2024',
};

const USD_FORMATTER = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function normalizeCurrency(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.round(number * 100) / 100;
}

function formatCurrency(amount) {
  return USD_FORMATTER.format(normalizeCurrency(amount));
}

function resolveMealUnitPrice(integrations) {
  const value = Number(integrations?.mealPriceUsd);
  if (Number.isFinite(value) && value > 0) {
    return normalizeCurrency(value);
  }
  return normalizeCurrency(DEFAULT_MEAL_PRICE_USD);
}

function calculateOrderTotals({ dishIds = [], extraIds = [], extras = [], integrations = {} } = {}) {
  const mealUnit = resolveMealUnitPrice(integrations);
  const mealCount = Array.isArray(dishIds) ? dishIds.length : 0;
  const mealsTotal = normalizeCurrency(mealUnit * mealCount);
  const extrasTotalRaw = Array.isArray(extraIds)
    ? extraIds.reduce((total, id) => {
        if (!Array.isArray(extras)) return total;
        const match = extras.find((item) => item.id === id);
        const price = Number(match?.price);
        return total + (Number.isFinite(price) && price > 0 ? price : 0);
      }, 0)
    : 0;
  const extrasTotal = normalizeCurrency(extrasTotalRaw);
  const total = normalizeCurrency(mealsTotal + extrasTotal);
  return {
    mealUnit,
    mealCount,
    mealsTotal,
    extrasTotal,
    total,
  };
}

const clone = typeof structuredClone === 'function'
  ? (value) => structuredClone(value)
  : (value) => JSON.parse(JSON.stringify(value));

const randomId = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

document.addEventListener('DOMContentLoaded', () => {
  mealState = loadMeals();

  const state = {
    extras: loadFromStorage(STORAGE_KEYS.extras, DEFAULT_EXTRAS),
    inventory: loadFromStorage(STORAGE_KEYS.inventory, DEFAULT_INVENTORY),
    surveyEmail: loadSurveyEmail(),
    testimonials: loadTestimonials(),
    integrations: loadIntegrations(),
    testimonialInbox: loadFromStorage(STORAGE_KEYS.testimonialInbox, []),
  };

  ownerImageMap = collectOwnerImages();
  setupAutoSections();
  renderMeals();
  renderExtras(state.extras);
  renderInventory(state.inventory);
  renderTestimonials(state.testimonials);
  renderTestimonialInbox(state);
  wireMenuManager();
  wireOrderForm(state);
  wireExtrasManager(state);
  wireInventoryManager(state);
  wireTestimonialForm(state);
  wireSurveyEmailManager(state);
  wireIntegrationManager(state);
  wireTestimonialInbox(state);
  refreshContactTargets(state);
  setupPaymentPage(state);
  wirePaymentContactForm(state);
  hydrateInstagramFeed(state);
  setupOwnerPortal();
  hydrateFooterYear();
});

function hydrateFooterYear() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

function setupAutoSections() {
  const containers = Array.from(document.querySelectorAll('main details.auto-section'));
  if (!containers.length) {
    return;
  }

  const expand = (container) => {
    if (container.open) return;
    container.open = true;
  };

  const collapse = (container) => {
    if (!container.open) return;
    if (container.contains(document.activeElement)) return;
    container.open = false;
  };

  const updateState = (container, summary) => {
    container.classList.toggle('is-open', container.open);
    if (summary) {
      summary.setAttribute('aria-expanded', container.open ? 'true' : 'false');
    }
  };

  const observerSupported = typeof window !== 'undefined' && 'IntersectionObserver' in window;
  let observer = null;

  if (observerSupported) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const container = entry.target;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            if (container.dataset.userLocked === 'true') return;
            expand(container);
          } else if (entry.intersectionRatio <= 0.08 || entry.boundingClientRect.top > window.innerHeight) {
            delete container.dataset.userLocked;
            collapse(container);
          }
        });
      },
      { threshold: [0, 0.08, 0.3, 0.6] },
    );
  }

  containers.forEach((container) => {
    const summary = container.querySelector('summary.section-toggle-button');

    updateState(container, summary);

    if (summary) {
      summary.addEventListener('click', () => {
        if (container.open) {
          container.dataset.userLocked = 'true';
        } else {
          delete container.dataset.userLocked;
        }
      });
    }

    container.addEventListener('toggle', () => {
      updateState(container, summary);
    });

    if (observer) {
      observer.observe(container);
    }
  });

  const revealFromHash = () => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    const container = target.closest('details.auto-section');
    if (container) {
      delete container.dataset.userLocked;
      expand(container);
    }
  };

  revealFromHash();

  window.addEventListener('hashchange', revealFromHash);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      const href = anchor.getAttribute('href');
      const id = href ? href.slice(1) : '';
      if (!id) return;
      const target = document.getElementById(id);
      const container = target?.closest('details.auto-section');
      if (container) {
        delete container.dataset.userLocked;
        expand(container);
      }
    });
  });
}

function collectOwnerImages() {
  const map = {};
  document.querySelectorAll('img[data-meal-image]').forEach((img) => {
    const id = (img.dataset.mealImage || '').trim();
    const src = img.getAttribute('src');
    if (!id || !src) return;
    map[id] = {
      src,
      alt: img.getAttribute('alt') || '',
    };
  });
  return map;
}

function loadFromStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn(`Unable to read ${key} from storage`, err);
  }
  return clone(fallback);
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`Unable to save ${key} to storage`, err);
  }
}

function loadIntegrations() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.integrations);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object') {
        return { ...clone(DEFAULT_INTEGRATIONS), ...parsed };
      }
    }
  } catch (err) {
    console.warn('Unable to read integrations from storage', err);
  }
  return clone(DEFAULT_INTEGRATIONS);
}

function saveIntegrations(value) {
  try {
    localStorage.setItem(STORAGE_KEYS.integrations, JSON.stringify({ ...DEFAULT_INTEGRATIONS, ...value }));
  } catch (err) {
    console.warn('Unable to save integrations to storage', err);
  }
}

function clearIntegrations() {
  try {
    localStorage.removeItem(STORAGE_KEYS.integrations);
  } catch (err) {
    console.warn('Unable to clear integrations from storage', err);
  }
}

function loadInstagramCache() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.instagramCache);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object' && Array.isArray(parsed.items)) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Unable to read Instagram cache from storage', err);
  }
  return null;
}

function saveInstagramCache(cache) {
  try {
    localStorage.setItem(STORAGE_KEYS.instagramCache, JSON.stringify(cache));
  } catch (err) {
    console.warn('Unable to save Instagram cache to storage', err);
  }
}

function saveLastOrder(order) {
  if (!order) return;
  try {
    const payload = {
      ...order,
      savedAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEYS.lastOrder, JSON.stringify(payload));
  } catch (err) {
    console.warn('Unable to save last order to storage', err);
  }
}

function loadLastOrder() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.lastOrder);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    if (parsed && typeof parsed === 'object') {
      return parsed;
    }
  } catch (err) {
    console.warn('Unable to read last order from storage', err);
  }
  return null;
}

function clearLastOrder() {
  try {
    localStorage.removeItem(STORAGE_KEYS.lastOrder);
  } catch (err) {
    console.warn('Unable to clear last order from storage', err);
  }
}

function loadSurveyEmail() {
  try {
    return localStorage.getItem(STORAGE_KEYS.surveyEmail) || '';
  } catch (err) {
    console.warn('Unable to read survey email from storage', err);
    return '';
  }
}

function saveSurveyEmail(value) {
  try {
    localStorage.setItem(STORAGE_KEYS.surveyEmail, value);
  } catch (err) {
    console.warn('Unable to save survey email to storage', err);
  }
}

function clearSurveyEmail() {
  try {
    localStorage.removeItem(STORAGE_KEYS.surveyEmail);
  } catch (err) {
    console.warn('Unable to clear survey email from storage', err);
  }
}

function loadMeals() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.meals);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        const normalized = normalizeMeals(parsed);
        if (normalized.length) {
          return normalized;
        }
      }
    }
  } catch (err) {
    console.warn('Unable to read meals from storage', err);
  }
  return sortMeals(clone(DEFAULT_MEALS));
}

function saveMeals(meals) {
  try {
    localStorage.setItem(STORAGE_KEYS.meals, JSON.stringify(meals));
  } catch (err) {
    console.warn('Unable to save meals to storage', err);
  }
}

function normalizeMeals(source) {
  const normalized = [];
  const seen = new Set();

  (Array.isArray(source) ? source : []).forEach((entry) => {
    const meal = sanitizeMeal(entry);
    if (!meal) return;

    let candidateId = (meal.id || '').trim();
    if (!candidateId || seen.has(candidateId)) {
      candidateId = ensureUniqueMealId(meal.name, normalized, candidateId);
    }

    meal.id = candidateId;
    seen.add(candidateId);
    normalized.push(meal);
  });

  return sortMeals(normalized);
}

function sanitizeMeal(raw) {
  if (!raw || typeof raw !== 'object') {
    return null;
  }

  const name = String(raw.name || '').trim();
  const day = String(raw.day || '').trim() || 'Day 1';
  const description = String(raw.description || '').trim();
  const image = String(raw.image || '').trim();
  const id = String(raw.id || '').trim();

  if (!name || !description || !image) {
    return null;
  }

  const calories = Number(raw.calories);
  const protein = Number(raw.protein);

  return {
    id: id || slugify(name),
    name,
    day,
    description,
    image,
    calories: Number.isFinite(calories) && calories >= 0 ? Math.round(calories) : 0,
    protein: Number.isFinite(protein) && protein >= 0 ? Math.round(protein) : 0,
  };
}

function sortMeals(meals) {
  const rank = (day) => {
    const index = MENU_DAY_SEQUENCE.indexOf(day);
    return index === -1 ? MENU_DAY_SEQUENCE.length : index;
  };

  return [...(Array.isArray(meals) ? meals : [])].sort((a, b) => {
    const dayDiff = rank(a.day) - rank(b.day);
    if (dayDiff !== 0) return dayDiff;
    const nameA = (a.name || '').toString();
    const nameB = (b.name || '').toString();
    return nameA.localeCompare(nameB, undefined, { sensitivity: 'base' });
  });
}

function getMeals() {
  return Array.isArray(mealState) ? mealState : [];
}

function loadTestimonials() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.testimonials);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return parsed.filter((item) => typeof item?.message === 'string' && item.message.trim().length)
          .map((item) => ({
            id: item.id || randomId(),
            name: item.name?.trim() || 'SGU Student',
            message: item.message.trim(),
          }));
      }
    }
  } catch (err) {
    console.warn('Unable to read testimonials from storage', err);
  }
  return clone(DEFAULT_TESTIMONIALS);
}

function saveTestimonials(testimonials) {
  try {
    localStorage.setItem(STORAGE_KEYS.testimonials, JSON.stringify(testimonials));
  } catch (err) {
    console.warn('Unable to save testimonials to storage', err);
  }
}

function renderMeals() {
  renderSchedule();
  renderMealGrid();
  renderOrderDishOptions();
  renderMenuManager();
}

function formatMealMeta(meal) {
  if (!meal || typeof meal !== 'object') {
    return '';
  }

  const parts = [];
  if (Number.isFinite(meal.calories)) {
    parts.push(`${meal.calories} cal`);
  }
  if (Number.isFinite(meal.protein)) {
    parts.push(`${meal.protein}g protein`);
  }
  if (meal.day) {
    parts.push(meal.day);
  }
  return parts.join(' • ');
}

function renderMenuManager() {
  const list = document.getElementById('meal-list');
  if (!list) return;

  const meals = getMeals();

  if (!meals.length) {
    list.innerHTML = '<li class="meal-item empty">Add your first meal above to populate the public menu.</li>';
    return;
  }

  list.innerHTML = meals
    .map((meal) => {
      const meta = formatMealMeta(meal);
      return `
        <li class="meal-item" data-id="${escapeHTML(meal.id)}">
          <div class="meal-item-header">
            <div>
              <span class="meal-item-day">${escapeHTML(meal.day)}</span>
              <strong>${escapeHTML(meal.name)}</strong>
            </div>
            <div class="meal-item-macros">${escapeHTML(meta)}</div>
          </div>
          <p>${escapeHTML(meal.description)}</p>
          <div class="meal-item-actions">
            <button type="button" data-action="edit">Edit</button>
            <button type="button" data-action="remove">Remove</button>
          </div>
        </li>
      `;
    })
    .join('');
}

function renderSchedule() {
  const container = document.getElementById('menu-schedule');
  if (!container) return;

  const meals = getMeals();
  const additionalDays = [...new Set(meals.map((meal) => meal.day).filter((day) => day && !MENU_DAY_SEQUENCE.includes(day)))];
  const sequence = [...MENU_DAY_SEQUENCE, ...additionalDays];

  container.innerHTML = sequence
    .map((day) => {
      const mealsForDay = meals.filter((meal) => meal.day === day);
      const items = mealsForDay.length
        ? mealsForDay
            .map((meal) => {
              const calorieText = Number.isFinite(meal.calories) ? `${meal.calories} cal` : 'N/A';
              const proteinText = Number.isFinite(meal.protein) ? `${meal.protein}g protein` : 'N/A';
              const details = `(${calorieText}, ${proteinText})`;
              return `<li>${escapeHTML(meal.name)} <small>${escapeHTML(details)}</small></li>`;
            })
            .join('')
        : '<li>Chef\'s surprise</li>';

      return `
        <article class="schedule-card">
          <h3>${escapeHTML(day)}</h3>
          <ul>${items}</ul>
        </article>
      `;
    })
    .join('');
}

function renderMealGrid() {
  const grid = document.getElementById('meal-grid');
  if (!grid) return;

  const meals = getMeals();

  if (!meals.length) {
    grid.innerHTML = '<p class="form-hint">Menu coming soon. Add meals in the owner portal.</p>';
    return;
  }

  grid.innerHTML = meals.map((meal) => {
    const photo = resolveMealPhoto(meal);
    const caloriesLabel = Number.isFinite(meal.calories) ? `${meal.calories} cal` : 'N/A';
    const proteinLabel = Number.isFinite(meal.protein) ? `${meal.protein}g protein` : 'N/A';

    return `
      <article class="meal-card">
        <img src="${escapeHTML(photo.src)}" alt="${escapeHTML(photo.alt || meal.name)}" loading="lazy" />
        <div>
          <span class="eyebrow">${escapeHTML(meal.day)}</span>
          <h3>${escapeHTML(meal.name)}</h3>
        </div>
        <p>${escapeHTML(meal.description)}</p>
        <div class="meal-meta">
          <span class="macro-tag">${escapeHTML(caloriesLabel)}</span>
          <span class="macro-tag">${escapeHTML(proteinLabel)}</span>
        </div>
      </article>
    `;
  }).join('');
}

function resolveMealPhoto(meal) {
  const override = ownerImageMap[meal.id];
  return {
    src: override?.src || meal.image,
    alt: override?.alt || meal.name,
  };
}

function setupOwnerPortal() {
  const loginSection = document.getElementById('owner-login');
  const dashboard = document.getElementById('owner-dashboard');
  const form = document.getElementById('owner-login-form');
  const logoutBtn = document.getElementById('owner-logout');
  const errorNode = document.getElementById('owner-login-error');
  const loginNavLink = document.querySelector('a[href="#owner-login"]');

  if (!loginSection || !dashboard || !form) {
    return;
  }

  const unlock = () => {
    loginSection.hidden = true;
    loginSection.setAttribute('aria-hidden', 'true');
    loginSection.style.display = 'none';
    if (loginNavLink) {
      loginNavLink.style.display = 'none';
    }
    dashboard.hidden = false;
    hideError(errorNode);
    form.reset();
    document.dispatchEvent(new CustomEvent('owner-dashboard-unlocked'));
  };

  const lock = () => {
    dashboard.hidden = true;
    loginSection.hidden = false;
    loginSection.removeAttribute('aria-hidden');
    loginSection.style.display = '';
    if (loginNavLink) {
      loginNavLink.style.display = '';
    }
    hideError(errorNode);
    sessionStorage.removeItem(OWNER_SESSION_KEY);
    form.reset();
    document.dispatchEvent(new CustomEvent('owner-dashboard-locked'));
  };

  if (sessionStorage.getItem(OWNER_SESSION_KEY) === 'true') {
    unlock();
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = form.querySelector('#owner-username').value.trim();
    const password = form.querySelector('#owner-password').value.trim();

    if (!username || !password) {
      showError(errorNode, 'Enter both email and access PIN.');
      return;
    }

    const isValid =
      username.toLowerCase() === OWNER_CREDENTIALS.username.toLowerCase() &&
      password === OWNER_CREDENTIALS.password;

    if (!isValid) {
      showError(errorNode, 'Those credentials do not match. Try again or contact Kamal.');
      return;
    }

    sessionStorage.setItem(OWNER_SESSION_KEY, 'true');
    unlock();
  });

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      lock();
    });
  }
}

function renderOrderDishOptions() {
  const container = document.getElementById('order-dishes');
  if (!container) return;

  const meals = getMeals();

  if (!meals.length) {
    container.innerHTML = '<p class="form-hint">Menu dishes will appear here after you add them in the owner portal.</p>';
    return;
  }

  container.innerHTML = meals
    .map((meal) => {
      const meta = formatMealMeta(meal);
      return `
        <label class="checkbox-option" data-day="${escapeHTML(meal.day)}">
          <input type="checkbox" name="dish" value="${escapeHTML(meal.id)}" />
          <span>
            <strong>${escapeHTML(meal.name)}</strong>
            <small>${escapeHTML(meta)}</small>
          </span>
        </label>
      `;
    })
    .join('');
}

function wireMenuManager() {
  const form = document.getElementById('meal-form');
  const list = document.getElementById('meal-list');
  const status = document.getElementById('meal-form-status');
  const cancelBtn = document.getElementById('meal-cancel-edit');
  const resetBtn = document.getElementById('meal-reset');

  if (!form || !list || !status || !cancelBtn || !resetBtn) {
    return;
  }

  const idField = form.querySelector('#meal-id');
  const nameField = form.querySelector('#meal-name');
  const dayField = form.querySelector('#meal-day');
  const descriptionField = form.querySelector('#meal-description');
  const caloriesField = form.querySelector('#meal-calories');
  const proteinField = form.querySelector('#meal-protein');
  const imageField = form.querySelector('#meal-image');
  const defaultStatus = status.textContent;
  let statusTimer = null;

  const setStatus = (message) => {
    if (statusTimer) {
      clearTimeout(statusTimer);
      statusTimer = null;
    }
    status.textContent = message;
    if (message !== defaultStatus) {
      statusTimer = setTimeout(() => {
        status.textContent = defaultStatus;
        statusTimer = null;
      }, 3200);
    }
  };

  const resetForm = () => {
    form.reset();
    idField.value = '';
    cancelBtn.hidden = true;
    setStatus(defaultStatus);
  };

  const populateForm = (meal) => {
    idField.value = meal.id;
    nameField.value = meal.name;
    dayField.value = meal.day;
    descriptionField.value = meal.description;
    caloriesField.value = meal.calories;
    proteinField.value = meal.protein;
    imageField.value = meal.image;
    cancelBtn.hidden = false;
    setStatus('Editing existing meal. Save to apply changes or cancel to discard.');
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  cancelBtn.addEventListener('click', () => {
    resetForm();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const editingId = (idField.value || '').trim();
    const payload = {
      name: nameField.value.trim(),
      day: dayField.value,
      description: descriptionField.value.trim(),
      calories: Math.max(0, Math.round(Number(caloriesField.value))),
      protein: Math.max(0, Math.round(Number(proteinField.value))),
      image: imageField.value.trim(),
    };

    const workingMeals = [...getMeals()];

    if (editingId) {
      const index = workingMeals.findIndex((meal) => meal.id === editingId);
      if (index !== -1) {
        workingMeals[index] = {
          ...workingMeals[index],
          ...payload,
        };
      } else {
        workingMeals.push({ id: editingId, ...payload });
      }
    } else {
      const id = ensureUniqueMealId(payload.name, workingMeals);
      workingMeals.push({ id, ...payload });
    }

    mealState = sortMeals(workingMeals);
    saveMeals(mealState);
    renderMeals();
    resetForm();
    setStatus('Meal saved and synced to the site.');
  });

  list.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const item = button.closest('.meal-item');
    if (!item) return;
    const mealId = item.dataset.id;
    const meal = getMeals().find((entry) => entry.id === mealId);
    if (!meal) return;

    if (button.dataset.action === 'edit') {
      populateForm(meal);
      return;
    }

    if (button.dataset.action === 'remove') {
      if (typeof window !== 'undefined' && !window.confirm('Remove this meal from the public menu?')) {
        return;
      }
      mealState = sortMeals(getMeals().filter((entry) => entry.id !== mealId));
      saveMeals(mealState);
      renderMeals();
      if (idField.value === mealId) {
        resetForm();
      }
      setStatus('Meal removed from the menu.');
    }
  });

  resetBtn.addEventListener('click', () => {
    if (typeof window !== 'undefined' && !window.confirm('Restore the default three-day lineup? This will replace the current dishes.')) {
      return;
    }
    mealState = sortMeals(clone(DEFAULT_MEALS));
    saveMeals(mealState);
    renderMeals();
    resetForm();
    setStatus('Menu restored to the default lineup.');
  });
}

function renderExtras(extras) {
  renderExtrasCheckboxes(extras);
  renderExtrasList(extras);
}

function renderExtrasCheckboxes(extras) {
  const container = document.getElementById('extras-checkboxes');
  if (!container) return;
  if (!Array.isArray(extras)) return;

  container.innerHTML = extras
    .map((extra) => {
      const priceLabel = extra.price ? `$${Number(extra.price).toFixed(2)}` : 'Included';
      return `
        <label class="checkbox-option">
          <input type="checkbox" name="extra" value="${extra.id}" />
          <span>
            <strong>${extra.name}</strong>
            <small>${priceLabel}</small>
          </span>
        </label>
      `;
    })
    .join('');
}

function renderExtrasList(extras) {
  const list = document.getElementById('extras-list');
  if (!list) return;

  if (!extras.length) {
    list.innerHTML = '<li class="extra-item">No extras yet. Add your first one above!</li>';
    return;
  }

  list.innerHTML = extras
    .map((extra) => {
      const price = extra.price ? `$${Number(extra.price).toFixed(2)}` : 'No added cost';
      return `
        <li class="extra-item" data-id="${extra.id}">
          <div class="extra-meta">
            <strong>${extra.name}</strong>
            <span>${price}</span>
          </div>
          <div class="extra-actions">
            <button type="button" data-action="edit">Edit</button>
            <button type="button" data-action="remove">Remove</button>
          </div>
        </li>
      `;
    })
    .join('');
}

function wireExtrasManager(state) {
  const form = document.getElementById('extra-form');
  const list = document.getElementById('extras-list');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const nameField = form.querySelector('#extra-name');
      const priceField = form.querySelector('#extra-price');
      const name = nameField.value.trim();
      const rawPrice = priceField.value.trim();

      if (!name) {
        nameField.focus();
        return;
      }

      const newExtra = {
        id: slugify(name),
        name,
        price: rawPrice ? Number(rawPrice) : 0,
      };

      state.extras.push(newExtra);
      saveToStorage(STORAGE_KEYS.extras, state.extras);
      renderExtras(state.extras);
      form.reset();
    });
  }

  if (list) {
    list.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) return;

      const item = button.closest('.extra-item');
      if (!item) return;

      const id = item.dataset.id;
      const extra = state.extras.find((e) => e.id === id);
      if (!extra) return;

      if (button.dataset.action === 'remove') {
        state.extras = state.extras.filter((e) => e.id !== id);
        saveToStorage(STORAGE_KEYS.extras, state.extras);
        renderExtras(state.extras);
      }

      if (button.dataset.action === 'edit') {
        const newName = prompt('Update extra name', extra.name) || extra.name;
        const newPriceInput = prompt('Update price (leave blank for no extra cost)', extra.price ?? '');
        extra.name = newName.trim() || extra.name;
        extra.id = slugify(extra.name);
        extra.price = newPriceInput ? Number(newPriceInput) : 0;
        saveToStorage(STORAGE_KEYS.extras, state.extras);
        renderExtras(state.extras);
      }
    });
  }
}

function slugify(value) {
  const base = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
  return base || randomId();
}

function ensureUniqueMealId(name, meals, preferredId = '') {
  const existingIds = new Set((Array.isArray(meals) ? meals : []).map((meal) => meal.id));

  if (preferredId) {
    const cleanPreferred = preferredId.trim();
    if (cleanPreferred && !existingIds.has(cleanPreferred)) {
      return cleanPreferred;
    }
  }

  const base = slugify(name);
  if (base && !existingIds.has(base)) {
    return base;
  }

  if (!base) {
    let generated = randomId();
    while (existingIds.has(generated)) {
      generated = randomId();
    }
    return generated;
  }

  let suffix = 2;
  let candidate = `${base}-${suffix}`;
  while (existingIds.has(candidate)) {
    suffix += 1;
    candidate = `${base}-${suffix}`;
  }
  return candidate;
}

function wireOrderForm(state) {
  const form = document.getElementById('order-form');
  const summary = document.getElementById('order-summary');
  const summaryText = document.getElementById('order-summary-text');
  const whatsappLink = document.getElementById('whatsapp-link');
  const closeButton = document.getElementById('order-summary-close');
  const errorMessage = document.getElementById('order-error');
  const paymentLink = document.getElementById('payment-link');
  const totalsNodes = {
    container: document.getElementById('order-totals'),
    meals: document.getElementById('order-meals-total'),
    mealsMeta: document.getElementById('order-meals-meta'),
    extras: document.getElementById('order-extras-total'),
    extrasMeta: document.getElementById('order-extras-meta'),
    total: document.getElementById('order-grand-total'),
  };
  const summaryTotalsNodes = {
    container: document.getElementById('order-summary-totals'),
    meals: document.getElementById('order-summary-meals'),
    mealsMeta: document.getElementById('order-summary-meals-meta'),
    extras: document.getElementById('order-summary-extras'),
    total: document.getElementById('order-summary-total'),
  };
  if (!form || !summary || !summaryText || !whatsappLink || !closeButton) return;

  const getSelectedDishIds = () => [...form.querySelectorAll('input[name="dish"]:checked')].map((input) => input.value);
  const getSelectedExtraIds = () => [...form.querySelectorAll('input[name="extra"]:checked')].map((input) => input.value);

  const updateTotals = () => {
    const dishIds = getSelectedDishIds();
    const extraIds = getSelectedExtraIds();
    const totals = calculateOrderTotals({
      dishIds,
      extraIds,
      extras: state.extras || [],
      integrations: state.integrations || {},
    });

    if (totalsNodes.meals) {
      totalsNodes.meals.textContent = formatCurrency(totals.mealsTotal);
    }
    if (totalsNodes.mealsMeta) {
      const perMeal = formatCurrency(totals.mealUnit);
      totalsNodes.mealsMeta.textContent = dishIds.length
        ? `${dishIds.length} selected • ${perMeal} each`
        : `0 selected • ${perMeal} each`;
    }
    if (totalsNodes.extras) {
      totalsNodes.extras.textContent = formatCurrency(totals.extrasTotal);
    }
    if (totalsNodes.extrasMeta) {
      totalsNodes.extrasMeta.textContent = extraIds.length
        ? `${extraIds.length} add-on${extraIds.length === 1 ? '' : 's'} selected`
        : 'No extras selected';
    }
    if (totalsNodes.total) {
      totalsNodes.total.textContent = formatCurrency(totals.total);
    }

    return totals;
  };

  const renderSummaryTotals = (pricing) => {
    if (!summaryTotalsNodes.container) return;
    if (!pricing) {
      summaryTotalsNodes.container.hidden = true;
      return;
    }
    summaryTotalsNodes.container.hidden = false;
    if (summaryTotalsNodes.meals) {
      summaryTotalsNodes.meals.textContent = formatCurrency(pricing.mealsTotal);
    }
    if (summaryTotalsNodes.mealsMeta) {
      const perMeal = formatCurrency(pricing.mealUnit);
      const count = pricing.mealCount || 0;
      summaryTotalsNodes.mealsMeta.textContent = `${count} × ${perMeal}`;
    }
    if (summaryTotalsNodes.extras) {
      summaryTotalsNodes.extras.textContent = formatCurrency(pricing.extrasTotal);
    }
    if (summaryTotalsNodes.total) {
      summaryTotalsNodes.total.textContent = formatCurrency(pricing.total);
    }
  };

  form.addEventListener('change', (event) => {
    if (event.target.name === 'dish') {
      enforceDishSelectionLimit(form, errorMessage);
    }
    if (event.target.name === 'dish' || event.target.name === 'extra') {
      updateTotals();
    }
  });

  form.addEventListener('input', (event) => {
    if (event.target.name === 'dish' || event.target.name === 'extra') {
      updateTotals();
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedDishes = [...form.querySelectorAll('input[name="dish"]:checked')];

    if (
      selectedDishes.length < DISH_SELECT_LIMIT.min ||
      selectedDishes.length > DISH_SELECT_LIMIT.max
    ) {
      showError(errorMessage, `Select between ${DISH_SELECT_LIMIT.min} and ${DISH_SELECT_LIMIT.max} dishes to build your three-day plan.`);
      return;
    }

    if (!form.reportValidity()) {
      showError(errorMessage, 'Fill in the required fields before reviewing.');
      return;
    }

    hideError(errorMessage);

    const payload = compileOrderPayload(form, selectedDishes, state.extras, state.integrations);
    const message = formatOrderMessage(payload);
    const orderRecord = {
      ...payload,
      summary: message,
    };

    summaryText.textContent = message;
    whatsappLink.href = `https://wa.me/14734153871?text=${encodeURIComponent(message)}`;
    saveLastOrder(orderRecord);
    if (paymentLink) {
      paymentLink.href = 'payment.html#payment-options';
      paymentLink.hidden = false;
    }
    renderSummaryTotals(payload.pricing);
    summary.hidden = false;
    summary.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  closeButton.addEventListener('click', () => {
    summary.hidden = true;
    window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
  });

  document.addEventListener('integrations-updated', (event) => {
    if (event?.detail?.integrations) {
      state.integrations = { ...state.integrations, ...event.detail.integrations };
      updateTotals();
    }
  });

  updateTotals();
}

function enforceDishSelectionLimit(form, errorMessage) {
  const selected = form.querySelectorAll('input[name="dish"]:checked');
  if (selected.length > DISH_SELECT_LIMIT.max) {
    const last = selected[selected.length - 1];
    last.checked = false;
    showError(errorMessage, `You can only choose up to ${DISH_SELECT_LIMIT.max} dishes per cycle.`);
  } else if (selected.length >= DISH_SELECT_LIMIT.min) {
    hideError(errorMessage);
  }
}

function compileOrderPayload(form, selectedDishes, extras, integrations) {
  const startDate = form.querySelector('#start-date').value;
  const delivery = form.querySelector('#delivery-method').value;
  const contactMethod = form.querySelector('#contact-method').value;
  const contactInfo = form.querySelector('#contact-info').value.trim();
  const notes = form.querySelector('#order-notes').value.trim();

  const dishIds = selectedDishes.map((input) => input.value);

  const dishes = selectedDishes.map((input) => {
    const meal = getMeals().find((item) => item.id === input.value);
    return meal
      ? `${meal.name} — ${meal.calories} cal / ${meal.protein}g • ${meal.day}`
      : input.value;
  });

  const selectedExtraInputs = [...form.querySelectorAll('input[name="extra"]:checked')];
  const extraIds = selectedExtraInputs.map((input) => input.value);

  const selectedExtras = selectedExtraInputs
    .map((input) => extras.find((extra) => extra.id === input.value) || { name: input.value })
    .map((extra) => {
      const priceNumber = Number(extra.price);
      const price = Number.isFinite(priceNumber) && priceNumber > 0 ? formatCurrency(priceNumber) : 'Included';
      return `${extra.name} (${price})`;
    });

  const pricing = calculateOrderTotals({ dishIds, extraIds, extras, integrations });

  return {
    startDate,
    delivery,
    contactMethod,
    contactInfo,
    notes,
    dishes,
    selectedExtras,
    dishIds,
    extraIds,
    pricing,
  };
}

function formatOrderMessage(payload) {
  const { startDate, delivery, contactMethod, contactInfo, dishes, selectedExtras, notes, pricing } = payload;
  const lines = [
    'Carters Cuisine Order Request',
    `Start Date: ${startDate || 'TBD'}`,
    `Delivery Method: ${capitalize(delivery)}`,
    `Contact: ${capitalize(contactMethod)} — ${contactInfo || 'N/A'}`,
    '',
    'Dishes:',
    ...dishes.map((dish) => `• ${dish}`),
    '',
    selectedExtras.length ? 'Extras:' : 'Extras: None',
    ...selectedExtras.map((extra) => `• ${extra}`),
    '',
    notes ? `Notes: ${notes}` : 'Notes: None',
  ];

  if (pricing) {
    const mealMeta = `${pricing.mealCount || 0} × ${formatCurrency(pricing.mealUnit)}`;
    lines.push(
      '',
      'Totals:',
      `Meals subtotal: ${formatCurrency(pricing.mealsTotal)} (${mealMeta})`,
      `Extras subtotal: ${formatCurrency(pricing.extrasTotal)}`,
      `Total to pay: ${formatCurrency(pricing.total)} USD`,
    );
  }

  return lines
    .filter((line, index, arr) => !(line === '' && arr[index + 1] === ''))
    .join('\n');
}

function capitalize(value) {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function showError(node, message) {
  if (!node) return;
  node.textContent = message;
  node.hidden = false;
}

function hideError(node) {
  if (!node) return;
  node.hidden = true;
  node.textContent = '';
}

function showSuccess(node, message) {
  if (!node) return;
  node.textContent = message;
  node.hidden = false;
}

function hideSuccess(node) {
  if (!node) return;
  node.hidden = true;
  node.textContent = '';
}

function renderInventory(inventory) {
  const body = document.getElementById('inventory-body');
  if (!body) return;

  if (!inventory.length) {
    body.innerHTML = '<tr><td colspan="6">Inventory is empty. Add items above to begin tracking.</td></tr>';
    return;
  }

  body.innerHTML = inventory
    .map((item) => {
      const status = getInventoryStatus(item);
      return `
        <tr data-id="${item.id}">
          <td>${item.item}</td>
          <td>${item.onHand}</td>
          <td>${item.unit}</td>
          <td>${item.reorderPoint}</td>
          <td><span class="inventory-status ${status.state}">${status.label}</span></td>
          <td>
            <div class="inventory-row-actions">
              <button type="button" data-action="decrement">-</button>
              <button type="button" data-action="increment">+</button>
              <input type="number" min="0" step="1" value="${item.onHand}" aria-label="Set quantity" />
              <button type="button" data-action="update">Set</button>
              <button type="button" data-action="remove" class="remove">Remove</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');
}

function wireInventoryManager(state) {
  const form = document.getElementById('inventory-form');
  const body = document.getElementById('inventory-body');
  const resetButton = document.getElementById('inventory-reset');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const itemField = form.querySelector('#inventory-item');
      const qtyField = form.querySelector('#inventory-qty');
      const unitField = form.querySelector('#inventory-unit');
      const reorderField = form.querySelector('#inventory-reorder');

      const itemValue = itemField.value.trim();
      if (!itemValue) {
        itemField.focus();
        return;
      }

      const newItem = {
        id: slugify(`${itemValue}-${randomId().slice(0, 6)}`),
        item: itemValue,
        onHand: Number(qtyField.value) || 0,
        unit: unitField.value.trim() || 'units',
        reorderPoint: Number(reorderField.value) || 0,
      };

      state.inventory.push(newItem);
      saveToStorage(STORAGE_KEYS.inventory, state.inventory);
      renderInventory(state.inventory);
      form.reset();
    });
  }

  if (body) {
    body.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) return;

      const row = button.closest('tr');
      if (!row) return;
      const id = row.dataset.id;
      const record = state.inventory.find((entry) => entry.id === id);
      if (!record) return;

      const qtyInput = row.querySelector('input[type="number"]');

      if (button.dataset.action === 'increment') {
        record.onHand += 1;
        qtyInput.value = record.onHand;
      }

      if (button.dataset.action === 'decrement' && record.onHand > 0) {
        record.onHand -= 1;
        qtyInput.value = record.onHand;
      }

      if (button.dataset.action === 'update') {
        const value = Number(qtyInput.value);
        if (!Number.isNaN(value) && value >= 0) {
          record.onHand = value;
        }
      }

      if (button.dataset.action === 'remove') {
        state.inventory = state.inventory.filter((entry) => entry.id !== id);
        saveToStorage(STORAGE_KEYS.inventory, state.inventory);
        renderInventory(state.inventory);
        return;
      }

      saveToStorage(STORAGE_KEYS.inventory, state.inventory);
      renderInventory(state.inventory);
    });

    body.addEventListener('change', (event) => {
      const input = event.target.closest('input[type="number"]');
      if (!input) return;

      const row = input.closest('tr');
      if (!row) return;

      const id = row.dataset.id;
      const record = state.inventory.find((entry) => entry.id === id);
      if (!record) return;

      const value = Number(input.value);
      if (!Number.isNaN(value) && value >= 0) {
        record.onHand = value;
        saveToStorage(STORAGE_KEYS.inventory, state.inventory);
        renderInventory(state.inventory);
      }
    });
  }

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      state.inventory = clone(DEFAULT_INVENTORY);
      saveToStorage(STORAGE_KEYS.inventory, state.inventory);
      renderInventory(state.inventory);
    });
  }
}

function getInventoryStatus(item) {
  if (item.onHand <= item.reorderPoint) {
    return { state: 'low', label: 'Restock soon' };
  }
  return { state: 'good', label: 'Stock ready' };
}

function renderTestimonials(testimonials) {
  clearTestimonialRotation();

  const slider = document.getElementById('testimonial-slider');
  const dots = document.getElementById('testimonial-dots');
  if (!slider || !dots) {
    return;
  }

  const items = (Array.isArray(testimonials) && testimonials.length ? testimonials : DEFAULT_TESTIMONIALS)
    .map((item) => ({
      id: item.id || randomId(),
      name: item.name?.trim() || 'SGU Student',
      message: item.message?.trim() || '',
    }))
    .filter((item) => item.message.length);

  testimonialRotation.items = items;
  testimonialRotation.index = 0;

  slider.innerHTML = items
    .map((item, index) => `
      <figure class="testimonial-slide" data-index="${index}" aria-hidden="true">
        <blockquote>&ldquo;${escapeHTML(item.message)}&rdquo;</blockquote>
        <figcaption>${escapeHTML(item.name)}</figcaption>
      </figure>
    `)
    .join('');

  dots.innerHTML = items
    .map((_, index) => `
      <button type="button" class="testimonial-dot" data-index="${index}" aria-label="Show testimonial ${index + 1}" role="tab" aria-selected="false"></button>
    `)
    .join('');

  setupTestimonialDots();
  activateTestimonial(0);
  startTestimonialRotation();
}

function setupTestimonialDots() {
  const dots = document.getElementById('testimonial-dots');
  if (!dots || dots.dataset.bound === 'true') {
    return;
  }

  dots.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-index]');
    if (!button) return;
    const index = Number(button.dataset.index);
    if (Number.isNaN(index)) return;
    activateTestimonial(index);
    startTestimonialRotation();
  });

  dots.dataset.bound = 'true';
}

function activateTestimonial(index) {
  const slider = document.getElementById('testimonial-slider');
  const dots = document.getElementById('testimonial-dots');
  if (!slider || !dots || !Array.isArray(testimonialRotation.items) || !testimonialRotation.items.length) {
    return;
  }

  const count = testimonialRotation.items.length;
  const safeIndex = ((index % count) + count) % count;
  testimonialRotation.index = safeIndex;

  slider.querySelectorAll('.testimonial-slide').forEach((slide) => {
    const isActive = Number(slide.dataset.index) === safeIndex;
    slide.classList.toggle('is-active', isActive);
    slide.setAttribute('aria-hidden', String(!isActive));
  });

  dots.querySelectorAll('.testimonial-dot').forEach((dot) => {
    const isActive = Number(dot.dataset.index) === safeIndex;
    dot.classList.toggle('is-active', isActive);
    dot.setAttribute('aria-selected', String(isActive));
  });
}

function clearTestimonialRotation() {
  if (testimonialRotation.timerId) {
    clearInterval(testimonialRotation.timerId);
    testimonialRotation.timerId = null;
  }
}

function startTestimonialRotation() {
  clearTestimonialRotation();
  const items = testimonialRotation.items;
  if (!Array.isArray(items) || items.length <= 1) {
    return;
  }

  testimonialRotation.timerId = setInterval(() => {
    const nextIndex = (testimonialRotation.index + 1) % items.length;
    activateTestimonial(nextIndex);
  }, 8000);
}

function wireTestimonialForm(state) {
  const form = document.getElementById('testimonial-form');
  if (!form) return;

  const nameInput = form.querySelector('#testimonial-name');
  const messageInput = form.querySelector('#testimonial-message');
  const errorNode = document.getElementById('testimonial-error');
  const successNode = document.getElementById('testimonial-success');

  const resetFeedback = () => {
    hideError(errorNode);
    hideSuccess(successNode);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    resetFeedback();

    const message = messageInput.value.trim();
    if (message.length < 10) {
      showError(errorNode, 'Share a few more details (at least 10 characters).');
      return;
    }

    const name = (nameInput.value || '').trim() || 'SGU Student';
    const newTestimonial = {
      id: randomId(),
      name,
      message,
    };

    state.testimonials = [newTestimonial, ...state.testimonials].slice(0, 20);
    saveTestimonials(state.testimonials);
    renderTestimonials(state.testimonials);
    state.testimonialInbox = addTestimonialToInbox(state.testimonialInbox, {
      id: newTestimonial.id,
      name,
      message,
      createdAt: Date.now(),
    });
    saveToStorage(STORAGE_KEYS.testimonialInbox, state.testimonialInbox);
    renderTestimonialInbox(state);
    form.reset();
    showSuccess(successNode, 'Thanks! Your testimonial is live.');
  });

  form.addEventListener('input', resetFeedback);
  form.addEventListener('change', resetFeedback);
  form.addEventListener('focusin', resetFeedback);
}

function addTestimonialToInbox(existing, entry) {
  const list = Array.isArray(existing) ? existing.slice(0, 49) : [];
  return [entry, ...list].slice(0, 50);
}

function escapeHTML(value) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return (value || '').replace(/[&<>"']/g, (char) => map[char] || char);
}

function wireSurveyEmailManager(state) {
  const form = document.getElementById('survey-email-form');
  if (!form) return;

  const input = form.querySelector('#survey-email');
  const clearBtn = document.getElementById('survey-email-clear');
  const status = document.getElementById('survey-email-status');

  if (input) {
    input.value = state.surveyEmail || '';
  }

  const showStatus = (message) => {
    if (!status) return;
    if (!message) {
      status.hidden = true;
      status.textContent = '';
      return;
    }
    status.hidden = false;
    status.textContent = message;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) {
      return;
    }

    const value = input.value.trim();
    saveSurveyEmail(value);
    state.surveyEmail = value;
    showStatus('Survey email saved.');
    refreshContactTargets(state);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearSurveyEmail();
      state.surveyEmail = '';
      if (input) {
        input.value = '';
        input.focus();
      }
      showStatus('Survey email cleared.');
      refreshContactTargets(state);
    });
  }

  document.addEventListener('owner-dashboard-unlocked', () => {
    if (input) {
      input.value = state.surveyEmail || loadSurveyEmail();
    }
    showStatus('');
  });

  document.addEventListener('owner-dashboard-locked', () => {
    showStatus('');
  });
}

function setInlineStatus(node, message, tone = 'info') {
  if (!node) return;
  if (!message) {
    node.hidden = true;
    node.textContent = '';
    node.classList.remove('success', 'error');
    return;
  }
  node.hidden = false;
  node.textContent = message;
  node.classList.remove('success', 'error');
  if (tone === 'success') {
    node.classList.add('success');
  } else if (tone === 'error') {
    node.classList.add('error');
  }
}

function resolveOwnerEmail(state) {
  const email = (state?.surveyEmail || '').trim();
  return email || DEFAULT_OWNER_EMAIL;
}

function refreshContactTargets(state) {
  const targetEmail = resolveOwnerEmail(state);
  const contactLink = document.getElementById('contact-email-link');
  if (contactLink) {
    contactLink.href = `mailto:${targetEmail}`;
    contactLink.textContent = (state?.surveyEmail ? `Email ${targetEmail}` : 'Email the kitchen team');
  }

  const contactForm = document.getElementById('payment-contact-form');
  if (contactForm) {
    contactForm.dataset.targetEmail = targetEmail;
  }
}

function wireIntegrationManager(state) {
  const paymentForm = document.getElementById('integration-payment-form');
  const socialForm = document.getElementById('integration-social-form');
  if (!paymentForm && !socialForm) return;

  const paypalInput = document.getElementById('paypal-client-id');
  const paypalLinkInput = document.getElementById('paypal-checkout-link');
  const igUserInput = document.getElementById('instagram-username');
  const igTokenInput = document.getElementById('instagram-token');
  const paymentStatus = document.getElementById('integration-payment-status');
  const socialStatus = document.getElementById('integration-social-status');
  const paymentClearBtn = document.getElementById('integration-payment-clear');
  const socialClearBtn = document.getElementById('integration-social-clear');

  const hydratePayment = () => {
    if (paypalInput) {
      paypalInput.value = state.integrations?.paypalClientId || '';
    }
    if (paypalLinkInput) {
      paypalLinkInput.value = state.integrations?.paypalCheckoutLink || '';
    }
  };

  const hydrateSocial = () => {
    if (igUserInput) {
      igUserInput.value = state.integrations?.instagramUsername || DEFAULT_INTEGRATIONS.instagramUsername;
    }
    if (igTokenInput) {
      igTokenInput.value = state.integrations?.instagramToken || '';
    }
  };

  const resetPaymentStatus = () => setInlineStatus(paymentStatus, '');
  const resetSocialStatus = () => setInlineStatus(socialStatus, '');

  hydratePayment();
  hydrateSocial();

  if (paymentForm) {
    paymentForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const next = {
        paypalClientId: (paypalInput?.value || '').trim(),
        paypalCheckoutLink: (paypalLinkInput?.value || '').trim(),
      };
      if (mealPriceInput) {
        const value = parseFloat(mealPriceInput.value || '');
        next.mealPriceUsd = Number.isFinite(value) && value > 0 ? Number(value.toFixed(2)) : '';
      }

      state.integrations = { ...state.integrations, ...next };
      saveIntegrations(state.integrations);
      refreshContactTargets(state);
      document.dispatchEvent(new CustomEvent('integrations-updated', { detail: { integrations: state.integrations } }));

      const tone = next.paypalClientId ? 'success' : 'info';
      const message = next.paypalClientId
        ? 'Payment settings saved. Reload the payment page if you updated the PayPal client ID.'
        : 'Saved. Add a PayPal client ID when you are ready to accept live payments.';
      setInlineStatus(paymentStatus, message, tone);
    });

    paymentForm.addEventListener('input', resetPaymentStatus);
    paymentForm.addEventListener('focusin', resetPaymentStatus);
  }

  if (paymentClearBtn) {
    paymentClearBtn.addEventListener('click', () => {
      state.integrations = {
        ...state.integrations,
        paypalClientId: '',
        mealPriceUsd: DEFAULT_MEAL_PRICE_USD,
        paypalCheckoutLink: '',
      };
      saveIntegrations(state.integrations);
      hydratePayment();
      refreshContactTargets(state);
      document.dispatchEvent(new CustomEvent('integrations-updated', { detail: { integrations: state.integrations } }));
      setInlineStatus(paymentStatus, 'Payment defaults restored. Students will now see the standard meal price.', 'info');
    });
  }

  if (socialForm) {
    socialForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const username = (igUserInput?.value || '').replace(/^@/, '').trim();
      const next = {
        instagramUsername: username || DEFAULT_INTEGRATIONS.instagramUsername,
        instagramToken: (igTokenInput?.value || '').trim(),
      };

      state.integrations = { ...state.integrations, ...next };
      saveIntegrations(state.integrations);
      hydrateInstagramFeed(state);
      document.dispatchEvent(new CustomEvent('integrations-updated', { detail: { integrations: state.integrations } }));

      const tone = next.instagramToken ? 'success' : 'info';
      const message = next.instagramToken
        ? 'Instagram feed updated. Refresh the home page to see the latest posts.'
        : 'Handle saved. Add a long-lived token whenever you want automatic feed updates.';
      setInlineStatus(socialStatus, message, tone);
    });

    socialForm.addEventListener('input', resetSocialStatus);
    socialForm.addEventListener('focusin', resetSocialStatus);
  }

  if (socialClearBtn) {
    socialClearBtn.addEventListener('click', () => {
      state.integrations = {
        ...state.integrations,
        instagramUsername: DEFAULT_INTEGRATIONS.instagramUsername,
        instagramToken: '',
      };
      saveIntegrations(state.integrations);
      hydrateSocial();
      hydrateInstagramFeed(state);
      document.dispatchEvent(new CustomEvent('integrations-updated', { detail: { integrations: state.integrations } }));
      setInlineStatus(socialStatus, 'Instagram settings reset to the default handle.', 'info');
    });
  }

  document.addEventListener('owner-dashboard-unlocked', () => {
    hydratePayment();
    hydrateSocial();
    resetPaymentStatus();
    resetSocialStatus();
  });

  document.addEventListener('owner-dashboard-locked', () => {
    resetPaymentStatus();
    resetSocialStatus();
  });
}

function renderTestimonialInbox(state) {
  const list = document.getElementById('testimonial-inbox-list');
  if (!list) return;

  const items = Array.isArray(state.testimonialInbox) ? state.testimonialInbox : [];
  if (!items.length) {
    list.innerHTML = '<li class="testimonial-inbox-empty">No testimonials saved yet. New submissions from the site will appear here automatically.</li>';
    return;
  }

  list.innerHTML = items
    .map((item) => {
      const safeName = escapeHTML(item.name || 'SGU Student');
      const safeMessage = escapeHTML(item.message || '');
      const timestamp = item.createdAt ? new Date(item.createdAt).toISOString() : '';
      const published = formatDateTime(item.createdAt);
      return `
        <li class="testimonial-inbox-item" data-id="${item.id}">
          <div class="testimonial-inbox-meta">
            <span class="testimonial-inbox-name">${safeName}</span>
            <time datetime="${timestamp}">${escapeHTML(published)}</time>
          </div>
          <p class="testimonial-inbox-message">${safeMessage}</p>
        </li>
      `;
    })
    .join('');
}

function wireTestimonialInbox(state) {
  const emailBtn = document.getElementById('testimonial-email-owner');
  const clearBtn = document.getElementById('testimonial-inbox-clear');
  const statusNode = document.getElementById('testimonial-inbox-status');

  if (!emailBtn && !clearBtn) {
    return;
  }

  const resetStatus = () => setInlineStatus(statusNode, '');

  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      resetStatus();
      if (!Array.isArray(state.testimonialInbox) || !state.testimonialInbox.length) {
        setInlineStatus(statusNode, 'No testimonials to email yet.', 'error');
        return;
      }

      const ownerEmail = (state?.surveyEmail || '').trim();
      if (!ownerEmail) {
        setInlineStatus(statusNode, 'Add an owner email in the Survey Responses panel to email testimonials.', 'error');
        return;
      }

      const items = state.testimonialInbox.slice(0, 10);
      const lines = items.map((item, index) => {
        const name = item.name ? item.name : 'SGU Student';
        const message = item.message ? item.message : '';
        return `${index + 1}. ${name}\n${message}`;
      });

      const subject = `Carters Cuisine Testimonials (${items.length})`;
      const body = [
        'Here are the latest testimonials submitted on the site:',
        '',
        ...lines,
        '',
        'Sent via the Carters Cuisine owner portal.',
      ].join('\n');

      window.location.href = createMailtoUrl(ownerEmail, subject, body);
      setInlineStatus(statusNode, `Opening your email client with ${items.length} testimonial${items.length === 1 ? '' : 's'}.`, 'success');
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      resetStatus();
      if (!Array.isArray(state.testimonialInbox) || !state.testimonialInbox.length) {
        setInlineStatus(statusNode, 'Inbox is already clear.', 'info');
        return;
      }

      const confirmed = window.confirm('Clear all saved testimonials? This cannot be undone.');
      if (!confirmed) return;

      state.testimonialInbox = [];
      saveToStorage(STORAGE_KEYS.testimonialInbox, state.testimonialInbox);
      renderTestimonialInbox(state);
      setInlineStatus(statusNode, 'Testimonial inbox cleared.', 'success');
    });
  }

  document.addEventListener('owner-dashboard-unlocked', () => {
    renderTestimonialInbox(state);
    resetStatus();
  });

  document.addEventListener('owner-dashboard-locked', resetStatus);
}

function formatDisplayDate(value) {
  if (!value) return 'TBD';
  try {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(value));
  } catch (err) {
    return value;
  }
}

function formatDateTime(timestamp) {
  if (!timestamp) return 'Just now';
  try {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(timestamp));
  } catch (err) {
    return new Date(timestamp).toLocaleString();
  }
}

function renderOrderPricingSummary(order) {
  const pricing = order?.pricing;
  if (!pricing) return '';
  const mealMeta = `${pricing.mealCount || 0} × ${formatCurrency(pricing.mealUnit)}`;
  const extrasCount = Array.isArray(order?.extraIds) ? order.extraIds.length : 0;
  const extrasMeta = extrasCount
    ? `${extrasCount} add-on${extrasCount === 1 ? '' : 's'}`
    : 'No extras selected';

  return `
    <div class="order-review-totals">
      <h3>Payment summary</h3>
      <dl>
        <div>
          <dt>Meals</dt>
          <dd>
            <span>${escapeHTML(formatCurrency(pricing.mealsTotal))}</span>
            <small>${escapeHTML(mealMeta)}</small>
          </dd>
        </div>
        <div>
          <dt>Extras</dt>
          <dd>
            <span>${escapeHTML(formatCurrency(pricing.extrasTotal))}</span>
            <small>${escapeHTML(extrasMeta)}</small>
          </dd>
        </div>
        <div class="order-review-total">
          <dt>Total to pay</dt>
          <dd>${escapeHTML(formatCurrency(pricing.total))}</dd>
        </div>
      </dl>
    </div>
  `;
}

function renderOrderReview(order) {
  const container = document.getElementById('order-review-content');
  const emptyNotice = document.getElementById('order-review-empty');
  if (!container) return;

  if (!order) {
    container.innerHTML = '';
    if (emptyNotice) emptyNotice.hidden = false;
    return;
  }

  const dishes = Array.isArray(order.dishes) ? order.dishes : [];
  const extras = Array.isArray(order.selectedExtras) ? order.selectedExtras : [];
  const notes = (order.notes || '').trim();
  const startDate = escapeHTML(formatDisplayDate(order.startDate));

  const deliveryLabels = {
    delivery: 'Delivery to campus',
    pickup: 'Pickup',
  };
  const deliveryKey = (order.delivery || '').toLowerCase();
  const deliveryRaw = deliveryLabels[deliveryKey] || capitalize(order.delivery || '');
  const delivery = escapeHTML(deliveryRaw || 'Delivery method pending');

  const contactMethodLabels = {
    whatsapp: 'WhatsApp',
    call: 'Phone call',
    email: 'Email',
  };
  const contactMethodKey = (order.contactMethod || '').toLowerCase();
  const contactMethodRaw = contactMethodLabels[contactMethodKey] || capitalize(order.contactMethod || '');
  const contactMethod = escapeHTML(contactMethodRaw || 'N/A');
  const contactInfo = escapeHTML(order.contactInfo || '');

  const savedAtRaw = order.savedAt ? formatDateTime(order.savedAt) : '';
  const savedAt = savedAtRaw ? escapeHTML(savedAtRaw) : '';

  const dishList = dishes.length
    ? `<ul class="order-review-list">${dishes.map((dish) => `<li>${escapeHTML(dish)}</li>`).join('')}</ul>`
    : '<p class="form-hint">No dishes selected.</p>';

  const extrasList = extras.length
    ? `<ul class="order-review-list">${extras.map((extra) => `<li>${escapeHTML(extra)}</li>`).join('')}</ul>`
    : '<p class="form-hint">No extras added.</p>';

  const notesBlock = notes
    ? `<p class="order-review-notes">${escapeHTML(notes)}</p>`
    : '';

  const pricingSummary = renderOrderPricingSummary(order);

  container.innerHTML = `
    <article class="order-review-card">
      <div class="order-review-meta">
        <span><strong>Start:</strong> ${startDate}</span>
        <span><strong>Delivery:</strong> ${delivery}</span>
        <span><strong>Preferred contact:</strong> ${contactMethod} ${contactInfo ? `— ${contactInfo}` : ''}</span>
        ${savedAt ? `<span><strong>Saved:</strong> ${savedAt}</span>` : ''}
      </div>
      <div>
        <h3>Selected dishes</h3>
        ${dishList}
      </div>
      <div>
        <h3>Extras</h3>
        ${extrasList}
      </div>
      ${notesBlock ? `<div><h3>Notes for the kitchen</h3>${notesBlock}</div>` : ''}
      ${pricingSummary}
    </article>
  `;

  if (emptyNotice) emptyNotice.hidden = true;
}

function setupPaymentPage(state) {
  const pageTag = document.body?.dataset?.page;
  if (!pageTag || (pageTag !== 'payment' && pageTag !== 'payment-online')) {
    return;
  }

  let currentOrder = loadLastOrder();
  renderOrderReview(currentOrder);

  const refreshOrder = () => {
    currentOrder = loadLastOrder() || null;
    renderOrderReview(currentOrder);
    return currentOrder;
  };

  const payInPersonBtn = document.getElementById('pay-in-person');
  const payOnlineBtn = document.getElementById('pay-online');
  const inPersonPanel = document.getElementById('in-person-panel');
  const checkoutSection = document.getElementById('checkout');

  let amountInput = null;
  let amountInputWired = false;
  let statusNode = null;
  let clientIdNoticeShown = false;
  let hideFallbackButton = () => {};
  let showFallbackButton = () => false;

  const updateAmountField = (order) => {
    if (!amountInput) return;
    if (order?.pricing?.total) {
      const totalAmount = Number(order.pricing.total);
      if (Number.isFinite(totalAmount) && totalAmount > 0) {
        amountInput.value = normalizeCurrency(totalAmount).toFixed(2);
      } else {
        amountInput.value = '';
      }
    } else {
      amountInput.value = '';
    }
    if (order) {
      amountInput.dispatchEvent(new Event('input'));
    }
  };

  const ensurePaypalReady = () => {
    const paypalContainer = document.getElementById('paypal-button-container');
    statusNode = document.getElementById('paypal-status');
    amountInput = document.getElementById('payment-amount');
    const amountForm = document.getElementById('payment-amount-form');
    const fallbackContainer = document.getElementById('paypal-fallback');
    const fallbackButton = document.getElementById('checkout-paypal-link');

    if (!paypalContainer || !statusNode) {
      return;
    }

    if (amountForm && !amountInputWired) {
      amountForm.addEventListener('submit', (event) => event.preventDefault());
    }

    hideFallbackButton = () => {
      if (fallbackContainer) {
        fallbackContainer.hidden = true;
      }
      if (fallbackButton) {
        fallbackButton.removeAttribute('href');
      }
    };

    showFallbackButton = () => {
      const link = (state.integrations?.paypalCheckoutLink || '').trim();
      if (fallbackContainer && fallbackButton && link) {
        fallbackButton.href = link;
        fallbackContainer.hidden = false;
        return true;
      }
      return false;
    };

    hideFallbackButton();

    const clientId = (state.integrations?.paypalClientId || '').trim();
    if (!clientIdNoticeShown) {
      if (clientId) {
        setInlineStatus(statusNode, 'Loading secure PayPal checkout…', 'info');
      } else {
        setInlineStatus(
          statusNode,
          'Sandbox checkout loaded. Add a live PayPal client ID in the Owner Portal to accept real payments.',
          'info',
        );
      }
      clientIdNoticeShown = true;
    }

    const order = refreshOrder();
    if (!order) {
      setInlineStatus(statusNode, 'No saved order found. Return to the order form to pick your meals before paying.', 'error');
    }

    const handleAmountChange = () => {
      const amount = parseFloat(amountInput.value);
      if (!Number.isFinite(amount) || amount <= 0) {
        setInlineStatus(statusNode, 'Enter the total confirmed with the kitchen to enable checkout.', 'info');
        return;
      }
      setInlineStatus(statusNode, `Ready to pay $${amount.toFixed(2)} USD. Click PayPal to continue.`, 'success');
    };

    if (amountInput && !amountInputWired) {
      amountInput.addEventListener('input', handleAmountChange);
      amountInputWired = true;
    }

    updateAmountField(order);

    const handlePaypalFailure = () => {
      if (showFallbackButton()) {
        setInlineStatus(statusNode, 'PayPal checkout is unavailable here. Use the Pay with PayPal button below to continue.', 'info');
      } else {
        setInlineStatus(statusNode, 'PayPal could not load. Refresh or contact us to arrange payment.', 'error');
      }
    };

    loadPayPalSdk(clientId || 'test', PAYPAL_CURRENCY)
      .then(() => {
        renderPayPalButtons(
          {
            amountInput,
            order,
            fallback: {
              show: showFallbackButton,
              hide: hideFallbackButton,
            },
          },
          (message, tone = 'info') => setInlineStatus(statusNode, message, tone),
        );
      })
      .catch((err) => {
        console.error('Unable to load PayPal SDK', err);
        handlePaypalFailure();
      });

    if (!paypalIntegrationListenerRegistered) {
      document.addEventListener('integrations-updated', (event) => {
        if (event?.detail?.integrations) {
          state.integrations = { ...state.integrations, ...event.detail.integrations };
          hideFallbackButton();
        }
      });
      paypalIntegrationListenerRegistered = true;
    }
  };

  const setSelection = (mode) => {
    const online = mode === 'online';
    if (payInPersonBtn) {
      payInPersonBtn.classList.toggle('active', !online);
      payInPersonBtn.setAttribute('aria-pressed', String(!online));
    }
    if (payOnlineBtn) {
      payOnlineBtn.classList.toggle('active', online);
      payOnlineBtn.setAttribute('aria-pressed', String(online));
    }
    if (inPersonPanel) {
      inPersonPanel.hidden = online;
      inPersonPanel.setAttribute('aria-hidden', String(online));
    }
    if (checkoutSection) {
      checkoutSection.hidden = !online;
      checkoutSection.setAttribute('aria-hidden', String(!online));
      if (online) {
        ensurePaypalReady();
      }
    } else if (online) {
      ensurePaypalReady();
    }
  };

  if (pageTag === 'payment-online') {
    setSelection('online');
    return;
  }

  setSelection('in-person');

  if (payInPersonBtn) {
    payInPersonBtn.addEventListener('click', () => setSelection('in-person'));
  }

  if (payOnlineBtn) {
    payOnlineBtn.addEventListener('click', () => {
      setSelection('online');
      if (checkoutSection) {
        checkoutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}

function loadPayPalSdk(clientId, currency) {
  if (window.paypal && typeof window.paypal.Buttons === 'function') {
    return Promise.resolve(window.paypal);
  }

  if (paypalSdkPromise) {
    return paypalSdkPromise;
  }

  paypalSdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const url = new URL('https://www.paypal.com/sdk/js');
    url.searchParams.set('client-id', clientId || 'test');
    url.searchParams.set('currency', currency || PAYPAL_CURRENCY);
    url.searchParams.set('intent', 'CAPTURE');
    url.searchParams.set('components', 'buttons');

    script.src = url.toString();
    script.async = true;
    script.dataset.paypalSdk = 'true';
    script.onload = () => resolve(window.paypal);
    script.onerror = () => reject(new Error('PayPal SDK failed to load.'));
    document.head.appendChild(script);
  });

  return paypalSdkPromise;
}

function renderPayPalButtons(context, setStatus) {
  const container = document.getElementById('paypal-button-container');
  if (!container) return;

  container.innerHTML = '';

  const fallbackControls = context?.fallback || {};
  const hideFallback = typeof fallbackControls.hide === 'function' ? fallbackControls.hide : null;
  const showFallback = typeof fallbackControls.show === 'function' ? fallbackControls.show : null;

  if (hideFallback) {
    hideFallback();
  }

  if (!window.paypal || typeof window.paypal.Buttons !== 'function') {
    if (showFallback && showFallback()) {
      setStatus('PayPal checkout is unavailable here. Use the Pay with PayPal button below to continue.', 'info');
    } else {
      setStatus('PayPal is not available right now. Please refresh or try again later.', 'error');
    }
    return;
  }

  const amountInput = context?.amountInput;
  const order = context?.order;

  const getAmount = () => {
    if (!amountInput) return NaN;
    const value = parseFloat(amountInput.value);
    return Number.isFinite(value) ? value : NaN;
  };

  const buildDescription = () => {
    if (!order || !Array.isArray(order.dishes) || !order.dishes.length) {
      return 'Carters Cuisine meal prep';
    }
    const count = order.dishes.length;
    return `Carters Cuisine meal prep • ${count} dish${count === 1 ? '' : 'es'}`;
  };

  try {
    window.paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'gold',
        shape: 'rect',
        label: 'checkout',
      },
      onClick(data, actions) {
        const amount = getAmount();
        if (!Number.isFinite(amount) || amount <= 0) {
          setStatus('Enter a valid payment total before checking out.', 'error');
          if (amountInput) {
            amountInput.focus();
          }
          return actions.reject();
        }
        setStatus('Opening PayPal…', 'info');
        return actions.resolve();
      },
      createOrder(_, actions) {
        const amount = getAmount();
        if (!Number.isFinite(amount) || amount <= 0) {
          setStatus('Enter a valid payment total before checking out.', 'error');
          throw new Error('Invalid amount for PayPal checkout.');
        }
        const purchaseUnit = {
          description: buildDescription(),
          amount: {
            currency_code: PAYPAL_CURRENCY,
            value: amount.toFixed(2),
          },
        };
        if (order && order.savedAt) {
          purchaseUnit.custom_id = `order:${order.savedAt}`;
        }
        return actions.order.create({ purchase_units: [purchaseUnit] });
      },
      onApprove(data, actions) {
        setStatus('Processing your payment…', 'info');
        if (actions?.order?.capture) {
          return actions.order.capture().then(() => {
            setStatus('Payment received! We will reach out using your PayPal contact shortly.', 'success');
          });
        }
        setStatus('Payment approved! We will reach out using your PayPal contact shortly.', 'success');
        return Promise.resolve();
      },
      onCancel() {
        setStatus('Payment cancelled. You can try again anytime or contact us below.', 'info');
      },
      onError(err) {
        console.error('PayPal encountered an error', err);
        if (showFallback && showFallback()) {
          setStatus('PayPal checkout is unavailable here. Use the Pay with PayPal button below to continue.', 'info');
        } else {
          setStatus('We could not complete the payment. Try again or reach out so we can help.', 'error');
        }
      },
    }).render(container);
  } catch (err) {
    console.error('Unable to render PayPal buttons', err);
    if (showFallback && showFallback()) {
      setStatus('PayPal checkout is unavailable here. Use the Pay with PayPal button below to continue.', 'info');
    } else {
      setStatus('PayPal checkout could not initialize on this device.', 'error');
    }
  }
}

function wirePaymentContactForm(state) {
  const form = document.getElementById('payment-contact-form');
  if (!form) return;

  const nameInput = form.querySelector('#contact-name');
  const emailInput = form.querySelector('#contact-email');
  const messageInput = form.querySelector('#contact-message');
  const errorNode = document.getElementById('contact-error');
  const successNode = document.getElementById('contact-success');
  const amountInput = document.getElementById('payment-amount');

  const resetFeedback = () => {
    hideError(errorNode);
    hideSuccess(successNode);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    resetFeedback();

    if (!form.reportValidity()) {
      return;
    }

    const name = (nameInput?.value || '').trim();
    const email = (emailInput?.value || '').trim();
    const message = (messageInput?.value || '').trim();
    if (!message) {
      showError(errorNode, 'Share a quick note so we know how to help.');
      return;
    }

    const savedOrder = loadLastOrder();

    const lines = [
      `Name: ${name || 'Not provided'}`,
      `Email: ${email || 'Not provided'}`,
    ];

    if (amountInput) {
      const amount = parseFloat(amountInput.value);
      if (Number.isFinite(amount) && amount > 0) {
        lines.push(`Payment amount entered on site: $${amount.toFixed(2)} USD`);
      }
    }

    if (savedOrder?.summary) {
      lines.push('', 'Saved Order Summary:', '', savedOrder.summary.trim());
    }

    lines.push('', message);

    const targetEmail = resolveOwnerEmail(state);
    const subject = `Meal prep inquiry from ${name || 'Carters Cuisine guest'}`;
    const body = lines.join('\n');

    window.location.href = createMailtoUrl(targetEmail, subject, body);
    showSuccess(successNode, `We opened your email client to message ${targetEmail}.`);
    form.reset();
  });

  form.addEventListener('input', resetFeedback);
  form.addEventListener('focusin', resetFeedback);
}

function createMailtoUrl(email, subject, body) {
  const safeEmail = email || DEFAULT_OWNER_EMAIL;
  const params = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${safeEmail}?${params.toString()}`;
}

function hydrateInstagramFeed(state) {
  const feed = document.getElementById('instagram-feed');
  if (!feed) return;

  const statusNode = document.getElementById('instagram-status');
  const heading = document.querySelector('.instagram-preview h2');

  const username = (state.integrations?.instagramUsername || DEFAULT_INTEGRATIONS.instagramUsername || '').replace(/^@/, '');
  const handle = username || DEFAULT_INTEGRATIONS.instagramUsername;

  if (heading) {
    heading.textContent = `Latest From @${handle}`;
  }

  const profileLink = document.getElementById('instagram-profile-link');
  if (profileLink) {
    profileLink.href = `https://www.instagram.com/${handle}/`;
    profileLink.textContent = `Follow @${handle}`;
  }

  const token = (state.integrations?.instagramToken || '').trim();

  if (!token) {
    renderInstagramFeed(DEFAULT_INSTAGRAM_POSTS, handle);
    setInlineStatus(statusNode, 'Showing placeholder posts. Add an Instagram access token in the Owner Portal to pull live content.', 'info');
    return;
  }

  setInlineStatus(statusNode, 'Loading latest posts…', 'info');

  const cache = loadInstagramCache();
  if (cache && cache.username === handle && Array.isArray(cache.items) && cache.items.length) {
    const withinWindow = Date.now() - cache.timestamp < 30 * 60 * 1000;
    if (withinWindow) {
      renderInstagramFeed(cache.items, handle);
      setInlineStatus(statusNode, 'Showing cached Instagram posts.', 'info');
    }
  }

  fetchInstagramPosts(token)
    .then((items) => {
      if (Array.isArray(items) && items.length) {
        renderInstagramFeed(items, handle);
        saveInstagramCache({ username: handle, items, timestamp: Date.now() });
        setInlineStatus(statusNode, '', 'info');
        return;
      }
      renderInstagramFeed(DEFAULT_INSTAGRAM_POSTS, handle);
      setInlineStatus(statusNode, 'No recent Instagram posts could be loaded. Showing placeholders instead.', 'error');
    })
    .catch((err) => {
      console.warn('Unable to load Instagram posts', err);
      renderInstagramFeed(DEFAULT_INSTAGRAM_POSTS, handle);
      setInlineStatus(statusNode, 'Could not reach Instagram. Showing placeholders instead.', 'error');
    });
}

function fetchInstagramPosts(token, limit = 6) {
  const url = new URL('https://graph.instagram.com/me/media');
  url.searchParams.set('fields', 'id,caption,media_type,media_url,permalink,thumbnail_url');
  url.searchParams.set('access_token', token);
  url.searchParams.set('limit', String(limit));

  return fetch(url.toString())
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Instagram responded with ${response.status}`);
      }
      return response.json();
    })
    .then((payload) => {
      const data = Array.isArray(payload?.data) ? payload.data : [];
      return data
        .filter((item) => item?.permalink && (item.media_url || item.thumbnail_url))
        .map((item) => ({
          id: item.id,
          image: item.media_url || item.thumbnail_url,
          caption: item.caption || '',
          permalink: item.permalink,
        }))
        .slice(0, limit);
    });
}

function renderInstagramFeed(posts, username) {
  const feed = document.getElementById('instagram-feed');
  if (!feed) return;

  const items = Array.isArray(posts) && posts.length ? posts : DEFAULT_INSTAGRAM_POSTS;
  if (!items.length) {
    feed.innerHTML = '<p class="instagram-empty">Instagram posts will appear here soon.</p>';
    return;
  }

  feed.innerHTML = items
    .map((item) => {
      const caption = truncateText(item.caption || '', 110) || 'View this Instagram post';
      const alt = escapeHTML(caption);
      const imageSrc = escapeHTML(item.image || '');
      const link = escapeHTML(item.permalink || '#');
      return `
        <a class="instagram-card" href="${link}" target="_blank" rel="noopener">
          <img src="${imageSrc}" alt="${alt}" loading="lazy" />
          <div class="instagram-card-caption">${alt}</div>
        </a>
      `;
    })
    .join('');
}

function truncateText(value, maxLength) {
  if (!value) return '';
  if (value.length <= maxLength) return value;
  return `${value.slice(0, Math.max(0, maxLength - 3))}...`;
}
