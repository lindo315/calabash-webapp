
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jasmine K.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop",
      quote: "The quality of these bundles is incredible! I've been wearing my Brazilian straight for 3 months now with minimal shedding. Everyone asks if it's my real hair.",
      location: "Atlanta, GA"
    },
    {
      id: 2,
      name: "Michelle T.",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1586&auto=format&fit=crop",
      quote: "Calabash Beauty has transformed my confidence. The hair is so soft and blends perfectly with my natural texture. I'll never buy from anywhere else!",
      location: "New York, NY"
    },
    {
      id: 3,
      name: "Aisha J.",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1289&auto=format&fit=crop",
      quote: "As someone who's tried countless brands, I can honestly say these are the best extensions I've used. They hold curl beautifully and the customer service is amazing.",
      location: "Houston, TX"
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-calabash-obsidian">
            Customer Testimonials
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Hear from our customers about their experience with Calabash Beauty products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-calabash-baobab rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"  
                />
                <div>
                  <h4 className="font-medium text-calabash-obsidian">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <blockquote className="relative">
                <span className="text-calabash-shea text-5xl absolute -top-5 -left-2 opacity-20">"</span>
                <p className="text-gray-700 italic relative z-10">
                  {testimonial.quote}
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
