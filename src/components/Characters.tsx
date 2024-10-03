"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import v1 from '../../public/images/Vector 4c.png'
import v1o from '../../public/images/Vector 4.png'
import v2 from '../../public/images/Vector 5c.png'
import v2o from '../../public/images/Vector 5.png'
import v3 from '../../public/images/Vector 6c.png'
import v3o from '../../public/images/Vector 6.png'
import v4 from '../../public/images/Vector 7c.png'
import v4o from '../../public/images/Vector 7.png'
import v5 from '../../public/images/Vector 9c.png'
import v5o from '../../public/images/Vector 9.png'
import v6 from '../../public/images/Vector 10c.png'
import v6o from '../../public/images/Vector 10.png'
import v7 from '../../public/images/Vector 11c.png'
import v7o from '../../public/images/Vector 11.png'
import tvalogo from '../../public/logo/tva-log.png'

type Props = {}

const Characters = (props: Props) => {
 const [img1,setImg1]= useState(v1)
 const [img2,setImg2]= useState(v2)
 const [img3,setImg3]= useState(v3)
 const [img4,setImg4]= useState(v4)
 const [img5,setImg5]= useState(v5)
 const [img6,setImg6]= useState(v6)
 const [img7,setImg7]= useState(v7)
  return (
    <div className='h-[600px] flex flex-col justify-center items-center'>
      <Image src={tvalogo} alt="" className="w-56 mt-[-70px]" />
      <div className='flex mt-10'>
        <Image onMouseEnter={()=>setImg1(v1o)} onMouseLeave={()=> setImg1(v1)} src={img1} alt="" className="w-56" />
        <Image onMouseEnter={()=>setImg2(v2o)} onMouseLeave={()=> setImg2(v2)} src={img2} alt="" className="w-56 ms-[-42px]" />
        <Image onMouseEnter={()=>setImg3(v3o)} onMouseLeave={()=> setImg3(v3)} src={img3} alt="" className="w-56 ms-[-42px]" />
        <Image onMouseEnter={()=>setImg4(v4o)} onMouseLeave={()=> setImg4(v4)} src={img4} alt="" className="w-56 ms-[-42px]" />
        <Image onMouseEnter={()=>setImg5(v5o)} onMouseLeave={()=> setImg5(v5)} src={img5} alt="" className="w-56 ms-[-42px]" />
        <Image onMouseEnter={()=>setImg6(v6o)} onMouseLeave={()=> setImg6(v6)} src={img6} alt="" className="w-56 ms-[-42px]" />
        <Image onMouseEnter={()=>setImg7(v7o)} onMouseLeave={()=> setImg7(v7)} src={img7} alt="" className="w-56 ms-[-67px]" />
      </div>
      <div className='flex gap-5 mt-3'>
        <p className='font-cormorant text-xl '>{img1 === v1 ? 'PARUNTH VASU': 'DILIN DINESH'}</p>
        <p className='font-cormorant text-xl'>{img2 === v2 ? 'CHANDRA BOSS' : 'SHYAM SING'}</p>
        <p className='font-cormorant text-xl'>{img3 === v3 ? 'SARAKK DANNY': 'ATHUL SHERIF'}</p>
        <p className='font-cormorant text-xl'>{img4 === v4 ? 'BABU NAMBUDIDI' : 'AJMAL KHAN'}</p>
        <p className='font-cormorant text-xl'>{img5 === v5 ? 'BELLARI RAYAN' : 'SHIBIN SHAN'}</p>
        <p className='font-cormorant text-xl'>{img6 === v6 ? 'TVA JOCKER' : 'SHARATH'}</p>
        <p className='font-cormorant text-xl'>{img7 === v7 ? 'MARSHIAL MENNY' : 'ATHUL'}</p>
        

      </div>
    </div>
  )
}

export default Characters