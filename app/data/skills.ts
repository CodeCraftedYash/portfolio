import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { type skillType } from "../types/skillsType"
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { SiReactquery } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
export const skillsData:skillType[] = [
    {title:"HTML",ImgUrl:FaHtml5,theme:"orange"},
    {title:"CSS",ImgUrl: FaCss3Alt,theme:"blue"},
    {title:"JavaScript",ImgUrl:IoLogoJavascript,theme:"yellow"},
    {title:"Typescript",ImgUrl:SiTypescript,theme:"blue"},
    {title:"Framer Motion",ImgUrl:FiFramer,theme:"purple"},
    {title:"Tanstack query",ImgUrl:SiReactquery,theme:"pink"},
    {title:"Redux",ImgUrl:SiRedux,theme:"orange"},
    {title:"Next Js",ImgUrl:RiNextjsFill,theme:"blue"},
]