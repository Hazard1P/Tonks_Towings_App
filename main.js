const defaultRates = {
  BCAA: [
    { key: 'tow', label: 'Tow', amount: 52.53, type: 'flat' },
    { key: 'service', label: 'Service', amount: 47.94, type: 'flat' },
    { key: 'dollies', label: 'Dollies', amount: 30.6, type: 'flat' },
    { key: 'km_tow_service', label: 'Km tow / Service', amount: 2.64, type: 'per_km' },
    { key: 'km_plus_after_5', label: 'Km Plus after 5', amount: 2.85, type: 'per_km' },
    { key: 'km_reg_after_5', label: 'Km Reg after 5', amount: 2.85, type: 'per_km' },
    { key: 'hwy_rush', label: 'Hwy Rush 6:30–9:30 / 3:30–6:30', amount: 14.25, type: 'flat' },
    { key: 'tire_change_and_tow', label: 'Tire change and Tow', amount: 13.25, type: 'flat' },
    { key: 'recovery_basic_qtr', label: 'Recovery beyond basic per 1/4 hr', amount: 19.08, type: 'per_unit' },
    { key: 'bridge_crossing', label: 'Bridge crossing am–pm', amount: 4.25, type: 'flat' },
    { key: 'underground', label: 'Underground', amount: 19.08, type: 'flat' },
    { key: 'key_release', label: 'Key and Release', amount: 14.25, type: 'flat' },
    { key: 'tow_and_recovery', label: 'Tow and Recovery', amount: 83.14, type: 'flat' },
    { key: 'motorcycle_hookup', label: 'Motorcycle hookup (Deck only)', amount: 23.63, type: 'flat' },
    { key: 'deck_rate', label: 'Deck rate', amount: 39.15, type: 'flat' },
    { key: 'rv_tire_change', label: 'RV tire change surcharge', amount: 13.63, type: 'flat' },
    { key: 'heavy_truck', label: 'Heavy truck surcharge', amount: 53.6, type: 'flat' },
    { key: 'tc_tow', label: 'TC Tow, 1-tons, Loaded 3/4 ton', amount: 36.4, type: 'flat' },
    { key: 'km_after_5', label: 'Km after 5', amount: 2.85, type: 'per_km' },
    { key: 'ta_tow', label: 'TA Tow, Motorhomes 24–29 ft', amount: 89.76, type: 'flat' },
    { key: 'km_at_9', label: 'Km at 9', amount: 3.7, type: 'per_km' },
    { key: 'tz_motorhomes', label: 'TZ Motorhomes over 30 ft per hr', amount: 200.0, type: 'per_hour' },
    { key: 'tandem_beyond_first_hour', label: 'Tandem beyond 1st hr (per 15 min)', amount: 50.0, type: 'per_unit' },
    { key: 'cash_call_retention', label: 'Cash call Tow / Service Ret. –10%', amount: 0, type: 'flat' },
    { key: 'bonus', label: 'Bonus', amount: 5.5, type: 'flat' },
    { key: 'late_night', label: 'Late night calls 11 pm–6 am', amount: 12.5, type: 'flat' },
    { key: 'fuel_surcharge_21', label: 'Fuel surcharge 21%', amount: 0.21, type: 'percent' },
    { key: 'fuel_surcharge_25', label: 'Fuel surcharge 25%', amount: 0.25, type: 'percent' },
  ],
  PDG: [
    { key: 'tow', label: 'Tow', amount: 65.0, type: 'flat' },
    { key: 'service', label: 'Service', amount: 65.0, type: 'flat' },
    { key: 'dollies_or_deck', label: 'Dollies or Deck', amount: 45.0, type: 'flat' },
    { key: 'km_after_3', label: 'Km after 3', amount: 2.75, type: 'per_km' },
    { key: 'recovery', label: 'Recovery', amount: 65.0, type: 'flat' },
    { key: 'recovery_after_20', label: 'Recovery after 20 min (per min)', amount: 1.5, type: 'per_unit' },
    { key: 'underground', label: 'Underground', amount: 25.0, type: 'flat' },
    { key: 'second_service', label: '2nd service on 1st call', amount: 32.5, type: 'flat' },
    { key: 'cancelled_dispatched', label: 'Cancelled after dispatched', amount: 20.0, type: 'flat' },
    { key: 'bridge_peak', label: 'Bridge 6–9:30am / 3–6:30pm', amount: 21.0, type: 'flat' },
    { key: 'goa', label: 'GOA (No Km)', amount: 60.0, type: 'flat' },
    { key: 'highway_premium', label: 'Highway premium', amount: 25.0, type: 'flat' },
    { key: 'ev_premium', label: 'Electric vehicle premium', amount: 100.0, type: 'flat' },
    { key: 'after_hours', label: 'After hours premium', amount: 20.0, type: 'flat' },
    { key: 'fuel_surcharge_21', label: 'Fuel surcharge 21%', amount: 0.21, type: 'percent' },
    { key: 'fuel_surcharge_25', label: 'Fuel surcharge 25%', amount: 0.25, type: 'percent' },
  ],
  Sykes: [
    { key: 'tow_recovery_15', label: 'Tow or Recovery up to 15 min', amount: 58.0, type: 'flat' },
    { key: 'service', label: 'Service', amount: 50.0, type: 'flat' },
    { key: 'dollies', label: 'Dollies', amount: 35.0, type: 'flat' },
    { key: 'km_after_5', label: 'Km after 5', amount: 2.65, type: 'per_km' },
    { key: 'deck_premium', label: 'Deck request premium', amount: 65.0, type: 'flat' },
    { key: 'standby_winch', label: 'Standby / Winch per hr', amount: 82.0, type: 'per_hour' },
    { key: 'driveshaft', label: 'Driveshaft', amount: 65.0, type: 'flat' },
    { key: 'extra_service', label: 'Extra service', amount: 25.0, type: 'flat' },
    { key: 'md_tow', label: 'MD Tow (≥ 2700 kg curb weight)', amount: 88.0, type: 'flat' },
    { key: 'md_km_after_5', label: 'Km after 5 > 2700 kg', amount: 3.0, type: 'per_km' },
    { key: 'hd_tow_per_hr', label: 'Heavy Tow per hr', amount: 185.0, type: 'per_hour' },
    { key: 'cancel_under_10', label: 'Cancelled under 10 min', amount: 20.0, type: 'flat' },
    { key: 'cancel_over_10', label: 'Cancelled over 10 min', amount: 55.0, type: 'flat' },
    { key: 'underground', label: 'Underground', amount: 45.0, type: 'flat' },
    { key: 'underground_peak', label: 'Underground service 6–9:30am / 2:30–6:30pm', amount: 115.0, type: 'flat' },
    { key: 'luxury_service', label: 'Luxury service (Lexus, Porsche)', amount: 120.0, type: 'flat' },
    { key: 'secondary_accident', label: 'Secondary accident hookup', amount: 210.0, type: 'flat' },
    { key: 'tender', label: 'Tender', amount: 82.0, type: 'flat' },
    { key: 'ev_premium', label: 'Electric vehicle premium', amount: 115.0, type: 'flat' },
    { key: 'fuel_surcharge_21', label: 'Fuel surcharge 21%', amount: 0.21, type: 'percent' },
    { key: 'fuel_surcharge_25', label: 'Fuel surcharge 25%', amount: 0.25, type: 'percent' },
  ],
  ParkAndFly: [
    { key: 'lot_move', label: 'Lot move', amount: 55.0, type: 'flat' },
    { key: 'dollies', label: 'Dollies', amount: 40.0, type: 'flat' },
    { key: 'service', label: 'Service', amount: 45.0, type: 'flat' },
    { key: 'lot_to_lot', label: 'Tow from one lot to another lot', amount: 65.0, type: 'flat' },
    { key: 'fuel_surcharge_21', label: 'Fuel surcharge 21%', amount: 0.21, type: 'percent' },
    { key: 'fuel_surcharge_25', label: 'Fuel surcharge 25%', amount: 0.25, type: 'percent' },
  ],
};

