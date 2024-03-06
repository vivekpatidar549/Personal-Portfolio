import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mongo from "../assets/mongo.png";
import express from "../assets/express.png";
import node from "../assets/node.png";
import clogo from "../assets/clogo.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import gcloud from '../assets/gcloud.png';
import postman from '../assets/postman.png';
import ParticlesComponent from '../config/particles';
import '../index.css'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: clogo,
      title: "C++",
      style: "shadow-blue-500",
    },

    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React.js",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 8,
      src: express,
      title: "Express.js",
      style: "shadow-gray-400",
      
    },
    {
      id: 9,
      src: node,
      title: "Node.js",
      style: "shadow-green-300",
    },
    {
      id: 10,
      src: gcloud,
      title: "Google Cloud",
      style: "shadow-green-300",
    },
    
    {
      id: 11,
      src: postman,
      title: "Postman",
      style: "shadow-orange-400",
    },
        
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    
    
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-vh min-h-[800px]  flex items-center justify-center pt-9 ">
       <div  id="particles">
        <ParticlesComponent />
      </div>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white z-10">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-[#0B8AC4]">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 z-10" >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
