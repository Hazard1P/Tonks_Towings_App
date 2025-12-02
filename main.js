const defaultRates = {
  BCAA: [
    { key: 'tow', label: 'Tow', amount: 52.53, type: 'flat' },
    { key: 'service', label: 'Service', amount: 47.94, type: 'flat' },
    { key: 'dollies', label: 'Dollies', amount: 30.6, type: 'flat' },
    { key: 'km_tow_service', label: 'Km tow / Service', amount: 2.64, type: 'per_km' },
    { key: 'hwy_rush', label: 'Hwy rush 6:30–9:30 / 3:30–6:30', amount: 14.25, type: 'flat' },
    { key: 'fuel_surcharge_21', label: 'Fuel surcharge 21%', amount: 0.21, type: 'percent' },
    { key: 'fuel_surcharge_25', label: 'Fuel surcharge 25%', amount: 0.25, type: 'percent' },
  ],
  PDG: [
    { key: 'tow', label: 'Tow', amount: 65.0, type: 'flat' },
    { key: 'service', label: 'Service', amount: 65.0, type: 'flat' },
    { key: 'dollies_or_deck', label: 'Dollies or Deck', amount: 45.0, type: 'flat' },
    { key: 'km_after_3', label: 'Km after 3', amount: 2.75, type: 'per_km' },
    { key: 'recovery', label: 'Recovery', amount: 65.0, type: 'flat' },
    { key: 'fuel_surcharge_21', label: 'Fuel surcharge 21%', amount: 0.21, type: 'percent' },
    { key: 'fuel_surcharge_25', label: 'Fuel surcharge 25%', amount: 0.25, type: 'percent' },
  ],
  Sykes: [
    { key: 'tow_recovery_15', label: 'Tow or Recovery up to 15 min', amount: 58.0, type: 'flat' },
    { key: 'service', label: 'Service', amount: 50.0, type: 'flat' },
    { key: 'dollies', label: 'Dollies', amount: 35.0, type: 'flat' },
    { key: 'km_after_5', label: 'Km after 5', amount: 2.65, type: 'per_km' },
    { key: 'standby_winch', label: 'Standby / Winch per hr', amount: 82.0, type: 'per_hour' },
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

const baseFleet = [
  { id: 'TRK-21', type: 'Flatbed', operator: 'Sam Tonks', contact: '604-000-2100', status: 'Dispatched', location: 'Maple Ridge yard' },
  { id: 'TRK-14', type: 'Wrecker', operator: 'Jas Dhaliwal', contact: '604-000-1400', status: 'Dispatched', location: 'HWY 1 @ 232' },
  { id: 'TRK-7', type: 'Service', operator: 'Leah Campos', contact: '604-000-0700', status: 'In yard', location: 'Pitt Meadows shop' },
  { id: 'TRK-3', type: 'Motorcycle deck', operator: 'Wei Zhang', contact: '604-000-0300', status: 'On scene', location: 'Lougheed Hwy' },
];

const baseJobs = [
  { id: 'JOB-2041', customer: 'BCAA member', location: 'Lougheed Hwy @ 203rd', provider: 'BCAA', eta: '12:15', notes: 'Winch out, muddy shoulder', status: 'Awaiting dispatch', driver: 'TRK-7', invoiceStatus: 'Draft', charges: [] },
  { id: 'JOB-2042', customer: 'Park and Fly', location: 'YVR Economy lot', provider: 'ParkAndFly', eta: '12:40', notes: 'Flat tire, needs dollies', status: 'Dispatched', driver: 'TRK-21', invoiceStatus: 'Draft', charges: [] },
  { id: 'JOB-2043', customer: 'Retail', location: 'Dewdney Trunk Rd', provider: 'Sykes', eta: '13:10', notes: 'Motorcycle premium', status: 'On scene', driver: 'TRK-3', invoiceStatus: 'Ready', charges: [] },
];

const STORAGE_KEY = 'tonks_towing_v2';

const state = {
  provider: 'BCAA',
  rates: clone(defaultRates),
  jobs: clone(baseJobs),
  fleet: clone(baseFleet),
  charges: {},
  ledger: [],
  gmail: { clientId: '', query: 'subject:(tow OR dispatch) newer_than:7d', lastPreview: '' },
};

let gmailTokenClient;
let gmailAccessToken;

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const parsed = JSON.parse(saved);
    Object.assign(state, parsed);
  } catch (err) {
    console.error('Failed to load state', err);
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function logEvent(action, details = {}) {
  const entry = { id: crypto.randomUUID(), time: new Date().toISOString(), action, details };
  state.ledger.unshift(entry);
  state.ledger = state.ledger.slice(0, 200);
  persistState();
  renderLedger();
}

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function setupSelectOptions(select, options) {
  select.innerHTML = '';
  options.forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function updateGmailInputs() {
  const clientInput = document.getElementById('gmailClientId');
  const queryInput = document.getElementById('gmailQuery');
  if (!clientInput || !queryInput) return;
  clientInput.value = state.gmail.clientId;
  queryInput.value = state.gmail.query;
}

function setGmailStatus(message, type = 'info', details = '') {
  const status = document.getElementById('gmailStatus');
  if (!status) return;
  const classes = ['status-block'];
  if (type === 'success') classes.push('success');
  if (type === 'error') classes.push('error');
  status.className = classes.join(' ');
  status.innerHTML = `<strong>${message}</strong>${details ? `<small>${details}</small>` : ''}`;
  if (state.gmail.lastPreview) {
    const preview = document.createElement('small');
    preview.textContent = state.gmail.lastPreview;
    status.append(preview);
  }
}

function connectGmail() {
  const clientId = document.getElementById('gmailClientId').value.trim();
  const query = document.getElementById('gmailQuery').value.trim();
  if (!clientId) {
    setGmailStatus('Add a Google OAuth client ID to connect.', 'error');
    return;
  }
  state.gmail.clientId = clientId;
  state.gmail.query = query || state.gmail.query;
  persistState();

  if (!window.google?.accounts?.oauth2) {
    setGmailStatus('Google Identity Services is still loading. Try again in a moment.', 'error');
    return;
  }

  gmailTokenClient = google.accounts.oauth2.initTokenClient({
    client_id: clientId,
    scope: 'https://www.googleapis.com/auth/gmail.readonly',
    callback: (tokenResponse) => {
      gmailAccessToken = tokenResponse.access_token;
      setGmailStatus('Gmail connected. You can fetch the latest dispatch email.', 'success');
      logEvent('gmail_connected');
    },
  });

  gmailTokenClient.requestAccessToken({ prompt: 'consent' });
}

async function fetchLatestGmail() {
  if (!gmailAccessToken) {
    setGmailStatus('Connect Gmail first, then pull a dispatch email.', 'error');
    return;
  }
  const query = document.getElementById('gmailQuery').value.trim() || state.gmail.query;
  state.gmail.query = query;
  persistState();
  try {
    setGmailStatus('Looking for the latest matching email...');
    const listRes = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=1&q=${encodeURIComponent(query)}`,
      { headers: { Authorization: `Bearer ${gmailAccessToken}` } }
    );
    if (!listRes.ok) throw new Error('Unable to reach Gmail. Check scopes and account access.');
    const list = await listRes.json();
    if (!list.messages?.length) {
      setGmailStatus('No emails matched that query.', 'error');
      return;
    }
    const messageId = list.messages[0].id;
    const messageRes = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}?format=full`,
      { headers: { Authorization: `Bearer ${gmailAccessToken}` } }
    );
    if (!messageRes.ok) throw new Error('Failed to download the email body.');
    const message = await messageRes.json();
    const body = extractPlainText(message.payload);
    const parsed = parseCallEmail(body);
    state.gmail.lastPreview = parsed.preview;
    persistState();
    fillJobForm(parsed.fields);
    setGmailStatus('Call details loaded from Gmail and prefilled.', 'success', parsed.preview);
    logEvent('gmail_call_imported', { messageId, query });
  } catch (err) {
    console.error(err);
    setGmailStatus(err.message || 'Gmail lookup failed.', 'error');
    logEvent('gmail_error', { message: err.message });
  }
}

function extractPlainText(payload) {
  if (!payload) return '';
  if (payload.parts) {
    const textPart = payload.parts.find((p) => p.mimeType === 'text/plain') || payload.parts[0];
    if (textPart?.body?.data) return decodeBase64Url(textPart.body.data);
    return extractPlainText(textPart);
  }
  if (payload.body?.data) return decodeBase64Url(payload.body.data);
  return '';
}

function decodeBase64Url(input) {
  const normalized = input.replace(/-/g, '+').replace(/_/g, '/');
  const decoded = atob(normalized);
  try {
    return decodeURIComponent(escape(decoded));
  } catch (e) {
    return decoded;
  }
}

function parseCallEmail(text) {
  const clean = text.replace(/\r/g, '');
  const find = (label) => {
    const match = new RegExp(`${label}:\s*(.+)`, 'i').exec(clean);
    return match ? match[1].trim() : '';
  };

  const idMatch = clean.match(/(JOB[-\s]?\d{3,5}|Call ID[:\s]*([A-Za-z0-9-]+))/i);
  const etaMatch = clean.match(/ETA[:\s]*([0-2]?\d[:\.][0-5]\d)/i);
  const driverMatch = clean.match(/Driver[:\s]*([A-Za-z0-9- ]+)/i);

  const fallbackId = `JOB-${Date.now().toString().slice(-4)}`;
  const fields = {
    id: (idMatch?.[2] || idMatch?.[1] || '').replace(/\s+/g, '').toUpperCase() || fallbackId,
    customer: find('Customer') || find('Member') || 'Retail',
    location: find('Location') || find('Address') || '',
    provider: find('Program') || find('Provider') || state.provider,
    driver: (driverMatch?.[1] || '').trim(),
    eta: etaMatch?.[1]?.replace('.', ':') || '',
    notes: find('Notes') || find('Details') || clean.split('\n')[0].slice(0, 120),
  };

  const preview = `ID ${fields.id || '—'} · ${fields.customer || '—'} · ${fields.location || '—'}`;
  return { fields, preview };
}

function fillJobForm(fields) {
  const form = document.getElementById('jobForm');
  if (!form) return;
  const patchable = ['id', 'customer', 'location', 'provider', 'driver', 'eta', 'notes'];
  patchable.forEach((key) => {
    if (!fields[key]) return;
    const input = form.elements.namedItem(key);
    if (input) input.value = fields[key];
  });
}

function renderRateTable() {
  const provider = document.getElementById('rateProvider').value;
  const tbody = document.querySelector('#rateTable tbody');
  tbody.innerHTML = '';
  state.rates[provider].forEach((rate) => {
    const row = document.createElement('tr');
    const includeCell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = Boolean(state.charges[rate.key]);
    checkbox.addEventListener('change', () => toggleCharge(rate.key, rate, checkbox));
    includeCell.append(checkbox);

    const labelCell = document.createElement('td');
    labelCell.textContent = rate.label;

    const amountCell = document.createElement('td');
    amountCell.className = 'right';
    amountCell.textContent = formatCurrency(rate.amount);

    const unitCell = document.createElement('td');
    unitCell.className = 'right';
    if (['per_km', 'per_unit', 'per_hour'].includes(rate.type)) {
      const qty = document.createElement('input');
      qty.type = 'number';
      qty.min = '0';
      qty.step = '0.1';
      qty.value = state.charges[rate.key]?.quantity ?? 1;
      qty.addEventListener('input', () => updateQuantity(rate.key, rate, Number(qty.value)));
      unitCell.append(qty);
    } else {
      unitCell.textContent = '1';
    }

    row.append(includeCell, labelCell, amountCell, unitCell);
    tbody.append(row);
  });
}

function toggleCharge(key, rate, checkbox) {
  if (checkbox.checked) {
    state.charges[key] = { ...rate, quantity: state.charges[key]?.quantity ?? 1 };
  } else {
    delete state.charges[key];
  }
  persistState();
  renderTotals();
}

function updateQuantity(key, rate, quantity) {
  if (!state.charges[key]) {
    state.charges[key] = { ...rate, quantity };
  } else {
    state.charges[key].quantity = quantity;
  }
  persistState();
  renderTotals();
}

function calculateTotals() {
  const lines = Object.values(state.charges);
  const base = lines
    .filter((line) => line.type !== 'percent')
    .reduce((sum, line) => {
      const qty = Math.max(line.quantity ?? 1, 0);
      return sum + line.amount * (['per_km', 'per_unit', 'per_hour'].includes(line.type) ? qty : 1);
    }, 0);
  const percent = lines
    .filter((line) => line.type === 'percent')
    .reduce((sum, line) => sum + line.amount, 0);
  const subtotal = base + base * percent;
  const tax = subtotal * 0.05;
  const total = subtotal + tax;
  return { subtotal, tax, total, lines };
}

function renderTotals() {
  const totalsEl = document.getElementById('totals');
  const { subtotal, tax, total } = calculateTotals();
  totalsEl.innerHTML = '';
  const rows = [
    ['Subtotal', formatCurrency(subtotal)],
    ['GST (5%)', formatCurrency(tax)],
    ['Total', formatCurrency(total)],
  ];
  rows.forEach(([label, value]) => {
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    totalsEl.append(row);
  });
}

function renderJobs() {
  const filter = document.getElementById('invoiceFilter').value;
  const tbody = document.querySelector('#jobTable tbody');
  tbody.innerHTML = '';
  state.jobs
    .filter((job) => filter === 'all' || job.invoiceStatus === filter)
    .forEach((job) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${job.id}</td>
        <td>${job.customer}</td>
        <td>${job.location}</td>
        <td>${job.provider}</td>
        <td>${job.driver || 'Unassigned'}</td>
        <td>${job.eta || '--'}</td>
        <td>${job.status}</td>
      `;

      const invoiceCell = document.createElement('td');
      const select = document.createElement('select');
      ['Draft', 'Ready', 'Paid'].forEach((status) => {
        const option = document.createElement('option');
        option.value = status;
        option.textContent = status;
        if (job.invoiceStatus === status) option.selected = true;
        select.append(option);
      });
      select.addEventListener('change', () => updateInvoiceStatus(job.id, select.value));
      invoiceCell.append(select);
      tr.append(invoiceCell);
      tbody.append(tr);
    });

  populateJobSelects();
}

function renderFleet() {
  const tbody = document.querySelector('#fleetTable tbody');
  tbody.innerHTML = '';
  state.fleet.forEach((truck) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${truck.id}</td>
      <td>${truck.type}</td>
      <td>${truck.operator}</td>
      <td>${truck.status}</td>
      <td>${truck.location}</td>
    `;
    tbody.append(tr);
  });
}

function renderLedger() {
  const container = document.getElementById('ledgerStats');
  container.innerHTML = '';
  const summary = document.createElement('div');
  summary.className = 'totals';
  summary.innerHTML = `
    <div class="row"><span>Entries</span><strong>${state.ledger.length}</strong></div>
    <div class="row"><span>Last update</span><strong>${state.ledger[0]?.time ? new Date(state.ledger[0].time).toLocaleString() : '—'}</strong></div>
  `;
  container.append(summary);

  const list = document.createElement('ul');
  list.className = 'tight-list';
  state.ledger.slice(0, 5).forEach((entry) => {
    const li = document.createElement('li');
    li.textContent = `${new Date(entry.time).toLocaleTimeString()} — ${entry.action}`;
    list.append(li);
  });
  container.append(list);
}

function populateJobSelects() {
  const invoiceJob = document.getElementById('invoiceJob');
  setupSelectOptions(invoiceJob, state.jobs.map((j) => j.id));
  if (invoiceJob.options.length) {
    invoiceJob.value = state.jobs[0].id;
  }
}

function updateInvoiceStatus(jobId, status) {
  const job = state.jobs.find((j) => j.id === jobId);
  if (!job) return;
  job.invoiceStatus = status;
  logEvent('invoice_status_changed', { jobId, status });
  persistState();
}

function handleJobForm(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form).entries());
  const job = {
    id: data.id,
    customer: data.customer,
    location: data.location,
    provider: data.provider,
    eta: data.eta,
    notes: data.notes,
    status: data.status,
    driver: data.driver,
    invoiceStatus: 'Draft',
    charges: [],
  };
  state.jobs.unshift(job);
  logEvent('job_created', job);
  form.reset();
  renderJobs();
  persistState();
}

