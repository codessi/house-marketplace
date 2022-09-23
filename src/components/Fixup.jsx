import React from 'react'
import beforeAfter from "./../assets/jpg/before-after.jpg"

export default function Fixup() {
  return (
    <div className='flex flex-wrap md:flex-nowrap justfiy-center gap-7 pt-12'>
      <div className='relative md:w-3/5 text-white text-2xl'>
        <img src={beforeAfter} alt="" />
        <p className='absolute bottom-0 left-2'>Before</p>
        <p className='absolute bottom-0 left-[52%]'>After</p>
      </div>
      <div className='md:w-2/5 flex justify-center items-center p-7 text-white bg-black'>
        <div className='space-y-4'>
          <h3 className='text-2xl font-bold'>Fix Up Service</h3>
          <p>We helps you sell your home faster and for more money by covering the cost of home improvement services — no upfront fees or interest charged.</p>
          <button className='bg-blue-500 p-2 px-3'>Learn More</button>
        </div>
      </div>

    </div>
  )
}
