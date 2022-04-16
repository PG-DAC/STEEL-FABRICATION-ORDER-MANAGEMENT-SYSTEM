const LOG_IN = 'login'
const LOG_OUT = 'logout'

export const staffLogin = (staffDetails) =>{
    return {
        type: LOG_IN,
        staff: staffDetails
    }
    
}

export const staffLogout = () =>{
    return {
        type: LOG_OUT
    }
}
