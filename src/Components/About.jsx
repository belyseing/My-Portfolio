import React, { useState } from "react";
import Picture from "../assets/Picture.png";

function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center p-12 justify-between gap-6 ">
      <div className="mb-6 md:mb-0 ml-0 md:ml-20">
        <img
          src={Picture}
          alt="my Profile"
          className="w-72 h-72 object-cover rounded-full"
        />
      </div>
      <div className="text-white mr-20 pb-10">
        <div className="pb-10">
          <h1 className="font-bold text-2xl mt-2 ">
            About <span className="text-yellow-400 font-bold">Me</span>
          </h1>
          <p>Frontend Developer</p>
        </div>
        <p className="text-gray-300">
          I'm a passionate web developer currently
          <br /> expanding my skills through the ALX Rwanda.
          <br /> I am currently in my first year of software engineering
          <br />
          studies at Adventist University of Central Africa,
          <br /> complementing my education with the ALX Rwanda <br />
          in Front-End development program Skilled in HTML, CSS
          <br /> and JavaScript.I'm driven to create user-centered, functional
          <br />
          and visually appealing web experiences.
        </p>
        {showMore && (
          <p className="text-gray-300">
            My journey in tech has been fueled by a constant desire to learn,
            <br />
            and I'm always exploring new technologies, frameworks, and
            <br /> best practices. Beyond mastering front-end tools, I'm
            interested in
            <br />
            understanding back-end development and cloud technologies to gain{" "}
            <br />a more comprehensive view of web applications. My goal is to
            become
            <br />
            proficient in building modern, scalable web applications, always
            looking
            <br /> to enhance user experience, improve application performance,
            and ensure accessibility.
            <br /> I'm excited to collaborate on innovative projects, contribute
            to open-source communities,
            <br /> and continuously grow within the dynamic world of web
            development.
          </p>
        )}
        <div className="pt-5">
          <button
            onClick={toggleText}
            className=" font-bold mt-4 rounded-2xl bg-yellow-600 hover:bg-yellow-500 text-sm  px-4 py-2"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
