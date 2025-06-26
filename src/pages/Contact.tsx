
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    program: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission to Formspree
    try {
      // In a real implementation, you would submit to Formspree here
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '', program: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-3d animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in-left">
            Ready to begin your martial arts journey? Contact us today and take the first step 
            towards mastering your mind, body, and spirit.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-martial-black mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-martial-red text-white p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-martial-black mb-2">Main Address</h3>
                    <p className="text-gray-700">
                      123 Dragon Street<br />
                      Downtown, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-martial-red text-white p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-martial-black mb-2">Phone</h3>
                    <p className="text-gray-700">
                      Main: (555) 123-4567<br />
                      Emergency: (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-martial-red text-white p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-martial-black mb-2">Email</h3>
                    <p className="text-gray-700">
                      Info: info@dragonacademy.com<br />
                      Admissions: admissions@dragonacademy.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-martial-red text-white p-3 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-martial-black mb-2">Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 6:00 AM - 10:00 PM<br />
                      Saturday: 8:00 AM - 8:00 PM<br />
                      Sunday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1635959592107!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-3xl shadow-2xl p-8 card-3d">
                <h2 className="text-4xl font-bold text-martial-black mb-8">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12 animate-scale-in">
                    <div className="bg-green-100 text-green-800 p-6 rounded-2xl mb-6">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                      <p className="text-lg">Thank you for your interest. We'll get back to you within 24 hours.</p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-martial-red hover:bg-martial-gold text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-martial-black font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-martial-red focus:outline-none transition-all duration-300 hover:border-martial-gold"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-martial-black font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-martial-red focus:outline-none transition-all duration-300 hover:border-martial-gold"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-martial-black font-semibold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-martial-red focus:outline-none transition-all duration-300 hover:border-martial-gold"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="program" className="block text-martial-black font-semibold mb-2">
                          Program Interest
                        </label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-martial-red focus:outline-none transition-all duration-300 hover:border-martial-gold"
                        >
                          <option value="">Select a program</option>
                          <option value="karate">Karate</option>
                          <option value="kung-fu">Kung Fu</option>
                          <option value="bjj">Brazilian Jiu-Jitsu</option>
                          <option value="mma">Mixed Martial Arts</option>
                          <option value="kids">Kids Programs</option>
                          <option value="fitness">Martial Arts Fitness</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-martial-black font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-martial-red focus:outline-none transition-all duration-300 hover:border-martial-gold resize-none"
                        placeholder="Tell us about your goals and any questions you have..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-martial-red hover:bg-martial-gold text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-martial-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fade-in">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "Do I need experience to join?",
                answer: "Not at all! We welcome students of all levels, from complete beginners to advanced practitioners. Our instructors tailor training to each student's ability."
              },
              {
                question: "What should I bring to my first class?",
                answer: "Just wear comfortable workout clothes and bring a water bottle. We provide all necessary equipment for beginners, and you can purchase your own gear as you progress."
              },
              {
                question: "How often should I train?",
                answer: "We recommend starting with 2-3 classes per week for optimal progress. As you build stamina and skill, you can increase frequency based on your goals."
              },
              {
                question: "Do you offer trial classes?",
                answer: "Yes! We offer a free trial class for new students. This gives you a chance to experience our teaching style and facilities before committing to a program."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold text-martial-gold mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
