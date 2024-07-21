"use client";

import React, { useState } from "react";
import Image from "next/image";

import Logo from "../public/assets/desktop/logo.svg";
import Sun from "../public/assets/desktop/icon-sun.svg";
import Moon from "../public/assets/desktop/icon-moon.svg";

const Navigation = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleIsToggled = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className="relative flex items-center justify-around pattern-desktop pt-11">
      <Image src={Logo} alt="devjobs" />
      <div className="flex items-center gap-4">
        <Image src={Sun} alt="sun" />
        <label className="flex items-center">
          <div className="relative">
            <input
              type="checkbox"
              checked={isToggled}
              onChange={handleIsToggled}
              className="sr-only"
            />
            <div className="block h-6 w-12 rounded-full bg-white"></div>
            <span
              className={`bg-royal-blue absolute left-1 top-1 h-4 w-4 transform rounded-full transition-transform ${
                isToggled ? "translate-x-6" : ""
              }`}
            ></span>
          </div>
        </label>
        <Image src={Moon} alt="moon" />
      </div>
    </nav>
  );
};

export default Navigation;
