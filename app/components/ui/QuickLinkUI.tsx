import { quickLinksData } from "@/app/data/contactAndLinksData"
import Link from "next/link"

function QuickLinkUI() {
  return (
    <ul>
        {quickLinksData.map((item,index)=>(
            <li key={index} className="flex flex-nowrap items-center gap-1 text-white text-xs mb-2">
                <Link href={item.href}>
                    {item.title}
                </Link>
                {item.logo}
            </li>
        ))}
    </ul>
  )
}

export default QuickLinkUI