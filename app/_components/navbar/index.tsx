"use client";

import React from "react";
import { scrollTo } from "@/app/_utils/scrollTo";

export const Navbar = () => {
  return (
    <header>
      <nav className="color-primary">
        <button
          className="text-secondary"
          onClick={scrollTo.bind(null, {
            id: "home",
            offsetTop: 100,
          })}
        >
          Home
        </button>
        <button
          className="text-secondary"
          onClick={scrollTo.bind(null, {
            id: "about-me",
            offsetTop: 100,
          })}
        >
          About Me
        </button>
        <button
          className="text-secondary"
          onClick={scrollTo.bind(null, {
            id: "portfolio",
            offsetTop: 100,
          })}
        >
          Portfolio
        </button>
        <button
          className="text-secondary"
          onClick={scrollTo.bind(null, {
            id: "blog",
            offsetTop: 100,
          })}
        >
          Blog
        </button>
        <button
          className="text-secondary"
          onClick={scrollTo.bind(null, {
            id: "contact",
            offsetTop: 100,
          })}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};