const STORAGE_KEY = 'tonks_towing_shared_state_v1';

const state = {
  provider: 'BCAA',
  rates: cloneRates(defaultRates),
  selection: {},
  rateFilter: '',
  showSelectedOnly: false,
  invoiceJobId: null,
  fleet: [],
  jobs: [],
  activity: [],
  lastSavedAt: null,
};

const DB_NAME = 'tonks_towing_ledger';
const DB_VERSION = 1;
const DB_STORE = 'events';
let dbPromise = null;
const databaseStatus = { connected: false, count: 0, lastEntry: null, error: null };

const baseFleet = [
  {
    id: 'TRK-21',
    type: 'Flatbed',
    operator: 'Sam Tonks',
    contact: '604-000-2100',
    status: 'dispatched',
    location: 'Maple Ridge yard',
    compliance: ['CVSE', 'First aid', 'PPE'],
  },
  {
    id: 'TRK-14',
    type: 'Wrecker',
    operator: 'Jas Dhaliwal',
    contact: '604-000-1400',
    status: 'dispatched',
    location: 'HWY 1 @ 232',
    compliance: ['CVSE', 'Fall protection'],
  },
  {
    id: 'TRK-7',
    type: 'Service',
    operator: 'Leah Campos',
    contact: '604-000-0700',
    status: 'in_yard',
    location: 'Pitt Meadows shop',
    compliance: ['CVSE', 'Spill kit'],
  },
  {
    id: 'TRK-3',
    type: 'Motorcycle deck',
    operator: 'Wei Zhang',
    contact: '604-000-0300',
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
    status: 'Awaiting dispatch',
    assignedDriver: null,
    revenue: null,
    invoiceStatus: 'Draft',
  },
  {
    id: 'JOB-2042',
    customer: 'Park and Fly',
    location: 'YVR Economy lot',
    provider: 'ParkAndFly',
    eta: '12:40',
    notes: 'Flat tire, needs dollies',
    status: 'Dispatched',
    assignedDriver: 'TRK-21',
    revenue: null,
    invoiceStatus: 'Draft',
  },
  {
    id: 'JOB-2043',
    customer: 'Retail',
    location: 'Dewdney Trunk Rd',
    provider: 'Sykes',
    eta: '13:10',
    notes: 'Motorcycle premium',
    status: 'On scene',
    assignedDriver: 'TRK-3',
    revenue: null,
    invoiceStatus: 'Draft',
  },
];

function cloneRates(rates) {
  return JSON.parse(JSON.stringify(rates));
}

