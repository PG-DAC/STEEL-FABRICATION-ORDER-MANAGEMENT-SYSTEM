const initialState = {
    cart: [ ],
    
}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
        return  {
            cart : [ ...state.cart ,action.product] 
        } ;
           
        
        case 'REMOVE_FROM_CART':
           
          
            
           const newItems = []
           for (const product of state.cart) {
             if (product != action.product) {
               newItems.push(product)
             }
           }
           console.log(newItems)
           return {
           cart :  newItems
           };
           

        default: return state
    }
}

export default cartReducer