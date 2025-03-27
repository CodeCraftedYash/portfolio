import { quickLinksDataType } from "../types/contactAndLinksDataType";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const SocialMediaLinksData:quickLinksDataType[] = [
    {title:"LinkedIn",href:"https://www.linkedin.com/in/yash-mishra1000/",logo:<FaLinkedin className="bg-blue-700"/>},
    {title:"Github",href:"https://github.com/CodeCraftedYash",logo:<FaGithub className="bg-white text-black" />},
    {title:"Instagram",href:"https://www.instagram.com/yash_coding/",logo:<FaInstagram className="bg-white text-orange-600" />},
]