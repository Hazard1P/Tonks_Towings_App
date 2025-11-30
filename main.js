const defaultRates = {
  BCAA: [
    { key: 'tow', label: 'Tow', amount: 52.53, type: 'flat' },
    { key: 'service', label: 'Service', amount: 44.2, type: 'flat' },
    { key: 'dollies', label: 'Dollies', amount: 14.72, type: 'flat' },
    { key: 'basic_hook', label: 'Basic hook up', amount: 75.0, type: 'flat' },
    { key: 'km_over', label: 'Km over (per km)', amount: 2.1, type: 'per_km' },
    { key: 'dollies_premium', label: 'Dollies premium #1', amount: 10.0, type: 'flat' },
    { key: 'mvp_premium', label: 'MVP premium', amount: 19.0, type: 'flat' },
    { key: 'heavy_rush', label: 'Heavy rush', amount: 20.0, type: 'flat' },
    { key: 'hs_over_30', label: 'HS over 30 min', amount: 14.25, type: 'flat' },
    { key: 'max_time_call', label: 'Max time call', amount: 24.15, type: 'flat' },
    { key: 'hs_time_830_330', label: 'HS time 8:30 - 3:30', amount: 6.3, type: 'per_hour' },
    { key: 'hs_time_330_630', label: 'HS time 3:30 - 6:30', amount: 9.45, type: 'per_hour' },
    { key: 'hs_time_after_6', label: 'HS time after 6pm', amount: 9.44, type: 'per_hour' },
    { key: 'hs_tmt', label: 'HS TMT', amount: 10.0, type: 'flat' },
    { key: 'hs_km_over', label: 'HS km over', amount: 11.55, type: 'per_km' },
    { key: 'cleanup', label: 'Clean up / parts', amount: 10.0, type: 'flat' },
    { key: 'extra_calls', label: 'Extra calls', amount: 0, type: 'flat' },
    { key: 'jump_start', label: 'Jump start', amount: 25.0, type: 'flat' },
    { key: 'gas', label: 'Gas', amount: 5.0, type: 'flat' },
    { key: 'unlock', label: 'Unlock', amount: 22.5, type: 'flat' },
    { key: 's_w', label: 'S/W', amount: 25.0, type: 'flat' },
    { key: 'prime', label: 'Prime', amount: 75.0, type: 'flat' },
    { key: 'tcs', label: 'TCs', amount: 25.0, type: 'flat' },
    { key: 'on_hook_call', label: 'On hook call time', amount: 25.0, type: 'flat' },
    { key: 'lake_call', label: 'Lake call', amount: 20.0, type: 'flat' },
    { key: 'hazardous', label: 'Hazardous surcharge', amount: 11.44, type: 'flat' },
    { key: 'bio', label: 'Bio / yard', amount: 45.0, type: 'flat' },
    { key: 'winch_per_tire', label: 'Winch per tire', amount: 25.0, type: 'per_unit' },
    { key: 'rv_premium', label: 'RV premium', amount: 25.0, type: 'flat' },
    { key: 'key_call', label: '8 key call', amount: 3.0, type: 'flat' },
    { key: 'kms_per_hour', label: 'KM per hour', amount: 25.0, type: 'per_hour' },
    { key: 'storage', label: 'Storage', amount: 25.0, type: 'per_unit' },
    { key: 'battery_install', label: 'Battery install', amount: 10.0, type: 'flat' },
    { key: 'abandoned', label: 'Abandoned vehicle', amount: 50.0, type: 'flat' },
    { key: 'storage_premium', label: 'Storage premium', amount: 15.0, type: 'per_unit' },
    { key: 'motorcycle_premium', label: 'Motorcycle premium', amount: 20.0, type: 'flat' },
  ],
  Sykes: [
    { key: 'tow_recovery', label: 'Tow/Recovery up to 5 km', amount: 58.0, type: 'flat' },
    { key: 'km_after', label: 'Km after first 5', amount: 58.0, type: 'per_km' },
    { key: 'dollies', label: 'Dollies', amount: 0, type: 'flat' },
    { key: 'rush', label: 'Rush call', amount: 0, type: 'flat' },
    { key: 'four_by_four', label: '4x4 Tow', amount: 0, type: 'flat' },
    { key: 'over_4500', label: 'Over 4500 kg curb weight', amount: 0, type: 'flat' },
    { key: 'ccanchi', label: 'CCANCHI', amount: 0, type: 'flat' },
    { key: 'long_distance', label: 'Long distance from yard', amount: 0, type: 'per_km' },
    { key: 'mechanic', label: 'Mechanic (hr rate)', amount: 58.0, type: 'per_hour' },
    { key: 'leave_service', label: 'Leave service location', amount: 0, type: 'flat' },
    { key: 'luxury_premium', label: 'Luxury (Tesla, Porsche, Land Rover)', amount: 0, type: 'flat' },
    { key: 'after_hours_meet', label: 'After hours meet owner at lot', amount: 58.0, type: 'flat' },
    { key: 'before_hours_meet', label: 'Before hours meet owner at lot', amount: 58.0, type: 'flat' },
  ],
  ParkAndFly: [
    { key: 'pick_up', label: 'Pick up', amount: 60.0, type: 'flat' },
    { key: 'drop_off_owner', label: 'Drop off to owner at lot', amount: 60.0, type: 'flat' },
    { key: 'drop_off_other', label: 'Drop off to some other lot', amount: 0, type: 'flat' },
    { key: 'km_from_yard', label: 'Km from the yard to owner', amount: 0, type: 'per_km' },
    { key: 'km_from_owner', label: 'Km from owner to other lot', amount: 0, type: 'per_km' },
  ],
};

