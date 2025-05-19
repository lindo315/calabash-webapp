import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-calabash-obsidian overflow-hidden">
      {/* Background image with subtle parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=2074&auto=format&fit=crop')",
          filter: "brightness(0.6)",
          transform: "scale(1.05)",
          transition: "transform 8s ease-out",
        }}
      ></div>

      {/* Content with enhanced typography and animations */}
      <div className="relative z-10 container-custom h-full flex flex-col justify-center">
        <div className="max-w-xl text-white">
          {/* New promotional badge */}
          <div className="inline-block bg-calabash-shea bg-opacity-90 px-4 py-1 rounded-full text-white text-sm font-medium mb-6 animate-pulse">
            Premium Quality Hair
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display animate-fade-in leading-tight"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
          >
            Elevate Your Look with Premium Hair
          </h1>

          <p
            className="text-xl md:text-2xl mb-6 text-calabash-rose animate-fade-in font-light"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
          >
            Join the glow-up movement with our premium extensions
          </p>

          <p
            className="mb-8 text-gray-200 animate-fade-in max-w-md"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
          >
            Our bundles are ethically sourced and crafted to ensure maximum
            quality, durability, and the natural glow you deserve.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Link
              to="/shop"
              className="bg-calabash-shea hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-medium transition-all flex items-center space-x-2 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span>Shop Now</span>
              <ChevronRight size={18} />
            </Link>

            <Link
              to="/about"
              className="bg-transparent hover:bg-white hover:bg-opacity-10 border border-white text-white px-8 py-3 rounded-md font-medium transition-all transform hover:-translate-y-1"
            >
              Our Story
            </Link>
          </div>

          <p className="mt-8 italic text-calabash-rose animate-fade-in bg-black bg-opacity-20 py-2 px-4 rounded-full inline-block">
            "Sis, go get your hair done."
          </p>
        </div>
      </div>

      {/* New decorative elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-calabash-rose rounded-full border-opacity-30 hidden lg:block"></div>
      <div className="absolute top-20 left-20 w-16 h-16 border-2 border-calabash-shea rounded-full border-opacity-30 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
