import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shdow-[0_2px_8px_rgba(59,130,246,0.1) transition-all ">
              <h3 className="text-xl font-bold mb-2">
                DRIVERPH: Road Safety Analytics Platform{" "}
              </h3>

              <p className="text-gray-400 mb-3">
                Manage Truck Driver’s Driving Behaviors Data from IoT Devices
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Express.js", "Node.js", "MongoDB"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shdow-[0_2px_8px_rgba(59,130,246,0.2)"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div>
                <div
                  flex
                  justify-between
                  items-center
                >
                  <a
                    href="https://www.dost.gov.ph/knowledge-resources/news/72-2021-news/2149-driver-ph-aims-to-lessen-road-accidents-by-evaluating-truck-driver-s-competency-on-the-road-20210302.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-400 hover:text-blue-300 transition-colors border p-2 border-white/10 hover:border-blue-500 rounded"
                  >
                    View Project →
                  </a>

                  <a
                    href="https://www.dost.gov.ph/knowledge-resources/news/72-2021-news/2149-driver-ph-aims-to-lessen-road-accidents-by-evaluating-truck-driver-s-competency-on-the-road-20210302.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-400 hover:text-blue-300 transition-colors border p-2 border-white/10 hover:border-blue-500 rounded"
                  >
                    Github →
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shdow-[0_2px_8px_rgba(59,130,246,0.1) transition-all ">
              <h3 className="text-xl font-bold mb-2">Social Network</h3>
              <p className="text-gray-400 mb-3">
                Empowering developers to connect, share knowledge, and
                collaborate through posts and comments
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Express.js", "Node.js", "MongoDB"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shdow-[0_2px_8px_rgba(59,130,246,0.2)"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div>
                <div
                  flex
                  justify-between
                  items-center
                >
                  <a
                    href="https://github.com/Deeyomz09/socialnetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-400 hover:text-blue-300 transition-colors border p-2 border-white/10 hover:border-blue-500 rounded"
                  >
                    View Project →
                  </a>

                  <a
                    href="https://github.com/Deeyomz09/socialnetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-400 hover:text-blue-300 transition-colors border p-2 border-white/10 hover:border-blue-500 rounded"
                  >
                    Github →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
