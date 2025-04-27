import Title from "@/app/components/ui/Title"
import SelfIntro from "./SelfIntro"
import Education from "./Education"
function page() {
  return (
    <div className="w-full min-h-[100dvh] pt-14">
      <div className="p-3 bg-[var(--secondary-background)] mt-2 text-center">
        <Title text="ABOUT ME" variant="primary"/>
      </div>
      <div className="w-full p-4 min-h-20 lg:bg-slate-600">
        <SelfIntro />
      </div>
      <div>
        <Education />
      </div>
      
    </div>
  )
}

export default page