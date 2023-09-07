import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";
import React from "react";

export interface DescriptionItem {
  begin: string;
  end: string;
}

export interface AboutDescriptionProps {
  title: string;
  description: string;
  logo: ImageProp;
  foretoDescriptionItem: DescriptionItem[];
}

export default function AboutDescription({
  data,
}: {
  data: AboutDescriptionProps;
}) {
  const imageUrl = data?.logo.data
    ? getStrapiMedia(data.logo.data.attributes.url)
    : null;
  return (
    <div className="lg:mt-[164px] mt-[80px] px-[32px] flex lg:gap-[145px] flex-col lg:flex-row justify-between items-start lg:items-center lg:mb-[161px]">
      <div className="flex justify-center items-center w-[165px] h-[155px] ">
        {imageUrl && (
          <Image
            src={imageUrl || ""}
            alt={data.logo.data.attributes.alternativeText || "header image"}
            width={257}
            height={246}
          />
        )}
      </div>
      <div className="h-full flex flex-col">
        {data.title && (
          <h3 className="text-base lg:text-[32px] lg:leading-[122.5%] mt-[48px] lg:mt-0  max-w-[646px] font-bold">
            {data.title}
          </h3>
        )}
        <div className="mt-[24px] lg:mt-[32px] lg:max-w-[606px]">
          {data.description && <p>{data.description}</p>}
          {data.foretoDescriptionItem.length > 0 &&
            data.foretoDescriptionItem.map((item, index) => (
              <div className="text-[14px] lg:text-base">
                {item.begin && (
                  <span className="text-[#F00000] font-bold">{item.begin}</span>
                )}
                {item.end && <span>{item.end}</span>}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
