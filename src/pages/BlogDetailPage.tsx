import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts } from './BlogPage';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Sayge Technology</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-white">
        <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </button>

            <div className="flex items-center space-x-2 text-sm mb-4">
              <span className="text-blue-600 font-medium">{post.category}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">{post.readTime}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

            <div className="flex items-center space-x-4 text-sm mb-8 pb-8 border-b border-gray-100">
              <span className="text-gray-600 font-medium">{post.author}</span>
              <span className="text-gray-400">{post.date}</span>
            </div>

            {/* This is where the full blog content would go */}
            <div className="prose prose-lg prose-blue">
              <p className="text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogDetailPage;
