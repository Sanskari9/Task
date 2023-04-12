import React from 'react'
import Microsoft from "../assest/microsoft.png";
import PedalStart from "../assest/pedalstart.png";
import { ImLinkedin2, ImFacebook, ImTwitter } from "react-icons/im";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const BackedBy = () => {
  return (
    <div className="absolute top-[500px] z-10 px-4 mx-4 flex flex-col">
        <h1 className="text-4xl text-white uppercase font-bold px-2">
          Backed By
        </h1>
        <div className="relative flex items-center left-[-5%]">
          <img src={Microsoft} alt="/" className="w-[300px] h-[240px]" />
          <img src={PedalStart} alt="/" />
        </div>

        {/* social Icons */}
        <div className="flex text-white w-full max-w-[600px] items-center">
          <div className="w-16 h-16 bg-blue-600 flex items-center justify-center rounded-[50%] border-[none] mr-6">
            <ImLinkedin2 className="text-4xl" />
          </div>
          <div className="w-16 h-16 bg-blue-200 flex items-center justify-center rounded-[50%] border-[none] mr-6">
            <FaDiscord className="text-4xl" />
          </div>
          <div className="w-16 h-16 bg-blue-700 flex items-center justify-center rounded-[50%] border-[none] mr-6">
            <ImFacebook className="text-4xl" />
          </div>
          <div className="w-16 h-16 bg-gray-500 flex items-center justify-center rounded-[50%] border-[none] mr-6">
            <SiGmail className="text-4xl" />
          </div>
          <div className="w-16 h-16 bg-blue-400 flex items-center justify-center rounded-[50%] border-[none] mr-6">
            <ImTwitter className="text-4xl" />
          </div>
        </div>
      </div>
  )
}

export default BackedBy