const STORAGE_KEY = 'tonks_towing_shared_state_v1';

const state = {
  provider: 'BCAA',
  rates: cloneRates(defaultRates),
  selection: {},
  fleet: [],
  jobs: [],
  activity: [],
};

const baseFleet = [
  {
    id: 'TRK-21',
    type: 'Flatbed',
    operator: 'Sam Tonks',
    status: 'available',
    location: 'Maple Ridge yard',
    compliance: ['CVSE', 'First aid', 'PPE'],
  },
  {
    id: 'TRK-14',
    type: 'Wrecker',
    operator: 'Jas Dhaliwal',
    status: 'dispatched',
    location: 'HWY 1 @ 232',
    compliance: ['CVSE', 'Fall protection'],
  },
  {
    id: 'TRK-7',
    type: 'Service',
    operator: 'Leah Campos',
    status: 'in_yard',
    location: 'Pitt Meadows shop',
    compliance: ['CVSE', 'Spill kit'],
  },
  {
    id: 'TRK-3',
    type: 'Motorcycle deck',
    operator: 'Wei Zhang',
    status: 'on_scene',
    location: 'Lougheed Hwy',
    compliance: ['CVSE', 'First aid'],
  },
];

const baseJobs = [
  {
    id: 'JOB-2041',
    customer: 'BCAA member',
    location: 'Louheed Hwy @ 203rd',
    provider: 'BCAA',
    eta: '12:15',
    notes: 'Winch out, muddy shoulder',
    status: 'Dispatched',
    revenue: null,
  },
  {
    id: 'JOB-2042',
    customer: 'Park and Fly',
    location: 'YVR Economy lot',
    provider: 'ParkAndFly',
    eta: '12:40',
    notes: 'Flat tire, needs dollies',
    status: 'En route',
    revenue: null,
  },
  {
    id: 'JOB-2043',
    customer: 'Retail',
    location: 'Dewdney Trunk Rd',
    provider: 'Sykes',
    eta: '13:10',
    notes: 'Motorcycle premium',
    status: 'On scene',
    revenue: null,
  },
];

function cloneRates(rates) {
  return JSON.parse(JSON.stringify(rates));
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch (err) {
    console.warn('Unable to load stored state', err);
    return null;
  }
}

