import Title from "@/app/components/ui/Title"
import Projects from "./Projects"

function page() {
  return (
    <div className="min-h-[100dvh] pt-15">
      <div className="bg-[var(--secondary-background)] text-center py-4">
      <Title text="My Projects" variant="primary"/>
      </div>
      <div>
        <Projects />
      </div>
    </div>
  )
}

export default page