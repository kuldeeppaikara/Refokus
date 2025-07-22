import React from 'react'
// import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from './Button';

function Card({width,dets,set1,set2}) {
  return (
    <div
      className={`${width} ${
        set2 ? "bg-[#46289A]" : "bg-[#7542FF]"
      } p-5 rounded-xl min-h-[60vh] flex flex-col justify-between hover:bg-[#FFFFFF] hover:text-black transition-all duration-500 ease-in-out`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3 className="font-bold text-sm uppercase">{dets.title1}</h3>
          <FaArrowRightLong />
          {/* <IoIosArrowRoundForward /> */}
        </div>
        <div className={`${set2 ? "w-[55%]" : "w-[40%]"}`}>
          <h1 className="text-4xl font-medium mt-8">{dets.title2}</h1>
        </div>
      </div>
      <div className="down w-full">
        {set1 ? (
          <div className="flex items-end justify-between">
            <h1 className="text-7xl tracking-tight font-semibold leading-none">
              Start a Project
            </h1>
            <button className="flex items-center gap-5 cursor-pointer border-b-2 text-lg ">
              Contact us <FaArrowRightLong />
            </button>
            {/* <Button text="Contact Us" /> */}
          </div>
        ) : null}
        {set2 ? (
          <p className="text-lg w-3/5 ">{dets.desc}</p>
        ) : null}
      </div>
    </div>
  );
}

export default Card