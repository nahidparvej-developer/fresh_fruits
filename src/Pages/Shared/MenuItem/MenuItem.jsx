import React from 'react'

const MenuItem = ({item}) => {
    const{name , image, price ,recipe} = item;
  return (
    <div className='flex gap-5 mb-5'>
       <img className='w-24 rounded-tr-[40px] rounded-bl-[40px]' src={image} alt="" />

       <div>
        <h3 className='uppercase'>{name}-------</h3>
        <p className='mt-3'>{recipe}</p>
       </div>
       <p className='text-yellow-500'>${price}</p>
    </div>
  )
}

export default MenuItem
