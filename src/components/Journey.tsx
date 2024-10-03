'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import gtamap from '../../public/images/GTAV_SATELLITE_2048x2048 1.png'
import airplane from '../../public/images/Group 15.png'
import c1 from '../../public/images/Group 16.png'
import c2 from '../../public/images/Group 17.png'
import c3 from '../../public/images/Group 18.png'
import c4 from '../../public/images/Group 19.png'
import c5 from '../../public/images/Group 20.png'
import ps1 from '../../public/images/MORP PASS.jpg'

type Props = {}

const Journey = (props: Props) => {
    const [active,setActive] = useState(0)
  return (
    <div className='bg-map rounded-md m-10 h-auto flex justify-center items-center p-20'>
  <div className='relative'>
    <Image src={gtamap} alt="" className="relative z-0" />
    <Image src={airplane} alt="" className="absolute top-20 left-24 z-10" />
    <Image src={c1} onMouseEnter={()=> setActive(1)} onMouseLeave={()=> setActive(0)}  alt="" className="absolute top-20 left-24 z-20 mt-[200px] ms-[180px]  cursor-pointer" />
    <Image src={c2} onMouseEnter={()=> setActive(2)} onMouseLeave={()=> setActive(0)} alt="" className="absolute top-20 left-24 z-20 mt-[30px] ms-[285px]  cursor-pointer" />
    <Image src={c3} onMouseEnter={()=> setActive(3)} onMouseLeave={()=> setActive(0)} alt="" className="absolute top-20 left-24 z-20 mt-[130px] ms-[460px]  cursor-pointer" />
    <Image src={c4} onMouseEnter={()=> setActive(4)} onMouseLeave={()=> setActive(0)} alt="" className="absolute top-20 left-24 z-20 mt-[310px] ms-[570px]  cursor-pointer" />
    <Image src={c5} onMouseEnter={()=> setActive(5)} onMouseLeave={()=> setActive(0)} alt="" className="absolute top-20 left-24 z-20 mt-[270px] ms-[370px]  cursor-pointer" />
    <Image src={ps1} alt="" className={` absolute rounded-md top-10 left-24 z-20 mt-[20px] ms-[220px] w-96  cursor-pointer ${active === 1 ? "block" : 'hidden'}`} />
    <Image src={ps1} alt="" className={`absolute top-0 left-24 z-20 rounded-md mt-[-80px] ms-[330px] w-96  cursor-pointer ${active === 2 ? "block" : 'hidden'}`} />
    <Image src={ps1} alt="" className={`absolute top-0 left-24 z-20 rounded-md mt-[10px] ms-[510px] w-96  cursor-pointer ${active === 3 ? "block" : 'hidden'}`} />
    <Image src={ps1} alt="" className={` absolute top-0 left-24 z-20 rounded-md mt-[180px] ms-[620px] w-96  cursor-pointer ${active === 4 ? "block" : 'hidden'}`} />
    <Image src={ps1} alt="" className={` absolute top-0 left-24 z-20 rounded-md mt-[130px] ms-[410px] w-96  cursor-pointer ${active === 5 ? "block" : 'hidden'}`} />

  </div>
</div>

  )
}

export default Journey