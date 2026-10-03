# Sayge system activity ledger

This file is the **human-readable history of the Sayge public website** ([sayge.in](https://sayge.in)).

It is written so that **engineering, support, and anyone else** can open one place and understand what the site is, what changed, when it changed, and what that means in practice. Technical commit hashes belong in Git. This ledger is for people.

---

## How to use this ledger

| Audience | What to look for |
| --- | --- |
| **Tech team** | What we shipped, how the site is hosted, what broke and how it was fixed, where the source of truth lives |
| **Support / ops** | What visitors can see, what does *not* work yet (for example sign-in), who to contact, what “version” means on the live site |
| **Everyone else** | A plain timeline of decisions and releases — without needing to read code |

### Rules for every new entry

1. Write as if explaining to a smart colleague who has never opened the repo.
2. Record **date**, **who acted**, **what changed**, **why**, and **the result people can observe**.
3. Prefer names people already use: “the live website”, “Hostinger”, “the blog article about ownership”, not internal filenames alone.
4. Do **not** paste passwords, FTP credentials, or secret values here. Say that a secret was added or corrected — never the value.
5. Put the **newest entry at the top** of the timeline.
6. If something failed and was later fixed, keep both entries. Failures are part of the history.

### Entry template (copy this)

```md
### YYYY-MM-DD — Short title a human would say out loud

- **Who:** Name or role (and tool if relevant, e.g. GitHub Actions)
- **What happened:** One or two plain sentences
- **Why:** The reason in business or ops terms
- **Result:** What is true afterwards (live URL behaviour, version number, who can do what)
- **Notes for support:** Anything someone answering humans@sayge.in should know
```

---

## Snapshot — what the system is today

*Last reviewed: 3 October 2026. Update this section whenever the live site’s shape changes in a way visitors or support would notice.*

### In one sentence

Sayge’s company website is a **static marketing site** that is built from this repository and published to **Hostinger** at **https://sayge.in**. There is **no production app server** and **no database** for the website.

### Live details

| Item | Value |
| --- | --- |
| Public site | https://sayge.in |
| Source repository | https://github.com/sayge-code-hub/sayge |
| Current site version shown in the footer | **0.3.1** (also stored in `package.json` and `src/lib/site.ts`) |
| Public contact email | humans@sayge.in |
| Public phone | +91 87886 81499 |
| Hosting | Hostinger (static files under the site’s web root / `public_html`) |
| How updates go live | Push to the `main` branch → GitHub Action builds the site → files are uploaded over FTP → version number is bumped automatically |

### What visitors can open

| Page | Purpose |
| --- | --- |
| `/` | Home — company introduction |
| `/about` | About Sayge |
| `/contact` | Contact |
| `/services/custom-software-development` | Custom software service page |
| `/work` | Selected work index |
| `/work/mahindra-finance` | Case study — Mahindra Finance (engineering capacity) |
| `/work/pandora-analytics` | Case study — Pandora Analytics (engagement overview) |
| `/work/pandora-analytics-toolkitx` | Product case study — ToolkitX |
| `/work/pandora-analytics-pets-software` | Product case study — Pets.Software |
| `/work/co2-exist` | Product case study — CO2Exist |
| `/work/classloop` | In-house product — ClassLoop |
| `/work/nivaas` | In-house product — Nivaas |
| `/blog` | Article index |
| `/blog/...` | Individual articles (see list below) |
| `/privacy` | Privacy policy |
| `/legal-notice` | Legal notice |
| `/login` | Sign-in screen (placeholder — see below) |

Also generated for search engines: `/sitemap.xml`, `/robots.txt`.

### Blog articles currently published

| Published | Title | Address |
| --- | --- | --- |
| 29 September 2026 | Software you can still own a year later. | `/blog/software-you-can-own-a-year-later` |
| 24 September 2026 | How much does it cost to build a mobile app? | `/blog/how-much-does-it-cost-to-build-a-mobile-app` |
| 23 September 2026 | Do you need a mobile app, a web app, or both? | `/blog/mobile-app-vs-web-app-or-both` |
| 22 September 2026 | What makes a software project expensive? | `/blog/what-makes-a-software-project-expensive` |
| 18 September 2026 | When custom software is worth building. | `/blog/when-custom-software-is-worth-building` |
| 11 September 2026 | Understand before building. | `/blog/understand-before-building` |
| 4 September 2026 | Practical AI, not AI as decoration. | `/blog/practical-ai-not-ai-as-decoration` |

**Redirect support should know about:** the old short address `/blog/software-you-can-own` permanently redirects to `/blog/software-you-can-own-a-year-later`.  
**Also:** visiting `/services` alone redirects to `/services/custom-software-development`.

### What the login page actually does today

The page at `/login` looks like a real sign-in for **Employee**, **Employer**, or **Client**.  
Submitting the form **does not sign anyone in**. It always shows: *Something went wrong. Write to us at humans@sayge.in.*

There is no account system, no password check, and no session behind this page yet. If someone asks why they cannot log in, that is expected behaviour until a real auth product is connected.

### What this website is *not*

- Not a Node.js server in production (only static HTML/CSS/JS on Hostinger)
- Not connected to a customer database
- Not the place where client product backends live (those are separate products / repositories)
- Not deployed by Hostinger’s “connect GitHub and copy files” feature — that path was deliberately avoided because it would publish source files instead of the built site

### Stack (for tech; still in plain words)

- Next.js (App Router) configured to **export a static site** into an `out/` folder
- React and TypeScript
- Tailwind CSS for styling
- Apache-style rewrite rules in `public/.htaccess` so clean URLs work on Hostinger
- Automated deploy workflow: `.github/workflows/deploy-hostinger.yml`

### Version number — what support can tell people

The footer shows something like `v0.3.1`.  
That number increases by one patch (for example `0.3.1` → `0.3.2`) **each time a successful deploy to Hostinger finishes**.  
If the live footer version does not match what we expect after a release, the deploy may have failed or not run.

---

## Timeline (newest first)

### 2026-10-03 — Created this system activity ledger

- **Who:** Aditya Rana (via Cursor cloud agent “System activity ledger”)
- **What happened:** Added this `LEDGER.md` file as the single place to record website history, timeline, and operational facts in language anyone can follow. Linked it from the project README.
- **Why:** Tech, support, and other stakeholders needed one document that explains what the site is and every meaningful action we take on it — without digging through Git history or deploy logs.
- **Result:** Going forward, every release, content change, hosting change, incident, and intentional product decision for sayge.in should get a new entry at the top of this timeline.
- **Notes for support:** If you are unsure what the live site currently contains, start with the **Snapshot** section above, then scan the newest timeline entries.

---

### 2026-09-29 — First successful automatic deploy; live site marked v0.3.1

- **Who:** GitHub Actions (`Deploy to Hostinger` workflow), after Aditya’s content push
- **What happened:** The site was built and uploaded to Hostinger over FTP. The workflow then committed version **0.3.1** to `main` (marked `[skip ci]` so that version-only commit does not deploy again).
- **Why:** Prove the full path: change on `main` → build → publish → bump the public version.
- **Result:** Live site version became **0.3.1**. Automatic deploy is the normal release path from this point.
- **Notes for support:** If someone asks “when did automatic hosting go live?”, this is the first green deploy.

---

### 2026-09-29 — Expanded the software-ownership article and kept the old link working

- **Who:** Aditya Rana (with Cursor)
- **What happened:** Expanded the blog article now titled **“Software you can still own a year later.”** The public URL became `/blog/software-you-can-own-a-year-later`. Anyone who still has the shorter address `/blog/software-you-can-own` is sent to the new URL with a permanent redirect.
- **Why:** Longer, clearer article; avoid broken bookmarks and shared links to the old slug.
- **Result:** Both the new article URL and the old short URL work for readers. This change rode the first successful Hostinger deploy (above).
- **Notes for support:** Prefer sharing the long URL. The short one is fine; it only redirects.

---

### 2026-09-29 — Deploy workflow taught to bump the patch version after each successful publish

- **Who:** Aditya Rana (with Cursor)
- **What happened:** Updated the Hostinger deploy workflow so that before building it increases the patch version (for example `0.3.0` → `0.3.1`) in `package.json` and in the site version constant shown in the footer, then commits that bump after a successful upload.
- **Why:** Support and the team can tell which build is live by looking at the footer, without asking engineering.
- **Result:** Version bumps are automatic on successful deploys. A failed deploy should not leave a misleading “new” version on the live host from that run.
- **Notes for support:** Footer version = last successful automated publish.

---

### 2026-09-29 — First deploy attempts failed (FTP not ready), then secrets were corrected

- **Who:** GitHub Actions; secrets configured in the GitHub repository settings
- **What happened:**
  1. First run failed because FTP server settings were not yet provided to the workflow (“server” input missing).
  2. Next run failed because FTP login was rejected (`530 Login incorrect`).
  3. After credentials / server settings were fixed in GitHub Secrets, the later deploy succeeded (see “First successful automatic deploy” above).
- **Why:** The workflow was added before (or while) Hostinger FTP access was fully wired into GitHub.
- **Result:** Temporary failed Actions runs; no reliable automated publish until login worked. History kept here so nobody treats those red runs as a code bug.
- **Notes for support:** If deploys suddenly fail with login errors again, check Hostinger FTP account status and GitHub Secrets — not the website copy.

---

### 2026-09-29 — Added automatic build-and-publish to Hostinger

- **Who:** Aditya Rana (with Cursor)
- **What happened:** Added a GitHub Action named **Deploy to Hostinger**. On every push to `main` (or a manual run), it installs dependencies, builds the static site, and uploads the contents of `out/` to the Hostinger web directory over FTP. The upload is configured to replace the remote site directory cleanly.
- **Why:** Avoid Hostinger’s “deploy from GitHub” feature, which would copy source files and break the live site. We need a real build, then only the built files on the server.
- **Result:** Release process is: merge/push to `main` → Action runs → site updates. Manual FTP of `out/` is no longer the intended path.
- **Notes for support / tech:** Required GitHub Secrets (names only): `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR`. Workflow file: `.github/workflows/deploy-hostinger.yml`. Do not point the FTP directory at the whole hosting account — only the website folder.

---

### 2026-09-29 — Replaced the starter README with the Sayge website brief

- **Who:** Aditya Rana (with Cursor)
- **What happened:** Replaced the default create-next-app README with a project brief: what the repo is, how to run it locally, how production build works, and how Hostinger deploy is supposed to be set up.
- **Why:** So anyone joining the repo understands this is the **sayge.in** website source, not a generic Next.js demo.
- **Result:** `README.md` became the operator’s quick start. This ledger is the longer history and ops narrative.

---

### 2026-09-28 / 2026-09-29 — Published the Sayge website source as version 0.3.0

- **Who:** Aditya Rana (with Cursor); GitHub repository `sayge-code-hub/sayge` created around this time
- **What happened:** The full website source was published to GitHub as **v0.3.0**. That first commit included the marketing pages, selected work / case studies, blog articles, privacy and legal pages, the login placeholder, static assets, and Hostinger-oriented `.htaccess` rules for clean URLs.
- **Why:** Put the public website under a clear, company-owned repository with version history.
- **Result:** Source of truth for sayge.in lives in this repo. Version label at publish: **0.3.0**.
- **Notes for support:** Content that appeared on the site at launch (home, about, contact, custom software, work, blog, privacy, legal, login UI) dates from this publish. Blog article *dates* shown on the site can be earlier in September 2026; those are editorial publish dates, not necessarily the GitHub commit day.

---

## Incidents and known limitations

| Status | Topic | Plain explanation |
| --- | --- | --- |
| Resolved | Early FTP deploy failures | Missing / wrong FTP settings at first; fixed before the first successful publish |
| Known limitation | `/login` | UI only; always fails with a message to email humans@sayge.in |
| Standing rule | Do not use Hostinger “Deployment from GitHub” on this repo | It would publish source instead of the built static site and can take the site down (for example 403) |
| Standing rule | Deploy concurrency | Only one Hostinger deploy runs at a time; a newer run cancels an older one still in progress |

---

## Where things live (quick map for tech)

| Need | Look here |
| --- | --- |
| Site name, URL, version, contact constants | `src/lib/site.ts` |
| Blog posts | `src/lib/blog.ts` |
| Work / case study content | `src/lib/work.ts` and `src/lib/work-*.ts` |
| Logo row on the site | `src/lib/selected-experience.ts` |
| Clean URL + redirects on Hostinger | `public/.htaccess` |
| Automatic deploy | `.github/workflows/deploy-hostinger.yml` |
| Operator quick start | `README.md` |
| **This history** | `LEDGER.md` |

---

## Checklist when you change the live system

After any change that people will feel or ask about, add a timeline entry above and, if needed, update the Snapshot.

Typical triggers:

- [ ] New or edited page, case study, or blog article
- [ ] Redirect added or removed
- [ ] Deploy / hosting / DNS / domain change
- [ ] Version policy change
- [ ] Login or other product behaviour change
- [ ] Incident (outage, wrong content live, failed deploy that affected people)
- [ ] Secrets or access process change (describe the process, not the secret)

When in doubt: **if a human might ask “what happened?”, write it here.**
