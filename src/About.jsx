import React from "react";
import Header from "./components/Header";
import Circle from "./assest/circle.png"
import Roadmap from "./components/Roadmap";
import BackedBy from "./components/BackedBy";

const About = () => {
  return (
    <div className="m-auto w-[95vw] h-full max-h-[100vh] flex flex-col">
      {/* Header Section */}
      <img
        className="absolute w-[1100px]  top-[115px] left-[170px] sm:w-[330px] sm:h-[1090px] sm:top-[97px] sm:left-[180px] md:w-[660px] md:h-[1080px]  md:top-[97px] md:left-[84px]"
        src={Circle}
        alt="/"
      />
      {/* About Description */}
      <div className="absolute flex flex-col z-10 top-[20%] mx-4 px-4">
        <h1 className="text-5xl text-white uppercase font-bold m-2 md:text-4xl">
          Unlock the power of <span className="text-indigo-700">WEB3 </span>
           Streaming
        </h1>
        <p className="text-white w-[800px] px-2 py-4 my-6 text-3xl font-medium md:text-2xl md:w-[640px]">
          3MING will be a web3 games streaming platform.
          <br />
          Where we allow creators to stream web3 games.
          <br />
          3MING will help Creators to establish there presence in web3 gaming community and build there own virtual gaming communities.
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
