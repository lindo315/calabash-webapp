
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-calabash-baobab min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-calabash-obsidian">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?q=80&w=1580&auto=format&fit=crop')" }}
        >
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-calabash-rose">
              Empowering Black women through premium hair extensions
            </p>
          </div>
        </div>
      </section>
      
      {/* Founder Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop" 
                alt="Calabash Beauty Founder" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
              <div className="absolute bottom-8 -right-8 bg-calabash-shea p-8 rounded-lg shadow-lg max-w-xs">
                <p className="text-white italic font-medium">
                  "I created Calabash Beauty to celebrate the beauty, power, and softness of Black women everywhere."
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-calabash-obsidian mb-6">
                Meet the Founder
              </h2>
              
              <p className="text-gray-700 mb-4">
                Calabash Beauty was born from a personal journey and a vision to revolutionize the hair extension industry. As a Black woman entrepreneur, I experienced firsthand the challenges of finding premium quality hair extensions that were ethically sourced and crafted to enhance natural beauty.
              </p>
              
              <p className="text-gray-700 mb-4">
                After years of frustration with products that didn't meet my standards, I decided to create what I couldn't find: a brand that celebrates Black beauty while providing exceptional quality hair extensions that make every woman feel confident and beautiful.
              </p>
              
              <p className="text-gray-700 mb-4">
                Calabash Beauty is more than just a hair brand – it's a movement that empowers women to embrace their authentic beauty and express themselves confidently.
              </p>
              
              <p className="font-medium text-calabash-obsidian mt-6">
                - Alexandra Johnson, Founder
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-calabash-rose bg-opacity-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-calabash-obsidian mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-700">
              We're committed to empowering women through quality, ethical products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-calabash-shea bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-calabash-shea">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Quality</h3>
              <p className="text-gray-600 text-center">
                We meticulously source and craft hair extensions that meet the highest standards for durability, texture, and natural appearance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-calabash-shea bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-calabash-shea">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Ethical Sourcing</h3>
              <p className="text-gray-600 text-center">
                We ensure all our hair is ethically sourced and that suppliers adhere to fair trade practices and ethical standards of production.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-calabash-shea bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-calabash-shea">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Representation</h3>
              <p className="text-gray-600 text-center">
                We celebrate the beauty of Black women and are committed to authentic representation in all aspects of our brand.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Commitment */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-calabash-obsidian mb-6">
                Our Commitment to You
              </h2>
              
              <p className="text-gray-700 mb-4">
                At Calabash Beauty, we believe that premium hair extensions should be accessible to everyone. That's why we're committed to providing high-quality products at fair prices, without compromising on quality or ethics.
              </p>
              
              <p className="text-gray-700 mb-4">
                Every bundle is carefully inspected to ensure it meets our rigorous standards for quality, durability, and natural appearance. We stand behind our products and offer a satisfaction guarantee.
              </p>
              
              <p className="text-gray-700 mb-8">
                We're also committed to educating our community on proper hair care and installation techniques, helping you get the most out of your Calabash Beauty products.
              </p>
              
              <Link 
                to="/shop" 
                className="bg-calabash-shea hover:bg-calabash-obsidian text-white px-8 py-3 rounded-md font-medium transition-all inline-block"
              >
                Shop Our Collections
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1173&auto=format&fit=crop" 
                alt="Calabash Beauty Product" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1523264939339-c89f9dadde2e?q=80&w=1170&auto=format&fit=crop" 
                alt="Happy Customer" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1551909353-2bece6ff49a3?q=80&w=1309&auto=format&fit=crop" 
                alt="Hair Extensions" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1608106519898-afe5d8fcd4e9?q=80&w=1287&auto=format&fit=crop" 
                alt="Product Packaging" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-calabash-obsidian text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Join the Glow-Up Movement
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-calabash-rose">
            Experience the difference with our premium hair extensions and become part of our community.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
