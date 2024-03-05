import React from "react";
import Farmadvisor from "../assets/portfolio/Farmadvisor.jpeg";
import voice from "../assets/portfolio/voice.png";
import AiStudy from "../assets/portfolio/AiStudy.png";
import ApnaMalwa from "../assets/portfolio/ApnaMalwa.jpeg";
import pass from "../assets/portfolio/pass.png";
import weather from "../assets/portfolio/weather.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src:AiStudy,
    },
    {
      id: 2,
      src:Farmadvisor,
    },
    {
      id: 3,
      src:ApnaMalwa ,
    },
    {
      id: 4,
      src:weather,
    },
    {
      id: 5,
      src: pass,
    },
    {
      id: 6,
      src: voice,
    },
  ];
  const desc=['AI Study Material Generator', 'Farm Advisor AI' , "Apni Malwi Sanskriti", 'Weather App', 'Password Generator', 'Voice Assisted Reservation System'];
  const links=['https://github.com/vivekpatidar549/AI-Study-Material-Generator','https://github.com/vivekpatidar549/Farm-Advisor-AI','https://github.com/vivekpatidar549/Apni-Malwi-Sanskriti','https://github.com/vivekpatidar549/Weather-Application','https://github.com/vivekpatidar549/Password-Generator','https://github.com/vivekpatidar549/Voice-Assisted-Reservation-System'];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full  text-white max-h-vh  pt-9 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#0B8AC4] border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 mx-auto sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center">
                <button  className="w-1/2  py-3 m-4 duration-200 hover:scale-105 cursor-default">
                  {desc[id-1]}
                </button>
                <a href={links[id-1]} className="  py-3 m-4 duration-200 hover:scale-105">
                  Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
