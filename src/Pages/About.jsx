import React from 'react'
import Circle from "../assest/circle.png"
import Microsoft from "../assest/microsoft.png"
import PedalStart from "../assest/pedalstart.png"
import Header from '../components/Header'

const About = () => {
  return (
    <div className="max-w-[80%] m-auto w-full flex flex-col bg-black">
        <Header/>
        <img className='relative w-[1100px] h-[1100px] left-[155px] top-5' src={Circle} alt="/"/>
        <div className='absolute flex flex-col z-10 top-[20%] mx-4 px-4' >
            <h1 className='text-5xl text-white uppercase font-bold m-2 '>Unlock the power of <span className="text-indigo-700">WEB3</span> Streaming </h1>
            <p className="text-white w-[800px] px-2 py-4 my-6 text-3xl font-medium ">3MING will be a web3 games streaming platform.<br/>
                Where we allow creators to stream web3 games.<br/>
                3MING will help Creators to establish there presence in web3 gaming community and build there own virtual gaming communities.
            </p>
        </div>
        <div className="absolute top-[500px] z-10 px-4 mx-4 flex flex-col">
            <h1 className='text-4xl text-white uppercase font-bold px-2' >Backed By</h1>
               <div className=" relative flex items-center left-[-5%]">
               <img src={Microsoft} alt="/" className="w-[300px] h-[240px]"/>
                <img src={PedalStart} alt="/" />

               </div>
              
        </div>
    </div>
  )
}

export default About