function persistState() {
  try {
    const payload = {
      provider: state.provider,
      rates: state.rates,
      selection: state.selection,
      fleet: state.fleet,
      jobs: state.jobs,
      activity: state.activity,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn('Unable to persist shared state', err);
  }
}

function createElement(tag, options = {}) {
  const el = document.createElement(tag);
  Object.assign(el, options);
  return el;
}

function formatCurrency(value) {
  if (Number.isNaN(value)) return '$0.00';
  return value.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' });
}

function getSelection(provider, key) {
  const providerSel = state.selection[provider] || {};
  return providerSel[key] || { include: false, qty: 0, amount: null };
}

function setSelection(provider, key, update) {
  if (!state.selection[provider]) state.selection[provider] = {};
  const current = getSelection(provider, key);
  state.selection[provider][key] = { ...current, ...update };
  persistState();
}

function addActivity(entry) {
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  state.activity.unshift({ entry, timestamp });
  if (state.activity.length > 25) state.activity.pop();
  persistState();
}

function addActivity(entry) {
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  state.activity.unshift({ entry, timestamp });
  if (state.activity.length > 25) state.activity.pop();
}

function renderProviderOptions() {
  const select = document.querySelector('#provider');
  if (!select) return;
  select.innerHTML = '';
  Object.keys(state.rates).forEach((provider) => {
    const opt = createElement('option', { value: provider, textContent: provider });
    if (provider === state.provider) opt.selected = true;
    select.appendChild(opt);
  });
  select.addEventListener('change', (ev) => {
    state.provider = ev.target.value;
    persistState();
    renderRateTable();
    renderSummary();
  });
}

function renderRateTable() {
  const container = document.querySelector('#rateTable');
  if (!container) return;
  container.innerHTML = '';

  const header = createElement('div', { className: 'rate-row' });
  header.innerHTML = `
    <header>Line item</header>
    <header>Amount</header>
    <header>Quantity</header>
    <header>Include</header>
  `;
  container.appendChild(header);

  (state.rates[state.provider] || []).forEach((rate) => {
    const row = createElement('div', { className: 'rate-row' });

    const title = createElement('div', { textContent: rate.label });

    const amountInput = createElement('input', {
      type: 'number',
      min: '0',
      step: '0.01',
      value: rate.amount,
      className: 'amount',
    });
    amountInput.addEventListener('change', () => {
      rate.amount = Number(amountInput.value) || 0;
      renderSummary();
      persistState();
    });

    const selection = getSelection(state.provider, rate.key);
    const qtyInput = createElement('input', {
      type: 'number',
      min: '0',
      step: '0.01',
      value: selection.qty || 0,
      className: 'qty',
    });
    qtyInput.placeholder = rate.type === 'flat' ? 'n/a' : '0';
    qtyInput.disabled = rate.type === 'flat';
    qtyInput.addEventListener('input', () => {
      const qty = Number(qtyInput.value) || 0;
      setSelection(state.provider, rate.key, { qty });
      renderSummary();
      persistState();
    });

    const includeToggle = createElement('input', {
      type: 'checkbox',
      checked: selection.include,
    });
    includeToggle.addEventListener('change', () => {
      const include = includeToggle.checked;
      const qty = rate.type === 'flat' && include && (!selection.qty || selection.qty === 0)
        ? 1
        : selection.qty;
      setSelection(state.provider, rate.key, { include, qty });
      if (rate.type === 'flat') qtyInput.value = qty || 1;
      renderSummary();
      persistState();
    });

    const unitHint = createElement('small', { style: 'color: var(--muted); display: block;' });
    unitHint.textContent = rate.type === 'per_km'
      ? 'per km'
      : rate.type === 'per_hour'
        ? 'per hour'
        : rate.type === 'per_unit'
          ? 'per unit'
          : 'flat';

    const amountCell = createElement('div');
    amountCell.append(amountInput, unitHint);

    row.append(title, amountCell, qtyInput, includeToggle);
    container.appendChild(row);
  });
}

function calculateTotal() {
  const providerRates = state.rates[state.provider] || [];
  let total = 0;
  const lines = [];

  providerRates.forEach((rate) => {
    const sel = getSelection(state.provider, rate.key);
    if (!sel.include) return;
    const qty = rate.type === 'flat' ? 1 : (sel.qty || 0);
    const subtotal = qty * rate.amount;
    total += subtotal;
    lines.push({
      label: rate.label,
      qty: rate.type === 'flat' ? 1 : qty,
      amount: rate.amount,
      subtotal,
      type: rate.type,
    });
  });
  return { total, lines };
}

function renderSummary() {
  const container = document.querySelector('#summary');
  if (!container) return;
  const { total, lines } = calculateTotal();
  container.innerHTML = '';

  if (!lines.length) {
    container.textContent = 'No line items selected yet. Check the boxes to include charges and set the quantities for per-km or per-hour lines.';
    return;
  }

  lines.forEach((line) => {
    const row = createElement('div', { className: 'summary-line' });
    const lhs = `${line.label} ${line.type === 'flat' ? '' : `× ${line.qty}`}`.trim();
    row.append(
      createElement('span', { textContent: lhs }),
      createElement('strong', { textContent: formatCurrency(line.subtotal) }),
    );
    container.appendChild(row);
  });

  const totalRow = createElement('div', { className: 'total' });
  totalRow.textContent = `Total: ${formatCurrency(total)}`;
  container.appendChild(totalRow);
}

function renderJobSelect() {
  const select = document.querySelector('#jobSelect');
  select.innerHTML = '';
  const placeholder = createElement('option', { value: '', textContent: 'No job linked' });
  select.appendChild(placeholder);
  state.jobs.forEach((job) => {
    const opt = createElement('option', { value: job.id, textContent: `${job.id} · ${job.customer}` });
    select.appendChild(opt);
  });
}

function renderSnapshot() {
  const container = document.querySelector('#snapshot');
  container.innerHTML = '';
  const active = state.jobs.length;
  const delivered = state.jobs.filter((j) => j.status === 'Delivered').length;
  const readyFleet = state.fleet.filter((f) => f.status === 'available').length;
  const dispatched = state.fleet.filter((f) => f.status === 'dispatched').length;
  const revenue = state.jobs.reduce((acc, job) => acc + (job.revenue?.total || 0), 0);

  const cards = [
    { label: 'Active jobs', value: active },
    { label: 'Delivered today', value: delivered },
    { label: 'Fleet ready', value: readyFleet },
    { label: 'Out on calls', value: dispatched },
    { label: 'Projected revenue', value: formatCurrency(revenue) },
  ];

  cards.forEach((card) => {
    const item = createElement('div', { className: 'snapshot-item' });
    item.append(
      createElement('p', { className: 'muted', textContent: card.label }),
      createElement('strong', { className: 'snapshot-value', textContent: card.value }),
    );
    container.appendChild(item);
  });
}

function renderFleet() {
  const container = document.querySelector('#fleet');
  container.innerHTML = '';

  state.fleet.forEach((truck) => {
    const row = createElement('div', { className: 'fleet-row' });
    const statusMap = {
      available: 'Available',
      dispatched: 'Dispatched',
      on_scene: 'On scene',
      in_yard: 'In yard',
    };
    row.append(
      createElement('div', { className: 'fleet-id', textContent: `${truck.id} · ${truck.type}` }),
      createElement('div', { textContent: truck.operator }),
      createElement('div', { className: 'muted', textContent: truck.location }),
      createElement('div', { className: 'status', textContent: statusMap[truck.status] || truck.status }),
      createElement('div', { className: 'muted', textContent: truck.compliance.join(', ') }),
    );
    container.appendChild(row);
  });
}

function renderJobs() {
  const container = document.querySelector('#jobBoard');
  container.innerHTML = '';
  const logContainer = createElement('div', { className: 'activity-log' });
  const activityTitle = createElement('div', { className: 'activity-title', textContent: 'Activity stream' });
  logContainer.appendChild(activityTitle);

  state.activity.forEach((entry) => {
    const line = createElement('div', { className: 'activity-line' });
    line.append(
      createElement('span', { className: 'muted', textContent: entry.timestamp }),
      createElement('span', { textContent: entry.entry }),
    );
    logContainer.appendChild(line);
  });

  const list = createElement('div', { className: 'job-list' });
  state.jobs.forEach((job) => {
    const card = createElement('div', { className: 'job-card' });
    const header = createElement('div', { className: 'job-card-header' });
    header.append(
      createElement('strong', { textContent: job.id }),
      createElement('span', { className: 'badge', textContent: job.status }),
    );
    const details = createElement('div', { className: 'job-meta' });
    details.append(
      createElement('div', { textContent: `${job.customer} · ${job.provider}` }),
      createElement('div', { className: 'muted', textContent: job.location }),
      createElement('div', { className: 'muted', textContent: `ETA ${job.eta}` }),
      createElement('div', { className: 'muted', textContent: job.notes || 'No notes' }),
    );
    const actions = createElement('div', { className: 'job-actions' });
    const nextButton = createElement('button', { type: 'button', textContent: 'Advance status' });
    nextButton.addEventListener('click', () => advanceJob(job.id));
    const revenue = createElement('div', {
      className: 'muted',
      textContent: job.revenue ? `Attached: ${formatCurrency(job.revenue.total)}` : 'No charges attached',
    });
    actions.append(nextButton, revenue);
    card.append(header, details, actions);
    list.appendChild(card);
  });

  container.append(list, logContainer);
}

function advanceJob(jobId) {
  const job = state.jobs.find((j) => j.id === jobId);
  if (!job) return;
  const order = ['Dispatched', 'En route', 'On scene', 'Delivered'];
  const idx = order.indexOf(job.status);
  const next = order[Math.min(idx + 1, order.length - 1)];
  job.status = next;
  addActivity(`${job.id} moved to ${next}`);
  renderSnapshot();
  renderJobs();
}

function attachChargesToJob() {
  const jobId = document.querySelector('#jobSelect').value;
  if (!jobId) return;
  const job = state.jobs.find((j) => j.id === jobId);
  if (!job) return;
  const { total, lines } = calculateTotal();
  job.revenue = { total, lines, provider: state.provider };
  addActivity(`${job.id} updated with ${formatCurrency(total)} from ${state.provider}`);
  renderJobs();
  renderSnapshot();
}

function wireJobForm() {
  const form = document.querySelector('#jobForm');
  const providerSelect = form.provider;
  Object.keys(state.rates).forEach((provider) => {
    const opt = createElement('option', { value: provider, textContent: provider });
    providerSelect.appendChild(opt);
  });

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const job = {
      id: data.id.trim(),
      customer: data.customer.trim(),
      location: data.location.trim(),
      provider: data.provider,
      eta: data.eta.trim(),
      notes: data.notes.trim(),
      status: 'Dispatched',
      revenue: null,
    };
    state.jobs.unshift(job);
    addActivity(`${job.id} created for ${job.customer}`);
    form.reset();
    renderJobSelect();
    renderSnapshot();
    renderJobs();
  });
}

