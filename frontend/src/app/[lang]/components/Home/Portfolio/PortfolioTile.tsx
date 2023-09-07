"use client";
import { HomePortfolioTile } from "@/app/[lang]/components/Home/Portfolio/HomePortfolio";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import autoAnimate from "@formkit/auto-animate";

export default function PortfolioTile({ data }: { data: HomePortfolioTile }) {
  const imageUrl = data?.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;
  const [animationParent] = useAutoAnimate({
    duration: 200,
    easing: "ease-out",
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div
      ref={animationParent}
      onMouseEnter={() => {
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsVisible(false);
      }}
      className="relative flex justify-center w-[358px] h-[239px] lg:mt-[18px]"
    >
      {imageUrl && (
        <Image
          className="absolute w-full h-full top-0 left-0"
          src={imageUrl || ""}
          alt={data.image.data.attributes.alternativeText || "header image"}
          width={358}
          height={239}
        />
      )}
      {isVisible && (
        <div className="bg-[#00000070] absolute flex flex-col w-full h-full top-0 left-0 text-white px-[32px]">
          <div className="w-full h-full flex flex-col justify-end items-start">
            {data.name && (
              <p className="text-white text-base font-bold">{data.name}</p>
            )}
            {data.values && (
              <p className="text-[14px] leading-[21px] text-white">
                {data.values}
              </p>
            )}
            <button className="flex gap-6 justify-center items-center mt-[17px] mb-[25px]">
              {data.buttonText && (
                <p className="text-[14px] leading-[21px] text-white">
                  {data.buttonText}
                </p>
              )}
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H2.66667V2.6H0V0Z" fill="white" />
                <path d="M2.66667 2.6H5.33333V5.2H2.66667V2.6Z" fill="white" />
                <path d="M5.33333 5.2H8V7.8H5.33333V5.2Z" fill="white" />
                <path d="M2.66667 7.8H5.33333V10.4H2.66667V7.8Z" fill="white" />
                <path d="M0 10.4H2.66667V13H0V10.4Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
