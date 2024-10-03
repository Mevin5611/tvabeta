import Image from "next/image"
import tvalogo from '../../public/logo/tva-log.png'
import Menu from '../../public/icons/Group 2.png'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="w-full h-[80px] bg-white flex justify-between drop-shadow-sm">
       <div className="flex items-center ">
        <Image className="w-32" src={tvalogo} alt=""/>
       </div>
       <div className="flex items-center ">
        <Image className="mr-5" src={Menu} alt=""/>
       </div>
    </div>
  )
}

export default Navbar