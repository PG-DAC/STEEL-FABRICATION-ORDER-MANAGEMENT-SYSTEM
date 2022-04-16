import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import staffReducer from "./reducers/staffReducer"

const store = createStore(staffReducer, composeWithDevTools(applyMiddleware()))

export default store