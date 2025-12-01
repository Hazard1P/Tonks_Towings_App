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
  invoiceJobId: null,
  fleet: [],
  jobs: [],
  activity: [],
};

function generateJobId() {
  const timestamp = Date.now().toString().slice(-5);
  return `JOB-${timestamp}`;
}

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
    const payload = {
      provider: state.provider,
      rates: state.rates,
      selection: state.selection,
      invoiceJobId: state.invoiceJobId,
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

function populateProviderSelect(select) {
  if (!select) return;
  select.innerHTML = '';
  Object.keys(state.rates).forEach((provider) => {
    const opt = createElement('option', { value: provider, textContent: provider });
    if (provider === state.provider) opt.selected = true;
    select.appendChild(opt);
  });
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
    document.querySelectorAll('.call-intake-form select[name="provider"]').forEach(populateProviderSelect);
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

    const amountDisplay = createElement('div', {
      className: 'amount-display',
      textContent: rate.type === 'percent'
        ? `${Math.round(rate.amount * 10000) / 100}%`
        : formatCurrency(rate.amount),
    });

    const selection = getSelection(state.provider, rate.key);
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
      const needsUnit = (rate.type === 'flat' || rate.type === 'percent') && include && (!selection.qty || selection.qty === 0);
      const qty = needsUnit ? 1 : selection.qty;
      setSelection(state.provider, rate.key, { include, qty });
      if (qtyLocked) qtyInput.value = qty || 1;
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
      if (state.invoiceJobId === job.id) opt.selected = true;
      select.appendChild(opt);
    });
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
  const containers = document.querySelectorAll('#fleet');
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
  links.append(taskLink, ticketLink, overviewLink);

  container.append(steps, links);
}

