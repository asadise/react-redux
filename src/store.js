 
import { combineReducers, createStore } from "redux";

import  LoadingReducer  from "./reducers/loading.reducers"
import  UserReducer  from "./reducers/user.reducers"

// Root Reducers
const rootReducer = combineReducers({
    LoadingReducer,
    UserReducer
});

// Store
export const store = createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);