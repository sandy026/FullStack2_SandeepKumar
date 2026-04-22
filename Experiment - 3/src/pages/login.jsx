import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eef2f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "380px",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          padding: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: "600",
            color: "#065f46",
            marginBottom: "0.5rem",
          }}
        >
          Login
        </h2>

        <p
          style={{
            fontSize: "0.9rem",
            color: "#4b5563",
            marginBottom: "1.5rem",
          }}
        >
          Access your EcoTrack dashboard
        </p>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "0.7rem",
            backgroundColor: "#065f46",
            color: "#ffffff",
            border: "none",
            fontSize: "0.95rem",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>

        <p
          style={{
            marginTop: "1.3rem",
            fontSize: "0.8rem",
            color: "#6b7280",
          }}
        >
          Simple authentication demo
        </p>
      </div>
    </div>
  );
};

export default Login;
