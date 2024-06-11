import { useContext } from "react";
import { AppContext } from "../../App";
import "./Total.css";

function Total({ onOrder }) {
  const { products, cart } = useContext(AppContext);

  const totalPrice = Object.keys(cart).reduce((total, productId) => {
    const product = products.find((product) => product.id === productId);
    if (!product) return total; // Ensure product exists
    return total + product.price * cart[productId];
  }, 0);

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="Total">
      <h2 className="Total_txt">Total</h2>
      <p className="total_tit">Items: {totalItems}</p>
      <p className="total_tit">Price: ${totalPrice}</p>
    </div>
  );
}

export default Total;