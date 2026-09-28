# Sayge

Source for [sayge.in](https://sayge.in) — the public website of Sayge, a technology partner for software, products and teams.

This repository is the site itself: pages, copy, selected work, and the static export used for hosting. It is not a Node.js server in production.

**Live:** [https://sayge.in](https://sayge.in)  
**Version:** 0.3.0  
**Contact:** [humans@sayge.in](mailto:humans@sayge.in)

## What is in this repo

- Marketing and company pages (`/`, `/about`, `/contact`)
- Custom software service page
- Selected work and case studies (`/work`)
- Editorial articles (`/blog`)
- Privacy and legal notice
- Employee / employer / client sign-in (`/login`) — not listed in the sitemap

## Stack

- Next.js 16 (App Router) with `output: "export"`
- React 19 and TypeScript
- Tailwind CSS v4
- Static files for Hostinger (Apache), including `public/.htaccess` for clean URLs

There is no database and no production Node runtime. `npm start` is only for local preview of a Next server, not for Hostinger.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npx tsc --noEmit
```

## Production build (Hostinger)

```bash
npm run build
```

The static site is written to `out/`. `out/` is gitignored.

### Automatic deploy (GitHub → Hostinger)

Do **not** use Hostinger’s “Deployment from GitHub” on this repo. That copies source files and will 403 the live site.

Each push to `main` runs `.github/workflows/deploy-hostinger.yml`: it bumps the **patch** version (`0.3.0` → `0.3.1`, and the footer), builds the site, FTP-uploads the **contents** of `out/`, then commits the version files with `[skip ci]` so that commit does not deploy again.

**Once, in Hostinger**

1. Disconnect any existing GitHub connection on sayge.in.
2. Create an FTP account (Files → FTP accounts).
3. If you can, set that account’s directory to `public_html` only.

**Once, in GitHub** (repo **Settings → Secrets and variables → Actions**):

| Secret | Typical value |
| --- | --- |
| `FTP_SERVER` | FTP host from hPanel (often `ftp.sayge.in` or the hostname shown there) |
| `FTP_USERNAME` | FTP username |
| `FTP_PASSWORD` | FTP password |
| `FTP_SERVER_DIR` | `/public_html/` if the FTP user starts in the hosting home; `/` if the user is already locked to `public_html` |

Trailing slashes on `FTP_SERVER_DIR` matter. `dangerous-clean-slate` is on: the remote folder is emptied before upload, so the FTP path must be the website directory, not the whole hosting account.

After the secrets exist, push to `main` or run **Actions → Deploy to Hostinger → Run workflow**.

The workflow needs permission to push the version commit: **Settings → Actions → General → Workflow permissions → Read and write**.

The live host should stay `https://sayge.in`. Point `www` at the same site in the Hostinger domain panel.

## Repository

[github.com/sayge-code-hub/sayge](https://github.com/sayge-code-hub/sayge)
