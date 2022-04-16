import axios from "axios";
import { useState,useEffect } from "react";
import { url } from './../constants/url';
const UserProfile = (props)=>{
    let result;
    //const [id, setId] = useState(0);
    let id = props.id;
    useEffect(()=>{
        getCustomer()
    }, [])
    const getCustomer = () =>{
        axios.get(url+ '/customers/' + id).then((response) =>{
            console.log(response.data);
            result = response.data;
        })
    }
    return (
        <div>
            {JSON.stringify(result)}
        </div>
    )
}

export default UserProfile;
