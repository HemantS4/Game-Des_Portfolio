import React from 'react'
import '../styles/ResearchCharts.css'

// Simple bar chart component
export const BarChart = ({ data, title, height = 300 }) => {
  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <div className="chart-container">
      {title && <h4 className="chart-title">{title}</h4>}
      <div className="bar-chart" style={{ height: `${height}px` }}>
        {data.map((item, index) => (
          <div key={index} className="bar-item">
            <div
              className="bar"
              style={{
                height: `${(item.value / maxValue) * 100}%`,
                backgroundColor: item.color || '#ff7849'
              }}
            >
              <span className="bar-value">{item.value}{item.unit || '%'}</span>
            </div>
            <span className="bar-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Horizontal progress bars for comparisons
export const ProgressBars = ({ data, title }) => {
  return (
    <div className="chart-container progress-bars-container">
      {title && <h4 className="chart-title">{title}</h4>}
      <div className="progress-bars">
        {data.map((item, index) => (
          <div key={index} className="progress-item">
            <div className="progress-header">
              <span className="progress-label">{item.label}</span>
              <span className="progress-value">{item.value}{item.unit || '%'}</span>
            </div>
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${item.value}%`,
                  backgroundColor: item.color || '#ff7849'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Stats grid for key numbers
export const StatsGrid = ({ stats, columns = 3 }) => {
  return (
    <div className="stats-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-value" style={{ color: stat.color || '#ff7849' }}>
            {stat.value}
          </div>
          <div className="stat-label">{stat.label}</div>
          {stat.description && <div className="stat-description">{stat.description}</div>}
        </div>
      ))}
    </div>
  )
}

// Pie/Donut chart for distribution
export const DonutChart = ({ data, title, centerLabel }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  let currentAngle = 0

  const segments = data.map(item => {
    const percentage = (item.value / total) * 100
    const angle = (item.value / total) * 360
    const segment = {
      ...item,
      percentage: percentage.toFixed(1),
      startAngle: currentAngle,
      angle: angle
    }
    currentAngle += angle
    return segment
  })

  return (
    <div className="chart-container donut-container">
      {title && <h4 className="chart-title">{title}</h4>}
      <div className="donut-chart-wrapper">
        <svg className="donut-chart" viewBox="0 0 200 200">
          <g transform="translate(100, 100)">
            {segments.map((segment, index) => {
              const startAngle = (segment.startAngle - 90) * (Math.PI / 180)
              const endAngle = (segment.startAngle + segment.angle - 90) * (Math.PI / 180)
              const largeArc = segment.angle > 180 ? 1 : 0

              const x1 = 80 * Math.cos(startAngle)
              const y1 = 80 * Math.sin(startAngle)
              const x2 = 80 * Math.cos(endAngle)
              const y2 = 80 * Math.sin(endAngle)

              const pathData = [
                `M ${x1} ${y1}`,
                `A 80 80 0 ${largeArc} 1 ${x2} ${y2}`,
                `L ${x2 * 0.5} ${y2 * 0.5}`,
                `A 40 40 0 ${largeArc} 0 ${x1 * 0.5} ${y1 * 0.5}`,
                'Z'
              ].join(' ')

              return (
                <path
                  key={index}
                  d={pathData}
                  fill={segment.color || `hsl(${index * 40}, 70%, 60%)`}
                  className="donut-segment"
                />
              )
            })}
            {centerLabel && (
              <text className="donut-center-text" textAnchor="middle" dy="0.3em">
                {centerLabel}
              </text>
            )}
          </g>
        </svg>
        <div className="donut-legend">
          {segments.map((segment, index) => (
            <div key={index} className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: segment.color || `hsl(${index * 40}, 70%, 60%)` }}
              />
              <span className="legend-label">{segment.label}</span>
              <span className="legend-value">{segment.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Timeline visualization
export const Timeline = ({ events, title }) => {
  return (
    <div className="chart-container timeline-container">
      {title && <h4 className="chart-title">{title}</h4>}
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-marker" style={{ backgroundColor: event.color || '#ff7849' }} />
            <div className="timeline-content">
              <div className="timeline-label">{event.label}</div>
              <div className="timeline-description">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Comparison table
export const ComparisonTable = ({ data, title }) => {
  return (
    <div className="chart-container comparison-table-container">
      {title && <h4 className="chart-title">{title}</h4>}
      <div className="comparison-table">
        <div className="comparison-row comparison-header">
          <div className="comparison-cell"></div>
          {data.columns.map((col, index) => (
            <div key={index} className="comparison-cell">{col}</div>
          ))}
        </div>
        {data.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="comparison-row">
            <div className="comparison-cell comparison-row-label">{row.label}</div>
            {row.values.map((value, colIndex) => (
              <div key={colIndex} className="comparison-cell">
                {typeof value === 'boolean' ? (
                  <span className={`check-mark ${value ? 'yes' : 'no'}`}>
                    {value ? '✓' : '✗'}
                  </span>
                ) : (
                  value
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default {
  BarChart,
  ProgressBars,
  StatsGrid,
  DonutChart,
  Timeline,
  ComparisonTable
}
