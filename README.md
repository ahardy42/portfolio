# Ultimate Question Coding Portfolio

A modern, responsive portfolio website for Ultimate Question Coding LLC, showcasing our software development services and project portfolio.

## 🚀 About

Ultimate Question Coding LLC is a software development house based in Waterbury, VT that specializes in custom app development for clients. We have extensive experience creating web-apps, static sites, cross-platform apps, and smart TV applications.

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Modern web framework with server-side rendering
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **[Vercel](https://vercel.com/)** - Deployment platform
- **[Resend](https://resend.com/)** - Email API for contact form submissions

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml    # Vercel deployment workflow
├── public/
│   ├── CNAME
│   ├── favicon.ico
│   └── site.webmanifest
├── src/
│   ├── actions/          # Server-side actions
│   │   └── index.ts      # Contact form email handler
│   ├── components/       # Reusable Astro components
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Welcome.astro
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro
│   └── pages/            # Route pages
│       ├── about.astro
│       ├── contact.astro
│       ├── index.astro
│       └── projects.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ultimatequestioncoding/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## 📜 Available Scripts

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎯 Features

- **Responsive Design** - Optimized for all device sizes with mobile-first approach
- **Modern UI** - Clean, professional design with Tailwind CSS
- **Server-Side Rendering** - Fast initial page loads with Astro SSR on Vercel
- **Animated Mobile Menu** - Smooth navigation experience on mobile devices
- **Contact Form** - Server-side email handling via Resend API
- **About Page** - Team information and company background
- **Project Showcase** - Highlighting our diverse portfolio including:
  - TezLab iOS & Android app
  - TezLab website
  - WatchMyRiv website
  - Perplexity Smart TV app
  - TezLabAI webapp

## 🚀 Deployment

This project deploys automatically to Vercel via GitHub Actions.

### How It Works

1. **Trigger**: Deployments are triggered on every push to the `main` branch, or manually via the GitHub Actions "workflow_dispatch" option
2. **Build**: The GitHub Action installs dependencies, pulls Vercel environment info, and builds the project using the Vercel CLI
3. **Deploy**: The pre-built artifacts are deployed to Vercel's production environment

### Required Secrets

The following secrets must be configured in your GitHub repository settings:

| Secret | Description |
| :----- | :---------- |
| `VERCEL_TOKEN` | Vercel API token for authentication |
| `ORG_ID` | Vercel organization ID |
| `PROJECT_ID` | Vercel project ID |
| `VERCEL_RESEND_KEY` | Resend API key for contact form emails |

### Manual Deployment

You can also deploy manually using the Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## 🛠️ Services

- **Front-end Development** - React, Svelte, Astro, and more
- **Back-end Development** - Ruby on Rails, Node.js, Python
- **Deployment** - Kubernetes, GCP, Fly.io, and other cloud platforms
- **Cross-platform Apps** - iOS, Android, and Smart TV applications

## 📞 Contact

Visit our [contact page](https://ultimatequestioncoding.com/contact) to get in touch about your next project.

## 📄 License

This project is proprietary to Ultimate Question Coding LLC.
