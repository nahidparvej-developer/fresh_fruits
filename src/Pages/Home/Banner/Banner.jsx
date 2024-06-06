
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
    return (
        <Carousel >
            <div>
                <img src="/src/assets/home/01.jpg" />
               
            </div>
            <div>
                <img src="/src/assets/home/02.jpg" />
           
            </div>
            <div>
                <img src="/src/assets/home/03.png" />
                
            </div>
            <div>
                <img src="/src/assets/home/04.jpg" />
                
            </div>
            <div>
                <img src="/src/assets/home/05.png" />
             
            </div>
            <div>
                <img src="/src/assets/home/06.png" />
              
            </div>
        </Carousel>
    );
};

export default Banner;