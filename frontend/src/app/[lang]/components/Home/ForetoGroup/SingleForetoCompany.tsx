import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import { HomeForetoCompanyTile } from "@/app/[lang]/components/Home/ForetoGroup/HomeForetoGroup";
import Image from "next/image";
import { SingleServiceListProps } from "@/app/[lang]/components/Home/Services/HomeServices";
import React, { useState } from "react";

export default function SingleForetoCompany({
  data,
}: {
  data: HomeForetoCompanyTile;
}) {
  const imageUrl = data?.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="h-fit w-[308px] px-[15px] lg:mb-[34px] lg:w-[358px] lg:h-[474px] shadow-2xl pt-[46px] pb-[30px] lg:pb-[56px] flex flex-col justify-between  lg:px-[40px]">
      <div className="flex flex-col">
        <div className="w-[250px] lg:w-[250px]">
          {imageUrl && (
            <Image
              className="h-fit object-cover"
              src={imageUrl || ""}
              alt={data.image.data.attributes.alternativeText || "header image"}
              width={250}
              height={50}
            />
          )}
        </div>
        {data.description && (
          <p className="text-base mt-[13px] lg:mt-[56px]">{data.description}</p>
        )}
      </div>
      {data.buttonText && (
        <a
          href={"https://www." + data.buttonText}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="flex gap-6 hover:text-[#F00000] lg:mb-0 hover:scale-105 transition-all duration-200 justify-start lg:justify-center items-center mt-[24px]"
          >
            <p className="text-base font-bold leading-[21px]">
              {data.buttonText}
            </p>
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
        </a>
      )}
    </div>
  );
}