function wireControls() {
  document.querySelector('#resetRates').addEventListener('click', () => {
    state.rates = cloneRates(defaultRates);
    renderRateTable();
    renderSummary();
  });
}

function renderSnapshot() {
  const container = document.querySelector('#snapshot');
  if (!container) return;
  container.innerHTML = '';
  const active = state.jobs.length;
  const delivered = state.jobs.filter((j) => j.status === 'Delivered').length;
  const readyFleet = state.fleet.filter((f) => f.status === 'available').length;
  const dispatched = state.fleet.filter((f) => f.status === 'dispatched').length;
  const revenue = state.jobs.reduce((acc, job) => acc + (job.revenue?.total || 0), 0);

  const cards = [
    { label: 'Active jobs', value: active },
    { label: 'Delivered today', value: delivered },
    { label: 'Fleet ready', value: readyFleet },
    { label: 'Out on calls', value: dispatched },
    { label: 'Projected revenue', value: formatCurrency(revenue) },
  ];

  cards.forEach((card) => {
    const item = createElement('div', { className: 'snapshot-item' });
    item.append(
      createElement('p', { className: 'muted', textContent: card.label }),
      createElement('strong', { className: 'snapshot-value', textContent: card.value }),
    );
    container.appendChild(item);
  });
}

function renderFleet() {
  const container = document.querySelector('#fleet');
  if (!container) return;
  container.innerHTML = '';

  state.fleet.forEach((truck) => {
    const row = createElement('div', { className: 'fleet-row' });
    const statusMap = {
      available: 'Available',
      dispatched: 'Dispatched',
      on_scene: 'On scene',
      in_yard: 'In yard',
    };
    row.append(
      createElement('div', { className: 'fleet-id', textContent: `${truck.id} · ${truck.type}` }),
      createElement('div', { textContent: truck.operator }),
      createElement('div', { className: 'muted', textContent: truck.location }),
      createElement('div', { className: 'status', textContent: statusMap[truck.status] || truck.status }),
      createElement('div', { className: 'muted', textContent: truck.compliance.join(', ') }),
    );
    container.appendChild(row);
  });
}

