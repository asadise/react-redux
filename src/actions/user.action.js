import axios from "axios"

export const DELETE_USER = "DELETE_USER";
export const DETAILS_USER = "DETAILS_USER";
export const ADD_USER = "ADD_USER";
export const ADD_USERS = "ADD_USERS";
export const REJECT_USER = "REJECT_USER";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export function rejcetUser(id) {
  return {
    type: REJECT_USER,
    paylod: id
  };
}


export function DeleteUser(id) {
  return {
    type: DELETE_USER,
    payload: id,
  };
}

export function DetailsUser(id) {
  return {
    type: DETAILS_USER,
    payload: id,
  };
}

export function AddUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export function AddUsers(users) {
  return {
    type: ADD_USERS,
    payload: users,
  };
}

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error }
});

export function fetchUsers() {
  return dispatch => {
    return axios("http://my-json-server.typicode.com/asadise/book-api/books")
      .then(result => {
        dispatch(AddUsers(result.data));
        return result.data;
      })
      .catch(error => dispatch(fetchUsersFailure(error)));
  };
}


