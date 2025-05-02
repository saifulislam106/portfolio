// components/Contact.tsx
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Feel free to reach out anytime. I&#39;m open to freelance work, collaborations, or just a friendly chat.
          </p>
        </div>

        {/* Flex Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-800 dark:text-gray-200 w-full md:w-1/2">
            <div className="flex items-center space-x-4">
              <Mail className="text-indigo-500" />
              <a href="mailto:saifulislam106915@gmail.com" className="hover:text-primary transition">
                saifulislam106915@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-indigo-500" />
              <a href="tel:+8801824072191" className="hover:text-primary transition">
                +8801824072191
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-indigo-500" />
              <p>Chattogram, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
