import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const categories = [
    { name: "Food", emoji: "🍲", desc:"Daily meals for needy families"},
    { name: "Education", emoji: "📚", desc: " Books,School fees and supplies for children",color: "#e3f2fd" },
    { name: "Medical", emoji: "🏥", desc: "Hospital bills and medicines for patients", color: "#e8f5e9" },
  ];

  const campaigns = [
    { title: "Vinukonda Food Drive", raised: "₹12,500", goal: "₹20,000", percent: 62, color: "#ff7043" },
    { title: "School Bags for Kids", raised: "₹8,200", goal: "₹15,000", percent: 54, color: "#42a5f5" },
    { title: "Clean Water for Village", raised: "₹18,000", goal: "₹25,000", percent: 72, color: "#66bb6a" },
  ];

  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh", fontFamily: "Arial" }}>

      {/* HERO - IMAGE LEDU, PLAIN COLOR MATREME */}
      <div style={{
        background: "#e91e63", padding: "50px 20px", textAlign: "center", color: "#fff"
      }}>
        <h1 style={{ fontSize: 36, margin: "0 0 8px 0" }}>Help Others, Change Lives ❤️</h1>
        <p style={{ fontSize: 16, margin: "0 0 18px 0" }}>Hi {user.name || "Friend"}, Donate Food, Education & Medical help in Addanki</p>
        <button onClick={() => nav("/donate")} style={{ background: "#fff", color: "#e91e63", border: "none", padding: "12px 25px", borderRadius: 25, fontSize: 16, fontWeight: "bold", cursor: "pointer" }}>Donate Now ❤️</button>
      </div>

      {/* CATEGORIES - NO IMAGES */}
      <div style={{ padding: "25px", maxWidth: 1000, margin: "auto" }}>
        <h2 style={{ textAlign: "center" }}>Categories</h2>
        <div style={{ display: "flex", gap: 15, justifyContent: "center", flexWrap: "wrap" }}>
          {categories.map(c => (
            <div key={c.name} onClick={() => nav("/donate")} style={{ width: 280, background: c.color, borderRadius: 12, padding: 20, textAlign: "center", cursor: "pointer" }}>
              <div style={{ fontSize: 40 }}>{c.emoji}</div>
              <b style={{ fontSize: 19 }}>{c.name}</b>
              <p style={{ color: "#666", margin: "6px 0 0 0", fontSize: 13 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* CAMPAIGNS - NO IMAGES, ONLY TEXT + PROGRESS BAR */}
        <h2 style={{ textAlign: "center", marginTop: 35 }}>Live Campaigns</h2>
        <div style={{ display: "flex", gap: 15, justifyContent: "center", flexWrap: "wrap" }}>
          {campaigns.map(cam => (
            <div key={cam.title} style={{ width: 280, background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 2px 8px #0001" }}>
              <b style={{ fontSize: 16 }}>{cam.title}</b>
              <p style={{ fontSize: 13, color: "#666", margin: "8px 0" }}>{cam.raised} raised of {cam.goal}</p>
              <div style={{ background: "#eee", height: 8, borderRadius: 5, overflow: "hidden", marginBottom: 12 }}>
                <div style={{ width: cam.percent + "%", background: cam.color, height: "100%" }}></div>
              </div>
              <button onClick={() => nav("/donate")} style={{ width: "100%", background: "#e91e63", color: "#fff", border: "none", padding: 9, borderRadius: 7, cursor: "pointer", fontWeight: "bold" }}>Donate</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;