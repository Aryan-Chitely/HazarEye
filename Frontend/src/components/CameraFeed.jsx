import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiPause, FiRotateCw } from 'react-icons/fi';
import '../styles/camera-feed.css';

const CameraFeed = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [detections, setDetections] = useState([
    { id: 1, type: 'Pothole', confidence: 94, x: 45, y: 55 },
    { id: 2, type: 'Crack', confidence: 87, x: 72, y: 38 },
  ]);

  return (
    <div className="camera-feed">
      <div className="feed-header">
        <h3>Live Camera Feed</h3>
        <div className="feed-status">
          <span className="status-dot active" />
          <span>Live</span>
        </div>
      </div>

      <div className="feed-container">
        {/* Placeholder for actual camera feed */}
        <div className="feed-placeholder">
          <div className="feed-grid">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="grid-line" />
            ))}
          </div>

          {/* Detection Overlays */}
          {detections.map((detection) => (
            <motion.div
              key={detection.id}
              className="detection-box"
              style={{ left: `${detection.x}%`, top: `${detection.y}%` }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="detection-label">
                <span>{detection.type}</span>
                <span className="confidence">{detection.confidence}%</span>
              </div>
            </motion.div>
          ))}

          <div className="feed-overlay">Camera Feed (Demo)</div>
        </div>
      </div>

      <div className="feed-controls">
        <button
          className="control-btn"
          onClick={() => setIsPlaying(!isPlaying)}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <FiPause size={18} /> : <FiPlay size={18} />}
        </button>
        <button className="control-btn" title="Reset">
          <FiRotateCw size={18} />
        </button>
      </div>

      <div className="feed-info">
        <div className="info-item">
          <span>Detections:</span>
          <strong>{detections.length}</strong>
        </div>
        <div className="info-item">
          <span>Avg Confidence:</span>
          <strong>
            {(
              detections.reduce((acc, d) => acc + d.confidence, 0) /
              detections.length
            ).toFixed(1)}
            %
          </strong>
        </div>
      </div>
    </div>
  );
};

export default CameraFeed;