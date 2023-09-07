import { HomeSolutionTile } from "@/app/[lang]/components/Home/Solutions/HomeSolutions";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";
import React, { useState } from "react";

export default function SolutionTile({ data }: { data: HomeSolutionTile }) {
  const imageUrl = data?.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className="w-[358px] flex justify-center items-center flex-col gap-[24px] lg:mt-[18px]">
      {imageUrl && (
        <Image
          className="w-full h-full"
          src={imageUrl || ""}
          alt={data.image.data.attributes.alternativeText || "header image"}
          width={358}
          height={239}
        />
      )}
      <div className="flex text-black flex-col w-[279px] lg:w-[335px] h-full top-0 left-0">
        <div className="w-full h-full flex flex-col justify-end items-start">
          {data.name && <p className="text-[14px]">{data.name}</p>}
          {data.values && (
            <p className="text-base font-bold mt-2">{data.values}</p>
          )}
          <button
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="flex gap-6 hover:text-[#F00000] transition-all duration-200 justify-center items-center mt-[24px]"
          >
            {data.buttonText && (
              <p className="text-[14px] font-bold leading-[21px]">
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
              <path
                d="M0 0H2.66667V2.6H0V0Z"
                fill={isHovered ? "#F00000" : "black"}
              />
              <path
                d="M2.66667 2.6H5.33333V5.2H2.66667V2.6Z"
                fill={isHovered ? "#F00000" : "black"}
              />
              <path
                d="M5.33333 5.2H8V7.8H5.33333V5.2Z"
                fill={isHovered ? "#F00000" : "black"}
              />
              <path
                d="M2.66667 7.8H5.33333V10.4H2.66667V7.8Z"
                fill={isHovered ? "#F00000" : "black"}
              />
              <path
                d="M0 10.4H2.66667V13H0V10.4Z"
                fill={isHovered ? "#F00000" : "black"}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
