
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    phone: "",
    hairType: "",
    length: "",
    quantity: "",
    specialRequests: "",
  });
  
  const [formType, setFormType] = useState<"contact" | "quote">("contact");
  
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your server
    
    toast.success("Message sent successfully! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  
  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your server
    
    toast.success("Quote request received! We'll email you with details soon.");
    setQuoteData({
      name: "",
      email: "",
      phone: "",
      hairType: "",
      length: "",
      quantity: "",
      specialRequests: "",
    });
  };
  
  return (
    <div className="bg-calabash-baobab min-h-screen py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-calabash-obsidian">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Get in touch with our team or request a custom quote for your hair needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-display font-semibold text-calabash-obsidian mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-calabash-shea bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-calabash-shea">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-calabash-obsidian">Email</h3>
                    <p className="text-gray-600">hello@calabashbeauty.com</p>
                    <p className="text-gray-600">support@calabashbeauty.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-calabash-shea bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-calabash-shea">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-calabash-obsidian">Phone</h3>
                    <p className="text-gray-600">+27 11 234 5678</p>
                    <p className="text-gray-600">Mon-Fri: 9am - 5pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-calabash-shea bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-calabash-shea">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-calabash-obsidian">Address</h3>
                    <p className="text-gray-600">123 Beauty Boulevard</p>
                    <p className="text-gray-600">Johannesburg, South Africa</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-medium text-calabash-obsidian mb-4">
                  Follow Us
                </h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-calabash-shea bg-opacity-20 rounded-full flex items-center justify-center hover:bg-calabash-shea hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-calabash-shea bg-opacity-20 rounded-full flex items-center justify-center hover:bg-calabash-shea hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-calabash-shea bg-opacity-20 rounded-full flex items-center justify-center hover:bg-calabash-shea hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-calabash-shea bg-opacity-20 rounded-full flex items-center justify-center hover:bg-calabash-shea hover:text-white transition-colors"
                    aria-label="TikTok"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                      <path d="M15 8a4 4 0 0 0 4 4V4a8 8 0 0 1-8 8v4a4 4 0 1 0 4-4v1a6 6 0 0 1-6-6v3a4 4 0 0 0 4 4"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div>
            {/* Form Switcher */}
            <div className="flex mb-6">
              <button
                onClick={() => setFormType("contact")}
                className={`flex-1 py-3 font-medium rounded-l-md border ${
                  formType === "contact" 
                    ? "bg-calabash-shea text-white" 
                    : "bg-white text-calabash-obsidian"
                }`}
              >
                Contact Us
              </button>
              
              <button
                onClick={() => setFormType("quote")}
                className={`flex-1 py-3 font-medium rounded-r-md border ${
                  formType === "quote" 
                    ? "bg-calabash-shea text-white" 
                    : "bg-white text-calabash-obsidian"
                }`}
              >
                Request a Quote
              </button>
            </div>
            
            {/* Contact Form */}
            {formType === "contact" && (
              <form onSubmit={handleContactSubmit} className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-display font-semibold text-calabash-obsidian mb-6">
                  Send Us a Message
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleContactChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    type="submit" 
                    className="w-full bg-calabash-shea hover:bg-calabash-obsidian text-white py-3 rounded-md font-medium transition-colors"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            )}
            
            {/* Quote Request Form */}
            {formType === "quote" && (
              <form onSubmit={handleQuoteSubmit} className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-display font-semibold text-calabash-obsidian mb-6">
                  Request a Custom Quote
                </h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={quoteData.name}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={quoteData.email}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={quoteData.phone}
                      onChange={handleQuoteChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hair Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="hairType"
                      value={quoteData.hairType}
                      onChange={handleQuoteChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                    >
                      <option value="">Select Hair Type</option>
                      <option value="Brazilian">Brazilian</option>
                      <option value="Peruvian">Peruvian</option>
                      <option value="Malaysian">Malaysian</option>
                      <option value="Indian">Indian</option>
                      <option value="Cambodian">Cambodian</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Length <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="length"
                        value={quoteData.length}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                      >
                        <option value="">Select Length</option>
                        <option value="14 inches">14 inches</option>
                        <option value="16 inches">16 inches</option>
                        <option value="18 inches">18 inches</option>
                        <option value="20 inches">20 inches</option>
                        <option value="22 inches">22 inches</option>
                        <option value="24 inches">24 inches</option>
                        <option value="26 inches">26 inches</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quantity <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="quantity"
                        value={quoteData.quantity}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                      >
                        <option value="">Select Quantity</option>
                        <option value="1 bundle">1 bundle</option>
                        <option value="2 bundles">2 bundles</option>
                        <option value="3 bundles">3 bundles</option>
                        <option value="4 bundles">4 bundles</option>
                        <option value="5+ bundles">5+ bundles</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={quoteData.specialRequests}
                      onChange={handleQuoteChange}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:ring-calabash-shea focus:border-calabash-shea"
                      placeholder="Tell us about any special requirements or questions..."
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    type="submit" 
                    className="w-full bg-calabash-shea hover:bg-calabash-obsidian text-white py-3 rounded-md font-medium transition-colors"
                  >
                    Request Quote
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
