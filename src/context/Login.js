import React,{useContext} from 'react'
import {MyContext} from './MyContext'

function Login  (props) {
    const { authState, authActions } = useContext(MyContext);

    const login = () => {
      authActions.authStateChanged({name: "Burhanuddin" });
    }
    return (
      <div>
          {authState.user?.name}
        <button onClick={() => login()}>
          Login
        </button>
      </div>
    );
}

export default Login
