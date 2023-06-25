import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/images2.jpg';
import img2 from '../../../assets/images3.png';
import img3 from '../../../assets/images4.jpg';
import img4 from '../../../assets/images5.jpg';


const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
          
        </Carousel>
    );
};

export default Banner;