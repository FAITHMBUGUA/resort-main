import React, { useState } from "react";

export default function Bookings({ setPage }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      title: "VIP Room",
      desc: "Luxury experience for 1-2 people",
      img: "/images/vip-room.jpg",
      capacity: "2 people",
      price: 5000,
    },
    {
      title: "Suite 1",
      desc: "3 beds, spacious suite",
      img: "/images/suite1.jpg",
      capacity: "3 people",
      price: 3500,
    },
    {
      title: "Suite 2",
      desc: "4 beds, large suite",
      img: "/images/suite2.jpg",
      capacity: "4 people",
      price: 4000,
    },
    {
      title: "Master Room",
      desc: "Premium master room",
      img: "/images/master-room.jpg",
      capacity: "2 people",
      price: 6000,
    },
  ];

  return (
    <>
      <style>{`
        .page-container {
          padding: 30px;
          color: white;
          background-image: url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
        }
        .back-btn {
          background: rgba(255,255,255,0.15);
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 20px;
          transition: 0.3s;
          font-weight: bold;
        }
        .back-btn:hover {
          background: rgba(255,255,255,0.4);
        }
        .page-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
          margin-top: 20px;
        }
        .card {
          background: rgba(255,255,255,0.12);
          padding: 18px;
          border-radius: 14px;
          width: 300px;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          text-align: center;
          transition: transform 0.35s, box-shadow 0.35s;
          cursor: pointer;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.45);
        }
        .card img {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 12px;
        }
        .card button {
          background: #ffcc00;
          border: none;
          padding: 8px 15px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
          font-weight: bold;
          transition: 0.3s;
        }
        .card button:hover {
          background: #ffdd33;
        }

        /* Modal */
        .modal-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(6px);
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-card {
          background: rgba(255,255,255,0.15);
          padding: 25px;
          width: 350px;
          border-radius: 14px;
          color: white;
          text-align: center;
          animation: pop 0.25s ease;
        }
        @keyframes pop {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .close-btn {
          background: crimson;
          padding: 8px 15px;
          border: none;
          border-radius: 6px;
          margin-top: 15px;
          cursor: pointer;
          color: white;
          font-weight: bold;
          transition: 0.3s;
        }
        .close-btn:hover {
          background: red;
        }
      `}</style>

      <div className="page-container">
        <button className="back-btn" onClick={() => setPage("dashboard")}>
          ← Back
        </button>

        <h1>Available Rooms</h1>

        <div className="page-grid">
          {rooms.map((room, index) => (
            <div key={index} className="card" onClick={() => setSelectedRoom(room)}>
              <img src={room.img} alt={room.title} />
              <h3>{room.title}</h3>
              <p>{room.desc}</p>
              <p><strong>Capacity:</strong> {room.capacity}</p>
              <p><strong>Price:</strong> KES {room.price}</p>
              <button>View Details</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Viewing Room */}
      {selectedRoom && (
        <div className="modal-bg">
          <div className="modal-card">
            <img
              src={selectedRoom.img}
              alt={selectedRoom.title}
              style={{ width: "100%", borderRadius: "10px", marginBottom: "12px" }}
            />
            <h2>{selectedRoom.title}</h2>
            <p>{selectedRoom.desc}</p>
            <p><strong>Capacity:</strong> {selectedRoom.capacity}</p>
            <p><strong>Price:</strong> KES {selectedRoom.price}</p>

            <button
              style={{ background: "#00ff99", marginTop: "15px", padding: "10px 18px", borderRadius: "6px", border: "none", fontWeight: "bold", cursor: "pointer" }}
              onClick={() => alert("Booking feature coming soon!")}
            >
              Book Now
            </button>

            <button className="close-btn" onClick={() => setSelectedRoom(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
