import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'
import {url} from '../constants/url'

const ViewProductsCategory = (props) => {
  const [products, setProducts] = useState([])
  let history=useHistory()

  

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    axios.get(url + '/products/bycategory/' + id).then((response) => {
      const result = response.data
      setProducts(response.data)
      console.log(result)
      console.log(products)
    }
    )
  }

  let id = props.match.params.id

  return (

    <div className="container-fluid">
    <div className="row">
        <div className="col-xs- col-sm- col-md- col-lg-">
           
    <div>
      <div className="table-responsive">    
      <table className="table table-striped">
        <thead>
          <tr>
            <td>
              Title
            </td>
            <td>
              Image
            </td>
            <td>
              Price
            </td>
          </tr>
        </thead>
        <tbody>
          { 
            products.map((item) => {
              return (
                <tr>
                  <td>
                    {item.name}
                  </td>
                  <td><img style={{height: '200px', width: '200px'}} src={url + '/storage/' + item.thumbnail}
                      className='product-image' />
                  </td>
                  <td>
                    {item.price}
                    
                  </td>
                  <td>
                   <button onClick={()=>{
                     let id=item.id
                     let path='/update-product/'+id
                     console.log(path)
                     history.push(path )
                   }

                   } className="btn btn-primary">
                    Update
                   </button>
                  </td>

                  
                  <td>
                  <button onClick={()=>{
                          let id=item.id
                          console.log(url+'categories/delete/'+id)
                          axios.delete(url+'/products/delete/'+id).then((response)=>
                          {
                              console.log("deleted")
                              getProducts();
                          })
                  }} 

                  
                  
                  className="btn btn-success">
                        Delete
                  </button>
                  </td>

                </tr>
              )
            })
              }   
        </tbody>
      </table>
      <div>
            <button onClick={()=>
            {
                history.push("manager")
            }}
            className="btn btn-primary">
             Back    
            </button>
            </div>
     
      </div>
    </div>
   </div>
   </div>
   </div>

  )
}

export default ViewProductsCategory
