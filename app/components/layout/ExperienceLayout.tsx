import { experienceData } from "@/app/data/experience"
import ExperienceCard from "../ui/ExperienceCard"
import Lines from "../ui/Lines"
import Title from "../ui/Title"
function ExperienceLayout() {
  return (
      <div className="w-full">
        <div className="w-full bg-[var(--secondary-background)] flex flex-col items-center pb-16">
          <div className="my-4">
            <Title text="Experience" variant="primary"/>
          </div>
            <div className="w-8 aspect-square bg-cyan-700 rounded-full"></div>
            <div className="flex flex-col-reverse">
            {
              experienceData.map((item,index)=>(
                <div key={index} className=" flex flex-col items-center">
                  <Lines totalLines={12} />
                  <ExperienceCard companyName={item.companyName} employedDate={item.employedDate} role={item.role} description={item.description} />  
                </div>
              ))
            }
            </div>
        </div>
    </div>
  )
}

export default ExperienceLayout