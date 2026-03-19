import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="px-10 py-24 bg-black">
      
      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center text-green-400 mb-16">
        Get In Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE - CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-green-400">
            Let’s build something great together 
          </h2>

          <p className="text-gray-400">
            I’m always open to frontend opportunities, freelance work, or collaborations.
          </p>

          {/* INFO CARDS */}
          <div className="space-y-4">

            <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-green-400 transition">
              <p className="text-green-400 font-semibold">Email</p>
              <p className="text-gray-400">muskanyadav0958@gmail.com</p>
            </div>

            <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-green-400 transition">
              <p className="text-green-400 font-semibold">Phone</p>
              <p className="text-gray-400">+91-8502969134</p>
            </div>

            <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-green-400 transition">
              <p className="text-green-400 font-semibold">Location</p>
              <p className="text-gray-400">Jaipur, India</p>
            </div>

          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://linkedin.com"
              className="px-4 py-2 border border-gray-700 text-green-300 rounded hover:border-green-400 hover:text-green-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="px-4 py-2 border border-gray-700 text-green-300 rounded hover:border-green-400 hover:text-green-400 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-900 p-8 rounded-xl border border-gray-800 relative"
        >

          {/* GLOW EFFECT */}
          <div className="absolute inset-0 bg-green-400 opacity-5 blur-2xl rounded-xl"></div>

          <form className="space-y-6 relative z-10">

            <div>
              <label className="text-gray-400">Your Name</label>
              <input
                type="text"
                className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded focus:border-green-400 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400">Your Email</label>
              <input
                type="email"
                className="w-full mt-2 p-3 bg-black border border-gray-700 text-white rounded focus:border-green-400 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400">Message</label>
              <textarea
                rows="4"
                className="w-full mt-2 p-3 bg-black border text-white border-gray-700 rounded focus:border-green-400 outline-none"
              ></textarea>
            </div>

            <button className="w-full py-3 bg-green-400 text-black font-semibold rounded hover:scale-105 transition">
              Send Message 
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;