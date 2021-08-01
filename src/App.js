
import './App.css';
import Login from './context/Login';
import MyProvider from './context/MyProvider'
import {Reducer,initialState} from './context/Reducer'

function App() {
  return (
    <MyProvider initialState={initialState} reducer={Reducer}>
   <h1>hello</h1>
   <Login />
   </MyProvider>
  );
}

export default App;
