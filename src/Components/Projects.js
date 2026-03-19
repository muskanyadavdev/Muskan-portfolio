import { motion } from "framer-motion";
import Enli10 from "../assets/Enli10.png"
import Bootstrap from "../assets/Bootstrap.jpeg";

const Projects = () => {
  return (
    <section className="px-10 py-20 bg-gray-950">
      <h1 className="text-4xl font-bold mb-12 text-center">
        My <span className="text-green-400">Projects</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* PROJECT CARD */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-400 transition"
        >
          {/* IMAGE */}
          <a
            href="https://your-project-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-52 bg-gray-800 overflow-hidden">
              <img
                src={Bootstrap}
                alt="React Multi Page App"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </a>

          {/* CONTENT */}
          <div className="p-6">
            <h2 className="text-green-400 text-xl font-semibold">
              React Multi-Page Application
            </h2>

            <p className="text-gray-400 mt-2">
              Developed a scalable multi-page React application using React Router and Context API with optimized performance and clean architecture.
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["React", "Bootstrap", "Tailwind"].map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 border border-gray-700 rounded text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-6">
              {/* <a
                href="https://your-project-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-400 text-black rounded font-semibold hover:scale-105 transition"
              >
                Live Demo 🚀
              </a> */}

              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-400 transition"
        >
          {/* IMAGE (CLICKABLE) */}
          <a
            href="https://enli10.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-52 bg-gray-800 overflow-hidden">
              <img
                src={Enli10}
                alt="Enli10 Project"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </a>

          <div className="p-6">
            <h2 className="text-green-400 text-xl font-semibold">
              Enli10
            </h2>

            <p className="text-gray-400 mt-2">
              Built scalable UI for a live product using React, Tailwind and REST APIs.
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["React", "Tailwind", "API"].map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 border border-gray-700 rounded text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://enli10.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-400 text-black rounded font-semibold hover:scale-105 transition"
              >
                Live Demo
              </a>

              {/* <a
        href="#"
        className="px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition"
      >
        GitHub
      </a> */}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;