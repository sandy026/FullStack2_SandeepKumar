import { logs } from "../data/logs";

const Dashboard = () => {
  const validLogs = logs.filter(log => log.carbon > 0);

  const totalCarbon = validLogs.reduce(
    (sum, log) => sum + log.carbon,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <p>
        <strong>Total Carbon Footprint:</strong> {totalCarbon} kg
      </p>

      <ul>
        {validLogs.map(log => (
          <li key={log.id}>
            {log.activity} → {log.carbon} kg
          </li>
        ))}
      </ul>

      <h2>Daily logs</h2>

      <ul>
        {validLogs.map(log => {
          const isLow = log.carbon <= 3;

          return (
            <li key={log.id}>
              {log.activity} = {log.carbon} kg —{" "}
              <strong>
                {isLow ? "Low Pollution 🟢" : "High Pollution 🔴"}
              </strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dashboard;