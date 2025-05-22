export const About = () => {
  const frontendSkills = ["HTML", "CSS3", "React.js", "TailwindCSS"];
  const backendSkills = ["Javascript", "Node.js", "Express.js"];
  const databaseSkills = ["MongoDB", "PostgreSQL"];
  const toolsSkills = ["Git"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Throughout my Information Technology education, I have obtained
            expertise in designing web applications with the MERN stack. I also
            have a strong background in back-end development, such as creating
            RESTful APIs.
          </p>
          <p className="text-gray-300 mb-6">
            My enthusiasm for full-stack programming motivates me to keep
            learning new things and adjusting to new developments in technology.
            I'm a firm believer in creating safe, effective, and impactful
            solutions that improve efficiency and user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3>Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shdow-[0_2px_8px_rgba(59,130,246,0.2)"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3>Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shdow-[0_2px_8px_rgba(59,130,246,0.2)"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3>Database</h3>
              <div className="flex flex-wrap gap-2">
                {databaseSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shdow-[0_2px_8px_rgba(59,130,246,0.2)"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3>Tools</h3>
              <div className="flex flex-wrap gap-2">
                {toolsSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shdow-[0_2px_8px_rgba(59,130,246,0.2)"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-transolate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>B.S. in Information Technology</strong> - Technological
                Institute of the Philippines (2018-2022)
              </li>
              <li>
                <strong>TVL - Information Communication Technology</strong> -
                AMA Computer College (2016-2018)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-transolate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Certification & Awards </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li className="">
                <strong>
                  MERN Stack Front To Back: Full Stack React, Redux & Node.js
                </strong>{" "}
                - Udemy (2023)
              </li>
              <li>
                <strong>
                  Project Management Tool Training using JIRA Software{" "}
                </strong>{" "}
                - Zoom (2021)
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-transolate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold mb-2">
                  {" "}
                  <strong>Back-end Developer Intern</strong> at Technological
                  Institute of the Philippines (2021-2022){" "}
                </h4>
                <p className="mb-2 text-justify">
                  {" "}
                  • Collaborated with team members to design and implement
                  RESTful APIs to handle requests and responses from web
                  applications and to handle all the incoming data sent from the
                  IoT devices using Node.js and Express.js.
                </p>
                <p className="mb-2 text-justify">
                  • Developed backend services to handle real-time data
                  streaming from IoT Devices.
                </p>

                <p className="mb-2 text-justify">
                  • Engaged in sprint retrospectives to reflect on team
                  performance, identify areas for improvement, and discuss
                  actionable steps to enhance productivity and
                </p>
                <p className="mb-2 text-justify">
                  • Gained experience in version control using Git and
                  participated in code reviews to maintain code quality and
                  consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
