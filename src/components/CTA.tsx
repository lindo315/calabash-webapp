
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-calabash-obsidian text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1618520546561-039211903968?q=80&w=1287&auto=format&fit=crop')",
          opacity: 0.2 
        }}
      >
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Join the Glow-Up Movement
          </h2>
          
          <p className="text-lg mb-8 text-calabash-rose">
            Premium hair extensions that bring out confidence and elevate your natural beauty.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link 
              to="/shop" 
              className="bg-calabash-shea hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-medium transition-all"
            >
              Shop Now
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-transparent hover:bg-white hover:bg-opacity-10 border border-white text-white px-8 py-3 rounded-md font-medium transition-all"
            >
              Request a Custom Quote
            </Link>
          </div>
          
          <p className="italic text-xl font-display">
            "Sis, go get your hair done."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
