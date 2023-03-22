// REACT
import React, { useEffect, useState, useReducer } from "react";
import { NavLink } from "react-router-dom";
// IMAGES
import logo from "../assets/Images/logo.png";
// COMPONENT
import LogoContainer from "../components/LogoContainer";
import TextComponent from "../components/TextComponent";
import TitleComponent from "../components/TitleComponent";
// STYLES
import './styles.css'
// CONTEXT
import { useStateContext } from "../contexts/contextProvider";
// API 
import { postLogin } from "../apis/Axios";

// USER REDUCER STATE
const initialState = {
  username: "",
  password: "",
};

// REDUCER FUNCTION
const reducer = (state, action) => {
  return { ...state, [action.input]: action.value };
};

const Login = () => {
  document.title = "Login";

  // USEREDUCER DECLARATION
  const [state, dispatch] = useReducer(reducer, initialState);

  // CONTEXT VARIABLE
  const { setUserData } = useStateContext();

  // INPUT CHNAGE FUNCTION
  const onChange = (e) => {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await postLogin("http://3.73.204.249/login/", {
      'grant_type': 'password',
      'username': state.username,
      'password': state.password
    })
    if (user) setUserData({ ...state, token: user.data.access_token })
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
                onChange={onChange}
                type="text"
                inputMode="text"
                autoCapitalize='false'
                placeholder="Username"
                name="username"
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 placeholder:text-gray-400 border-[1px] border-gray-400"
              />
              <input
                onChange={onChange}
                type="text"
                inputMode="password"
                autoCapitalize='false'
                placeholder="Password"
                name="password"
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 placeholder:text-gray-400 border-[1px] border-gray-400"
              />
              <button
                onClick={handleSubmit}
                type="submit"
                className={`outline-0 border-0 text-center flex items-center justify-center rounded-md  text-white font-light text-xs xs:text-sm md:text-base lg:text-lg hover:shadow-lg bg-brown active:scale-90 active:duration-150`}
              >
                <NavLink to="/dashboard" className={`py-1 px-6 md:px-8`}>Log in</NavLink>
              </button>
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
