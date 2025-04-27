import ProjectCardUi from "@/app/components/ui/ProjectCardUi"
import { projectsData } from "@/app/data/projectsData"
function Projects() {
  return (
    <div>
        {projectsData.map((item, index) => (
           <ProjectCardUi project={item} key={index}/>
        ))}
    </div>
  )
}

export default Projects