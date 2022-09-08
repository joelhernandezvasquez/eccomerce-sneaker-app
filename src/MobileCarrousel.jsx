
import { UseCarrousel } from './components/hooks/UseCarrousel';
import { productImgArray } from './constant';
import prevButton from './assets/images/icon-previous.svg';
import nextBtn from './assets/images/icon-next.svg';

export const MobileCarrousel = () => {

  const {currentImg,nextImg,prevImg} = UseCarrousel(0);

  return (
    <div className='mobile-carrousel'>
      <img src={productImgArray[currentImg].imgSrc} alt=""/>
      
      <div className='arrows-container d-flex d-flex-align-center d-flex-space-between'>
          <div className='prev-btn arrow-btn d-flex d-flex-align-center d-flex-justify-center'>
            <img src={prevButton} alt="" onClick={prevImg}/>
          </div>

          <div className='next-btn arrow-btn d-flex d-flex-align-center d-flex-justify-center'>
            <img src={nextBtn} alt="" onClick={nextImg}/>
          </div>
      </div>
    </div>
  )
}
