import {Routes,Route} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from './components/base/Login';
import Error from './components/base/Error';
import Nav from './components/base/Nav';
import HomePage from "./components/Todo/HomePage";

function App() {
const isLogin = useSelector((state) => state.isLogin);
const user = JSON.parse(localStorage.getItem("userData"));
const userIsLogin=()=>{
  if(user!=null){
    return true;
  }
}
  return (<>
    <Nav />
    <div className="container my-5">
      <div className="row">
        <Routes>
            <Route path="error" element={<Error />} /> 
             {userIsLogin && <Route path="/" element={<HomePage />} />} 
             {!isLogin && <Route path="/login" element={<Login />} />} 
             {/* <Route path="login" element={!isLogin ? <Login /> : <Error />} />  */}
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
