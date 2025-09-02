import { Route, Routes } from "react-router-dom"
import NaveBar from "./Components/naveBar"
import Home from "./Pages/Home"
import { useLocation } from "react-router-dom"
import Footer from "./Components/Footer";
import { useAppContext } from "./Context/appContext";
import Login from "./Components/Login";
import { Toaster } from "react-hot-toast";
import AllProducts from "./Pages/AllProducts";
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
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      {!isSellerPath && <Footer/>}
    </div>
  )
}

export default App
