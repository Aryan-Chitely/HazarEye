import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import '../styles/analytics-chart.css';

const AnalyticsChart = ({
  type = 'line',
  title,
  data,
  xKey = 'time',
  yKey = 'value',
  color = '#38BDF8',
  secondaryColor,
  height = 300,
}) => {
  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.1)" />
              <XAxis dataKey={xKey} stroke="rgba(148,163,184,0.5)" />
              <YAxis stroke="rgba(148,163,184,0.5)" />
              <Tooltip
                contentStyle={{
                  background: 'rgba(15,23,42,0.9)',
                  border: '1px solid rgba(56,189,248,0.3)',
                  borderRadius: '8px',
                  boxShadow: '0 0 20px rgba(56,189,248,0.2)',
                }}
                cursor={{ stroke: color, strokeWidth: 2 }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey={yKey}
                stroke={color}
                strokeWidth={2}
                dot={{ fill: color, r: 4 }}
                activeDot={{ r: 6 }}
                fillOpacity={1}
                fill="url(#colorGradient)"
              />
              {secondaryColor && (
                <Line
                  type="monotone"
                  dataKey={secondaryColor.key}
                  stroke={secondaryColor.color}
                  strokeWidth={2}
                  dot={{ fill: secondaryColor.color, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.1)" />
              <XAxis dataKey={xKey} stroke="rgba(148,163,184,0.5)" />
              <YAxis stroke="rgba(148,163,184,0.5)" />
              <Tooltip
                contentStyle={{
                  background: 'rgba(15,23,42,0.9)',
                  border: '1px solid rgba(56,189,248,0.3)',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey={yKey} fill={color} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill={color}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      [
                        '#38BDF8',
                        '#00FF88',
                        '#FFA500',
                        '#FF4757',
                        '#60A5FA',
                      ][index % 5]
                    }
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: 'rgba(15,23,42,0.9)',
                  border: '1px solid rgba(56,189,248,0.3)',
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <div className="analytics-chart">
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-container">{renderChart()}</div>
    </div>
  );
};

export default AnalyticsChart;