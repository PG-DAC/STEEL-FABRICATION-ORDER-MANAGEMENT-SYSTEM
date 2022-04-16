
import axios from 'axios';
import { url } from './../constants/url';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Login from '../pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Warn_toast} from '../config/Warn_toast'

const ViewOrders = ()=>{
    const [state, setState] = useState(false)
    const updatedProducts = []
    const [orders, setOrders] = useState([])
    const [product, setProduct] = useState([])
    const customerId = useSelector((state) => state.loggedUser.cid)
    const [orderState, setOrderState] = useState(0)

    useEffect(()=>{
        
        getOrders(customerId)
        
    },[orderState])
    
    const getOrders = (id)=>{
        console.log(id)
        axios.get(url + 'orders/' + id).then((response)=>{
            console.log(response.data.Orders)
            const result = response.data.Orders
            setOrders(result)
            console.log(orders)
        })
        
    }

    const cancelOrder = (id)=>{
        axios.put(url + 'orders/cancel/' + id).then((response)=>{
            console.log(response.data)
            setOrderState(orderState + 1)
        })
        console.log('inside cancel order')
        
    }
    if(customerId === 0){
        return (
            <>
        {Warn_toast("You required to login first")}
        <ToastContainer />
               <Login/>
              
        </>
        
        )
        
    } else {
        if (orders.length === 0){
        return (
            <div style = {{backgroundColor: "white", padding: "20px"}}>
                You dont have any orders!!
            </div>
        )
        } else {
            return (
            <div className = "container">
                {orders.map((order)=>{
                 return(
                    <div className = "row order-container">
                    <div className = "col">
                    <img src={url + '/storage/' + order.product.thumbnail}
                        className='product-image' />
                    </div>
                    <div className = "col" style = {{margin: "20px"}}>
                        {order.product.name}
                        <br></br>
                        Price: {order.product.price} Rs
                        <br></br>
                        Payment Option: {order.paymentmode}
                    </div>
                    <div className = "col">
                        Delivery Date: {order.ddate}
                        <br></br>
                        Status: {order.status}
                       
                        <br></br>
                        {(order.status !== "cancelled" && order.status !== "delivered" )
                         && <button onClick = {()=>{cancelOrder(order.oId)}} className= "btn btn-success" >Cancel Order</button>}
                    </div>
                    </div>
                 )   
                })}
               
            </div>
        )

    }
}}
export default ViewOrders