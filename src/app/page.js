"use client";


import { About } from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";

export default function Home() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </>

  );
}

