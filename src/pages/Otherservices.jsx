import React from "react";

export default function Otherservices({ setPage }) {
  const gymServices = [
    { name: "Treadmill", price: 200, image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg" },
    { name: "Weight Lifting", price: 250, image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" },
    { name: "Yoga Class", price: 180, image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg" },
    { name: "Spinning Bike", price: 220, image: "https://images.pexels.com/photos/1954523/pexels-photo-1954523.jpeg" },
    { name: "Crossfit Training", price: 300, image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg" },
  ];

  const spaServices = [
    { name: "Full Body Massage", price: 1000, image: "https://images.pexels.com/photos/4056725/pexels-photo-4056725.jpeg" },
    { name: "Foot Massage", price: 500, image: "https://images.pexels.com/photos/4056726/pexels-photo-4056726.jpeg" },
    { name: "Aromatherapy", price: 800, image: "https://images.pexels.com/photos/4056727/pexels-photo-4056727.jpeg" },
  ];

  const swimmingServices = [
    { name: "Indoor - Adult", price: 600, image: "https://images.pexels.com/photos/260951/pexels-photo-260951.jpeg" },
    { name: "Indoor - Kids", price: 250, image: "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg" },
    { name: "Outdoor - Adult", price: 350, image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg" },
    { name: "Outdoor - Kids", price: 150, image: "https://images.pexels.com/photos/261103/pexels-photo-261103.jpeg" },
  ];

  const categoryBadge = (text, color) => (
    <span style={{
      background: color,
      padding: "4px 10px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "bold",
      color: "white",
      position: "absolute",
      top: "10px",
      left: "10px",
    }}>
      {text}
    </span>
  );

  return (
    <>
      <style>{`
        .page-container {
          padding: 30px;
          color: white;
          background-image: url('https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          position: relative;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(2px);
        }
        .content-wrap {
          position: relative;
          z-index: 2;
        }
        .back-btn {
          background: rgba(255,255,255,0.3);
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 20px;
          backdrop-filter: blur(4px);
        }
        h1, h2 {
          text-align: center;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .service-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 22px;
          margin-bottom: 40px;
        }
        .service-card {
          background: rgba(255,255,255,0.15);
          padding: 15px;
          border-radius: 16px;
          width: 280px;
          backdrop-filter: blur(10px);
          text-align: center;
          position: relative;
          transition: transform 0.35s, box-shadow 0.35s;
          cursor: pointer;
        }
        .service-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }
        .service-card img {
          width: 100%;
          height: 170px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 10px;
        }
        .book-btn {
          background: #34d399;
          padding: 8px 14px;
          border: none;
          border-radius: 10px;
          color: white;
          font-weight: bold;
          margin-top: 8px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .book-btn:hover {
          background: #059669;
        }
      `}</style>

      <div className="page-container">
        <div className="overlay"></div>

        <div className="content-wrap">
          <button className="back-btn" onClick={() => setPage("dashboard")}>← Back</button>
          <h1>Other Services</h1>

          {/* GYM */}
          <h2>Gym Services</h2>
          <div className="service-grid">
            {gymServices.map((g, i) => (
              <div key={i} className="service-card">
                {categoryBadge("GYM", "#3b82f6")}
                <img src={g.image} alt={g.name} />
                <h3>{g.name}</h3>
                <p>Price per hour: KES {g.price}</p>
                <button className="book-btn">Book Now</button>
              </div>
            ))}
          </div>

          {/* SPA */}
          <h2>Spa Services</h2>
          <div className="service-grid">
            {spaServices.map((s, i) => (
              <div key={i} className="service-card">
                {categoryBadge("SPA", "#ec4899")}
                <img src={s.image} alt={s.name} />
                <h3>{s.name}</h3>
                <p>Price: KES {s.price}</p>
                <button className="book-btn">Book Now</button>
              </div>
            ))}
          </div>

          {/* SWIMMING */}
          <h2>Swimming</h2>
          <div className="service-grid">
            {swimmingServices.map((sw, i) => (
              <div key={i} className="service-card">
                {categoryBadge("POOL", "#06b6d4")}
                <img src={sw.image} alt={sw.name} />
                <h3>{sw.name}</h3>
                <p>Price: KES {sw.price}</p>
                <button className="book-btn">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
