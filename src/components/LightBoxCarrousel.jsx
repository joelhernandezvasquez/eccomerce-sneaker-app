import { productImgArray } from '../constant';
import prevButton from '../assets/images/icon-previous.svg';
import nextBtn from '../assets/images/icon-next.svg';

export const LightBoxCarrousel = ({currentImg,nextImg,prevImg}) => {
  return (
    <div className='lightbox-carrousel d-flex d-flex-align-center'>
    <img src={productImgArray[currentImg].imgSrc} alt=""/>
    <div className='arrows-container'>
        <div className='arrow d-flex d-flex-align-center d-flex-justify-center'>
           <input type="image" src={prevButton} onClick={prevImg}/>
        </div>

        <div className='arrow d-flex d-flex-align-center d-flex-justify-center'>
           <input type="image" src={nextBtn} onClick={nextImg}/>
        </div>
    </div>
    </div>
  )
}
