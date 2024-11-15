import React from "react";
import Movie from "../assets/Movie.png";
import Calculator from "../assets/Calculator.png";
import Counter from "../assets/Counter.png";


function Project() {
  const projects = [
    {
      id: 1,
      name: "Movie Database",
      image: Movie,
      description: `A dynamic app for searching and viewing movie information. Built with React and Tailwind CSS.`,
      githubLink: "https://github.com/belyseing/movie-database-app",
    },
    {
      id: 2,
      name: "Online Calculator",
      image: Calculator,
      description: `An online calculator demonstrating JavaScript, HTML, and CSS skills.`,
      githubLink: "https://github.com/belyseing/calculator",
    },
    {
      id: 3,
      name: "Simple Counter Application",
      image: Counter,
      description: `A simple counter application built with React, showcasing state management.`,
      githubLink: "https://github.com/belyseing/dynamic-to-do-list-js",
    },
  ];

  return (
    <div className="text-white pb-10">
      <h2 className="flex justify-center pt-10 text-2xl font-bold">Projects</h2>
      <div className="flex flex-col md:flex-row justify-around mt-8 pl-7 space-y-5 md:space-y-0 md:space-x-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-72 h-80 group border-2 border-gray-400 rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay for description */}
            <div
              className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-center p-4 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h2 className="font-semibold text-xl mb-2">{project.name}</h2>
              <p className="text-gray-300">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2"
              >
                View code here
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;