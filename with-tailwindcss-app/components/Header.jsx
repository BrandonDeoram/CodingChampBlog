import React from "react";
import Link from "next/link";
const categories = [
  { name: "react", slug: "react" },
  { name: "nextjs", slug: "nextjs" },
];
const Header = () => {
  return (
    <div className="container mx-auto px-20 mb-8">
      <div className="w-full inline-block  py-8">
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
              <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
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
