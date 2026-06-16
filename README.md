# Web CV

Responsive React CV built as a lightweight static website.

## About

This project turns a one-page CV into a clean web experience with structured React components, reusable data objects, and responsive CSS. The page is designed like a modern digital resume: a strong sidebar for identity and quick facts, plus a readable main area for profile, experience, education, and summary blocks.

Contact: [vladyslavmasokha2006@gmail.com](mailto:vladyslavmasokha2006@gmail.com)

## Tech Stack

- React
- Vite
- CSS
- lucide-react

## Code Structure

```text
src/
  components/
    layout/       Page-level layout components
    sections/     CV content sections
    ui/           Small reusable UI components
  data/           CV content and lists
  App.jsx         Page composition
  main.jsx        React entry point
  styles.css      Global responsive styles
```

## How The Code Works

`App.jsx` is intentionally small. It only composes the two main page areas: `Sidebar` and `MainContent`. This keeps the entry component readable and makes it easy to understand the page at a glance.

The content itself lives in `src/data/cvData.js`. Instead of hardcoding every skill, language, job, and contact item inside JSX, the app maps over structured arrays. That makes the UI easier to extend and keeps visual components focused on rendering.

The `layout` components define the big page regions. `Sidebar.jsx` handles identity, contact links, skills, soft skills, and languages. `MainContent.jsx` arranges the main CV sections in the order a recruiter would naturally scan them.

The `sections` folder contains focused pieces of the resume: profile, experience, education, and summary. Each file has one clear responsibility, so future changes stay local instead of turning `App.jsx` into a long mixed file.

The `ui` folder contains reusable building blocks. `Section.jsx` gives every content block the same heading pattern with an icon, while `Period.jsx` keeps date labels consistent across experience and education.

## Interesting Details

- The same `Section` component is reused in both the sidebar and the main content, but CSS lets it adapt visually to each area.
- CV data is separated from markup, so the page behaves a little like a tiny content-driven app.
- The timeline in the experience section is built with CSS pseudo-elements instead of extra decorative markup.
- Contact links use real `tel:`, `mailto:`, and external URLs, so they work as actions rather than plain text.
- The layout is responsive without JavaScript: CSS grid handles the desktop split layout, then collapses into a single-column mobile resume.
- The print styles keep the page usable if someone wants to save or print the CV from the browser.

## Development

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```
