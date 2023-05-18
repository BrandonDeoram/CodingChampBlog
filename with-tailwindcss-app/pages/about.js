import React from "react";
import tiktok from "../public/tiktok.png";
import Image from "next/image";
const About = () => {
  return (
    <div className="container mx-auto p-10 flex-col items-center justify-center">
      <div className="text-center">
        <img
          src={
            "https://media.licdn.com/dms/image/C5603AQGboj80px37lQ/profile-displayphoto-shrink_800_800/0/1658418117535?e=1689811200&v=beta&t=IUROcK4Ifz02HyyKxaUeGLJgBXkCPMeAsEs5OqWsUFQ"
          }
          className="mx-auto w-36 h-36 rounded-full border-4 border-buttonHover"
        />
        <p className="my-4 text-2xl font-semibold sm:text-4xl">About Me</p>
        <p className="px-4 md:px-6 pt-5 pb-5 md:pb-1 max-w-[900px] mx-auto">
          Hi there! I'm Sanjay, a Full Stack Developer who loves coding projects
          that benefit both myself and others. I recently graduated from Ontario
          Tech University with a major in Computer Science. Apart from work and
          school, I enjoy creating YouTube videos, including study vlogs and
          developer vlogs, to document my coding project journey.
          <br />
          <br />
        </p>

        <div className="flex items-center justify-center content-center gap-5">
          <img
            src={
              "https://w7.pngwing.com/pngs/986/124/png-transparent-tiktok-social-media-logos-brands-icon-thumbnail.png"
            }
            onClick={() => window.open("https://www.tiktok.com/@sanjaydeoram")}
            alt="tiktok"
            className="w-10 h-10 hover:opacity-70 cursor-pointer"
          />
          <img
            src={
              "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
            }
            onClick={() =>
              window.open("https://www.linkedin.com/in/sanjaydeoram/")
            }
            alt="linkedin"
            className="w-10 h-10 hover:opacity-70 cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-center content-center gap-5 flex-wrap pt-10">
          <button
            className="text-black lg:ml-4 cursor-pointer hover:opacity-70 bg-buttonHover p-3 rounded-lg transition duration-200"
            onClick={() => window.open("mailto:sanjay.deoram@ontariotechu.net")}
          >
            sanjay.deoram@ontariotechu.net
          </button>
          <button
            className="text-black lg:ml-4 cursor-pointer hover:opacity-70 bg-buttonHover p-3 rounded-lg transition duration-200  min-w-[290px]"
            onClick={() => window.open("https://github.com/BrandonDeoram")}
          >
            See Github Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
