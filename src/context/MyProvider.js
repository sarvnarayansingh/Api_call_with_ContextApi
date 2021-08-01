import React,{useReducer} from 'react'
import {MyContext} from './MyContext'
import {Reducer,initialState} from '../Redux/Reducer'


const MyProvider = (props) => {
    const [globalState, dispatch] = useReducer(Reducer, initialState);

    return(
        <MyContext.Provider value={[globalState, dispatch]}>
            {props.children}
        </MyContext.Provider>
    )

}
export default MyProvider;
