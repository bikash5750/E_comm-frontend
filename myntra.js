import React from "react";
import ReactDOM from "react-dom/client";

// create card
function Card( props) {
  return (
    <div style={{ border: "2px solid black", padding: "10px", width: "220px" }}>
      <img
        src="https://i.pinimg.com/474x/21/75/b4/2175b4382bbae6eb2a240e1cff127b69.jpg"
        height="200"
        width="200"
        alt="T-Shirt"
      />

      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h2>{props.offer}</h2>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}

const products = [
  { id: 1, cloth: "T-Shirt", offer: "20-40% off" },
  { id: 2, cloth: "Jeans", offer: "10-30% off" },
  { id: 3, cloth: "Shirt", offer: "30-50% off" },
  { id: 4, cloth: "Jacket", offer: "40-60% off" },
  { id: 5, cloth: "Hoodie", offer: "25-35% off" },
  { id: 6, cloth: "Shorts", offer: "15-25% off" },
  { id: 7, cloth: "Sweater", offer: "35-45% off" },
  { id: 8, cloth: "Blazer", offer: "20-50% off" },
  { id: 9, cloth: "Kurta", offer: "30-40% off" },
  { id: 10, cloth: "Saree", offer: "50-70% off" },
  { id: 11, cloth: "Track Pant", offer: "20-30% off" },
  { id: 12, cloth: "Suit", offer: "45-65% off" },
  { id: 13, cloth: "Cap", offer: "10-20% off" },
  { id: 14, cloth: "Scarf", offer: "25-35% off" },
  { id: 15, cloth: "Socks", offer: "5-15% off" },
  { id: 16, cloth: "Shoes", offer: "30-50% off" },
  { id: 17, cloth: "Sandals", offer: "20-40% off" },
  { id: 18, cloth: "Watch", offer: "15-45% off" },
  { id: 19, cloth: "Belt", offer: "10-30% off" },
  { id: 20, cloth: "Wallet", offer: "25-40% off" },
  { id: 21, cloth: "Tie", offer: "30-35% off" },
  { id: 22, cloth: "Gloves", offer: "15-25% off" },
  { id: 23, cloth: "Backpack", offer: "40-55% off" },
  { id: 24, cloth: "Sunglasses", offer: "20-60% off" },
  { id: 25, cloth: "Hat", offer: "10-50% off" }
];




function App() {
  return (
    <div style={{display:"flex", gap:"20px" , flexWrap:"wrap"}}>
      {/* header */}




      //cards
     {
         products.map((item) => (
          <Card       // this reutun card
            key={item.id}
            cloth={item.cloth}
            offer={item.offer}
         />
        ))
     }




      {/* footer */}
    </div>
  );
}





const renderroot = ReactDOM.createRoot(
  document.getElementById("root")
);

renderroot.render(<App />);