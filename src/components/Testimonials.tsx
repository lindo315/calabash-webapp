import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jasmine K.",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop",
      quote:
        "The quality of these bundles is incredible! I've been wearing my Brazilian straight for 3 months now with minimal shedding. Everyone asks if it's my real hair.",
      location: "Cape Town, WC",
      rating: 5,
    },
    {
      id: 2,
      name: "Michelle T.",
      image:
        "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1586&auto=format&fit=crop",
      quote:
        "Calabash Beauty has transformed my confidence. The hair is so soft and blends perfectly with my natural texture. I'll never buy from anywhere else!",
      location: "Durban, KZN",
      rating: 5,
    },
    {
      id: 3,
      name: "Aisha J.",
      image:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1289&auto=format&fit=crop",
      quote:
        "As someone who's tried countless brands, I can honestly say these are the best extensions I've used. They hold curl beautifully and the customer service is amazing.",
      location: "Pretoria, GP",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Enhanced section heading with decorative elements */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-10 h-0.5 bg-calabash-shea"></span>
            <span className="text-calabash-shea font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <span className="w-10 h-0.5 bg-calabash-shea"></span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-calabash-obsidian relative inline-block">
            What Our Customers Say
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-calabash-shea"></span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Hear from our customers about their experience with Calabash Beauty
            products
          </p>
        </div>

        {/* Enhanced testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-calabash-baobab rounded-lg p-6 shadow-lg border border-gray-100 transform transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Quote Icon */}
                <div className="text-calabash-shea opacity-20 text-6xl font-serif mb-4 leading-none">
                  "
                </div>

                {/* Star Rating */}
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className={
                        star <= testimonial.rating
                          ? "text-yellow-400 fill-yellow-400 mr-1"
                          : "text-yellow-400 fill-transparent mr-1"
                      }
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 italic flex-grow mb-6">
                  {testimonial.quote}
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-md mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-calabash-obsidian">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
