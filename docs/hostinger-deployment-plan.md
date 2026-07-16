# Hostinger Deployment Preparation Plan - MB Stounas

Goal: Prepare the site for upload to Hostinger shared hosting. Fix paths, add contact form backend, security headers, SEO basics, and architecture tweaks. No redesign.

Architecture: React 19 SPA built with Vite 6, hosted as static files on Apache/LiteSpeed. Contact form uses a small PHP mailer endpoint. HashRouter stays (works everywhere, no .htaccess edge cases).

---

## PHASE 1: Fix Vite Build for Root Domain

### Task 1.1: Make base path configurable
Files: vite.config.ts, .env.example

Change `base: '/stounas/'` to read from env variable, defaulting to `/`:

```
base: process.env.VITE_BASE_PATH || '/',
```

Add `VITE_BASE_PATH=/stounas/` to .env.example for GitHub Pages devs.

### Task 1.2: Rebuild and verify
Run `npm run build`, verify dist/index.html loads assets from `/assets/...` (not `/stounas/assets/...`).

---

## PHASE 2: Real Contact Form Backend

### Task 2.1: Create PHP mailer endpoint
Create: `api/contact.php`

Simple PHP script that:
- Accepts POST JSON: { name, phone, email, notes }
- Validates: name and phone required, phone format check
- Sends email to info@mbstounas.lt
- Returns JSON success/error
- Rate limits by IP (simple file-based, 3 per hour)
- CORS header for same-origin only

### Task 2.2: Update Contact.tsx to post to real endpoint
File: src/components/Contact.tsx

Replace the `setTimeout` simulation with actual `fetch()` to `/api/contact.php`. Add proper error handling for network failures. Show real error messages.

### Task 2.3: Add CSRF token (optional but nice)
Generate a simple token on page load, validate in PHP.

---

## PHASE 3: .htaccess Setup

### Task 3.1: Create .htaccess
Create: `public/.htaccess` (copied to dist/ during build)

Contents to handle:
- SPA fallback: all non-file requests go to index.html
- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, basic CSP
- Cache control: long cache for hashed assets, no-cache for index.html
- Enable Gzip compression
- HTTPS redirect (Hostinger usually handles this, but belt-and-suspenders)
- Block access to hidden files (.env, .git, etc.)

### Task 3.2: Copy .htaccess in build
File: vite.config.ts

Add a `vite-plugin-static-copy` or simple build script to ensure the .htaccess ends up in dist/.

---

## PHASE 4: Security Cleanup

### Task 4.1: Verify .env is not in git
Check `git ls-files` -- the .gitignore has `.env*` which would exclude .env but verify it's never been committed. If it has, rotate the key.

### Task 4.2: Add robots.txt
Create: `public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://mbstounas.lt/sitemap.xml
```

### Task 4.3: Generate sitemap.xml
Create a static sitemap.xml in public/ with all page URLs (LT only, since that's primary). Can be enhanced later.

### Task 4.4: Add security headers in .htaccess
See Task 3.1.

---

## PHASE 5: SEO & Meta Improvements

### Task 5.1: Add meta tags to index.html
File: index.html (root, the Vite entry point)

Add: description, og:title, og:description, og:image, og:url, twitter:card, canonical link.

### Task 5.2: Add per-page title updates (optional polish)
File: Create a useDocumentTitle hook

Each page sets `document.title` via useEffect. Improves browser tab display and history.

---

## PHASE 6: Architecture Tweaks for Easy Editing

### Task 6.1: Extract site config to single file
Create: `src/data/siteConfig.ts`

Move business details out of translations:
```
export const siteConfig = {
  phone: '+370 646 03391',
  email: 'info@mbstounas.lt',
  address: 'Pramonės g. 14, LT-11111 Vilnius, Lietuva',
  workingHours: { monFri: 'I - V: 08:00 - 18:00', sat: 'VI: 09:00 - 15:00' },
  companyName: 'MB Stounas',
  tagline: 'Granitas ir Paslaugos',
  licenseNumber: 'MB-843219',
  currentYear: 2026,
};
```

### Task 6.2: Update components to use siteConfig
Files: Header.tsx, Footer.tsx, Contact.tsx, translations.ts (remove hardcoded values)

Replace all hardcoded phone/email/address with imports from siteConfig. This means one file to change when business info updates.

### Task 6.3: Update Footer.tsx year
File: Footer.tsx

Replace `const currentYear = 2026` with `new Date().getFullYear()`.

---

## PHASE 7: Final Cleanup & Verify

### Task 7.1: Update .gitignore
Add: `dist/` (stop committing build artifacts)

### Task 7.2: Update README
Update deployment section to include Hostinger instructions.

### Task 7.3: Create deployment script
Add to package.json: `"deploy": "npm run build && echo 'Upload dist/* to public_html/ on Hostinger'"`

### Task 7.4: Full build & test
Run build, verify all paths, test contact form, check .htaccess syntax.

---

## Execution Order

Phase 1 (build fix) and Phase 2 (contact form) must come first -- the site is non-functional for business without these. Then Phase 3 (security/htaccess). Phases 4-6 can happen in parallel. Phase 7 is final cleanup.

Estimated total: 1-2 hours of work across ~20 small tasks.
