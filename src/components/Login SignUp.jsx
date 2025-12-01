import "./Login SignUp.css";
import user_icon from "../components/Asset/person.png";
import email_icon from "../components/Asset/email.png";
import password_icon from "../components/Asset/password.png";
import { useState } from "react";

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign up");
  return (
    <div className="conatainer">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underLine"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="Password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Lost password? <span>Click Here!</span>
      </div>
      <div className="submit_container">
        <div className={action === "Login" ? " submit gray" : "submit"}>
          SignUp
        </div>
        <div className={action === "SignUp" ? "submit gray" : "submit"}>
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
