
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-calabash-rose bg-opacity-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1508407576665-2d9a5d638a7e?q=80&w=1974&auto=format&fit=crop" 
              alt="Calabash Beauty Founder" 
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-calabash-shea w-32 h-32 rounded-full flex items-center justify-center p-4 shadow-lg">
              <p className="text-white text-center font-display font-medium">Black Owned Business</p>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-calabash-obsidian mb-6">
              About Calabash Beauty
            </h2>
            
            <p className="text-lg text-gray-700 mb-4">
              Calabash Beauty was born from a passion to empower Black women by providing premium hair extensions that enhance natural beauty.
            </p>
            
            <p className="text-gray-700 mb-6">
              Founded by a Black woman entrepreneur with a vision to revolutionize the hair extension industry, Calabash Beauty celebrates the beauty, power, and softness of Black women everywhere as part of a "glow-up movement."
            </p>
            
            <p className="text-gray-700 mb-8">
              Our premium hair bundles are ethically sourced and meticulously crafted to ensure the highest quality. We believe that everyone deserves to feel confident and beautiful in their own skin and hair.
            </p>
            
            <Link 
              to="/about" 
              className="bg-calabash-obsidian hover:bg-calabash-shea text-white px-8 py-3 rounded-md font-medium transition-all inline-block"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
