import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experiences = [
  {
    company: 'Fusion Techlab',
    period: 'Jan, 2024 - Present',
    description: [
      'Developed web applications using HTML, CSS, and JavaScript.',
      'Created unit tests for full-stack web application components.',
      'Researched and implemented new technologies to improve development processes.',
      'Designed efficient database schemas to store data from web applications.',
      'Collaborated with other developers on code reviews, bug fixes, and feature development.',
      'Managed both back-end and front-end aspects of the development process.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">Experience</h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">{experience.company}</h2>
              <p className="text-gray-300">{experience.period}</p>
              <ul className="text-gray-400 mt-4 list-disc list-inside space-y-1">
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
