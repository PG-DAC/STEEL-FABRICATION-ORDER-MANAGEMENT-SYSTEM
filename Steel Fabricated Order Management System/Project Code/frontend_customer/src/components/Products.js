import './Products.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from './../constants/url';
import {useHistory} from "react-router-dom"

const Products = (props)=>{

  const history=useHistory();

  const [products, setProducts] = useState([ ])
  const [categoryId, setCategoryId] = useState(0)
  const [allProducts, setAllProducts] = useState([])
  const id = props.catId
    useEffect(
      ()=>{
        console.log(props.catId)
        setCategoryId(props.catId)
        getProducts()
        console.log(props.catId)
        getAllProducts()
      },[props.catId, categoryId])
  
    const getAllProducts = ()=>{
      axios.get(url + 'products').then((response)=>{
        const result = response.data
        setAllProducts(result)
      })
    }

    const getProducts = ()=>{
      console.log(id + 'get product')
      console.log(categoryId)
      if(categoryId !== 0){
      axios(url + 'products/bycategory/' + categoryId ).then((response)=>{
        const result = response.data
        setProducts(result)
        console.log(result)
      })
    }
    }

    if(categoryId === 0){
      return (
        <div className = 'container cont-border'>
          <div className = 'row row-border'>
            <div className = 'col col-border'>
            <div className = "product-container">
                {
                 allProducts.map((item)=>{
                   return (
                     
                     <div className = "product-item" >
                       <div>
                         {item.name}
                       </div>
                       <div >
                        <img src = {url+ '/storage/' + item.thumbnail} 
                        className = 'product-image' />
                       </div>
                       <div>
                         Price: {item.price}
                       </div>
                       <button onClick={()=>
                       {
                         let id=item.id
                         let path='/product-details/'+id
                         console.log(id)
                         console.log(path)
                         history.push(path )
                       }}
                       className = 'btn btn-success'>View Product</button>

                     </div>
                     
                   )
                 })
                }
            </div>
            </div>
          </div>
        </div>
      )
    } else {
      
      return(
        <div className = 'container cont-border'>
          <div className = 'row row-border'>
            <div className = 'col col-border' >
              
              <div className = "cont-border product-container">
                {
                 products.map((item)=>{
                   return (
                     <div className = "product-item" >
                       <div>
                         {item.name}
                       </div>
                       <div >
                        <img src = {url+ '/storage/' + item.thumbnail} 
                        className = 'product-image' />
                       </div>
                       <div>
                         Price: {item.price}
                       </div>
                       <button onClick={()=>
                       {
                         let id=item.id
                         console.log(id)
                         let path='/product-details/'+id
                         console.log(path)
                         history.push(path )
                       }}
                       className = 'btn btn-success'>View Product</button>
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
    

}


export default Products