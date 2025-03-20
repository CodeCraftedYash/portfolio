import clsx from "clsx";
import { Spicy_Rice } from "next/font/google"

const spicyRice = Spicy_Rice({
    weight: "400",
    subsets: ["latin"],
  });
function Title({text,variant}:{text:string,variant:"primary"|"secondary"|"tertiary"}) {
  return (
    <div className="text-[var(--background)]">
        <h4 className={clsx("text-white text-center",
          spicyRice.className,
          variant === "primary" ? "text-[2.1rem] sm:text-[3.5rem]" : variant==="secondary"?"text-[1.6rem] sm:text-[2rem]":"text-[.7rem ] sm:text-[1.3rem]"
        )}
        style={{
           wordSpacing: "0.2em",
          
         }}>{text}</h4>
    </div>
  )
}

export default Title