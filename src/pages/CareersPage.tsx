import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface JobPosition {
  id: string;
  title: string;
  level: string;
  description: string;
  techStack: string[];
}

const positions: JobPosition[] = [
  {
    id: 'flutter-senior',
    title: 'Flutter Craftsperson',
    level: 'Senior',
    description: "Join us in crafting beautiful, responsive mobile experiences. We're looking for someone who sees Flutter not just as a framework, but as a canvas for creating exceptional user experiences.",
    techStack: ['Flutter', 'Dart', 'Firebase', 'State Management', 'CI/CD'],
  },
  {
    id: 'java-mid',
    title: 'Java Solution Builder',
    level: 'Mid-Level',
    description: 'Help us architect robust backend systems. We value those who can balance elegant code with practical solutions, turning complex requirements into maintainable systems.',
    techStack: ['Java', 'Spring Boot', 'Microservices', 'SQL', 'AWS'],
  },
  {
    id: 'python-ai',
    title: 'AI/ML Engineer',
    level: 'Mid to Senior',
    description: "Shape the future of AI applications. We're seeking curious minds who can transform data into insights and build intelligent systems that make a difference.",
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'AWS/GCP'],
  },
  {
    id: 'cloud-arch',
    title: 'Cloud Infrastructure Designer',
    level: 'Senior',
    description: 'Design and implement scalable cloud solutions. Looking for architects who can navigate both AWS and GCP, creating reliable and efficient infrastructure.',
    techStack: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'DevOps'],
  },
  {
    id: 'flutter-entry',
    title: 'Mobile App Developer',
    level: 'Entry-Level',
    description: 'Start your journey in mobile development. We offer mentorship and hands-on experience in building real-world Flutter applications.',
    techStack: ['Flutter', 'Dart', 'Git', 'REST APIs'],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const CareersPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Careers at Sayge",
    "description": "Join our team of innovators at Sayge. We're looking for talented individuals in Flutter, Java, Python, AI, and cloud technologies.",
    "datePosted": "2024-02-09",
    "validThrough": "2024-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Sayge",
      "sameAs": "https://craftedbyaditya.github.io/sayge/"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nagpur, Pune, California, Frankfurt"
      }
    }
  };
  return (
    <>
      <SEO
        title="Careers at Sayge | Join Our Team of Innovators"
        description="Join Sayge's team of innovators. We're hiring talented individuals in Flutter, Java, Python, AI, and cloud technologies. Shape the future of technology with us."
        type="website"
        url="https://craftedbyaditya.github.io/sayge/careers"
        schema={schema}
      />
    <Layout>
      <div className="min-h-screen">
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're looking for passionate individuals who want to shape the future of technology.
                Work with cutting-edge tech in a collaborative environment.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {positions.map((position) => (
                <motion.div
                  key={position.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                    <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                      {position.level}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {position.description}
                  </p>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {position.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => window.location.href = `mailto:humans@sayge.com?subject=Application for ${position.title}&body=Hi Sayge Team,%0A%0AI'm interested in the ${position.title} position.%0A%0ABest regards`}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
    </>
  );
};

export default CareersPage;
