import { useNavigate } from "react-router-dom";
function Navbar() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const logout = () => { localStorage.removeItem("user"); nav("/"); };
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 20px", background: "#fff", boxShadow: "0 2px 8px #0001", alignItems: "center" }}>
      <b style={{ color: "#e91e63", fontSize: 20, cursor: "pointer" }} onClick={() => nav("/home")}>❤️ Donate</b>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => nav("/home")}>Home</button>
        <button onClick={() => nav("/about")}>About</button>
        <button onClick={() => nav("/categories")}>Categories</button>
        <button onClick={() => nav("/campaigns")}>Campaigns</button>
        <button onClick={() => nav("/contact")}>Contact</button>
        {user ? <button onClick={logout} style={{ background: "#ef4444", color: "#fff", border: "none", padding: "7px 14px", borderRadius: 7 }}>Logout</button>
        : <button onClick={() => nav("/")} style={{ background: "#e91e63", color: "#fff", border: "none", padding: "7px 14px", borderRadius: 7 }}>Login</button>}
      </div>
    </div>
  );
}
export default Navbar;