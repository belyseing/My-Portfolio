import React from 'react'

function Skills() {
  return (
    <div className="text-white pb-10">
      <h1 className="flex justify-center mt-12 text-2xl font-bold">Skills</h1>

      {/* Skills Sections */}
      <div className="flex flex-col md:flex-row justify-around mt-8 pl-7">
        <section>
          <h2 className="font-semibold pb-3">Language and Frameworks</h2>
          <p className="text-gray-300">
            Languages and Frameworks: Proficient in
            <br /> <span className='text-blue-500'>HTML, CSS, JavaScript </span>
            and <span className='text-blue-500'>TypeScript</span>,
            <br /> leveraging frameworks like React and
            <br /> Tailwind CSS to develop dynamic user
            <br /> interfaces.
          </p>
        </section>

        <section>
          <h2 className="font-semibold pb-3">
            Development Tools and Version Control
          </h2>
          <p className="text-gray-300">
            Experienced with <span className='text-blue-500'>Git</span> for version control
            <br /> and <span className='text-blue-500'>Visual Studio Code</span> as my primary
            <br /> development environment, contributing to
            <br />
            projects.
          </p>
        </section>

        <section>
          <h2 className="font-semibold pb-3">Testing and Deployment</h2>
          <p className="text-gray-300">
            Knowledgeable in testing methodologies
            <br /> using <span className='text-blue-500'>React</span> Testing Library, ensuring
            <br /> high-quality applications.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Skills;