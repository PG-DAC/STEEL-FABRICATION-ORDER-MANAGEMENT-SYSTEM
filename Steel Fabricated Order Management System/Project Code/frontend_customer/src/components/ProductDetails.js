import axios from 'axios'
import { useState, useEffect } from 'react'
import { addToCart } from './../actions/cartActions';
import { useSelector,useDispatch } from "react-redux";
import ViewCart from '../pages/ViewCart';
import Modal from 'react-modal'

import { useHistory } from 'react-router-dom';
import { url } from './../constants/url';

const ProductDetails = (props) => {
    let id = props.match.params.id
    let cid=useSelector((state) => state.loggedUser.cid)
    console.log(props)
    console.log(props.match.params.id)
    
    const [reviews, setReviews] = useState([])
    const [averagestar, setAveragestar] = useState(0)
    const [product, setProduct] = useState([])
    const [modalIsOpen, setModalIsopen] = useState(false)
    const [reviewDescription, setReviewDescription] = useState("")
    const [reviewStar, setReviewStar] = useState(0)
    const [reviewStatus, setReviewStatus] = useState(0)
    let isStarSet
   
    let isReviewEmpty
    let star
    if(reviews.length === 0){
        isReviewEmpty = true
    } else isReviewEmpty = false
    
    if(averagestar === ""){
        star = 0
    } else {
        star = averagestar
    }
    
    useEffect(() => {
        getReviews()
        getAveragestar()
        getProduct()
    }, [reviewStatus])

    const addreview = () =>{
        if (cid===0){
            setModalIsopen(true)
        } else {
            const review = {
                description : reviewDescription,
                star : reviewStar,
                pId: id,
                cId : cid
            }
            axios.post(url + '/reviews/addreview', review).then((response)=>{
                console.log(response.data)
                setReviewStatus(reviewStatus + 1)
                
            })
        }
    }
    const getReviews = () => {

        axios.get(url + '/products/reviews/' + id).then((response) => {
            const result = response.data
            console.log(result)
            setReviews(result)

        }
        )
    }

    const getAveragestar = () => {
        axios.get(url + '/products/averagestar/' + id).then((response) => {
            const result = response.data
            console.log(result)
            setAveragestar(result)
        }
        )
    }

    const getProduct = () => {
        console.log(url + '/products/' + id)
        axios.get(url + '/products/' + id).then((response) => {
            const result = response.data
            setProduct(result)

            console.log(result)
        })
    }

    const dispatch=useDispatch();
    let history=useHistory();
    return (

       <div className="container">
           <div className="row product-details">
               <div className = "col ">
                <div>
                    <img src={url + '/storage/' + product.thumbnail}
                        className='product-image' />
                </div>
                <div>
                <button onClick={() => {
                    console.log(cid + 'in add button')
                   if(cid==0) {
                    setModalIsopen(true)
                    //history.push("/popup")
                   }
                   else{
                   
                    dispatch(addToCart(product))
                      history.push("/shop")
                   }
                     
                }} className="btn btn-success">
                    Add to cart
                </button>
                <Modal 
                isOpen = {modalIsOpen} 
                onRequestClose = {()=> {setModalIsopen(false)}}
                style = {
                    {
                      overlay: {
                       backgroundColor: 'black',
                       opacity: '0.75',
                       
                      },
                      content: {
                        top: '25%',
                        left: '40%',
                        position: 'fixed',
                        backgroundColor: 'white',
                        color: 'Black',
                        width: '250px',
                        height: '200px'
                      }
                    } }>
                        <h3>Message !!!!!!</h3>
                        <p>Please Login first</p>
                        <div>
                            <button onClick = {()=>{setModalIsopen(false)}}> Close </button>
                        </div>
            </Modal>
            </div>
               </div>
               <div className = "col">
                <div>
                <div className="item-detail">
                    {product.name}
                </div>
                <div className="item-detail">
                    Price: {product.price} Rs
                </div>
                <div className="item-detail">
                    {product.details}
                </div>
                </div>
                <div className = "rating">
                    
                    Rating: {star} <span class="icon">★</span>
                </div>
                </div>
           </div>
           <div className = 'row review-container'> 
                <div className = 'col'>
                    Rivews
                        {isReviewEmpty ? 
                            <div>
                                None has reviewd yet !!
                                Pease be first one to add review
                            </div>: 
                            <div >
                                {reviews.map((review)=>{
                                    return (
                                        <div className = "review-item">
                                        <div>Rating: {review.star} <span class="icon">★</span> </div>
                                        <div>{review.description}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                </div>
           </div>
           <div className = 'row review-container'>
               <div className ='col'>
                   <div>
                       Enter Rating: <input type="text" onChange = {(e)=>{setReviewStar(e.target.value)}}></input>
                   </div>
                    <input 
                        type = "text" placeholder ="Add review here" 
                        style = {{width:'100%', height: '100px', border: 'solid', margin: '5px'}}
                        onChange = {(e)=>{setReviewDescription(e.target.value)}}>
                    </input>
                    <button 
                        className = 'btn btn-primary'
                        onClick = {addreview} >
                            Add Review</button>
               </div>
           </div>
       </div>
    )

}
export default ProductDetails