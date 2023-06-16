import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home(): JSX.Element {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button onClick={() => setCurrentSlide(currentSlide - 1)}>
        Previous
      </button>
    ),
    nextArrow: (
      <button onClick={() => setCurrentSlide(currentSlide + 1)}>Next</button>
    ),
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "20%",
  };

  const images = [
    "https://images.mynovel.co/Banner/3.%20Banner_ท่านแม่ผู้นี้คืออดีตสุดยอดนักฆ่า-01.jpg",
    "https://images.mynovel.co/Banner/1.%207.%2013.%2019.%2025.%20Banner_150666-01.jpg",
    "https://images.mynovel.co/Banner/2.%20Banner_อาร์ติแฟกส์%20ออนไลน์%20(MMORPG%20-%20Artifact%20Online)-01.jpg",
    "https://images.mynovel.co/Banner/5.%20Banner_ชายาป่วนกวนวังหลัง-01.jpg",
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            height="400"
            width="auto"
            style={{ width: '750px', maxHeight: '300px', borderRadius: '30px' }}
            className="focus:outline-none mx-auto my-5 py-3 px-0"
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </Slider>
  );
}
