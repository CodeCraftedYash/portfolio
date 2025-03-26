import Link from "next/link";
import Title from "./Title";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
type CheckoutType = {
  title:string;
  href:string;
}
function CheckOutUI({title,href}:CheckoutType) {

  return (
    <Link href={href} prefetch>
    <li className="w-24 sm:w-32  aspect-square flex items-center justify-center rounded-2xl border-2 border-white mx-2 my-2 gap-2 sm:hover:cursor-pointer sm:hover:scale-105 transition-all sm:hover:bg-amber-800/50 px-2 sm:justify-start text-center bg-[var(--secondary-background)]">
        <Title text={title} variant="tertiary" />
        <HiArrowTopRightOnSquare className="text-[var(--background)] sm:text-2xl"/>
    </li>
    </Link>
  )
}

export default CheckOutUI