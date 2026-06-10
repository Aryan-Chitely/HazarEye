import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiBarChart2,
  FiTrendingUp,
  FiPieChart,
  FiActivity,
} from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AnalyticsChart from '../components/AnalyticsChart';
import '../styles/analytics.css';

const Analytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const hazardTrendData = [
    { time: '00:00', value: 45 },
    { time: '04:00', value: 52 },
    { time: '08:00', value: 78 },
    { time: '12:00', value: 95 },
    { time: '16:00', value: 102 },
    { time: '20:00', value: 87 },
    { time: '24:00', value: 65 },
  ];

  const hazardDistribution = [
    { name: 'Potholes', value: 342 },
    { name: 'Cracks', value: 245 },
    { name: 'Waterlogged', value: 189 },
    { name: 'Speed Breakers', value: 156 },
    { name: 'Others', value: 68 },
  ];

  const dailyDetectionData = [
    { time: '00:00', Potholes: 12, Cracks: 8, Waterlogged: 5, Breakers: 3 },
    { time: '04:00', Potholes: 18, Cracks: 12, Waterlogged: 7, Breakers: 4 },
    { time: '08:00', Potholes: 28, Cracks: 18, Waterlogged: 12, Breakers: 6 },
    { time: '12:00', Potholes: 35, Cracks: 24, Waterlogged: 16, Breakers: 8 },
    { time: '16:00', Potholes: 40, Cracks: 28, Waterlogged: 18, Breakers: 10 },
    { time: '20:00', Potholes: 32, Cracks: 22, Waterlogged: 14, Breakers: 7 },
  ];

  const areaWiseData = [
    { name: 'Downtown', value: 234 },
    { name: 'Highway', value: 456 },
    { name: 'Suburbs', value: 189 },
    { name: 'Rural', value: 121 },
  ];

  return (
    <div className="analytics-layout">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="analytics-main">
        <div className="analytics-container">
          <motion.div
            className="page-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h1>Analytics</h1>
              <p>Comprehensive hazard analysis and insights</p>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            className="metrics-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="metric-card">
              <FiBarChart2 size={24} className="metric-icon" />
              <div>
                <p className="metric-label">Total Detections</p>
                <h3 className="metric-value">1,000+</h3>
                <span className="metric-change">↑ 12% from yesterday</span>
              </div>
            </div>
            <div className="metric-card">
              <FiTrendingUp size={24} className="metric-icon" />
              <div>
                <p className="metric-label">Detection Rate</p>
                <h3 className="metric-value">94.5%</h3>
                <span className="metric-change">↑ 2.1% improvement</span>
              </div>
            </div>
            <div className="metric-card">
              <FiPieChart size={24} className="metric-icon" />
              <div>
                <p className="metric-label">Most Common</p>
                <h3 className="metric-value">Potholes</h3>
                <span className="metric-change">342 detections</span>
              </div>
            </div>
            <div className="metric-card">
              <FiActivity size={24} className="metric-icon" />
              <div>
                <p className="metric-label">Avg Response</p>
                <h3 className="metric-value">124ms</h3>
                <span className="metric-change">↓ 8ms faster</span>
              </div>
            </div>
          </motion.div>

          {/* Charts Grid */}
          <div className="charts-grid">
            {/* Hazard Trends */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <AnalyticsChart
                type="line"
                title="Hazard Trends (7 Days)"
                data={hazardTrendData}
                xKey="time"
                yKey="value"
                color="#38BDF8"
                height={300}
              />
            </motion.div>

            {/* Hazard Distribution */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <AnalyticsChart
                type="pie"
                title="Hazard Type Distribution"
                data={hazardDistribution}
                color="#00FF88"
                height={300}
              />
            </motion.div>

            {/* Daily Detection Count */}
            <motion.div
              className="card card-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <AnalyticsChart
                type="bar"
                title="Daily Detection Count by Type"
                data={dailyDetectionData}
                xKey="time"
                yKey="Potholes"
                color="#FF4757"
                height={300}
              />
            </motion.div>

            {/* Area-wise Analysis */}
            <motion.div
              className="card card-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <AnalyticsChart
                type="bar"
                title="Area-wise Hazard Analysis"
                data={areaWiseData}
                xKey="name"
                yKey="value"
                color="#FFA500"
                height={300}
              />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
