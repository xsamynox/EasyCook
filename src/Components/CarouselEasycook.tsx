import { Carousel } from 'react-responsive-carousel';
import Image1 from "../Images/comida-vegana.jpg";
import Image2 from "../Images/rapido-y-facil.jpg";
import Image3 from "../Images/recalentarpizza-int.jpg";

import '../styles/Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselEasycook = () => {
  return (
    <div className="w-2/4">
      <Carousel showStatus={false} showThumbs={false} autoPlay={false} infiniteLoop={true} showArrows={true}>
        <div className="flex content-around p-3">
          <img className="w-3/12" src={Image1} />
        </div>
        <div className="flex content-around p-3">
          <img className="w-3/12" src={Image2} />
        </div>
        <div className="flex content-around p-3">
          <img className="w-3/12" src={Image3} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselEasycook;
