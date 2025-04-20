import Title from "@/app/components/ui/Title"
import SelfIntro from "./SelfIntro"
import Education from "./Education"
function page() {
  return (
    <div className="w-full min-h-[calc(100vh-10rem)] pt-16">
      <div className="p-3 bg-[var(--secondary-background)] mt-2 text-center">
        <Title text="ABOUT ME" variant="primary"/>
      </div>
      <div className="w-full p-4 min-h-20">
        <SelfIntro />
      </div>
      <div>
        <Education />
      </div>
      
    </div>
  )
}

export default page