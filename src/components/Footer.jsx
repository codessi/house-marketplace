import React from 'react'
import appleStore from './../assets/appstore.png'
import playStore from './../assets/playstore.png'
import { SocialIcon }from 'react-social-icons'

export default function Footer() {
  return (
    <div className='flex justify-between p-3 pt-20 md:px-16 bg-black text-white' >
      <div className='space-y-6'>
        <h3 className='text-2xl font-thin font-serif'>Company</h3>
        <ul className='text-sm space-y-2'>
          <li>About Us</li>
          <li>Team</li>
          <li>Sales Leadership</li>
          <li>Investors</li>
          <li>Join as an Agent</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Office</li>
        </ul>
      </div>
      <div className='space-y-6'>
        <h3 className='text-2xl font-serif'>Explore</h3>
        <ul className='text-sm space-y-2'>
          <li>Private Exclusives</li>
          <li>HM Coming Soon</li>
          <li>Find an Agent</li>
          <li>Mortgage Calculator</li>
          <li>HM Academy</li>
          <li>HM Cares</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='space-y-2'>
        <h3 className='text-2xl font-serif mb-6'>Mobile App</h3>
        <img className='w-36' src={appleStore} alt="" />
        <img className='w-36' src={playStore} alt="" />
      </div>
      <div className='flex flex-col gap-3'>
        <SocialIcon network='facebook' style={{ height: 25, width: 25 }} fgcolor="black" bgColor='white' />
        <SocialIcon network='instagram' style={{ height: 25, width: 25 }} fgcolor="black" bgColor='white' />
        <SocialIcon  network='twitter'  style={{ height: 25, width: 25 }} fgcolor="black"bgColor='white' />

      </div>
   


    </div>
  )
}
