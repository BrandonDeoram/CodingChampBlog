import React from "react";
import me from "../public/me.jpg";
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
        <p className="px-4 md:px-6 pt-5 pb-24 md:pb-44 max-w-[900px] mx-auto">
          Hi there! I'm Sanjay, a Full Stack Developer who loves coding projects
          that benefit both myself and others. I recently graduated from Ontario Tech University with a major in
          Computer Science.Apart from work and school, I enjoy creating YouTube videos, including
          study vlogs and developer vlogs, to document my coding project
          journey.
          <br />
          <br />
        </p>

        <div>More content</div>
      </div>
    </div>
  );
};

export default About;
