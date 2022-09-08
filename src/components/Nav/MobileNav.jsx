
import LogoIcon from '../../assets/images/logo.svg';
import { MobileMenuIcon } from './MobileMenuIcon';
import { Cart } from '../cart/Cart';
import { Avatar } from './Avatar';
import '../../main.css';

export const MobileNav = () => {
  return (
   <header className="container mobile-nav d-flex d-flex-align-center d-flex-space-between">
     
     <div className='mobile-nav-left-col'>
     <MobileMenuIcon/>
     <img src ={LogoIcon} alt =""/>
     </div>

     <div className='d-flex d-flex-align-center'>
      <Cart/>
      <Avatar/>
     </div>
    
     
   </header>
  )
}
