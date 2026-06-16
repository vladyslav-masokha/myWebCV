# Web CV

Responsive React CV built as a lightweight static site for Netlify deployment.

## About

This project turns a one-page CV into a clean web experience with structured React components, reusable data objects, and responsive CSS. The goal is to keep the content easy to update while preserving a polished layout for desktop, mobile, and print.

Contact: [vladyslavmasokha2006@gmail.com](mailto:vladyslavmasokha2006@gmail.com)

## Tech Stack

- React
- Vite
- CSS
- lucide-react
- Netlify

## Project Structure

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

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project includes `netlify.toml`.

Netlify settings:

- Build command: `npm run build`
- Publish directory: `dist`

## Updating CV Content

Most CV text and lists live in `src/data/cvData.js`. Update that file when changing profile text, skills, experience, education, languages, or contact links.
