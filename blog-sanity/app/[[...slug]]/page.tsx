"use client"
import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
type blog = {
  _id: number;
  title: string;
  slug: { current: string };
  imageUrl: string;
  content: string;
}

const Home = () => {
  const [blogs, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await client.fetch(`
        *[_type == "blog"] | order(publishedAt desc) [0..3] {
          _id,
          title,
          slug,
          "imageUrl": mainImage.asset->url,
          content
        }
      `);
      setBlogData(data);
      setIsLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="font-sans bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/bg3.avif')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-blue-400">BlogSpace</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Discover captivating stories and insights.
          </p>
          <Link
            href="#blogs"
            className="inline-flex items-center justify-center text-center px-6 py-3 bg-black rounded-full
              text-white hover:bg-blue-700 transition-all duration-300
              hover:scale-105 hover:shadow-lg"
          >
            Explore Blogs
            <ChevronDown className="ml-2 animate-bounce" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            About <span className="text-blue-400">Our Mission</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Mission', 'Vision', 'Values'].map((title,) => (
              <div
                key={title}
                className="group relative bg-gray-800 p-8 rounded-xl shadow-xl
                  transform transition-all duration-500 hover:-translate-y-2
                  hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10
                  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-12">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-white mb-4">Exceptional Performance Across All Devices</h2>
    <p className="text-gray-400 mb-8">
      Enjoy quick browsing across all platforms. Ideal for maximum efficiency on all platforms — desktop, tablet, and mobile.
    </p>
    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
      <div className="text-center">
        <div className="rounded-full w-24 h-24 flex items-center justify-center bg-green-100 mx-auto">
          <span className="text-4xl font-bold text-green-600">99</span>
        </div>
        <p className="text-white mt-4">Mobile Performance</p>
      </div>
      <div className="text-center">
        <div className="rounded-full w-24 h-24 flex items-center justify-center bg-green-100 mx-auto">
          <span className="text-4xl font-bold text-green-600">100</span>
        </div>
        <p className="text-white mt-4">Desktop Performance</p>
      </div>
      <div className="text-center">
        <div className="rounded-full w-24 h-24 flex items-center justify-center bg-green-100 mx-auto">
          <span className="text-4xl font-bold text-green-600">100</span>
        </div>
        <p className="text-white mt-4">SEO Performance</p>
      </div>
    </div>
    <div className="mt-8 flex justify-center items-center">
      <Image src="/logo.png" alt="Google PageSpeed Insights" className="w-8 h-8 mr-2 rounded-full"
      width={32} height={32}
      />
      <span className="text-gray-700 font-semibold">Google PageSpeed Insights</span>
    </div>
  </div>
</section>


      {/* Blog Section */}
      <section id="blogs" className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Latest <span className="text-blue-400">Articles</span>
          </h2>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog:blog) => (
                <div
                  key={blog._id}
                  className="group bg-gray-800 rounded-xl overflow-hidden shadow-xl
                    transform transition-all duration-500 hover:-translate-y-2
                    hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                      className="transform transition-transform duration-500
                        group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400
                      transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {blog.content?.slice(0, 100)}...
                    </p>
                    <Link
                      href={`/blog/${blog.slug.current}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300
                        transition-colors duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Get in <span className="text-blue-400">Touch</span>
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-700/50 rounded-lg border border-gray-600
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-700/50 rounded-lg border border-gray-600
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-300"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 bg-gray-700/50 rounded-lg border border-gray-600
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-blue-600 rounded-lg
                hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Blog<span className="text-blue-400">Space</span>
            </h3>
            <p className="text-gray-400">
              Sharing stories that inspire and inform.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#blogs" className="text-gray-400 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
