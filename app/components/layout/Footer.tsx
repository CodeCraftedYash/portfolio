import ContactUI from "../ui/ContactUI"
import QuickLinkUI from "../ui/QuickLinkUI"
import SocialMediaLinksUI from "../ui/SocialMediaLinksUI"

function Footer() {
  return (
    <footer className="w-full min-h-12 bg-[var(--secondary-background)] flex gap-2 p-2 border-t-4 border-cyan-700 flex-wrap justify-between">
          <div className="border-b-2  border-white px-2 w-[100%] sm:w-[30%] sm:border-b-0">
             <h4 className="text-white border-b-2 border-white text-center mb-3 pb-1 text-sm">Contact</h4>
            <ContactUI variant="simple"/>
          </div>
          <ul className="w-[45%] sm:w-[30%]">
             <h4 className="text-white border-b-2 border-white text-center mb-3 pb-1 text-sm">Social Media</h4>
            <SocialMediaLinksUI variant="simple"/>
          </ul>
          <ul className="w-[45%] sm:w-[30%]">
          <h4 className="text-white border-b-2 border-white text-center mb-3 pb-1 text-sm">Quick Links</h4>
            <QuickLinkUI />
          </ul>
          <h4 className="text-white mt-2  text-left text-xs w-full">© Yash Mishra 2025</h4>
        </footer>
  )
}

export default Footer