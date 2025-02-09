import { motion } from 'framer-motion';

// Import team member images
import team1 from '/src/assets/team/ceo.jpg';
import team2 from '/src/assets/team/laura.png';
import team3 from '/src/assets/team/aditya.png';
import team4 from '/src/assets/team/oliver.png';
import team5 from '/src/assets/team/joel.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: "Gautam L.",
      role: "CEO",
      description: "A visionary leader with 15+ years in digital transformation.",
      image: team1
    },
    {
      name: "Aditya Verma",
      role: "CTO",
      description: "Expert in cutting-edge technologies with a focus on scalable architecture.",
      image: team3
    },
    {
      name: "Laura Rodriguez",
      role: "Head Talent Acquisition",
      description: "Leads talent strategy and fosters workplace innovation.",
      image: team2
    },
    {
      name: "Michael Foster",
      role: "Lead AI Engineer",
      description: "Pioneering AI solutions with expertise in machine learning and neural networks.",
      image: team4
    },
    {
      name: "Joel Andriyas",
      role: "Technical Advisor & Cloud Architecture Lead",
      description: "Expert in designing scalable and secure cloud infrastructure solutions.",
      image: team5
    }
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Meet the experts behind Sayge's success. Our diverse team brings together decades of experience in AI, software development, and business transformation.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
