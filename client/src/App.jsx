import {Routes,Route} from 'react-router-dom';
import SignUp from "./components/SignUp";
import Login from './components/Login';
const App=()=>{
  return(
    <>
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App;