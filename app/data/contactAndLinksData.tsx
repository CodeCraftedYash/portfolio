import { type contactDataType, type quickLinksDataType } from "../types/contactAndLinksDataType"
import { RiNextjsFill } from "react-icons/ri";
import { FaPlaneArrival } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

export const contactData:contactDataType ={mobNo:6299700545,email:"yash1000mishra@gmail.com",addr:"Jamshedpur,Jharkhand,India,831011"}
export const contactDataLogo ={mobNoLogo:<IoCallOutline />,emailLogo:<CiMail />,addrLogo:<FaPlaneArrival />}

export const quickLinksData:quickLinksDataType[] = [
    {title:"NextJs",href:"",logo:<RiNextjsFill />},
    {title:"TailwindCSS",href:"",logo:<RiNextjsFill />},
    {title:"Motion",href:"",logo:<RiNextjsFill />},
    {title:"ReactJs",href:"",logo:<RiNextjsFill />},
]