import { useState } from "react"
import { useHistory } from 'react-router';
import { useSelector } from "react-redux";
import axios from "axios";
import { url } from './../constants/url';


const Payment = () =>{
    const history = useHistory()
    const id = useSelector((state) => state.loggedUser.cid)
    const [amount1, setAmount] = useState(0);
    const [cardNumber, setCardNumber] = useState(0);
    const [cvv, setCvv] = useState(0);
    const [name, setName] = useState(" ");
    const makePayment = ()=>{
        if(amount1 === 0){
            alert("please enter amount")
        } else if (name === " "){
            alert("Please enter name")
        } else if (cardNumber === 0){
            alert("Please enter card number")
        } else if (cvv === 0){
            alert("please enter cvv")
        }
        const transaction = {
            amount: amount1,
            cid: id 
        }
        axios.post(url + 'customers/pay', transaction).then((response) => {
            history.push('/view-cart')
        })
        
    }
    return (
        <div className = 'container'>
            <div className = 'row'>
                <div className = 'col' style = {{backgroundColor: "white"}}>
                    <h3 style = {{justifyContent: "center"}}>Welcome To payment services</h3>
                    <div style = {{ margin: "10px"}}>
                        <input type = 'text'
                        className = "form-control form" 
                        placeholder = 'Enter Amount'
                        onChange = {(e)=>{ setAmount(e.target.value)}}>
                        </input>
                        <input type = 'text' 
                        className = "form-control form"
                        placeholder = 'Name on Card'
                        onChange = {(e)=>{ setName(e.target.value)}}>
                        </input>
                        <input type = 'text' 
                        className = "form-control form"
                        placeholder = 'Enter Card Number'
                        onChange = {(e)=>{ setCardNumber(e.target.value)}}>
                        </input>
                        <input type = 'password' 
                        className = "form-control form"
                        placeholder = 'CVV'
                        onChange = {(e)=>{ setCvv(e.target.value)}}>
                        </input>
                        <div style = {{marginLeft: "100px"}}>
                        <button 
                        className = 'btn-sm btn-info' 
                        onClick = {makePayment}>Pay</button>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}



export default Payment