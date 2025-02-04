import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, BarChart2, Code2, TestTube2, Rocket, Headphones } from 'lucide-react';

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Idea Assessment',
    description: 'We analyze your vision and define clear objectives',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    icon: BarChart2,
    title: 'Strategy',
    description: 'Develop a comprehensive roadmap for success',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Agile development with continuous integration',
    color: 'from-indigo-400 to-purple-400',
  },
  {
    icon: TestTube2,
    title: 'Testing',
    description: 'Rigorous testing for quality assurance',
    color: 'from-green-400 to-emerald-400',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Smooth deployment and market release',
    color: 'from-red-400 to-pink-400',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: '24/7 maintenance and technical support',
    color: 'from-cyan-400 to-blue-400',
  },
];

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="our-process" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
            Our Proven Process
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A systematic approach that delivers exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 transform -translate-y-1/2 hidden md:block"
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg relative z-10"
                >
                  <div className="relative mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mx-auto`}
                    >
                      <step.icon size={32} />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
                    >
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </motion.div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Floating decorative elements */}
          <motion.div
            animate={{
              y: [-10, 10],
              rotate: [-5, 5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute -top-8 -left-8 w-16 h-16 bg-blue-100 rounded-full opacity-20"
          />
          <motion.div
            animate={{
              y: [10, -10],
              rotate: [5, -5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 1,
            }}
            className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-100 rounded-full opacity-20"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;