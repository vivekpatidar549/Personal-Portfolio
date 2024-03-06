import React from "react";
import aboutImage from '../assets/aboutImage.png'
const About = () => {
  return (
    <div name="about" className="w-full h-vh min-h-[750px] bg-gradient-to-b from-gray-800 to-black  text-white flex items-center justify-center pt-9 ">
      <div className=" max-w-screen-lg  mx-auto flex flex-col gap-8 md:flex-row items-center justify-center  ">
        <div className="flex justify-center hidden items-center mx-auto w-[250px] min-w-[350px] md:w-auto md:block">
          <img src={aboutImage} alt="imagee"></img>
        </div>
        <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full ">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
          <p className="text-[#0B8AC4] font-semibold text-xl">Hey there👋🏻, </p>

          <p className="text-xl mt-10 text-justify">
          I am Vivek Patidar, an Integrated M.Tech student in Artificial Intelligence at VIT Bhopal University. Originally from Indore, Madhya Pradesh, my academic focus is on Machine Learning (ML) and Data Structures and Algorithms (DSA). Passionate about merging art and technology, I am deeply interested in UI/UX design and web development.
          </p>

          <br />

          <p className="text-xl text-justify">
          Driven by a thirst for knowledge and innovation, I eagerly anticipate the opportunities ahead. With a strong commitment to excellence, I am poised to contribute meaningfully to the field of artificial intelligence and Web Development.
          </p>
        </div>

      </div>
      
    </div>
  );
};

export default About;
