import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields!");
      return;
    }
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#fef9f5", minHeight: "100vh", padding: "30px 15px" }}>

      {/* TOP */}
      <div style={{ textAlign: "center", maxWidth: "700px", margin: "auto" }}>
        <span style={{ background: "#ffe8f3", color: "#e91e63", padding: "5px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>📞 CONTACT US</span>
        <h1 style={{ fontSize: "32px", margin: "10px 0 5px" }}>Contact Us</h1>
        <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.5", margin: "0" }}>
          Have any question or want to help? Send us a message, we will reply soon.
        </p>
      </div>

      {/* 3 INFO BOXES */}
      <div style={{ display: "flex", gap: "15px", justifyContent: "center", maxWidth: "900px", margin: "20px auto" }}>
        <div style={{ background: "#e6f0ff", padding: "15px", borderRadius: "10px", flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: "22px" }}>📧</div>
          <h4 style={{ margin: "5px 0 2px", fontSize: "14px" }}>Email</h4>
          <p style={{ margin: "0", fontSize: "13px", color: "#555" }}>support@donateapp.com</p>
        </div>
        <div style={{ background: "#e6f0ff", padding: "15px", borderRadius: "10px", flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: "22px" }}>📱</div>
          <h4 style={{ margin: "5px 0 2px", fontSize: "14px" }}>Phone</h4>
          <p style={{ margin: "0", fontSize: "13px", color: "#555" }}>+91 98765 43210</p>
        </div>
        <div style={{ background: "#e6f0ff", padding: "15px", borderRadius: "10px", flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: "22px" }}>📍</div>
          <h4 style={{ margin: "5px 0 2px", fontSize: "14px" }}>Address</h4>
          <p style={{ margin: "0", fontSize: "13px", color: "#555" }}>Hyderabad, Telangana</p>
        </div>
      </div>

      {/* FORM + SIDE */}
      <div style={{ maxWidth: "900px", margin: "auto", display: "flex", gap: "15px" }}>

        {/* LEFT - FORM */}
        <form onSubmit={handleSubmit} style={{ background: "white", padding: "20px", borderRadius: "10px", flex: 2, boxShadow: "0 3px 10px rgba(0,0,0,0.07)" }}>
          <h3 style={{ margin: "0 0 15px", fontSize: "18px" }}>Send Message</h3>

          <label style={{ fontSize: "13px", fontWeight: "bold" }}>Your Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" style={{ width: "100%", padding: "10px", margin: "5px 0 12px", border: "1px solid #ddd", borderRadius: "6px", boxSizing: "border-box" }} />

          <label style={{ fontSize: "13px", fontWeight: "bold" }}>Email</label>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" style={{ width: "100%", padding: "10px", margin: "5px 0 12px", border: "1px solid #ddd", borderRadius: "6px", boxSizing: "border-box" }} />

          <label style={{ fontSize: "13px", fontWeight: "bold" }}>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." rows="3" style={{ width: "100%", padding: "10px", margin: "5px 0 12px", border: "1px solid #ddd", borderRadius: "6px", boxSizing: "border-box", resize: "none" }} />

          <button type="submit" style={{ width: "100%", padding: "11px", background: "#5b2a7a", color: "white", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", fontSize: "15px" }}>
            Send Message →
          </button>

          {sent && <p style={{ color: "green", textAlign: "center", margin: "10px 0 0", fontSize: "14px", fontWeight: "bold" }}>✅ Message Sent Successfully! Thank You.</p>}
        </form>

        {/* RIGHT */}
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", flex: 1, boxShadow: "0 3px 10px rgba(0,0,0,0.07)" }}>
          <div style={{ fontSize: "25px" }}>❤️</div>
          <h3 style={{ fontSize: "17px", margin: "5px 0" }}>Why Contact Us?</h3>
          <p style={{ color: "#555", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
            - Want to start a new campaign?<br />
            - Have a donation related doubt?<br />
            - Want to volunteer with us?<br /><br />
            Just message us, we reply within 24 hours.
          </p>
          <Link to="/categories" style={{ display: "inline-block", marginTop: "15px", padding: "8px 18px", background: "#e91e63", color: "white", textDecoration: "none", borderRadius: "6px", fontSize: "13px", fontWeight: "bold" }}>
            Donate Now →
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Contact;