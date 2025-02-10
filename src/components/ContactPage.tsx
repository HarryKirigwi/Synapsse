import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Mail, 
  User, 
  Phone,
  MapPin,
  Clock,
  Send 
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

// Zod Schema for Contact Form
const contactSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z.string()
    .email({ message: "Invalid email address" }),
  phone: z.string()
    .optional()
    .refine(
      (val) => val === undefined || val === '' || /^\+?[1-9]\d{1,14}$/.test(val), 
      { message: "Invalid phone number" }
    ),
  message: z.string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(500, { message: "Message must be less than 500 characters" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form Submitted:', data);
      alert('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: [
        { label: 'General Inquiries', value: 'info@company.com' },
        { label: 'Support', value: 'support@company.com' }
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        { label: 'Main Office', value: '+1 (555) 123-4567' },
        { label: 'Support Line', value: '+1 (555) 987-6543' }
      ]
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: [
        { label: 'Customer Support', value: '+1 (555) 246-8135' },
        { label: 'Sales Inquiries', value: '+1 (555) 369-2580' }
      ]
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        { label: 'Main Location', value: '123 Business Street, City, State 12345' }
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        { label: 'Weekdays', value: '9:00 AM - 5:00 PM' },
        { label: 'Weekends', value: '10:00 AM - 2:00 PM' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-8xl">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Contact Form Section */}
          <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-blue-100 opacity-80">
                We'd love to hear from you. Fill out the form and we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Input */}
              <div className="group">
                <label className="block mb-2 text-sm font-medium text-blue-100">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-blue-300 group-focus-within:text-white transition-colors" />
                  </div>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full pl-10 pr-3 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:border-white focus:ring-2 focus:ring-white/30 text-white placeholder-blue-200"
                    placeholder="Your Name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-300">{errors.name.message}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="group">
                <label className="block mb-2 text-sm font-medium text-blue-100">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-blue-300 group-focus-within:text-white transition-colors" />
                  </div>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full pl-10 pr-3 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:border-white focus:ring-2 focus:ring-white/30 text-white placeholder-blue-200"
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-300">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Input */}
              <div className="group">
                <label className="block mb-2 text-sm font-medium text-blue-100">
                  Phone Number (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-blue-300 group-focus-within:text-white transition-colors" />
                  </div>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full pl-10 pr-3 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:border-white focus:ring-2 focus:ring-white/30 text-white placeholder-blue-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-300">{errors.phone.message }</p>
                )}
              </div>

              {/* Message Input */}
              <div className="group">
                <label className="block mb-2 text-sm font-medium text-blue-100">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    {...register('message')}
                    className="w-full border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm p-3 text-white placeholder-blue-200 focus:border-white focus:ring-2 focus:ring-white/30"
                    rows={4}
                    placeholder="Type your message here..."
                  />
                </div>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-300">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="p-4 bg-white">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Details</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 bg-blue-50 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail.label}: {detail.value}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Call to Action */}
            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">
                Need immediate assistance?
              </p>
              <a 
                href="tel:+15551234567" 
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;