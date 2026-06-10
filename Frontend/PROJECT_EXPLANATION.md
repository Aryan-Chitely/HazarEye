# 🚀 HazarEye Frontend - Complete Project Explanation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Folder Structure](#folder-structure)
4. [File-by-File Explanation](#file-by-file-explanation)
5. [Components](#components)
6. [Pages](#pages)
7. [Routing](#routing)
8. [UI/UX Design](#uiux-design)
9. [Backend Integration](#backend-integration)

---

## Project Overview

### HazarEye Kya Hai?

**Hinglish mein:** HazarEye ek AI-powered road safety application hai jo Indian roads par real-time hazards detect karta hai. Jaise tum driving kar rahe ho, app automatically pothole, cracks, waterlogging detect kar leta hai aur driver ko alert kar deta hai.

**Simple English:** HazarEye is a smart dashboard that shows road hazards in real-time using AI cameras. It helps drivers avoid accidents by showing them dangerous areas on the road.

### Main Purpose

```
🎯 Main Purpose:
└─ Real-time hazard detection
   ├─ Pothole detection
   ├─ Road cracks detection
   ├─ Waterlogging detection
   ├─ Speed breakers detection
   └─ Other road hazards

📊 Analytics:
├─ Historical data analysis
├─ Pattern recognition
├─ Risk zone identification
└─ Performance metrics

🗺️ Mapping:
├─ Real-time hazard locations
├─ Zone-wise analytics
├─ Interactive maps
└─ Coverage area tracking
```

### How Frontend Will Connect With Backend

```
┌─────────────────────────────────────────────────┐
│           HazarEye Full Architecture             │
├─────────────────────────────────────────────────┤
│                                                 │
│  Frontend (React - Current)  ←→  Backend (FastAPI)
│  ├─ Dashboard                      ├─ AI Model
│  ├─ Live Detection                 ├─ Database
│  ├─ Maps                           ├─ APIs
│  ├─ Analytics                      └─ WebSocket
│  └─ Reports
│
│  Data Flow:
│  1. Camera input → Backend (YOLO)
│  2. Backend processes → MongoDB
│  3. Frontend shows → Real-time updates via Socket.io
│
└─────────────────────────────────────────────────┘
```

---

## Architecture

### High-Level Architecture

```
┌────────────────────────────────────────────────────┐
│                  HazarEye Frontend                  │
├────────────────────────────────────────────────────┤
│                                                    │
│  index.html                                        │
│       ↓                                             │
│  main.jsx (Entry Point)                           │
│       ↓                                             │
│  App.jsx (Root Component)                         │
│       ↓                                             │
│  AppRoutes.jsx (Routing Configuration)            │
│       ↓                                             │
│  ┌─────────────────────────────────────────┐      │
│  │         7 Page Components               │      │
│  ├─────────────────────────────────────────┤      │
│  │ 1. LandingPage   (Public)               │      │
│  │ 2. Dashboard     (Main Command Center)  │      │
│  │ 3. LiveDetection (Real-time Monitoring)│      │
│  │ 4. HazardMap     (Interactive Map)      │      │
│  │ 5. Analytics     (Data Analysis)        │      │
│  │ 6. Reports       (Report Management)    │      │
│  │ 7. Settings      (User Preferences)     │      │
│  └─────────────────────────────────────────┘      │
│       ↓                                             │
│  ┌─────────────────────────────────────────┐      │
│  │      Reusable Components (6)            │      │
│  ├─────────────────────────────────────────┤      │
│  │ • Navbar        (Top Navigation)        │      │
│  │ • Sidebar       (Left Navigation)       │      │
│  │ • StatCard      (Metric Display)        │      │
│  │ • CameraFeed    (Live Video)            │      │
│  │ • AnalyticsChart (Graphs & Charts)      │      │
│  │ • HazardMap     (Leaflet Integration)   │      │
│  └─────────────────────────────────────────┘      │
│       ↓                                             │
│  ┌─────────────────────────────────────────┐      │
│  │      Styling System                     │      │
│  ├─────────────────────────────────────────┤      │
│  │ • globals.css (Global Styles)          │      │
│  │ • Component CSS (Specific Styles)      │      │
│  │ • theme.js (Design Tokens)             │      │
│  └─────────────────────────────────────────┘      │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## Folder Structure

### 📁 Project Structure Kya Hota Hai?

Think of it like **Ek ghar ke rooms** - har room ka apna purpose hota hai:

```
Frontend/
│
├── 📄 index.html              → Ghar ka main door (Browser entry point)
├── 📄 package.json            → Sab ingredients ki list
├── 📄 vite.config.js          → Build tool ka configuration
│
├── 📁 public/                 → Public files (favicon, images)
│
├── 📁 src/                    → Pura application code
│   │
│   ├── 📄 main.jsx            → Starting point (React mount karta hai)
│   ├── 📄 App.jsx             → Root component
│   ├── 📄 App.css             → Global styles
│   ├── 📄 index.css           → Base styles
│   │
│   ├── 📁 routes/             → Navigation setup
│   │   └── 📄 AppRoutes.jsx   → Sab pages ka routing
│   │
│   ├── 📁 pages/              → Complete pages (7 total)
│   │   ├── 📄 LandingPage.jsx
│   │   ├── 📄 Dashboard.jsx
│   │   ├── 📄 LiveDetection.jsx
│   │   ├── 📄 HazardMap.jsx
│   │   ├── 📄 Analytics.jsx
│   │   ├── 📄 Reports.jsx
│   │   └── 📄 Settings.jsx
│   │
│   ├── 📁 components/         → Reusable building blocks (6 components)
│   │   ├── 📄 Navbar.jsx      → Top navigation bar
│   │   ├── 📄 Sidebar.jsx     → Left side navigation
│   │   ├── 📄 StatCard.jsx    → Metric display card
│   │   ├── 📄 CameraFeed.jsx  → Live video feed
│   │   ├── 📄 AnalyticsChart.jsx → Charts wrapper
│   │   └── 📄 HazardMap.jsx   → Interactive map
│   │
│   ├── 📁 styles/             → All CSS files (13 files)
│   │   ├── 📄 globals.css     → Global styling
│   │   ├── 📄 navbar.css
│   │   ├── 📄 sidebar.css
│   │   ├── 📄 dashboard.css
│   │   ├── 📄 landing.css
│   │   ├── 📄 stat-card.css
│   │   ├── 📄 camera-feed.css
│   │   ├── 📄 analytics-chart.css
│   │   ├── 📄 hazard-map.css
│   │   ├── 📄 live-detection.css
│   │   ├── 📄 analytics.css
│   │   ├── 📄 reports.css
│   │   └── 📄 settings.css
│   │
│   ├── 📁 constants/          → Fixed values (like color codes)
│   │   └── 📄 theme.js        → Design system tokens
│   │
│   └── 📁 assets/             → Images, icons, etc.
│
└── 📁 node_modules/           → Installed packages (ignore this)
```

### Har Folder Ka Purpose

#### 🔹 `src/pages/`

**Likhaon:** Complete pages jo user dekhta hai
**Example:** Dashboard ek full page hai, LandingPage ek full page hai
**Real-life:** Ek ghar ke sab rooms

#### 🔹 `src/components/`

**Likhaon:** Small reusable pieces (LEGO blocks)
**Example:** Navbar har page mein use hota hai
**Real-life:** LEGO blocks jo kabhi-kabhi reuse karte ho

#### 🔹 `src/styles/`

**Likhaon:** Design ke rules (colors, sizes, spacing)
**Example:** Button ko cyan color, 12px padding
**Real-life:** Ghar ke sab rooms mein same paint color

#### 🔹 `src/constants/`

**Likhaon:** Fixed values jo pura app use karta hai
**Example:** All colors (cyan, red, green) ek jagah defined
**Real-life:** House manual jo sab ko pata ho

---

## File-by-File Explanation

### Core Entry Files

#### 📄 `index.html`

```
Purpose: Browser ko React app load karne ka entry point
Executed: Sab se pehle load hota hai
What happens:
  1. Browser index.html read karta hai
  2. <div id="root"></div> milta hai
  3. React ko iss div mein mount karta hai
What would break: Agar remove ho toh browser blank show karega
```

#### 📄 `main.jsx`

```
Purpose: React app ko browser mein render karta hai
Executed: index.html ke <script> se load hota hai
Code:
  import React from "react";
  import ReactDOM from "react-dom/client";
  import App from "./App";
  import "./styles/globals.css";

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

Why important:
  - React app ko start karta hai
  - Global CSS load karta hai
  - App component ko render karta hai

Real-life analogy: TV ko ON karna
```

#### 📄 `App.jsx`

```
Purpose: Root component - app ka main wrapper
Code:
  import AppRoutes from "./routes/AppRoutes";

  function App() {
    return <AppRoutes />;
  }

Why separated:
  - Clean architecture
  - Easy to add global providers later
  - Debugging easy hota hai

Real-life: House ka main door
```

#### 📄 `AppRoutes.jsx`

```
Purpose: Navigation setup - pages ke beech move karna
Code:
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/live-detection" element={<LiveDetection />} />
      <Route path="/hazard-map" element={<HazardMapPage />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>

How it works:
  - BrowserRouter: URL tracking karta hai
  - Routes: Sab pages ko list karta hai
  - Route: Path ko component se connect karta hai

Real-life: Road map jo bataye ki कौन सी सड़क कहाँ जाती है
```

---

### Component Files

#### 📄 `components/Navbar.jsx`

**Purpose:** Top navigation bar jo har page mein dikhta hai

**Key Features:**

- Logo + Brand name
- System status (AI Engine, Network, GPS)
- Notifications bell (3 alerts)
- User profile button

**Used By:** Har page (LandingPage except)

**Dependencies:**

- `react-router-dom` - Navigation
- `react-icons/fi` - Icons
- `../styles/navbar.css` - Styling

**Code Structure:**

```jsx
- Props: { toggleSidebar, sidebarOpen }
- State: notificationOpen (for dropdown)
- JSX:
  ├── Left: Logo + Menu toggle
  ├── Center: Status indicators
  └── Right: Notifications + User
```

**If Removed:** Navigation bar disappear karega, sidebar toggle nahi hoga

**Real-life:** Top panel of your phone jo time aur battery dikhata hai

---

#### 📄 `components/Sidebar.jsx`

**Purpose:** Left side navigation menu

**Key Features:**

- 6 navigation items (Dashboard, Live Detection, Hazard Map, Analytics, Reports, Settings)
- Active state indication
- Mobile overlay (touch-friendly)
- System status footer

**Used By:** Dashboard, LiveDetection, Analytics, HazardMap, Reports, Settings pages

**Navigation Items:**

```
1. Dashboard      (FiHome icon)
2. Live Detection (FiVideo icon)
3. Hazard Map     (FiMap icon)
4. Analytics      (FiBarChart2 icon)
5. Reports        (FiFileText icon)
6. Settings       (FiSettings icon)
```

**Mobile Behavior:**

- 768px se chhoti screen par: Sidebar hidden hota hai
- Click karoge toh overlay show hota hai
- Mobile-friendly design

**If Removed:** Navigation hard hota hai, user page switch nahi kar sakta

---

#### 📄 `components/StatCard.jsx`

**Purpose:** Reusable metric display card (एक box jo numbers show karta है)

**Props:**

```jsx
{
  icon: Component,        // Icon ko display karte hain
  title: "Total Hazards", // Card ka naam
  value: 932,             // Big number
  trend: "up",            // "up" ya "down"
  trendValue: 12.5,       // Percentage change
  color: "#38BDF8",       // Icon color
  description: "Optional" // Extra info
}
```

**Used By:**

- Dashboard (4 stat cards)
- Analytics (4 metric cards)
- LiveDetection (3 stat boxes)

**Features:**

- Animated on hover (उठ जाता है)
- Trend indicator (green up, red down)
- Color customizable
- Responsive

**If Removed:** Metric display नहीं होगी, dashboard empty दिखेगा

**Real-life analogy:** ATM screen पर आपका balance दिखाने वाला box

---

#### 📄 `components/CameraFeed.jsx`

**Purpose:** Live camera feed display with detection overlays

**Current Features (Demo):**

- 16:9 aspect ratio
- 3x3 grid overlay
- 2 mock detections with:
  - Type (Pothole, Crack)
  - Confidence percentage
  - Position on screen
- Play/Pause button
- Reset button

**Demo Detections:**

```
1. Pothole - 94% confidence - Center
2. Crack - 87% confidence - Right side
```

**Used By:**

- Dashboard page
- LiveDetection page

**Future Integration (Backend):**

```
API Connection needed:
- WebSocket से live video stream
- Real-time detection data
- Detection box coordinates
- Confidence scores update
```

**If Removed:** Live video feed नहीं दिखेगा, detection monitoring नहीं होगी

---

#### 📄 `components/AnalyticsChart.jsx`

**Purpose:** Multi-type chart wrapper (Line, Bar, Pie charts)

**Supported Chart Types:**

```
1. Line Chart  - Trends show करता है
2. Bar Chart   - Comparison दिखाता है
3. Pie Chart   - Distribution दिखाता है
```

**Props:**

```jsx
{
  type: "line",           // Chart type
  title: "Hazard Trends", // Chart का नाम
  data: [],               // Data array
  xKey: "time",           // X-axis key
  yKey: "value",          // Y-axis key
  color: "#38BDF8",       // Line color
  height: 300             // Chart की height
}
```

**Used By:**

- Dashboard (Trends line chart, Distribution pie)
- Analytics (4 charts - line, pie, bar, bar)
- LiveDetection (Confidence bar chart)

**Libraries:**

- Recharts for chart rendering

**If Removed:** Graphs नहीं दिखेंगे, analytics meaningless हो जाएगी

---

#### 📄 `components/HazardMap.jsx`

**Purpose:** Interactive map showing hazard locations

**Features:**

- Leaflet map integration
- Custom colored markers
  - Red for High severity
  - Orange for Medium severity
  - Green for Low severity
- Dark tile layer (CartoDB)
- Popups with hazard details
- Legend showing severity levels

**Mock Data (4 Hazards):**

```
1. Pothole (Delhi Center) - High - 94% confidence
2. Crack (North) - Medium - 87%
3. Speed Breaker (South) - High - 92%
4. Waterlogged (East) - Medium - 89%
```

**Used By:**

- HazardMap page (main map display)
- Dashboard (mini integration possible)

**Default Location:** Delhi (28.7041°N, 77.1025°E)

**Future Integration:**

```
Real-time data from:
- GPS coordinates
- YOLO detection results
- Severity classification
- Timestamp updates
```

**If Removed:** Map दिखना बंद हो जाएगा, location tracking impossible

---

### Design System File

#### 📄 `constants/theme.js`

**Purpose:** Centralized design tokens (एक जगह सब color और values)

**Contents:**

```
THEME object with:

1. Colors
   - Primary: Deep navy (#0F172A)
   - Accent: Cyan (#38BDF8), Sky blue (#60A5FA)
   - Danger: Red (#FF4757)
   - Success: Green (#00FF88)
   - Text: Light gray (#E2E8F0)

2. Shadows
   - sm, md, lg, xl
   - Glow effects

3. Transitions
   - smooth (0.3s)
   - smoothSlow (0.5s)
   - snappy (0.2s)

4. Spacing
   - xs to 2xl (4px to 48px)

5. Border Radius
   - sm to full (6px to 9999px)
```

**Used By:** All CSS files और components

**Why Important:**

- एक जगह सब design decisions
- आसानी से theme change कर सकते हो
- Consistency रहती है

**If Removed:** Colors manually define करना पड़ेगा, mess हो जाएगा

---

### Styling Files

#### 📄 `styles/globals.css`

**Purpose:** Global styling पूरे app के लिए

**Contains:**

```
1. Reset styles (margin, padding remove)
2. Typography rules
   - Font family
   - Heading sizes
   - Line heights

3. Scrollbar styling
   - Gradient scroll thumb

4. Animations
   - @keyframes float
   - @keyframes glow
   - @keyframes slide-in

5. Button styles
   - .btn-primary
   - .btn-secondary
   - .btn-ghost

6. Card styles
   - .card
   - .card-glow
   - .glass (glassmorphism)

7. Utilities
   - Responsive breakpoints
   - Flex helpers
   - Text utilities

8. Dark theme base
   - Background gradients
   - Text colors
```

**If Removed:** Styling completeness ख़त्म हो जाएगी, ugly दिखेगा

---

#### 📄 Component-Specific CSS Files

**Pattern:** हर component का अपना CSS file

| CSS File              | Component      | Purpose                |
| --------------------- | -------------- | ---------------------- |
| `navbar.css`          | Navbar         | Navigation bar styling |
| `sidebar.css`         | Sidebar        | Left menu styling      |
| `stat-card.css`       | StatCard       | Metric card styling    |
| `camera-feed.css`     | CameraFeed     | Video feed styling     |
| `analytics-chart.css` | AnalyticsChart | Chart customization    |
| `hazard-map.css`      | HazardMap      | Map styling            |

**Page CSS Files:**

| CSS File              | Page           | Purpose                |
| --------------------- | -------------- | ---------------------- |
| `landing.css`         | LandingPage    | Hero section styling   |
| `dashboard.css`       | Dashboard      | Layout and cards       |
| `live-detection.css`  | LiveDetection  | Detection page styling |
| `analytics.css`       | Analytics      | Analytics grid styling |
| `hazard-map-page.css` | HazardMap Page | Map page layout        |
| `reports.css`         | Reports        | Table and form styling |
| `settings.css`        | Settings       | Settings page layout   |

**Organization:**

- Separation of concerns
- Easy to maintain
- Easy to update individual components

---

## Components

### 🧩 Reusable Components Overview

```
Total Components: 6

1. ✨ Navbar
   ├─ Top navigation
   ├─ System status
   └─ User menu

2. ✨ Sidebar
   ├─ Page navigation
   ├─ Active state
   └─ Mobile overlay

3. ✨ StatCard
   ├─ Metric display
   ├─ Trend indicator
   └─ Customizable colors

4. ✨ CameraFeed
   ├─ Live video display
   ├─ Detection boxes
   └─ Controls

5. ✨ AnalyticsChart
   ├─ Line charts
   ├─ Bar charts
   └─ Pie charts

6. ✨ HazardMap
   ├─ Interactive map
   ├─ Markers
   └─ Popups
```

### Component Relationships

```
Navbar (Shared)
│
├─ Sidebar (Paired with Navbar)
│  │
│  └─ StatCard (Used in pages)
│     │
│     └─ Dashboard
│     └─ Analytics
│     └─ LiveDetection
│
├─ CameraFeed (Display component)
│  │
│  ├─ Dashboard
│  └─ LiveDetection
│
├─ AnalyticsChart (Chart wrapper)
│  │
│  ├─ Dashboard
│  ├─ Analytics
│  └─ LiveDetection
│
└─ HazardMap (Map component)
   │
   ├─ HazardMap Page
   └─ Dashboard (optional)
```

---

## Pages

### 📄 Page-by-Page Explanation

#### 1️⃣ **LandingPage.jsx** (`/`)

**Purpose:** Marketing page - पहली जगह जहां users आते हैं

**What User Sees:**

```
┌─────────────────────────────────────────┐
│  Landing Page                            │
├─────────────────────────────────────────┤
│                                          │
│  ◆ HazarEye Logo + Title                │
│  "AI-Powered Road Hazard Detection"     │
│                                          │
│  [Launch Dashboard Button]              │
│  [Learn More Button]                    │
│                                          │
│  Stats Section:                         │
│  ├─ 2.5M+ Detections                   │
│  ├─ 500K+ km Coverage                  │
│  ├─ 94.5% Accuracy                     │
│  └─ 50K+ Active Users                  │
│                                          │
│  6 Feature Cards:                       │
│  ├─ Real-time Detection                │
│  ├─ Analytics Dashboard                │
│  ├─ Safety First                       │
│  ├─ Lightning Fast                     │
│  ├─ Smart Mapping                      │
│  └─ IoT Integration                    │
│                                          │
│  CTA: "Get Started" Button              │
│                                          │
└─────────────────────────────────────────┘
```

**Background in Code:**

```
1. Framer Motion animations
2. Staggered card animations
3. Animated gradients (blobs)
4. Smooth scroll effects
```

**Components Used:** None (standalone)

**Navigation:**

- "Launch Dashboard" → `/dashboard`
- "Get Started" → `/dashboard`

**Why This Page:**

- First impression दिलाता है
- Company का purpose समझाता है
- User को interested करता है

**Backend Integration (Future):**

```
API Calls:
├─ GET /api/stats → Stats numbers
├─ GET /api/testimonials → User reviews
└─ GET /api/updates → Latest news
```

---

#### 2️⃣ **Dashboard.jsx** (`/dashboard`)

**Purpose:** Main command center - सब कुछ एक जगह

**Layout:**

```
┌──────────────────────────────────────────────┐
│              Navbar (Top)                    │
├──────────┬───────────────────────────────────┤
│          │                                   │
│ Sidebar  │     Main Content Area            │
│  (Left)  │                                   │
│          │ ┌─────────────────────────────┐  │
│          │ │ Dashboard Header            │  │
│          │ ├─────────────────────────────┤  │
│          │ │  4 Stat Cards               │  │
│          │ │ ├─ Total Hazards: 932      │  │
│          │ │ ├─ Active Zones: 47        │  │
│          │ │ ├─ Detection Rate: 94.5%   │  │
│          │ │ └─ System Health: 99.8%    │  │
│          │ │                             │  │
│          │ │ 2-Column Grid:             │  │
│          │ │ ├─ Left Column            │  │
│          │ │ │  ├─ Camera Feed         │  │
│          │ │ │  └─ Recent Alerts       │  │
│          │ │ │                          │  │
│          │ │ └─ Right Column           │  │
│          │ │    ├─ Trend Chart         │  │
│          │ │    ├─ Distribution Chart  │  │
│          │ │    └─ Overview            │  │
│          │ │                             │  │
│          │ │ Bottom:                     │  │
│          │ │ └─ Daily Detection Bar     │  │
│          │ │    Chart (Full Width)      │  │
│          │ └─────────────────────────────┘  │
│          │                                   │
└──────────┴───────────────────────────────────┘
```

**Key Data:**

```
Stat Cards:
├─ Total Hazards: 932 (↑ 12.5%)
├─ Active Zones: 47 (↑ 8.2%)
├─ Detection Rate: 94.5% (↑ 2.8%)
└─ System Health: 99.8% (↑ 0.1%)

Charts:
├─ Trend (7 days): Line chart
├─ Distribution: Pie chart (Potholes, Cracks, etc)
└─ Daily Detection: Bar chart

Recent Alerts:
├─ Pothole detected (High severity)
├─ Speed breaker (Medium)
└─ Crack (Low)
```

**Components Used:**

```
├─ Navbar
├─ Sidebar
├─ StatCard (4 times)
├─ CameraFeed
└─ AnalyticsChart (3 times)
```

**Backend Integration (Future):**

```
Real-time Data:
├─ GET /api/hazards/count → Total count
├─ GET /api/zones/active → Active zones
├─ GET /api/detection/rate → Percentage
├─ GET /api/system/health → Health status
├─ WebSocket /ws/live → Real-time updates
├─ GET /api/alerts/recent → Recent alerts
└─ GET /api/analytics/charts → Chart data
```

**Why This Page:**

- Overview दिखाता है
- Quick insights
- Real-time monitoring

---

#### 3️⃣ **LiveDetection.jsx** (`/live-detection`)

**Purpose:** Real-time hazard monitoring - अभी क्या हो रहा है

**Layout:**

```
┌──────────────────────────────────────────┐
│         Navbar + Sidebar                 │
├──────────────────────────────────────────┤
│ Live Detection Header                    │
├──────────────────────────────────────────┤
│                                          │
│ 3 Stat Boxes (Top):                      │
│ ├─ Detections (Today): 342              │
│ ├─ Avg Confidence: 89.5%                │
│ └─ Processing Speed: 124ms              │
│                                          │
│ 2-Column Layout:                        │
│ ├─ Left Column                          │
│ │  ├─ Camera Feed (Live)               │
│ │  └─ Confidence Distribution Chart    │
│ │                                      │
│ └─ Right Column                         │
│    ├─ Detection Logs                   │
│    │  ├─ Type, Confidence              │
│    │  ├─ Time, Location                │
│    │  └─ 5 most recent                 │
│    │                                    │
│    └─ Live Status Panel                │
│       ├─ Camera Feed Status            │
│       ├─ AI Engine Status              │
│       ├─ Network Status                │
│       └─ Processing Status             │
│       └─ Alert History                 │
│          ├─ Critical: 3                │
│          ├─ Warning: 8                 │
│          └─ Info: 24                   │
│                                          │
└──────────────────────────────────────────┘
```

**Detection Logs Example:**

```
Log Entry 1:
├─ Type: Pothole
├─ Confidence: 94%
├─ Time: 14:32:15
└─ Location: Sector A-1

Log Entry 2:
├─ Type: Crack
├─ Confidence: 87%
├─ Time: 14:31:42
└─ Location: Sector B-2
```

**Live Status Panel:**

```
Camera Feed      ● Online
AI Engine        ● Active
Network          ● Connected
Processing       ● Processing (अभी काम कर रहा है)
```

**Components Used:**

```
├─ Navbar
├─ Sidebar
├─ CameraFeed
├─ AnalyticsChart (Confidence distribution)
└─ Custom cards for status
```

**Backend Integration (Future):**

```
WebSocket Connection:
├─ /ws/detections → Real-time detection stream
├─ /ws/status → Live status updates
├─ GET /api/detections/logs → Recent logs
├─ POST /api/alerts/acknowledge → Alert handling
└─ GET /api/processing/metrics → Speed, accuracy
```

**Why This Page:**

- Operator को real-time updates दिखाता है
- Critical alerts immediately दिखे
- Decision making quick हो

---

#### 4️⃣ **Analytics.jsx** (`/analytics`)

**Purpose:** Data analysis and insights - पिछले data का analysis

**Layout:**

```
┌─────────────────────────────────────┐
│    Navbar + Sidebar                 │
├─────────────────────────────────────┤
│ Analytics Header                    │
├─────────────────────────────────────┤
│                                     │
│ 4 Metric Cards (Top Row):          │
│ ├─ Total Detections: 1,000+       │
│ │  └─ ↑ 12% from yesterday        │
│ ├─ Detection Rate: 94.5%           │
│ │  └─ ↑ 2.1% improvement          │
│ ├─ Most Common: Potholes (342)     │
│ │  └─ Primary hazard type         │
│ └─ Avg Response: 124ms            │
│    └─ ↓ 8ms faster               │
│                                     │
│ 4-Chart Grid (Main Content):       │
│ ├─ Top-Left: Hazard Trends        │
│ │  └─ 7-day line chart            │
│ ├─ Top-Right: Distribution        │
│ │  └─ Pie chart (5 types)         │
│ ├─ Bottom-Left: Daily Detection   │
│ │  └─ Multi-series bar chart      │
│ └─ Bottom-Right: Area-wise        │
│    └─ Comparison bar chart        │
│                                     │
└─────────────────────────────────────┘
```

**Chart Types:**

```
1. Hazard Trends (Line Chart)
   ├─ X-axis: Time (7 days)
   └─ Y-axis: Detection count

2. Distribution (Pie Chart)
   ├─ Potholes: 34% (largest)
   ├─ Cracks: 24%
   ├─ Waterlogged: 19%
   ├─ Speed Breakers: 16%
   └─ Others: 7%

3. Daily Detection (Bar Chart)
   ├─ Multiple series (4 types)
   └─ Shows time-wise breakdown

4. Area-wise Analysis (Bar Chart)
   ├─ Downtown: 234 detections
   ├─ Highway: 456 (highest)
   ├─ Suburbs: 189
   └─ Rural: 121
```

**Components Used:**

```
├─ Navbar
├─ Sidebar
└─ AnalyticsChart (4 instances)
```

**Backend Integration (Future):**

```
API Calls:
├─ GET /api/analytics/trends → 7-day data
├─ GET /api/analytics/distribution → Type breakdown
├─ GET /api/analytics/daily → Daily breakdown
├─ GET /api/analytics/areas → Area-wise data
├─ GET /api/analytics/metrics → Key numbers
└─ GET /api/analytics/comparison → Trends
```

**Why This Page:**

- Historical data analysis
- Pattern identification
- Decision making based on trends
- Performance tracking

---

#### 5️⃣ **HazardMap.jsx** (`/hazard-map`)

**Purpose:** Interactive map showing hazard locations - Maps पर सब कुछ

**Layout:**

```
┌─────────────────────────────────┐
│   Navbar + Sidebar              │
├─────────────────────────────────┤
│ Hazard Map Header               │
├─────────────────────────────────┤
│                                 │
│ ┌───────────────────────────┐   │
│ │                           │   │
│ │   Interactive Map         │   │
│ │   (Leaflet)               │   │
│ │                           │   │
│ │   📍 Red Marker (High)    │   │
│ │   📍 Orange Marker (Med)  │   │
│ │   📍 Green Marker (Low)   │   │
│ │                           │   │
│ │   Legend (Bottom-Left):   │   │
│ │   ├─ High Severity 🔴     │   │
│ │   ├─ Medium Severity 🟠   │   │
│ │   └─ Low Severity 🟢      │   │
│ │                           │   │
│ └───────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

**Map Features:**

```
1. Markers (4 Demo Locations)
   ├─ Pothole @ Delhi (High - Red)
   ├─ Crack @ North (Medium - Orange)
   ├─ Speed Breaker @ South (High - Red)
   └─ Waterlogged @ East (Medium - Orange)

2. Click Popup Shows:
   ├─ Hazard Type
   ├─ Severity Level
   ├─ Confidence %
   ├─ Latitude/Longitude
   └─ Detection time

3. Legend Shows:
   ├─ High severity
   ├─ Medium severity
   └─ Low severity

4. Dark Tile Layer (CartoDB)
```

**Components Used:**

```
├─ Navbar
├─ Sidebar
└─ HazardMap (main component)
```

**Backend Integration (Future):**

```
Real-time Map Updates:
├─ WebSocket /ws/hazards → New hazard locations
├─ GET /api/hazards/map → All current hazards
├─ GET /api/hazards/{id}/details → Hazard info
└─ WebSocket /ws/map/updates → Location updates
```

**Why This Page:**

- Visual representation
- Spatial awareness
- Zone identification
- Hotspot analysis

---

#### 6️⃣ **Reports.jsx** (`/reports`)

**Purpose:** Report management - Download और generate reports

**Layout:**

```
┌──────────────────────────────────┐
│  Navbar + Sidebar                │
├──────────────────────────────────┤
│ Reports Header                   │
├──────────────────────────────────┤
│                                  │
│ Summary Cards (Top Row):         │
│ ├─ Today's Detections: 342      │
│ ├─ This Week: 2,145             │
│ ├─ This Month: 8,932            │
│ └─ Average Accuracy: 89.5%      │
│                                  │
│ Search & Filter Bar:            │
│ ├─ Search box (Reports खोजो)    │
│ └─ Filter button                │
│                                  │
│ Reports Table:                  │
│ ├─ Columns:                     │
│ │  ├─ Report Name              │
│ │  ├─ Date                     │
│ │  ├─ Detections              │
│ │  ├─ Avg Confidence          │
│ │  ├─ Format (PDF/Excel)      │
│ │  └─ Download Button         │
│ │                              │
│ └─ 4 Sample Reports:           │
│    ├─ Daily Report            │
│    ├─ Weekly Summary          │
│    ├─ Monthly Performance     │
│    └─ Area-wise Analysis      │
│                                  │
│ Generate Custom Report:         │
│ ├─ Report Type Dropdown       │
│ ├─ Format Dropdown            │
│ └─ Generate Button            │
│                                  │
└──────────────────────────────────┘
```

**Sample Reports:**

```
1. Daily Detection Report
   ├─ Date: 2024-06-05
   ├─ Detections: 342
   ├─ Confidence: 89.5%
   └─ Format: PDF

2. Weekly Hazard Summary
   ├─ Period: May 29 - Jun 05
   ├─ Detections: 2,145
   ├─ Confidence: 88.2%
   └─ Format: Excel

3. Monthly Performance
   ├─ Period: Jun 1-5
   ├─ Detections: 8,932
   ├─ Confidence: 87.9%
   └─ Format: PDF

4. Area-wise Analysis
   ├─ Date: 2024-06-05
   ├─ Detections: 1,234
   ├─ Confidence: 90.1%
   └─ Format: Excel
```

**Components Used:**

```
├─ Navbar
├─ Sidebar
└─ Custom Table & Forms
```

**Backend Integration (Future):**

```
API Calls:
├─ GET /api/reports/list → Available reports
├─ GET /api/reports/{id}/download → Download file
├─ POST /api/reports/generate → Generate custom
├─ GET /api/reports/summary → Quick stats
└─ POST /api/reports/email → Email report
```

**Why This Page:**

- Historical record maintenance
- Regulatory compliance
- Performance tracking
- Data export

---

#### 7️⃣ **Settings.jsx** (`/settings`)

**Purpose:** User preferences और app configuration - Settings बदलना

**Layout:**

```
┌─────────────────────────────────┐
│  Navbar + Sidebar               │
├─────────────────────────────────┤
│ Settings Header                 │
├─────────────────────────────────┤
│                                 │
│ Settings Groups:               │
│                                 │
│ 1️⃣ Theme Settings              │
│    └─ Dark Mode [Toggle]       │
│                                 │
│ 2️⃣ Alert Settings              │
│    ├─ In-app Notifications [✓] │
│    ├─ Sound Alerts [✓]         │
│    └─ Email Notifications [ ]  │
│                                 │
│ 3️⃣ GPS Settings                │
│    ├─ GPS Tracking [✓]         │
│    └─ Auto Capture [✓]         │
│                                 │
│ 4️⃣ System Configuration        │
│    └─ Data Collection [✓]      │
│                                 │
│ System Information:            │
│ ├─ App Version: 1.0.0          │
│ ├─ Build Number: 2024.06.05   │
│ ├─ Last Updated: June 5, 2024 │
│ └─ Status: ● Online           │
│                                 │
│ Action Buttons:                │
│ ├─ [Save Settings]             │
│ └─ [Reset to Default]          │
│                                 │
└─────────────────────────────────┘
```

**Settings Details:**

```
Theme:
├─ Dark Mode: Enabled (Cyberpunk look)

Alerts:
├─ In-app Notifications: On (Real-time alerts)
├─ Sound Alerts: On (Beep on detection)
└─ Email Notifications: Off (Daily summary)

GPS:
├─ GPS Tracking: On (Location accuracy)
└─ Auto Capture: On (Auto save location)

System:
└─ Data Collection: On (Improve AI)

System Info:
├─ Version: 1.0.0
├─ Build: 2024.06.05
├─ Last Update: June 5, 2024
└─ Status: Online
```

**Components Used:**

```
├─ Navbar
├─ Sidebar
└─ Custom Toggle Buttons
```

**Backend Integration (Future):**

```
API Calls:
├─ GET /api/settings/user → Load settings
├─ POST /api/settings/update → Save settings
├─ POST /api/settings/reset → Reset defaults
└─ GET /api/system/info → System information
```

**Storage:**

```
Local Storage:
├─ User preferences
├─ UI settings (dark mode)
└─ Recent searches

Backend Storage:
├─ User account settings
├─ Notification preferences
└─ Privacy settings
```

**Why This Page:**

- User customization
- Preference management
- System configuration
- Privacy control

---

## Routing

### 🛣️ How Navigation Works

**React Router Kya Karta Hai?**

```
Traditional Website:
हर page के लिए नया file load होता है
/dashboard → dashboard.html load
/analytics → analytics.html load
(पूरी website फिर से load होती है)

React Router:
एक ही HTML file में सब content
/dashboard → Dashboard component render
/analytics → Analytics component render
(सिर्फ content change होता है, page reload नहीं)
```

### Routing Flow

```
User Browser
    ↓
Clicks Link (e.g., "Dashboard")
    ↓
React Router (BrowserRouter)
    ↓
URL Changes to /dashboard
    ↓
Routes component checks path
    ↓
Finds matching <Route path="/dashboard">
    ↓
Renders <Dashboard /> component
    ↓
Browser updates page (without reload)
```

### Complete Route Map

```
Root (/)
├─ LandingPage
│  └─ Marketing/Welcome
│     └─ Can navigate to /dashboard
│
├─ /dashboard → Dashboard
│  ├─ Navbar + Sidebar
│  ├─ 4 Stat Cards
│  ├─ Camera Feed
│  └─ 3 Charts
│
├─ /live-detection → LiveDetection
│  ├─ Real-time monitoring
│  ├─ Detection logs
│  └─ Live status
│
├─ /hazard-map → HazardMapPage
│  ├─ Interactive map
│  ├─ Markers
│  └─ Legend
│
├─ /analytics → Analytics
│  ├─ 4 Metrics
│  └─ 4 Charts
│
├─ /reports → Reports
│  ├─ Summary cards
│  ├─ Reports table
│  └─ Generation form
│
└─ /settings → Settings
   ├─ 4 Setting groups
   ├─ System info
   └─ Action buttons
```

### Navigation in Components

**Navbar में:**

```jsx
const navigate = useNavigate();

<div className="logo" onClick={() => navigate("/")}>
  // Click करो तो home page जाएगा
</div>;
```

**Sidebar में:**

```jsx
const handleNavigation = (path) => {
  navigate(path); // Path पर जाओ
  if (mobile) {
    toggleSidebar(); // Mobile पर menu बंद करो
  }
};

navItems.map((item) => (
  <button onClick={() => handleNavigation(item.path)}>{item.label}</button>
));
```

### URL Bar का Role

```
Browser URL Bar:
- /             → Landing Page
- /dashboard    → Dashboard
- /live-detection → Live Detection
- /hazard-map   → Hazard Map
- /analytics    → Analytics
- /reports      → Reports
- /settings     → Settings

Invalid URLs:
- /invalid      → Redirects to /
- /xyz          → Redirects to /
```

### Navigation Flow Example

**User की journey:**

```
Step 1: Browser खोला
        ↓ (/) →  Landing Page दिखा

Step 2: "Launch Dashboard" button click
        ↓ (/dashboard) → Dashboard दिखा

Step 3: Sidebar से "Live Detection" click
        ↓ (/live-detection) → Live Detection दिखा

Step 4: Top logo click
        ↓ (/) → Back to Landing Page

Step 5: Sidebar से "Analytics" click
        ↓ (/analytics) → Analytics दिखा

Step 6: Browser back button
        ↓ (/live-detection) → Back to prev page
```

---

## UI/UX Design

### 🎨 Design Philosophy

**HazarEye को किस तरह design किया गया:**

```
1. Dark Theme
   ├─ Eyes को कम strain
   ├─ Professional look
   └─ Futuristic feel

2. Glassmorphism
   ├─ Modern aesthetic
   ├─ Layered depth
   └─ Premium feel

3. Animations
   ├─ Smooth transitions
   ├─ Engagement
   └─ Professional feel

4. Responsive Design
   ├─ Desktop optimized
   ├─ Tablet friendly
   └─ Mobile ready
```

### Why Dark Theme?

```
मतलब:
├─ 24/7 monitoring के लिए आंखों को कम strain
├─ Night driving के लिए suitable
├─ Cyberpunk/AI theme के लिए perfect
├─ Power consumption less (OLED screens पर)
└─ Modern look और feel

Technical:
├─ Background: #020617 (Darkest)
├─ Cards: rgba(15, 23, 42, 0.8)
├─ Text: #E2E8F0 (Light gray)
├─ Accents: Cyan (#38BDF8), Green (#00FF88)
```

### Why Glassmorphism?

```
Glassmorphism क्या है?
- Glass को blur करके के पीछे देखना
- Translucent cards
- Backdrop blur effect

मतलब:
├─ Modern aesthetic दिखता है
├─ Layered depth create होता है
├─ Premium feel मिलता है
├─ Focus को guide करता है

Implementation:
└─ backdrop-filter: blur(12px)
   -webkit-backdrop-filter: blur(12px)
```

### Why Animations?

```
Animations क्यों जरूरी हैं?

1. User Feedback
   - Button hover होने पर उठ जाता है
   - User को पता चल जाता है कि clickable है

2. Visual Hierarchy
   - Important elements को animate करो
   - User का ध्यान वहीं जाएगा

3. Professional Feel
   - Janky transitions ×
   - Smooth animations ✓

4. Engagement
   - Static page boring लगता है
   - Animated page attractive लगता है

Examples:
├─ Cards: whileHover={{ y: -8 }} (उठ जाते हैं)
├─ Entrance: initial={{ opacity: 0, y: 20 }}
├─ Floating: @keyframes float (धीरे उठना)
└─ Glow: box-shadow animate करना
```

### Responsive Design

**क्या responsive design है?**

```
Different screen sizes पर same app दिखे

Breakpoints:
├─ Desktop: > 1024px
│  └─ Sidebar visible, Full layout
│
├─ Tablet: 768px - 1024px
│  └─ Sidebar toggle करना पड़े
│  └─ Grid layout single column हो जाती है
│
└─ Mobile: < 768px
   └─ Sidebar as overlay
   └─ Full width content
   └─ Touch-friendly buttons
```

**CSS Media Queries:**

```css
/* Desktop */
@media (min-width: 1024px) {
  .sidebar {
    display: block;
  }
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .sidebar {
    transform: translateX(-100%);
  }
  .grid {
    grid-template-columns: 1fr;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
  .card {
    padding: 16px;
  }
}
```

### Color Palette Meaning

```
Color Strategy:

🔵 Cyan (#38BDF8) - Primary Accent
   └─ Trust, Technology, Reliability
   └─ Buttons, Links, Highlights

🟢 Green (#00FF88) - Success/Positive
   └─ Detection successful
   └─ System online
   └─ Good metrics

🔴 Red (#FF4757) - Danger/Critical
   └─ High severity hazards
   └─ System errors
   └─ Warning alerts

🟠 Orange (#FFA500) - Warning
   └─ Medium severity
   └─ Caution required
   └─ Medium priority

⚪ White (#E2E8F0) - Text/Content
   └─ High contrast
   └─ Readability
   └─ Primary text

⚫ Navy (#0F172A) - Background
   └─ Deep, Professional
   └─ Neutral, calming
   └─ Low eye strain
```

---

## Backend Integration

### 🔗 Where APIs Will Connect

**Har page में backend kya connect करेगा:**

#### **Dashboard Page**

```
Current: Mock data
Future: Real-time API

StatCards Data:
├─ GET /api/hazards/count
│  └─ Returns: { total: 932, trend: +12.5 }
│
├─ GET /api/zones/active
│  └─ Returns: { zones: 47, trend: +8.2 }
│
├─ GET /api/detection/rate
│  └─ Returns: { rate: 94.5, trend: +2.8 }
│
└─ GET /api/system/health
   └─ Returns: { health: 99.8, trend: +0.1 }

Charts Data:
├─ GET /api/analytics/trends
│  └─ Returns: [{ time: '00:00', value: 12 }, ...]
│
├─ GET /api/analytics/distribution
│  └─ Returns: [{ name: 'Potholes', value: 342 }, ...]
│
└─ GET /api/analytics/daily
   └─ Returns: [{ time: '00:00', Potholes: 5, ... }, ...]

Recent Alerts:
└─ WebSocket /ws/alerts
   └─ Real-time alert stream
```

#### **Live Detection Page**

```
Real-time Monitoring:

Camera Feed:
├─ WebSocket /ws/video
│  └─ Streams video frames (या just stream URL)
│
└─ WebSocket /ws/detections
   └─ Sends detection boxes
   └─ Data: { type, x, y, confidence, id }

Detection Logs:
├─ WebSocket /ws/detections
│  └─ Real-time log updates
│
└─ GET /api/detections/logs
   └─ Recent 5 detections

Live Status:
├─ GET /api/system/camera-status
│  └─ Returns: { status: 'online', uptime: '5:23:45' }
│
├─ GET /api/system/ai-status
│  └─ Returns: { status: 'active', fps: 30 }
│
├─ GET /api/system/network-status
│  └─ Returns: { status: 'connected', latency: '45ms' }
│
└─ GET /api/system/processing-status
   └─ Returns: { status: 'processing', speed: '124ms' }

Alert History:
├─ GET /api/alerts/critical
│  └─ Returns: count
│
├─ GET /api/alerts/warning
│  └─ Returns: count
│
└─ GET /api/alerts/info
   └─ Returns: count
```

#### **Analytics Page**

```
Historical Data Analysis:

Metrics:
├─ GET /api/analytics/total-detections
│  └─ Returns: { total: 1000, change: +12 }
│
├─ GET /api/analytics/detection-rate
│  └─ Returns: { rate: 94.5, change: +2.1 }
│
├─ GET /api/analytics/most-common
│  └─ Returns: { type: 'Potholes', count: 342 }
│
└─ GET /api/analytics/avg-response
   └─ Returns: { time: '124ms', change: -8 }

Charts:
├─ GET /api/analytics/hazard-trends
│  └─ Returns: [{ time, value }, ...] (7 days)
│
├─ GET /api/analytics/hazard-distribution
│  └─ Returns: [{ name, value }, ...] (5 types)
│
├─ GET /api/analytics/daily-detection
│  └─ Returns: [{ time, Potholes, Cracks, ... }, ...]
│
└─ GET /api/analytics/area-analysis
   └─ Returns: [{ name: 'Downtown', value: 234 }, ...]
```

#### **Hazard Map Page**

```
Real-time Mapping:

Map Data:
├─ GET /api/hazards/map
│  └─ Returns: [
│       {
│         id: 1,
│         type: 'Pothole',
│         lat: 28.7041,
│         lng: 77.1025,
│         severity: 'high',
│         confidence: 94,
│         timestamp: '2024-06-05T14:32:15Z'
│       },
│       ...
│     ]
│
└─ WebSocket /ws/hazards
   └─ Real-time hazard updates

Popup Details:
└─ GET /api/hazards/{id}
   └─ Returns full hazard details
```

#### **Reports Page**

```
Report Management:

Summary Stats:
├─ GET /api/reports/daily-count
│  └─ Returns: { count: 342 }
│
├─ GET /api/reports/weekly-count
│  └─ Returns: { count: 2145 }
│
├─ GET /api/reports/monthly-count
│  └─ Returns: { count: 8932 }
│
└─ GET /api/reports/avg-accuracy
   └─ Returns: { accuracy: 89.5 }

Reports List:
├─ GET /api/reports/list
│  └─ Returns: [
│       {
│         id: 1,
│         title: 'Daily Report',
│         date: '2024-06-05',
│         detections: 342,
│         accuracy: 89.5,
│         formats: ['pdf', 'excel']
│       },
│       ...
│     ]

Download:
├─ GET /api/reports/{id}/download?format=pdf
│  └─ Download report file
│
└─ GET /api/reports/{id}/download?format=excel
   └─ Download as Excel

Generate:
└─ POST /api/reports/generate
   └─ Body: {
        reportType: 'daily',
        format: 'pdf',
        dateRange: { from, to }
      }
   └─ Returns: report file या generation status
```

#### **Settings Page**

```
User Preferences:

Load Settings:
└─ GET /api/settings/user
   └─ Returns: {
        darkMode: true,
        notifications: true,
        alerts: true,
        emailNotifications: false,
        gpsTracking: true,
        autoCapture: true,
        dataCollection: true
      }

Save Settings:
└─ POST /api/settings/update
   └─ Body: settings object
   └─ Returns: { success: true }

Reset Settings:
└─ POST /api/settings/reset
   └─ Returns: default settings

System Info:
└─ GET /api/system/info
   └─ Returns: {
        version: '1.0.0',
        buildNumber: '2024.06.05',
        lastUpdated: '2024-06-05',
        status: 'online'
      }
```

### Backend Stack (Future)

```
┌─────────────────────────────────┐
│      Frontend (Current)          │
│  React + React Router            │
│  Vite + Framer Motion            │
│  Recharts + Leaflet              │
└──────────────┬────────────────────┘
               │ (HTTP/WebSocket)
               ↓
┌─────────────────────────────────┐
│      Backend (Future)            │
├─────────────────────────────────┤
│  Framework: FastAPI (Python)    │
│  WebServer: Uvicorn             │
│  Database: MongoDB              │
│  Cache: Redis                   │
│  Message Queue: RabbitMQ        │
└─────────────────────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│    AI/ML Models (Future)        │
├─────────────────────────────────┤
│  Object Detection: YOLOv8       │
│  Classification: CNN            │
│  Framework: PyTorch             │
│  Inference: TensorRT            │
└─────────────────────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│  Hardware Integration           │
├─────────────────────────────────┤
│  GPS Device: GNSS Receiver      │
│  Camera: IP Camera              │
│  Sensors: Various               │
│  Communication: 4G/5G/WiFi      │
└─────────────────────────────────┘
```

### WebSocket Connection Example

```javascript
// Real-time updates के लिए WebSocket

// Connection establish करना
const socket = new WebSocket("ws://localhost:8000/ws/detections");

// Connection successful
socket.onopen = () => {
  console.log("Connected to backend");
};

// Data receive करना
socket.onmessage = (event) => {
  const detection = JSON.parse(event.data);
  // UI update करना
  updateDetectionBox(detection);
};

// Connection close होना
socket.onclose = () => {
  console.log("Disconnected from backend");
};

// Error handling
socket.onerror = (error) => {
  console.error("WebSocket error:", error);
};
```

### API Call Example

```javascript
// Regular API calls के लिए Axios

import axios from "axios";

// Dashboard stats fetch करना
const fetchDashboardStats = async () => {
  try {
    const response = await axios.get("/api/hazards/count");
    return response.data; // { total: 932, trend: +12.5 }
  } catch (error) {
    console.error("Error fetching stats:", error);
  }
};

// useEffect में use करना
useEffect(() => {
  fetchDashboardStats().then((data) => {
    setStats(data);
  });
}, []);
```

---

## Summary

### 🎯 HazarEye Frontend - Complete Overview

**What We Built:**

```
✅ 7 Complete Pages
✅ 6 Reusable Components
✅ 13 CSS Files
✅ Design System (theme.js)
✅ Full Routing System
✅ Responsive Design
✅ Dark Theme with Glassmorphism
✅ Smooth Animations
✅ Mock Data Integration
```

**Technology Stack:**

```
Frontend:
├─ React 19.2.6
├─ React Router 7.17.0
├─ Framer Motion 12.40.0
├─ Recharts 3.8.1
├─ Leaflet 1.9.4
├─ React Icons 5.6.0
├─ Axios 1.17.0
├─ Socket.io Client 4.8.3
└─ Vite 8.0.12 (Build tool)
```

**Key Features:**

```
✨ Real-time Monitoring
✨ Interactive Maps
✨ Data Analytics
✨ Report Management
✨ Settings Control
✨ Responsive Design
✨ Professional UI/UX
✨ Smooth Animations
```

**Ready For:**

```
→ Backend API Integration
→ WebSocket Real-time Updates
→ AI Model Integration (YOLOv8)
→ Database Connection
→ Authentication System
→ Production Deployment
```

---

## Beginner Tips

### अगर कुछ समझ न आए तो:

```
1. File structure समझो
   └─ Folder names से ही पता चल जाता है कि क्या है

2. एक component को पूरी तरह समझो
   └─ फिर बाकी components similar होंगे

3. Imports को समझो
   └─ Imports से पता चल जाता है किसमें क्या है

4. Props को समझो
   └─ Props से component को कैसे customize किया जाता है

5. State को समझो
   └─ State से component का data manage होता है

6. Hooks को समझो
   └─ useState, useEffect, useNavigate common हैं

7. Routes को समझो
   └─ Pages के बीच move करना
```

### Learning Resources:

```
1. React Documentation
   https://react.dev

2. React Router
   https://reactrouter.com

3. Framer Motion
   https://www.framer.com/motion

4. Recharts
   https://recharts.org

5. Leaflet
   https://leafletjs.com

6. Vite
   https://vitejs.dev
```

---

**Document Created:** June 5, 2024
**Project:** HazarEye Frontend
**Status:** Complete & Ready for Backend Integration
**Version:** 1.0.0
