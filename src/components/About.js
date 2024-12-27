import Image from "next/image";
import { HoverEffect } from "./ui/card-hover-effect";
import { SparklesCore } from "./ui/sparkles";


export function About() {
  return (
    <div id="About" className="pt-[50px] max-w-5xl mx-auto px-8 border-t border-[#1d1d1d]">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
        About Me
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-xl md:text-1xl font-small text-neutral-800 dark:text-neutral-100">
        Get to know who I am and what I do.
      </p>
      
      {/* Personal Info Section */}
      <div className="flex justify-center items-center py-4">
  {/* Main container */}
  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
    {/* Image */}
    <Image
      src="/Sbiya3.jpeg"
      width={250}
      height={250}
      className="rounded-full object-contain"
      alt="model"
    />
    {/* Information Section */}
    <div className="text-white flex flex-col justify-center">
      <div className="flex items-center mb-2">
        <span className="font-medium">Full Name: </span>
        <span className="font-light text-gray-300 pl-2">ELMESSAOUDI Oussama</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="font-medium">Age: </span>
        <span className="font-light text-gray-300 pl-2">22 ans</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="font-medium">E-mail: </span>
        <span className="font-light text-gray-300 pl-2">oussamaelmessaoudi17@gmail.com</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="font-medium">Phone Number: </span>
        <span className="font-light text-gray-300 pl-2">+212-777506441</span>
      </div>
    </div>
  </div>
</div>

  
      {/* Hover Effect Section */}
      <HoverEffect items={projects} />
    </div>
  );
  
  
}
export const projects = [
  {
    title: "Full-Stack Web Developer",
    description:
      " I build robust and user-friendly web applications from the ground up. My expertise spans front-end development, back-end logic, and database management, allowing me to create complete and scalable web solutions.",
      link: "#",
  },
  {
    title: "Mobile App Developer",
    description:
      "I develop engaging and intuitive mobile applications for both iOS and Android platforms. I focus on creating user-centered experiences that are both functional and visually appealing.",
      link: "#",
    },
  {
    title: "Graphic Designer",
    description:
      "I bring ideas to life through compelling visual communication. I create visually striking designs for various platforms, including digital and print media. I specialize in creating flyers, logos, and posters that effectively convey messages and capture attention.",
      link: "#",
  },
  {
    title: "Embedded Systems Enthusiast",
    description:
      "I am passionate about the intersection of hardware and software. I enjoy working with embedded systems, developing innovative solutions that leverage the power of microcontrollers and sensors.",
    link: "#",
  }
];
