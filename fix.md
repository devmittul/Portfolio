# Portfolio Website – Pre-Production Fix Instructions
**Project:** `myintro` – Mittul Dall's portfolio  
**Repo:** https://github.com/devmittul/myintro.git  
**Files to edit:** `index.html`, `script.js`, `styles.css`  
**New files to create:** `thankyou.html`, `404.html`, `sitemap.xml`, `robots.txt`, `.gitignore`, `README.md`

---

## PART 1 — `index.html` fixes

### Fix 1 — Update `<title>` tag
**Find:**
```html
<title>My Portfolio | Creative Developer</title>
```
**Replace with:**
```html
<title>Mittul Dall | ML & Dev Portfolio – Jaipur</title>
```

---

### Fix 2 — Update meta description
**Find:**
```html
<meta name="description"
    content="Mittul Dall - Creative Developer Portfolio showcasing web and app development projects">
```
**Replace with:**
```html
<meta name="description"
    content="Mittul Dall – Machine Learning & Data Science student at IIT Madras, based in Jaipur. Building smart websites, AI automations, and scalable apps.">
```

---

### Fix 3 — Add Open Graph, Twitter Card, canonical, favicon, and structured data
**Find:**
```html
    <!-- Preload critical assets -->
```
**Insert BEFORE that line:**
```html
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="apple-touch-icon" href="favicon.png">

    <!-- Canonical -->
    <link rel="canonical" href="https://devmittul.github.io/myintro/">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://devmittul.github.io/myintro/">
    <meta property="og:title" content="Mittul Dall | ML & Dev Portfolio">
    <meta property="og:description" content="Machine Learning & Data Science student at IIT Madras. Building smart websites, AI automations, and scalable apps.">
    <meta property="og:image" content="https://devmittul.github.io/myintro/web3.jpg">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@immittul">
    <meta name="twitter:title" content="Mittul Dall | ML & Dev Portfolio">
    <meta name="twitter:description" content="Machine Learning & Data Science student at IIT Madras. Building smart websites, AI automations, and scalable apps.">
    <meta name="twitter:image" content="https://devmittul.github.io/myintro/web3.jpg">

    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mittul Dall",
      "url": "https://devmittul.github.io/myintro/",
      "image": "https://devmittul.github.io/myintro/web3.jpg",
      "sameAs": [
        "https://github.com/devmittul",
        "https://www.linkedin.com/in/immittul",
        "https://x.com/immittul",
        "https://www.instagram.com/immittul/"
      ],
      "jobTitle": "Machine Learning & Data Science Student",
      "worksFor": {
        "@type": "Organization",
        "name": "IIT Madras"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressCountry": "IN"
      },
      "email": "devmittul@gmail.com"
    }
    </script>

```

---

### Fix 4 — Fix hero profile image (add missing attributes)
**Find:**
```html
<img src="web3.jpg" alt="Mittul Dall"
                                style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
```
**Replace with:**
```html
<img src="web3.jpg" alt="Mittul Dall – ML developer and student, profile photo"
                                style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;"
                                width="300" height="300"
                                loading="eager" fetchpriority="high">
```

---

### Fix 5 — Fix GitHub nav link (wrong URL)
**Find:**
```html
<a href="https://github.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
```
**Replace with:**
```html
<a href="https://github.com/devmittul" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><i class="fab fa-github"></i></a>
```

---

### Fix 6 — Add aria-labels to all social icon links in nav
**Find:**
```html
<a href="https://www.linkedin.com/in/immittul" target="_blank" rel="noopener noreferrer"><i
                        class="fab fa-linkedin"></i></a>
                <a href="https://x.com/immittul?t=PJbpidlW1fuesGk-Flp80w&s=35" target="_blank"
                    rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/immittul/?igsh=eGRlY3hwYmtneWR5#" target="_blank"
                    rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
```
**Replace with:**
```html
<a href="https://www.linkedin.com/in/immittul" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><i class="fab fa-linkedin"></i></a>
                <a href="https://x.com/immittul" target="_blank"
                    rel="noopener noreferrer" aria-label="Twitter / X profile"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/immittul/" target="_blank"
                    rel="noopener noreferrer" aria-label="Instagram profile"><i class="fab fa-instagram"></i></a>
```

