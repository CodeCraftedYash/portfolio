import { text1,text2,text3,text4, } from "@/app/data/selfIntroData"

function SelfIntro() {
    const baseClassName = "text-lg my-2 text-white bg-[var(--secondary-background)] p-4 rounded-2xl md:text-xl  leading-8 md:w-[70%] md:mx-auto  md:hover:scale-105 md:hover:drop-shadow-sm transition-all shadow-red-500 tracking-wider"
  return (
    <div>
        <div className={`${baseClassName}`}>
            <p>{text1}</p>
        </div>
        <div className={`${baseClassName}`}>
            <p>{text2}</p>    
        </div>
        <div className={`${baseClassName}`}>
            <p>{text3}</p>
        </div>
        <div className={`${baseClassName}`}>
            <p>{text4}</p>
         </div>
    </div>
  )
}

export default SelfIntro