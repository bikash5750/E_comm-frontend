import React , {useState}from "react";
import ReactDOM from "react-dom/client";
import "./style.css";


// create card
function Card(props) {
  return (
    <div className="card" style={{border:"1px solid black", padding:"2px"}}>
      <img
        src="https://i.pinimg.com/474x/21/75/b4/2175b4382bbae6eb2a240e1cff127b69.jpg"
        height="200"
        width="200"
        alt="T-Shirt"
      />

      <h2>{props.cloth}</h2>
      <h2>{props.offer}</h2>
      <h2>price: {props.price}</h2>

      <button className="shop-btn">Shop Now</button>
    </div>
  );
}

const products =  [
  { id: 1, cloth: "T-Shirt", offer: "20-40% off", price: "499" },
  { id: 2, cloth: "Jeans", offer: "10-30% off", price: 1299 },
  { id: 3, cloth: "Shirt", offer: "30-50% off", price: 899 },
  { id: 4, cloth: "Jacket", offer: "40-60% off", price: 2499 },
  { id: 5, cloth: "Hoodie", offer: "25-35% off", price: 1499 },
  { id: 6, cloth: "Shorts", offer: "15-25% off", price: 699 },
  { id: 7, cloth: "Sweater", offer: "35-45% off", price: 1199 },
  { id: 8, cloth: "Blazer", offer: "20-50% off", price: 2999 },
  { id: 9, cloth: "Kurta", offer: "30-40% off", price: 999 },
  { id: 10, cloth: "Saree", offer: "50-70% off", price: 1999 },
  { id: 11, cloth: "Track Pant", offer: "20-30% off", price: 899 },
  { id: 12, cloth: "Suit", offer: "45-65% off", price: 3499 },
  { id: 13, cloth: "Cap", offer: "10-20% off", price: 399 },
  { id: 14, cloth: "Scarf", offer: "25-35% off", price: 599 },
  { id: 15, cloth: "Socks", offer: "5-15% off", price: 199 },
  { id: 16, cloth: "Shoes", offer: "30-50% off", price: 2499 },
  { id: 17, cloth: "Sandals", offer: "20-40% off", price: 1299 },
  { id: 18, cloth: "Watch", offer: "15-45% off", price: 2999 },
  { id: 19, cloth: "Belt", offer: "10-30% off", price: 699 },
  { id: 20, cloth: "Wallet", offer: "25-40% off", price: 799 },
  { id: 21, cloth: "Tie", offer: "30-35% off", price: 499 },
  { id: 22, cloth: "Gloves", offer: "15-25% off", price: 599 },
  { id: 23, cloth: "Backpack", offer: "40-55% off", price: 1799 },
  { id: 24, cloth: "Sunglasses", offer: "20-60% off", price: 1499 },
  { id: 25, cloth: "Hat", offer: "10-50% off", price: 699 }
];


const Header = () => {
  return (
  <div className="heading" >

      <img
        className="images"
        src="https://images.seeklogo.com/logo-png/35/1/myntra-logo-png_seeklogo-355038.png"
        alt="Myntra Logo"
        width="80px"
        height="80px"
      />

      <div className="options">
        <button className="but">MEN</button>
        <button className="but">WOMEN</button>
        <button className="but">KIDS</button>
        <button className="but">HOME AND LIVING</button>
        <button className="but">BEAUTY</button>
        <button className="but">STUDIO</button>
      </div>

      <input
        type="text"
        className="searchbar"
        placeholder="Search for products, brands and more"
      />

      <div className="profile-section">
        <button className="pro">Profile</button>
        <button className="pro">Wishlist</button>
        <button className="pro">Bag</button>
      </div>

    </div>
  );
};


function Footer(){
  return(
    <img
    src="https://imgs.search.brave.com/ke3a5NCwd2iJCI8b3b1thskYYadtxBN__t6S0Vnsoac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MjgwMzE4NTcvZmls/ZS9vcmlnaW5hbC00/MmY0NGE5OGY1OTU2/ODcyMDg4YzIyYzhi/NjE1NDk3NC5wbmc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy"
    width="1100px"
    height="300px"
    className="footerimg"

    />
  )
}

function App() {

  const [arr, setarr] = useState(products);

  function sortarray() {
    const sorted = [...arr].sort((a, b) => a.price - b.price);
    setarr(sorted);
  }

  return (
    <>
      <Header />

      <button className="buttonmaharaj" onClick={sortarray}>
        Sort by Price
      </button>

      <div className="middle" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {
          arr.map((item) => (
            <Card
              key={item.id}
              cloth={item.cloth}
              offer={item.offer}
              price={item.price}
            />
          ))
        }
      </div>

      <Footer/>
    </>
  );
}




const renderroot = ReactDOM.createRoot(
  document.getElementById("root")
);

renderroot.render(<App />);