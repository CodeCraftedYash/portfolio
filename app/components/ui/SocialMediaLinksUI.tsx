import { SocialMediaLinksData } from "@/app/data/SocialMediadata"
import Link from "next/link"

function SocialMediaLinks({variant}:{variant:"simple"|"fancy"}) {
  return (
    <div>
        {variant==="simple"&& SocialMediaLinksData.map((item,index)=>(
            <Link key={index} href={item.href} className="text-white text-xs sm:text-md flex flex-nowrap gap-1 items-center mb-2">
                    {item.title}
                    {item.logo}
            </Link>
        ))}
    </div>
  )
}

export default SocialMediaLinks