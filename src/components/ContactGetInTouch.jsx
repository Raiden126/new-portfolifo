"use client";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {  FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaIcon = ({ Icon, link }) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="border rounded-full h-10 w-10 flex items-center justify-center text-white hover:bg-sky-600 hover:text-black transition-colors duration-300">
        <Icon className="h-5 w-5" />
      </a>
    );
  };  

  const ContactGetInTouch = () => {
    return (
      <div className="p-4">
        <p className="text-lg font-serif leading-normal">
          I'd love to hear from you! Whether you have a question about my work, a project proposal, or just want to say hello, feel free to reach out. I'm always open to discussing new opportunities, collaborations, or any interesting ideas you have in mind. Fill out the form below and I'll get back to you as soon as possible.
        </p>
        <div className="flex mt-4 gap-2 items-center">
          <FaPhone className="text-sky-600" />
          <p>+91-7637092553</p>
        </div>
        <div className="flex mt-2 gap-2 items-center">
          <MdEmail className="text-sky-600" />
          <p>guddupaul145@gmail.com</p>
        </div>
        <div className="flex mt-4 gap-4">
          <SocialMediaIcon Icon={FaGithub} link="https://github.com/Raiden126" />
          <SocialMediaIcon Icon={FaLinkedin} link="https://www.linkedin.com/in/" />
        </div>
      </div>
    );
  };
  
export default ContactGetInTouch;
