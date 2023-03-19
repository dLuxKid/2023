// REACT
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// IMAGES
import logo from "../assets/Images/logo.png";
// COMPONENTS
import LogoContainer from "../components/LogoContainer";
import TitleComponent from "../components/TitleComponent";
import TextComponent from "../components/TextComponent";
import BtnComponent from '../components/BtnComponent'

const Home = () => {

  useEffect(() => {
    // FUNCTION FOR SETTING NAVBAR DISPLAY
    const nav = document.querySelector("nav");
    const setDisplay = () => {
      if (window.scrollY > nav.offsetTop) {
        nav.classList.add("fixed");
      } else {
        nav.classList.remove("fixed");
      }
    };
    window.addEventListener("scroll", setDisplay);

    return () => {
      window.removeEventListener("scroll", setDisplay);
    };
  }, []);

  return (
    <main>
      <nav className="bg-fill px-[5%] py-[2.5%] md:px-[7.5%] w-full shadow-lg">
        <div className="flex justify-between items-center">
          <LogoContainer logo={logo} />
          <div>
            <NavLink to="/login">
              <BtnComponent>
                Sign in
              </BtnComponent>
            </NavLink>
          </div>
        </div>
      </nav>
      <section className="p-[5%] md:p-[7.5%] bg-fill h-[80vh] w-full bg-hero-pattern bg-center lg:bg-right bg-cover bg-no-repeat flex justify-start items-center">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 w-[90%] md:w-[65%]">
          <TitleComponent>
            Your go-to solution for all your skin-related concerns
          </TitleComponent>
          <TextComponent>
            We are here to provide you with accurate and timely diagnoses through our easy-to-use online platform. Giving you the skin care you need from the comfort of your own home. Sign up today and experience the future of dermatology.
          </TextComponent>
          <div>
            <NavLink to="/signup">
              <BtnComponent>
                Try Now
              </BtnComponent>
            </NavLink>
          </div>
        </div>
      </section>
      <section className=" p-[5%] md:p-[7.5%] py-[10%] bg-natural flex justify-center items-center w-full">
        <div className="w-full md:w-9/12 max-w-3xl m-auto  border-2 border-fill shadow-xl shadow-slate-500">
          <div className="flex justify-center flex-col gap-4 items-center px-[10%] py-[5%]">
            <TitleComponent styles="p-6 border-b-2 border-slate-500 mb-4">
              ABOUT
            </TitleComponent>
            <TextComponent>
              At DermCheck, we believe that everyone should have access to high-quality dermatological care, regardless of their location or schedule. That's why we've developed a state-of-the-art platform that connects patients to dermatological care online. Our goal is to make dermatological care accessible, affordable, and convenient for everyone.
              Our website helps to diagnose a wide range of skin conditions, from acne and psoriasis to skin cancer and more. With DermCheck, you can skip the long wait times and high costs associated with traditional dermatology clinics and get the care you need when you need it.
            </TextComponent>
            <TextComponent>
              Our platform is easy to use and secure, allowing you to upload high-quality images of your skin and receive a diagnosis within seconds. We use advanced technology to ensure that our diagnoses are accurate and reliable.
              At DermCheck, we are committed to providing you with the best possible care and support. We believe that everyone deserves to feel confident and comfortable in their own skin, and we're here to help you achieve that goal.
              Join the DermCheck community today and experience the future of dermatological care.
            </TextComponent>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
