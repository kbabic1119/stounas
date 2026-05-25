# MB Stounas — Premium Granite & Cemetery Installations

An elegant, high-performance landing page for **MB Stounas**, a wholesale granite supply and cemetery installation business operating throughout Lithuania.

## 🌟 Key Features

- **Premium Modern Design:** A high-end dark theme incorporating custom 3D isometric elements, realistic shadows, and smooth micro-animations.
- **Custom 3D Geometric Logo:** Hand-coded responsive SVG emblem representing polished granite slabs.
- **Multilingual Support (LT/EN/RU):** Fully integrated translations for Lithuanian, English, and Russian with a responsive header switcher.
- **Interactive Granite Showcase:** Hover-responsive cards showcasing material specimens (Polished Black, Speckled Gray, Aurora Red) with popup modals displaying technical specifications (density, origin, and frost resistance ratings).
- **Integrated CTA Workflow:** Clicking "Inquire" on a granite specimen modal smooth-scrolls the user to the contact form and automatically pre-fills the message box with the selected stone type.

---

## 🛠 Tech Stack

- **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Running Locally

Follow these steps to run the development server on your machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation & Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kbabic1119/stounas.git
   cd stounas
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Go to [http://localhost:3000/](http://localhost:3000/)

---

## 📦 Production Build

To build the static application assets for deployment:

```bash
npm run build
```

This compiles your TypeScript, bundles code and assets, and places the production-ready files inside the `dist/` directory, which can be hosted directly on platforms like **Vercel**, **Netlify**, or **GitHub Pages**.