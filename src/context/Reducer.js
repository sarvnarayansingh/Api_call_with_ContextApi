// import React,{useReducer} from 'react'

export const initialState = {
    user:[]
}

export const AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED";

export const userTypes = (user) => {
  console.log(user)
  return{
    type: AUTH_STATE_CHANGED,
  user,
  }
};

export const Reducer = (state = initialState, action) => {
  console.log("action",action)
    switch (action.type) {
      case AUTH_STATE_CHANGED:
        return {
          user: state.user.concat(action.user),
        };
        default:
            return state
    }
  };