// REACT
import React, { useState, useEffect } from "react";
import axios from "axios";
// COMPONENT
import BtnComponent from "../components/BtnComponent";
import TextComponent from "../components/TextComponent";
import HeadingComponent from "../components/HeadingComponent";
// CONTEXT
import { useStateContext } from "../contexts/contextProvider";


const Dashboard = () => {
  document.title = "Dashboard";

  const { userData } = useStateContext()
  console.log(userData)

  const [diagnosis, setDiagnosis] = useState(null)

  const [err, setErr] = useState(false)
  const [images, setImages] = useState();
  const [imageUrl, setImageUrl] = useState(null);
  const uploadImg = (e) => {
    setImages(...e.target.files);
  };

  useEffect(() => {
    // Logic to make sure there is an image
    if (!images) return;
    if (images.length > 1) {
      setErr(true)
      return
    }
    // creating a url to display the image selected to the user
    setImageUrl(URL.createObjectURL(images));
    // function to send the image to the server
    async function getDiagnosis() {
      try {
        const response = await axios.post("http://3.73.204.249/predict/", { file: images }, {
          headers: {
            'Authorization': `Bearer ${userData.token}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
          },
        });
        return setDiagnosis(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDiagnosis()
    console.log(diagnosis)
    setErr(false)
  }, [images]);


  return (
    <div className="h-full bg-[#f5f5f5] ">
      <section className="flex flex-col md:flex-row h-full m-auto max-w-5xl">
        <div className="p-[10%] md:p-[5%] md:w-2/5 md:h-full">
          <div className="flex flex-col gap-8">
            <div>
              <HeadingComponent>Good day, {userData.username}!</HeadingComponent>
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
                  className="text-center cursor-pointer w-full h-full flex justify-center items-center"
                >
                  {!err ? 'Add Image' : <TextComponent styles='text-red scale-110'>Select only one Image</TextComponent>}
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
        {
          diagnosis ?
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
                        <td className="p-2" style={{ width: "60%" }}>{diagnosis.prediction}</td>
                      </tr>
                      <tr className="border-2 border-white bg-[#F9F9F9]">
                        <td className="p-2 text-right" style={{ width: "40%" }}>
                          <HeadingComponent styles="border-r-2 border-white pr-2">
                            Description
                          </HeadingComponent>
                        </td>
                        <td className="p-2" style={{ width: "60%" }}>{diagnosis.description}</td>
                      </tr>
                      <tr className=" bg-[#F4F4F4]">
                        <td className="p-2 text-right" style={{ width: "40%" }}>
                          <HeadingComponent styles="border-r-2 border-white pr-2">
                            Causes
                          </HeadingComponent>
                        </td>
                        <td className="p-2" style={{ width: "60%" }}>{diagnosis.causes}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="self-end"
                  onClick={() => {
                    setImageUrl(null);
                    setImages(null);
                    setDiagnosis(null)
                  }}
                >
                  <BtnComponent>Take another test</BtnComponent>
                </div>
              </div>
            </div>
            : null}
      </section>
    </div>
  );
};

export default Dashboard;
