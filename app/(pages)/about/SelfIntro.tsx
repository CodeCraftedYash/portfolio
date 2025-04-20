import Title from "@/app/components/ui/Title"
import { text1,text2,text3,text4, } from "@/app/data/selfIntroData"

function SelfIntro() {
    const baseClassName = "text-lg my-2 text-white bg-[var(--secondary-background)] p-4 rounded-2xl  leading-8 md:w-[70%] md:mx-auto underline underline-offset-8 md:hover:scale-105 md:hover:drop-shadow-sm transition-all shadow-red-500 tracking-wider"
  return (
    <div>
        <div className={`${baseClassName}`}>
            <Title text={text1} variant="tertiary"/>
        </div>
        <div className={`${baseClassName}`}>
            <Title text={text2} variant="tertiary"/>
        </div>
        <div className={`${baseClassName}`}>
            <Title text={text3} variant="tertiary"/>
        </div>
        <div className={`${baseClassName}`}>
            <Title text={text4} variant="tertiary"/>
        </div>
    </div>
  )
}

export default SelfIntro