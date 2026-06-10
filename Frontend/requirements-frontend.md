# HazarEye Frontend - Dependency Requirements

## 📋 Complete Package List

### Core Dependencies

| Package Name         | Version | Purpose                                | Where Used                     |
| -------------------- | ------- | -------------------------------------- | ------------------------------ |
| **react**            | ^19.2.6 | UI library - React ka core             | Entire app                     |
| **react-dom**        | ^19.2.6 | React ko browser mein render karta hai | main.jsx                       |
| **react-router-dom** | ^7.17.0 | Page ke beech navigate karta hai       | AppRoutes.jsx, Navbar, Sidebar |

### Navigation & Animation

| Package Name      | Version  | Purpose                           | Where Used                  |
| ----------------- | -------- | --------------------------------- | --------------------------- |
| **framer-motion** | ^12.40.0 | Smooth animations aur transitions | Sab components mein         |
| **react-icons**   | ^5.6.0   | Beautiful icons library           | Navbar, Sidebar, Components |

### Data Visualization

| Package Name      | Version | Purpose                                 | Where Used                                 |
| ----------------- | ------- | --------------------------------------- | ------------------------------------------ |
| **recharts**      | ^3.8.1  | Charts - Line, Bar, Pie graphs          | AnalyticsChart, Dashboard, Analytics pages |
| **leaflet**       | ^1.9.4  | Interactive maps library                | HazardMap component                        |
| **react-leaflet** | ^5.0.0  | Leaflet ko React ke saath use karta hai | HazardMap component                        |

### Backend Communication

| Package Name         | Version | Purpose                             | Where Used                     |
| -------------------- | ------- | ----------------------------------- | ------------------------------ |
| **axios**            | ^1.17.0 | HTTP requests - API calls karta hai | Future: API integration        |
| **socket.io-client** | ^4.8.3  | Real-time communication             | Future: Live detection updates |

### Notifications & Alerts

| Package Name          | Version | Purpose                         | Where Used               |
| --------------------- | ------- | ------------------------------- | ------------------------ |
| **react-hot-toast**   | ^2.6.0  | Toast notifications dikhata hai | Future: Alert messages   |
| **react-tsparticles** | ^2.12.2 | Particle animations             | Landing page backgrounds |

### Build & Development Tools

| Package Name             | Version  | Purpose                                    | Where Used                 |
| ------------------------ | -------- | ------------------------------------------ | -------------------------- |
| **vite**                 | ^8.0.12  | Fast build tool - app ko compile karta hai | npm run dev, npm run build |
| **@vitejs/plugin-react** | ^6.0.1   | React support in Vite                      | vite.config.js             |
| **eslint**               | ^10.3.0  | Code quality checker                       | Code linting               |
| **@types/react**         | ^19.2.14 | React TypeScript types                     | Development                |
| **@types/react-dom**     | ^19.2.3  | React-DOM TypeScript types                 | Development                |

---

## 🎯 Installation & Setup

```bash
# Dependencies install karo
npm install

# Development server start karo
npm run dev

# Production ke liye build karo
npm run build

# Code quality check karo
npm run lint
```

---

## 📦 Key Package Categories

### 1. **UI Framework** (React)

- React app banane ke liye
- Components reuse karne ke liye

### 2. **Routing** (React Router)

- Pages ke beech navigate karta hai
- URL change hota hai page change hone par

### 3. **Animations** (Framer Motion)

- Smooth animations dikhata hai
- User experience better karta hai

### 4. **Data Visualization** (Recharts + Leaflet)

- Charts dikhata hai (graphs, pie charts)
- Maps par hazards dikhata hai

### 5. **Icons** (React Icons)

- Beautiful icons use karta hai
- Design ko professional banata hai

### 6. **API Communication** (Axios + Socket.io)

- Backend se data fetch karta hai
- Real-time updates receive karta hai

---

## 🔮 Future Backend Integration Packages

Ye packages backend se connect karne ke liye zaroori honge:

```bash
# Flask/FastAPI communication
pip install fastapi
pip install uvicorn

# Database
pip install pymongo
pip install redis

# AI/ML
pip install torch
pip install ultralytics  # YOLOv8
pip install opencv-python

# GPS & Mapping
pip install geopy
pip install folium
```

---

## 📊 Dependency Tree Summary

```
HazarEye Frontend
│
├── React Ecosystem
│   ├── react
│   ├── react-dom
│   └── react-router-dom
│
├── Styling & Animation
│   ├── framer-motion
│   └── react-icons
│
├── Data Visualization
│   ├── recharts
│   ├── leaflet
│   └── react-leaflet
│
├── Communication
│   ├── axios
│   └── socket.io-client
│
├── Notifications
│   ├── react-hot-toast
│   └── react-tsparticles
│
└── Build Tools
    ├── vite
    └── eslint
```

---

## ✅ Verification Commands

```bash
# Check installed versions
npm list

# Check for security vulnerabilities
npm audit

# Update packages safely
npm update

# Clean install
npm ci
```

---

## 📝 Notes

- Sab packages **latest stable versions** par hain
- Regular updates ke liye check karte raho
- Security vulnerabilities ke liye `npm audit` chalao
- Production ke liye `npm run build` se optimized code banata hai
