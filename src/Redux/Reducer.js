import * as actionConstant from '../Redux/Action/ActionConstant'

export const initialState = {
    user:null,
    userall:[]
}




export const Reducer = (state = initialState, action) => {
  console.log("action",action)
    switch (action.type) {
      case actionConstant.AUTH_STATE_CHANGED:
        return {
            ...state,
            user:action.user
        };
      case actionConstant.AUTHALL_STATE_CHANGED:
        return {
            ...state,
            userall:action.userall
        };
        default:
            return state
    }
  };