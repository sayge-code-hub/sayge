import React from 'react';
import { ArrowRight, Code2, Cpu, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[Code2, Cpu, Database, Globe].map((Icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              y: ['0%', '100%'],
              x: index % 2 === 0 ? ['0%', '100%'] : ['100%', '0%'],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 2,
            }}
            className="absolute text-blue-200"
            style={{
              left: `${25 * index}%`,
              top: `-${50 + index * 20}px`,
            }}
          >
            <Icon size={100} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-1">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(45deg, #3B82F6, #60A5FA)',
                    'linear-gradient(45deg, #2563EB, #3B82F6)',
                    'linear-gradient(45deg, #1D4ED8, #2563EB)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute -inset-1 rounded-lg blur-lg opacity-30"
              />
              <h1 className="relative text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                Transforming Ideas Into Digital Reality
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-600 leading-relaxed"
            >
              We craft innovative solutions that drive business growth. From rapid MVP development
              to enterprise-scale applications, we're your partner in digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="relative flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('our-work')}
                className="group relative px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="relative flex items-center">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>


            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex items-center space-x-4 text-sm text-gray-500"
            >
              {['99% Client Satisfaction', '24/7 Support', 'Global Reach'].map((text, index) => (
                <React.Fragment key={text}>
                  <span>{text}</span>
                  {index < 2 && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="relative z-10"
            >
              <img
                src="https://i.pinimg.com/736x/8e/17/de/8e17de72e1fb5103a04b2316aea51be0.jpg"
                alt="Digital Transformation"
                className="rounded-2xl shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-transparent"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </motion.div>

            {/* Floating elements */}
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;