---

### Fix 7 — Add hamburger button to nav (mobile menu is in JS but missing HTML)
**Find:**
```html
    </nav>
```
**Replace with:**
```html
        <button class="hamburger" aria-label="Open navigation menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
```

---

### Fix 8 — Add skip-to-content link (accessibility)
**Find:**
```html
<body>
    <div class="noise-overlay"></div>
```
**Replace with:**
```html
<body>
    <a href="#home" class="skip-link">Skip to main content</a>
    <div class="noise-overlay"></div>
```

---

### Fix 9 — Add `<main>` wrapper around sections (semantic HTML)
**Find:**
```html
    <!-- Hero Section -->
    <section id="home" class="hero">
```
**Replace with:**
```html
    <main id="main-content">
    <!-- Hero Section -->
    <section id="home" class="hero">
```

**Find:**
```html
    <!-- Footer -->
    <footer>
```
**Replace with:**
```html
    </main>

    <!-- Footer -->
    <footer>
```

---

### Fix 10 — Fix project image alt text
**Find:**
```html
<img src="p1.png" alt="American Affairs Website"
                        style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px 10px 0 0;">
```
**Replace with:**
```html
<img src="p1.png" alt="Screenshot of American Affairs website – news and politics platform"
                        style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px 10px 0 0;"
                        width="400" height="250" loading="lazy">
```

**Find:**
```html
<img src="Author Logo Pen Writing.png" alt="Blog Website"
                        style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px 10px 0 0;">
```
**Replace with:**
```html
<img src="Author Logo Pen Writing.png" alt="Logo for personal blog website project"
                        style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px 10px 0 0;"
                        width="400" height="250" loading="lazy">
```

---

### Fix 11 — Fix contact form (remove disabled captcha, fix honeypot)
**Find:**
```html
                        <!-- FormSubmit configuration -->
                        <input type="hidden" name="_subject" value="New message from your portfolio website!">
                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_next" value="thankyou.html">
                        <input type="hidden" name="_honey" style="display:none">
```
**Replace with:**
```html
                        <!-- FormSubmit configuration -->
                        <input type="hidden" name="_subject" value="New message from your portfolio website!">
                        <input type="hidden" name="_next" value="https://devmittul.github.io/myintro/thankyou.html">
                        <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">
```
> ⚠️ Note: `_captcha: false` has been removed – this re-enables bot protection. The honeypot field now has `tabindex="-1"` and `autocomplete="off"` for reliability.

---

### Fix 12 — Remove phone number from public HTML
**Find:**
```html
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h3>Phone</h3>
                            <p>+91 9468735471</p>
                        </div>
                    </div>
                    <div class="contact-divider"></div>
                    <div class="contact-item">
```
**Replace with:**
```html
                    <div class="contact-item">
```
> ⚠️ The phone number block and its divider have been removed to protect your privacy.

---

### Fix 13 — Fix footer GitHub link and update copyright year
**Find:**
```html
<a href="https://github.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
```
*(in the footer)*  
**Replace with:**
```html
<a href="https://github.com/devmittul" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
```

**Find:**
```html
<p>&copy; 2025 Mittul Dall. All Rights Reserved.</p>
```
**Replace with:**
```html
<p>&copy; <span id="copy-year"></span> Mittul Dall. All Rights Reserved.</p>
```

---

### Fix 14 — Add preload for web3.jpg correctly
**Find:**
```html
    <link rel="preload" href="web3.jpg" as="image">
```
**Replace with:**
```html
    <link rel="preload" href="web3.jpg" as="image" fetchpriority="high">
```

---

## PART 2 — `script.js` fixes