function openDatabase() {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE, { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  return dbPromise;
}

async function recordDbEvent(eventName, payload = {}) {
  try {
    const db = await openDatabase();
    const tx = db.transaction(DB_STORE, 'readwrite');
    const store = tx.objectStore(DB_STORE);
    store.add({ event: eventName, payload, createdAt: new Date().toISOString() });
  } catch (err) {
    databaseStatus.error = err?.message || 'Unable to write to database';
  }
}

function countStore(db) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, 'readonly');
    const store = tx.objectStore(DB_STORE);
    const req = store.count();
    req.onsuccess = () => resolve(req.result || 0);
    req.onerror = () => reject(req.error);
  });
}

function getLatestEvent(db) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, 'readonly');
    const store = tx.objectStore(DB_STORE);
    const cursor = store.openCursor(null, 'prev');
    cursor.onsuccess = () => {
      resolve(cursor.result?.value || null);
    };
    cursor.onerror = () => reject(cursor.error);
  });
}

async function refreshDatabaseStats() {
  try {
    const db = await openDatabase();
    const [count, latest] = await Promise.all([countStore(db), getLatestEvent(db)]);
    databaseStatus.connected = true;
    databaseStatus.count = count;
    databaseStatus.lastEntry = latest?.createdAt || null;
    databaseStatus.error = null;
  } catch (err) {
    databaseStatus.connected = false;
    databaseStatus.error = err?.message || 'Database unavailable';
  }
  renderDataEntryMeta();
  renderDatabasePanel();
}


function getAvailableDrivers() {
  return state.fleet.filter((truck) => truck.status === 'available' || truck.status === 'in_yard');
}

function dispatchJob(jobId, driverId) {
  const job = state.jobs.find((j) => j.id === jobId);
  const driver = state.fleet.find((t) => t.id === driverId);
  if (!job || !driver) return;
  job.assignedDriver = driverId;
  job.status = job.status === 'Delivered' ? job.status : 'Dispatched';
  driver.status = 'dispatched';
  driver.location = job.location;
  addActivity(`${job.id} assigned to ${driver.id} (${driver.operator})`);
  persistState();
  renderSnapshot();
  renderJobs();
  renderFleet();
  renderDispatchTasks();
  renderWorkflowBoard();
}

function updateFleetStatus(truckId, status) {
  const truck = state.fleet.find((t) => t.id === truckId);
  if (!truck) return;
  truck.status = status;
  addActivity(`${truck.id} marked ${status.replace('_', ' ')}`);
  persistState();
  renderFleet();
  renderSnapshot();
  renderDispatchTasks();
  renderWorkflowBoard();
}

