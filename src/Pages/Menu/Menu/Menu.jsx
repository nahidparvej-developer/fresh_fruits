
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/popularmenu/PopularMenu';
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Hemayetpur Resturent | Menu</title>
      </Helmet>
     <Cover image={menuImg} title='our menu'></Cover>
     <PopularMenu></PopularMenu>
     <Cover image={menuImg} title='our menu'></Cover>
     <PopularMenu></PopularMenu>
     <Cover image={menuImg} title='our menu'></Cover>
     <PopularMenu></PopularMenu>
    
    </div>
  )
}

export default Menu
