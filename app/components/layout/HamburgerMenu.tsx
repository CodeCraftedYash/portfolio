"useClient";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import HamburgerLinks from "../ui/HamburgerLinks";
function HamburgerMenu() {
    const [isClicked,setIsClicked] = useState<boolean> (false);
  return (
    <div className="relative">
    {
        !isClicked?<GiHamburgerMenu className="text-[var(--secondary-text-color)] text-4xl" onClick={()=>setIsClicked(!isClicked)}/> : <IoClose className="text-[var(--secondary-text-color)] text-4xl" onClick={()=>setIsClicked(!isClicked)}/>

    }
    {
        isClicked?<HamburgerLinks />:""
    }
    </div>
  )
}

export default HamburgerMenu