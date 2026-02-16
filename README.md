# 🚀 Chandra's Portfolio - Terminal Theme

A terminal/hacker-themed portfolio website for DevOps Engineers.

## ✨ Features

- Terminal aesthetic with Matrix-style green theme
- Live system status bar with real-time clock
- Animated CPU load meter
- Window-style containers (Mac terminal look)
- Smooth animations with Framer Motion
- Fully responsive design

## 📋 Prerequisites

Before you begin, make sure you have:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git Bash** or any terminal

Check if Node.js is installed:
```bash
node --version
npm --version
```

## 🛠️ Installation Steps

### 1. Extract the Project

Extract the `portfolio-complete.zip` file to your desired location.

### 2. Open Terminal

**For Git Bash:**
```bash
# Navigate to the extracted folder
cd /c/Users/YourName/Downloads/portfolio-complete
```

**For Windows PowerShell/CMD:**
```bash
cd C:\Users\YourName\Downloads\portfolio-complete
```

### 3. Install Dependencies

```bash
npm install
```

This will take 2-3 minutes. Wait for it to complete.

### 4. Start Development Server

```bash
npm run dev
```

You should see:
```
> chandra-portfolio@1.0.0 dev
> next dev

  ▲ Next.js 15.1.6
  - Local:        http://localhost:3000

 ✓ Ready in 2.1s
```

### 5. Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

## 🎨 Customization

### Update Personal Information

Open `app/page.tsx` and modify:

1. **Hero Section** (Line ~118):
   - Change your name and title
   
2. **System Resources** (Line ~170):
   - Update NAME, ROLE, ZONE

3. **Skills** (Line ~217):
   - Add/remove skills in each category

4. **Experience** (Line ~317):
   - Update companies, roles, dates, achievements

5. **Projects** (Line ~391):
   - Update project names and descriptions

6. **Contact** (Line ~480):
   - Update email, LinkedIn, location

### Add Your Resume

Place your resume PDF in the `public` folder:
```
portfolio-complete/
└── public/
    └── resume.pdf  ← Add your resume here
```

## 🏗️ Build for Production

When ready to deploy:

```bash
# Build the project
npm run build

# Test production build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Easiest)

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build: `npm run build`
2. Upload `.next` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## 📁 Project Structure

```
portfolio-complete/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static files (add resume here)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── next.config.ts
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
npm run build
```

## 📞 Contact

- **Email**: Chandrareddypapasani@gmail.com
- **LinkedIn**: [chandu-reddy-772151190](https://linkedin.com/in/chandu-reddy-772151190)

## 📜 License

© 2025 Chandra Sekhar Reddy. All rights reserved.
