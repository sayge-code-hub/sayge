import React, { useState, useMemo, FormEvent } from 'react';
import { Search, X, CheckCircle, Mail } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Software Development',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and maintain software applications.',
    author: 'Aditya Rana',
    date: 'Feb 10, 2024',
    readTime: '5 min read',
    category: 'Technology',
  },
  {
    id: '2',
    title: 'Building Scalable Flutter Applications',
    excerpt: 'Best practices and architecture patterns for developing large-scale Flutter applications that can grow with your business.',
    author: 'Joel Mathew',
    date: 'Feb 8, 2024',
    readTime: '7 min read',
    category: 'Mobile Development',
  },
  {
    id: '3',
    title: 'The Impact of Cloud Computing on Modern Business',
    excerpt: 'How cloud technologies are transforming business operations and enabling new possibilities for growth and innovation.',
    author: 'Laura Chen',
    date: 'Feb 5, 2024',
    readTime: '6 min read',
    category: 'Cloud Computing',
  },
];

const BlogPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscribeStatus('success');
      setEmail('');
      setIsModalOpen(true);
      setTimeout(() => {
        setSubscribeStatus('idle');
        setTimeout(() => setIsModalOpen(false), 500);
      }, 5000);
    } catch (error) {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  };

  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return blogPosts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);
  return (
    <>
      <Helmet>
        <title>Blog - Sayge Technology</title>
        <meta
          name="description"
          content="Explore the latest insights on software development, technology trends, and digital innovation from the Sayge team."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-28 pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Blog
              </h1>
              <p className="text-base text-gray-600">
                Thoughts on technology, development, and innovation.
              </p>
              <div className="relative mt-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search posts..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                />
              </div>

            </motion.div>
          </div>
        </section>

        {/* Blog Posts List */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="divide-y divide-gray-100">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="group py-8 first:pt-0 last:pb-0 cursor-pointer hover:bg-gray-50 -mx-4 px-4 transition-colors"
                >
                  <div className="flex items-center space-x-2 text-sm mb-2">
                    <span className="text-blue-600 font-medium">{post.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-600 font-medium">{post.author}</span>
                    <span className="text-gray-400">{post.date}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="block flex-1 px-3 py-2 border border-gray-200 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'loading'}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${subscribeStatus === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              <p className="text-gray-500 text-xs">Subscribe to our newsletter for the latest insights on technology and innovation.</p>
            </div>
          </div>
        </section>

        {/* Subscription Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg p-6 max-w-sm mx-4 relative shadow-xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Successfully Subscribed!</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Welcome to our newsletter! You'll receive the latest updates on technology, innovation, and industry insights directly in your inbox.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Got it, thanks!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default BlogPage;
