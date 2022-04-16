import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {url} from '../constants/url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Success_toast } from "../config/Success_toast";
const ViewStaff=()=>
{

    
    const [allStaff,setAllStaff]=useState([])
    useEffect(() => {
        getAllStaff()
    }, [])

    const getAllStaff=()=>
    {
       axios.get(url + 'staff').then((response) => {
           const result = response.data
           console.log(result)
           setAllStaff(result)

       })
    }

  return(
      <div>
          

          <div>
          <div className="container-fluid">
                <div className="row">
                    <div className="col-xs- col-sm- col-md- col-lg-"></div>
            <h1>Staff</h1>
          <table className="table table-stripped">
            <thead>
              <tr>
                  <th>Id</th>
                <th>Name</th>
                <th>Phone</th>
               
                <th>Email</th>
                <th>Role</th>
                
              </tr>
            </thead>
            <tbody>
              {allStaff.map((staff) => {
                         return (
                            <tr>
                                <td>{staff.staff_id}</td>
                              <td>{staff.firstName}{staff.lastName}</td>
                              <td>{staff.phone}</td>
                              <td>
                                  {staff.mail}
                                  
                              </td>
                              <td>{staff.role}</td>            
                            
                              <td>
                  <button onClick={()=>{
                          let id=staff.staff_id
                          console.log(url+'staff/delete/'+id)
                          axios.delete(url+'/staff/delete/'+id).then((response)=>
                          {
                              console.log("deleted")
                              Success_toast("staff deleted successfully")
                              getAllStaff();
                              
                          })
                  }} 

                  
                  
                  className="btn btn-success">
                        Delete
                  </button>
                  <ToastContainer />
                  
                  </td>
                            </tr>
                         ) 
              })}
            </tbody>
          </table>
        </div>
             
        </div>
                </div>
            
      )
      </div>
  )
}
export default ViewStaff