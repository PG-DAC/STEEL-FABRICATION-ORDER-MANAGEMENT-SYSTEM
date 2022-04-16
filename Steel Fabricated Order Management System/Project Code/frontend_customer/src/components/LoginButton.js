import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { customerLogout } from "../actions/customerActions"
export const LoginButton = (props)=>{
    const [check, setCheck] = useState(false)
    const dispatch = useDispatch()
    const logout = ()=>{
        dispatch(customerLogout())
        
    }
    useEffect(()=>{
        setCheck(props.status)
    }, [props])
    
    
    
    if(check){
        return(
            <div  >
                <button onClick = {logout}>Sign out</button>
            </div>
        )
    } else {
        return (
            <div >
                <Link to = "/login">
                    <button>Sign in </button>
                </Link>
            </div>
        )
    }
}

export default LoginButton