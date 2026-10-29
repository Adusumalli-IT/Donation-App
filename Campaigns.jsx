import { useState } from "react";
function Campaigns() {
  const [sel, setSel] = useState(null);
  const [amt, setAmt] = useState("");
  const [filter, setFilter] = useState("All");
  const list = [
    { id: 1, t: "Food for 100 Kids", c: "Food", r: 3500, g: 10000, e: "🍲", bg: "#ff9800" },
    { id: 2, t: "School Fees", c: "Education", r: 8200, g: 15000, e: "📚", bg: "#2196f3" },
    { id: 3, t: "Medical Help", c: "Medical", r: 12500, g: 50000, e: "🏥", bg: "#e91e63" },
    { id: 4, t: "Clean Water for Village", c: "Food", r: 2000, g: 8000, e: "💧", bg: "#0288d1" },
    { id: 5, t: "Books for Library", c: "Education", r: 4500, g: 6000, e: "📖", bg: "#673ab7" },
    { id: 6, t: "Cancer Treatment", c: "Medical", r: 28000, g: 100000, e: "❤️‍🩹", bg: "#d32f2f" },
  ];
  const show = filter === "All" ? list : list.filter(x => x.c === filter);
  return (
    <div style={{ padding: 20, background: "#f8f9fa", minHeight: "100vh", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>All Campaigns ❤️</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
        {["All", "Food", "Education", "Medical"].map(f => <button key={f} onClick={() => setFilter(f)} style={{ padding: "7px 16px", borderRadius: 20, border: "none", background: filter === f ? "#e91e63" : "#fff", color: filter === f ? "#fff" : "#333", fontWeight: "bold" }}>{f}</button>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 16, maxWidth: 1100, margin: "auto" }}>
        {show.map(x => (
          <div key={x.id} style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 10px #0001" }}>
            <div style={{ height: 150, background: x.bg, display: "flex", justifyContent: "center", alignItems: "center", fontSize: 60 }}>{x.e}</div>
            <div style={{ padding: 15 }}><b>{x.t}</b><p style={{ color: "#666", fontSize: 13 }}>{x.c} • ₹{x.r} / ₹{x.g}</p>
            <button onClick={() => setSel(x)} style={{ width: "100%", padding: 10, background: "#e91e63", color: "#fff", border: "none", borderRadius: 8, fontWeight: "bold" }}>Donate Now</button></div>
          </div>
        ))}
      </div>
      {sel && <div style={{ position: "fixed", inset: 0, background: "#000a", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ background: "#fff", padding: 20, borderRadius: 12, width: 320 }}>
          <h3>Donate to {sel.t}</h3>
          <input placeholder="Amount ₹" value={amt} onChange={e => setAmt(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 10, borderRadius: 8, border: "1px solid #ddd" }} />
          <button onClick={() => { alert(`Thank You! ₹${amt} Donated ❤️`); setSel(null); setAmt(""); }} style={{ width: "100%", padding: 11, background: "#22c55e", color: "#fff", border: "none", borderRadius: 8, fontWeight: "bold" }}>Pay ₹{amt || 0}</button>
          <button onClick={() => setSel(null)} style={{ width: "100%", marginTop: 8, padding: 9, border: "none", borderRadius: 8 }}>Cancel</button>
        </div></div>}
    </div>
  );
}
export default Campaigns;
