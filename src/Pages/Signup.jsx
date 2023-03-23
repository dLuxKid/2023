// REACT
import React, { useReducer, useState, useRef, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// IMAGE
import logo from "../assets/Images/logo.png";
// COMPONENT
import LogoContainer from "../components/LogoContainer";
import TextComponent from "../components/TextComponent";
import TitleComponent from "../components/TitleComponent";
import BtnComponent from "../components/BtnComponent";
// CONTEXT
import { useStateContext } from "../contexts/contextProvider";
// STYLES
import './styles.css'
// API
import { postSignup } from "../apis/Axios";


// USER REDUCER STATE
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// REDUCER FUNCTION
const reducer = (state, action) => {
  return { ...state, [action.input]: action.value };
};

const Signup = () => {
  document.title = "Signup";

  const navigate = useNavigate()
  const [nameIsValid, setNameIsValid] = useState(true)
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [passwordIsValid, setPasswordIsValid] = useState(true)
  const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(true)
  const formValid = useRef(false)

  // USEREDUCER DECLARATION
  const [state, dispatch] = useReducer(reducer, initialState);

  // CONTEXT VARIABLE
  const { login } = useStateContext();

  // INPUT CHNAGE FUNCTION
  const onChange = (e) => {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  };

  const validateName = () => {
    state.username.trim().length < 5 ? setNameIsValid(false) : setNameIsValid(true);
  }

  const validateEmail = () => {
    const emailRegex = state.email.search(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    emailRegex < 0 ? setEmailIsValid(false) : setEmailIsValid(true);
  }

  const validatePassword = () => {
    const requiredPassword = state.password.search(/\w\d/g);
    state.password.length < 8 && !requiredPassword ? setPasswordIsValid(false) : setPasswordIsValid(true)
  }

  const validateConfirmPassword = () => {
    state.confirmPassword === state.password ? setConfirmPasswordIsValid(true) : setConfirmPasswordIsValid(false)
  }

  const validateState = useCallback(() => {
    nameIsValid && passwordIsValid && emailIsValid && confirmPasswordIsValid ? formValid.current = true : formValid.current = false
  }, [nameIsValid, passwordIsValid, emailIsValid, confirmPasswordIsValid])

  // SUBMIT HANDLER
  const onSubmit = async (e) => {
    e.preventDefault();
    validateState()
    if (formValid.current) {
      const user = await postSignup("http://3.73.204.249/users/", {
        'name': state.username,
        'email': state.email,
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
  };

  return (
    <section className="h-screen w-full relative flex justify-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 blur-sm bg-authBg bg-no-repeat bg-center bg-cover"></div>
      <div className="bg-fillT w-[80%] md:w-3/5 m-auto max-w-xl rounded-2xl border-2 border-natural">
        <div className="flex flex-col justify-center items-center gap-4 p-[2.5%] ">
          <LogoContainer logo={logo} />
          <div className="text-center">
            <TitleComponent>Sign In</TitleComponent>
            <TextComponent styles={"mt-2"}>
              Please, enter your details to log in.
            </TextComponent>
          </div>
          <div className="w-full">
            <form action="" className="flex flex-col items-center">
              <input
                type="text"
                inputMode="text"
                autoCapitalize="false"
                placeholder="Username"
                name="username"
                onChange={onChange}
                onBlurCapture={validateName}
                className={`h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 border-[1px] ${nameIsValid ? 'border-gray-400 placeholder:text-gray-400' : 'border-red-400 placeholder:text-red-400'} `}
              />
              <input
                type="text"
                inputMode="email"
                autoCapitalize="false"
                placeholder="Email"
                name="email"
                onChange={onChange}
                onBlurCapture={validateEmail}
                className={`h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 border-[1px] ${emailIsValid ? 'border-gray-400 placeholder:text-gray-400' : 'border-red-400 placeholder:text-red-400'} `}
              />
              <input
                type="text"
                inputMode="password"
                autoCapitalize="false"
                placeholder="Password"
                name="password"
                onChange={onChange}
                onBlurCapture={validatePassword}
                className={`h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 border-[1px] ${passwordIsValid ? 'border-gray-400 placeholder:text-gray-400' : 'border-red-400 placeholder:text-red-400'} `}
              />
              <input
                type="text"
                inputMode="password"
                autoCapitalize="false"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={onChange}
                onBlurCapture={validateConfirmPassword}
                className={`h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 border-[1px] ${confirmPasswordIsValid ? 'border-gray-400 placeholder:text-gray-400' : 'border-red-400 placeholder:text-red-400'} `}
              />
              <BtnComponent
                onClick={onSubmit}
              >
                Sign up
              </BtnComponent>
            </form>
          </div>
          <div className="mb-2">
            <TextComponent>
              Already have an account?{" "}
              <NavLink to="/login" className="hover:font-medium hover:scale-75">
                Login
              </NavLink>
            </TextComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
