import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiVideo,
  FiAlertCircle,
  FiBarChart2,
  FiActivity,
} from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CameraFeed from '../components/CameraFeed';
import AnalyticsChart from '../components/AnalyticsChart';
import '../styles/live-detection.css';

const LiveDetection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [detectionLogs, setDetectionLogs] = useState([
    { id: 1, type: 'Pothole', confidence: 94, time: '14:32:15', location: 'Sector A-1' },
    { id: 2, type: 'Crack', confidence: 87, time: '14:31:42', location: 'Sector B-2' },
    { id: 3, type: 'Speed Breaker', confidence: 92, time: '14:30:58', location: 'Sector A-3' },
    { id: 4, type: 'Waterlogged', confidence: 89, time: '14:29:30', location: 'Sector C-1' },
    { id: 5, type: 'Pothole', confidence: 85, time: '14:28:12', location: 'Sector B-4' },
  ]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const confidenceData = [
    { time: '00:00', high: 45, medium: 30, low: 15 },
    { time: '04:00', high: 52, medium: 28, low: 18 },
    { time: '08:00', high: 65, medium: 35, low: 22 },
    { time: '12:00', high: 78, medium: 42, low: 25 },
    { time: '16:00', high: 82, medium: 45, low: 28 },
    { time: '20:00', high: 72, medium: 40, low: 24 },
  ];

  return (
    <div className="live-detection-layout">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="live-detection-main">
        <div className="live-detection-container">
          <motion.div
            className="page-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h1>Live Detection</h1>
              <p>Real-time hazard detection and monitoring</p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="detection-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="stat-box">
              <FiVideo size={24} />
              <div>
                <p>Detections (Today)</p>
                <h3>342</h3>
              </div>
            </div>
            <div className="stat-box">
              <FiActivity size={24} />
              <div>
                <p>Avg Confidence</p>
                <h3>89.5%</h3>
              </div>
            </div>
            <div className="stat-box">
              <FiBarChart2 size={24} />
              <div>
                <p>Processing Speed</p>
                <h3>124ms</h3>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="detection-grid">
            {/* Left Column */}
            <div className="detection-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <CameraFeed />
              </motion.div>

              {/* Confidence Scores */}
              <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <AnalyticsChart
                  type="bar"
                  title="Confidence Scores Distribution"
                  data={confidenceData}
                  xKey="time"
                  yKey="high"
                  color="#38BDF8"
                  height={250}
                />
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="detection-right">
              {/* Detection Logs */}
              <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h3 className="card-title">Detection Logs</h3>
                <div className="logs-list">
                  {detectionLogs.map((log) => (
                    <div key={log.id} className="log-entry">
                      <div className="log-header">
                        <span className="log-type">{log.type}</span>
                        <span className="log-time">{log.time}</span>
                      </div>
                      <div className="log-details">
                        <span className="log-location">{log.location}</span>
                        <span className="log-confidence">{log.confidence}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Live Status Panel */}
              <motion.div
                className="card live-status-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <h3 className="card-title">Live Status</h3>
                <div className="status-items">
                  <div className="status-line">
                    <span>Camera Feed</span>
                    <span className="status-badge online">● Online</span>
                  </div>
                  <div className="status-line">
                    <span>AI Engine</span>
                    <span className="status-badge active">● Active</span>
                  </div>
                  <div className="status-line">
                    <span>Network</span>
                    <span className="status-badge online">● Connected</span>
                  </div>
                  <div className="status-line">
                    <span>Processing</span>
                    <span className="status-badge processing">● Processing</span>
                  </div>
                </div>

                {/* Alert History */}
                <div className="alert-history">
                  <h4>Recent Alerts</h4>
                  <div className="alert-count">
                    <span className="alert-label">Critical</span>
                    <span className="alert-value critical">3</span>
                  </div>
                  <div className="alert-count">
                    <span className="alert-label">Warning</span>
                    <span className="alert-value warning">8</span>
                  </div>
                  <div className="alert-count">
                    <span className="alert-label">Info</span>
                    <span className="alert-value info">24</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LiveDetection;
