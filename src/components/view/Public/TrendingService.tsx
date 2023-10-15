"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../app/styles/swiper.css";
import { ArrowRightOutlined,ArrowLeftOutlined } from "@ant-design/icons";
import { Button} from "antd";
import Image from "next/image";
import Link from "next/link";

const TrendingService = () => {
  const swiperRef = useRef(null);
  console.log(swiperRef?.current)
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper!.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className="px-10 sm:px-24 py-10 sm:pb-16">
      <div className="flex py-5 justify-between items-center">
        <h1 className="text-xl font-medium sm:text-2xl sm:font-bold font-poppins text-secondary">
          Trending Service
        </h1>
        <div className="flex gap-3 items-center mx-5">
            <Button
              className="swiper-button-next flex items-center justify-center w-12 h-12 border border-primary shadow-lg shadow-gray-400 bg-primary text-white rounded-full"
              onClick={goNext}
            >
              <ArrowLeftOutlined className="text-white font-bold"/>
            </Button>
            <Button
              className="swiper-button-prev flex items-center justify-center w-12 h-12 border border-primary shadow-lg shadow-gray-400 bg-primary text-white rounded-full"
              onClick={goPrev}
            >
              <ArrowRightOutlined className="text-white  text-lg font-bold" />
            </Button>
          </div>
      </div>
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
     
         <SwiperSlide>
            <Link className="group w-[350px]" href="/">
              <Image
                src="/oven.jpeg"
                alt="oben"
                layout="responsive"
                height={350}
                width={300}
              />
              <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
                Refrigerator Repair
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="group w-[350px]" href="/">
              <Image
                src="/oven.jpeg"
                alt="oben"
                layout="responsive"
                height={350}
                width={300}
              />
              <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
                Refrigerator Repair
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="group w-[350px]" href="/">
              <Image
                src="/oven.jpeg"
                alt="oben"
                layout="responsive"
                height={350}
                width={300}
              />
              <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
                Refrigerator Repair
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="group w-[350px]" href="/">
              <Image
                src="/oven.jpeg"
                alt="oben"
                layout="responsive"
                height={350}
                width={300}
              />
              <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
                Refrigerator Repair
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="group w-[350px]" href="/">
              <Image
                src="/oven.jpeg"
                alt="oben"
                layout="responsive"
                height={350}
                width={300}
              />
              <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
                Refrigerator Repair
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="group w-[350px]" href="/">
              <Image
                src="/oven.jpeg"
                alt="oben"
                layout="responsive"
                height={350}
                width={300}
              />
              <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
                Refrigerator Repair
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="group w-[350px]" href="/">
              <Image
                src="/oven.jpeg"
                alt="oben"
                layout="responsive"
                height={350}
                width={300}
              />
              <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
                Refrigerator Repair
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="group w-[350px]" href="/">
              <Image
                src="/oven.jpeg"
                alt="oben"
                layout="responsive"
                height={350}
                width={300}
              />
              <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
                Refrigerator Repair
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="group w-[350px]" href="/">
              <Image
                src="/oven.jpeg"
                alt="oben"
                layout="responsive"
                height={350}
                width={300}
              />
              <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
                Refrigerator Repair
              </h3>
            </Link>
          </SwiperSlide>
       
        </Swiper>
    </div>
  );
};
export default TrendingService;
