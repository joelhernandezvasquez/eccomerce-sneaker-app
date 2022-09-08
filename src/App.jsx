
import { MobileNav } from './components/Nav/MobileNav';
import { ProductInfo } from './components/ProductInfo'
import { MobileCarrousel } from './MobileCarrousel'
import './index.css'
import { DesktopNav } from './components/Nav/DesktopNav';
import { DesktopContent } from './components/DesktopContent';

function App() {
  return (
    <main className="App">
     <MobileNav/>
     <DesktopNav/>
     <section className='content'>
       
       <div className='hero'>
        <MobileCarrousel/>
        <DesktopContent/>
       </div>

       <div className='product-info'>
        <ProductInfo/>
       </div>
     </section>
      
  
    </main>
  )
}

export default App
