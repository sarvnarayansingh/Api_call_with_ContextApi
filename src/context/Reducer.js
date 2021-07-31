// import React,{useReducer} from 'react'

export const initialState = {
    user:null
}

export const AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED";

export const Reducer = (state, action) => {
    switch (action.type) {
      case AUTH_STATE_CHANGED:
        return {
          user: action.payload,
        };
        default:
            return state
    }
  };