function renderJobs() {
  const container = document.querySelector('#jobBoard');
  if (!container) return;
  container.innerHTML = '';
  const logContainer = createElement('div', { className: 'activity-log' });
  const activityTitle = createElement('div', { className: 'activity-title', textContent: 'Activity stream' });
  logContainer.appendChild(activityTitle);

  state.activity.forEach((entry) => {
    const line = createElement('div', { className: 'activity-line' });
    line.append(
      createElement('span', { className: 'muted', textContent: entry.timestamp }),
      createElement('span', { textContent: entry.entry }),
    );
    logContainer.appendChild(line);
  });

  document.querySelector('#attachToJob').addEventListener('click', attachChargesToJob);

  document.querySelector('#logActivity').addEventListener('click', () => {
    addActivity('Security check performed via Synaptics Systems stack');
    renderJobs();
  });

  document.querySelector('#rotateRoster').addEventListener('click', () => {
    state.fleet.unshift(state.fleet.pop());
    renderFleet();
  });

  document.querySelector('#customItemForm').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const job = {
      id: data.id.trim(),
      customer: data.customer.trim(),
      location: data.location.trim(),
      provider: data.provider,
      eta: data.eta.trim(),
      notes: data.notes.trim(),
      status: 'Dispatched',
      revenue: null,
    };
    state.jobs.unshift(job);
    addActivity(`${job.id} created for ${job.customer}`);
    form.reset();
    persistState();
    renderJobSelect();
    renderSnapshot();
    renderJobs();
  });
}

