import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import {url} from '../constants/url'
const ViewOrders=()=>
{
   
  

  const [orders,setOrders]=useState([])
  const[customer,setCustomer]=useState([])
  const[status,setStatus]=useState("yet to be delivered")
  let statusOptions=["yet to be delivered","shipped","packed","delivered"]
  let history=useHistory()
  const [state, setState] = useState(0)
  useEffect(() => {
     getOrders()
    }, [state]) 


  const getOrders= () => {
      axios.get(url + '/orders').then((response) => {
        console.log()
        const result = response.data
        console.log(result)
        setOrders(result)
        console.log(orders)
        }
      ) 
    }

  return(
      <div>       
         Orders page
         <table className="table table-stripped ">
         <thead>
              <tr>
                <th>Product</th>
                <th>Customer</th>
                <th>Status</th>
                <th>...</th>
              </tr>
            </thead>
         <tbody>
        {

          orders.map(order=>{
            return(
              <div className='container'>
                  <tr> 
           
                    <td>
                       
                        <div className='container'>
                            <img src={url + '/storage/' + order.product.thumbnail}
                          className='product-image' />
                        </div>
                        <div className="item-detail">
                            {order.product.name}
                        </div>
                  
                        <div className="item-detail">
                            {order.product.details}
                        </div>
                    </td>
                    <td>
                      <div className='container'> Customer Id: {order.cId}
                      <br></br>
                      <button onClick={()=>
                       {
                         console.log(url+'customers/'+order.cId)
                         axios.get(url+'customers/'+order.cId).then((response)=>{
                        console.log(response.data)
                        setCustomer(response.data)
                           
                         })  
                     
                       }}className = 'btn btn-primary'>Get Customer</button>
                        </div>
                      <br></br>
                     <div className='container'>                     
                          <div style = {{marginLeft : 300 }}>
                            <div>
                                {customer.firstName}
                                {customer.lastName}
                                <br>
                                </br>
                                {customer.street}
                                  {customer.landmark}
                                  {customer.city}
                                  {customer.state}
                                  <br>
                                  </br>
                                  {customer.phone}
                            </div>
                          </div>      
                       </div>
                    </td>
                    
                    <td>
                      <div style={{border: "solid"}}>
                        status <br></br> {order.status}
                        </div>
                    </td>
                    <td>
                        <div>
                        <label htmlFor="">Change Status</label>
                          <select
                            onChange={(e) => {
                              setStatus(e.target.value)
                              }}
                            className="form-control">
                          {statusOptions.map((status) => {
                            return (
                              <option value={status}>
                              {status}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                      <br></br>
                      <button onClick={()=>
                            {
                              console.log("he nit bagh as yet ka",url+'orders/changestatus/'+order.oId+status)
                              axios.get(url+'orders/changestatus/'+order.oId+"/"+status).then((response)=>{
                              console.log(response.data)
                              setState(state +1)
                              })
                            }}
                            className = 'btn btn-primary'>Submit</button>
                  </td>
                  </tr>
                  </div>
                 )})}
        </tbody>
      </table>    
      </div>
  )
}
export default ViewOrders