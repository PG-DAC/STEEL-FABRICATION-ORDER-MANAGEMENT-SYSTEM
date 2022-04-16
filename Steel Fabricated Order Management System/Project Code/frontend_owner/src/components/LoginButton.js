import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { staffLogout } from "../actions/staffActions"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
export const LoginButton = (props)=>{
    const [check, setCheck] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const logout = ()=>{
        dispatch(staffLogout())
        history.push('login')
    }
    const id = useSelector((state) => state.cid)
    console.log(id)
    useEffect(()=>{
        setCheck(props.status)
    }, [props])
    
    
    
    if(id !== 0){
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