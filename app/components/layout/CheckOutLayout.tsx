import CheckOutUI from "../ui/CheckOutUI";

type CheckoutType = {
    title:string;
    href:string;
  }
  function CheckOutLayout() {
      const tempTitles:CheckoutType[] = [
          {title:"About",href:"/about"},
          {title:"Projects",href:"/projects"},
          {title:"Contact",href:"/contact"},
      ]
    return (
      <div className="w-full flex items-center justify-around my-8 flex-wrap">
      {tempTitles.map((item,index)=>(
        <CheckOutUI key={index} title={item.title} href={item.href} />
      ))}
      </div>
    )
  }
  
  export default CheckOutLayout