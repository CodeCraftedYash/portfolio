"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHomeLine } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { motion } from "motion/react";
import { type NavLinksType } from "@/app/types/navLinksType";

const listClassname:string = "text-[var(--secondary-text-color)] text-[1.2rem] space-x-12"
const navItems:NavLinksType[] = [
    { href: "/", label: "Home",icon:<RiHomeLine className={listClassname} /> },
    { href: "/about", label: "About", icon:<IoIosInformationCircle className={listClassname} /> },
    { href: "/projects", label: "Projects",icon:<GrProjects className={listClassname} />},
    { href: "/contact", label: "Contact Me",icon:<IoMdContact className={listClassname} />},
  ];
  const listitemClassname:string =
    "flex flex-nowrap items-center space-x-2 sm:hover:scale-105 text-[var(--secondary-text-color)] text-nowrap ml-2";

  export default function HamburgerLinks() {
    const currentPath:string = usePathname();
    return (
      <motion.ul 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5}}
      className="min-w-48 flex-col flex-nowrap absolute bg-[var(--secondary-background)] top-12 right-0 z-20 p-2 rounded-b-xl pt-8">
        {navItems.map((item) => (
          <li key={item.href} className={`${listitemClassname} ${item.href==currentPath ? "border-l-2 border-[var(--secondary-text-color)] pl-2 " : ""}`}>
            {item.icon}
            <Link href={item.href} className={listClassname} prefetch>
              {item.label}
            </Link>
          </li>
        ))}
      </motion.ul>
    );
  }