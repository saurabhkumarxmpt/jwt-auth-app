import {Routes,Route} from 'react-router-dom';
import SignUp from "./components/SignUp";
const App=()=>{
  return(
    <>
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App;