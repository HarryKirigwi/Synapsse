import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"; // Adjust the import path as needed
import * as React from "react";

// interface Course {
//     title: string;
//     description: string;
//     content: string;
//     footer: string;
// }

// interface Courses {
//     [key: string]: Course;
// }

// The Courses object from your code
const Courses = {
    design: {
        title: "UI/UX Design",
        description: "Discover the world of User Interface and User Experience Design",
        content: "Master the principles of user interface and user experience design. Learn wireframing, prototyping, and design tools like Figma and Adobe XD to craft seamless digital experiences.",
        footer: "Learn more about UI/UX Design"
    },
    webDevelopment: {
        title: "Web Development",
        description: "Build dynamic and responsive websites",
        content: "Learn to build responsive, high-performance websites and applications using HTML, CSS, JavaScript, React, and more. Kickstart your career in web development!",
        footer: "Explore Web Development"
    },
    androidDevelopment: {
        title: "Android Development",
        description: "Develop feature-rich Android applications",
        content: "Develop Android applications using Kotlin and Java. Gain hands-on experience in mobile app design, development, and deployment to the Google Play Store.",
        footer: "Start Android Development"
    },
    dataScienceAI: {
        title: "Data Science & AI",
        description: "Harness the power of data and AI",
        content: "Learn data analysis, machine learning, and artificial intelligence. Dive into Python, TensorFlow, and real-world datasets to become a data-driven innovator.",
        footer: "Learn Data Science & AI"
    },
    cybersecurity: {
        title: "Cybersecurity",
        description: "Defend against modern cyber threats",
        content: "Become a cybersecurity professional with expertise in ethical hacking, network security, and penetration testing. Secure systems in an ever-changing digital landscape.",
        footer: "Start Cybersecurity Training"
    },
    aiML: {
        title: "AI and Machine Learning",
        description: "Lead the future with AI and ML",
        content: "Specialize in artificial intelligence and machine learning with courses on neural networks, deep learning, and AI-powered solutions for tomorrow's challenges.",
        footer: "Explore AI & ML"
    }
};

const CoursesList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(Courses).map(([key, course]) => (
                <Card key={key} className="shadow-md">
                    <CardHeader>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{course.content}</p>
                    </CardContent>
                    <CardFooter>
                        <Button className= "pl-0"variant="link">{course.footer}</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default CoursesList;
