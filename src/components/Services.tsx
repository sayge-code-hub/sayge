import { Smartphone, Globe, Server, Palette, Cloud, Brain } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Fast delivery, cross-platform solutions, and user-centric designs.',
  },
  {
    icon: Globe,
    title: 'Web App Development',
    description: 'Tailored solutions for scalability and performance.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Secure and robust architecture for long-term success.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-friendly, beautiful, and engaging interfaces.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Robust cloud solutions that scale with your business.',
  },
  {
    icon: Brain,
    title: 'Tech Consulting',
    description: 'Expert guidance to align technology with business goals.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Expertise</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600" />
              <h3 className="mt-6 text-xl font-medium text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;