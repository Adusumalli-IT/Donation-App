import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const nav = useNavigate();

  const handleSubmit = () => {
    if (isSignup) {
      if (!userName || !email || !pass || !confirmPass) return alert("Fill in all the fields")
      if (pass !== confirmPass) return alert("The password didn't match")
      localStorage.setItem("user", JSON.stringify({ name: userName, email }));
      alert("Signup Success! Welcome " + userName + " ❤️");
      nav("/home");
    } else {
      if (!email || !pass) return alert("Set a password & password")
      localStorage.setItem("user", JSON.stringify({ name: email.split("@")[0], email }));
      nav("/home");
    }
  };

  const inputStyle = { width: "100%", padding: 12, marginBottom: 12, borderRadius: 8, border: "1px solid #ddd", boxSizing: "border-box", fontSize: 15 };

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      height: "100vh", margin: 0, padding: 0, overflow: "hidden",
      backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80')",
      backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
      position: "relative"
    }}>
      {/* Dark Overlay - Image paina box clear ga kanipinchadaniki */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.45)" }}></div>

      <div style={{ position: "relative", background: "#fff", padding: "30px 28px", borderRadius: 14, width: 360, boxShadow: "0 10px 30px #0005" }}>
        <h2 style={{ textAlign: "center", margin: "0 0 6px 0", fontSize: 24 }}>{isSignup ? "Signup ❤️" : "Login ❤️"}</h2>
        <p style={{ textAlign: "center", margin: "0 0 18px 0", color: "#777", fontSize: 13 }}>Addanki - Food, Education & Medical Support</p>

        {isSignup && (
          <input placeholder="User Name" value={userName} onChange={e => setUserName(e.target.value)} style={inputStyle} />
        )}

        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
        <input placeholder="Password" type="password" value={pass} onChange={e => setPass(e.target.value)} style={inputStyle} />

        {isSignup && (
          <input placeholder="Confirm Password" type="password" value={confirmPass} onChange={e => setConfirmPass(e.target.value)} style={inputStyle} />
        )}

        <button onClick={handleSubmit} style={{ width: "100%", padding: 12, background: "#e91e63", color: "#fff", border: "none", borderRadius: 8, fontWeight: "bold", fontSize: 16, cursor: "pointer" }}>
          {isSignup ? "Signup" : "Login"}
        </button>

        <p style={{ textAlign: "center", margin: "12px 0 0 0", color: "#666", fontSize: 14 }}>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsSignup(!isSignup)} style={{ color: "#e91e63", cursor: "pointer", fontWeight: "bold" }}> {isSignup ? "Login" : "Signup"}</span>
        </p>
      </div>
    </div>
  );
}
export default Login;