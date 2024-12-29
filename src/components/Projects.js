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
        
      </h2><br/>
      <h4
        className="max-w-7xl pl-4 mx-auto text-[15px] md:text-2xl font-thin text-neutral-800 dark:text-neutral-200">
       (Click to see more details about the project).
        
      </h4>
      
      
      <Carousel items={cards} />
      
    </div>
    )
  );
}

const Ansou9 = () => {
  return (<>
    {[...new Array(1).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Project Overview : 
            </span>{" "}
            <br/>"Ansou9 is a mobile application designed to revolutionize delivery services in the Taroudant region. It facilitates seamless communication between delivery personnel, customers, and local markets, making the process of ordering and delivering goods more efficient and reliable. Created using Figma, this app focuses on an intuitive user experience, ensuring smooth interactions for all users involved."

          </p>
          <Image
            src="/Ansou92.jpg"
            alt="Ansou9"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <Image
            src="/Ansou93.jpg"
            alt="Ansou9"
            height="500"
            width="500"
            className="pb-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Key Features:
            </span>{" "}
            <br/>- Real-Time Updates : Live tracking of deliveries between customers, delivery boys, and markets.
Multi-Category Support: Includes deliveries for groceries, pharmacies, restaurants, and more.
Business Integration: Direct communication channel between markets and customers for a better buying experience.
          </p>
          <Image
            src="/Ansou94.jpg"
            alt="Ansou9"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <Image
            src="/Ansou95.jpg"
            alt="Ansou9"
            height="500"
            width="500"
            className="pb-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            </span>{" "}
            <br/>- Project Goals : "Our aim with Ansou9 is to simplify delivery operations and support the local economy in Taroudant by providing an efficient platform for both businesses and consumers. The user-friendly design ensures a smooth journey from order placement to delivery completion.
          </p>
          <Image
            src="/Ansou97.jpg"
            alt="Ansou9"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <Image
            src="/Ansou916.jpg"
            alt="Ansou9"
            height="500"
            width="500"
            className="pb-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
        </div>
        
        )
      );
    })}
  </>);
};

const POS = () => {
  return (<>
    {[...new Array(1).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Project Overview : 
            </span>{" "}
            <br/>"As part of my final study project, I developed a desktop application for point-of-sale (POS) and inventory management using JavaFX. This application is specifically designed for small businesses seeking a streamlined solution to track sales, monitor inventory levels in real time, and generate sales reports."

          </p>
          <Image
            src="/POS.jpg"
            alt="POS"
            height="700"
            width="700"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            ProKey features : 
            </span>{" "}
            <br/>- <strong>Real-time Inventory Monitoring: </strong>Ensures accurate stock levels and reduces the risk of overstocking or running out of products.
            <Image
            src="/1.jpg"
            alt="POS"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <Image
            src="/2.jpg"
            alt="POS"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </p>
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">

            </span>{" "}
            <br/>- <strong>Replenishment Alerts: </strong>Notifies users when stock levels fall below a predefined threshold, ensuring timely restocking.
            <Image
            src="/1.jpg"
            alt="POS"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <Image
            src="/2.jpg"
            alt="POS"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </p>
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">

            </span>{" "}
            <br/>- <strong>Secure User Management System: </strong> Provides role-based access control to maintain operational security and safeguard sensitive data.
            <Image
            src="/41751969074.jpg"
            alt="POS"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <Image
            src="/5335910211.jpg"
            alt="POS"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <Image
            src="/image (2).jpg"
            alt="POS"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </p>
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">

            </span>{" "}
            <br/>- <strong>Sales Reporting:</strong> Offers detailed insights into sales trends, allowing businesses to make informed decisions.
            <Image
            src="/image (3).jpg"
            alt="POS"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <Image
            src="/image (4).jpg"
            alt="POS"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </p>
        </div>
        
        )
      );
    })}
  </>);
};

const WebScrap = () => {
  return (<>
    {[...new Array(1).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Project Overview : 
            </span>{" "}
            <br/>This project involved developing a Python-based tool for extracting, analyzing, and visualizing data on promoted teams in the Premier League over the past four seasons. By leveraging libraries such as BeautifulSoup and Requests, I scraped statistical data from understat.com, focusing on defensive metrics like expected goals against (xGA) and goals against (GA) for newly promoted teams. The dataset was then cleaned, processed, and visualized using Pandas, Matplotlib, and Seaborn, providing actionable insights into the defensive performance of these teams.

          </p>
          <Image
            src="/STAT.jpg"
            alt="understat"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Project Objectives : 
            </span>{" "}
            <br/>The main goal was to compare the expected defensive performance (xGA) with the actual defensive outcomes (GA) of promoted teams. This comparison highlighted how well these teams adapted to the challenges of the Premier League and identified defensive trends over the four seasons analyzed.
            <Image
            src="/1722911411280.jpeg"
            alt="understat"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </p>
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Key Features : 
            </span>{" "}
            <br/>- <strong>Automated Data Extraction: </strong>Developed a script to scrape real-time football statistics from understat.com.

            <br/>- <strong>Data Cleaning and Preprocessing: </strong>Ensured data accuracy and consistency by handling missing values and formatting inconsistencies.

            <br/>- <strong>Insightful Visualizations: </strong>Created detailed charts and graphs to uncover patterns and trends in defensive metrics.

            <br/>- <strong>Performance Analysis: </strong>Analyzed defensive metrics of promoted teams to evaluate their performance across multiple seasons and competitions.

          </p>
        </div>
        
        )
      );
    })}
  </>);
};

