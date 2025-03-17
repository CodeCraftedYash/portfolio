import Picture from '@/app/components/ui/Picture'
import Title from '@/app/components/ui/Title'
import React from 'react'

function HomePage() {
  return (
    <div className='w-full min-h-screen flex flex-col flex-nowrap'>
        <div className='w-full min-h-[50vh] border-2 my-auto flex flex-nowrap gap-2'>
            <div className='w-[40%] h-auto bg-[var(--secondary-background)]'>
              <Title />
            </div>
            <div className=''>
              <Picture />
            </div>
            
        </div>
        <div></div>
    </div>
  )
}

export default HomePage
