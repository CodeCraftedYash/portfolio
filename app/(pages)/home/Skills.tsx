import Title from "@/app/components/ui/Title"
import { skillsData } from "@/app/data/skills"
function Skills() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full">
            <div className="bg-[var(--secondary-background)] text-center py-4">
                <Title text="Skills" variant="primary"/>
            </div>
            <div className="w-full flex flex-wrap justify-center items-center gap-8 p-8">
               {skillsData.map((item,index)=>{
                return<div className="bg-[var(--secondary-background)] w-[40%] aspect-video rounded-2xl flex items-center justify-center sm:w-[20%] flex-col-reverse" key={index}>
                    <Title text={item.title} variant="secondary"/>
                    {item.ImgUrl && <item.ImgUrl className='text-2xl'
                    style={{color:item.theme}}
                    />}
                </div>
               })}
            </div>
        </div>
    </div>
  )
}

export default Skills