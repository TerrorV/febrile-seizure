# Febrile Seizure Emergency Guide

Simple static emergency guide app for febrile seizure response. Online version can be found at https://happy-smoke-0c1463103.7.azurestaticapps.net/

## Local files

- `fs_responder.html`: original source file
- `index.html`: site entry point used for deployment

## Deploy to Azure Static Web Apps

1. Create an Azure Static Web App in the Azure Portal.
2. In the Static Web App, open **Manage deployment token** and copy the token.
3. In GitHub, open this repo settings and add a repository secret:
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: deployment token from Azure
4. Push to `main`.

The workflow file at `.github/workflows/azure-static-web-apps.yml` deploys the app automatically.
