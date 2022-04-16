import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from './../constants/url';

const ViewReview=()=>
{
  const [products, setProducts] = useState([ ])

  useEffect(() => {
    getProducts()
}, [])
 
  const getProducts=()=>{
    axios.get(url+'products').then((response)=>{
      const result=response.data
      setProducts(result)
      console.log(result)
    })
  }

  return(
      <div>
          Review page
          {
            products.map((product)=>{
              
              
                if(product.reviews.length>0){
                  return(
                  <div>
                       {console.log("im in")}
                       <div>
                       {console.log(product)} 
                         {product.name}
                       </div>
                       <div >
                        <img style={{height: '200px', width: '200px'}} src = {url+ '/storage/' + product.thumbnail} 
                         />
                       </div>
                       <div>
                         Price: {product.price}
                       </div>
                       <div>
                       {product.reviews.map((review)=>{
                                    return (
                                        <div className = "review-item">
                                        <div>Rating: {review.star}  </div>
                                        <div>Review : {review.description}</div>
                                        </div>
                                    )
                                })}
                         </div>
                    </div>
                  )
                }
              
            })
          }
      </div>
  )
}
export default ViewReview