### Fix 15 — Dynamic copyright year + hamburger aria toggle
**Find:**
```javascript
document.addEventListener('DOMContentLoaded', function () {
  // Make sure the page is visible regardless of animations
  document.body.style.visibility = 'visible';
  document.body.style.opacity = '1';

  // Basic functionality
  console.log('DOM fully loaded');

  // Enhanced card animations
  initCardAnimations();

  // Initialize active menu link on scroll
  initActiveMenuOnScroll();
});
```
**Replace with:**
```javascript
document.addEventListener('DOMContentLoaded', function () {
  document.body.style.visibility = 'visible';
  document.body.style.opacity = '1';

  // Dynamic copyright year
  const yearEl = document.getElementById('copy-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Enhanced card animations
  initCardAnimations();

  // Initialize active menu link on scroll
  initActiveMenuOnScroll();
});
```

---

### Fix 16 — Fix hamburger aria-expanded toggle
**Find:**
```javascript
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }
```
**Replace with:**
```javascript
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
        hamburger.setAttribute('aria-expanded', 'false');
      } else {
        openMobileMenu();
        hamburger.setAttribute('aria-expanded', 'true');
      }
    });
  }
```

---

## PART 3 — `styles.css` additions

### Fix 17 — Add skip-link, hamburger, and focus-visible styles
**Find:**
```css
a {
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
```
**Insert BEFORE that line:**
```css
/* Skip to content link (accessibility) */
.skip-link {
  position: absolute;
  top: -100px;
  left: 1rem;
  background: var(--crayon-teal);
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 0 0 8px 8px;
  font-weight: 600;
  z-index: 9999;
  transition: top 0.2s;
}
.skip-link:focus {
  top: 0;
}

/* Global focus-visible ring */
:focus-visible {
  outline: 2px solid var(--crayon-teal);
  outline-offset: 3px;
  border-radius: 4px;
}

/* Hamburger button */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1000;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
}

```

---

## PART 4 — New files to create

