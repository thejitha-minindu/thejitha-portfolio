# THEJITHA // LAB

Personal engineering portfolio and project laboratory of **Thejitha Wijayanayake**, a third-year Information Technology undergraduate at the **University of Moratuwa** (Faculty of Information Technology, B.Sc. Hons in IT, **CGPA: 3.95 / 4.00**).

The website showcases real-world software engineering systems, hardware prototyping projects, and academic deep learning research with clean editorial design, deep case studies, interactive system architecture topologies, and verified technical records.

---

## 📌 About

I am an undergraduate student in Information Technology at the University of Moratuwa, with coursework and practical projects covering software development, full-stack architectures, hardware interfacing, and deep learning.

- **Academic Standing**: B.Sc. (Hons) in Information Technology, University of Moratuwa (2024 – Present) — **CGPA: 3.95 / 4.00**
- **Secondary Education**: St. Anne's College, Kurunegala — GCE Advanced Level (Physical Science: Physics A, Combined Mathematics B, Chemistry B | Z-score: 1.6692)
- **Seeking**: Software / IT Engineering Internships (2026) across Software Engineering, Full-Stack Development, Hardware & Systems, and AI / Machine Learning.

---

## 🚀 Featured Projects

### 01. TeaBlendAI — AI-Powered Tea Auction Platform
- **Type**: Industry Project (Inivois Global) · Team Project
- **Timeline**: December 2025 – June 2026
- **Stack**: Next.js, FastAPI, MSSQL
- **Role & Contribution**: Full-stack development of the **Seller Module**, including seller dashboard interfaces, live/scheduled auction workflows, backend REST API design, and database schema modelling.
- **Route**: [`/work/teablend-ai`](app/work/teablend-ai/page.tsx)

### 02. SandPlotter Smart Coffee Table
- **Type**: First Year Hardware Project · Individual & Team Prototyping
- **Timeline**: August 2024 – August 2025
- **Stack**: Arduino Uno, ESP32, GRBL Firmware, CoreXY Kinematics, TFT Touch Display, WebSockets, CNC Shield V3
- **Role & Contribution**: Designed and assembled the CoreXY motion mechanism using NEMA 17 stepper motors, GT2 timing belts, A4988 stepper drivers, and limit switches integrated with GRBL on Arduino Uno. Implemented ESP32 WebSocket bridge and TFT touch control to transmit G-code coordinate streams.
- **Route**: [`/work/sandplotter`](app/work/sandplotter/page.tsx)

### 03. ICITR 2026 Conference Website
- **Type**: Faculty of IT, University of Moratuwa · Team Project
- **Timeline**: June 2026 – Present (`STATUS: IN DEVELOPMENT`)
- **Stack**: Next.js, Tailwind CSS, GitHub
- **Role & Contribution**: Contributing to the design and implementation of a responsive platform for conference announcements, speaker directories, paper submission guidelines, and workshop timelines.
- **Route**: [`/work/icitr-2026`](app/work/icitr-2026/page.tsx)

### 04. IEEE WIE University of Moratuwa Website
- **Type**: IEEE Student Branch Affinity Group · Team Project
- **Timeline**: July 2025 – September 2025
- **Stack**: Next.js, Tailwind CSS, GitHub
- **Route**: [`/work/wie`](app/work/wie/page.tsx)

### 05. Farmify
- **Type**: Agricultural Expertise Platform · Team Project
- **Timeline**: June 2024 – August 2024
- **Stack**: React.js, Firebase
- **Route**: [`/work/farmify`](app/work/farmify/page.tsx)

---

## 🔬 Research

### Deep Learning the Cosmic Web: Reconstructing Invisible Dark Matter Structures via U-Net Architectures
- **Type**: Undergraduate Research Project (`STATUS: RESEARCH IN PROGRESS`)
- **Timeline**: 2026 – Present
- **Stack**: Python, PyTorch, 3D U-Net
- **Focus**: Investigating the application of 3D U-Net convolutional architectures to reconstruct 3D continuous dark matter distributions from sparse, observable baryonic tracers across cosmological surveys.
- **Notebook & Methodology**: [`/research/cosmic-web`](app/research/cosmic-web/page.tsx)

---

## 🛠️ Technologies

- **Programming Languages**: C, Python, Java, JavaScript, TypeScript, PHP
- **Frontend Development**: Next.js (App Router), React.js, Tailwind CSS, HTML5, Vanilla CSS3
- **Backend & APIs**: FastAPI, Node.js, REST APIs, WebSockets
- **Databases**: MSSQL, MySQL, MongoDB, PostgreSQL
- **Tools & Hardware**: Git, GitHub, Linux, Arduino IDE, ESP32 / Arduino Uno, Flutter

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: v18.17+ or v20+ recommended
- **Package Manager**: npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/thejitha-minindu/thejitha-lab.git
   cd thejitha-lab
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
thejitha-lab/
├── app/
│   ├── api/
│   │   └── download-cv/       # Route handler serving CV PDF attachment
│   ├── cv/                    # Standalone digital & embedded PDF CV page
│   ├── work/
│   │   ├── teablend-ai/       # Case study: TeaBlendAI
│   │   ├── sandplotter/       # Case study: SandPlotter Smart Table
│   │   ├── icitr-2026/        # Case study: ICITR 2026 Conference
│   │   ├── wie/               # Case study: IEEE WIE Chapter
│   │   └── farmify/           # Case study: Farmify Marketplace
│   ├── research/
│   │   └── cosmic-web/        # Research notebook: Cosmic Web U-Net
│   ├── globals.css            # Editorial design system & typography tokens
│   ├── layout.tsx             # Root layout, metadata & OpenGraph config
│   ├── page.tsx               # Primary portfolio homepage
│   ├── robots.ts              # Search crawler rules
│   └── sitemap.ts             # Dynamic XML sitemap generator
├── components/
│   ├── CVViewerModal.tsx      # Dual-mode CV modal (Interactive + PDF iframe)
│   ├── CommandPalette.tsx     # ⌘K instant search & keyboard navigation
│   ├── Direction.tsx          # Editorial BUILD / EXPLORE / ENGINEER focus
│   ├── ProjectCard.tsx        # Project card with role & tech badges
│   ├── RecruiterBanner.tsx    # Recruiter summary mode bar
│   ├── TopBar.tsx             # Fixed navigation bar
│   └── ...                    # Interactive architecture visualizers
├── public/
│   ├── Thejitha-CV.pdf        # Verified curriculum vitae PDF
│   └── cv.pdf                 # Direct PDF asset alias
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Run Production Server

```bash
npm run start
```

### Vercel / Netlify Deployment
This project is built on Next.js App Router and can be deployed with zero additional configuration on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).

---

## 📬 Contact

- **Name**: Thejitha Wijayanayake
- **Location**: Kuliyapitiya, Sri Lanka
- **Email**: [thejithamininduw@gmail.com](mailto:thejithamininduw@gmail.com)
- **Phone**: [+94 71 475 6551](tel:+94714756551)
- **GitHub**: [github.com/thejitha-minindu](https://github.com/thejitha-minindu)
- **LinkedIn**: [linkedin.com/in/thejitha-wijayanayake](https://www.linkedin.com/in/thejitha-wijayanayake)

---

© 2026 Thejitha Wijayanayake · University of Moratuwa · THEJITHA // LAB
