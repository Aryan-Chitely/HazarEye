import React from 'react';
import { motion } from 'framer-motion';
import {
  FiTrendingUp,
  FiTrendingDown,
  FiArrowRight,
} from 'react-icons/fi';
import '../styles/stat-card.css';

const StatCard = ({
  icon: Icon,
  title,
  value,
  trend,
  trendValue,
  color = '#38BDF8',
  description,
}) => {
  const isTrendingUp = trend === 'up';

  return (
    <motion.div
      className="stat-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="stat-card-header">
        <div className="stat-icon" style={{ color }}>
          {Icon && <Icon size={24} />}
        </div>
        <div className="stat-trend">
          {isTrendingUp ? (
            <FiTrendingUp size={18} className="trend-up" />
          ) : (
            <FiTrendingDown size={18} className="trend-down" />
          )}
          <span className={isTrendingUp ? 'trend-up' : 'trend-down'}>
            {trendValue}%
          </span>
        </div>
      </div>

      <div className="stat-card-body">
        <p className="stat-title">{title}</p>
        <h3 className="stat-value">{value}</h3>
        {description && <p className="stat-description">{description}</p>}
      </div>

      <div className="stat-card-footer">
        <span className="stat-label">vs last 24h</span>
        <FiArrowRight size={16} />
      </div>
    </motion.div>
  );
};

export default StatCard;