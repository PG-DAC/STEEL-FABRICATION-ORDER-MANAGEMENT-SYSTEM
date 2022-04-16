
import Categories from '../components/Categories'
import { Row } from 'react-bootstrap';

const Shop = ()=>{

        
   return (
    <div className = "container cont-border">
       shop
      <div className="jumbotron text-center" >
                       <h1>Products</h1>
      </div>
      <div className = 'row row-border' >
         <div className = 'col col-border'>
         < Categories />
         </div>
         
      </div>
     </div>    
  )      
    
}

        

export default Shop;