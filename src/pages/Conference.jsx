import React from "react";

export default function Conference({ setPage }) {
  const halls = [
    {
      name: "Hall A",
      capacity: "6 people",
      price: "1000 per hour",
      img: "/images/hall A.jpg",
    },
    {
      name: "Hall C",
      capacity: "1000 people",
      price: "5000 per hour",
      img: "/images/Hall C.jpg",
    },
    {
      name: "Hall B",
      capacity: "200 people",
      price: "2500 per hour",
      img: "/images/empty-meeting-room-with-table-whiteboard.jpg",
    },
  ];

  return (
    <>
      <style>{`
        .page-container {
          padding: 35px;
          color: white;
          background-image: linear-gradient(
              rgba(0,0,0,0.5),
              rgba(0,0,0,0.6)
            ),
            url('https://images.pexels.com/photos/260928/pexels-photo-260928.jpeg');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
        }

        .back-btn {
          background: rgba(255,255,255,0.2);
          color: white;
          padding: 12px 22px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-bottom: 25px;
          font-weight: 600;
          transition: 0.3s ease;
        }
        .back-btn:hover {
          background: rgba(255,255,255,0.35);
          transform: translateX(-4px);
        }

        .page-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
        }

        .glass-card2 {
          background: rgba(255,255,255,0.18);
          padding: 20px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          text-align: center;
          color: #f5f5f5;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          transition: 0.35s ease;
          cursor: pointer;
        }
        .glass-card2:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255,255,255,0.25);
        }

        .glass-card2 img {
          width: 100%;
          height: 170px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 12px;
        }

        .hall-price {
          font-size: 1.1rem;
          margin-top: 6px;
          font-weight: bold;
          color: #ffe8ff;
        }
      `}</style>

      <div className="page-container">
        <button className="back-btn" onClick={() => setPage("dashboard")}>
          ← Back
        </button>

        <h1 style={{ marginBottom: "25px", fontSize: "2.3rem" }}>Conference Halls</h1>

        <div className="page-grid">
          {halls.map((hall, index) => (
            <div key={index} className="glass-card2">
              <img src={hall.img} alt={hall.name} />
              <h3>{hall.name}</h3>
              <p>Capacity: {hall.capacity}</p>
              <p className="hall-price">Price: {hall.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
