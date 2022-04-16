const SignUp= ()=>{
 return (
     <div className = "container-fuild">
         <div className = "row">
             <div className = "col">
             <div style = {{backgroundColor: 'lightsalmon', padding: "50px", width: "auto", margin: "100px"}}  >
                        <form> 
                            <h3>Sign Up</h3>
                            <input className="form-control" type = "email" placeholder ='Enter email' required /> 
                            <br/>
                            <input className="form-control" type = 'password' placeholder = 'Password' required /> 
                            <br/>
                            <input className="form-control" type = 'text' placeholder = 'Firstname' required /> 
                            <br/>
                            <input className="form-control" type = 'text' placeholder = 'Lastname' required /> 
                            <div align = "center" style = {{marginTop : "10px"}}>
                            <button type="Login" className="btn btn-primary" >Log in</button>
                            </div >
                            
                        </form>
                    </div>
             </div>
         </div>
     </div>
 )
}
export default SignUp;