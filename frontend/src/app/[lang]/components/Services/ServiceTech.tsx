import React from "react";
import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import Image from "next/image";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";

export interface ServiceTechProps {
  techName: string;
  image: ImageProp;
}

function ServiceTech({ data }: { data: ServiceTechProps }) {
  const imageUrl = data.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;
  return (
    <div className="flex shadow-lg gap-[18px] lg:gap-[21px] items-center justify-center w-[144px] lg:w-[200px] h-[142px] lg:h-[187px] flex-col">
      <div className="max-w-[75px] lg:max-w-[116px] flex justify-center items-center min-h-[70px] lg:min-h-[80px]">
        {imageUrl && (
          <Image
            className="max-w-[75px] lg:max-w-[116px]"
            src={imageUrl || ""}
            alt={data.image.data.attributes.alternativeText || "image"}
            width={70}
            height={70}
          />
        )}
      </div>
      <p className="text-base font-bold">{data.techName}</p>
    </div>
  );
}

export default ServiceTech;
