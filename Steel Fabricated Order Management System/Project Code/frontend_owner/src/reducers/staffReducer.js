const initialState = {
    firstName: 'Guest',
    cid: 0
}

const staffReducer = (state = initialState, action) => {
    console.log('reducer')
    switch(action.type){
        case 'login':
            return {
                ...state,
                firstName: action.staff.firstName,
                cid: action.staff.id
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

export default staffReducer