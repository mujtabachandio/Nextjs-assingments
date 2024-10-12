"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-black dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/* Text Section */}
        <motion.div
          className="font-light text-gray-500 sm:text-lg dark:text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">
            About Me
          </h2>
          <p className="mb-4">
            Hi, I'm Mujtaba Chandio, a passionate developer with a keen interest in building dynamic and efficient web applications. With a strong foundation in JavaScript, TypeScript, Python, and frameworks like React and Next.js, I strive to create seamless user experiences that combine functionality with aesthetic appeal.
          </p>
          <p className="mb-4">
            My journey in technology began with a fascination for coding and problem-solving. Over the years, I have honed my skills through various projects, ranging from e-commerce websites to data-driven applications. I believe that technology has the power to transform lives, and I aim to be at the forefront of this revolution by leveraging AI and machine learning in my work.
          </p>
          <p>
            When I’m not coding, you can find me exploring new tech trends, indulging in delicious food, or sharing insights with fellow developers. Let's connect and build something amazing together!
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="grid grid-cols-2 gap-4 mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            className="w-full rounded-lg"
            src="https://img.freepik.com/premium-photo/programmer-mascot-illustration_602089-23147.jpg"
            alt="programmer illustration"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3zpQ4LQI-dweG6ZRVLYAnCLPVKLDPZ945A&s"
            alt="office content 2"
          />
        </motion.div>
      </div>
    </section>
  );
}
