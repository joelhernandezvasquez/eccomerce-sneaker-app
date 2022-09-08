import { useDispatch} from "react-redux";
import { deleteProduct,deleteItemsInCart } from "../../store/slices/cartSlice";
import ProductImage from '../../assets/images/image-product-1.jpg';
import DeleteIcon from '../../assets/images/icon-delete.svg';

export const CartItem = ({cartItem}) => {

  const dispatch = useDispatch();

  const deleteItems = () =>{
    dispatch(deleteProduct(cartItem.id));
    dispatch(deleteItemsInCart(cartItem.quantity));

  }
  return (
     <div className="cart-item-container d-flex d-flex-align-center d-flex-space-between">
     <img src={ProductImage} alt=""/>
     
     <div className='cart-item-detail'>
     <p className='fw-400'>{cartItem.item}</p>
      <span style={{marginRight:'2px'}} className='fw-400'>${cartItem.price} x </span>
      <span className='fw-400'>{cartItem.quantity}</span>
      <span id="item-price" style={{marginLeft:'11px'}} className='fw-700'>${cartItem.totalAmount}</span>
     </div>
  
    <img className='delete-icon'  src={DeleteIcon} alt=""
    onClick={deleteItems}
    />
    </div>
  )
}
