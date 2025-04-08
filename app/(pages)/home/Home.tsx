import Picture from '@/app/components/ui/Picture'
import Title from '@/app/components/ui/Title'
import Skills from './Skills';
import Experience from './Experience';
import CheckOut from './CheckOut';

function HomePage() {
  const titleText:string ="Hi I am Yash Mishra";
  const titleText2:string = "a Web Developer";
  return (
    <div className='w-full min-h-screen flex flex-col flex-nowrap gap-20 sm:gap-16'>{/**page container */}
        <div className='w-full min-h-[20vh] flex flex-col-reverse flex-nowrap items-center mt-32 sm:flex-row sm:min-h-[60vh]'> {/**title and img container */}
            <div className='w-[100%] h-40   p-2 sm:w-[60%] bg-[var(--secondary-background)] flex flex-col items-center justify-center sm:min-h-[60vh] sm:rounded-r-2xl'>
              <div className='flex-col justify-center items-center '>
              <Title text ={titleText} variant = "primary"/>
              <Title text ={titleText2} variant = "secondary"/>
              </div>
            </div>
            <div className='w-[60%] sm:h-full sm:flex justify-center items-center'>
              <Picture />
            </div>
            
        </div>
        <div className='w-full min-h-fit flex flex-col flex-nowrap items-center'>
           <Skills />
        </div>
        <div className='w-full min-h-fit flex flex-col flex-nowrap items-center'>
           <Experience />
        </div>
        <CheckOut />
    </div>
  )
}

export default HomePage
