"use client";

import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DarkmodeSwitch() {
  const [isDarkMode, setDarkMode] = useState();

  const toggleDarkMode = (e) => {
    e.preventDefault();
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <button className="text-xl font-bold text-white dark:text-white" onClick={toggleDarkMode}>
      {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
}
