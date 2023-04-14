import React from "react";
// import Header from "./components/Header";
import Circle from "./assest/circle.png"
import Roadmap from "./components/Roadmap";
import BackedBy from "./components/BackedBy";

const About = () => {
  return (
    <div className="m-auto w-[95vw] h-full max-h-[100vh] flex flex-col">
      {/* Header Section */}
      <img
        className="absolute w-[1145px] h-[1046px] top-[20px] left-[185px] sm:w-[300px] sm:h-[1050px] sm:top-[2px] sm:left-[206px] md:w-[600px] md:h-[1040px]  md:top-[2px] md:left-[102px] xl:w-[730px] xl:h-[1050px] xl:top-[10px] xl:left-[140px]"
        src={Circle}
        alt="/"
      />
      {/* About Description */}
      <div className="absolute flex flex-col z-10 top-[5%] mx-4 px-4">
        <h1 className="text-[50px] text-white uppercase font-bold m-2 md:text-4xl lg:text-[32px]">
          Unlock the power of <span className="text-indigo-700">WEB3 </span>
           Streaming
        </h1>
        <p className="text-white w-[800px] px-2 py-4 my-4 text-3xl font-medium md:text-2xl md:w-[640px] lg:w-[680px] lg:text-2xl">
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
