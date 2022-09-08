import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct,addItemsInCart } from '../../store/slices/cartSlice';
import { v4 as uuid } from 'uuid';
import { product } from '../../constant';
import minusIcon from '../../assets/images/icon-minus.svg';
import plusIcon from '../../assets/images/icon-plus.svg';

export const AddProductCard = () => {
 const [quantity,setQuantity] = useState(0);
 const dispatch = useDispatch();
 const unique_id = uuid();

 const decrement = () =>{
   if(quantity > 0)
     setQuantity(current => current - 1);
 }
 const addToCart = () =>{
    if(quantity === 0) return;
   const totalAmount = product.price * quantity;
   dispatch(addProduct({id:unique_id,...product,quantity,totalAmount}));
   dispatch(addItemsInCart(quantity));
   setQuantity(0)
 }
 return (
    <div className='add-product-to-cart-container'>
   
   <div className="product-quantity-container d-flex d-flex-align-center d-flex-space-between">
       <input type="image" src={minusIcon} 
        onClick={decrement}
       />
       <span className="quantity-count fw-700">{quantity}</span>
       <input type="image" src={plusIcon} 
       onClick={() =>setQuantity(current => current + 1)}
       />

    </div>
    <button className='cart-btn d-flex d-flex-align-center d-flex-justify-center'
    onClick={()=>addToCart()}
    >
    <svg className='icon-cart' width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg>
         Add to cart
    </button>
   </div> 
  )
}
