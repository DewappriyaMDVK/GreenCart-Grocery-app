import React, { useEffect, useState } from 'react'
import { useAppContext } from '../Context/appContext'

function SellerLogin() {

    const {isSeller, setIsSeller,navigate} = useAppContext()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async ()=>{
      event.defaultPrevented();
      setIsSeller(true)
    }

    useEffect(()=>{
      if(isSeller){
        navigate("/seller")
      }
    },[isSeller])

  return !isSeller && (
    <div>
      <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center fext-sm text-gray-600'>
        <div className='flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200'>
          <p className='text-2xl font-medium m-auto'>
            <span className='text-primary'>Seller</span>
            Login
          </p>
        </div>

      </form>

    </div>
  )
}

export default SellerLogin