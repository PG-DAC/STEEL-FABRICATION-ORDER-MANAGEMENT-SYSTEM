import axios from "axios";
import { useState } from "react";
import {url} from '../constants/url'
import { Link, useHistory } from "react-router-dom";


const AddCategory=()=>{
   const [category,setCategory]=useState('')
   const [details,setDetails]=useState('')
   

   let history=useHistory()
    return (
        
        <div className = "container">
        <div className = 'row'>
            <div className = 'col' align = "center">
                <div style = {{backgroundColor: 'grey', padding: "50px", width: "auto", margin: "100px"}} align = "left" >
                    
                         <input 
                         onChange = {
                             (e) => {setCategory(e.target.value)}
                         }
                         className="form-control" type = "text" placeholder ='Category' required /> 
                         <br/>
                         <input 
                         onChange = {
                             (e) =>{setDetails(e.target.value)}
                         }
                         className="form-control" type = "text" placeholder = 'Details' required /> 
                         
                         
                         <button className="btn btn-success" onClick = {()=>{
                             const catDetails = { name : category, details: details}
                             axios.post( url + 'categories', catDetails)
                             .then((response) =>{
                                 console.log(response.data)
                                 console.log("Category added")
                                 history.push("/manager")
                             })

                         }}>Submit</button>
                         
                         
                     
                 </div>
            </div>
        </div>
     </div>

        
    )
}

export default AddCategory