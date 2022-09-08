import React from "react"
import { productImgArray } from "../constant"
export const ThumbnailImages = React.memo(({currentImg,configureImg}) => {
  
  return (
    <div className="desktop-thumbnail-container d-flex">
       
    {productImgArray.map((item =>{
      return(
          <div key={item.id} className={`thumbnail ${currentImg === item.id && 'activeImg'}`} 
           onClick={()=> configureImg(item.id)}
           >
           <img src={item.imgSrc} />
        </div>
      )
    }))}
   
    </div>
  )
})
