import React, { useEffect, useState } from 'react'
import { useAppContext } from '../Context/appContext'
import { dummyOrders } from '../assets/assets.js';


function MyOrders() {
    const {currency} = useAppContext();
    const [myOrders, setMyOrders] = useState([])

    useEffect(()=>{
        setMyOrders(dummyOrders)
    },[])

  return (
    <div className='mt-16 pb-16'>
        <div className='flex flex-col items-end w-max mb-8'>
            <p className='text-2xl font-medium uppercase'>My Orders</p>
            <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>

    {myOrders.map((order,index)=>(
        <div key={index} className='border border-gray-300 rounded-lg mb-10 p-3 py-5 max-w-5xl'>
            <p className='flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col'>

                <span>Order ID: {order._id}</span>
                <span>Payment: {order.paymentType}</span>
                <span>Total Amount: {currency}{order.amount}</span>
            </p>
            {order.items.map((item,index)=>(

                <div key={index} className={`relative bg-white text-gray-500/70 ${order.items.length !== index + 1 && "border-b"}
                border-gray-500 flex md:flex-raw md:items-center justify-between p-3
                py-5 md:gap-16 w-full max-w-5xl`}>

                    <div className='flex items-center mb-4 md:mb-0'>
                        <div className='bg-primary/10 rounded-lg'>
                            <img src={item.product.image[0]} alt='Product image' className='w-16 h-16'/>
                        </div>
                        <div className='ml-4 '>
                            <h1 className='text-xl font-medium text-gray-800'>{item.product.name}</h1>
                            <p>Category: {item.product.category}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center font-medium md:ml-8 mb-4 md:mb-0'>
                        <p>Quantity: {item.quantity || "1"}</p>
                        <p>Status: {order.status}</p>
                        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                    <p className='text-primary text-lg font-medium'>
                        Currency: {currency}{item.product.offerPrice * item.quantity}
                    </p>
                </div>
            ))}
        </div>
    ))}

    </div>
    
    
  )
}

export default MyOrders