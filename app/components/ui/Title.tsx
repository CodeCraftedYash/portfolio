import clsx from "clsx";
import { Spicy_Rice } from "next/font/google"

const spicyRice = Spicy_Rice({
    weight: "400",
    subsets: ["latin"],
  });
function Title({text,variant}:{text:string,variant:"primary"|"secondary"|"tertiary"|"micro"}) {
  return (
    <div className="text-[var(--background)]">
        <h4 className={clsx("text-white",
          spicyRice.className,
          variant === "primary" ? "text-[1.7rem] sm:text-[3.5rem]" : variant==="secondary"?"text-[1.2rem] sm:text-[2rem]": variant=="tertiary"?"text-[.5rem ] sm:text-[1.3rem]":"text-[.4rem] sm:text-[.8rem]"
        )}
        style={{
           wordSpacing: "0.2em",
          
         }}>{text}</h4>
    </div>
  )
}

export default Title