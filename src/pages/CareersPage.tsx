import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import JobApplicationModal from '../components/JobApplicationModal';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { fetchCareers, type Career } from '../lib/careers';

interface JobPosition {
  id: string;
  title: string;
  level: string;
  description: string | null;
  techStack: string[];
  apply_url: string | null;
  location?: string;
  employment_type?: string;
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const CareersPage = () => {
  const [allPositions, setAllPositions] = useState<JobPosition[]>([]);
  const [filteredPositions, setFilteredPositions] = useState<JobPosition[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load careers data
  useEffect(() => {
    const loadCareers = async () => {
      try {
        const careers = await fetchCareers();
        const formattedCareers: JobPosition[] = careers.map((career: Career) => ({
          id: career.id,
          title: career.title,
          level: career.seniority || 'Not Specified',
          description: career.description || 'No description available.',
          techStack: career.skills || [],
          apply_url: career.apply_url,
          location: career.location,
          employment_type: career.employment_type
        }));
        setAllPositions(formattedCareers);
        setFilteredPositions(formattedCareers);
      } catch (err) {
        console.error('Failed to load careers:', err);
        setError('Failed to load career opportunities. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadCareers();
  }, []);

  // Filter positions based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPositions(allPositions);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = allPositions.filter(position => 
      position.title.toLowerCase().includes(query) ||
      (position.description?.toLowerCase().includes(query) ?? false) ||
      position.techStack.some(tech => tech.toLowerCase().includes(query))
    );
    setFilteredPositions(filtered);
  }, [searchQuery, allPositions]);

  return (
    <Layout>
      <SEO
        title="Careers at Sayge | Join Our Team of Innovators"
        description="Explore career opportunities at Sayge. Join our team of innovators working with cutting-edge technologies."
        type="website"
        url="https://sayge.tech/careers"
      />
      <main className="min-h-screen bg-white">
        <section className="pt-28 pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Join Our Team
              </h1>
              <p className="text-base text-gray-600">
                We're looking for passionate individuals who want to shape the future of technology. Work with cutting-edge tech in a collaborative environment.
              </p>
              
              <div className="relative mt-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search positions by title, skills, or description..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                />
              </div>
            </motion.div>

            <section className="py-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Open Positions
                </h2>
                
                {isLoading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading positions...</p>
                  </div>
                ) : error ? (
                  <div className="text-center py-12">
                    <p className="text-red-500">{error}</p>
                    <button
                      onClick={() => window.location.reload()}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      Retry
                    </button>
                  </div>
                ) : filteredPositions.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600">
                      {searchQuery ? 'No matching positions found. Try a different search term.' : 'No open positions at the moment. Please check back later.'}
                    </p>
                  </div>
                ) : (
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-6"
                  >
                    {filteredPositions.map((position) => (
                      <motion.div
                        key={position.id}
                        variants={fadeInUp}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {position.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                              {position.level} • {position.location || 'Location not specified'}
                            </p>
                          </div>
                          {position.employment_type && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {position.employment_type}
                            </span>
                          )}
                        </div>
                        
                        <p className="mt-3 text-gray-600">
                          {position.description}
                        </p>
                        
                        {position.techStack.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {position.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <div className="mt-6">
                            <button
                              onClick={() => {
                                setSelectedPosition(position);
                                setIsModalOpen(true);
                              }}
                              className="w-full sm:w-auto text-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                              Apply Now
                            </button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </section>
          </div>
        </section>
      </main>
      
      {selectedPosition && (
        <JobApplicationModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPosition(null);
          }}
          positionTitle={selectedPosition.title}
        />
      )}
    </Layout>
  );
};

export default CareersPage;
