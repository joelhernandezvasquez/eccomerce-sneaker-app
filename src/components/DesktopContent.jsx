import { UseCarrousel } from "./hooks/UseCarrousel"
import { useToogle } from "./hooks/useToogle";
import { productImgArray } from "../constant"
import { LightBoxActive } from "./LightBoxActive";
import { ThumbnailImages } from "./ThumbnailImages";

export const DesktopContent = () => {
  // TODO: to check the rendering of the component and check if needs to
  // apply any useMemo or useCallback
    const {currentImg,configureImgHook} = UseCarrousel(0);
    const {toogleValue,toogle} = useToogle(false);

    return (
    <div className="desktop-lightBox">
      
      <div className="desktop-carrousel-img" onClick={toogle}>
       <img src={productImgArray[currentImg].imgSrc} alt=""/>
      </div>

      <ThumbnailImages currentImg={currentImg} configureImg={configureImgHook}/>
      {toogleValue && <LightBoxActive activeImg={currentImg} toogle={toogle}/>}
        </div>
      
  )
}