function renderFleet() {
  const containers = document.querySelectorAll('.fleet-roster');
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

function getInvoiceJob() {
  if (!state.jobs.length) return null;
  if (state.invoiceJobId) {
    const match = state.jobs.find((job) => job.id === state.invoiceJobId);
    if (match) return match;
  }
  state.invoiceJobId = state.jobs[0].id;
  return state.jobs[0];
}

function renderInvoice() {
  const jobContainer = document.querySelector('.invoice-job');
  const summaryContainer = document.querySelector('.invoice-summary .summary-panel');
  if (!jobContainer || !summaryContainer) return;

  const job = getInvoiceJob();
  document.querySelectorAll('.invoice-job-select').forEach((select) => {
    if (!select.value && job?.id) select.value = job.id;
  });

  jobContainer.innerHTML = '';
  summaryContainer.innerHTML = '';

  if (!job) {
    jobContainer.textContent = 'No calls are on file yet. Use the intake strip to add a job.';
    summaryContainer.textContent = 'Select or create a call to attach ticket charges.';
    return;
  }

  const title = createElement('div', { className: 'invoice-title' });
  title.append(
    createElement('strong', { textContent: `${job.id} · ${job.customer}` }),
    createElement('div', { className: 'muted', textContent: job.location }),
  );

  const meta = createElement('div', { className: 'meta' });
  meta.append(
    createElement('div', { textContent: `Provider: ${job.provider}` }),
    createElement('div', { textContent: `ETA: ${job.eta}` }),
    createElement('div', { textContent: job.notes || 'No notes added' }),
  );

  const tags = createElement('div', { className: 'invoice-tags' });
  tags.append(
    createElement('span', { className: 'badge', textContent: job.status }),
    createElement('span', { className: 'badge', textContent: job.invoiceStatus || 'Draft' }),
  );
  if (job.assignedDriver) {
    tags.append(createElement('span', { className: 'badge', textContent: `Driver: ${job.assignedDriver}` }));
  }

  jobContainer.append(title, meta, tags);

  const revenue = job.revenue;
  if (!revenue || !revenue.lines?.length) {
    const empty = createElement('p', {
      className: 'muted',
      textContent: 'No charges attached. Use the ticket builder then press "Attach ticket" to sync totals.',
    });
    summaryContainer.appendChild(empty);
    return;
  }

  revenue.lines.forEach((line) => {
    const row = createElement('div', { className: 'summary-line' });
    const left = line.type === 'flat' ? line.label : `${line.label} × ${line.qty}`;
    row.append(
      createElement('span', { textContent: left }),
      createElement('strong', { textContent: formatCurrency(line.subtotal) }),
    );
    summaryContainer.appendChild(row);
  });

  const totalRow = createElement('div', { className: 'total' });
  totalRow.textContent = `Total: ${formatCurrency(revenue.total || 0)}`;
  summaryContainer.appendChild(totalRow);
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
  renderJobs();
  renderSnapshot();
  renderInvoice();
}

function updateInvoiceStatus(status) {
  const job = getInvoiceJob();
  if (!job) return;
  job.invoiceStatus = status;
  addActivity(`${job.id} marked ${status.toLowerCase()}`);
  renderInvoice();
  renderJobs();
  renderSnapshot();
}

function wireJobForm() {
  const forms = document.querySelectorAll('.job-form');
  if (!forms.length) return;

  forms.forEach((form) => {
    populateProviderSelect(form.querySelector('select[name="provider"]'));
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const job = {
        id: (data.id || generateJobId()).trim(),
        customer: (data.customer || 'Retail').trim(),
        location: (data.location || '').trim(),
        provider: data.provider || state.provider,
        eta: (data.eta || '').trim(),
        notes: (data.notes || '').trim(),
        status: data.status || 'Awaiting dispatch',
        assignedDriver: null,
        revenue: null,
        invoiceStatus: 'Draft',
      };
      state.jobs.unshift(job);
      state.invoiceJobId = job.id;
      addActivity(`${job.id} created for ${job.customer}`);
      persistState();
      renderJobSelect();
      renderJobs();
      renderDispatchTasks();
      renderSnapshot();
      renderWorkflowBoard();
      renderInvoice();
      form.reset();
    });
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
    renderWorkflowBoard();
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

  const invoiceSelects = document.querySelectorAll('.invoice-job-select');
  invoiceSelects.forEach((select) => {
    select.addEventListener('change', (ev) => {
      state.invoiceJobId = ev.target.value;
      renderInvoice();
      renderJobSelect();
    });
  });

  const markIssuedButtons = document.querySelectorAll('.mark-invoiced');
  markIssuedButtons.forEach((btn) => btn.addEventListener('click', () => updateInvoiceStatus('Invoiced')));
  const markPaidButtons = document.querySelectorAll('.mark-paid');
  markPaidButtons.forEach((btn) => btn.addEventListener('click', () => updateInvoiceStatus('Paid')));

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
    });
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
    state.invoiceJobId = stored.invoiceJobId || state.invoiceJobId;
    state.fleet = stored.fleet || cloneRates({ baseFleet }).baseFleet || baseFleet;
    state.jobs = stored.jobs || cloneRates({ baseJobs }).baseJobs || baseJobs;
    state.activity = stored.activity || [];
    return;
  }

  state.fleet = cloneRates({ baseFleet }).baseFleet || baseFleet;
  state.jobs = cloneRates({ baseJobs }).baseJobs || baseJobs;
  state.invoiceJobId = state.jobs[0]?.id || null;
}

function init() {
  hydrateState();
  if (!state.activity.length) addActivity('System ready with Synaptics Systems hardening');
  renderProviderOptions();
  renderRateTable();
  renderSummary();
  renderJobSelect();
  renderInvoice();
  renderSnapshot();
  renderFleet();
  renderJobs();
  renderDispatchTasks();
  wireJobForm();
  renderWorkflowBoard();
  wireFleetForm();
  wireControls();
}

document.addEventListener('DOMContentLoaded', init);
