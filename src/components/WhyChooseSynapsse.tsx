import * as React from 'react';
import { 
  BookOpenIcon, 
  UsersIcon, 
  ClockIcon, 
  BriefcaseIcon, 
  GlobeIcon 
} from 'lucide-react';

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const WhyChooseSynapsse: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: BookOpenIcon,
      title: 'Project-Based Learning',
      description: 'Gain hands-on experience through real-world projects and practical assignments.'
    },
    {
      icon: UsersIcon,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience in their respective fields.'
    },
    {
      icon: ClockIcon,
      title: 'Flexible Learning',
      description: 'Study at your own pace with our fully online courses tailored to your schedule.'
    },
    {
      icon: BriefcaseIcon,
      title: 'Career Focused',
      description: 'Our programs are designed with a strong emphasis on career readiness and employability.'
    },
    {
      icon: GlobeIcon,
      title: 'Community Support',
      description: 'Join a global network of peers and mentors who share your passion for learning and growth.'
    }
  ];

  const FeatureCard: React.FC<FeatureProps> = ({ icon: Icon, title, description }) => (
    <div className="bg-trasparent backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center mb-4">
        <Icon 
          className="w-10 h-10 text-blue-600 mr-4 group-hover:text-blue-800 transition-colors" 
          strokeWidth={1.5} 
        />
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <section className="py-16 bg-whyColor text-txtColor">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Synapsse University?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering your learning journey with cutting-edge education, industry-relevant skills, and unparalleled support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {features.slice(3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSynapsse;