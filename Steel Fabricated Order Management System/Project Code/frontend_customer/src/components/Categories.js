import axios from 'axios'
import { useState, useEffect } from 'react'
import Products from './Products'
import { url } from './../constants/url';



const Categories=()=>
{
    const [categories, setCategories] = useState([])
    const [catId, setCatId]=useState(0)

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
            <div className = 'container cont-border'>
              <div className = 'row row-border'>
                <div className = 'col-4 col-border category-component'>
                  <div >
                      Select Category
                      {
                        categories.map((category)=>{
                          return (
                            <div>
                              <button onClick = {(e)=>{
                                setCatId(category.id)
                              }}>
                                {category.name}
                              </button>
                              <br />
                              <br />
                            </div>
                          )
                        })
                      }
                  </div>
                </div>
                <div className = 'col-8 ' >
                  <div>
                    <Products catId = {catId}  />
                  </div>
                </div>
              </div>
            </div>
        
    )

}



  



export default Categories