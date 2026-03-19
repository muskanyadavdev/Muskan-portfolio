import profile from "../assets/profile-picture.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="px-10 py-20 bg-black flex flex-col md:flex-row gap-16 items-center">

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <img
          src={profile}
          alt="Muskan"
          className="w-[320px] rounded-xl shadow-lg object-cover"
        />

        {/* Glow effect */}
        <div className="absolute inset-0 border border-green-400 rounded-xl blur-sm opacity-40"></div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl"
      >
        <h2 className="text-green-400 text-lg mb-2 tracking-wide">
          Who am I?
        </h2>

        <h1 className="text-4xl font-bold mb-6 text-gray-200 leading-snug">
          I'm Muskan Yadav,{" "}
          <span className="text-green-400">
            a Frontend Developer
          </span>
        </h1>

        <p className="text-gray-400 mb-6">
          I specialize in building clean, scalable and responsive web
          interfaces using React.js and Tailwind CSS. I enjoy turning complex
          designs into smooth, user-friendly experiences.
        </p>

        <p className="text-gray-500 mb-8">
          With hands-on experience in real-world projects, I focus on writing
          maintainable code, optimizing performance, and delivering pixel-perfect UI.
        </p>

        {/* SKILLS */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Git"].map(
            (skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm border border-gray-700 rounded-full text-gray-300 hover:border-green-400 hover:text-green-400 transition"
              >
                {skill}
              </span>
            )
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <a
            href="/Muskan_Yadav_Resume.pdf"
            download
            className="px-6 py-3 bg-green-400 text-black font-semibold rounded hover:scale-105 transition"
          >
            Download CV
          </a>

         
        </div>
      </motion.div>
    </section>
  );
};

export default About;