const CV = () => {
  return (<>
    {[...new Array(1).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Project Overview : 
            </span>{" "}
            <br/>This project focused on developing a desktop application for generating professional CVs tailored to educational institutions. The application was built using JavaFX and incorporated robust database management to store, retrieve, and organize CV-related data effectively. Designed as part of an academic project, it addressed the need for a streamlined and efficient way to generate standardized CVs for students, faculty, or staff.
          </p>
          <Image
            src="/CV.jpg"
            alt="CV"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Project Objectives : 
            </span>{" "}
            <br/>The primary goal was to simplify the process of creating CVs by automating data entry and formatting, ensuring consistency and professionalism across all CVs generated within an institution.
            <Image
            src="/FONTS-COLORS.png"
            alt="CV"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <Image
            src="/BACKGROUNDds.png"
            alt="CV"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </p>
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Key Features : 
            </span>{" "}
            <br/>- <strong>User-Friendly Interface: </strong>Designed an intuitive interface using JavaFX for ease of use by individuals with varying technical expertise.

            <br/>- <strong>Database Integration: </strong>Implemented a relational database to store and manage CV data, allowing for quick retrieval and updates.

            <br/>- <strong>Automated CV Generation: </strong>Provided customizable templates for generating CVs with standardized layouts, including sections for personal information, education, skills, and experiences.


            <br/>- <strong>Data Security: </strong>Ensured secure handling of sensitive personal information through user authentication and controlled access.
            <Image
            src="/PAGE CONNEXION.png"
            alt="CV"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <Image
            src="/REGISTPAGE.png"
            alt="CV"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </p>
        </div>
        
        )
      );
    })}
  </>);
};

const FPL = () => {
  return (<>
    {[...new Array(1).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Project Overview : 
            </span>{" "}
            <br/>I developed an automated Google Spreadsheet using JavaScript for backend scripting, leveraging web scraping and API integration to create a comprehensive Fantasy Premier League (FPL) manager league system. This project streamlines data handling for league organizers by automating real-time updates and offering insightful features such as league standings, top-performing players, and Team of the Week (TOTW) analysis.
          </p>
          <Image
            src="/FPL.jpg"
            alt="FPL"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Key Features : 
            </span>{" "}
            <br/>- <strong>Web Scraping for Dynamic Data Updates: </strong>Extracts FPL data, including player points, fixtures, and results, directly from web sources.

            <br/>- <strong>Automated League Standings: </strong>Updates rankings in real time based on weekly points and overall scores for managers.


            <br/>- <strong>Custom Scoring Rules & Bonuses: </strong>Enables admins to add custom rules, head-to-head results, and other league-specific scoring bonuses.


            <br/>- <strong>Interactive Visualizations: </strong>Provides charts and tables to track performance trends, captaincy impact, and transfer success.
            <Image
            src="/FPL2.jpg"
            alt="FPL"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
            <Image
            src="/FPL3.jpg"
            alt="FPL"
            height="500"
            width="500"
            className="pb-4 pt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </p>
        </div>
        
        )
      );
    })}
  </>);
};


const data = [
  {
    category: "UI/UX",
    title: "Ansou9 : UI/UX Design for a Delivery Service App in Taroudant.",
    src: "/ansou9.jpg",
    content: <Ansou9 />,
  },
  {
    category: "Desktop Application",
    title: "Point of Sale & Inventory Management System.",
    src: "/POS.jpg",
    content: <POS />,
  },
  {
    category: "Web Scraping",
    title: "Football Data Extraction and Visualization (understat.com) with Python.",
    src: "/STAT.jpg",
    content: <WebScrap />,
  },
  {
    category: "Desktop Application",
    title: "CV Generator for Educational Institution.",
    src: "/CV.jpg",
    content: <CV />,
  },
  {
    category: "Automated Spreadsheet",
    title: "Fantasy Premier League Managers League System.",
    src: "/FPL.jpg",
    content: <FPL />,
  },{
    category: "Desktop Application",
    title: "Tickets Management.",
    src: "/ticket.jpeg",
    content: <POS />,
  },
];
