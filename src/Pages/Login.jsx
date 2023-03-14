// REACT
import React from "react";
import { NavLink } from "react-router-dom";
// IMAGES
import logo from "../assets/Images/logo.png";
// COMPONENT
import LogoContainer from "../components/LogoContainer";
import TextComponent from "../components/TextComponent";
import TitleComponent from "../components/TitleComponent";
// STYLES
import './styles.css'

const Login = () => {
  document.title = "Login";

  return (
    <section className="h-screen w-full relative flex justify-center">
      <div className="auth absolute top-0 left-0 right-0 bottom-0 -z-10 blur-sm bg-authBg"></div>
      <div className="bg-fillT w-[80%] md:w-3/5 m-auto max-w-3xl rounded-2xl border-2 border-natural">
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
                type="text"
                inputMode="text"
                autoCapitalize='false'
                placeholder="Username"
                name="name"
                defaultValue={""}
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 placeholder:text-gray-400 border-2 border-gray-400"
              />
              <input
                type="text"
                inputMode="password"
                autoCapitalize='false'
                placeholder="Password"
                name="name"
                defaultValue={""}
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 placeholder:text-gray-400 border-2 border-gray-400"
              />
              <button
                type="submit"
                className={`outline-0 border-0 bg-brown text-center flex items-center justify-center py-1 px-6 md:px-8 rounded-md  text-white font-light text-xs xs:text-sm md:text-base lg:text-lg hover:shadow-lg active:scale-90 active:duration-150`}
              >
                Log in
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
