
import { GifItem } from './GifItem';  
import { useFecthGifs } from '../hooks/useFecthGifs';  



export const GifGrid = ( { category } ) => {

  const { images, isLoading } = useFecthGifs(category);
  console.log({ isLoading });

    return (
        <>
             <h3> {  category } </h3>

            {
              isLoading && ( <h2> Cargando.. </h2> )
            }
             <div className="card-grid">
               {
                  images.map(( image ) => (
                    <GifItem 
                      key = {image.id}
                      // image = { image.url }
                      // otra forma de mandar
                      {  ...image }
                    />
                  ))
               }
             </div>
        </>
  )
}

