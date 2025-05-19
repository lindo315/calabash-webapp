import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-calabash-rose/10 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Image with decorative elements */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1508407576665-2d9a5d638a7e?q=80&w=1974&auto=format&fit=crop"
              alt="Calabash Beauty Founder"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />

            {/* Decorative circular badge */}
            <div className="absolute -bottom-6 -right-6 bg-calabash-shea w-32 h-32 rounded-full flex items-center justify-center p-4 shadow-lg transform transition-transform hover:scale-105">
              <p className="text-white text-center font-display font-medium leading-tight">
                Black Owned Business
              </p>
            </div>

            {/* Decorative circle with image */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1298&auto=format&fit=crop"
                alt="Hair Texture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Enhanced Content */}
          <div>
            {/* Section heading with decorative elements */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-0.5 bg-calabash-shea"></span>
              <span className="text-calabash-shea font-medium text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-calabash-obsidian mb-6 relative">
              About Calabash Beauty
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-calabash-shea"></span>
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              Calabash Beauty was born from a passion to empower Black women by
              providing premium hair extensions that enhance natural beauty.
            </p>

            <p className="text-gray-700 mb-6">
              Founded by a Black woman entrepreneur with a vision to
              revolutionize the hair extension industry, Calabash Beauty
              celebrates the beauty, power, and softness of Black women
              everywhere as part of a "glow-up movement."
            </p>

            {/* Enhanced testimonial/quote box */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-8 border-l-4 border-calabash-shea">
              <p className="text-gray-700 italic">
                "Our premium hair bundles are ethically sourced and meticulously
                crafted to ensure the highest quality. We believe that everyone
                deserves to feel confident and beautiful in their own skin and
                hair."
              </p>
            </div>

            <Link
              to="/about"
              className="bg-calabash-obsidian hover:bg-calabash-shea text-white px-8 py-3 rounded-md font-medium transition-all inline-flex items-center gap-2 group"
            >
              <span>Learn Our Story</span>
              <ChevronRight
                size={18}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
