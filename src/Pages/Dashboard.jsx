import React, { useState, useEffect } from "react";
import BtnComponent from "../components/BtnComponent";
import TextComponent from "../components/TextComponent";
import HeadingComponent from "../components/HeadingComponent";
import { useStateContext } from "../contexts/contextProvider";
import "./styles.css";

const Dashboard = () => {
  document.title = "Dashboard";

  const [images, setImages] = useState();
  const [imageUrl, setImageUrl] = useState();
  const uploadImg = (e) => {
    setImages(...e.target.files);
  };

  useEffect(() => {
    if (!images) return;
    setImageUrl(URL.createObjectURL(images));
  }, [images]);

  const { userData } = useStateContext();
  return (
    <div className="h-full">
      <section className="flex flex-col md:flex-row h-full m-auto max-w-5xl">
        <div className="p-[10%] md:p-[5%] md:w-2/5 md:h-full">
          <div className="flex flex-col gap-8">
            <div>
              <HeadingComponent>Good day, {userData.name}</HeadingComponent>
              <TextComponent>Upload an image to be scanned</TextComponent>
            </div>
            <div
              className="border-2 border-brown border-dotted h-52 flex justify-center items-center bg-natural transition-all active:scale-95 active:opacity-25"
              onClick={uploadImg}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full h-full" />
              ) : (
                <label
                  htmlFor="inputImg"
                  className="text-center cursor-pointer"
                >
                  Add Image
                  <input
                    type="file"
                    id="inputImg"
                    multiple
                    accept="image/*"
                    onChange={uploadImg}
                  />
                </label>
              )}
            </div>
            <div className="self-end">
              {imageUrl && <BtnComponent>Scan now</BtnComponent>}
            </div>
          </div>
        </div>
        <div className="p-[10%] md:p-[5%] border-t-2 md:border-l-2 md:border-t-0 border-gray-400  md:w-3/5 md:h-full">
          <div className="flex flex-col gap-8">
            <div className="text-center justify-center flex ">
              <HeadingComponent styles={"border-b-2 border-gray-400 px-1"}>
                Test Prediction
              </HeadingComponent>
            </div>
            <div>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr className="bg-[#F4F4F4]">
                    <td className="p-2 text-right" style={{ width: "40%" }}>
                      <HeadingComponent styles="border-r-2 border-white pr-2">
                        Name
                      </HeadingComponent>
                    </td>
                    <td className="p-2" style={{ width: "0%" }}></td>
                  </tr>
                  <tr className="border-2 border-white bg-[#F9F9F9]">
                    <td className="p-2 text-right" style={{ width: "40%" }}>
                      <HeadingComponent styles="border-r-2 border-white pr-2">
                        Description
                      </HeadingComponent>
                    </td>
                    <td className="p-2" style={{ width: "60%" }}></td>
                  </tr>
                  <tr className=" bg-[#F4F4F4]">
                    <td className="p-2 text-right" style={{ width: "40%" }}>
                      <HeadingComponent styles="border-r-2 border-white pr-2">
                        Causes
                      </HeadingComponent>
                    </td>
                    <td className="p-2" style={{ width: "60%" }}></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="self-end">
              <BtnComponent>Take another test</BtnComponent>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
