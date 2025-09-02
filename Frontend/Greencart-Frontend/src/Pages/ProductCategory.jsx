import React from 'react'
import { useAppContext } from '../Context/appContext.jsx'
import { useParams } from 'react-router-dom';
import { categories } from '../assets/assets.js';
import ProductCard from '../Components/ProductCard.jsx';

function ProductCatogory() {

    const {products} = useAppContext()
    const {category} = useParams()

    const searchCategory = categories.find((item)=>item.path.toLowerCase() === category.toLowerCase());
    const filtredByCategoryProduct = products.filter((product)=>product.category.toLowerCase() === category.toLowerCase())



  return (
    <div className='mt-16 mb-16 flex flex-col'>
        {searchCategory && (
            <div>
                <p className='text-2xl font-medium uppercase'>{searchCategory.text.toUpperCase()}</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>
        )}
        {filtredByCategoryProduct.length > 0 ? 
        (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-4 mt-6'>
          {filtredByCategoryProduct.map((product,index)=>(<ProductCard key={index} product={product}/>))}
        </div>)
        :
        (<div className='flex items-center justify-center h-[60vh]'>
          <p className='text-2xl font-medium text-primary'>NO Products Found in this Category.</p>
          </div>)
        
      }

    </div>
  )
}

export default ProductCatogory;