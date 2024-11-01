
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import ScetionTitle from '../../../Componet/ScetionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import menuImg from '../../../assets/menu/ourmenu (1).jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {

  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title>Hemayetpur Fruits Shop | Our Menu</title>
      </Helmet>
      <Cover image={menuImg} title='our menu'></Cover>
      {/* main cover  */}
      <ScetionTitle subheading="Don't miss"
        heading="todays offered"></ScetionTitle>
      {/* offered menu */}

      <MenuCategory items={offered}></MenuCategory>

      {/* menu Dessert */}

      <MenuCategory
        items={dessert}
        title="dessert"
        Img={dessertImg}
      ></MenuCategory>

      {/* pizza */}

      <MenuCategory
        items={pizza}
        title="pizza"
        Img={pizzaImg}
      ></MenuCategory>
      {/* salad */}
      <MenuCategory
        items={salad}
        title="salad"
        Img={saladImg}
      ></MenuCategory>
      {/* soup ------- */}

      <MenuCategory
        items={soup}
        title="soup"
        Img={soupImg}
      ></MenuCategory>

    </div>
  )
}

export default Menu
