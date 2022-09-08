
import { AddProductCard } from './cart/AddProductCart';

export const ProductInfo = () => {
  return (
    <section>
    <h1 className='main-heading uppercase fw-700'>sneaker company</h1>
    <h2 className="sub-heading capitalize fw-700">Fall Limited Edition Sneakers</h2>
    <p className="lead-text">These low-profile sneakers are your perfect casual wear companion. 
        Featuring a durable rubber outer sole, they’ll withstand everything the weather
         can offer.
    </p>
    <div className="product-price-container">
        <div className="d-flex d-flex-align-center">
            <span className="product-price fw-700">$125.00</span>
            <span className="product-discount fw-700 d-flex d-flex-align-center d-flex-justify-center">50%</span>
        </div>

        <div>
            <span className="product-price-before-discount fw-700">$250.00</span>
        </div>
    </div>
   
  <AddProductCard/>
    
    </section>
    
  )
}
