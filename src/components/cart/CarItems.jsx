

import { CartItem } from './CartItem';
export const CarItems = ({cartItems}) => {
  
  return (
    <>
    {cartItems.map((cartItem)=>
      <CartItem key={cartItem.id} cartItem={cartItem}/>
    )}
    <button className='btn-checkout d-block fw-700'>Checkout</button>
    </>
   
  )
}
