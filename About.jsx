function About() {
  return (
    <div style={{ maxWidth: 900, margin: "30px auto", padding: "0 20px", fontFamily: "Arial" }}>

      {/* 1. TOP BOX */}
      <div style={{ background: "#e91e63", color: "#fff", padding: "35px 25px", borderRadius: 16, textAlign: "center" }}>
        <h1 style={{ margin: "0 0 10px 0" }}>About Us ❤️</h1>
        <p style={{ margin: 0, lineHeight: 1.6, fontSize: 15 }}>
          We help people in Addanki by providing Food, Education & Medical support.
          <br />Our mission is simple-No one should sleep hungry
        </p>
      </div>

      {/* 2. 3 CARDS - Ivi lekapothe empty la untundi */}
      <div style={{ display: "flex", gap: 15, marginTop: 20, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 200, background: "#fff3e0", padding: 22, borderRadius: 14, textAlign: "center" }}>
          <div style={{ fontSize: 40 }}>🍲</div>
          <h3 style={{ margin: "8px 0 5px 0" }}>Food</h3>
          <p style={{ fontSize: 13, color: "#666", margin: 0 }}>Daily meals,Food drives and Festival meals</p>
        </div>
        <div style={{ flex: 1, minWidth: 200, background: "#e3f2fd", padding: 22, borderRadius: 14, textAlign: "center" }}>
          <div style={{ fontSize: 40 }}>📚</div>
          <h3 style={{ margin: "8px 0 5px 0" }}>Education</h3>
          <p style={{ fontSize: 13, color: "#666", margin: 0 }}>Books,bags and School Fees support for children</p>
        </div>
        <div style={{ flex: 1, minWidth: 200, background: "#e8f5e9", padding: 22, borderRadius: 14, textAlign: "center" }}>
          <div style={{ fontSize: 40 }}>🏥</div>
          <h3 style={{ margin: "8px 0 5px 0" }}>Medical</h3>
          <p style={{ fontSize: 13, color: "#666", margin: 0 }}>Medicines,Hospital expenses and Health camps</p>
        </div>
      </div>

      {/* 3. STATS */}
      <div style={{ background: "#fff", padding: 25, borderRadius: 14, marginTop: 20, textAlign: "center", boxShadow: "0 2px 10px #0001", border: "1px solid #eee" }}>
        <h2 tyle={{ margin: "0 0 15px 0" }}>What We Have Achieved Together </h2>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          <div><b style={{ fontSize: 26, color: "#e91e63", display: "block" }}>500+</b><span style={{ fontSize: 13, color: "#777" }}>Families Helped</span></div>
          <div><b style={{ fontSize: 26, color: "#e91e63", display: "block" }}>120+</b><span style={{ fontSize: 13, color: "#777" }}>Students</span></div>
          <div><b style={{ fontSize: 26, color: "#e91e63", display: "block" }}>50+</b><span style={{ fontSize: 13, color: "#777" }}>Medical Cases</span></div>
        </div>
      </div>

      {/* 4. MISSION */}
      <div style={{ marginTop: 20, marginBottom: 30, background: "#fdf2f5", padding: 20, borderRadius: 14, borderLeft: "5px solid #e91e63" }}>
        <h3 style={{ margin: "0 0 8px 0" }}> Our Mission</h3>
        <p style={{ margin: 0, color: "#555", fontSize: 14, lineHeight: 1.6 }}> To provide food,education and healthcare to everyone in Addanki.Even a small Hekp for  make a big change.With your one donation, a family gets hope for a better tomorrow.
        </p>
      </div>

    </div>
  );
}
export default About;