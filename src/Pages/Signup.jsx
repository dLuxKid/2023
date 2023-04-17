// REACT
import React, {
  useReducer,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
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
import "./styles.css";
// API
import { postSignup } from "../apis/Axios";

// USER REDUCER STATE
const initialState = {
  username: "",
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

  const navigate = useNavigate();
  const [isValid, setIsValid] = useState({
    username: true,
    email: true,
    password: true,
    confirmPassword: true,
  });
  const [err, setErr] = useState({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [stateErr, setStateErr] = useState(null);

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

  const validateName = useCallback(() => {
    if (state.username.trim().length < 5) {
      setIsValid((prev) => ({ ...prev, username: false }));
    } else {
      setIsValid((prev) => ({ ...prev, username: true }));
      setErr((prev) => ({ ...prev, name: null }));
    }
  }, [state.username]);

  const validateEmail = useCallback(() => {
    const emailRegex = state.email.search(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    console.log(emailRegex);
    if (emailRegex < 0) {
      setIsValid((prev) => ({ ...prev, email: false }));
    } else {
      setIsValid((prev) => ({ ...prev, email: true }));
      setErr((prev) => ({ ...prev, email: null }));
    }
  }, [state.email]);

  const validatePassword = useCallback(() => {
    const requiredPassword = state.password.search(/\w\d/g);
    if (state.password.trim().length < 8 && requiredPassword < 0) {
      setIsValid((prev) => ({ ...prev, password: false }));
    } else {
      setIsValid((prev) => ({ ...prev, password: true }));
      setErr((prev) => ({ ...prev, password: null }));
    }
  }, [state.password]);

  const validateConfirmPassword = useCallback(() => {
    if (state.confirmPassword !== state.password) {
      setIsValid((prev) => ({ ...prev, confirmPassword: false }));
    } else {
      setIsValid((prev) => ({ ...prev, confirmPassword: true }));
      setErr((prev) => ({ ...prev, confirmPassword: null }));
    }
  }, [state.confirmPassword]);

  useEffect(() => {
    validateName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
  }, [
    state.name,
    state.email,
    state.password,
    state.confirmPassword,
    validateName,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
  ]);

  // SUBMIT HANDLER
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      isValid.username &&
      isValid.email &&
      isValid.password &&
      isValid.confirmPassword
    ) {
      const user = await postSignup("http://3.73.204.249/users/", {
        name: state.name,
        email: state.email,
        password: state.password,
      });
      console.log(user);
      setStateErr(user.message);
      if (user) {
        login({ ...state, token: user.data.access_token });
        navigate("/dashboard");
      }
    } else {
      !isValid.username
        ? setErr((prev) => ({
            ...prev,
            name: "Name must be greater than 5 characters",
          }))
        : setErr((prev) => ({ ...prev, username: null }));
      !isValid.email
        ? setErr((prev) => ({ ...prev, email: "Email not valid" }))
        : setErr((prev) => ({ ...prev, email: null }));
      !isValid.password
        ? setErr((prev) => ({
            ...prev,
            password:
              "Password must include letters and numbers and must be greater than 8 characters",
          }))
        : setErr((prev) => ({ ...prev, password: null }));
      !isValid.confirmPassword
        ? setErr((prev) => ({
            ...prev,
            confirmPassword: "Password must be equal to password above",
          }))
        : setErr((prev) => ({ ...prev, confirmPassword: null }));
      return;
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
                type="text"
                inputMode="text"
                autoCapitalize="false"
                placeholder="Username"
                name="username"
                onChange={onChange}
                onBlurCapture={validateName}
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 border-[1px] border-gray-400 placeholder:text-gray-400"
              />
              <label htmlFor="">
                {err.email && (
                  <TextComponent
                    styles={"break-words text-red-400 text-left ml-1 mb-1"}
                  >
                    {err.email}
                  </TextComponent>
                )}
              </label>
              <input
                type="text"
                inputMode="email"
                autoCapitalize="false"
                placeholder="Email"
                name="email"
                onChange={onChange}
                onBlurCapture={validateEmail}
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
                type="password"
                inputMode="password"
                autoCapitalize="false"
                placeholder="Password"
                name="password"
                onChange={onChange}
                onBlurCapture={validatePassword}
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 border-[1px] border-gray-400 placeholder:text-gray-400"
              />
              <label htmlFor="">
                {err.confirmPassword && (
                  <TextComponent
                    styles={"break-words text-red-400 text-left ml-1 mb-1"}
                  >
                    {err.confirmPassword}
                  </TextComponent>
                )}
              </label>
              <input
                type="password"
                inputMode="password"
                autoCapitalize="false"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={onChange}
                onBlurCapture={validateConfirmPassword}
                className="h-10 pl-3 mb-4 self-stretch rounded-md bg-white text-gray-400 border-[1px] border-gray-400 placeholder:text-gray-400"
              />
              <div className="self-center mt-2">
                <BtnComponent onClick={onSubmit}>Sign up</BtnComponent>
              </div>
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
