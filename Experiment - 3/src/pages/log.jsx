import { logs } from "../data/log";

const Log = () => {
  const filteredLogs = logs.filter((log) => log.carbon > 0);

  const getColor = (carbon) => {
    if (carbon > 6) return "#dc2626";
    if (carbon > 3) return "#d97706";
    return "#15803d";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "900px" }}>
        {/* Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h1
            style={{
              fontSize: "1.9rem",
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "0.3rem",
            }}
          >
            Activity Logs
          </h1>
          <p style={{ fontSize: "0.95rem", color: "#4b5563" }}>
            Track your activities and their carbon impact
          </p>
        </div>

        {/* Logs Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#ffffff",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "0.75rem",
                  borderBottom: "2px solid #d1d5db",
                  color: "#1f2937",
                }}
              >
                Activity
              </th>
              <th
                style={{
                  textAlign: "right",
                  padding: "0.75rem",
                  borderBottom: "2px solid #d1d5db",
                  color: "#1f2937",
                }}
              >
                Carbon Emission (kg CO₂)
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log, index) => (
              <tr
                key={log.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f9fafb" : "#ffffff",
                }}
              >
                <td style={{ padding: "0.7rem 0.75rem", color: "#374151" }}>
                  {log.activity}
                </td>
                <td
                  style={{
                    padding: "0.7rem 0.75rem",
                    textAlign: "right",
                    fontWeight: "500",
                    color: getColor(log.carbon),
                  }}
                >
                  {log.carbon}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer Tip */}
        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.85rem",
            color: "#6b7280",
          }}
        >
          Tip: Choose sustainable options like biking, walking, or public
          transport to lower your emissions.
        </p>
      </div>
    </div>
  );
};

export default Log;
