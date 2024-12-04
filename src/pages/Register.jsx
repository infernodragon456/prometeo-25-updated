import "./Register.css";
import SignUp from "../components/Signup";
import SignIn from "../components/Signin";
import login_gate from "../assets/login-gate.jpg";
import signup_gate from "../assets/signup-gate.jpg";
import { useContext, useEffect ,useState} from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { user } = useContext(AuthContext);
  const [bg, setBg] = useState(login_gate)
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
    if(user){
      navigate("/dashboard");
    }
  }, []);
  const handleSignup = () => {
    const container = document.getElementById("form-container-id");
    const signIn = document.getElementById("sign-in-container-id");
    const signUp = document.getElementById("sign-up-container-id");
    container.classList.add("right-panel-active");
    signIn.classList.add("hide-it");
    signUp.classList.remove("hide-it");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setBg(signup_gate)

  };
  const handleSignin = () => {
    const container = document.getElementById("form-container-id");
    const signIn = document.getElementById("sign-in-container-id");
    const signUp = document.getElementById("sign-up-container-id");
    container.classList.remove("right-panel-active");
    signIn.classList.remove("hide-it");
    signUp.classList.add("hide-it");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setBg(login_gate)

  };

  return (
    <div className="form-container-main" id="form-container-id"  style={{ backgroundImage: `url(${bg})` }}>
      <div
        className="form-container sign-up-container hide-it"
        id="sign-up-container-id"
      >
        <SignUp handleSignin={handleSignin} />
      </div>
      <div
        className="form-container sign-in-container"
        id="sign-in-container-id"
      >
        <SignIn handleSignup={handleSignup} />
      </div>
     
    </div>
  );
};

export default Register;
