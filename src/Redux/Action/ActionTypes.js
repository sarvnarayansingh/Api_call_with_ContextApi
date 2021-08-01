import * as actionConstant from './ActionConstant'

export const actionTypes = (user) => {
    return{
      type: actionConstant.AUTH_STATE_CHANGED,
    user,
    }
  };

  export const userall = (userall) => {
    return{
      type: actionConstant.AUTHALL_STATE_CHANGED,
      userall,
    }
  };