function applyChargesToJob() {
  const jobId = document.getElementById('invoiceJob').value;
  const job = state.jobs.find((j) => j.id === jobId);
  if (!job) return;
  const totals = calculateTotals();
  job.charges = totals.lines;
  job.invoiceStatus = 'Ready';
  logEvent('charges_applied', { jobId, total: totals.total });
  renderJobs();
  persistState();
}

function clearCharges() {
  state.charges = {};
  persistState();
  renderRateTable();
  renderTotals();
}

function exportJobCsv() {
  const jobId = document.getElementById('invoiceJob').value;
  const job = state.jobs.find((j) => j.id === jobId) || state.jobs[0];
  if (!job) return;
  const totals = calculateTotals();
  const header = ['Job ID', 'Customer', 'Location', 'Program', 'Driver', 'Status', 'Invoice Status', 'Line', 'Amount', 'Quantity'];
  const rows = totals.lines.map((line) => [
    job.id,
    job.customer,
    job.location,
    job.provider,
    job.driver ?? '',
    job.status,
    job.invoiceStatus,
    line.label,
    line.amount,
    line.quantity ?? 1,
  ]);
  const csv = [header, ...rows, ['Totals', '', '', '', '', '', '', formatCurrency(totals.total)]]
    .map((r) => r.join(','))
    .join('\n');
  downloadFile(`job-${job.id}.csv`, csv);
  logEvent('job_csv_exported', { jobId: job.id });
}

