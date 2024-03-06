import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div name="contact" className="w-full h-vh bg-gradient-to-b from-black to-gray-800 p-4 text-white  min-h-[600px] flex items-center justify-center pt-9">
      <div className="flex flex-col md:flex-row p-4 max-w-screen-lg   mx-auto gap-8">
        <div className="pb-8   p-2 w-4/5 md:w-full flex flex-col gap-10 pt-0 mx-auto md:pt-8">
          <p className="text-5xl text-[#0B8AC4] font-bold inline ">
            Contact
          </p>
          <p className="pr-6 text-justify">I'd love to connect and collaborate with you. Whether you have a project in mind, a question, or just want to say hello, feel free to reach out.</p>
            <div className="flex gap-2 items-center">
              <a href="mailto:vivekpatidar549.gmailcom" ><IoIosMail size={35}/></a>
              <a href="mailto:vivekpatidar549.gmailcom">vivekpatidar549@gmail.com</a>
            </div>            
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/vivekpatidar549/"><FaLinkedin size={35} /></a>
            <a href="https://github.com/vivekpatidar549"><FaGithub size={35} /></a>
            <a href="https://www.linkedin.com/in/vivek-patidar-2281a1209"><GrInstagram  size={35}/></a>
          </div>
        </div>

        <div className=" w-full flex justify-center items-center p-4">
          <form
            action="https://getform.io/f/nadevedb"
            method="POST"
            className=" flex flex-col w-4/5 md:w-4/5"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 border-b-4 bg-transparent  border-[#0B8AC4] rounded-md text-white focus:border-b-0 "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className=" border-b-4 my-4 p-2 bg-transparent border-[#0B8AC4] rounded-md text-white focus:border-b-0  "
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="9"
              className=" border-b-4 resize-none border-[#0B8AC4] p-2 bg-transparent  rounded-md text-white focus:border-b-0 "
            ></textarea>
            

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 bg-transparent">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
