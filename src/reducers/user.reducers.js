import { ADD_USER, ADD_USERS, DELETE_USER, DETAILS_USER, REJECT_USER } from "../actions/user.action"

const initState = {
    users: []
}
const UserReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === DELETE_USER)
        debugger
    switch (action.type) {
        case DELETE_USER:
            return { users: state.users.filter(user => user.id !== action.payload) }
        case DETAILS_USER:
            return state
        case ADD_USER:
            return state
        case ADD_USERS:
            return { ...state, users: [...state.users, ...action.payload] }

        case REJECT_USER:
            return Object.assign({}, state, {
                users: state.users.map((user, id) => {
                    if (id === action.paylod)
                        return Object.assign({}, user, { image: "-" });
                    return user
                })
            })
        default:
            return state
    }
}

export default UserReducer;