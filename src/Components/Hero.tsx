import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-[1400px] h-[200px] bg-blue-900 flex justify-center mt-50'>
              <div className='mr-80 mt-1 text-blue'>
          <div className='flex justify-center item-center'>
      
            <span className='ml-10 text-xl text-blue'>Read My Blogg</span>
            
            <div>
            
             {/* <img src ="/image/blog.png" className="w-[200%] h-[300%]flex justify-left " alt =""></img> */}
            {/* <Image src={"/images5.jpg"}width={200} height ={10} alt ='Heroimage' className='mt-2'></Image> */}
            
             <Image src={"/blog1.jpg"}width={150} height ={20} alt ='Heroimage' className='mt-2'></Image> 
            </div> 
            
</div>
</div>
</div>
  
  
  )
}

export default Hero
