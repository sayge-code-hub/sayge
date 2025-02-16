import React, { useState, useMemo, FormEvent, useEffect } from 'react';
import { Search, X, CheckCircle, Mail } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminModal from '../components/AdminModal';

import { BlogPost, client, urlFor } from '../lib/sanity';



const BlogPage = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Fetching posts...');
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          publishedAt,
          image,
          body
        }`;
        console.log('Query:', query);
        const posts = await client.fetch(query);
        console.log('Raw posts data:', posts);
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
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
      (post.body || []).some((block: any) => 
        block._type === 'block' && 
        block.children?.some((child: any) => 
          child.text?.toLowerCase().includes(query)
        )
      )
    );
  }, [searchQuery, blogPosts]);
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

      <main className="min-h-screen bg-white relative">
        <div 
          onClick={() => setIsAdminModalOpen(true)} 
          className="fixed bottom-8 right-8 p-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200 z-50"
          title="Admin Access"
        >
          <Settings className="w-4 h-4" />
        </div>
        <AdminModal 
          isOpen={isAdminModalOpen}
          onClose={() => setIsAdminModalOpen(false)}
          onSubmit={() => {
            setIsAdminModalOpen(false);
            window.open('/admin', '_blank');
          }}
        />
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
                  key={post._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => navigate(`/blog/${post.slug.current}`)}
                  className="group py-8 first:pt-0 last:pb-0 cursor-pointer hover:bg-gray-50 -mx-4 px-4 transition-colors"
                >
                  <div className="flex items-center space-x-2 text-sm mb-2">
                    <span className="text-xs text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  {post.mainImage && (
                    <div className="mb-3 relative h-48 overflow-hidden rounded-lg">
                      <img
                        src={urlFor(post.mainImage).width(600).height(300).url()}
                        alt={post.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                    {post.body?.[0]?.children?.[0]?.text || 'No preview available'}
                  </p>
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
