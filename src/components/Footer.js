"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1200px] w-[98%] mx-auto py-[20px] flex flex-wrap gap-[10px] justify-between items-center border-t border-[#1d1d1d]">
      {/* Logo */}
      <Image
        src="/Logo.png"
        width={120}
        height={80}
        className="max-h-[80px] h-full object-contain object-bottom"
        alt="logo"
      />
      {/* Copyright text */}
      <span className="text-[0.9rem] font-[500] text-[#9e9e9e]">
        © 2025 copyright all rights reserved
      </span>
    </div>
  );
};

export default Footer;
