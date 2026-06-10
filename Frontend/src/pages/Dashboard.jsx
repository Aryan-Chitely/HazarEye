import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiAlertCircle,
  FiHelpCircle,
  FiMapPin,
  FiTrendingUp,
  FiClock,
  FiActivity,
} from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import CameraFeed from '../components/CameraFeed';
import AnalyticsChart from '../components/AnalyticsChart';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Mock data for charts
  const trendData = [
    { time: '00:00', value: 12 },
    { time: '04:00', value: 19 },
    { time: '08:00', value: 28 },
    { time: '12:00', value: 35 },
    { time: '16:00', value: 42 },
    { time: '20:00', value: 38 },
    { time: '24:00', value: 29 },
  ];

  const detectionData = [
    { time: '00:00', Potholes: 5, Cracks: 3, Waterlogged: 2, Breakers: 1 },
    { time: '04:00', Potholes: 8, Cracks: 5, Waterlogged: 3, Breakers: 2 },
    { time: '08:00', Potholes: 12, Cracks: 8, Waterlogged: 5, Breakers: 3 },
    { time: '12:00', Potholes: 15, Cracks: 10, Waterlogged: 6, Breakers: 4 },
    { time: '16:00', Potholes: 18, Cracks: 12, Waterlogged: 7, Breakers: 5 },
    { time: '20:00', Potholes: 16, Cracks: 11, Waterlogged: 6, Breakers: 4 },
    { time: '24:00', Potholes: 12, Cracks: 8, Waterlogged: 4, Breakers: 3 },
  ];

  const hazardDistribution = [
    { name: 'Potholes', value: 342 },
    { name: 'Cracks', value: 245 },
    { name: 'Waterlogged', value: 189 },
    { name: 'Speed Breakers', value: 156 },
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'Pothole',
      location: 'Delhi Road, Zone A',
      severity: 'high',
      time: '2 min ago',
      confidence: 94,
    },
    {
      id: 2,
      type: 'Speed Breaker',
      location: 'Mumbai Highway, Section 2',
      severity: 'medium',
      time: '5 min ago',
      confidence: 87,
    },
    {
      id: 3,
      type: 'Crack',
      location: 'Bangalore Route, Zone C',
      severity: 'low',
      time: '12 min ago',
      confidence: 76,
    },
  ];

  return (
    <div className="dashboard-layout">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="dashboard-main">
        <div className="dashboard-container">
          {/* Page Header */}
          <motion.div
            className="page-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h1>Dashboard</h1>
              <p>Real-time road hazard monitoring and analysis</p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="stats-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <StatCard
              icon={FiAlertCircle}
              title="Total Hazards"
              value="932"
              trend="up"
              trendValue={12.5}
              color="#FF4757"
            />
            <StatCard
              icon={FiMapPin}
              title="Active Zones"
              value="47"
              trend="up"
              trendValue={8.2}
              color="#00D9FF"
            />
            <StatCard
              icon={FiTrendingUp}
              title="Detection Rate"
              value="94.5%"
              trend="up"
              trendValue={2.8}
              color="#00FF88"
            />
            <StatCard
              icon={FiActivity}
              title="System Health"
              value="99.8%"
              trend="up"
              trendValue={0.1}
              color="#38BDF8"
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="dashboard-grid">
            {/* Left Column */}
            <div className="grid-left">
              {/* Camera Feed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <CameraFeed />
              </motion.div>

              {/* Recent Alerts */}
              <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h3 className="card-title">Recent Alerts</h3>
                <div className="alerts-list">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="alert-item">
                      <div className="alert-left">
                        <div
                          className={`alert-severity ${alert.severity}`}
                        ></div>
                        <div>
                          <p className="alert-type">{alert.type}</p>
                          <p className="alert-location">
                            {alert.location}
                          </p>
                        </div>
                      </div>
                      <div className="alert-right">
                        <span className="alert-confidence">
                          {alert.confidence}%
                        </span>
                        <span className="alert-time">{alert.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="grid-right">
              {/* Hazard Trends Chart */}
              <motion.div
                className="card card-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <AnalyticsChart
                  type="line"
                  title="Hazard Trends (24h)"
                  data={trendData}
                  xKey="time"
                  yKey="value"
                  color="#38BDF8"
                  height={280}
                />
              </motion.div>

              {/* Hazard Distribution Chart */}
              <motion.div
                className="card card-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <AnalyticsChart
                  type="pie"
                  title="Hazard Distribution"
                  data={hazardDistribution}
                  color="#00FF88"
                  height={280}
                />
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                className="card quick-stats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <h3 className="card-title">Quick Overview</h3>
                <div className="quick-stat-item">
                  <span>
                    <FiClock size={16} /> Average Response Time
                  </span>
                  <strong>124ms</strong>
                </div>
                <div className="quick-stat-item">
                  <span>
                    <FiTrendingUp size={16} /> Alerts Today
                  </span>
                  <strong>342</strong>
                </div>
                <div className="quick-stat-item">
                  <span>
                    <FiMapPin size={16} /> Coverage Area
                  </span>
                  <strong>500+ km</strong>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Detection Details Chart */}
          <motion.div
            className="card card-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <AnalyticsChart
              type="bar"
              title="Daily Detection Count"
              data={detectionData}
              xKey="time"
              yKey="Potholes"
              color="#FF4757"
              height={300}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;