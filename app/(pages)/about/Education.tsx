import Title from '@/app/components/ui/Title'
import { EducationData } from '@/app/data/EducationData'
function Education() {
  return (
    <div className='w-full min-h-20'>
        <div className='text-center bg-[var(--secondary-background)] p-2'>
        <Title text='Education' variant='primary'/>
        </div>
        {EducationData.map((item,index)=>(
            <div className='w-[80%] bg-[var(--secondary-background)] rounded-2xl mx-auto my-4 p-2 border-2 border-dotted border-white' key={index}>
                <div className='trancking-wider text-center p-1 border-b-2 border-b-[var(--background)]'>
                    <Title text={item.institutionName} variant='secondary'/>
                </div>
                <div className='trancking-widest ml-2 mt-2'>
                    <Title text={item.courseName} variant='tertiary'/>
                </div>
                <div className='tracking-wider opacity-85 ml-2'>
                    <Title text={item.date} variant='tertiary'/>
                </div>
                <div className='tracking-wider ml-2 opacity-85'>
                    <Title text={item.location} variant='tertiary'/>
                </div>
            
        </div>
        ))}
        
    </div>
  )
}

export default Education