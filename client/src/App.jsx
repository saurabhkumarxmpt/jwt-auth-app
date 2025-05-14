import {Routes,Route} from 'react-router-dom';
import SignUp from "./components/SignUp";
import Login from './components/Login';
import Profile from './components/Profile';
const App=()=>{
  return(
    <>
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default App;