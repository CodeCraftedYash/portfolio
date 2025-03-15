"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHomeLine } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
const listClassname:string = "text-[var(--secondary-text-color)] text-[1.3rem] space-x-12"
const navItems = [
    { href: "/", label: "Home",icon:<RiHomeLine className={listClassname} /> },
    { href: "/about", label: "About", icon:<IoIosInformationCircle className={listClassname} /> },
    { href: "/projects", label: "Projects",icon:<GrProjects className={listClassname} />},
  ];
  
  export default function NavLinks() {
    const currentPath:string = usePathname();
    return (
      <ul className="flex space-x-16">
        {navItems.map((item) => (
          <li key={item.href} className="flex flex-nowrap items-center space-x-2 hover:scale-105">
            {item.icon}
            <Link href={item.href} className={listClassname}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }