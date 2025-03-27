import { type contactDataType, type quickLinksDataType } from "../types/contactAndLinksDataType"
import { RiNextjsFill } from "react-icons/ri";
import { FaLocationPin } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";

export const contactData:contactDataType ={mobNo:6299700545,email:"yash1000mishra@gmail.com",addr:"Jamshedpur,Jharkhand,India,831011"}

export const contactDataLogo ={mobNoLogo:<IoCallOutline className="text-green-600  rounded-full font-extrabold text-lg"/>,emailLogo:<CiMail className="text-red-700 font-extrabold  text-2xl"/>,addrLogo:<FaLocationPin className="text-xl text-blue-600x"/>}

export const quickLinksData:quickLinksDataType[] = [
    {title:"NextJs",href:"https://nextjs.org/",logo:<RiNextjsFill className="text-sm "/>},
    {title:"TailwindCSS",href:"https://tailwindcss.com/",logo:<RiTailwindCssFill className="text-sm text-blue-500"/>},
    {title:"Motion",href:"https://motion.dev/",logo:<TbBrandFramerMotion className="text-sm text-purple-600"/>},
    {title:"ReactJs",href:"https://react.dev/",logo:<RiReactjsFill className="text-sm text-blue-500" />},
    {title:"React-icons",href:"https://react-icons.github.io/react-icons/",logo:<RiReactjsFill className="text-sm text-red-500" />},
]