### Create `thankyou.html`
Create this file in the project root:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Sent – Mittul Dall</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" type="image/png" href="favicon.png">
  <style>
    .thankyou-wrap {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
      gap: 1.5rem;
    }
    .thankyou-wrap h1 { font-size: 2.5rem; color: #0cffe1; }
    .thankyou-wrap p { font-size: 1.1rem; color: rgba(255,255,255,0.7); max-width: 460px; }
    .back-btn {
      display: inline-block;
      margin-top: 1rem;
      padding: 0.75rem 2rem;
      border: 1.5px solid #0cffe1;
      color: #0cffe1;
      border-radius: 50px;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .back-btn:hover { background: #0cffe1; color: #000; }
  </style>
</head>
<body>
  <div class="thankyou-wrap">
    <h1>Message received!</h1>
    <p>Thanks for reaching out. I'll get back to you at <strong>devmittul@gmail.com</strong> as soon as possible.</p>
    <a href="index.html" class="back-btn">← Back to portfolio</a>
  </div>
</body>
</html>
```

---

### Create `404.html`
Create this file in the project root:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 – Page Not Found | Mittul Dall</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" type="image/png" href="favicon.png">
  <style>
    .notfound-wrap {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
      gap: 1rem;
    }
    .notfound-wrap .code { font-size: 6rem; font-weight: 700; color: #ff61d8; line-height: 1; }
    .notfound-wrap h1 { font-size: 1.5rem; color: rgba(255,255,255,0.9); }
    .notfound-wrap p { color: rgba(255,255,255,0.5); }
    .back-btn {
      display: inline-block;
      margin-top: 1rem;
      padding: 0.75rem 2rem;
      border: 1.5px solid #ff61d8;
      color: #ff61d8;
      border-radius: 50px;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .back-btn:hover { background: #ff61d8; color: #000; }
  </style>
</head>
<body>
  <div class="notfound-wrap">
    <div class="code">404</div>
    <h1>Page not found</h1>
    <p>The page you're looking for doesn't exist or was moved.</p>
    <a href="index.html" class="back-btn">← Back to portfolio</a>
  </div>
</body>
</html>
```

---

### Create `robots.txt`
Create this file in the project root:

```
User-agent: *
Allow: /

Sitemap: https://devmittul.github.io/myintro/sitemap.xml
```

---

### Create `sitemap.xml`
Create this file in the project root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://devmittul.github.io/myintro/</loc>
    <lastmod>2026-05-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://devmittul.github.io/myintro/thankyou.html</loc>
    <lastmod>2026-05-12</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.2</priority>
  </url>
</urlset>
```

---

### Create `.gitignore`
Create this file in the project root:

```
# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo

# Environment / secrets
.env
.env.local
.env.production

# Dependencies
node_modules/

# Build output
dist/
build/

# Logs
*.log
npm-debug.log*
```

---

### Create `README.md`
Create this file in the project root:

```markdown
# Mittul Dall – Portfolio Website

Personal introduction and portfolio site for Mittul Dall, ML & Data Science student at IIT Madras.

**Live site:** https://devmittul.github.io/myintro/

## Tech stack
- Vanilla HTML, CSS, JavaScript
- GSAP for scroll animations
- Font Awesome icons
- Google Fonts (Poppins)
- FormSubmit for contact form

## Sections
- **Hero** – Introduction and CTA
- **About** – Background, stats, service cards
- **Projects** – Featured work
- **Contact** – FormSubmit-powered form

## Local development
No build step required. Open `index.html` directly in a browser or use a local server:

```bash
npx serve .
```

## Deploy
Hosted on GitHub Pages from the `master` branch.

## Contact
devmittul@gmail.com
```
---

## PART 5 — Git repo cleanup (run in terminal)

```bash
# 1. Decide to keep 'master' as your main branch (it has more commits)
#    Delete the 'main' branch
git checkout master
git branch -D main
git push origin --delete main

# 2. Add all new files
git add .gitignore README.md thankyou.html 404.html robots.txt sitemap.xml

# 3. Commit all changes
git add -A
git commit -m "fix: pre-production fixes – SEO, accessibility, mobile nav, form, git hygiene"

# 4. Tag this as v1.0.0
git tag v1.0.0
git push origin master --tags
```

---

## Summary of all changes

| # | File | Type | What |
|---|------|------|------|
| 1 | index.html | Fix | Title includes real name |
| 2 | index.html | Fix | Meta description with name & skills |
| 3 | index.html | Add | OG tags, Twitter card, canonical, favicon, JSON-LD |
| 4 | index.html | Fix | Hero image: alt text, width/height, fetchpriority |
| 5 | index.html | Fix | GitHub nav link (was github.com, no username) |
| 6 | index.html | Fix | aria-labels on all social icon links |
| 7 | index.html | Add | Hamburger button HTML for mobile nav |
| 8 | index.html | Add | Skip-to-content link (accessibility) |
| 9 | index.html | Add | `<main>` semantic wrapper |
| 10 | index.html | Fix | Project image alt text + lazy loading |
| 11 | index.html | Fix | Contact form: removed captcha=false, fixed honeypot |
| 12 | index.html | Fix | Removed public phone number |
| 13 | index.html | Fix | Footer GitHub link + dynamic copyright year |
| 14 | index.html | Fix | Preload fetchpriority on web3.jpg |
| 15 | script.js | Add | Dynamic year injection |
| 16 | script.js | Fix | Hamburger aria-expanded toggle |
| 17 | styles.css | Add | Skip-link, focus-visible, hamburger styles |
| 18 | thankyou.html | Create | Post-form-submission confirmation page |
| 19 | 404.html | Create | Custom 404 error page |
| 20 | robots.txt | Create | Allow all crawlers, reference sitemap |
| 21 | sitemap.xml | Create | XML sitemap for Google |
| 22 | .gitignore | Create | Ignore OS, editor, env, node_modules |
| 23 | README.md | Create | Project documentation |
| 24 | Git | Fix | Consolidate branches, tag v1.0.0 |