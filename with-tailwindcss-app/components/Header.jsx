import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container sm:mx-auto sm:px-10 mb-8 px-4">
      <div className="w-full inline-block py-8 border-b-4 items-center justify-center">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl text-black">
              Coding Champ Blog
            </span>
          </Link>
        </div>
        <div className="md:hidden absolute top-0 right-0 m-7">
          <button
            className="float-right text-black hover:bg-buttonHover p-2 rounded-lg focus:text-gray-800 "
            onClick={toggleMenu}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                className={`${isMenuOpen ? "hidden" : "block"}`}
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={`${isMenuOpen ? "block" : "hidden"}`}
                d="M6 18L18 6M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } `}
        >
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right align-middle text-black ml-4 font-semibold cursor-pointer hover:bg-buttonHover p-3 rounded-lg transition duration-200">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
