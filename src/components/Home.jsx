import React from "react";
import HeroImage1 from "../assets/HeroImage1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ParticlesComponent from '../config/particles';
import '../index.css'
import Checked from "./Checked";

const Home = () => {
  
  return (
    
    <div name="home" className="relative h-vh w-full bg-gradient-to-b from-black via-black to-gray-800">

      <div  id="particles">
        <ParticlesComponent />
      </div>

      <div className="relative max-w-vw mx-auto flex flex-col items-center justify-around min-h-[800px] px-4 md:flex-row md:px-7 z-10">
        <div className="flex flex-col justify-center h-full gap-4">
          <h3 className="text-4xl sm:text-[55px] font-bold text-[#0B8AC4]">Hi,</h3>
          <h3 className="text-4xl sm:text-[55px] font-bold text-white">I'am Vivek</h3>
          <Checked />
          <p className="text-gray-500 py-4 max-w-md text-justify">
            🌐 I'm Vivek, weaving together the art of web development and the science of UI/UX design. Join me as I shape digital spaces that are intuitive, visually pleasing, and centered around the user.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <img
            src={HeroImage1}
            alt="my profile"
            className="rounded-2xl mx-auto md:w-full md:max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
