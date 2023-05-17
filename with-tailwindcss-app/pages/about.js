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
        <p className="my-4 text-2xl font-semibold sm:text-4xl">
            About Me 
        </p>
        <p>Content</p>
        <div>More content</div>
      </div>
    </div>
  );
};

export default About;
