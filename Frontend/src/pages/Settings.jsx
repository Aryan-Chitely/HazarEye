import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/settings.css';

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    alerts: true,
    emailNotifications: false,
    gpsTracking: true,
    autoCapture: true,
    dataCollection: true,
  });

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const settingGroups = [
    {
      title: 'Theme Settings',
      settings: [
        {
          key: 'darkMode',
          label: 'Dark Mode',
          description: 'Enable dark theme for better visibility at night',
        },
      ],
    },
    {
      title: 'Alert Settings',
      settings: [
        {
          key: 'notifications',
          label: 'In-app Notifications',
          description: 'Receive real-time hazard notifications in the app',
        },
        {
          key: 'alerts',
          label: 'Sound Alerts',
          description: 'Play sound when hazards are detected',
        },
        {
          key: 'emailNotifications',
          label: 'Email Notifications',
          description: 'Receive daily summary emails',
        },
      ],
    },
    {
      title: 'GPS Settings',
      settings: [
        {
          key: 'gpsTracking',
          label: 'GPS Tracking',
          description: 'Enable GPS for accurate location tracking',
        },
        {
          key: 'autoCapture',
          label: 'Auto Capture',
          description: 'Automatically capture hazard location',
        },
      ],
    },
    {
      title: 'System Configuration',
      settings: [
        {
          key: 'dataCollection',
          label: 'Data Collection',
          description: 'Help improve AI by sharing anonymous detection data',
        },
      ],
    },
  ];

  return (
    <div className="settings-layout">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="settings-main">
        <div className="settings-container">
          <motion.div
            className="page-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h1>Settings</h1>
              <p>Customize your HazarEye experience</p>
            </div>
          </motion.div>

          {/* Settings Groups */}
          {settingGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="settings-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + groupIndex * 0.1 }}
            >
              <h3 className="group-title">{group.title}</h3>
              <div className="settings-list">
                {group.settings.map((setting) => (
                  <div key={setting.key} className="setting-item">
                    <div className="setting-content">
                      <p className="setting-label">{setting.label}</p>
                      <p className="setting-description">
                        {setting.description}
                      </p>
                    </div>
                    <button
                      className="toggle-btn"
                      onClick={() => handleToggle(setting.key)}
                    >
                      {settings[setting.key] ? (
                        <FiToggleRight size={32} />
                      ) : (
                        <FiToggleLeft size={32} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* System Info */}
          <motion.div
            className="settings-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h3 className="group-title">System Information</h3>
            <div className="system-info">
              <div className="info-item">
                <span>App Version</span>
                <span className="info-value">1.0.0</span>
              </div>
              <div className="info-item">
                <span>Build Number</span>
                <span className="info-value">2024.06.05</span>
              </div>
              <div className="info-item">
                <span>Last Updated</span>
                <span className="info-value">June 5, 2024</span>
              </div>
              <div className="info-item">
                <span>Status</span>
                <span className="info-value online">● Online</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="settings-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <button className="btn btn-secondary">Save Settings</button>
            <button className="btn btn-ghost">Reset to Default</button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
