import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { customerLogin } from './../actions/customerActions';
import { url } from './../constants/url';
const Login = ()=>{
    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    const dispatch = useDispatch();
    
    const loginRedux = (custDetails)=> {
        dispatch(customerLogin(custDetails))
    }
    
    const loginUser = ()=>{
        
        const details = { mail : email, password: password}
        axios.post( url + 'customers/login', details)
        .then((response) =>{
            const result = response.data
            if(result.status === 'success'){
            const custDetails = {
                    id: result.data.id,
                    firstName: result.data.firstName
                }
                loginRedux(custDetails)
                history.push('/shop')
            } else {
                alert('login failed')
                console.log('failed')
            }
        })
    }



    return (
        <div className = "container">
           <div className = 'row'>
               <div className = 'col' align = "center">
                   <div style = {{backgroundColor: 'grey', padding: "50px", width: "auto", margin: "100px"}} align = "left" >
                       
                            <input 
                            onChange = {
                                (e) => {setEmail(e.target.value)}
                            }
                            className="form-control" type = "email" placeholder ='Enter email' required /> 
                            <br/>
                            <input 
                            onChange = {
                                (e) =>{setPassword(e.target.value)}
                            }
                            className="form-control" type = 'password' placeholder = 'Password' required /> 
                            <div className="form-group form-check " style = {{marginTop : "10px"}}>
                                <label className="form-check-label">
                                    <input className="form-check-input " type="checkbox" name="remember"/> Remember me
                                </label>
                            </div>
                            <div align = "center" style = {{marginTop : "10px"}}>
                            
                            <button type="Login" className="btn btn-success" onClick = {loginUser}>Log in</button>
                            </div >
                            <div style = {{marginTop : "50px"}} >
                            <span >Dont have account ?</span>
                            <Link to="/signup"><a href = "#">Sign Up</a></Link>
                            </div>
                        
                    </div>
               </div>
           </div>
        </div>
    )
}

export default Login;