import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";
import React from "react";

export interface CodeCastProps {
  title: string;
  subTitle: string;
  description: string;
  image: ImageProp;
}

export default function CodeCast({ data }: { data: CodeCastProps }) {
  const imageUrl = data.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;
  return (
    <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:gap-[214px] mt-[80px] lg:mt-[205px] lg:mb-[187px]">
      <div className="flex px-[32px] lg:px-0 flex-col lg:gap-[16px] max-w-[465px]">
        <div className="flex flex-col mt-[66px] mb-[10px] lg:mb-0 lg:mt-0 text-left text-base lg:text-[32px] font-bold lg:leading-[122.5%]">
          {data.title && <h3>{data.title}</h3>}
          {data.subTitle && <h3 className="text-[#F00000]">{data.subTitle}</h3>}
        </div>
        {data.description && (
          <p className="text-[14px] lg:text-base ">{data.description}</p>
        )}
      </div>
      {imageUrl && (
        <div className="w-[190px] lg:w-[358px]">
          <Image
            src={imageUrl || ""}
            alt={
              data.image.data.attributes.alternativeText || "Code cast image"
            }
            width={716}
            height={368}
          />
        </div>
      )}
    </div>
  );
}
