import React from "react";

export default function Cart({ setPage, cart, setCart }) {
  const addItem = (item) => {
    setCart((prev) => {
      const prevQty = prev[item.name]?.qty || 0;
      return { ...prev, [item.name]: { ...item, qty: prevQty + 1 } };
    });
  };

  const removeItem = (item) => {
    setCart((prev) => {
      const prevQty = prev[item.name]?.qty || 0;
      if (prevQty <= 1) {
        const updated = { ...prev };
        delete updated[item.name];
        return updated;
      }
      return { ...prev, [item.name]: { ...item, qty: prevQty - 1 } };
    });
  };

  const total = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      <style>{`
        .cart-page {
          padding: 30px;
          background: url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg") center/cover no-repeat fixed;
          min-height: 100vh;
          color: white;
          backdrop-filter: blur(4px);
        }

        .glass-box {
          background: rgba(255,255,255,0.15);
          padding: 20px;
          border-radius: 14px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          transition: transform .2s;
        }

        .glass-box:hover {
          transform: translateY(-5px);
        }

        .cart-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .food-img {
          width: 65px;
          height: 65px;
          object-fit: cover;
          border-radius: 10px;
        }

        .qty-btns button {
          background: rgba(255,255,255,0.7);
          border: none;
          font-size: 18px;
          font-weight: bold;
          padding: 6px 12px;
          margin-left: 5px;
          border-radius: 6px;
          cursor: pointer;
          transition: .3s;
        }

        .qty-btns button:hover {
          background: white;
          transform: scale(1.1);
        }

        .back-btn {
          background: rgba(255,255,255,0.3);
          padding: 10px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          margin-bottom: 20px;
          font-weight: bold;
          transition: .3s;
        }
        .back-btn:hover {
          background: rgba(255,255,255,0.5);
        }

        .checkout-box {
          padding: 20px;
          background: rgba(0,0,0,0.45);
          border-radius: 12px;
          margin-top: 25px;
          text-align: center;
          backdrop-filter: blur(6px);
        }

        .checkout-btn {
          margin-top: 12px;
          padding: 12px 25px;
          background: #00ff99;
          border: none;
          color: black;
          border-radius: 8px;
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
          transition: .3s;
        }
        .checkout-btn:hover {
          background: #00ffaa;
          transform: translateY(-3px);
        }
      `}</style>

      <div className="cart-page">
        <button className="back-btn" onClick={() => setPage("Foods")}>
          ← Back to Foods
        </button>

        <h1>Your Cart</h1>

        {Object.values(cart).length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <>
            {Object.values(cart).map((item, i) => (
              <div key={i} className="glass-box">
                <div className="cart-left">
                  <img src={item.img} className="food-img" alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>KES {item.price} each</p>
                  </div>
                </div>

                <div className="qty-btns">
                  <span style={{ marginRight: "10px", fontSize: "18px" }}>
                    x {item.qty}
                  </span>
                  <button onClick={() => addItem(item)}>+</button>
                  <button onClick={() => removeItem(item)}>-</button>
                </div>
              </div>
            ))}

            <div className="checkout-box">
              <h2>Total: KES {total}</h2>
              <button
                className="checkout-btn"
                onClick={() => alert("Checkout feature coming soon!")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
