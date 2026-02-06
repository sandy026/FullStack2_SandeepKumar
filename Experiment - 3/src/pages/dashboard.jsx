import { logs } from "../data/log";

const Dashboard = () => {
  const totalCarbon = logs.reduce((acc, log) => acc + log.carbon, 0);

  const level =
    totalCarbon > 15 ? "High" : totalCarbon > 8 ? "Moderate" : "Low";

  const barWidth =
    totalCarbon > 20 ? "100%" : `${(totalCarbon / 20) * 100}%`;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eef2f7",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          border: "1px solid #d1d5db",
          padding: "1.8rem",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "1.7rem",
            fontWeight: "600",
            color: "#1f2937",
            marginBottom: "0.5rem",
          }}
        >
          Environmental Impact Summary
        </h1>

        <p
          style={{
            fontSize: "0.9rem",
            color: "#4b5563",
            marginBottom: "1.5rem",
          }}
        >
          Carbon emissions calculated from logged activities
        </p>

        {/* Total Value */}
        <div style={{ marginBottom: "1.4rem" }}>
          <p
            style={{
              fontSize: "0.85rem",
              color: "#6b7280",
              marginBottom: "0.2rem",
            }}
          >
            Total Carbon Emission
          </p>

          <p
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#065f46",
            }}
          >
            {totalCarbon} kg CO₂
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div
            style={{
              height: "12px",
              backgroundColor: "#e5e7eb",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: barWidth,
                backgroundColor:
                  level === "High"
                    ? "#dc2626"
                    : level === "Moderate"
                    ? "#d97706"
                    : "#16a34a",
              }}
            />
          </div>

          <p
            style={{
              marginTop: "0.4rem",
              fontSize: "0.85rem",
              color: "#374151",
            }}
          >
            Emission Level: <strong>{level}</strong>
          </p>
        </div>

        {/* Info Box */}
        <div
          style={{
            backgroundColor: "#f9fafb",
            border: "1px dashed #9ca3af",
            padding: "1rem",
            fontSize: "0.85rem",
            color: "#374151",
          }}
        >
          Lower carbon emissions can be achieved by reducing fuel usage,
          conserving electricity, and adopting sustainable practices.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
