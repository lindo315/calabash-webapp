
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-calabash-obsidian overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=2074&auto=format&fit=crop')",
          filter: "brightness(0.6)"
        }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom h-full flex flex-col justify-center">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Elevate Your Look with Premium Hair
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 text-calabash-rose animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Join the glow-up movement with our premium hair extensions.
          </p>
          
          <p className="mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Our premium bundles are ethically sourced and carefully crafted to ensure 
            maximum quality, durability, and the natural glow you deserve.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Link 
              to="/shop" 
              className="bg-calabash-shea hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-medium transition-all"
            >
              Shop Now
            </Link>
            
            <Link 
              to="/about" 
              className="bg-transparent hover:bg-white hover:bg-opacity-10 border border-white text-white px-8 py-3 rounded-md font-medium transition-all"
            >
              Our Story
            </Link>
          </div>
          
          <p className="mt-8 italic text-calabash-rose animate-fade-in" style={{ animationDelay: "1s" }}>
            "Sis, go get your hair done."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
