import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Campaigns from "./pages/Campaigns";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

function App() {
  const nav = useNavigate();
  const location = useLocation();

  // Login page lo navbar kanipinchakudadu
  const isLoginPage = location.pathname === "/";

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    border: "1px solid #ddd",
    padding: "5px 10px",
    background: "#fff",
    fontSize: 14
  };

  return (
    <div style={{ fontFamily: "Arial" }}>

      {/* TOP NAVBAR - Login lo matram kanipinchadu */}
      {!isLoginPage && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 25px", background: "#fff", boxShadow: "0 2px 8px #0001" }}>
          <b style={{ color: "#e91e63", fontSize: 20, cursor: "pointer" }} onClick={() => nav("/home")}>❤️ Donate</b>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Link to="/home" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/categories" style={linkStyle}>Categories</Link>
            <Link to="/campaigns" style={linkStyle}>Campaigns</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
            <button onClick={() => { localStorage.removeItem("user"); nav("/"); }} style={{ background: "#e91e63", color: "#fff", border: "none", borderRadius: 5, padding: "6px 12px", cursor: "pointer" }}>Logout</button>
          </div>
        </div>
      )}

      {/* ALL PAGES ROUTES */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>

    </div>
  );
}
export default App;