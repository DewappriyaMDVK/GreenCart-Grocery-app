import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets.js";
import toast from "react-hot-toast"


export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([]);
    const [loaded,setLoaded] = useState(false);
    const [cartItems, setCartItems] = useState({})
    const [searchQuary, setsearchQuary] = useState([]);

    //fatch product data
    const fatchProducts = async ()=>{
        setProducts(dummyProducts)
    }

    //Add products to cart function
    const addToCart = (itemId)=>{
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId] += 1;
        }else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Product is added to Cart")
    }

    //remove product from cart.
    const updateCartitem=(itemId,quntity)=>{
        let cartData = structuredClone(cartItems)
        cartData[itemId] = quntity
        setCartItems(cartData)
        toast.success("Cart is updated")    
    }

    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(cartItems)
        if(cartData[itemId]){
            cartData[itemId] -= 1
            if(cartData[itemId]===0){
                delete cartData[itemId]
            }
        }
        toast.success("Removed from Cart")
        setCartItems(cartData)
    }

    useEffect(()=>{

        if(!loaded){
            fatchProducts()
            setLoaded(true)
        }
            
    },[loaded])

    const value = {navigate,user,isSeller,products,showUserLogin,currency,cartItems,searchQuary,
        updateCartitem,removeFromCart,addToCart,setIsSeller,setShowUserLogin,setUser,setCartItems,setsearchQuary}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext)
}