import * as React from "react";
import universityImage from "../assets/synapsse.jpeg";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const about = `At Synapsse University, we are redefining online education
 by providing a cutting-edge learning platform tailored for the innovators
  and problem-solvers of tomorrow. As a modern Bootcamp-style university, 
  we are dedicated to empowering individuals with the skills and knowledge 
  they need to thrive in today’s fast-evolving digital world.`;

const mission = `Our mission is to bridge the gap between education and industry by offering practical, project-based
 courses that equip students with the tools to build impactful careers. We aim to inspire innovation,
 foster creativity, and nurture a community of lifelong learners.`;

const vision = `We envision a world where education is accessible, inclusive, and transformative—empowering students to
  lead, innovate, and create a meaningful impact in their communities and beyond.`;

function About() {
  return (
    <>
      <h1 className="hidden md:block lg:text-3xl font-bold text-center md:pt-10">
        About Us
      </h1>
      {/* <div className="container flex justify-between"> */}
      <div className="container lg:flex lg:justify-between md:py-4">
        <div className="md:grid md:grid-cols-2 gap-4 lg:grid-cols-none">

        <div className="university-image">
          <img
            src={universityImage}
            className="w-screen h-80 md:w-auto lg:hidden md:h-fit lg:max-w-xl lg:h-auto rounded-md md:rounded-custom"
          />
        </div>
          <div className="about">
            <h1 className="text-lg lg:text-2xl font-bold text-center">
              About Synapsse University
            </h1>
            <p className="text-md lg:text-xl py-4 px-2">{about}</p>
          </div>
          <div className="mission">
            <h1 className="text-lg lg:text-2xl font-bold text-center">
              Our Mission
            </h1>
            <p className="text-md lg:text-xl py-4 px-2">{mission}</p>
          </div>

          <div className="vision">
            <h1 className="text-lg lg:text-2xl font-bold text-center">
              Our Vision
            </h1>
            <p className="text-md lg:text-xl py-4 px-2">{vision}</p>
          </div>

          
        </div>

        <div className="university-image">
          <img
            src={universityImage}
            className="w-screen h-80 hidden lg:block md:max-w-sm lg:max-w-xl lg:h-auto rounded-md lg:rounded-custom"
          />
        </div>
      </div>

      <div className="flex flex-col justify-start items-start lg:pt-10 container">
        {/* <h1 className="pt-8 md:text-2xl lg:text-3xl font-bold max-w-2xl">
          Join us at Synapsse University, where innovation meets education, and
          your future begins!
        </h1>
        <br /> */}
        <Button className="text-lg self-center mb-6 lg:text-2xl bg-orangered lg:py-6 rounded-3xl">
          Okay, I will enrol Now
        </Button>
      </div>
    </>
  );
}

export default About;
