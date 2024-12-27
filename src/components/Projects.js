"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { SparklesCore } from "./ui/sparkles";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div id="Projects" className="w-full h-full py-20 border-t border-[#1d1d1d] ">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
        My latest works.
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1000}
          className="w-[370px] h-[30px]"
          particleColor="#FFFFFF"
        />
        
      </h2>
      
      
      <Carousel items={cards} />
      
    </div>
    )
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(3).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every
            thought.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    category: "UI/UX",
    title: "Ansou9 : UI/UX Design for a Delivery Service App in Taroudant.",
    src: "/ansou9.jpg",
    content: <DummyContent />,
  },
  {
    category: "Application Desktop",
    title: "Point de vente & Gestion des stocks.",
    src: "/pfe.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Web Scraping",
    title: "Extraction et Visualisation des Données de Football (understat.com).",
    src: "/WebScraping.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Application Desktop",
    title: "Générateur de CV d'un établissement.",
    src: "/EST.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Application Desktop",
    title: "Gestion de tickets.",
    src: "/ticket.jpeg",
    content: <DummyContent />,
  },
];
