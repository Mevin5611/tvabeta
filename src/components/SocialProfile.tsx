'use client'
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import social from '../constants/data'
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

type Props = {};

const SocialProfile = (props: Props) => {
  
  
  return (
    <div className="h-[250px] bg-social m-10 mb-0 border border-dashed rounded-md ">
      <h1 className="font-cormorant text-2xl text-center mt-5">TVA LINKS</h1>
      <div className="ps-10 ">
      <Swiper
      
      slidesPerView={6} // Controls how many slides are visible
    
      pagination={{ clickable: true }} // Enable pagination dots
      
      className="mt-10 "
    >
      {
        social && social.map((item,index)=>(
          <SwiperSlide key={index}>
          <div className="card ">
        <div className="bg ">
        <h1 className="font-cormorant mt-3 text-center">{item.name}</h1>
          <div className="flex gap-5 items-center justify-center mt-3 text-black/75">
          <Link href={item.yt}> <FaYoutube size={20} /></Link>
          <Link href={item.in}> <RiInstagramFill size={20} /></Link>
          <Link href={item.di}><FaDiscord size={20} /> </Link>
          </div>
        </div>
        <div className="blob"></div>
      </div>
      </SwiperSlide>
        ))
      }
      
      </Swiper>
      </div>
      
    </div>
  );
};

export default SocialProfile;
