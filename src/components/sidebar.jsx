function Sidebar({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <div className="sidebar">
      <h3>Progress</h3>

      <svg width="140" height="140">
        {/* Background Circle */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="none"
        />

        {/* Progress Circle */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="#2563eb"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
        />

        {/* Percentage Text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="6"
          fontSize="18"
          fill="#333"
        >
          {percentage}%
        </text>
      </svg>

      <div className="stats">
        <p>Total: {total}</p>
        <p>Completed: {completed}</p>
        <p>Pending: {pending}</p>
      </div>
    </div>
  );
}

export default Sidebar;
