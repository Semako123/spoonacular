import React from "react";
import "./random.css";
import { useLoaderData } from "react-router-dom";
import { FCard } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import API, {params} from "../../API";

const Random = () => {
  const data = useLoaderData();
  return (
    <div className="section__padding random">
      <h4>Looking for random inspiration on your next adventure</h4>
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
          {data.map((x, index) => (
            <SwiperSlide key={index}>
              <FCard
                title={x.title}
                likes={x.aggregateLikes}
                time={x.readyInMinutes}
                cuisines={x.cuisines}
                image={x.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};



export const homeLoader = () => {
  return API.get("/recipes/random", { params: { ...params, number: 20 } }).then(
    (res) => res.data.recipes
  );
};

export default Random;