function renderDispatchTasks() {
  const container = document.querySelector('#dispatchTasks');
  if (!container) return;
  container.innerHTML = '';

  const outstanding = state.jobs.filter(
    (job) => job.status !== 'Delivered' && (job.status === 'Awaiting dispatch' || !job.assignedDriver),
  );
  const availableDrivers = getAvailableDrivers();

  const summary = createElement('div', { className: 'task-summary' });
  summary.append(
    createElement('div', {
      className: 'pill',
      textContent: `${outstanding.length} job${outstanding.length === 1 ? '' : 's'} waiting`,
    }),
    createElement('div', {
      className: 'pill muted-pill',
      textContent: `${availableDrivers.length} driver${availableDrivers.length === 1 ? '' : 's'} available`,
    }),
  );
  container.appendChild(summary);

  if (!outstanding.length) {
    const empty = createElement('p', {
      className: 'muted',
      textContent: 'All calls have been paired with a driver. New intake will show up here automatically.',
    });
    container.appendChild(empty);
    return;
  }

  const board = createElement('div', { className: 'task-board' });
  outstanding.forEach((job) => {
    const card = createElement('div', { className: 'task-card' });
    const header = createElement('div', { className: 'task-card-header' });
    header.append(
      createElement('strong', { textContent: job.id }),
      createElement('span', { className: 'badge', textContent: job.status }),
    );

    const meta = createElement('div', { className: 'task-meta' });
    meta.append(
      createElement('div', { textContent: `${job.customer} · ${job.provider}` }),
      createElement('div', { className: 'muted', textContent: job.location }),
      createElement('div', { className: 'muted', textContent: `ETA ${job.eta}` }),
      createElement('div', { className: 'muted', textContent: job.notes || 'No notes' }),
    );

    const controlRow = createElement('div', { className: 'task-controls' });
    const driverSelect = createElement('select', { className: 'driver-select' });
    const placeholder = createElement('option', { value: '', textContent: 'Select driver' });
    driverSelect.appendChild(placeholder);
    availableDrivers.forEach((driver) => {
      const opt = createElement('option', {
        value: driver.id,
        textContent: `${driver.id} · ${driver.operator}`,
      });
      driverSelect.appendChild(opt);
    });
    const assignBtn = createElement('button', { type: 'button', textContent: 'Dispatch to driver' });
    assignBtn.disabled = !availableDrivers.length;
    assignBtn.addEventListener('click', () => {
      if (!driverSelect.value) return;
      dispatchJob(job.id, driverSelect.value);
    });

    controlRow.append(driverSelect, assignBtn);
    if (job.assignedDriver) {
      controlRow.append(
        createElement('div', {
          className: 'muted',
          textContent: `Current: ${job.assignedDriver}`,
        }),
      );
    }

    card.append(header, meta, controlRow);
    board.appendChild(card);
  });

  container.appendChild(board);
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
    state.lastSavedAt = new Date().toISOString();
    const payload = {
      provider: state.provider,
      rates: state.rates,
      selection: state.selection,
      rateFilter: state.rateFilter,
      showSelectedOnly: state.showSelectedOnly,
      invoiceJobId: state.invoiceJobId,
      fleet: state.fleet,
      jobs: state.jobs,
      activity: state.activity,
      lastSavedAt: state.lastSavedAt,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    renderDataEntryMeta();
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

function formatTimestamp(timestamp) {
  if (!timestamp) return 'Not yet saved';
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return 'Not yet saved';
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

function escapeCsv(value) {
  const stringValue = value === null || value === undefined ? '' : String(value);
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
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
  recordDbEvent('activity', { entry, timestamp });
  refreshDatabaseStats();
  persistState();
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

  const query = (state.rateFilter || '').toLowerCase();
  const showSelectedOnly = Boolean(state.showSelectedOnly);
  const statsEl = document.querySelector('#rateMeta');

  const header = createElement('div', { className: 'rate-row' });
  header.innerHTML = `
    <header>Line item</header>
    <header>Amount</header>
    <header>Quantity</header>
    <header>Include</header>
  `;
  container.appendChild(header);

  let visibleCount = 0;
  let selectedCount = 0;

  (state.rates[state.provider] || []).forEach((rate) => {
    const row = createElement('div', { className: 'rate-row' });
    const title = createElement('div', { textContent: rate.label });

    const selection = getSelection(state.provider, rate.key);
    const matchesQuery = !query || rate.label.toLowerCase().includes(query);
    const matchesSelected = !showSelectedOnly || selection.include;
    if (!matchesQuery || !matchesSelected) return;

    visibleCount += 1;
    if (selection.include) selectedCount += 1;

    const amountDisplay = createElement('div', {
      className: 'amount-display',
      textContent: rate.type === 'percent'
        ? `${Math.round(rate.amount * 10000) / 100}%`
        : formatCurrency(rate.amount),
    });

    const includeToggle = createElement('input', {
      type: 'checkbox',
      checked: selection.include,
    });

    const qtyInput = createElement('input', {
      type: 'number',
      min: '0',
      step: '0.01',
      value: selection.qty || 0,
      className: 'qty',
    });
    const qtyLocked = rate.type === 'flat' || rate.type === 'percent';
    qtyInput.placeholder = qtyLocked ? 'n/a' : '0';
    qtyInput.disabled = qtyLocked;
    if (qtyLocked && !selection.qty) qtyInput.value = 1;
    qtyInput.addEventListener('input', () => {
      const qty = Number(qtyInput.value) || 0;
      const include = qty > 0;
      includeToggle.checked = include;
      setSelection(state.provider, rate.key, { qty, include });
      renderSummary();
      persistState();
    });

    includeToggle.addEventListener('change', () => {
      const include = includeToggle.checked;
      const currentQty = Number(qtyInput.value) || 0;
      const needsUnit = qtyLocked && include && currentQty === 0;
      const qty = include ? (needsUnit ? 1 : currentQty || 1) : 0;
      qtyInput.value = qty;
      setSelection(state.provider, rate.key, { include, qty });
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
          : rate.type === 'percent'
            ? 'percent of subtotal'
            : 'flat';

    const amountCell = createElement('div');
    amountCell.append(amountDisplay, unitHint);

    row.append(title, amountCell, qtyInput, includeToggle);
    container.appendChild(row);
  });

  if (visibleCount === 0) {
    const empty = createElement('div', { className: 'rate-row' });
    empty.style.gridTemplateColumns = '1fr';
    empty.textContent = 'No rate lines match your filters. Clear the search or toggle to see all options.';
    container.appendChild(empty);
  }

  if (statsEl) {
    const visibleText = visibleCount ? `${visibleCount} line items shown` : 'No lines visible';
    const selectedText = `${selectedCount} selected`;
    statsEl.textContent = `${visibleText} • ${selectedText}`;
  }
}

function calculateTotal() {
  const providerRates = state.rates[state.provider] || [];
  let baseTotal = 0;
  const lines = [];
  const percentLines = [];

  providerRates.forEach((rate) => {
    const sel = getSelection(state.provider, rate.key);
    if (!sel.include) return;

    if (rate.type === 'percent') {
      percentLines.push({ rate, sel });
      return;
    }

    const qty = rate.type === 'flat' ? 1 : (sel.qty || 0);
    const subtotal = qty * rate.amount;
    baseTotal += subtotal;
    lines.push({
      label: rate.label,
      qty: rate.type === 'flat' ? 1 : qty,
      amount: rate.amount,
      subtotal,
      type: rate.type,
    });
  });

  percentLines.forEach(({ rate }) => {
    const subtotal = baseTotal * rate.amount;
    lines.push({
      label: rate.label,
      qty: 1,
      amount: rate.amount,
      subtotal,
      type: rate.type,
    });
    baseTotal += subtotal;
  });

  return { total: baseTotal, lines };
}

function renderSummary() {
  const { total, lines } = calculateTotal();
  const containers = document.querySelectorAll('.summary-panel');
  containers.forEach((container) => {
    container.innerHTML = '';

    if (!lines.length) {
      container.textContent = 'No line items selected yet. Check the boxes to include charges and set the quantities for per-km or per-hour lines.';
      return;
    }

    lines.forEach((line) => {
      const row = createElement('div', { className: 'summary-line' });
      const lhs = line.type === 'percent'
        ? line.label
        : `${line.label} ${line.type === 'flat' ? '' : `× ${line.qty}`}`.trim();
      row.append(
        createElement('span', { textContent: lhs }),
        createElement('strong', { textContent: formatCurrency(line.subtotal) }),
      );
      container.appendChild(row);
    });

    const totalRow = createElement('div', { className: 'total' });
    totalRow.textContent = `Total: ${formatCurrency(total)}`;
    container.appendChild(totalRow);
  });
}

function renderJobSelect() {
  const selects = document.querySelectorAll('.job-select');
  selects.forEach((select) => {
    select.innerHTML = '';
    const placeholder = createElement('option', { value: '', textContent: 'No job linked' });
    select.appendChild(placeholder);
    state.jobs.forEach((job) => {
      const opt = createElement('option', { value: job.id, textContent: `${job.id} · ${job.customer}` });
      select.appendChild(opt);
    });
    if (state.invoiceJobId) {
      select.value = state.invoiceJobId;
    }
    select.onchange = (ev) => {
      state.invoiceJobId = ev.target.value || state.invoiceJobId;
      persistState();
      renderInvoice();
    };
  });
}

function getInvoiceJob() {
  const job = state.jobs.find((j) => j.id === state.invoiceJobId);
  return job || state.jobs[0] || null;
}

function renderInvoice() {
  const job = getInvoiceJob();
  if (job && !state.invoiceJobId) state.invoiceJobId = job.id;

  const metaContainers = document.querySelectorAll('.invoice-card .snapshot-grid');
  metaContainers.forEach((container) => {
    container.innerHTML = '';
    if (!job) {
      container.textContent = 'No jobs available yet. Add a job to begin invoicing.';
      return;
    }

    const rows = [
      { label: 'Job ID', value: job.id, tag: job.status },
      { label: 'Provider', value: job.provider, tag: 'Rate sheet' },
      { label: 'Invoice status', value: job.invoiceStatus || 'Draft', tag: job.assignedDriver ? job.assignedDriver : 'Unassigned' },
    ];

    rows.forEach((row) => {
      const stat = createElement('div', { className: 'snapshot-item' });
      stat.append(
        createElement('p', { className: 'muted', textContent: row.label }),
        createElement('strong', { textContent: row.value }),
        createElement('span', { className: 'pill muted-pill', textContent: row.tag }),
      );
      container.appendChild(stat);
    });
  });

  const invoiceDetails = document.querySelectorAll('.invoice-job');
  invoiceDetails.forEach((container) => {
    container.innerHTML = '';
    if (!job) {
      container.textContent = 'Select or create a job to attach charges.';
      return;
    }

    const header = createElement('div', { className: 'job-card-header' });
    header.append(
      createElement('strong', { textContent: job.id }),
      createElement('span', { className: 'badge', textContent: job.invoiceStatus || 'Draft' }),
    );

    const details = createElement('div', { className: 'job-meta' });
    details.append(
      createElement('div', { textContent: `${job.customer} · ${job.provider}` }),
      createElement('div', { className: 'muted', textContent: job.location }),
      createElement('div', { className: 'muted', textContent: job.assignedDriver ? `Driver: ${job.assignedDriver}` : 'No driver assigned' }),
    );

    const revenueRow = createElement('div', { className: 'summary-line' });
    revenueRow.append(
      createElement('span', { textContent: 'Attached charges' }),
      createElement('strong', { textContent: job.revenue ? formatCurrency(job.revenue.total) : 'None yet' }),
    );

    container.append(header, details, revenueRow);
  });

  const jobSelects = document.querySelectorAll('.job-select');
  jobSelects.forEach((select) => {
    if (job?.id) select.value = job.id;
  });
}

function renderSnapshot() {
  const containers = document.querySelectorAll('#snapshot');
  containers.forEach((container) => {
    container.innerHTML = '';
    const active = state.jobs.length;
    const delivered = state.jobs.filter((j) => j.status === 'Delivered').length;
    const awaitingDispatch = state.jobs.filter((j) => j.status === 'Awaiting dispatch').length;
    const readyFleet = state.fleet.filter((f) => f.status === 'available').length;
    const dispatched = state.fleet.filter((f) => f.status === 'dispatched').length;
    const revenue = state.jobs.reduce((acc, job) => acc + (job.revenue?.total || 0), 0);

    const cards = [
      { label: 'Active jobs', value: active },
      { label: 'Delivered today', value: delivered },
      { label: 'Awaiting dispatch', value: awaitingDispatch },
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
  });
}

function renderDataEntryMeta() {
  const containers = document.querySelectorAll('.data-entry-meta');
  containers.forEach((container) => {
    container.innerHTML = '';

    const storageSizeKb = Math.round((JSON.stringify(state).length / 1024) * 10) / 10;
    const dbLabel = databaseStatus.connected ? 'Ledger online' : 'Ledger offline';
    const dbValue = databaseStatus.connected
      ? `${databaseStatus.count} events`
      : databaseStatus.error || 'Unavailable';
    const dbTag = databaseStatus.lastEntry
      ? `Last: ${formatTimestamp(databaseStatus.lastEntry)}`
      : 'Awaiting entries';
    const rows = [
      {
        label: 'Last synced',
        value: formatTimestamp(state.lastSavedAt),
        tag: 'Local + offline cache',
      },
      {
        label: 'Jobs and fleet',
        value: `${state.jobs.length} jobs · ${state.fleet.length} units`,
        tag: 'Shared across pages',
      },
      {
        label: 'Storage footprint',
        value: `${storageSizeKb} KB cached`,
        tag: 'Ready for offline',
      },
      {
        label: dbLabel,
        value: dbValue,
        tag: dbTag,
      },
    ];

    rows.forEach((row) => {
      const stat = createElement('div', { className: 'data-stat' });
      stat.append(
        createElement('p', { className: 'muted', textContent: row.label }),
        createElement('strong', { textContent: row.value }),
        createElement('span', { className: 'pill muted-pill', textContent: row.tag }),
      );
      container.appendChild(stat);
    });
  });
}

function renderDatabasePanel() {
  const panels = document.querySelectorAll('.database-panel');
  const pills = document.querySelectorAll('.ledger-status');

  pills.forEach((pill) => {
    pill.textContent = databaseStatus.connected ? 'Database ready' : 'Database offline';
    pill.title = databaseStatus.error || 'IndexedDB ledger';
  });

  panels.forEach((panel) => {
    panel.innerHTML = '';
    const statusRow = createElement('div', { className: 'database-row' });
    const statusText = createElement('div');
    statusText.append(
      createElement('strong', {
        textContent: databaseStatus.connected ? 'Local ledger secured' : 'Ledger unavailable',
      }),
      createElement('p', {
        className: 'database-meta',
        textContent: databaseStatus.connected
          ? 'Events are mirrored into IndexedDB for resilience.'
          : databaseStatus.error || 'Browser storage permissions may be blocked.',
      }),
    );
    statusRow.append(
      statusText,
      createElement('span', {
        className: 'badge-soft',
        textContent: databaseStatus.connected ? 'Encrypted on device' : 'Check permissions',
      }),
    );

    const countsRow = createElement('div', { className: 'database-row' });
    countsRow.append(
      createElement('div', {
        innerHTML: `<strong>${databaseStatus.count} events</strong><p class="database-meta">Audit trail stored with timestamped activity.</p>`,
      }),
      createElement('span', {
        className: 'badge',
        textContent: databaseStatus.lastEntry ? `Last at ${formatTimestamp(databaseStatus.lastEntry)}` : 'Awaiting first entry',
      }),
    );

    const syncRow = createElement('div', { className: 'database-row' });
    syncRow.append(
      createElement('div', {
        innerHTML: `<strong>Exports</strong><p class="database-meta">Use CSV downloads to share costs, prices, and job details.</p>`,
      }),
      createElement('span', {
        className: 'badge-soft',
        textContent: 'CSV + database in sync',
      }),
    );

    panel.append(statusRow, countsRow, syncRow);
  });
}

function renderWorkflowBoard() {
  const container = document.querySelector('#workflowBoard');
  if (!container) return;
  container.innerHTML = '';

  const stageOrder = ['Awaiting dispatch', 'Dispatched', 'En route', 'On scene', 'Delivered'];
  const stageDescriptions = {
    'Awaiting dispatch': 'Pair calls with available drivers from the task board.',
    'Dispatched': 'Confirm routing and ETA with the assigned truck.',
    'En route': 'Monitor progress; send updates to ticketing if delays occur.',
    'On scene': 'Confirm safety gear and compliance before hookup.',
    'Delivered': 'Hand off paperwork and close the ticket.',
  };

  const steps = createElement('div', { className: 'workflow-steps' });
  stageOrder.forEach((stage) => {
    const count = state.jobs.filter((j) => j.status === stage).length;
    const step = createElement('div', { className: 'workflow-step' });
    step.append(
      createElement('div', { className: 'workflow-count', textContent: count }),
      createElement('strong', { textContent: stage }),
      createElement('p', { className: 'muted', textContent: stageDescriptions[stage] }),
    );
    steps.appendChild(step);
  });

  const links = createElement('div', { className: 'workflow-links' });
  const taskLink = createElement('a', {
    href: '#dispatchTasks',
    className: 'button',
    textContent: 'View task board',
  });
  const ticketLink = createElement('a', {
    href: 'operations.html',
    className: 'button secondary',
    textContent: 'Attach rates in ticketing',
  });
  const overviewLink = createElement('a', {
    href: 'index.html',
    className: 'button secondary',
    textContent: 'Back to overview',
  });
  links.append(taskLink, ticketLink, overviewLink);

  container.append(steps, links);
}

function renderFleet() {
  const containers = document.querySelectorAll('.fleet-roster, #fleet');
  containers.forEach((container) => {
    container.innerHTML = '';

    state.fleet.forEach((truck) => {
      const row = createElement('div', { className: 'fleet-row' });
      const statusMap = {
        available: 'Available',
        dispatched: 'Dispatched',
        on_scene: 'On scene',
        in_yard: 'In yard',
      };

      const statusSelect = createElement('select', { value: truck.status });
      Object.entries(statusMap).forEach(([value, label]) => {
        const opt = createElement('option', { value, textContent: label });
        if (value === truck.status) opt.selected = true;
        statusSelect.appendChild(opt);
      });
      statusSelect.addEventListener('change', (ev) => updateFleetStatus(truck.id, ev.target.value));

      const compliance = Array.isArray(truck.compliance) ? truck.compliance.join(', ') : truck.compliance || 'N/A';
      const contact = truck.contact ? ` · ${truck.contact}` : '';

      row.append(
        createElement('div', { className: 'fleet-id', textContent: `${truck.id} · ${truck.type}` }),
        createElement('div', { textContent: `${truck.operator}${contact}` }),
        createElement('div', { className: 'muted', textContent: truck.location }),
        statusSelect,
        createElement('div', { className: 'muted', textContent: compliance }),
        createElement('div', { className: 'fleet-actions', textContent: truck.status === 'available' ? 'Ready for call' : 'Active' }),
      );
      container.appendChild(row);
    });
  });
  const overviewLink = createElement('a', {
    href: 'index.html',
    className: 'button secondary',
    textContent: 'Back to overview',
  });
  links.append(taskLink, ticketLink, overviewLink);

  container.append(steps, links);
}

function renderJobs() {
  const containers = document.querySelectorAll('.job-board');
  containers.forEach((container) => {
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
        createElement('div', {
          className: 'muted',
          textContent: job.assignedDriver ? `Driver: ${job.assignedDriver}` : 'No driver assigned',
        }),
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
  });
}

function advanceJob(jobId) {
  const job = state.jobs.find((j) => j.id === jobId);
  if (!job) return;
  const order = ['Awaiting dispatch', 'Dispatched', 'En route', 'On scene', 'Delivered'];
  const idx = order.indexOf(job.status);
  const next = order[Math.min(idx + 1, order.length - 1)];
  job.status = next;
  if (job.assignedDriver) {
    const driver = state.fleet.find((t) => t.id === job.assignedDriver);
    if (driver) {
      driver.status = next === 'Delivered' ? 'available' : next === 'On scene' ? 'on_scene' : 'dispatched';
      if (next === 'Delivered') driver.location = 'Returning to yard';
      persistState();
    }
  }
  addActivity(`${job.id} moved to ${next}`);
  renderSnapshot();
  renderJobs();
  renderDispatchTasks();
  renderWorkflowBoard();
}

function attachChargesToJob(selectEl) {
  const jobId = selectEl?.value;
  if (!jobId) return;
  const job = state.jobs.find((j) => j.id === jobId);
  if (!job) return;
  const { total, lines } = calculateTotal();
  state.invoiceJobId = jobId;
  job.invoiceStatus = job.invoiceStatus || 'Draft';
  job.revenue = { total, lines, provider: state.provider };
  addActivity(`${job.id} updated with ${formatCurrency(total)} from ${state.provider}`);
  persistState();
  renderJobs();
  renderSnapshot();
  renderInvoice();
}

function updateInvoiceStatus(status) {
  const job = getInvoiceJob();
  if (!job) return;
  job.invoiceStatus = status;
  addActivity(`${job.id} marked ${status.toLowerCase()}`);
  persistState();
  renderInvoice();
  renderJobs();
  renderSnapshot();
}

function exportCurrentJobCSV() {
  const job = getInvoiceJob();
  if (!job) return;

  const revenue = job.revenue || calculateTotal();
  const lines = revenue.lines?.length
    ? revenue.lines
    : [{ label: 'No charges attached', qty: 0, amount: 0, subtotal: 0, type: 'flat' }];

  const rows = [
    ['Job ID', job.id],
    ['Customer', job.customer],
    ['Provider', job.provider],
    ['Location', job.location],
    ['ETA', job.eta],
    ['Notes', job.notes || ''],
    ['Assigned driver', job.assignedDriver || 'Unassigned'],
    ['Invoice status', job.invoiceStatus || 'Draft'],
    [],
    ['Line item', 'Qty', 'Unit price', 'Subtotal'],
    ...lines.map((line) => [
      line.label,
      line.qty ?? 1,
      line.type === 'percent'
        ? `${Math.round((line.amount || 0) * 10000) / 100}%`
        : formatCurrency(line.amount || 0),
      formatCurrency(line.subtotal || 0),
    ]),
    ['Total', '', '', formatCurrency(revenue.total || 0)],
  ];

  const csv = rows.map((row) => row.map(escapeCsv).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${job.id || 'job'}-ledger.csv`;
  anchor.click();
  URL.revokeObjectURL(url);

  addActivity(`${job.id} exported to CSV ledger`);
  recordDbEvent('csv_export', { jobId: job.id, total: revenue.total || 0, lines: lines.length });
}

function wireJobForm() {
  const form = document.querySelector('#jobForm');
  if (!form) return;
  const providerSelect = form.provider;
  Object.keys(state.rates).forEach((provider) => {
    const opt = createElement('option', { value: provider, textContent: provider });
    providerSelect.appendChild(opt);
  });
  providerSelect.value = state.provider;

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const job = {
      id: data.id.trim(),
      customer: data.customer.trim(),
      location: data.location.trim(),
      provider: data.provider || state.provider,
      eta: data.eta.trim(),
      notes: (data.notes || '').trim(),
      status: 'Awaiting dispatch',
      assignedDriver: null,
      invoiceStatus: 'Draft',
      revenue: null,
    };
    state.jobs.unshift(job);
    state.invoiceJobId = state.invoiceJobId || job.id;
    addActivity(`${job.id} created for ${job.customer}`);
    persistState();
    renderJobs();
    renderSnapshot();
    renderJobSelect();
    renderInvoice();
    renderDispatchTasks();
    renderWorkflowBoard();
    form.reset();
  });
}

function wireFleetForm() {
  const form = document.querySelector('#addFleetForm');
  if (!form) return;

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const compliance = (data.compliance || '')
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean);
    const truck = {
      id: data.id.trim(),
      type: data.type.trim(),
      operator: data.operator.trim(),
      contact: (data.contact || '').trim(),
      status: data.status || 'available',
      location: data.location.trim(),
      compliance: compliance.length ? compliance : ['CVSE'],
    };
    state.fleet.unshift(truck);
    addActivity(`${truck.id} added with ${truck.operator}`);
    persistState();
    renderFleet();
    renderDispatchTasks();
    renderSnapshot();
    renderWorkflowBoard();
    form.reset();
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

  const rateSearch = document.querySelector('#rateSearch');
  if (rateSearch) {
    rateSearch.value = state.rateFilter;
    rateSearch.addEventListener('input', () => {
      state.rateFilter = rateSearch.value;
      renderRateTable();
      persistState();
    });
  }

  const selectedToggle = document.querySelector('#filterSelected');
  if (selectedToggle) {
    selectedToggle.checked = state.showSelectedOnly;
    selectedToggle.addEventListener('change', () => {
      state.showSelectedOnly = selectedToggle.checked;
      renderRateTable();
      persistState();
    });
  }

  const recalcBtns = document.querySelectorAll('.recalculate');
  recalcBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      renderSummary();
    });
  });

  const attachBtns = document.querySelectorAll('.attach-to-job');
  attachBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const scope = btn.closest('.card') || document;
      const select = scope.querySelector('.job-select');
      attachChargesToJob(select);
    });
  });

  const logButtons = document.querySelectorAll('.log-activity');
  logButtons.forEach((button) => {
    button.addEventListener('click', () => {
      addActivity('Security check performed via Synaptics Systems stack');
      renderJobs();
    });
  });

  const rotateBtns = document.querySelectorAll('.rotate-roster');
  rotateBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!state.fleet.length) return;
      const last = state.fleet.pop();
      state.fleet.unshift(last);
      persistState();
      renderFleet();
      renderSnapshot();
      renderDispatchTasks();
      renderWorkflowBoard();
    });
  });

  const invoiceStatusButtons = document.querySelectorAll('.mark-invoiced, .mark-paid');
  invoiceStatusButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const status = btn.classList.contains('mark-paid') ? 'Paid' : 'Invoiced';
      updateInvoiceStatus(status);
    });
  });

  const exportButtons = document.querySelectorAll('.export-csv');
  exportButtons.forEach((btn) => {
    btn.addEventListener('click', exportCurrentJobCSV);
  });

  const ledgerRefreshButtons = document.querySelectorAll('.sync-ledger');
  ledgerRefreshButtons.forEach((btn) => {
    btn.addEventListener('click', () => refreshDatabaseStats());
  });

  const customItemForm = document.querySelector('#customItemForm');
  if (customItemForm) {
    const lockedNote = createElement('p', {
      className: 'muted locked-note',
      textContent: 'Rates are locked to the approved sheet and cannot be edited or extended.',
    });
    const wrapper = customItemForm.closest('.custom-add');
    if (wrapper) {
      wrapper.innerHTML = '';
      wrapper.appendChild(lockedNote);
    } else {
      customItemForm.replaceWith(lockedNote);
    }
  }
}

function hydrateState() {
  const stored = loadState();
  if (stored) {
    state.provider = stored.provider || state.provider;
    state.rates = stored.rates || state.rates;
    state.selection = stored.selection || state.selection;
    state.rateFilter = stored.rateFilter || state.rateFilter;
    state.showSelectedOnly = stored.showSelectedOnly || state.showSelectedOnly;
    state.invoiceJobId = stored.invoiceJobId || state.invoiceJobId;
    state.fleet = stored.fleet || cloneRates({ baseFleet }).baseFleet || baseFleet;
    state.jobs = stored.jobs || cloneRates({ baseJobs }).baseJobs || baseJobs;
    state.activity = stored.activity || [];
    state.lastSavedAt = stored.lastSavedAt || state.lastSavedAt;
    return;
  }

  state.fleet = cloneRates({ baseFleet }).baseFleet || baseFleet;
  state.jobs = cloneRates({ baseJobs }).baseJobs || baseJobs;
  state.invoiceJobId = state.jobs[0]?.id || null;
  state.lastSavedAt = state.lastSavedAt || new Date().toISOString();
}

function init() {
  hydrateState();
  if (!state.activity.length) addActivity('System ready with Synaptics Systems hardening');
  renderProviderOptions();
  renderRateTable();
  renderSummary();
  renderDataEntryMeta();
  renderJobSelect();
  renderInvoice();
  renderSnapshot();
  renderFleet();
  renderJobs();
  renderDispatchTasks();
  wireJobForm();
  renderWorkflowBoard();
  wireFleetForm();
  renderDatabasePanel();
  refreshDatabaseStats();
  wireControls();
}

document.addEventListener('DOMContentLoaded', init);
