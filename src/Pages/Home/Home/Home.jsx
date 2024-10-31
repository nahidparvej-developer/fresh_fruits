
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Catagory2 from "../catagory2/Catagory2";
import Featured from "../Featured/Featured";
import PopularMenu  from "../popularmenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
         <Helmet>
        <title>Hemayetpur Resturent | Home </title>
      </Helmet>
      <Banner></Banner>
      <Catagory></Catagory>
      <Catagory2></Catagory2>
     <PopularMenu></PopularMenu>
     <Featured></Featured>
     <Testimonials></Testimonials>

    </div>
  );
};

export default Home;