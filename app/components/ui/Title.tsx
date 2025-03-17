import { Spicy_Rice } from "next/font/google"

const spicyRice = Spicy_Rice({
    weight: "400",
    variable: "--font-spicy-rice",
    subsets: ["latin"],
  });
function Title() {
  const titleText:string = "Hi I am Yash Mishra" 
  return (
    <div className="text-[val(--background)]">
        <h4 className={`text-white text-5xl ${spicyRice.className} `}style={{ wordSpacing: "0.2em" }}>{titleText}</h4>
    </div>
  )
}

export default Title