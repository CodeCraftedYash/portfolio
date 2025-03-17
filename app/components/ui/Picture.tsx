import Image from "next/image"
import profileImage from '@/app/assets/ProfilePic.webp'
function Picture() {
  return (
    <div className="p-2">
        <Image src={profileImage} width={250} height={250} alt="My image" className=" border-4 rounded-full overflow-hidden border-[var(--secondary-background)] w-fit aspect-square object-cover"/>
    </div>
  )
}

export default Picture