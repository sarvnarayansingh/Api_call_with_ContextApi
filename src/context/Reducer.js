

export const initialState = {
    user:[],
    userall:[]
}

export const AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED";
export const AUTHALL_STATE_CHANGED = "AUTHALL_STATE_CHANGED";

export const userTypes = (user) => {
  console.log(user)
  return{
    type: AUTH_STATE_CHANGED,
  user,
  }
};
export const userall = (userall) => {
  console.log("userall",userall)
  return{
    type: AUTHALL_STATE_CHANGED,
    userall,
  }
};

export const Reducer = (state = initialState, action) => {
  console.log("action",action)
    switch (action.type) {
      case AUTH_STATE_CHANGED:
        return {
            ...state,
            user:action.user
        };
      case AUTHALL_STATE_CHANGED:
        return {
            ...state,
            userall:action.userall
        };
        default:
            return state
    }
  };