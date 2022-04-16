
const initialState = {
    firstName: 'Guest',
    cid: 0
}

const customerReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'login':
        return {
           ...state,
           firstName: action.customer.firstName,
           cid: action.customer.id
        }
        case 'logout':
            return{
                ...state,
                firstName: 'Guest',
                cid: 0
            }
        default: return state
    }
}

export default customerReducer