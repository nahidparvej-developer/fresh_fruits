import React, { useEffect, useState } from 'react'
import ScetionTitle from '../../../Componet/ScetionTitle'
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { data } from 'autoprefixer';

const PopularMenu = () => {

  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');
        setMenu(popularItems)
      })

  }, [])
  return (
    <section className='mb-20'>
      <ScetionTitle
        heading={'Form Our Menu'}
        subheading={'Popular Item'}
      ></ScetionTitle>

      <div className='grid md:grid-cols-2 gap-5 mt-20 '>
        {
          menu.map(item => <MenuItem

            item={item}
          ></MenuItem>)
        }


      </div>
      <div className='text-center'>
        <button className='btn btn-outline border-0 border-b-4 border-b-white mt-2'>View Full Menu</button>
      </div>
    </section>
  )
}

export default PopularMenu
