# 🚀 Mohith's Personal Portfolio Website

A pixel-faithful, modern, responsive, single-page portfolio website designed and built specifically for **Mohith**, a first-year B.Tech Computer Science & Engineering (AI) student at Thejus Engineering College.

---

## 🎨 Design & Features

- **Pixel-Faithful Reference Match**: Deep navy gradient (`#050B2E` to `#0A1F6B`), electric & royal blue accents (`#2563EB`), crisp white and soft light-blue cards (`#EEF4FF`).
- **Hero Section**:
  - Glowing circular neon arc & circuit trace accents
  - Dynamic typewriter effect for subtitle ("Engineering Student", "AI & CSE Enthusiast", etc.)
  - Calligraphic handwritten text: *"Dream / Code / Achieve"* with custom blue swoop underline
  - Portrait frame with campus building backdrop
  - Animated bouncing scroll-down indicator
  - Angular diagonal cut separator
- **About Me**:
  - Coding workspace photo with layered drop shadow
  - Bio with 3 highlight pill tags (🎓 B.Tech, 📍 India, 💙 Tech Enthusiast)
  - Handwritten quote with blue swoosh: *“Always curious, always learning, always growing.”*
- **My Skills**:
  - 7 custom vector SVG skill cards: Python, C++, Java, Web Dev, SQL, Communication, Problem Solving
  - Hover elevation with soft blue glow
  - Interactive **"View All Skills"** modal with progress bars & categorical tech breakdown
- **Education Timeline**:
  - Graduation cap illustration resting on books with radiant aura
  - Horizontal timeline with glowing blue node dots (Class 10 - 97%, Class 12 - 85%, B.Tech in CSE AI)
  - Automatically converts to a sleek vertical timeline on mobile devices
- **Projects Showcase**:
  - 3 featured project cards: *AI Waste Scanner*, *Smart Parking System*, *Portfolio Website*
  - Interactive **"View All Projects"** modal with GitHub repository links
- **Achievements & Contact**:
  - Trophy card with verified achievements checklist
  - Contact card with direct email, social links (LinkedIn, GitHub, YouTube, Instagram)
  - Interactive contact form with auto-generated pre-filled `mailto:` trigger
- **Footer**:
  - Signature dark navy diagonal polygon
  - Handwritten *"Thank You! for visiting my portfolio"*
  - Glowing blue tech PCB / circuit line traces
  - Quick links & smooth back-to-top button
- **UX Polish**:
  - Sticky glassmorphism navbar with blur
  - Active navigation indicator highlighting current section on scroll
  - Dark Mode / Light Mode toggle with persistent `localStorage` memory
  - Mobile hamburger menu with slide-down glass drawer

---

## 📁 Project Structure

```text
mohith cs/
├── index.html              # Main HTML markup (semantic & accessible)
├── style.css               # Complete stylesheet with variables & responsive media queries
├── script.js               # Interactive scripts (typewriter, modals, theme toggle, nav scroll)
├── README.md               # Quick customization & deployment guide
└── assets/                 # High-resolution graphics, SVGs, and photos
    ├── logo.svg            # Stylized M ribbon logo
    ├── swoosh.svg          # Calligraphic blue underline swoosh
    ├── circuit.svg         # Glowing PCB / circuit traces
    ├── hero-portrait-hd.png# Student portrait with campus backdrop
    ├── about-laptop-full.png# Coding workspace desk photo
    ├── education-cap.svg   # 3D Graduation cap illustration on books
    ├── Mohith_Resume.pdf   # Sample resume download placeholder
    ├── project-ai-waste.svg
    ├── project-smart-parking.svg
    ├── project-portfolio.svg
    └── skills/             # High-res official SVGs
        ├── python.svg
        ├── cpp.svg
        ├── java.svg
        ├── web.svg
        ├── sql.svg
        ├── communication.svg
        └── problem-solving.svg
```

---

## ✏️ How to Customize Your Details

Every file has clear `<!-- EDIT HERE: ... -->` comments so you can easily customize anything.

### 1. Replace Your Photos
- **Hero Photo**: Place your portrait photo in `assets/` named `hero-portrait-hd.png` (or change the `src` attribute in `index.html` line 160).
- **About Workspace Photo**: Replace `assets/about-laptop-full.png` with any photo of your desk or coding setup.

### 2. Update Your Resume / CV
- Save your updated resume PDF in the `assets/` folder as `Mohith_Resume.pdf`.
- When visitors click **"Download CV"**, your resume will download automatically.

### 3. Update Your Projects & Links
- Open `index.html` and search for `<!-- EDIT HERE: PROJECT`.
- Replace the project title, description, and update the GitHub links (`href="https://github.com/your-username/project-repo"`).

### 4. Update Your Social Profiles & Email
- In `index.html` under `#contact`, update your:
  - Email: `mailto:mohithcs030@gmail.com`
  - LinkedIn: `https://linkedin.com/in/your-profile`
  - GitHub: `https://github.com/your-username`
  - YouTube & Instagram URLs

---

## 🌐 Free 1-Click Deployment

### Option A: Deploy with GitHub Pages (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Mohith portfolio"
   ```
2. Create a new public repository on [GitHub](https://github.com) named `portfolio` (or `<your-username>.github.io`).
3. Link and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Go to **Settings** > **Pages** in your GitHub repository.
5. Under **Branch**, select `main` and root `/`, then click **Save**.
6. Your portfolio will be live in ~1 minute at `https://<your-username>.github.io/portfolio`!

### Option B: Deploy with Netlify (Drag & Drop)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Simply drag and drop your `mohith cs` folder into the upload box.
3. Your site is live instantly with free SSL! You can customize your subdomain (e.g. `mohith-portfolio.netlify.app`).

### Option C: Deploy with Firebase Hosting (Google Cloud)
1. Create a free project at [Firebase Console](https://console.firebase.google.com).
2. Double-click `deploy-firebase.bat` in your folder (or run `firebase deploy --only hosting` in terminal).
3. Sign in with your Google account when prompted.
4. Your site will be live instantly with global CDN & free SSL at `https://<your-project-id>.web.app`!

---

## 🛠️ Local Preview Options

You have 3 easy ways to view your portfolio:

1. **Option 1 (Node.js & npm)**:
   ```bash
   npm start
   ```
   Starts a local server and automatically launches `http://localhost:3000` in your default browser.
2. **Option 2 (1-Click Batch Launcher)**:
   Double-click `open-portfolio.bat` in File Explorer.
3. **Option 3 (Direct File)**:
   Simply double-click `index.html` to open it in Chrome, Edge, Firefox, or Safari!

