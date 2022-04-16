import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {url} from '../constants/url'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Error_toast } from '../config/Error_toast'
import { Success_toast } from '../config/Success_toast'



const AddStaff=()=>
{
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail,setMail]= useState('')
    const [password,setPassword]=useState('')
    const [role,setRole]=useState('')


  return(
      <div>
          Add staff

          <div className="mb-3">
      <label htmlFor="">First Name</label>
      <input
        onChange={(e) => {
          setFirstName(e.target.value)
        }}
        type="text"
        className="form-control"
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="">Last Name</label>
      <input
        onChange={(e) => {
          setLastName(e.target.value)
        }}
        type="text"
        className="form-control"
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="">Phone</label>
      <input
        onChange={(e) => {
          setPhone(e.target.value)
        }}
        type="text"
        className="form-control"
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="">Mail</label>
      <input
        onChange={(e) => {
          setMail(e.target.value)
        }}
        type="email"
        className="form-control"
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="">Password</label>
      <input
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        type="password"
        className="form-control"
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="">Role</label>
      <input
        onChange={(e) => {
          setRole(e.target.value)
        }}
        type="text"
        className="form-control"
        required
      />
       </div>
   

    <div className="mb-3">
      <button onClick={()=>{



      const details = { firstName : firstname, lastName: lastname,phone:phone,mail:mail,password:password,role:role}

      var reg_phone=/^[6-9]\d{9}$/
      var reg_mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     
      console.log(details.role)
      if(details.firstName==""){
        
        toast.error(' Please Enter Your first name');
         
          
    }
    else if(details.lastName==""){
      toast.error(' Please Enter Your last name');
    }
    else if(!reg_mail.test(details.mail)){
      toast.error(' email is not proper');
    }
    else if(!reg_phone.test(details.phone)){
      toast.error(' phone number is not proper');
    }
    else if(details.role!="admin" && details.role==""){
      toast.error(' this role  is not present');
    }
    else if(details.role!="employee" && details.role==""){
      toast.error(' this role  is not present');
    }
    else if(details.role!="manager" && details.role==""){
      toast.error(' this role  is not present');
    }
    else{
      axios.post( url + 'staff', details)
      .then((response) =>{
          const result = response.data
          console.log(result)
          Success_toast("staff added successfully")
         
      })
    }
    
      } }className="btn btn-success">
        Add
      </button>
      <ToastContainer />
     
      </div>

      </div> 
  )
  
}
export default AddStaff