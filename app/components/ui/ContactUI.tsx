import { contactData, contactDataLogo } from "@/app/data/contactAndLinksData"
function ContactUI({variant}:{variant:"simple"|"fancy"}) {
    const listClassName = "text-white p-0.5 text-xs sm:text-md word-break flex flex-nowrap gap-1 items-center mb-2"
  return (
    <div className="break-all">
        {
            variant==="simple" && <ul className="">
                <li className={listClassName}><h5>{contactData.email}</h5>{contactDataLogo.emailLogo}</li>

                <li className={listClassName}><h5>{contactData.mobNo}</h5>{contactDataLogo.mobNoLogo}</li>

                <li className={listClassName}><h5>{contactData.addr}</h5>{contactDataLogo.addrLogo}</li>
            </ul>
        }
    </div>
  )
}

export default ContactUI