# Febrile Seizure Emergency Guide

Simple static emergency guide app for febrile seizure response. Online version can be found at https://happy-smoke-0c1463103.7.azurestaticapps.net/

## File structure

```
febrile-seizure/
├── index.html                          # Canonical entry point (HTML shell)
├── assets/
│   ├── css/
│   │   └── app.css                     # All application styles
│   ├── js/
│   │   ├── app.js                      # Application logic (timer, questions, summary)
│   │   └── i18n.js                     # Translation helper (I18N.t)
│   └── i18n/
│       ├── en.json                     # English translation dictionary
│       ├── es.json                     # Spanish translation dictionary
│       └── bg.json                     # Bulgarian translation dictionary
└── .github/workflows/
    └── azure-static-web-apps-*.yml     # GitHub Actions deployment
```

## Local files

- `index.html`: site entry point and canonical source (used for deployment)

## Deploy to Azure Static Web Apps

1. Create an Azure Static Web App in the Azure Portal.
2. In the Static Web App, open **Manage deployment token** and copy the token.
3. In GitHub, open this repo settings and add a repository secret:
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: deployment token from Azure
4. Push to `main`.

The workflow file at `.github/workflows/azure-static-web-apps-happy-smoke-0c1463103.yml` deploys the app automatically.

## Translation file format

All user-visible strings live in `assets/i18n/*.json`. Each language file is a flat hierarchy of dot-accessible keys.

**Structure:**
```json
{
  "namespace": {
    "key": "Display text",
    "nested": {
      "key": "Text with {placeholder} interpolation"
    }
  }
}
```

**Rules:**
- Every language file must share the same key hierarchy.
- Keys may contain `{name}` placeholders; the JS `I18N.t()` function performs simple string replacement.
- Missing keys fall back to the raw key string (visible as-is in English), so you can add a new language by copying `en.json` and translating values.
- English (`en.json`) is the fallback language.

To add a new language: copy `en.json` to `assets/i18n/<code>.json`, translate all values, and register the file in `index.html`'s `<script>` block.

## PWA behavior

The app is a Progressive Web App that can be installed from a phone's home screen.

**What gets cached:**
- `index.html`, `assets/css/app.css`, `assets/js/app.js`, `assets/js/i18n.js`
- `assets/i18n/*.json`, `assets/icons/*`
- `manifest.webmanifest`

**Cache updates:**
- The service worker (`sw.js`) uses a stale-while-revalidate strategy for assets.
- When a new version is deployed, the service worker updates in the background and shows a small "New version available" banner with a reload button.
- Users can skip the update via the skip-wait button.

**Offline mode:**
- After the first successful visit, the entire app works offline.
- Saved settings and profile data (localStorage) persist offline.
- No network is required during an active seizure timer.

## Saved data behavior

Settings and child profile data are stored in `localStorage` under namespaced keys.

**What is stored:**
- `fsResponder.settings` — language preference, theme mode, and schema version.
- `fsResponder.profile` — child age (years) and weight (kg), with a `lastUpdated` timestamp.

**Schema versioning:**
- Each stored object carries a `v` field. On mismatch the app clears stale data and starts fresh, preventing corruption from schema changes.

**Privacy:**
- All data stays on the user's device. Nothing is sent to any server.
- The settings panel shows a consent line: "Stored only on this device."
- A "Clear saved data" button removes all stored settings and profile data.
