import React from 'react'
import { useNavigate } from 'react-router';
const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();  
  
  const loginUser=(event)=>{

    event.preventDefault();
    console.log("login user function issue");
    setAuthenticate(true);
    navigate("/");
  }
  return (
    <form onSubmit={(event)=>loginUser(event)}>
    <div className="login-page"> {/* login-page라는 클래스를 추가 */}
    <div className="login-container">
      <div className="login-form">
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn-login">Login</button>
      </div>
    </div>
    </div>
    </form>
  );
}


export default Login
