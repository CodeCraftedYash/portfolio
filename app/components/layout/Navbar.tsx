"use client";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { useState } from "react";
import NavLinks from "../ui/NavLinks";
import { handleThemeSwitch } from "@/app/utils/handleThemeSwitch";
import Logo from "../ui/Logo";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [isLight, setIsLight] = useState(true);

  return (
    <nav className="bg-[var(--secondary-background)] py-2 px-4 fixed max-w-full w-full flex flex-nowrap items-center justify-between z-50">
      <Logo />
      <div className="hidden sm:block">
      <NavLinks />
      </div>
      <div className="flex gap-4">
      <div className="block sm:hidden">
        <HamburgerMenu />
      </div>
        {isLight ? (
          <FaRegLightbulb
            className="text-white text-[1.7rem] hover:cursor-pointer"
            onClick={() => handleThemeSwitch(setIsLight, isLight)}
          />
        ) : (
          <FaLightbulb
            className="text-yellow-300 text-[1.7rem] hover:cursor-pointer"
            onClick={() => handleThemeSwitch(setIsLight, isLight)}
          />
        )}
      </div>
    </nav>
  );
}
