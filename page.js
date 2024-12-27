import { IoHomeSharp } from "react-icons/io5";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Image from "next/image";
import { ReactMatrixAnimation } from 'react-matrix-animation';


export default function Home() {
  return (<div className="Body">
    <div class="relative w-screen h-screen">
  
  <img 
    src="/5818397.jpg" 
    alt="Background" 
    class="w-full h-full object-cover absolute inset-0 z-0"
  />

  
  <div class="absolute inset-0 z-10 bg-black opacity-50">
    <ReactMatrixAnimation class="w-full h-full text-blue-500" />
  </div>

 
  <div class="absolute inset-0 z-20 flex flex-col justify-center items-start text-white">
    <h1 class="text-2xl pl-[250px] -translate-y-[-10px]  animate-fade-in-bottom opacity-0 transform transition-all duration-100 ease-out">
      Hi, My name is
    </h1>
    <h1 class="text-[80px] font-bold pl-[253px] -translate-y-[10px]  animate-fade-in-bottom opacity-0 transform transition-all duration-100 ease-out animation-delay-100">
      ELMESSAOUDI Oussama
    </h1>
    <h1 class="text-4xl font-semibold pl-[250px] -translate-y-[30px] animate-fade-in-bottom opacity-0 transform transition-all duration-100 ease-out delay-500" style={{color: "#469ef0" }}>Full-Stack Web Developper</h1>
    <p class="text-[14px] pl-[250px] -translate-y-[20px] font-[200] animate-fade-in-bottom opacity-0 transform transition-all duration-100 ease-out">"I’m driven by an unrelenting passion for technology, where hardware and software converge to create something extraordinary. 
      Whether it’s programming <br/>microcontrollers, crafting seamless web and mobile applications, or designing interfaces that resonate, I thrive on turning complexity into simplicity. 
      <br/>To me, every circuit, pixel, and line of code is a canvas for innovation—where precision meets creativity, and ideas come to life."</p>
  </div>

  
  <div class="sidebar">
    <ul>
      <li class="head"><a href="#"><i class="fas fa-qrcode"></i>UE</a></li>
      <li class=" h-[50px] w-[80px] flex justify-center items-center border-t border-b border-[#2a4140] font-[200]"><a href="#"><i class="fas fa-qrcode"></i></a></li>
      <li class="border-l-[6px] border-l-[#469ef0] text-[13px] h-[70px] w-[80px] flex justify-center items-center border-t border-b border-[#2a4140] font-[250] text-[#469ef0]"><a href="#"><i class="fas fa-qrcode"></i><IoHomeSharp class="h-[28px] w-[28px] flex flex-col-reverse items-center justify-center gap-[16px] -translate-x-[-5px] "/>Home</a></li>
      <li class="text-[13px] h-[70px] w-[80px] flex justify-center items-center border-t border-b border-[#2a4140] font-[200]"><a href="#"><i class="fas fa-qrcode"></i><FaPersonCircleQuestion class="h-[28px] w-[28px] flex flex-col-reverse items-center justify-center gap-[16px] -translate-x-[-5px]" />About</a></li>
      <li class="text-[13px] h-[70px] w-[80px] flex justify-center items-center border-t border-b border-[#2a4140] font-[200]"><a href="#"><i class="fas fa-qrcode"></i><PiReadCvLogoFill class="h-[28px] w-[28px] flex flex-col-reverse items-center justify-center gap-[16px] -translate-x-[-10px]" />Resume</a></li>
      <li class="text-[13px] h-[70px] w-[80px] flex justify-center items-center border-t border-b border-[#2a4140] font-[200]"><a href="#"><i class="fas fa-qrcode"></i><FaLaptopCode class="h-[28px] w-[28px] flex flex-col-reverse items-center justify-center gap-[16px] -translate-x-[-10px]" />Projects</a></li>
      <li class="text-[13px] h-[70px] w-[80px] flex justify-center items-center border-t border-b border-[#2a4140] font-[200]"><a href="#"><i class="fas fa-qrcode"></i><IoCall class="h-[28px] w-[28px] flex flex-col-reverse items-center justify-center gap-[16px] -translate-x-[-10px]" />Contact</a></li>
    </ul>
  </div>
  
</div>

  </div>
    
    
    
  );
}

