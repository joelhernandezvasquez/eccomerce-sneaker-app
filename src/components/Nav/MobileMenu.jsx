
import closeIcon from '../../assets/images/icon-close.svg';

export const MobileMenu = ({closeMenu}) => {
  return (
    <div className="mobile-menu-container">
       
       <div className="mobile-menu">
         <img src={closeIcon} alt="" onClick={()=>closeMenu()}/>
         
         <ul className='mobile-menu-items' aria-labelledby='mobile menu'>
           <li>collections</li>
           <li>men</li>
           <li>women</li>
           <li>about</li>
           <li>contact</li>
         </ul>
       </div>
        
    </div>
  )
}
