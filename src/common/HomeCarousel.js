import React from 'react';
import movieimg from "./movieimg.jpeg";
import s1 from "./s1.jpeg";
import s2 from "./s2.jpeg";
import s3 from "./s3.jpeg";
import s4 from "./s4.jpeg";
import { Carousel } from 'antd';

const HomeCarousel = () => (
  <Carousel autoplay>
    <div>
        <img class="carousel-image" src={s1}  />
    </div>
    <div>
    <img class="carousel-image" src={s2}  />
    </div>
    <div>
    <img class="carousel-image" src={s3} />
    </div>
    <div>
    <img class="carousel-image" src={s4} />
    </div>
  </Carousel>
);

export default HomeCarousel;