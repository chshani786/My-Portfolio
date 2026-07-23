# Muhammad Arslan Anwer — Portfolio

Personal portfolio site for **Muhammad Arslan Anwer**, Senior Full Stack Software Engineer. A single-page React application showcasing skills, tools, featured projects, work experience, and a working contact form powered by EmailJS.

## ✨ Features

- **Responsive single-page layout** — Header, Banner, About, Skills, Tools, Projects, Experience, Contact
- **Light / dark / system theme** with a persistent theme switcher
- **Featured projects** with detail modals, image galleries, and a keyboard-navigable lightbox
- **Working contact form** — client-side validation with real email delivery via EmailJS, plus an auto-reply to the sender
- **Live visitor counter** (via [counterapi.dev](https://counterapi.dev))
- **Lazy-loaded sections** for faster initial load

## 🛠 Tech Stack

| Area | Technologies |
|------|--------------|
| Framework | React 18, TypeScript, Vite 5 |
| Styling | Tailwind CSS, shadcn/ui, Radix UI, lucide-react icons |
| Email | EmailJS (`@emailjs/browser`) |
| Tooling | ESLint, Prettier |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone git@github.com:chshani786/My-Portfolio.git
cd My-Portfolio
npm install
```

### Environment variables

The contact form uses EmailJS. Copy the example file and fill in your credentials:

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key    # Account → General → Public Key
VITE_EMAILJS_SERVICE_ID=your_service_id    # Email Services → your service
VITE_EMAILJS_TEMPLATE_ID=your_template_id  # Email Templates → your template
```

> These values are **public by design** (EmailJS is a client-side service), but `.env` is git-ignored so they stay out of the repo. On a hosting provider, set the three `VITE_EMAILJS_*` values as environment variables.

### Development

```bash
npm run dev      # start the Vite dev server
npm run build    # type-check and build for production (outputs to dist/)
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## 📬 EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/) and add an email service.
2. Create an email template that uses these variables (all sent by the contact form):
   `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{time}}`.
3. Ready-made template HTML is included in the repo:
   - [`emailjs-template.html`](./emailjs-template.html) — notification email sent to the site owner
   - [`emailjs-autoreply-template.html`](./emailjs-autoreply-template.html) — confirmation auto-reply sent to the visitor
4. In the template settings, set **Reply To** to `{{from_email}}` so replies go straight to the sender.
5. Put your Service ID, Template ID, and Public Key in `.env` (see above).

## 📁 Project Structure

```
src/
├── App.tsx                    # Root app, wraps contexts
├── main.tsx                   # Entry point
├── components/
│   ├── ui/                    # shadcn/ui primitives (button, card, dialog, ...)
│   └── SectionTitle.tsx
├── hooks/
│   └── useVisitorCount.ts     # Live visitor counter
├── pages/
│   ├── home/
│   │   ├── index.tsx          # Home page composition
│   │   └── components/        # Header, Banner, AboutMe, Skills, Tools,
│   │                          #   Projects, Experience, Contact
│   └── utils/
│       ├── AppContext.tsx     # Profile data (name, contact, socials)
│       └── Contexts.tsx       # Theme + App providers
└── types/                     # Type definitions
```

Profile content (name, contact, social links) lives in [`src/pages/utils/AppContext.tsx`](./src/pages/utils/AppContext.tsx). Projects, skills, tools, and experience are defined in their respective component files under `src/pages/home/components/`.

## 🌐 Deployment & CI/CD

Deployment is automated to **Netlify** via GitHub Actions
([`.github/workflows/ci-cd.yml`](./.github/workflows/ci-cd.yml)):

- **Every push / PR** → install, lint, type-check, and build (the CI gate)
- **Push to `main`** → production deploy
- **Pull requests** → Netlify preview deploy

Build settings (publish dir, SPA redirect, cache & security headers) live in
[`netlify.toml`](./netlify.toml).

### One-time setup

1. Create an empty site in Netlify (do **not** connect it to Git — Actions drives the deploys).
2. Grab your **Site ID** (Site settings → General) and a **personal access token**
   (User settings → Applications → New access token).
3. In GitHub → **Settings → Secrets and variables → Actions**, add these repository secrets:

   | Secret | Value |
   |--------|-------|
   | `NETLIFY_AUTH_TOKEN` | your Netlify personal access token |
   | `NETLIFY_SITE_ID` | the Netlify site ID |
   | `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
   | `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
   | `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |

The `VITE_EMAILJS_*` values are needed at **build time** (Vite inlines them), which is
why they're GitHub secrets rather than Netlify UI variables.

> Prefer Netlify's own Git integration instead? Connect the repo in Netlify and set the
> three `VITE_EMAILJS_*` values under Site settings → Environment variables. In that case,
> remove the deploy steps from the workflow (keep only lint + build as CI).

## 📄 License

Personal project — all rights reserved.
