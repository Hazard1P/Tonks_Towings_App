# Tonks Towing Rate Calculator

Offline-friendly single-page calculator for the Tonks Towing rate sheet. The app ships with the rate values from the provided sheet (BCAA, SYKES, and Park & Fly) and lets dispatchers edit numbers, add custom lines, and compute totals with per-km or per-hour quantities.

## Usage
1. Open `index.html` in a modern browser (no build step required).
2. Select the provider, check the line items you want, and enter quantities for per-km / per-hour rows.
3. Add custom lines via the **Add custom line item** panel if needed.
4. Totals update instantly; use **Reset rates** to restore the shipped sheet values or **Clear all selections** to start a new ticket.

## Development
- All logic lives in `main.js` and uses plain ES modules—no external dependencies.
- Styling is defined in `styles.css` and intentionally high-contrast for field readability.
- To run the placeholder test script (keeps CI happy):

```bash
npm test
```
