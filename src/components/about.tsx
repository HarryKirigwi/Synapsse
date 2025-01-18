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
    <h1 className="text-3xl font-bold text-center lg:py-10">About Us</h1>
    <div className="container flex justify-between">
      <div>
        <h1 className="text-2xl font-bold text-center">
          About Synapsse University
        </h1>
        <p className="text-xl py-4 px-2">{about}</p>
        <h1 className="text-2xl font-bold text-center">Our Mission</h1>
        <p className="text-xl py-4 px-2">{mission}</p>
        <h1 className="text-2xl font-bold text-center">Our Vision</h1>
        <p className="text-xl py-4 px-2">{vision}</p>
      </div>

      <div>
        <img
          src={universityImage}
          className="max-w-xl rounded-md"
          style={{ borderTopLeftRadius: "30% 30%",
            borderBottomRightRadius: "30% 30%"
           }}
        />
      </div>
    </div>

    <div className="flex flex-col justify-start items-start lg:py-10 container">
        <h1 className="lg:text-3xl font-bold max-w-2xl">Join us at Synapsse University, where innovation meets education, and your future begins!</h1><br/>
        <Button variant="link" className="text-xl text-btnColor px-0 lg:py-4">Enrol Now</Button>
    </div>

    </>
  );
}

export default About;
