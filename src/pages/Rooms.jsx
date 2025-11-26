import React from "react";
import { useCart } from "@/contexts/CartContext";

export default function Rooms({ setPage }) {
  const { addItem } = useCart();

  const rooms = [
    { name: "Standard Room", desc: "Affordable comfort.", image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg", price: "3,500 / night" },
    { name: "Deluxe Room", desc: "Premium comfort.", image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg", price: "5,500 / night" },
    { name: "Family Suite", desc: "Spacious room.", image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg", price: "8,000 / night" }
  ];

  const handleAddToCart = (room) => {
    addItem({ id: room.name, name: room.name, price: room.price, type: "room", image: room.image, details: room.desc });
  };

  return (
    <div style={{ padding: 30, color: "white", minHeight: "100vh", background: "url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg') center/cover no-repeat" }}>
      <button onClick={() => setPage("dashboard")} style={{ marginBottom: 20, padding: "10px 22px", borderRadius: 10, border: "none", cursor: "pointer", color: "white", background: "rgba(255,255,255,0.25)" }}>
        ← Back
      </button>

      <h1 style={{ textAlign: "center", marginBottom: 25 }}>Available Rooms</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 25 }}>
        {rooms.map((room, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.15)", padding: 18, borderRadius: 16 }}>
            <img src={room.image} alt={room.name} style={{ width: "100%", height: 170, objectFit: "cover", borderRadius: 12 }} />
            <h3>{room.name}</h3>
            <p>{room.desc}</p>
            <div style={{ marginTop: 10, fontWeight: "bold", background: "rgba(255,255,255,0.25)", padding: "6px 10px", borderRadius: 6 }}>KES {room.price}</div>
            <button onClick={() => handleAddToCart(room)} style={{ marginTop: 10, width: "100%", padding: 8, borderRadius: 8, border: "none", cursor: "pointer", background: "rgba(255,255,255,0.25)", color: "white" }}>Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
