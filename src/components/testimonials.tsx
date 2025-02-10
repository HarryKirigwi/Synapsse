import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  QuoteIcon 
} from "lucide-react";
import james from '../assets/james.jpg'
import aisha from '../assets/aisha.jpg'
import emily from '../assets/emily.jpg'
import michael from '../assets/michael.jpg'
import sarah from '../assets/sarah.jpg'

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

const TestimonialData: Testimonial[] = [
   {
    name: "Sarah Johnson",
    role: "UI/UX Designer at CreativePro",
    feedback:
      "Synapsse University gave me the confidence and skills to switch careers. The UI/UX Design course was hands-on, practical, and taught by experts who genuinely care about student success.",
    image: sarah,
  },
   {
    name: "James Carter",
    role: "Full-Stack Developer at CodeWorks",
    feedback:
      "The Web Development course was a game-changer for me. I built projects that showcased my abilities, and within three months of completing the course, I landed my dream job!",
    image: james,
  },
  {
    name: "Aisha Patel",
    role: "Data Scientist at Insight Analytics",
    feedback:
      "I was blown away by how practical and industry-relevant the Data Science course was. The projects and mentorship helped me break into the competitive data science field.",
    image: aisha,
  },
  {
    name: "Michael Brown",
    role: "Cybersecurity Analyst at SecureNet",
    feedback:
      "The Cybersecurity program at Synapsse University is top-notch! It prepared me for real-world challenges and gave me the tools to excel in my role as a cybersecurity analyst.",
    image: michael,
  },
{
    name: "Emily Davis",
    role: "AI Engineer at FutureTech",
    feedback:
      "I always dreamed of working in AI, and Synapsse University made it possible. The AI & ML course was rigorous but rewarding, and the support from instructors was incredible.",
    image: emily,
  },
];
  
  const TestimonialSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
  
    const handleNext = () => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TestimonialData.length);
    };
  
    const handlePrevious = () => {
      setDirection(-1);
      setCurrentIndex((prev) => 
        (prev - 1 + TestimonialData.length) % TestimonialData.length
      );
    };
  
    useEffect(() => {
      const interval = setInterval(handleNext, 10000);
      return () => clearInterval(interval);
    }, []);
  
    const variants = {
      enter: (direction: number) => {
        return {
          x: direction > 0 ? 1000 : -1000,
          opacity: 0
        };
      },
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1
      },
      exit: (direction: number) => {
        return {
          zIndex: 0,
          x: direction < 0 ? 1000 : -1000,
          opacity: 0
        };
      }
    };
  
    const currentTestimonial = TestimonialData[currentIndex];
  
    return (
    <>
    <div className="container">
{/* <h1 className="text-2xl font-bold">Here is what our Alumni Say</h1> */}
    </div>

      <section className="relative w-full max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Testimonial Image */}
          <div className="hidden md:block">
            <motion.div 
              key={`image-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
  
          {/* Testimonial Content */}
          <div className="relative">
            {/* Quote Icon - Now positioned absolutely and fixed */}
            <div className="absolute -top-20 left-0 pointer-events-none">
              <QuoteIcon 
                className="text-blue-100 w-20 h-20 opacity-50"
                strokeWidth={1}
              />
            </div>
  
            {/* Testimonial Carousel Container */}
            <div className="relative h-full">
              {/* Testimonial Carousel */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={`testimonial-${currentIndex}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="relative z-10"
                >
                  <p className="text-xl text-gray-700 italic mb-6 pl-4 min-h-[120px]">
                    "{currentTestimonial.feedback}"
                  </p>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
  
            {/* Navigation Controls */}
            <div className="flex items-center mt-8 space-x-4">
              {/* Previous Button */}
              <button 
                onClick={handlePrevious}
                className="bg-gray-100 hover:bg-blue-50 p-2 rounded-full 
                transition-colors duration-300 group"
              >
                <ChevronLeftIcon 
                  className="text-gray-600 group-hover:text-blue-600 
                  transition-colors duration-300"
                />
              </button>
  
              {/* Navigation Dots */}
              <div className="flex space-x-2">
                {TestimonialData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      currentIndex === index 
                        ? "bg-blue-600 w-6" 
                        : "bg-gray-300 hover:bg-blue-300"
                    )}
                  ></button>
                ))}
              </div>
  
              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="bg-gray-100 hover:bg-blue-50 p-2 rounded-full 
                transition-colors duration-300 group"
              >
                <ChevronRightIcon 
                  className="text-gray-600 group-hover:text-blue-600 
                  transition-colors duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  };

export default TestimonialSection;