import { motion } from "framer-motion";

const services = [
  "React.js Development",
  "Responsive Design",
  "API Integration",
  "UI Development",
  "Tailwind CSS",
  "Figma to Code"
];

const Services = () => {
  return (
    <section className="px-10 py-20 bg-black">
     

      <div className='text-right lg:text-center'>
                <p className='[-webkit-text-stroke:1px_#ffffff33] 
                        text-green-400 font-bold mb-16
                        text-4xl sm:text-5xl md:text-6xl lg:text-4xl'>
                  SERVICES
                </p>
              </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-green-400 transition relative group"
          >
            <h2 className="text-green-400 text-xl font-semibold">
              {service}
            </h2>

            <p className="text-gray-400 mt-3">
              Building modern and scalable frontend applications.
            </p>

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-10 blur-xl transition"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;