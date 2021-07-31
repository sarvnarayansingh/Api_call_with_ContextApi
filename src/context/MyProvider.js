import React,{useReducer} from 'react'
import {MyContext} from './MyContext'
import {Reducer} from './Reducer'
import {initialState} from './Reducer'
import {AUTH_STATE_CHANGED} from './Reducer'


const MyProvider = (props) => {
    const [authState, dispatch] = useReducer(Reducer, initialState);

    const actions = {
        authStateChanged: (user) => {
          if (user) {
            dispatch({ type: AUTH_STATE_CHANGED, payload: user });
          } 
        },
      };
    return(
        <MyContext.Provider value={{
            authState: authState,
            authActions: actions,
          }}>
            {props.children}
        </MyContext.Provider>
    )

}
export default MyProvider;
