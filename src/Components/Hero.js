import { motion } from "framer-motion";
import profile from "../assets/profile-picture.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-between px-10 bg-black relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-green-500 opacity-20 blur-3xl rounded-full top-10 left-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-green-400 opacity-10 blur-3xl rounded-full bottom-10 right-20"></div>

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl z-10"
      >
        <h2 className="text-gray-400 text-xl">Hi There!</h2>

        <h1 className="text-6xl font-bold mt-3 text-gray-300 leading-tight">
          I am <span className="text-green-400">Muskan Yadav</span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          I build clean, scalable and user-friendly web interfaces using React.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="px-6 py-3 bg-green-400 text-black font-semibold rounded hover:scale-105 transition">
            <Link to="/contact">Contact Me</Link>
          </button>

          <button className="px-6 py-3 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition">
            <Link to="/projects">View Projects</Link>
          </button>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:block relative"
      >
        <img
          src={profile}
          alt="Muskan"
          className="h-[550px] object-cover rounded-xl grayscale hover:grayscale-0 transition duration-500"
        />

        {/* IMAGE GLOW BORDER */}
        <div className="absolute inset-0 border border-green-400 rounded-xl blur-sm opacity-40"></div>
      </motion.div>
    </section>
  );
};

export default Hero;