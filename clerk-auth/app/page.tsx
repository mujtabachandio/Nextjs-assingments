export default function Home() {
  return (
    <>
      {/* Main Hero Section */}
      <div className="min-h-[43.4rem] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white px-6">
        {/* Heading with Animation */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide animate-pulse">
          Lens-Cart
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-2xl max-w-2xl leading-relaxed">
          Explore the world through the lens of quality and style. Discover your perfect eyewear with us.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <a
            href="#shop-now"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg shadow-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Shop Now
          </a>
          <a
            href="#learn-more"
            className="bg-purple-600 text-white px-8 py-4 rounded-lg shadow-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      
    </>
  );
}
