
import CloseIcon from '../assets/images/icon-close-orange.svg';
import { UseCarrousel } from './hooks/UseCarrousel';
import { LightBoxCarrousel } from './LightBoxCarrousel';
import { ThumbnailImages } from './ThumbnailImages';

export const LightBoxActive = ({activeImg,toogle}) => {
  const {currentImg,nextImg,prevImg,configureImg} = UseCarrousel(activeImg);
  return (
    <div className="ligthbox-active-container">
        <div className='ligthbox-inner-content'>
         <input id="lightbox-close-icon" type="image" src={CloseIcon} onClick={()=> toogle()}/>
        
          <LightBoxCarrousel currentImg={currentImg} nextImg={nextImg} prevImg={prevImg}/>
          <ThumbnailImages currentImg={currentImg} configureImg = {configureImg}/>
        </div>
       
    </div>
  )
}
