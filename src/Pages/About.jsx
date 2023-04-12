import React from "react";
import Circle from "../assest/circle.png";

import Header from "../components/Header";

import Roadmap from "../components/Roadmap";
import BackedBy from "../components/BackedBy";

const About = () => {
  return (
    <div className="m-auto w-[95vw] h-full max-h-[100vh] flex flex-col">
      {/* Header Section */}
      <Header />
      <img
        className="absolute w-[1120px] h-[1100px] left-[168px] top-[110px] right-2"
        src={Circle}
        alt="/"
      />
      {/* About Description */}
      <div className="absolute flex flex-col z-10 top-[20%] mx-4 px-4">
        <h1 className="text-5xl text-white uppercase font-bold m-2 ">
          Unlock the power of <span className="text-indigo-700">WEB3 </span>
           Streaming
        </h1>
        <p className="text-white w-[800px] px-2 py-4 my-6 text-3xl font-medium ">
          3MING will be a web3 games streaming platform.
          <br />
          Where we allow creators to stream web3 games.
          <br />
          3MING will help Creators to establish there presence in web3 gaming
          community and build there own virtual gaming communities.
        </p>
      </div>
      {/* Backed By Section */}
      <BackedBy/>
      {/* RoadMap Section */}
      <Roadmap/>
      
    </div>
  );
};

export default About;
