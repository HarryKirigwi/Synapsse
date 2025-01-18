import * as React from 'react';
import { useState } from 'react'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Send, 
  Mail 
} from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Zod Schema for Email Subscription
const subscriptionSchema = z.object({
  email: z.string()
    .email({ message: "Please enter a valid email address" })
});

type SubscriptionFormData = z.infer<typeof subscriptionSchema>;

const Footer: React.FC = () => {
  const [subscriptionStatus, setSubscriptionStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema)
  });

  const onSubscribe = async (data: SubscriptionFormData) => {
    setSubscriptionStatus('loading');
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Actual subscription logic would go here
      console.log('Subscribed:', data.email);
      
      setSubscriptionStatus('success');
      reset();
      
      // Reset status after 3 seconds
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    } catch (error) {
      setSubscriptionStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    }
  };

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://facebook.com/synapsse", 
      label: "Facebook" 
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/synapsse", 
      label: "Twitter" 
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/synapsse", 
      label: "Instagram" 
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/synapsse", 
      label: "LinkedIn" 
    }
  ];

  const footerLinks = {
    Explore: [
      { name: "Courses", href: "/courses" },
      { name: "Programs", href: "/programs" },
      { name: "Admissions", href: "/admissions" },
      { name: "Career Support", href: "/career-support" }
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "Student Portal", href: "/student-portal" },
      { name: "Learning Resources", href: "/resources" },
      { name: "FAQ", href: "/faq" }
    ],
    About: [
      { name: "Our Story", href: "/about" },
      { name: "Leadership", href: "/leadership" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand and Description */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Synapsse University</h2>
            <p className="text-gray-400 mb-6">
              Empowering learners with cutting-edge education and transformative skills for the digital age.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates, courses, and opportunities.
            </p>
            
            <form onSubmit={handleSubmit(onSubscribe)} className="relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register('email')}
                  disabled={subscriptionStatus === 'loading'}
                  className={`w-full pl-10 pr-12 py-3 rounded-md 
                    ${errors.email 
                      ? 'border-2 border-red-500 text-red-500' 
                      : 'border border-gray-700 bg-gray-800'
                    } 
                    focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <button
                  type="submit"
                  disabled={subscriptionStatus === 'loading'}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 
                    text-gray-400 hover:text-white 
                    disabled:opacity-50"
                >
                  {subscriptionStatus === 'loading' ? (
                    <Send className="animate-spin" />
                  ) : (
                    <Send />
                  )}
                </button>
              </div>
              
              {/* Subscription Status Messages */}
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
              {subscriptionStatus === 'success' && (
                <p className="mt-2 text-sm text-green-500">
                  Successfully subscribed!
                </p>
              )}
              {subscriptionStatus === 'error' && (
                <p className="mt-2 text-sm text-red-500">
                  Subscription failed. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Synapsse University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;