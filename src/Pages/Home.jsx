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
        <div className="flex flex-col gap-6 md:gap-10 w-full sm:w-[75%] md:w-[50%] xl:w-full">
          <TitleComponent>
            Lorem ipsum dolor sit amet consectetur.
          </TitleComponent>
          <TextComponent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptatum ea sunt consequatur eveniet quibusdam nulla voluptas fuga
            maiores ab laudantium itaque aperiam, nihil numquam doloribus,
            temporibus cupiditate cumque alias!
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem quam ipsam, rem distinctio recusandae voluptate iusto
              cum debitis quas non quo doloribus saepe quod et magni velit.
              Quidem, rerum maiores. Dolorem necessitatibus aliquam temporibus
              dolor suscipit repellat, assumenda laudantium quidem quaerat quia
              sunt aliquid dolores beatae enim omnis eaque, nisi fuga. Impedit
              corrupti quaerat quod itaque adipisci vero optio id? Minus
              mollitia culpa dolores, quis accusantium veritatis dicta magni
              minima, officia corporis quam expedita nesciunt molestiae, quidem
              nulla sequi neque earum ad qui beatae dolorum cupiditate animi
              laudantium. Voluptatibus, eaque! Vel deleniti deserunt eos
              nesciunt dolor quisquam voluptate perferendis voluptatum!
            </TextComponent>
            <TextComponent>
              Reprehenderit quis mollitia, numquam vero eveniet voluptatum porro
              cum dolorem eaque sed corporis obcaecati nulla quae quaerat
              reiciendis quia voluptatem. Ipsa quia pariatur soluta fuga sunt
              quos assumenda laboriosam itaque. Itaque commodi repellat nam
              obcaecati aspernatur ratione tempore qui illo? Reprehenderit
              voluptas rerum iste ut omnis debitis laboriosam officiis
              laudantium. Rerum explicabo veritatis alias cum distinctio aut
              illum enim adipisci repellat ipsam tenetur quod vitae nulla dicta
              minima officia, rem tempore illo velit culpa ullam magni corporis.
              Incidunt, temporibus molestiae. Vel voluptas voluptatem animi
              aliquid ea, commodi voluptate illo quasi repellendus excepturi
              iure, eius ducimus harum! Blanditiis alias odio reiciendis, sed
              ducimus commodi nobis aut eveniet quia deserunt provident ratione.
            </TextComponent>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
