import {useState} from 'react'

export const useToogle = (initialValue = false) => {
   
    const [toogleValue,setToogleValue] = useState(initialValue);

    const toogle = () =>{
        setToogleValue(!toogleValue);
    }

    const setToogle = (value) =>{
        setToogleValue(value);
    }

    return {toogleValue,toogle,setToogle}
}
