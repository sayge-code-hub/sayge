import React from 'react';
import { Target, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="about-us"
      className="py-12 bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900"
          >
            About Sayge
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
           Sayge is a dynamic IT services firm specializing in fast-tracking startups, turning visionary ideas into market-ready products, and crafting bespoke solutions in app development, cloud computing, and technology consulting.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To empower businesses with innovative technology solutions that drive growth and success.",
            },
            {
              icon: Rocket,
              title: "Fast MVP Development",
              description: "We specialize in rapid MVP development without compromising on quality or scalability.",
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "Our experienced professionals bring diverse expertise across multiple technologies and industries.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="mx-auto h-12 w-12 text-blue-600"
              >
                <item.icon className="h-12 w-12" />
              </motion.div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;