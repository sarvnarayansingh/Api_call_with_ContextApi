import React,{useContext,useState} from 'react'
import {MyContext} from './MyContext'
import {userTypes} from './Reducer'

function Login  (props) {
  const [authState, dispatch] = useContext(MyContext);
  const [name] =useState("virat")

    const login = () => {
      dispatch(userTypes(name));
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
