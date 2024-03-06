import React from "react";
import aboutImage2 from '../assets/aboutImage3.png'
import ParticlesComponent from '../config/particles';
import '../index.css'
const About = () => {
  return (
    <div name="about" className="w-vw h-vh min-h-[750px] bg-gradient-to-b from-gray-800 to-black  text-white flex items-center justify-center pt-9 ">
      <div  id="particles">
        <ParticlesComponent />
      </div>
      <div className=" w-vw  lg:max-w-[87%]  mx-auto flex flex-col md:flex-row items-center justify-around  z-10 gap-11 ">
        <div className="flex justify-center hidden items-center mx-auto  min-w-[350px] md:w-auto md:block">
          <img className="max-h-[500px] mx-auto z-50" src={aboutImage2} alt="imagee"></img>
        </div>
        <div className="p-8 mx-auto flex flex-col justify-center  h-full px-11 ">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-[#0B8AC4] border-gray-500">
              About
            </p>
          </div>
          <p className=" font-semibold text-xl">Hey there👋🏻, </p>

          <p className="text-xl mt-10 text-justify ">
          I am <span className="text-[#0B8AC4] font-bold ">Vivek Patidar</span>, an Integrated M.Tech student in Artificial Intelligence at VIT Bhopal University. Originally from Indore, Madhya Pradesh, my academic focus is on Machine Learning (ML) and Data Structures and Algorithms (DSA). Passionate about merging art and technology, I am deeply interested in UI/UX design and web development.
          </p>

          <br/>

          <p className="text-xl text-justify">
          Driven by a thirst for knowledge and innovation, I eagerly anticipate the opportunities ahead. With a strong commitment to excellence, I am poised to contribute meaningfully to the field of artificial intelligence and Web Development.
          </p>
        </div>

      </div>
      
    </div>
  );
};

export default About;
