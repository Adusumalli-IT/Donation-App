import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Login data clear
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    sessionStorage.clear();

    // Signup page ki pampali
    alert("Logged out successfully!");
    navigate("/signup");
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#fef9f5", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "20px" }}>
      <div style={{ background: "white", padding: "40px 30px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)", maxWidth: "400px", width: "100%" }}>
        <div style={{ fontSize: "50px" }}>👋</div>
        <h1 style={{ fontSize: "26px", margin: "10px 0" }}>Are you sure you want to Logout?</h1>
        <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
          You will be logged out of your account.<br />
          You can signup again anytime to donate.
        </p>

        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
          <button onClick={handleLogout} style={{ padding: "10px 22px", background: "#5b2a7a", color: "white", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>
            Yes, Logout
          </button>
          <Link to="/" style={{ padding: "10px 22px", background: "white", color: "#333", border: "1px solid #ccc", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Logout;