# Portfolio

A personal portfolio site built with **Vite**, **React**, and **JavaScript**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customize your content

Edit `src/data/portfolio.js` to update your name, bio, projects, skills, email, and social links.

## Formulario de contacto (correos reales)

El formulario usa [Web3Forms](https://web3forms.com) — gratis y sin backend propio.

1. Entra a [web3forms.com](https://web3forms.com) y crea una cuenta con **tu correo** (`portfolio.email`).
2. Copia tu **Access Key**.
3. En la raíz del proyecto, crea un archivo `.env`:

```bash
cp .env.example .env
```

4. Pega la clave:

```
VITE_WEB3FORMS_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

5. Reinicia el servidor de desarrollo (`npm run dev`).

Los mensajes llegarán a tu bandeja de entrada. Si despliegas en Vercel/Netlify, añade la misma variable de entorno en el panel del hosting (`VITE_WEB3FORMS_ACCESS_KEY`).

## Estilos con Tailwind CSS

Este proyecto usa **Tailwind CSS v4**. Los colores globales están en `src/index.css` dentro de `@theme` — cámbialos ahí y se actualiza todo el sitio:

- `--color-accent` — color principal
- `--color-page` — fondo
- `--color-heading` — títulos
- `--color-line` — bordes

Cada componente usa clases de Tailwind directamente en el JSX (por ejemplo `Hero.jsx`, `Header.jsx`). Para cambiar espaciado, tamaños o layout de una sección, edita las clases `className` de ese componente.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
