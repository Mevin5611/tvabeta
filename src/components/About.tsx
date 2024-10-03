"use client"
import Image from "next/image";
import burned from "../../public/images/burned paper 1.png";
import { useState } from "react";


type Props = {};

const About = (props: Props) => {
    const [active,setActive] = useState(1)
  return (
    <div className="bg-about h-[800px] m-10 rounded-md">
      <h1 className="font-engagement text-4xl text-[#40220A] ps-10 pt-10">
        Our Story
      </h1>
      <div className="burned-paper relative w-[930px]">
        <Image src={burned} alt="" className="w-full h-auto" />
        {
            active && active === 1 && (
                <p className="absolute inset-0 flex items-center justify-center text-left ps-10 pr-5 font-centaur text-xl font-medium text-[#000000] ">
          TVA (Thakkudu Vava Adholokam) was founded in 2020 by Parunth Vasu, a
          visionary leader with a passion for immersive and strategic gameplay
          in the world of GTA V Roleplay. TVA started as a small group of
          dedicated players who shared a common goal: to create a unique and
          powerful presence in the GTA V Roleplay community. What began as a
          close-knit group of friends has evolved into one of the most respected
          and formidable gangs in the scene.
        </p>
            )
        }
        {
            active && active === 2 && (
                <p className="absolute inset-0 flex items-center justify-center text-left ps-10 pr-5 font-centaur text-xl font-medium text-[#000000] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officiis atque quo laboriosam, error voluptate harum illum corrupti. Ullam tenetur minus et officiis illum saepe ipsam repellat quae tempore laborum.
        </p>
            )
        }
        
        <div className="absolute inset-0 flex items-end justify-end text-left pr-10 pb-4 font-centaur text-lg font-medium text-[#000000] ">
            <button onClick={active === 1 ? ()=>setActive(2):()=>setActive(1)} className="font-centaur">{active === 1 ? "Read More...." : "Read Less...."}</button>
        </div>
        
      </div>
    </div>
  );
};

export default About;
