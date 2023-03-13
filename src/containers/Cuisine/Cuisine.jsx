import React from "react";
import "./cuisine.css";
import { italian, african, chinese, thai, french } from "../../assets/images";
import { Button, Card } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Cuisine = () => {
  const cuisines = [
    {
      name: "Italian",
      img: italian,
    },
    {
      name: "African",
      img: african,
    },
    {
      name: "Thai",
      img: thai,
    },
    {
      name: "Chinese",
      img: chinese,
    },
    {
      name: "French",
      img: french,
    },
  ];
  return (
    <div className="cuisine section__padding">
      <div className="cuisine__title">
        <h4>Browse our featured Cuisines</h4>
        <Link to="/cuisines">
          <Button variant="outline">Discover More</Button>
        </Link>
      </div>
      <div>
        <Swiper
          pagination={true}
          modules={[Autoplay]}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={80}
        >
          {cuisines.map((x, index) => (
            <SwiperSlide key={index}>
              <Card img={x.img}>{`${x.name} Cuisines`}</Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Cuisine;
