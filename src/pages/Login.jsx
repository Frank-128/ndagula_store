import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { userAuth } from "../contexts/UserAuthContext";
import "./Login.css";
function Login() {
  const [body, setBody] = React.useState({});
  const { user,setTheUser,csrfToken } = userAuth();
  const navigate = useNavigate();
  const [err,setErr] = React.useState(null);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password } = e.target.elements;
    const inputs = {
      email: name.value,
      password: password.value,
    };
    await csrfToken();

    try {
      
      const res = await axios.post("/login",JSON.stringify(inputs));
      
      
      if(res.data.user){

        setTheUser(res.data.user);
        if(res.data.user.role ===1){
          navigate('/admin/')
        }
       else if(res.data.user.role === 0){

         navigate("/");
       }
      }
     
      
    } catch (err) {
     setErr(err)
    }

   
    setBody(inputs);
  };
  useEffect(()=>{
    if(user!==null){
      navigate('/');
    }
  },[user])
  return (
    <div className="login">
      <div className="label_name">NDAGULA STORE</div>
      
      <form className="login_form" onSubmit={handleSubmit}>
        <div className="login_item">
          <label htmlFor="name">username or email</label>
          <input type="text" id="name" name="name" />
        </div>
        {err &&<span style={{color:'red'}}>Email or password incorrect</span>}
        <div className="login_item">
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="button_container">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
