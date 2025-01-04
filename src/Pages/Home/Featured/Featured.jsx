import React from 'react'
import ScetionTitle from '../../../Componet/ScetionTitle'
import feauturedImg from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
  return (
    <div className='featured-item bg-fixed text-white pt-12 my-20'>
      <ScetionTitle 
      subheading='check it out'
      heading='Featured Item'></ScetionTitle>

      <div className='md:flex gap-6 justify-center items-center pb-20 pt-12 px-24 bg-opacity-60 bg-slate-500'>
        <div>
            <img className='w-[600px]' src={feauturedImg} alt="" />
        </div>
        <div className='md:ml-10'>
            <p>Aug 20 2020</p>
            <p className='uppercase mb-2'>WHERE CAN I GET SOME?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus magnam magni maxime, sequi soluta velit praesentium.</p>
            <button className='p-3 rounded-lg hover:text-orange-500 bg-slate-300 border-0 border-b-4 border-b-orange-500 hover:bg-black uppercase mt-5'>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
