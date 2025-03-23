import Lines from "../ui/Lines"
import Title from "../ui/Title"
function ExperienceLayout() {
  return (
      <div className="w-full">
        <div className="w-full bg-[var(--secondary-background)] flex flex-col items-center">
          <div className="my-4">
            <Title text="Experience" variant="primary"/>
          </div>
            <div className="w-8 aspect-square bg-cyan-700 rounded-full"></div>
            <Lines totalLines={8} />
        </div>
    </div>
  )
}

export default ExperienceLayout