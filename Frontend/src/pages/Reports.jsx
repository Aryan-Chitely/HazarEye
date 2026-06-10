import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiFilter, FiSearch } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/reports.css';

const Reports = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const reports = [
    {
      id: 1,
      title: 'Daily Detection Report',
      date: '2024-06-05',
      detections: 342,
      avgConfidence: 89.5,
      format: 'PDF',
    },
    {
      id: 2,
      title: 'Weekly Hazard Summary',
      date: '2024-05-29 to 2024-06-05',
      detections: 2145,
      avgConfidence: 88.2,
      format: 'Excel',
    },
    {
      id: 3,
      title: 'Monthly Performance Report',
      date: '2024-06-01 to 2024-06-05',
      detections: 8932,
      avgConfidence: 87.9,
      format: 'PDF',
    },
    {
      id: 4,
      title: 'Area-wise Analysis',
      date: '2024-06-05',
      detections: 1234,
      avgConfidence: 90.1,
      format: 'Excel',
    },
  ];

  return (
    <div className="reports-layout">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="reports-main">
        <div className="reports-container">
          <motion.div
            className="page-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h1>Reports</h1>
              <p>Download and manage your detection reports</p>
            </div>
          </motion.div>

          {/* Summary Section */}
          <motion.div
            className="summary-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="summary-card">
              <p className="summary-label">Today's Detections</p>
              <h3 className="summary-value">342</h3>
            </div>
            <div className="summary-card">
              <p className="summary-label">This Week</p>
              <h3 className="summary-value">2,145</h3>
            </div>
            <div className="summary-card">
              <p className="summary-label">This Month</p>
              <h3 className="summary-value">8,932</h3>
            </div>
            <div className="summary-card">
              <p className="summary-label">Average Accuracy</p>
              <h3 className="summary-value">89.5%</h3>
            </div>
          </motion.div>

          {/* Filter and Search */}
          <motion.div
            className="reports-controls"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="search-box">
              <FiSearch size={18} />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="filter-btn">
              <FiFilter size={18} />
              Filter
            </button>
          </motion.div>

          {/* Reports Table */}
          <motion.div
            className="card reports-table-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="card-title">Available Reports</h3>
            <div className="table-wrapper">
              <table className="reports-table">
                <thead>
                  <tr>
                    <th>Report</th>
                    <th>Date</th>
                    <th>Detections</th>
                    <th>Avg Confidence</th>
                    <th>Format</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.id}>
                      <td className="report-name">{report.title}</td>
                      <td>{report.date}</td>
                      <td className="report-metric">{report.detections}</td>
                      <td className="report-metric">{report.avgConfidence}%</td>
                      <td>
                        <span className="format-badge">{report.format}</span>
                      </td>
                      <td>
                        <button className="download-btn">
                          <FiDownload size={16} />
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Generate Report */}
          <motion.div
            className="card generate-report"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="card-title">Generate Custom Report</h3>
            <div className="generate-form">
              <div className="form-group">
                <label>Report Type</label>
                <select>
                  <option>Daily Summary</option>
                  <option>Weekly Summary</option>
                  <option>Monthly Summary</option>
                  <option>Custom Date Range</option>
                </select>
              </div>
              <div className="form-group">
                <label>Format</label>
                <select>
                  <option>PDF</option>
                  <option>Excel</option>
                  <option>CSV</option>
                </select>
              </div>
              <button className="btn btn-primary">Generate Report</button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
