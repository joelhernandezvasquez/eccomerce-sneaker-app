import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import CartIcon from '../../assets/images/icon-cart.svg';
import { CartDetails } from './CartDetails';
import { setCartDetailsOpen } from '../../store/slices/cartSlice';

export const Cart = () => {
  const [showCartDetails,setShowCartDetails] = useState(false);
  const dispatch = useDispatch();
  const totalItems = useSelector((state)=>state.cart.itemsInCart);
 
  const openCartDetails = () =>{
    setShowCartDetails(!showCartDetails);
    dispatch(setCartDetailsOpen(!showCartDetails));
  }
  return (
    
    <div className='cart-icon-container'>
     <input type="image" className='cart-icon' 
     src={CartIcon} 
      onClick={openCartDetails}
     />
      {totalItems > 0 && <div className='items-in-cart d-flex d-flex-align-center d-flex-justify-center'>{totalItems}</div>}
     {showCartDetails && <CartDetails/>}
    
    </div>
  )
}
