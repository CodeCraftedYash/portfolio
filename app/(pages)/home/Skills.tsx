"use client";
import Title from "@/app/components/ui/Title";
import { skillsData } from "@/app/data/skills";
import { motion } from "motion/react";
function Skills() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full h-fit">
            <div className="bg-[var(--secondary-background)] text-center py-4 ">
                <Title text="Skills" variant="primary"/>
            </div>
            <div className="md:flex items-center justify-center gap-5 overflow-y-hidden sm:py-0">
            <div className="w-[90%] md:w-[60%] mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-20 p-8">
               {skillsData.map((item,index)=>{
                return<motion.div className="bg-[var(--secondary-background)] w-[40%]  aspect-video rounded-2xl flex items-center justify-center sm:w-2xl md:w-44 flex-col-reverse sm:gap-1 p-4 relative hover:cursor-pointer border-2 border-[var(--background)]" key={index} 
                whileHover={{ scale: 1.05, boxShadow: '1px 1px 8px 3px rgba(0,0,0,.4)' }}
                whileTap={{ scale: 1.05, boxShadow: '1px 1px 8px 3px rgba(0,0,0,.4)' }}
    transition={{ type: 'spring', stiffness: 300 }}
                >  
                    <div className="text-center">
                    <Title text={item.title} variant="secondary"/>
                    </div>
                    {item.ImgUrl && <item.ImgUrl className='text-2xl'
                    style={{color:item.theme}}
                    />}
                </motion.div>
                
               })}
               
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills