import React from "react";
import Picture from "../assets/Picture.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

function Home() {
  return (
    <div className="pt-6 text-white ">
      <p className="pl-10">
        <span className="text-yellow-400 font-dancing-script">P</span>ortfolio
      </p>
      <nav>
        <ul className="flex gap-6 justify-center pb-10">
          <li>
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="hover:text-yellow-400 transition duration-200 no-smooth-scroll"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="hover:text-yellow-400 transition duration-200 no-smooth-scroll"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Project"
              className="hover:text-yellow-400 transition duration-200 no-smooth-scroll"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="hover:text-yellow-400 transition duration-200 no-smooth-scroll"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center mt-10 lg:mt-20 px-10 lg:px-20">
        {/* Intro Text */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-10 pl-20 pb-10">
          <p className="text-lg">
            <span className="text-yellow-400">Hello</span>, It's Me
          </p>
          <p className="font-bold text-4xl mt-2">Belyse Ingabire</p>
          <p className="text-lg mt-1">
            I'm <span className="text-yellow-400">a Frontend Developer.</span>
          </p>
          <p className="mt-8 text-gray-300 leading-relaxed">
            I will design and develop a project that
            <br /> combines technical excellence with
            <br />
            visual appeal, ensuring it meets your
            <br /> needs and impresses users.
          </p>
          {/* Social Media Icon */}
          <div className="flex gap-5 pt-8">
            <a
              href="https://github.com/belyseing"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
              className="text-white duration-75"
            >
              <FaGithub size={40} />
            </a>

            <a
              href="https://www.instagram.com/ms.belyse"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="text-white hover:text-yellow transition-colors duration-75"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/ingabire-belyse"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
              className="text-white hover:text-blue-600 transition-colors duration-75"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://codepen.io/belyseing"
              target="_blank"
              rel="noopener noreferrer"
              title="Codepen"
              className="hover:duration-75"
            >
              <FaCodepen size={40} />
            </a>
          </div>
          {/* Download cv Section */}
          <div className="pt-14 p-6">
            <a
              href="/Resume.pdf"
              download
              className="rounded-xl bg-black border-2 border-yellow-400 text-sm  px-4 py-2 hover:bg-slate-950"
              style={{ borderWidth: "4px" }}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile*/}
        <div className="md:mb-0 ml-0 md:ml-20 pb-20">
          <img
            src={Picture}
            alt="my Profile"
            className="w-72 h-72 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
