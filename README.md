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

## 🌐 Deployment

Build with `npm run build` and deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages). Remember to configure the `VITE_EMAILJS_*` environment variables on the host.

## 📄 License

Personal project — all rights reserved.
