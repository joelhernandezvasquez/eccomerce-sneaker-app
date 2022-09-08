import { CarItems } from "./CarItems";
import { useSelector } from "react-redux";
import { EmptyCartItems } from "./EmptyCartItems";
export const CartDetails = () => {
  
  const cartItems = useSelector((state)=>state.cart);
  
  return (
    <div className="cart-details-container">
      <p className="cart-details-container-title fw-700">Cart</p>

      <div className="cart-details">
        { cartItems.cart.length > 0
         ?  <CarItems cartItems = {cartItems.cart} />
         :  <EmptyCartItems/>}
      </div>
    </div>
  )
}
