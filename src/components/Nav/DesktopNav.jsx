

import LogoIcon from '../../assets/images/logo.svg';
import { Cart } from '../cart/Cart';
import { Avatar } from './Avatar';
import '../../main.css';

export const DesktopNav = () => {
  return (
    <header className="container desktop-nav d-flex d-flex-align-center d-flex-space-between">
     
    <div className='d-flex'>
 
    <img src ={LogoIcon} alt =""/>
    <ul className='desktop-menu-items d-flex'>
      <li><a href=''> Collections</a></li>
      <li><a href=''> Men</a></li>
      <li><a href=''> Women</a></li>
      <li><a href=''> About</a></li>
      <li><a href=''> Contact</a></li>
    </ul>
    </div>

    <div className='d-flex d-flex-align-center'>
     <Cart/>
     <Avatar/>
    </div>
   
    
  </header>
  )
}
