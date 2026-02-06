import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Header = ({ title }) => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        padding: "0.9rem 1.8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* App Name */}
      <h1
        style={{
          fontSize: "1.4rem",
          fontWeight: "600",
          color: "#065f46",
          margin: 0,
        }}
      >
        {title}
      </h1>

      {/* Links */}
      <nav style={{ display: "flex", gap: "1.4rem" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#374151",
            fontSize: "0.95rem",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/log"
          style={{
            textDecoration: "none",
            color: "#374151",
            fontSize: "0.95rem",
          }}
        >
          Logs
        </Link>
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogOut}
        style={{
          backgroundColor: "transparent",
          border: "1px solid #dc2626",
          color: "#dc2626",
          padding: "0.35rem 0.9rem",
          borderRadius: "4px",
          fontSize: "0.85rem",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
