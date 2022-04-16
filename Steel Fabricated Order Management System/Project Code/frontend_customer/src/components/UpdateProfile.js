import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { url } from './../constants/url';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const UpdateProfile = ()=> {
    const history = useHistory()
    const id = useSelector((state) => state.cid)
    const [customer, setCustomer] =useState([])

   
    const [phone, setPhone] = useState(customer.phone)
    const [bod, setDOB] = useState(customer.bod)
    const [landmark, setLandmark] = useState(customer.landmark)
    const [city, setCity] = useState(customer.city)
    const [state, setState] = useState(customer.state)
    const [pincode, setPincode] = useState(customer.pin)
    const updateCustomer = ()=> {
        console.log(bod)
        if(phone !== undefined){
            customer.phone = phone
        }
        if(bod !== undefined){
            customer.bod = bod
        }
        if(landmark !== undefined){
            customer.landmark = landmark
        }
        if(city !== undefined){
            customer.city = city
        }
        if(state !== undefined){
            customer.state = state
        }
        if(pincode !== undefined){
            customer.pin = pincode
        }
        
        axios.post(url +'customers/update', customer)
        .then((response) =>{
            history.push('/view-profile')
        })
    }
    const getcustomer = ()=> {
        axios.get(url + `customers/${id}`)
        .then((response)=>{
            setCustomer(response.data)
        })
    }
    
    useEffect(() =>{
        getcustomer()
    }, [])
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
                                Phone: <input type="tel" 
                                onChange = {
                                    (e) => {setPhone(e.target.value)}
                                }
                                placeholder = {customer.phone}
                                pattern= {"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
                                >
                                </input>   
                            </div>
                            <div className = "viewprofile-item">
                                Wallet Balnce:  {customer.walletBalance}
                            </div>
                            <div className = "viewprofile-item">
                                Date of Birth: <input type = "date" 
                                onChange = {
                                    (e) => {setDOB(e.target.value)}
                                }
                                placeholder = {customer.bod}></input>
                            </div>

                            <div className = "viewprofile-item">
                               Landmark: <input  
                               onChange = {
                                (e) => {setLandmark(e.target.value)}
                            }placeholder = {customer.landmark}></input>
                            </div>
                            <div className = "viewprofile-item">
                               City: <input  
                               onChange = {
                                (e) => {setCity(e.target.value)}
                            }
                               placeholder = {customer.city}></input>
                            </div>
                            <div className = "viewprofile-item">
                               State: <input 
                               onChange = {
                                (e) => {setState(e.target.value)}
                            }
                            placeholder = {customer.state}></input>
                            </div>
                            <div className = "viewprofile-item">
                               Pin Code: <input 
                               onChange = {
                                (e) => {setPincode(e.target.value)}
                            }
                            placeholder = {customer.pin}></input>
                            </div>
                           
                            <div className = "viewprofile-item">
                                <button 
                                onClick = {updateCustomer}
                                className = "btn btn-primary">update</button>
                           </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default UpdateProfile