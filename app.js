const MEAL_DATA = [
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

const STORAGE_KEYS = {
  extras: 'cartersCuisineExtras',
  inventory: 'cartersCuisineInventory',
  surveyEmail: 'cartersCuisineSurveyEmail',
  testimonials: 'cartersCuisineTestimonials',
};

const DISH_SELECT_LIMIT = { min: 3, max: 5 };

let ownerImageMap = {};

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
  const state = {
    extras: loadFromStorage(STORAGE_KEYS.extras, DEFAULT_EXTRAS),
    inventory: loadFromStorage(STORAGE_KEYS.inventory, DEFAULT_INVENTORY),
    surveyEmail: loadSurveyEmail(),
    testimonials: loadTestimonials(),
  };

  ownerImageMap = collectOwnerImages();
  renderSchedule();
  renderMealGrid();
  renderOrderDishOptions();
  renderExtras(state.extras);
  renderInventory(state.inventory);
  renderTestimonials(state.testimonials);
  wireOrderForm(state);
  wireExtrasManager(state);
  wireInventoryManager(state);
  wireTestimonialForm(state);
  wireSurveyEmailManager(state);
  setupOwnerPortal();
  hydrateFooterYear();
});

function hydrateFooterYear() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
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

function renderSchedule() {
  const container = document.getElementById('menu-schedule');
  if (!container) return;

  const days = ['Day 1', 'Day 2', 'Day 3'];
  container.innerHTML = days
    .map((day) => {
      const meals = MEAL_DATA.filter((meal) => meal.day === day);
      const items = meals
        .map((meal) => `<li>${meal.name} <small>(${meal.calories} cal, ${meal.protein}g protein)</small></li>`)
        .join('');

      return `
        <article class="schedule-card">
          <h3>${day}</h3>
          <ul>${items || '<li>Chef\'s surprise</li>'}</ul>
        </article>
      `;
    })
    .join('');
}

function renderMealGrid() {
  const grid = document.getElementById('meal-grid');
  if (!grid) return;

  grid.innerHTML = MEAL_DATA.map((meal) => {
    const photo = resolveMealPhoto(meal);
    return `
      <article class="meal-card">
        <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
        <div>
          <span class="eyebrow">${meal.day}</span>
          <h3>${meal.name}</h3>
        </div>
        <p>${meal.description}</p>
        <div class="meal-meta">
          <span class="macro-tag">${meal.calories} cal</span>
          <span class="macro-tag">${meal.protein}g protein</span>
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

  container.innerHTML = MEAL_DATA.map((meal) => `
    <label class="checkbox-option" data-day="${meal.day}">
      <input type="checkbox" name="dish" value="${meal.id}" />
      <span>
        <strong>${meal.name}</strong>
        <small>${meal.calories} cal • ${meal.protein}g protein • ${meal.day}</small>
      </span>
    </label>
  `).join('');
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

function wireOrderForm(state) {
  const form = document.getElementById('order-form');
  const summary = document.getElementById('order-summary');
  const summaryText = document.getElementById('order-summary-text');
  const whatsappLink = document.getElementById('whatsapp-link');
  const closeButton = document.getElementById('order-summary-close');
  const errorMessage = document.getElementById('order-error');

  if (!form || !summary || !summaryText || !whatsappLink || !closeButton) return;

  form.addEventListener('change', (event) => {
    if (event.target.name === 'dish') {
      enforceDishSelectionLimit(form, errorMessage);
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

    const payload = compileOrderPayload(form, selectedDishes, state.extras);
    const message = formatOrderMessage(payload);

    summaryText.textContent = message;
    whatsappLink.href = `https://wa.me/14734153871?text=${encodeURIComponent(message)}`;
    summary.hidden = false;
    summary.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  closeButton.addEventListener('click', () => {
    summary.hidden = true;
    window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
  });
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

function compileOrderPayload(form, selectedDishes, extras) {
  const startDate = form.querySelector('#start-date').value;
  const delivery = form.querySelector('#delivery-method').value;
  const contactMethod = form.querySelector('#contact-method').value;
  const contactInfo = form.querySelector('#contact-info').value.trim();
  const notes = form.querySelector('#order-notes').value.trim();

  const dishes = selectedDishes.map((input) => {
    const meal = MEAL_DATA.find((item) => item.id === input.value);
    return meal
      ? `${meal.name} — ${meal.calories} cal / ${meal.protein}g • ${meal.day}`
      : input.value;
  });

  const selectedExtras = [...form.querySelectorAll('input[name="extra"]:checked')]
    .map((input) => extras.find((extra) => extra.id === input.value) || { name: input.value })
    .map((extra) => {
      const price = typeof extra.price === 'number' && extra.price > 0 ? `$${extra.price.toFixed(2)}` : 'Included';
      return `${extra.name} (${price})`;
    });

  return {
    startDate,
    delivery,
    contactMethod,
    contactInfo,
    notes,
    dishes,
    selectedExtras,
  };
}

function formatOrderMessage(payload) {
  const { startDate, delivery, contactMethod, contactInfo, dishes, selectedExtras, notes } = payload;
  return [
    'Carters Cuisine Order Request',
    `Start Date: ${startDate || 'TBD'}`,
    `Delivery Method: ${capitalize(delivery)}`,
    `Contact: ${capitalize(contactMethod)} — ${contactInfo}`,
    '',
    'Dishes:',
    ...dishes.map((dish) => `• ${dish}`),
    '',
    selectedExtras.length ? 'Extras:' : 'Extras: None',
    ...selectedExtras.map((extra) => `• ${extra}`),
    '',
    notes ? `Notes: ${notes}` : 'Notes: None',
  ]
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
    form.reset();
    showSuccess(successNode, 'Thanks! Your testimonial is live.');
  });

  form.addEventListener('input', resetFeedback);
  form.addEventListener('change', resetFeedback);
  form.addEventListener('focusin', resetFeedback);
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
