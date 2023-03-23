// REACT
import React, { useState, useReducer, useCallback, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// IMAGES
import logo from "../assets/Images/logo.png";
// COMPONENT
import LogoContainer from "../components/LogoContainer";
import TextComponent from "../components/TextComponent";
import TitleComponent from "../components/TitleComponent";
import BtnComponent from "../components/BtnComponent";
// STYLES
import './styles.css'
// CONTEXT
import { useStateContext } from "../contexts/contextProvider";
// API 
import { postLogin } from "../apis/Axios";


// USER REDUCER STATE
const initialState = {
  token: '',
  username: "",
  password: "",
};

// REDUCER FUNCTION
const reducer = (state, action) => {
  return { ...state, [action.input]: action.value };
};

const Login = () => {
  document.title = "Login";

  const navigate = useNavigate()
  const [nameIsValid, setNameIsValid] = useState(true)
  const [passwordIsValid, setPasswordIsValid] = useState(true)
  const formValid = useRef(false)


  // USEREDUCER DECLARATION
  const [state, dispatch] = useReducer(reducer, initialState);

  // CONTEXT VARIABLE
  const { login } = useStateContext();

  // INPUT CHANGE FUNCTION
  const onChange = (e) => {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  };

  const validateName = () => {
    const emailRegex = state.username.search(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    console.log(emailRegex);
    if (emailRegex < 0) {
      setNameIsValid(false)
    } else {
      setNameIsValid(true)
    }
  }

  const validatePassword = () => {
    const requiredPassword = state.password.search(/\w\d/g);
    if (state.password.trim().length < 8 && requiredPassword < 0) {
      setPasswordIsValid(false)
    } else {
      setPasswordIsValid(true)
    }
  }

  const validateState = useCallback(() => {
    if (nameIsValid && passwordIsValid) {
      formValid.current = true
    } else {
      formValid.current = false
    }
    console.log(formValid.current);
  }, [nameIsValid, passwordIsValid])



  const handleSubmit = async (e) => {
    e.preventDefault();
    validateState()
    if (formValid.current) {
      const user = await postLogin("http://3.73.204.249/login/", {
        'grant_type': 'password',
        'username': state.username,
        'password': state.password
      })
      console.log(user);
      if (user) {
        login({ ...state, token: user.data.access_token })
        navigate('/dashboard')
      }
    } else {
      return
    }
  }



  return (
    <section className="h-screen w-full relative flex justify-center">
      <div className="bg-authBg bg-no-repeat bg-center bg-cover absolute top-0 left-0 right-0 bottom-0 -z-10 blur-sm"></div>
      <div className="bg-fillT w-[80%] md:w-3/5 m-auto max-w-xl rounded-2xl border-2 border-natural">
        <div className="flex flex-col justify-center text-center items-center gap-4 p-[2.5%] ">
          <LogoContainer logo={logo} />
          <div>
            <TitleComponent>Sign In</TitleComponent>
            <TextComponent styles={"mt-2"}>
              Please, enter your details to log in.
            </TextComponent>
          </div>
          <div className="w-full">
            <form action="" className="flex flex-col items-center">
              <input
                autoFocus
                onChange={onChange}
                type="text"
                inputMode="email"
                autoCapitalize='false'
                placeholder="Email"
                name="username"
                onBlurCapture={validateName}
                className={`h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 border-[1px] ${nameIsValid ? 'border-gray-400 placeholder:text-gray-400' : 'border-red-400 placeholder:text-red-400'} `}
              />
              <input
                onChange={onChange}
                type="text"
                inputMode="password"
                autoCapitalize='false'
                placeholder="Password"
                name="password"
                onBlurCapture={validatePassword}
                className={`h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 border-[1px] ${passwordIsValid ? 'border-gray-400 placeholder:text-gray-400' : 'border-red-400 placeholder:text-red-400'} `}
              />
              <BtnComponent
                onClick={handleSubmit}
              >
                Log in
              </BtnComponent>
            </form>
          </div>
          <div>
            <TextComponent>
              Dont have an account?{" "}
              <NavLink
                to="/signup"
                className="hover:font-medium hover:scale-75"
              >
                Sign up
              </NavLink>
            </TextComponent>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Login;
