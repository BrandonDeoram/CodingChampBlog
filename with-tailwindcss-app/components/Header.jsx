import React from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { useState, useEffect } from "react";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="container sm:mx-auto sm:px-10 mb-8 px-4 ">
      <div className="w-full inline-block py-8 border-b-4 ">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl text-black">
              Coding Champ Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-right md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right  align-middle text-black ml-4 font-semibold cursor-pointer hover:bg-buttonHover p-3 rounded-lg transition duration-200">
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
