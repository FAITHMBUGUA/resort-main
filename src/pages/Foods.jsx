import React, { useState } from "react";

export default function Foods({ setPage, cart, setCart }) {

  const meals = [
    { name: "Grilled Chicken", price: 1200, image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg" },
    { name: "Beef Steak", price: 1500, image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg" },
    { name: "Pasta Carbonara", price: 900, image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg" },
    { name: "Seafood", price: 800, image: "/images/side-view-fried-shrimps-sauce-with-tomatoes-herbs.jpg" },
    { name: "Vegan Salad", price: 700, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" },
  ];

  const drinks = [
    { name: "Mojito", price: 500, image: "/images/kiwi-alcohol-cocktail-with-fruit-slices-green-pipe.jpg" },
    { name: "Cappuccino", price: 350, image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" },
    { name: "Fresh Juice", price: 300, image: "https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg" },
    { name: "Red Cocktail", price: 600, image: "/images/glass-red-alcohol-cocktail-with-lime-slice-cherry.jpg" },
    { name: "Coffee", price: 200, image: "/images/cup-coffee-shot-tequilla.jpg" },
  ];

  const [toast, setToast] = useState("");
  const [category, setCategory] = useState("Meals");
  const [search, setSearch] = useState("");

  const list = category === "Meals" ? meals : drinks;

  const handleAdd = (item) => {
    setCart(prev => {
      const prevQty = prev[item.name]?.qty || 0;
      return { ...prev, [item.name]: { ...item, qty: prevQty + 1 } };
    });
    showToast(`${item.name} added to cart!`);
  };

  const handleRemove = (item) => {
    setCart(prev => {
      const prevQty = prev[item.name]?.qty || 0;
      if (prevQty <= 1) {
        const copy = { ...prev };
        delete copy[item.name];
        return copy;
      }
      return { ...prev, [item.name]: { ...item, qty: prevQty - 1 } };
    });
    showToast(`${item.name} removed!`);
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 1800);
  };

  const filtered = list.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const cartCount = Object.values(cart).reduce((sum, x) => sum + x.qty, 0);


  return (
    <>
      <style>{`
        .foods-container {
          padding: 30px;
          color: white;
          background: linear-gradient(135deg, #0F172A, #1E3A8A);
          min-height: 100vh;
          position: relative;
        }

        .back-btn {
          background: rgba(255,255,255,0.25);
          padding: 10px 20px;
          border: none;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 20px;
          font-weight: 600;
          transition: .3s;
        }
        .back-btn:hover { background: rgba(255,255,255,0.45); }

        .cart-floating {
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(255,255,255,0.2);
          padding: 12px;
          font-size: 26px;
          border-radius: 50%;
          cursor: pointer;
          transition: .3s;
        }
        .cart-floating:hover { background: rgba(255,255,255,0.35); }

        .cart-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #ef4444;
          color: white;
          padding: 3px 6px;
          border-radius: 50%;
          font-size: 12px;
          font-weight: bold;
        }

        .toast {
          position: fixed;
          top: 70px;
          right: 20px;
          background: #22c55e;
          padding: 12px 18px;
          border-radius: 8px;
          font-weight: bold;
          animation: fadeInOut 1.8s ease;
        }

        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        .tabs {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 20px auto;
        }
        .tab-btn {
          padding: 10px 20px;
          border-radius: 20px;
          border: none;
          cursor: pointer;
          background: rgba(255,255,255,0.15);
          color: white;
          font-weight: 600;
          transition: .3s;
        }
        .tab-btn.active {
          background: #3B82F6;
        }

        .search-box {
          width: 100%;
          max-width: 350px;
          padding: 10px 15px;
          margin: 15px auto 30px;
          display: block;
          border-radius: 10px;
          border: none;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
          justify-content: center;
        }

        .card {
          background: rgba(255,255,255,0.15);
          border-radius: 12px;
          padding: 18px;
          text-align: center;
          backdrop-filter: blur(8px);
          transition: 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px) scale(1.03);
          background: rgba(255,255,255,0.22);
        }

        .card img {
          width: 100%;
          height: 160px;
          border-radius: 10px;
          object-fit: cover;
          margin-bottom: 10px;
        }

        .qty-btns {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .qty-btns button {
          padding: 8px 14px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: .3s;
        }

        .add-btn { background: #3B82F6; color: white; }
        .add-btn:hover { background: #2563eb; }

        .remove-btn { background: #ef4444; color: white; }
        .remove-btn:hover { background: #b91c1c; }
      `}</style>

      <div className="foods-container">

        <button className="back-btn" onClick={() => setPage("dashboard")}>
          ← Back
        </button>

        <div className="cart-floating" onClick={() => setPage("Cart")}>
          🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>

        {toast && <div className="toast">{toast}</div>}

        <h1 style={{ textAlign: "center", marginTop: "10px" }}>Food & Drinks</h1>

        <div className="tabs">
          <button className={`tab-btn ${category === "Meals" ? "active" : ""}`}
            onClick={() => setCategory("Meals")}
          >
            Meals
          </button>

          <button className={`tab-btn ${category === "Drinks" ? "active" : ""}`}
            onClick={() => setCategory("Drinks")}
          >
            Drinks
          </button>
        </div>

        <input
          type="text"
          placeholder="Search items..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid">
          {filtered.map((item, i) => {
            const qty = cart[item.name]?.qty || 0;
            const total = qty * item.price;

            return (
              <div key={i} className="card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Price: KES {item.price}</p>
                <p>Quantity: {qty}</p>
                <p>Total: KES {total}</p>

                <div className="qty-btns">
                  <button className="add-btn" onClick={() => handleAdd(item)}>+</button>
                  <button className="remove-btn" onClick={() => handleRemove(item)}>-</button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}
