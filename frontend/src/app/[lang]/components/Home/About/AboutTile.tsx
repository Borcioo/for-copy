import React from "react";
import { HomeAboutValuesProps } from "@/app/[lang]/components/Home/About/HomeAbout";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";

export default function AboutTile({ data }: { data: HomeAboutValuesProps }) {
  const imageUrl = data?.icon.data
    ? getStrapiMedia(data.icon.data.attributes.url)
    : null;
  return (
    <div className="flex flex-col shadow-xl items-start justify-start w-[354px] h-[223px] pl-[42px] pt-[52px]">
      <div className="flex justify-center items-center flex-row gap-[6px]">
        {imageUrl && (
          <Image
            className="pt-[5px]"
            src={imageUrl || ""}
            alt={data.icon.data.attributes.alternativeText || "header image"}
            width={40}
            height={40}
          />
        )}
        {data.title && (
          <h2 className="text-[#F00000] font-bold text-[42px] leading-[48px] ">
            {data.title}
          </h2>
        )}
      </div>
      {data.description && (
        <p className="text-base mt-[5px] lg:mt-[27px] font-bold max-w-[120px]">
          {data.description}
        </p>
      )}
    </div>
  );
}
