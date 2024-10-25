import HomeSliderDetailComponent from "./home-slider-detail.components";
import banner1 from "../../assets/slider_img/slider1.png";
import banner2 from "../../assets/slider_img/slider2.png";
import banner3 from "../../assets/slider_img/slider3.png";
import { Carousel } from "flowbite-react";

const HomeSliderComponent = () => {
  return (
    <>
      <div>
        <Carousel slideInterval={1000}>
          <HomeSliderDetailComponent
            image_src={banner1}
            alt="slider1"
            link="/slider1"
          />
          <HomeSliderDetailComponent
            image_src={banner2}
            alt="slider2"
            link="/slider2"
          />
          <HomeSliderDetailComponent
            image_src={banner3}
            alt="slider3"
            link="/slider3"
          />
        </Carousel>
      </div>
    </>
  );
};

export default HomeSliderComponent;
