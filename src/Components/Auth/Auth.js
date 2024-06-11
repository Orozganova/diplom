import "./Auth.css";
import { useContext } from "react";
import { LogIn, LogOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import Header from "../Header/Header";


export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button className="blueBtn" onClick={LogIn}>Sign in</button> : null}
      {user ? <span><Link to="/orders">{user.displayName}</Link></span> : null}
    
    </div>
  );
}