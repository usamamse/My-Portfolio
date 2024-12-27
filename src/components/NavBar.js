import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconBrandLine,
  IconUser,
  IconSchool,
  IconCode,
} from "@tabler/icons-react";
import Image from "next/image";

export function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Home",
    },

    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Resume",
      icon: (
        <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Resume",
    },
    {
      title: "Projects",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Projects",
    },
    {
      title: "Contact",
      icon: (
        <IconBrandLine className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Contact",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/usamamse",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];
  return (
    (<div className="fixed left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[50px] z-[101]">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>)
  );
}
