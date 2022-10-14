import {useState} from 'react';
import { AddCategory, GifGrid} from './components';
// import { GifGrid } from './components/GifGrid';

// const api_KEY = 'Wq9mKsbIZqpR3pfcLO7zKhzivI8Q3LFG';

export const GifExpertApp = () => {
    // const value = 'Shrel';

    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = ( newCategory ) => {
        // categories.push(newCategory);
        if ( categories.includes( newCategory ) ) return;

        // console.log(newCategory); 
        // setCategories(['One Punch','Dragon Ball','shrek']);
        setCategories([ newCategory,  ...categories  ]);
        // setCategories( cat => [...cat, 'valorant']);
    }
  
    return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* imput */}
        <AddCategory
            //  setCategories = { setCategories }
            onNewCategory = { onAddCategory }
        />
      
            { categories.map( category => (
                 
                    <GifGrid key={ category } 
                    category = {category} /> 
                
                ))
            }

    </>
  )
}
