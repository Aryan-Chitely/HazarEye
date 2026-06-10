import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';
import LiveDetection from '../pages/LiveDetection';
import HazardMapPage from '../pages/HazardMap';
import Analytics from '../pages/Analytics';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';

function AppRoutes() {
  return (
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
  );
}

export default AppRoutes;