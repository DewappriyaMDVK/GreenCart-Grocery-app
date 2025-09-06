import { Route, Routes } from "react-router-dom"
import NaveBar from "./Components/NaveBar"
import Home from "./Pages/Home"
import { useLocation } from "react-router-dom"
import Footer from "./Components/Footer";
import { useAppContext } from "./Context/appContext";
import Login from "./Components/Login";
import { Toaster } from "react-hot-toast";
import AllProducts from "./Pages/AllProducts";
import ProductCatogory from "./Pages/ProductCategory";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";


function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin} = useAppContext()

  return (

    <div>
      {isSellerPath? null : <NaveBar/>}
      {showUserLogin? <Login/> : null }
      <div className={`${isSellerPath? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<AllProducts/>}/>
          <Route path="/products/:category/:id" element={<ProductDetails/>}/>
          <Route path="/products/:category" element={<ProductCatogory/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      {!isSellerPath && <Footer/>}
    </div>
    
  )
}

export default App