function exportLedgerCsv() {
  const header = ['Time', 'Action', 'Details'];
  const rows = state.ledger.map((entry) => [entry.time, entry.action, JSON.stringify(entry.details || {})]);
  const csv = [header, ...rows].map((r) => r.join(',')).join('\n');
  downloadFile('ledger.csv', csv);
}

function downloadFile(filename, content) {
  const blob = new Blob([content], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function resetData() {
  state.provider = 'BCAA';
  state.rates = clone(defaultRates);
  state.jobs = clone(baseJobs);
  state.fleet = clone(baseFleet);
  state.charges = {};
  state.ledger = [];
  state.gmail = { clientId: '', query: 'subject:(tow OR dispatch) newer_than:7d', lastPreview: '' };
  persistState();
  initialize();
  logEvent('workspace_reset');
}

function initialize() {
  loadState();
  const programs = Object.keys(state.rates);
  const providerSelect = document.querySelector('select[name="provider"]');
  const rateProvider = document.getElementById('rateProvider');
  setupSelectOptions(providerSelect, programs);
  setupSelectOptions(rateProvider, programs);
  providerSelect.value = state.provider;
  rateProvider.value = state.provider;
  setupSelectOptions(document.querySelector('select[name="driver"]'), ['Unassigned', ...state.fleet.map((f) => f.id)]);
  updateGmailInputs();
  setGmailStatus('Connect Gmail to auto-fill new calls.');
  renderRateTable();
  renderTotals();
  renderJobs();
  renderFleet();
  renderLedger();
}

document.addEventListener('DOMContentLoaded', () => {
  initialize();
  document.getElementById('rateProvider').addEventListener('change', (e) => {
    state.provider = e.target.value;
    renderRateTable();
  });
  document.getElementById('invoiceFilter').addEventListener('change', renderJobs);
  document.getElementById('jobForm').addEventListener('submit', handleJobForm);
  document.getElementById('recalculate').addEventListener('click', renderTotals);
  document.getElementById('applyCharges').addEventListener('click', applyChargesToJob);
  document.getElementById('clearCharges').addEventListener('click', clearCharges);
  document.getElementById('exportJobCsv').addEventListener('click', exportJobCsv);
  document.getElementById('downloadLedger').addEventListener('click', exportLedgerCsv);
  document.getElementById('refreshLedger').addEventListener('click', renderLedger);
  document.getElementById('connectGmail').addEventListener('click', connectGmail);
  document.getElementById('fetchGmail').addEventListener('click', fetchLatestGmail);
  document.getElementById('saveAll').addEventListener('click', () => {
    persistState();
    logEvent('manual_save');
  });
  document.getElementById('resetData').addEventListener('click', resetData);
});
