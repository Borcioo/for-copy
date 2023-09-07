import { SingleReferenceProps } from "@/app/[lang]/components/Reusable/Components/References/References";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";
import React from "react";

export default function Slide({ data }: { data: SingleReferenceProps }) {
  const imageUrl = data?.avatar.data
    ? getStrapiMedia(data.avatar.data.attributes.url)
    : null;
  return (
    <div className="flex shadow-2xl  flex-col items-start w-[292px] lg:w-[358px] h-fit px-6 lg:px-10 py-[22px]">
      <div className="flex items-center justify-center gap-[13px] lg:gap-6">
        {imageUrl && (
          <Image
            src={imageUrl || ""}
            alt={data.avatar.data.attributes.alternativeText || "header image"}
            width={100}
            height={100}
          />
        )}
        <div className="flex flex-col">
          {data.name && <p className="font-bold text-base">{data.name}</p>}
          {data.jobPosition && <p className="text-base">{data.jobPosition}</p>}
        </div>
      </div>
      {data.description && (
        <p className="mt-[17px] lg:mt-[42px]">{data.description}</p>
      )}
    </div>
  );
}
