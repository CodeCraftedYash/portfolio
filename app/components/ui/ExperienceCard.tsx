import { ExperienceDataType } from "@/app/types/experienceType"
import Title from "./Title"
function ExperienceCard({companyName,employedDate,role,description}:ExperienceDataType) {
  return (
    <div className="min-w-[80%] max-w-[90%] min-h-fit bg-cyan-800 sm:rounded-2xl flex flex-col items-center border-[var(--background)] border-2 sm:w-[40%] mx-auto pb-4">
        <div className="my-0.5 px-2 w-full border-b-2 border-[var(--background)] text-center">
           <Title text={companyName} variant="secondary"/>
        </div>
        <div className="flex nowrap mt-2">
        <div className="flex-col items-left ml-2 mr-8 ">
            <Title text={role} variant="tertiary" />
            <Title text={employedDate} variant="micro" />
        </div>
        {description&&<div className="w-auto text-left">
            <Title text={description} variant="tertiary" />
        </div>}
        </div>
    </div>
  )
}

export default ExperienceCard