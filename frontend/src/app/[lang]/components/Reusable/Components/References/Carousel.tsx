import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../../globals.css";
import { Navigation } from "swiper/modules";
import { SingleReferenceProps } from "@/app/[lang]/components/Reusable/Components/References/References";
import Slide from "@/app/[lang]/components/Reusable/Components/References/Slide";
import { useRef } from "react";

export default function Carousel({ data }: { data: SingleReferenceProps[] }) {
  const swiperParams: any = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      clickable: true,
    },
    centeredSlides: true,
    navigation: true,
    breakpoints: {
      1320: {
        slidesPerView: 3,
      },
    },
  };
  //musi byc wiecej niz 6 lub robic concat
  const carouselData = data.length >= 6 ? data : data.concat(data);
  const sliderRef = useRef(null);

  return (
    <div className="flex justify-center items-start w-[360px] sm:w-[500px] h-[430px] lg:h-[550px] overflow-hidden relative carousel:w-[1300px]">
      <Swiper
        ref={sliderRef}
        className="flex items-start justify-start h-full w-full"
        {...swiperParams}
        modules={[Navigation]}
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <Slide data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
