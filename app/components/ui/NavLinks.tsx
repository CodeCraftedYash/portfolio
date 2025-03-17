"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHomeLine } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
const listClassname:string = "text-[var(--secondary-text-color)] text-[1.2rem] space-x-12"
const navItems = [
    { href: "/", label: "Home",icon:<RiHomeLine className={listClassname} /> },
    { href: "/about", label: "About", icon:<IoIosInformationCircle className={listClassname} /> },
    { href: "/projects", label: "Projects",icon:<GrProjects className={listClassname} />},
    { href: "/contact", label: "Contact Me",icon:<IoMdContact className={listClassname} />},
  ];
  const listitemClassname:string =
    "flex flex-nowrap items-center space-x-2 hover:scale-105 text-[var(--secondary-text-color)]";

  export default function NavLinks() {
    const currentPath:string = usePathname();
    return (
      <ul className="w-full flex flex-nowrap gap-x-8">
        {navItems.map((item) => (
          <li key={item.href} className={`${listitemClassname} ${item.href==currentPath ? "border-b-4 border-[var(--background)] text-[var(--primary-text-color)]" : ""}`}>
            {item.icon}
            <Link href={item.href} className={listClassname}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }