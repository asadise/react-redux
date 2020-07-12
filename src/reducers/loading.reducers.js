import { START_LOADING, STOP_LOADING } from '../actions/loading.action'

const LoadingReducer = (state = false, action) => {
    console.log(action)
    switch (action.type) {
        case STOP_LOADING:
            return false
        case START_LOADING:
            return true
        default:
            return state
    }
}

export default LoadingReducer;