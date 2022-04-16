import {  Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import {url} from '../constants/url'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { staffLogin } from '../actions/staffActions';
import { Error_toast } from '../config/Error_toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Success_toast } from '../config/Success_toast';

const LoginPage = ()=>{
    const[email, setEmail] = useState('');
    const[cid, setCid] = useState(0)
    const[password, setPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const loginRedux = (staffDetails) => {
        dispatch(staffLogin(staffDetails))
        history.push('/login')
    }
    
    const loginUser = ()=>{
        const details = { mail : email, password: password}
        axios.post(url + 'staff/login', details).then((response)=>{
            const result = response.data
            
            if(result.status === 'success'){
                
                const staffDetails = {
                    id: result.data.staff_id,
                    firstName: result.data.firstName
                }
                
                if(result.data.role === "employee"){
                   
                    loginRedux(staffDetails)
                    history.push('/staff-orders')
                   
                } else if (result.data.role === "manager"){
                   
                    loginRedux(staffDetails)
                    setCid(result.data.staff_id)
                    history.push("/manager")
                    
                } else if (result.data.role === "admin"){
                    Success_toast("welcome admin");
                    loginRedux(staffDetails)
                    setCid(result.data.staff_id)
                    history.push("/admin")
                    
                } else {
                    Error_toast("login failed. This is admin portal you are anollwed to log in here");
                   
                }

            } else {
               
                Error_toast("login failed");
            }
        })
    }
    return (
        <div className= "container">
            <div className= "row">
                <div className= "col">
                    <div style = {{backgroundColor: 'grey', padding: "50px", width: "auto", margin: "100px"}} align = "left">
                        <input 
                        className="form-control" 
                        type = "email" 
                        onChange = { (e)=> setEmail(e.target.value)}
                        placeholder ='Enter email' 
                        required /> 
                        <br/>
                        <input 
                        className="form-control" 
                        type = 'password' 
                        onChange = { (e)=> setPassword(e.target.value)}
                        placeholder = 'Password' 
                        required /> 
                        <br />
                        <div className="form-group form-check " style = {{marginTop : "10px"}}>
                                
                            </div>
                            <div align = "center" style = {{marginTop : "10px"}}>
                            
                            <button type="Login" className="btn btn-success" onClick = {loginUser}>Log in</button>
                            <ToastContainer />
                            </div >
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage