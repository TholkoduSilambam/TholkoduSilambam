
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react';

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
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'bot'; text: string }>>([
    {
      role: 'bot',
      text: 'Hello! Welcome to Silambam training. How can I help you?'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isChatOpen]);

  const normalizeText = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, '');

  const formContactPhone1 = '+91 8489256107';
  const formContactPhone2 = '+91 7010717593';

  const getBotReply = (rawInput: string) => {
    const text = normalizeText(rawInput);

    const wantsFees = text.includes('fee') || text.includes('fees') || text.includes('cost');
    const wantsTiming =
      text.includes('timing') ||
      text.includes('timings') ||
      (text.includes('class') && text.includes('time')) ||
      text.includes('class time');

    // Fees / timings: always return the master contact numbers.
    if (wantsFees) {
      return `Fees depend on the course. Contact us at ${formContactPhone1} or ${formContactPhone2} for exact details.`;
    }

    if (wantsTiming) {
      return `Class timings may vary. Contact us at ${formContactPhone1} or ${formContactPhone2} for details.`;
    }

    // Greetings
    if (text.includes('good morning')) return 'Good morning! Ready to learn Silambam today?';
    if (text.includes('good evening')) return 'Good evening! How can I help you with Silambam?';
    if (/\bhi\b/.test(text) || text.startsWith('hi ')) return 'Hello! Welcome to Silambam training. How can I help you?';
    if (/\bhello\b/.test(text) || text.startsWith('hello ')) return 'Hi there! Do you want to know about Silambam?';

    // Closing
    if (text.includes('thank you') || text.startsWith('thanks') || text === 'thank you' || text === 'thanks') {
      return 'You’re welcome! Feel free to ask more about Silambam anytime.';
    }

    // Q&A mapping
    if (text.includes('what is silambam') || (text.includes('silambam') && text.includes('what') && text.includes('is'))) {
      return 'Silambam is an ancient Indian martial art that uses a long stick for fighting and self-defense.';
    }

    if ((text.includes('where') && text.includes('silambam') && (text.includes('start') || text.includes('started'))) || (text.includes('origin') && text.includes('silambam'))) {
      return 'Silambam started in Tamil Nadu, India.';
    }

    if (text.includes('why') && text.includes('learn') && text.includes('silambam')) {
      return 'People learn Silambam for self-defense, fitness, discipline, and confidence.';
    }

    if ((text.includes('what') && text.includes('used') && text.includes('silambam')) || (text.includes('bamboo') && text.includes('silambam')) || (text.includes('stick') && text.includes('silambam'))) {
      return 'A long bamboo stick is mainly used in Silambam.';
    }

    if ((text.includes('children') || text.includes('kids')) && text.includes('silambam')) {
      return 'Yes, children can learn Silambam from a young age.';
    }

    if (text.includes('benefit') && text.includes('silambam')) {
      return 'It improves strength, speed, balance, and focus.';
    }

    if (text.includes('how long') && text.includes('silambam')) {
      return 'It depends, but basic skills can be learned in a few months.';
    }

    if ((text.includes('duration') || text.includes('how long')) && text.includes('learn')) {
      return 'It depends, but basic skills can be learned in a few months.';
    }

    if (text.includes('dangerous') || (text.includes('safe') && text.includes('silambam'))) {
      return 'No, it is safe when practiced with proper training and guidance.';
    }

    if (text.includes('offer') && text.includes('class') && text.includes('silambam')) {
      return 'Yes, we provide Silambam training classes.';
    }

    if (text.includes('do you offer classes') || (text.includes('classes') && text.includes('silambam'))) {
      return 'Yes, we provide Silambam training classes.';
    }

    if (text.includes('trial') && (text.includes('class') || text.includes('classes'))) {
      return 'No, we currently do not offer trial classes.';
    }

    if (text.includes('dress') || (text.includes('wear') && text.includes('silambam')) || text.includes('what should i wear')) {
      return 'Wear comfortable sports clothes for easy movement.';
    }

    if (text.includes('fit') && (text.includes('join') || text.includes('joining') || text.includes('before'))) {
      return 'No, you can join and improve your fitness during training.';
    }

    if (text.includes('advanced') && text.includes('silambam')) {
      return 'Yes, advanced levels are available after basic training.';
    }

    // Fallback for anything not in the set
    return 'Please send your message through the contact form on this page. We\'ll get back to you soon.';
  };

  const handleChatSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    const userText = chatInput.trim();
    if (!userText) return;

    setChatMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setChatInput('');

    const reply = getBotReply(userText);
    const shouldNudgeForm = reply.toLowerCase().includes('contact form');

    setTimeout(() => {
      setChatMessages((prev) => [...prev, { role: 'bot', text: reply }]);
      if (shouldNudgeForm) {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 250);
  };

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
      const formspreeEndpoint = "https://formspree.io/f/xyknvzby";

      const form = e.currentTarget as HTMLFormElement;
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (!res.ok) {
        throw new Error(`Form submission failed with status ${res.status}`);
      }

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
                     Anna Nagar, sakthi Vinayagar Kovil<br/>
                     VAO Office, Vanniyangudi Panchayat Office Front Side,<br />
                     Sivagangai-630561.
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
                      +91 8489256107<br />
                      +91 7010717593
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
                      tholkodusilambam@gmail.com<br />
                      
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15048.396991041343!2d78.502929!3d9.849541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00fb005241854f%3A0x601b5cb586933f25!2sTholkodu%20silambam!5e1!3m2!1sen!2sin!4v1773998483945!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
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
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
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
                answer: "No, we currently do not offer trial classes. However, we ensure high-quality learning from the very beginning and provide full support throughout the classes."
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

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen ? (
          <div className="w-96 max-w-[90vw] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="flex items-center justify-between bg-martial-red text-white px-4 py-3">
              <div className="flex items-center gap-3">
                <MessageSquare size={20} />
                <div className="font-bold">Silambam Assistant</div>
              </div>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="text-white/90 hover:text-white font-bold text-xl leading-none"
                aria-label="Close chat"
              >
                ×
              </button>
            </div>

            <div className="bg-gray-50 h-80 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((m, idx) => (
                <div key={idx} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  <div
                    className={
                      m.role === 'user'
                        ? 'max-w-[80%] bg-martial-black text-white px-4 py-2 rounded-2xl'
                        : 'max-w-[80%] bg-white text-martial-black px-4 py-2 rounded-2xl border border-gray-200'
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleChatSend} className="p-3 border-t border-gray-200 bg-white flex gap-2">
              <input
                value={chatInput}
                onChange={(ev) => setChatInput(ev.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-martial-red"
              />
              <button
                type="submit"
                disabled={!chatInput.trim()}
                className="bg-martial-red hover:bg-martial-gold text-white px-4 py-2 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsChatOpen(true)}
            className="w-14 h-14 rounded-full bg-martial-red hover:bg-martial-gold text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105"
            aria-label="Open chat"
          >
            <MessageSquare size={22} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Contact;
