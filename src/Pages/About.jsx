import React from "react";
import DevelopersProfile from "../data/developersProfile";
import TitleComponent from "../components/TitleComponent";
import TextComponent from "../components/TextComponent";

const About = () => {
  return (
    <div className="h-full">
      <section className="h-full p-[5%] max-w-3xl">
        <div className="mb-4">
          <TitleComponent>Meet The Team</TitleComponent>
        </div>
        <div className="mb-8">
          <TextComponent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laborum voluptates vitae perferendis quas vero asperiores ducimus
            laboriosam saepe, corrupti eligendi repellat, laudantium,
            repellendus dolorum quia minima possimus molestias! Inventore.
          </TextComponent>
        </div>
        <div className="flex flex-col gap-6">
          {DevelopersProfile.map((item) => (
            <div
              key={item.id}
              className="bg-[#f4f4f4] p-3 md:p-5 flex flex-col md:flex-row gap-4 justify-center items-center  drop-shadow-2xl shadow-gray-400 max-w-3xl"
            >
              <div className="overflow-hidden hover:scale-105 duration-200 transition-all w-2/6 ">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2 items-center md:items-start justify-center">
                <TitleComponent>{item.name}</TitleComponent>
                <TextComponent>{item.background}</TextComponent>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
