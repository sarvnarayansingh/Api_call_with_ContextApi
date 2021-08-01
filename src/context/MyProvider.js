import React,{useReducer} from 'react'
import {MyContext} from './MyContext'
import {Reducer,initialState} from './Reducer'


const MyProvider = (props) => {
    const [globalState, dispatch] = useReducer(Reducer, initialState);
    console.log("globalState",globalState)

    return(
        <MyContext.Provider value={[globalState, dispatch]}>
            {props.children}
        </MyContext.Provider>
    )

}
export default MyProvider;
