'use client'
import React, { Suspense, useRef, useState } from 'react'
import Modelharlin from '../components/Modelharlin'
import CanvasLoader from '../components/CanvasLoader'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Leva, useControls } from 'leva'


type Props = {}

const Carspace = (props: Props) => {
  const [active,setActive] = useState(false)
  /* const x = useControls('car',{
    positionX:{value:0, min:-10, max:10},
    positionY:{value:0, min:-10, max:10},
    positionZ:{value:0, min:-10, max:10},
    rotationX:{value:0, min:-10, max:10},
    rotationY:{value:0, min:-10, max:10},
    rotationZ:{value:0, min:-10, max:10},
    scale:{value:1, min:-10, max:10},
    alight:{value:1, min:-10, max:10},
    dlight:{value:1, min:-10, max:10},
    dlightpositionX:{value:0, min:-10, max:10},
    dlightpositionY:{value:0, min:-10, max:10},
    dlightpositionZ:{value:0, min:-10, max:10},
   
  }) */
  return (
    <div className='relative bg-car m-10 rounded-md flex flex-col justify-center items-center h-[700px]'>
      
     <div className='z-10 text-white '>
      <h1 className='font-boxn text-[350px] -rotate-12 opacity-75'>H A R L I N</h1>
     {/* <h1 className='font-wrong text-3xl mt-20 ms-10'>EAGLE'S HARLIN</h1>
     <p className=' font-centaur font-bold  mt-2 ms-10'>Design & Creeation : Wronger</p>
     <p className=' font-centaur font-bold  mt-2 ms-10'>Model : Volvo Polestar 1</p>
     <p className=' font-centaur font-bold  mt-2 ms-10'>Build : Custom</p> */}
     </div>
     <div className='absolute inset-0 z-20 flex justify-center items-center '>
       {/*  <Leva/> */}
      <Canvas className='' >
        <Suspense fallback={<CanvasLoader/>}>
          
        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
        <Modelharlin
        
        scale={5.4} 
        position={[0, 0, 0]} 
        rotation={[0.2, 2.4, 0]}
        active={active}
        /* scale={[x.scale, x.scale, x.scale]} 
        position={[x.positionX, x.positionY, x.positionZ]} 
        rotation={[x.rotationX, x.rotationY, x.rotationZ]} *//>
        <ambientLight intensity={-0.4}
        /* intensity={x.alight} */ />
        <directionalLight 
        intensity={4.8} 
        position={[-0.2, 10, 10]}
        /* intensity={x.dlight} 
        position={[x.dlightpositionX, x.dlightpositionY, x.dlightpositionZ]} */
        />
        <spotLight intensity={0.5} />
        <OrbitControls enableZoom enablePan enableRotate/>
        </Suspense>
      </Canvas>
      
     </div>

    </div>
  )
}

export default Carspace