import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { useAppContext } from '../Context/appContext'

function AllProducts() {
    const {products, searchQuary} = useAppContext()
    const [filteredProducts, setFiltredProducts] = useState([])
    
    useEffect(()=>{
        if (searchQuary.length){
            setFiltredProducts(products.filter(
            (product)=>product.name.toLowerCase().includes(searchQuary.toLowerCase())))
        }else{
            setFiltredProducts(products)
        }
    },[products,searchQuary])
    
  return (
    <div className='mt-16 mb-16 flex flex-col'>
        <div className='flex flex-col items-start w-max'>

                <p className='text-2xl font-medium uppercase'>All Products</p>
            
            <div className='w-16 h-0.5 bg-primary rounded-full'>
                
            </div>
                
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-4 mt-6'>
                {filteredProducts.filter((product)=>product.inStock).map((product,index)=>(
                    <ProductCard key={index} product={product}/>
                ))}

            </div>
        </div>
    </div>
  )
}

export default AllProducts