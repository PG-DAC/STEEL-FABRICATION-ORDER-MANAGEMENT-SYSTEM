import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'
import {url} from '../constants/url'

const UpdateProduct=(props)=>
{
    let id = props.match.params.id

    const [product, setProduct] = useState([])
    const [qty,setQty]=useState([])
    const [price,setPrice]=useState([])
    let history=useHistory()
  
  
  
    useEffect(() => {
      getProduct()
    }, [])

    
    const getProduct = () => {
        axios.get(url + '/products/' + id).then((response) => {
          const result = response.data
          setProduct(response.data)
          console.log(result)
          console.log(product)
        }
        )
      }



  return(
    <div className="container-fluid">
    <div className="row products-container">
        <div className="col">
             {
                 <div className="details">
                 <div style = {{ height: "300px", width: "300px"}}>
                     <img src={url + '/storage/' + product.thumbnail}
                         className='product-image' />
                 </div>
                 <div className="item-detail">
                     {product.name}
                 </div>
                 
                 <div className="item-detail">
                     Description : {product.details}
                 </div>

                 <div>
           
            </div>
                 </div>
 
             }
                
                   
      </div>  

       <div className="col">
            <h1>Update</h1>
                
            <div className="mb-3">
        <label htmlFor="">Price</label>
        <input
          onChange={(e) => {
            setPrice(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Quantity</label>
        <input
          onChange={(e) => {
            setQty(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <button onClick={()=>
        {
            const data = { price : price, qty: qty}
            
            axios.put(url + 'products/update/'+id, data).then((response) => {
                const result = response.data
              console.log(result)
                  alert('successfully updated product')
                  history.push('/manager')
                } 
                
              )
            }
          }
        

         className="btn btn-success">
          Submit
        </button>

       
         </div>          
      </div>             
    </div>
</div>
  )
}

export default UpdateProduct

