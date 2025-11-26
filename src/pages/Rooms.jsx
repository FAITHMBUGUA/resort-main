export default function Rooms({ setPage }) {
  const rooms = [
    {
      name: "Standard Room",
      desc: "Affordable comfort with modern essentials.",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      price: "3,500 / night"
    },
    {
      name: "Deluxe Room",
      desc: "Premium comfort with extra luxury.",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      price: "5,500 / night"
    },
    {
      name: "Family Suite",
      desc: "Spacious room perfect for families.",
      image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      price: "8,000 / night"
    }
  ];

  return (
    <>
      <style>{`
        .rooms-page {
          padding: 30px;
          color: white;
          background-image: url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          animation: fadeIn 1.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .back-btn {
          background: rgba(255, 255, 255, 0.25);
          padding: 10px 22px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          color: white;
          backdrop-filter: blur(6px);
          transition: 0.3s;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.4);
          transform: scale(1.04);
        }

        h1 {
          text-align: center;
          margin-bottom: 25px;
          text-shadow: 0px 3px 8px rgba(0,0,0,0.4);
        }

        .rooms-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
        }

        .room-card {
          width: 300px;
          background: rgba(255, 255, 255, 0.15);
          padding: 18px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          box-shadow: 0px 8px 25px rgba(0,0,0,0.25);
          animation: slideUp 0.6s ease;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .room-card:hover {
          transform: translateY(-8px);
          box-shadow: 0px 12px 35px rgba(0,0,0,0.35);
        }

        .room-card img {
          width: 100%;
          height: 170px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .room-card h3 {
          margin-bottom: 5px;
        }

        .price-tag {
          margin-top: 10px;
          font-weight: bold;
          background: rgba(255,255,255,0.25);
          padding: 6px 10px;
          border-radius: 6px;
          display: inline-block;
        }
      `}</style>

      <div className="rooms-page">
        <button className="back-btn" onClick={() => setPage("dashboard")}>
          ← Back
        </button>

        <h1>Available Rooms</h1>

        <div className="rooms-grid">
          {rooms.map((room, i) => (
            <div key={i} className="room-card">
              <img src={room.image} alt={room.name} />
              <h3>{room.name}</h3>
              <p>{room.desc}</p>
              <span className="price-tag">KES {room.price}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
