
import './App.css';
import Login from './context/Login';
import MyProvider from './context/MyProvider'

function App() {
  return (
    <MyProvider>
   <h1>hello</h1>
   <Login />
   </MyProvider>
  );
}

export default App;
