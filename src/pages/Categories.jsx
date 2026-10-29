import { useNavigate } from "react-router-dom";
function Categories() {
  const nav = useNavigate();
  const list = [{ n: "Food", e: "🍲", bg: "#ff9800" }, { n: "Education", e: "📚", bg: "#2196f3" }, { n: "Medical", e: "🏥", bg: "#e91e63" }];
  return (
    <div style={{ padding: 20, textAlign: "center", fontFamily: "Arial" }}>
      <h1>Browse by Category ❤️</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16, maxWidth: 1000, margin: "20px auto" }}>
        {list.map(x => <div key={x.n} onClick={() => nav("/campaigns")} style={{ background: "#fff", borderRadius: 12, padding: 20, cursor: "pointer", boxShadow: "0 4px 10px #0001" }}>
          <div style={{ height: 120, background: x.bg, borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", fontSize: 60 }}>{x.e}</div>
          <h2>{x.n}</h2><button style={{ background: "#e91e63", color: "#fff", border: "none", padding: "9px 18px", borderRadius: 8 }}>View Campaigns →</button>
        </div>)}
      </div>
    </div>
  );
}
export default Categories;
