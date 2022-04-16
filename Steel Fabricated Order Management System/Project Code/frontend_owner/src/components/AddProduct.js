import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {url} from '../constants/url'
import { useEffect } from 'react'

const AddProduct=()=>{

    let history=useHistory()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [thumbnail, setThumbnail] = useState(undefined)
    const [details,setDetails]= useState('')
    const [catId,setCatId]=useState(-1)
    const [qty,setQty]=useState(0)

    const[categories,setCategories]=useState([])

    useEffect(() => {
        getCategories()
      }, [])
    
      const getCategories = () => {
        axios.get(url + 'categories').then((response) => {
          const result = response.data
          
            if (result.length > 0) {
            
              setCatId(result[0].id)
    
              setCategories(result)
              
            }
         
        })
      }

  return(
    <div>
    <h1 className="page-title">Add Product</h1>

    <div className="mb-3">
      <label htmlFor="">Title</label>
      <input
        onChange={(e) => {
          setName(e.target.value)
        }}
        type="text"
        className="form-control"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="">Details</label>
      <input
        onChange={(e) => {
          setDetails(e.target.value)
        }}
        type="text"
        className="form-control"
      />
    </div>

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
      <label htmlFor="">Qunatity</label>
      <input
        onChange={(e) => {
          setQty(e.target.value)
        }}
        type="number"
        className="form-control"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="">Category</label>
      <select
        onChange={(e) => {
          setCatId(e.target.value)
        }}
        className="form-control">
        {categories.map((category) => {
          return (
            <option value={category.id}>
              {category.name}
            </option>
          )
        })}
      </select>
    </div>

    <div className="mb-3">
      <label htmlFor="">Thumbail</label>
      <input
        onChange={(e) => {
          setThumbnail(e.target.files[0])
        }}
        accept="image/*"
        type="file"
        className="form-control"
      />
    </div>

    <div className="mb-3">
      <button onClick={()=>{
          const data = new FormData()
          data.append('name', name)
          data.append('price',price)
          data.append('details', details)
          data.append('catId', catId)
          data.append('thumbnail', thumbnail)
          data.append('qty',qty)
    
          // send the album info to the API
          axios.post(url + '/products', data).then((response) => {
            const result = response.data
           
              alert('successfully added new Product')
              history.push('/manager')
            
          })
      }} className="btn btn-success">
        Add
      </button>

      <Link to="/manager">
        <a className="btn btn-warning">Back</a>
      </Link>
    </div>
  </div>
)
  
}

export default AddProduct