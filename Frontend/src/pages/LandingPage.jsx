import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiTrendingUp,
  FiMapPin,
  FiBarChart2,
  FiShield,
  FiZap,
} from 'react-icons/fi';
import '../styles/landing.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Detections', value: '2.5M+' },
    { label: 'Coverage', value: '500K+ km' },
    { label: 'Accuracy', value: '94.5%' },
    { label: 'Active Users', value: '50K+' },
  ];

  const features = [
    {
      icon: FiMapPin,
      title: 'Real-time Detection',
      description:
        'AI-powered hazard detection with millisecond response time',
    },
    {
      icon: FiBarChart2,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into road hazard patterns',
    },
    {
      icon: FiShield,
      title: 'Safety First',
      description:
        'Designed to prevent accidents before they happen',
    },
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Process 1000+ detections per second',
    },
    {
      icon: FiTrendingUp,
      title: 'Smart Mapping',
      description: 'Interactive maps with real-time hazard location',
    },
    {
      icon: FiShield,
      title: 'IoT Integration',
      description: 'Seamless integration with smart vehicle systems',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="landing-page">
      {/* Background Elements */}
      <div className="landing-background">
        <div className="gradient-blob blob-1" />
        <div className="gradient-blob blob-2" />
        <div className="gradient-blob blob-3" />
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            className="hero-logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="logo-symbol">◆</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            AI-Powered Road Hazard Detection
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Real-time detection, smart mapping, and driver assistance for safer Indian roads
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <button
              className="btn btn-primary btn-large"
              onClick={() => navigate('/dashboard')}
            >
              <span>Launch Dashboard</span>
              <FiArrowRight />
            </button>
            <button className="btn btn-secondary btn-large">
              Learn More
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item-hero"
                variants={itemVariants}
              >
                <h3 className="stat-value-hero">{stat.value}</h3>
                <p className="stat-label-hero">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Visualization */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-card">
            <div className="card-header">System Status</div>
            <div className="card-line"></div>
            <div className="card-content">
              <div className="status-indicator active">● Live</div>
              <div className="status-indicator">● Connected</div>
              <div className="status-indicator">● Ready</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Why Choose HazarEye?</h2>
          <p>Cutting-edge AI technology for road safety</p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
              >
                <div className="feature-icon">
                  <Icon size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Revolutionize Road Safety?</h2>
          <p>Join thousands of drivers using HazarEye</p>
          <button
            className="btn btn-primary btn-large"
            onClick={() => navigate('/dashboard')}
          >
            Get Started
            <FiArrowRight />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;