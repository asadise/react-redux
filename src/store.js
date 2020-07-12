import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

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
   applyMiddleware(thunk)
);