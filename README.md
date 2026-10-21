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
- `fs_responder.html` was removed during Phase 1 refactoring — `index.html` is now the sole entry point

## Deploy to Azure Static Web Apps

1. Create an Azure Static Web App in the Azure Portal.
2. In the Static Web App, open **Manage deployment token** and copy the token.
3. In GitHub, open this repo settings and add a repository secret:
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: deployment token from Azure
4. Push to `main`.

The workflow file at `.github/workflows/azure-static-web-apps-happy-smoke-0c1463103.yml` deploys the app automatically.
