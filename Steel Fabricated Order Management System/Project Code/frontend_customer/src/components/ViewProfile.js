import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { url } from './../constants/url';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Warn_toast} from '../config/Warn_toast'

const ViewProfile = ()=>{
    const id = useSelector((state) => state.loggedUser.cid)
    
    const [customer, setCustomer] =useState([])
    const getcustomer = ()=> {
        axios.get(url + `customers/${id}`)
        .then((response)=>{
            setCustomer(response.data)
        })
    }
    
    useEffect(() =>{
        getcustomer()
    }, [])
    
    if(id === 0){
        Warn_toast("you required to login first")
        
        return (
            <div >
              
               <ToastContainer />
               <Login/>
            </div>
        )
        
    } else {
        
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs- col-sm- col-md- col-lg-">
                        <div className = "viewprofile">
                            <div className = "viewprofile-item">
                                First Name: {customer.firstName}
                            </div>
                            <div className = "viewprofile-item">
                                Last Name: {customer.lastName}
                            </div>
                            <div className = "viewprofile-item">
                                Phone Number: {customer.phone}    
                            </div>
                            <div className = "viewprofile-item">
                                Wallet Balnce:  {customer.walletBalance}
                            </div>
                            <div className = "viewprofile-item">
                                Date of Birth: {customer.bod}
                            </div>
                            <div className = "viewprofile-item">
                                Address : {customer.landmark}, {customer.city}, {customer.state}, {customer.pin}
                            </div>
                           {/* <Link to ='/update-profile'>
                            <div className = "viewprofile-item">
                            <button className = "btn btn-primary">update</button>
                           </div>
                           </Link> */}
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ViewProfile