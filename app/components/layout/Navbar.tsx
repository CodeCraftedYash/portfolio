"use client";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { useState } from "react";
import NavLinks from "../ui/NavLinks";
import { handleThemeSwitch } from "@/app/utils/handleThemeSwitch";
import Logo from "../ui/Logo";

export default function Navbar() {
  const [isLight, setIsLight] = useState(true);

  return (
    <nav className="bg-[var(--secondary-background)] py-2 px-4 fixed w-full flex flex-nowrap items-center justify-between">
      <Logo />
      <NavLinks />
      <div className="hover:cursor-pointer">
        {isLight ? (
          <FaRegLightbulb
            className="text-white text-[1.7rem]"
            onClick={() => handleThemeSwitch(setIsLight, isLight)}
          />
        ) : (
          <FaLightbulb
            className="text-yellow-300 text-[1.7rem]"
            onClick={() => handleThemeSwitch(setIsLight, isLight)}
          />
        )}
      </div>
    </nav>
  );
}
