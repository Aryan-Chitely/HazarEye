import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiVideo,
  FiMap,
  FiBarChart2,
  FiFileText,
  FiSettings,
  FiChevronRight,
} from 'react-icons/fi';
import '../styles/sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', icon: FiHome, path: '/dashboard' },
    { label: 'Live Detection', icon: FiVideo, path: '/live-detection' },
    { label: 'Hazard Map', icon: FiMap, path: '/hazard-map' },
    { label: 'Analytics', icon: FiBarChart2, path: '/analytics' },
    { label: 'Reports', icon: FiFileText, path: '/reports' },
    { label: 'Settings', icon: FiSettings, path: '/settings' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => handleNavigation(item.path)}
              >
                <Icon size={20} />
                <span>{item.label}</span>
                <FiChevronRight size={16} className="chevron" />
              </button>
            );
          })}
        </nav>

        {/* Footer Section */}
        <div className="sidebar-footer">
          <div className="sidebar-card">
            <h4>System Status</h4>
            <div className="status-list">
              <div className="status-item">
                <span>Detection</span>
                <span className="status-badge active">Ready</span>
              </div>
              <div className="status-item">
                <span>Network</span>
                <span className="status-badge active">Online</span>
              </div>
              <div className="status-item">
                <span>Storage</span>
                <span className="status-badge">85%</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
