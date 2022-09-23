import React from 'react'
import HMExclusive from '../components/HMExclusive' 
import home from "./../assets/jpg/indigo-home.jpg"
import Fixup from './../components/Fixup.jsx'

export default function Home() {
  return (
    <div>
      <div className='md:h-[80vh] overflow-hidden outline-1 relative flex justify-center items-center'>
        <img className='w-full   object-cover object-center'  src={home} alt="" />
        <div className='w-full  bg-gray-900/20 absolute inset-0 z-10'></div>
        <div className='absolute z-20 mt-12 h-40 w-3/4  md:w-1/2'>
          <h3 className="text-white font-semibold text-5xl font-serif text-center">Find your place</h3>
          <form action="">
            <label className='absolute bottom-0 right-0 left-0'  htmlFor="">
              <button className='bg-white px-4'  >Rent</button>
              <br/>
              <div className='bg-white flex'>
                <input className='bg-white p-1 w-full h-16' type="text" />
                <button className='text-white p-1 px-3 m-2 bg-blue-400'>Go</button>
              </div>
            </label>
            <br />
            <label className='absolute bottom-0 right-0 left-0'  htmlFor="">
              <button className='bg-black text-white inline-block px-4 ml-16 '  >Sell</button>
              <br/>
              <div className='bg-white flex'>
                <input className='bg-white p-1 w-full h-16 placeholder:pl-3' placeholder= "city, zip, address" type="text" />
                <button className='text-white p-1 px-3 m-2 bg-blue-400'>Go</button>
              </div>
            </label>
            {/* <label className='absolute bottom-0 left' htmlFor="">
              <h2 className='bg-black text-white inline-block px-4 ml-16  '  >Sell</h2>
              <br/>
              <input className='bg-white p-1 ' type="text" />
              <button className='text-white p-1 px-3 bg-blue-400 '>Go</button>
            </label> */}
          </form>
        </div>
      </div>
      {/* contents */}
      <div className="p-8 md:px-16  ">
        <HMExclusive />
        <Fixup />
      </div>
    </div>
  )
}
