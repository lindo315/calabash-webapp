import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-calabash-obsidian text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
      </div>

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618520546561-039211903968?q=80&w=1287&auto=format&fit=crop')",
          opacity: 0.2,
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Join the Glow-Up Movement
          </h2>

          <p className="text-xl mb-8 text-calabash-rose">
            Premium hair extensions that bring out confidence and elevate your
            natural beauty.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link
              to="/shop"
              className="bg-calabash-shea hover:bg-opacity-90 text-white px-8 py-4 rounded-md font-medium transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span>Shop Now</span>
              <ArrowRight
                size={18}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to="/contact"
              className="bg-transparent hover:bg-white hover:bg-opacity-10 border border-white text-white px-8 py-4 rounded-md font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Request a Custom Quote
            </Link>
          </div>

          <p className="italic text-xl font-display bg-white bg-opacity-10 py-3 px-6 rounded-full inline-block">
            "Sis, go get your hair done."
          </p>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-calabash-rose opacity-10 hidden lg:block"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border-2 border-calabash-rose opacity-10 hidden lg:block"></div>
    </section>
  );
};

export default CTA;
