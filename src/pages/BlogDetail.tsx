import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBigLeft, ArrowLeft, ArrowLeftCircleIcon, ArrowLeftFromLine, ArrowLeftSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { PortableText } from '@portabletext/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { client, urlFor } from '../lib/sanity';

interface BlogPost {
  _id: string;
  title: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  body: any[];
  publishedAt: string;
}

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          image,
          body,
          publishedAt,
          slug
        }`;
        const post = await client.fetch(query, { slug });
        setPost(post);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Blog post not found</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Sayge</title>
        <meta name="description" content={post.title} />
      </Helmet>

      <Header />
      
      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center text-sm text-gray-600 hover:text-blue-600 mb-8 group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          </button>
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <time className="text-gray-600" dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>

          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={urlFor(post.image).width(1200).height(675).url()}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <PortableText
              value={post.body}
              components={{
                block: {
                  h1: ({children}) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-bold my-3">{children}</h2>,
                  normal: ({children}) => <p className="my-4">{children}</p>,
                },
                marks: {
                  link: ({value, children}) => {
                    const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
                    return (
                      <a href={value?.href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                         className="text-blue-600 hover:text-blue-800 transition-colors">
                        {children}
                      </a>
                    )
                  },
                },
              }}
            />
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogDetail;
