import React,{useContext,useState} from 'react'
import {MyContext} from './MyContext'
import * as actionTypes from '../Redux/Action/ActionTypes'
import axios from 'axios'


function Login  (props) {
  const [authState, dispatch] = useContext(MyContext);

  const [allname] =useState("kohali")

    const login = () => {
      axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
    dispatch(actionTypes.actionTypes(response));
  })
      
      dispatch(actionTypes.userall(allname));
    }
    console.log("authState",authState)
    return (
      <div>
        <button onClick={() => login()}>
          Login
        </button>
      </div>
    );
}

export default Login
