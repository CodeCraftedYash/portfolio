"use client";
function Loading({className,text}:{className?:string,text:string}) {
    const variant = "spinner";
    switch(variant){
        case "spinner" : {
            return (
                <div className={`loader font-bold uppercase w-fit mx-auto flex gap-1 text-[.21rem]${className}`}>
                    {text}
                </div>
            );
            
        }
        default : {
            throw new Error("selected variant doesn't exist")
        }
    }
  
}

export default Loading