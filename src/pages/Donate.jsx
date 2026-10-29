import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Donate() {
  const location = useLocation();
  const navigate = useNavigate();
  const campaign = location.state?.campaign;

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [done, setDone] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    if (!name || !amount) {
      alert("Please enter name and amount!");
      return;
    }

    // History lo save cheyali - Home & Campaigns lo kanipisthundi
    const old = JSON.parse(localStorage.getItem("donations") || "[]");
    const newDonation = {
      name: name,
      amount: amount,
      category: campaign ? campaign.title : "General Donation",
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    };
    old.push(newDonation);
    localStorage.setItem("donations", JSON.stringify(old));
    setDone(true);
  };

  // Success ayyaka chupinchedi
  if (done) {
    return (
      <div style={{ fontFamily: "Arial", background: "#fef9f5", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", textAlign: "center" }}>
        <div style={{ background: "white", padding: "30px", borderRadius: "12px", maxWidth: "400px", width: "100%", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" }}>
          <div style={{ fontSize: "50px" }}>🎉</div>
          <h2 style={{ margin: "10px 0 5px" }}>Thank You, {name}!</h2>
          <p style={{ color: "#555", fontSize: "14px" }}>You donated <b>₹{amount}</b> for <b>{campaign ? campaign.title : "Donation"}</b></p>
          <p style={{ color: "green", fontWeight: "bold", fontSize: "14px" }}>✅ Donation Successful!</p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
            <button onClick={() => navigate("/")} style={{ padding: "10px 20px", background: "#5b2a7a", color: "white", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>Go Home</button>
            <button onClick={() => navigate("/campaigns")} style={{ padding: "10px 20px", background: "white", color: "#5b2a7a", border: "1px solid #5b2a7a", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>View Campaigns</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Arial", background: "#fef9f5", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
      <form onSubmit={handleDonate} style={{ background: "white", padding: "30px", borderRadius: "12px", maxWidth: "450px", width: "100%", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>{campaign ? campaign.emoji : "❤️"}</div>
          <h2 style={{ margin: "10px 0 5px" }}>{campaign ? campaign.title : "Donate Now"}</h2>
          <p style={{ color: "#666", fontSize: "13px", margin: "0 0 20px" }}>{campaign ? campaign.desc : "Your small help can change a life."}</p>
        </div>

        <label style={{ fontSize: "13px", fontWeight: "bold" }}>Your Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" style={{ width: "100%", padding: "10px", margin: "5px 0 12px", border: "1px solid #ddd", borderRadius: "6px", boxSizing: "border-box" }} />

        <label style={{ fontSize: "13px", fontWeight: "bold" }}>Donation Amount (₹)</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Ex: 500" style={{ width: "100%", padding: "10px", margin: "5px 0 12px", border: "1px solid #ddd", borderRadius: "6px", boxSizing: "border-box" }} />

        {/* Quick Amount Buttons */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "15px" }}>
          {["100", "500", "1000", "5000"].map((amt) => (
            <button key={amt} type="button" onClick={() => setAmount(amt)} style={{ flex: 1, padding: "8px", background: amount === amt ? "#5b2a7a" : "white", color: amount === amt ? "white" : "#333", border: "1px solid #ddd", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>₹{amt}</button>
          ))}
        </div>

        <button type="submit" style={{ width: "100%", padding: "12px", background: "#5b2a7a", color: "white", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", fontSize: "15px" }}>
          Donate ₹{amount || "0"} →
        </button>
      </form>
    </div>
  );
}

export default Donate;