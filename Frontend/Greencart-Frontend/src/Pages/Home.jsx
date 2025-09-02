import React from 'react'
import MainBanner from '../Components/MainBanner'
import Categories from '../Components/Categories'
import BestSellers from '../Components/BestSellers'
import ProductCard from '../Components/ProductCard'
import BottomBanner from '../Components/bottomBanner'
import NewsLetter from '../Components/NewsLetter'

function Home() {
  return (
    <div className='mt-10'>
        <MainBanner/>
        <Categories/>
        <BestSellers/>
        <ProductCard/>
        <BottomBanner/>
        <NewsLetter/>
    </div>
  )
}

export default Home