import {Routes, Route} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App(){
    return (
        <Routes>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    )
}

export default App;