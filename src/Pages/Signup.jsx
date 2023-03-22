// REACT
import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
// IMAGE
import logo from "../assets/Images/logo.png";
// COMPONENT
import LogoContainer from "../components/LogoContainer";
import TextComponent from "../components/TextComponent";
import TitleComponent from "../components/TitleComponent";
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

  //   const validateState = (state) => {
  //     const emailRegex = state.email.search(
  //       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  //     );
  //     const requiredPassword = state.password.search(/\w\d/g);
  //     state.name.trim().length < 5 ? setNameIsValid(false) : setNameIsValid(true);

  //     emailRegex >= 0 ? setEmailIsValid(false) : setEmailIsValid(true);

  //     requiredPassword < 0 && state.password.length < 8
  //       ? setPasswordIsValid(false)
  //       : setConfirmPasswordIsValid(true);

  //     state.password === state.confirmPassword
  //       ? setConfirmPasswordIsValid(false)
  //       : setConfirmPasswordIsValid(true);
  //   };

  // SUBMIT HANDLER
  const onSubmit = async (e) => {
    e.preventDefault();
    setUserData(state);
    // const user = await postSignup("http://3.73.204.249/users/", state)
    // console.log(user)
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
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 placeholder:text-gray-400 placeholder:font-light placeholder:text-base  border-[1px] border-gray-400"
              />
              <input
                type="text"
                inputMode="email"
                autoCapitalize="false"
                placeholder="Email"
                name="email"
                onChange={onChange}
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 placeholder:text-gray-400 placeholder:font-light placeholder:text-base  border-[1px] border-gray-400"
              />
              <input
                type="text"
                inputMode="password"
                autoCapitalize="false"
                placeholder="Password"
                name="password"
                onChange={onChange}
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 placeholder:text-gray-400  placeholder:font-light placeholder:text-base border-[1px] border-gray-400"
              />
              <input
                type="text"
                inputMode="password"
                autoCapitalize="false"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={onChange}
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 placeholder:text-gray-400  placeholder:font-light placeholder:text-base border-[1px] border-gray-400"
              />
              <button
                onClick={onSubmit}
                type="submit"
                className={`outline-0 border-0 text-center flex items-center justify-center rounded-md  text-white font-light text-xs xs:text-sm md:text-base lg:text-lg hover:shadow-lg ${true
                  ? "bg-brown active:scale-90 active:duration-150"
                  : "bg-gray-400"
                  }`}
              >
                <NavLink to="/dashboard" className={`py-1 px-6 md:px-8`}>Sign up</NavLink>
              </button>
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
