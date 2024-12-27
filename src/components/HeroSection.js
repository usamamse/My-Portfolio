import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaFacebook,FaWhatsapp  } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { LinkPreview } from './ui/link-preview';
 // Ensure you have this package installed

const HeroSection = () => {
  return (
    <div id="Home" className="pb-[50px] w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
        <Image
          src="/Logo.png"
          width={120}
          height={80}
          className="max-h-[80px] h-full object-contain object-bottom"
          alt="logo"
        />

<div className="flex flex-col justify-center h-[80%]">
  <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
    <span className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-[20px] sm:text-[22px] md:text-[24px] font-sans py-[-10px] -translate-y-[-22px] md:py-[-10px] relative z-20 tracking-tight">
      Hey, my name is
    </span><br />
    ELMESSAOUDI <br /> Oussama<br />
    <TypeAnimation
      sequence={[
        'Full-Stack Web Developer',
        1000,
        'Mobile Developer',
        1000,
        'Graphic Designer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: '50px', 
        display: 'inline-block', 
        color: '#4e69e0',
      }}
      className="pt-5 bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
      repeat={Infinity}
    />
  </h2>

  <a
    href="#Contact"
    className="pl-[5px] text-white border-b border-l border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600] text-base sm:text-lg md:text-xl"
  >
    Hire me &rarr;
  </a>
</div>

      </div><div className="w-full h-full flex items-end bg-[#0d0d0e] rounded-b-[90px] relative">
  <Image
    src="/123.png"
    width={800}
    height={1300}
    className="w-full max-h-[100vh] object-contain object-bottom"
    alt="model"
  />
  {/* Social Media Links */}
  <div className="absolute top-5 left-[-20] flex flex-col items-start space-y-4 z-10">
    <a
      href="https://www.instagram.com/usamamse"
      target="_blank"
      rel="noopener noreferrer"
      className="h-[50px] w-[50px] flex justify-center items-center z-3 bg-[#0d0d0e] rounded-full border border-white"
    >
      <FaInstagram className="text-white h-[30px] w-[30px]" />
    </a>
    <a
      href="https://www.linkedin.com/in/usama-elmessaoudi/"
      target="_blank"
      rel="noopener noreferrer"
      className="h-[50px] w-[50px] flex justify-center items-center z-3 bg-[#0d0d0e] rounded-full border border-white"
    >
      <FaLinkedin className="text-white h-[30px] w-[30px]" />
    </a>
    <a
      href="https://wa.me/+212777506441"
      target="_blank"
      rel="noopener noreferrer"
      className="h-[50px] w-[50px] flex justify-center items-center z-3 bg-[#0d0d0e] rounded-full border border-white"
    >
      <FaWhatsapp className="text-white h-[30px] w-[30px]" />
    </a>
    <a
      href="https://web.facebook.com/usama.mse"
      target="_blank"
      rel="noopener noreferrer"
      className="h-[50px] w-[50px] flex justify-center items-center z-3 bg-[#0d0d0e] rounded-full border border-white"
    >
      <FaFacebook className="text-white h-[30px] w-[30px]" />
    </a>
  </div>
</div>

<div className="w-[90%] mx-auto py-[30px] flex flex-col items-center">
  <div className="pt-[11px] w-[90%] mx-auto py-[30px] flex flex-col items-center text-black">
    <a
      href="/ELMESSAOUDI Oussama CV 2025.pdf" target="_blank" rel="noopener noreferrer"
      className="bg-white max-w-[130px] w-full h-[40px] flex justify-center items-center border border-l border-[#333333] text-black font-[600] rounded-[30px] mx-auto "
    >
      Download CV
    </a>
  </div>
  <div className="pt-[1px] w-[90%] mx-auto py-[30px] flex flex-col items-center">
    <a
      href="#Contact"
      className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-l border-[#333333] text-white font-[600] rounded-[30px] mx-auto pb-[2px]"
    >
      Hire Me
    </a>
  </div>

  <p className="max-w-3xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 mt-[20px] text-center">
    "I’m driven by an unrelenting passion for technology, where hardware and 
    software converge to create something extraordinary. Whether it’s programming 
    microcontrollers, crafting seamless web and mobile applications, or designing 
    interfaces that resonate, I thrive on turning complexity into simplicity. To 
    me, every circuit, pixel, and line of code is a canvas for innovation—where 
    precision meets creativity, and ideas come to life."
  </p>
</div>

    </div>
  );
};

export default HeroSection;