function wireControls() {
  const resetRatesBtn = document.querySelector('#resetRates');
  if (resetRatesBtn) {
    resetRatesBtn.addEventListener('click', () => {
      state.rates = cloneRates(defaultRates);
      state.selection[state.provider] = {};
      persistState();
      renderRateTable();
      renderSummary();
    });
  }

  const clearSelectionBtn = document.querySelector('#clearSelection');
  if (clearSelectionBtn) {
    clearSelectionBtn.addEventListener('click', () => {
      state.selection[state.provider] = {};
      persistState();
      renderRateTable();
      renderSummary();
    });
  }

  const recalcBtn = document.querySelector('#recalculate');
  if (recalcBtn) {
    recalcBtn.addEventListener('click', () => {
      renderSummary();
    });
  }

  const attachBtn = document.querySelector('#attachToJob');
  if (attachBtn) attachBtn.addEventListener('click', attachChargesToJob);

  const logButton = document.querySelector('#logActivity');
  if (logButton) {
    logButton.addEventListener('click', () => {
      addActivity('Security check performed via Synaptics Systems stack');
      renderJobs();
    });
  }

  const rotateBtn = document.querySelector('#rotateRoster');
  if (rotateBtn) {
    rotateBtn.addEventListener('click', () => {
      if (!state.fleet.length) return;
      const last = state.fleet.pop();
      state.fleet.unshift(last);
      persistState();
      renderFleet();
    });
  }

  const customItemForm = document.querySelector('#customItemForm');
  if (customItemForm) {
    customItemForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const form = ev.target;
      const label = form.label.value.trim();
      const amount = Number(form.amount.value) || 0;
      const type = form.type.value;

      if (!label) return;
      const key = `${label.toLowerCase().replace(/[^a-z0-9]+/g, '_')}_${Date.now()}`;
      const newItem = { key, label, amount, type };
      state.rates[state.provider].push(newItem);
      setSelection(state.provider, key, { include: true, qty: type === 'flat' ? 1 : 0 });
      persistState();
      form.reset();
      renderRateTable();
      renderSummary();
    });
  }
}

function init() {
  state.fleet = cloneRates({ baseFleet }).baseFleet || baseFleet;
  state.jobs = cloneRates({ baseJobs }).baseJobs || baseJobs;
  addActivity('System ready with Synaptics Systems hardening');
  renderProviderOptions();
  renderRateTable();
  renderSummary();
  renderJobSelect();
  renderSnapshot();
  renderFleet();
  renderJobs();
  wireJobForm();
  wireControls();
}

document.addEventListener('DOMContentLoaded', init);
