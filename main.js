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

const state = {
  provider: 'BCAA',
  rates: cloneRates(defaultRates),
  selection: {},
};

function cloneRates(rates) {
  return JSON.parse(JSON.stringify(rates));
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
}

function renderProviderOptions() {
  const select = document.querySelector('#provider');
  select.innerHTML = '';
  Object.keys(state.rates).forEach((provider) => {
    const opt = createElement('option', { value: provider, textContent: provider });
    if (provider === state.provider) opt.selected = true;
    select.appendChild(opt);
  });
  select.addEventListener('change', (ev) => {
    state.provider = ev.target.value;
    renderRateTable();
    renderSummary();
  });
}

function renderRateTable() {
  const container = document.querySelector('#rateTable');
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
  const { total, lines } = calculateTotal();
  const container = document.querySelector('#summary');
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

function wireActions() {
  document.querySelector('#resetRates').addEventListener('click', () => {
    state.rates = cloneRates(defaultRates);
    renderRateTable();
    renderSummary();
  });

  document.querySelector('#clearSelection').addEventListener('click', () => {
    state.selection[state.provider] = {};
    renderRateTable();
    renderSummary();
  });

  document.querySelector('#recalculate').addEventListener('click', () => {
    renderSummary();
  });

  document.querySelector('#customItemForm').addEventListener('submit', (ev) => {
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
    form.reset();
    renderRateTable();
    renderSummary();
  });
}

function init() {
  renderProviderOptions();
  renderRateTable();
  renderSummary();
  wireActions();
}

document.addEventListener('DOMContentLoaded', init);
