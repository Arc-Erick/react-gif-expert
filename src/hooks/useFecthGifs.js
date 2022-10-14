import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

 
 export const useFecthGifs = ( category ) => {

     const [images, setImages] = useState( [] );
     const [isLoading, setIsLoading] = useState( true );
     
  // useEffect( () => {  
  //   getGifs(category)
  //       .then(newImages  => setImages(newImages)); 
  // } , [])
  
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }
  useEffect( () => {
    getImages();
  },[])

    return {
        images,
        isLoading
    }
 }