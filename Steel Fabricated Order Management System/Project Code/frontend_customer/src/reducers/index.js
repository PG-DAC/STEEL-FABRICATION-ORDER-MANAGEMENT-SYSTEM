import { combineReducers } from "redux";

import customerReducer from "./customerReducer";
import cartReducer from "./cartReducer";

const reducers=combineReducers({cartProducts:cartReducer , loggedUser:customerReducer})

export default reducers;
