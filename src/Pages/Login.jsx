// REACT
import React, { useState, useReducer, useCallback, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// IMAGES
import logo from "../assets/Images/logo.png";
// COMPONENT
import LogoContainer from "../components/LogoContainer";
import TextComponent from "../components/TextComponent";
import TitleComponent from "../components/TitleComponent";
import BtnComponent from "../components/BtnComponent";
// STYLES
import "./styles.css";
// CONTEXT
import { useStateContext } from "../contexts/contextProvider";
// API
import { postLogin } from "../apis/Axios";

// USER REDUCER STATE
const initialState = {
  token: "",
  username: "",
  password: "",
};

// REDUCER FUNCTION
const reducer = (state, action) => {
  return { ...state, [action.input]: action.value };
};

const Login = () => {
  document.title = "Login";

  const navigate = useNavigate();
  const [isValid, setIsValid] = useState({
    username: true,
    password: true,
  });
  const [err, setErr] = useState({
    name: null,
    password: null,
  });
  const [stateErr, setStateErr] = useState(null);

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

  const validateName = useCallback(() => {
    const emailRegex = state.username.search(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    console.log(emailRegex);
    if (emailRegex < 0) {
      setIsValid((prev) => ({ ...prev, username: false }));
    } else {
      setIsValid((prev) => ({ ...prev, username: true }));
      setErr(prev => ({...prev, name:null}))
    }
  }, [state.username]);

  const validatePassword = useCallback(() => {
    const requiredPassword = state.password.search(/\w\d/g);
    if (state.password.trim().length < 8 && requiredPassword < 0) {
      setIsValid((prev) => ({ ...prev, password: false }));
    } else {
      setIsValid((prev) => ({ ...prev, password: true }));
      setErr(prev => ({...prev, password:null}))
    }
  }, [state.password]);

  useEffect(() => {
    validateName();
    validatePassword();
  }, [state.email, state.password, validateName, validatePassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(isValid);

    if (isValid.username && isValid.password) {
      const user = await postLogin("http://3.73.204.249/login/", {
        grant_type: "password",
        username: state.username,
        password: state.password,
      });
      console.log(user.message);
      setStateErr(user.message);
      if (user) {
        login({ ...state, token: user.data.access_token });
        navigate("/dashboard");
      }
    } else {
      !isValid.name
        ? setErr((prev) => ({ ...prev, name: "Email not valid" }))
        : setErr((prev) => ({ ...prev, name: null }));
      !isValid.password
        ? setErr((prev) => ({
            ...prev,
            password:
              "must include letters and numbers and must be greater than 8 characters",
          }))
        : setErr((prev) => ({ ...prev, password: null }));
      return;
    }
  };

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
            {stateErr && (
              <TitleComponent styles={"text-red-400"}>
                {stateErr}
              </TitleComponent>
            )}
          </div>
          <div className="w-full">
            <form action="" className="flex flex-col">
              <label htmlFor="">
                {err.name && (
                  <TextComponent
                    styles={"break-words text-red-400 text-left ml-1 mb-1"}
                  >
                    {err.name}
                  </TextComponent>
                )}
              </label>
              <input
                autoFocus
                onChange={onChange}
                type="text"
                inputMode="email"
                autoCapitalize="false"
                placeholder="Email"
                name="username"
                onBlurCapture={validateName}
                value={state.username}
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 border-[1px] border-gray-400 placeholder:text-gray-400"
              />
              <label htmlFor="">
                {err.password && (
                  <TextComponent
                    styles={"break-words text-red-400 text-left ml-1 mb-1"}
                  >
                    {err.password}
                  </TextComponent>
                )}
              </label>
              <input
                onChange={onChange}
                type="password"
                inputMode="password"
                autoCapitalize="false"
                placeholder="Password"
                name="password"
                onBlurCapture={validatePassword}
                value={state.password}
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 border-[1px] border-gray-400 placeholder:text-gray-400"
              />
              <div className="self-center mt-2">
                <BtnComponent onClick={handleSubmit}>Log in</BtnComponent>
              </div>
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
    </section>
  );
};

export default Login;
