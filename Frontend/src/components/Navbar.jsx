import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiBell,
  FiUser,
  FiMenu,
  FiX,
  FiTrendingUp,
  FiWifi,
  FiMapPin,
} from 'react-icons/fi';
import '../styles/navbar.css';

const Navbar = ({ toggleSidebar, sidebarOpen }) => {
  const navigate = useNavigate();
  const [notificationOpen, setNotificationOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section */}
        <div className="navbar-left">
          <button
            className="menu-toggle"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>

          <div className="logo" onClick={() => navigate('/')}>
            <span className="logo-icon">◆</span>
            <span className="logo-text">HazarEye</span>
          </div>
        </div>

        {/* Center Section - Status */}
        <div className="navbar-center">
          <div className="status-item">
            <div className="status-icon">
              <FiTrendingUp size={16} />
            </div>
            <div className="status-text">
              <span className="status-label">AI Engine</span>
              <span className="status-value">Active</span>
            </div>
          </div>

          <div className="divider" />

          <div className="status-item">
            <div className="status-icon">
              <FiWifi size={16} />
            </div>
            <div className="status-text">
              <span className="status-label">System</span>
              <span className="status-value">Online</span>
            </div>
          </div>

          <div className="divider" />

          <div className="status-item">
            <div className="status-icon">
              <FiMapPin size={16} />
            </div>
            <div className="status-text">
              <span className="status-label">GPS</span>
              <span className="status-value">Connected</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <div className="notification-container">
            <button
              className="notification-btn"
              onClick={() => setNotificationOpen(!notificationOpen)}
              aria-label="Notifications"
            >
              <FiBell size={20} />
              <span className="notification-badge">3</span>
            </button>

            {notificationOpen && (
              <div className="notification-dropdown">
                <div className="notification-item">
                  <div className="notification-dot" />
                  <div>
                    <p>Pothole detected</p>
                    <span>2 min ago</span>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="notification-dot" />
                  <div>
                    <p>Speed breaker ahead</p>
                    <span>5 min ago</span>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="notification-dot" />
                  <div>
                    <p>System update available</p>
                    <span>1 hour ago</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="user-btn">
            <FiUser size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;