import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import {url} from '../constants/url'
const ViewCustomisedProductRequests=()=>
{
    
    
    const [products, setProducts] = useState([])


    useEffect(() => {
       getProducts()
      }, []) 


    const getProducts= () => {
        axios.get(url + '/custproducts').then((response) => {
          const result = response.data
          setProducts(result)
          }
        ) 
      }

     
    return (
            
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs- col-sm- col-md- col-lg-">
                        {
                            products.map((product)=>{
                                return(
                                    
                                <div>
                                    <h6> Product </h6>
                                               <div><img style={{height: '200px', width: '200px'}} src={url + '/storage/' + product.thumbnail}
                                                className='product-image' />
                                         </div>
                                     <div> Budget : {product.budget}
                                         </div>  
                                         <div> Description :  {product.description}
                                         </div>  
                                           <div>
                                               <h6>Requested By :</h6>
                                           {product.cust.firstName}&nbsp; 
                                           {product.cust.lastName} 
                                           <br></br>
                                           {product.cust.phone} 
                                           <br></br>
                                           {product.cust.state}
                                           </div>
                                    </div>
                                )   
                            })
                        }
                    </div>

                     </div>
                     </div>
                          
             </div>
                     

    )

}



  

export default ViewCustomisedProductRequests