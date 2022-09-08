
import { useState } from 'react';
import { useSelector } from 'react-redux';
import IconMenu from '../../assets/images/icon-menu.svg';
import { MobileMenu } from './MobileMenu';

export const MobileMenuIcon = () => {
  const[openMenu, setOpenMenu] = useState(false);
  const isCartDetailOpen = useSelector((state)=> state.cart.isCardDetailOpen);
 
  return (
    <>
      <input type="image"  
      className='icon-menu' 
      src={IconMenu} 
      onClick={()=> setOpenMenu(!openMenu)}
      disabled={isCartDetailOpen}
      />
      
      {openMenu && <MobileMenu closeMenu = {setOpenMenu}/>}
     
    </>
    
  )
}
