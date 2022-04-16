import { useSelector } from 'react-redux';
import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { url } from './../constants/url';
import { useEffect } from 'react'
import Login from '../pages/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Warn_toast} from '../config/Warn_toast'

const AddCustomisedProduct=()=>{
  const [customer, setCustomer] = useState([])
  useEffect(() => {
    getCustomer()
   }, []) 

const getCustomer=()=>{
  axios.get(url + '/customer/'+cid).then((response) => {
    const result = response.data
    setCustomer(result)
    }
  ) 
}
 
    const cid = useSelector((state) => state.loggedUser.cid)
    const history = useHistory()
    const [budget, setBudget] = useState(0.0)
    const [thumbnail, setThumbnail] = useState(undefined)
    const [description,setDescription]= useState('')
    
   
    if(cid === 0){
      Warn_toast("you required to login first");
        return (
          < >
            <div >
            <ToastContainer />
                <Login/>
            </div>
            
            </>
        )
    } else {
    return(
        <div>
                  <h1 className="page-title">Add Customised Product</h1>
    
        
    <div className="mb-3">
      <label htmlFor="">Description</label>
      <input
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        type="text"
        className="form-control"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="">Budget</label>
      <input
        onChange={(e) => {
          setBudget(e.target.value)
        }}
        type="number"
        className="form-control"
      />
    </div>

   

   

    <div className="mb-3">
      <label htmlFor="">Thumbnail</label>
      <input
        onChange={(e) => {
          setThumbnail(e.target.files[0])
        }}
        accept="image/*"
        type="file"
        className="form-control"
      />
    </div>

    <div className="mb-3">
      <button onClick={()=>{
          const data = new FormData()
        
          data.append('budget',budget)
          data.append('description', description)
          data.append('thumbnail', thumbnail)
          data.append('cid',cid)
         
       console.log(cid)
       console.log(data)
          // send the album info to the API
          axios.post(url + '/custproducts', data).then((response) => {
            const result = response.data
           
              alert('Thanks for contacting, will get back to you!!!')
             history.push('/shop')
            
          })
      }} className="btn btn-success">
        Submit
      </button>

     
    </div>
      </div>  

     
    )
    }

}

export default AddCustomisedProduct