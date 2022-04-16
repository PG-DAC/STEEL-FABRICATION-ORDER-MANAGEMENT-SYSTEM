import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import {url} from '../constants/url'
const ViewProducts=()=>
{
    
    
    const [categories, setCategories] = useState([])
    const [catId, setCatId]=useState(0)

    let history=useHistory()
    useEffect(() => {
       getCategories()
      }, []) 


    const getCategories= () => {
        axios.get(url + '/categories').then((response) => {
          const result = response.data
          setCategories(result)
          }
        ) 
      }

     
    return (
            
        <div>
             <div className="container-fluid">
                <div className="row">
                    <div className="col-xs- col-sm- col-md- col-lg-"></div>
            <table className="table table-stripped">
            <tbody>
            {
                categories.map((category)=>{
                return(
               <tr>
                   <td>
                        {category.name}
                   </td>
                   <td>
                      <button  className="btn btn-primary" onClick={()=>
                      {
                        let id=category.id
                        let path='/viewproducts-category/'+id
                        console.log(path)
                        history.push(path)
                      }
                          
                      }>
                          View Products
                      </button>
                   </td>
                   <td>
                      <button className="btn btn-success" onClick={()=>
                          {
                          let id=category.id
                          console.log(url+'categories/delete/'+id)
                          axios.delete(url+'/categories/delete/'+id).then((response)=>
                          {
                              console.log("deleted")
                              getCategories();
                          })}
                          
                      }> Delete </button> 
                   </td>
               </tr> 
                )} 
            )}
            </tbody>
            </table>
        </div>
        
        </div>
             
             </div>
                     

    )

}



  

export default ViewProducts;