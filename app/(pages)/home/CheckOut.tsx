import CheckOutLayout from "@/app/components/layout/CheckOutLayout"
import Title from "@/app/components/ui/Title"

function CheckOut() {
    const title:string = "Check these out !"
  return (
    <div className="w-full min-h-20">
        <div className="bg-black text-center w-full py-4">
            <Title text={title} variant="primary"/>
        </div>
            <div className="w-full sm:w-[60%] sm:mx-auto mt-12 sm:mt-24">
                <CheckOutLayout />
            </div>
    </div>
  )
}

export default CheckOut