
import { useState,useCallback } from "react"

export const UseCarrousel = (initialValue) => {
 
    const [currentImg,setCurrentImg] = useState(initialValue);
   
    const nextImg = () => {
        if(currentImg > 2) return;
        setCurrentImg(current => current + 1);
     }
  
     const prevImg = () =>{
      if(currentImg < 1) return
      setCurrentImg(current => current - 1);
     }
     
     const configureImgHook = useCallback((value)=>{
        if(typeof value !=='number') return;
        setCurrentImg(value);
     },[])

     const configureImg = (value) =>{
        if(typeof value !=='number') return;
       setCurrentImg(value);
     }

     return {currentImg,nextImg,prevImg,configureImg,configureImgHook}
   
}
