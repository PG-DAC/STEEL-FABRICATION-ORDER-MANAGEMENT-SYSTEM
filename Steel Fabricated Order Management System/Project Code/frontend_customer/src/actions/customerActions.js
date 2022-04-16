const LOG_IN = 'login'
const LOG_OUT = 'logout'

export const customerLogin = (custDetails) =>{
    return {
        type: LOG_IN,
        customer: custDetails
    }
}

export const customerLogout = () =>{
    return {
        type: LOG_OUT
    }
}
