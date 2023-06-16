import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";

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

  const types = ["Cartoon", "Novel"];

  const data = [
    {
      _id: "648c58631ba45335332c428c",
      id: "02Bwk7cyUS0lGmg6i8Vc",
      ProductName: "Buddy Beasts Chronicle : ฝ่ามิติเกมอสูรมหัศจรรย์",
      ProductIntro:
        "อัญมณีโลกมอนสเตอร์ตกอยู่ในมืออสูรร้าย  ภัยพิบัติโลกมนุษย์และมอนสเตอร์จึงเกิดขึ้น!\nแรงบันดาลใจจากเสียงเพลง  ความกล้าหาญของมนุษย์ผู้ถูกเลือก  และมิตรภาพต่างสายพันธุ์  คือความหวังเดียวที่จะหยุดยั้งได้",
      CreateBy: "Dandy & Buddy Beasts",
      CreateId: "8fFsOTNdaRL5rRWlHBET",
      ProductView: 35,
      ProductGroup: "แอคชั่น",
      ProductTypeSet: "Novel",
      isPublish: true,
      ImageUrl: "https://images.mynovel.co/images/Zblwh5cc1634048711306",
      EpCountPublised: 2,
      ProductRate: "ทั่วไป",
      ProductType: "แฟนตาซี",
      fanClubTranslate: "นิยายแต่ง",
      ProductPublisher: "Dandy & Buddy Beasts",
      isCopyright: false,
      ProductPrice: 0,
      isFinished: false,
      EpLastUpdate: "2021-10-16T10:56:16.062Z",
      Discount: 0,
      isAccept: true,
    },
    {
      _id: "648c58631ba45335332c428f",
      id: "0JVvBzUCEWoKZ6Isy89J",
      ProductName: "ซิ่ง!ทะลุมิติ(Super Driver)",
      ProductIntro:
        "คนขับแท็กซี่ผู้ยากจน เจอเหตุการณ์ประหลาด ในวันหนึ่ง ระบบนำทาง ก็พาเขาไปรับผู้โดยสารแปลกๆ และระบบยังบอกจุดหมายให้ไปส่งยังมิติต่างๆ และทุกครั้งที่ส่งผู้โดยสาร",
      CreateBy: "เทาเทีย",
      CreateId: "nNggxH2Ep6hug9Djvz7y",
      ProductView: 3834,
      ProductGroup: "แฟนตาซี",
      ProductTypeSet: "Cartoon",
      isPublish: true,
      ImageUrl: "https://images.mynovel.co/images/nSmWEJAZ1637972035777",
      EpCountPublised: 169,
      ProductRate: "ทั่วไป",
      ProductType: "ผจญภัย",
      fanClubTranslate: "นิยายแปล",
      ProductPublisher: "เทาเทีย",
      isCopyright: false,
      ProductPrice: 0,
      isFinished: false,
      EpLastUpdate: "2023-01-21T01:10:25.308Z",
      Discount: 0,
      isAccept: true,
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              height="400"
              width="auto"
              style={{
                width: "750px",
                maxHeight: "300px",
                borderRadius: "30px",
              }}
              className="focus:outline-none mx-auto my-5 py-3 px-0"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Slider>
      {/* types map to sections and map data to card each type section */}
      {types.map((type, index) => (
        <div key={index}>
          <h1 className="flex justify-between mx-1 text-2xl font-bold">
            {type}
            <span className=" text-blue-700 font-bold">more...</span>
          </h1>
          <div className="my-4">
            <Slider
              style={{ padding: "0 10px", textAlign: "left" }}
              {...{
                slidesToShow: 5,
                slidesToScroll: 5,
                arrows: true,
                prevArrow: (
                  <button onClick={() => setCurrentSlide(currentSlide - 1)}>
                    Previous
                  </button>
                ),
                nextArrow: (
                  <button onClick={() => setCurrentSlide(currentSlide + 1)}>
                    Next
                  </button>
                ),
                afterChange: (index: number) => setCurrentSlide(index),
                speed: 200,
                infinite: false,
              }}
            >
              {data.map((item, index) => {
                if (type === item.ProductTypeSet)
                  return <Card G={undefined} {...item} />;
                return null;
              })}
            </Slider>
          </div>
        </div>
      ))}
    </>
  );
}
