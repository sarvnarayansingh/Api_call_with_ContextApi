import React,{useContext,useState} from 'react'
import {MyContext} from './MyContext'
import {userTypes} from './Reducer'
import {userall} from './Reducer'

function Login  (props) {
  const [authState, dispatch] = useContext(MyContext);
  const [name] =useState("virat")
  const [allname] =useState("kohali")

    const login = () => {
      dispatch(userTypes(name));
      dispatch(userall(allname));
    }
    return (
      <div>
          {authState.user}
        <button onClick={() => login()}>
          Login
        </button>
      </div>
    );
}

export default Login
