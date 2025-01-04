import React from 'react'
import MenuItem from '../../Shared/MenuItem/MenuItem'
import Cover from '../../Shared/Cover/Cover'
import { Link } from 'react-router-dom'

const MenuCategory = ({ items, title, Img }) => {

  return (

    <div>
      {title && <Cover image={Img} title={title}></Cover>}
      <div className='grid md:grid-cols-2 gap-5 my-20 '>
        {
          items.map(item => <MenuItem

            item={item}
          ></MenuItem>)
        }
      </div>

      <div className='text-center mb-10'>
        <Link to={`/order/${title}`}>
          <button className='p-3 rounded-lg hover:text-orange-500 bg-slate-300 border-0 border-b-4 border-b-orange-500 hover:bg-black uppercase'>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default MenuCategory
