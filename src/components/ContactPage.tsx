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
        { label: 'General Inquiries', value: 'info@synapsse.edu' },
        { label: 'Admissions', value: 'admissions@synapsse.edu' }
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        { label: 'Main Office', value: '+1 (555) 123-4567' },
        { label: 'Admissions Hotline', value: '+1 (555) 987-6543' }
      ]
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: [
        { label: 'Student Support', value: '+1 (555) 246-8135' },
        { label: 'International Inquiries', value: '+1 (555) 369-2580' }
      ]
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        { label: 'Main Campus', value: '123 Learning Lane, Education City, EC 12345' }
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        { label: 'Weekdays', value: '9:00 AM - 5:00 PM' },
        { label: 'Weekends', value: '10:00 AM - 2:00 PM' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Send Us a Message
            </h2>
            <p className="mt-4 text-gray-600">
              Have questions? We're here to help.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className={`block w-full pl-10 pr-3 py-2 border rounded-md 
                    ${errors.name 
                      ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    } 
                    text-sm`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="relative">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={`block w-full pl-10 pr-3 py-2 border rounded-md 
                    ${errors.email 
                      ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    } 
                    text-sm`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Input */}
            <div className="relative">
              <label 
                htmlFor="phone" 
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number (optional)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className={`block w-full pl-10 pr-3 py-2 border rounded-md 
                    ${errors.phone 
                      ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border -red-500' 
                      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    } 
                    text-sm`}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            {/* Message Input */}
            <div className="relative">
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  {...register('message')}
                  className={`block w-full border rounded-md 
                    ${errors.message 
                      ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    } 
                    text-sm p-2`}
                  rows={4}
                  placeholder="Type your message here..."
                />
              </div>
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <info.icon className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-800">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      <span className="font-medium">{detail.label}: </span>
                      {detail.value}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;