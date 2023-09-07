"use client";
import { ValueProps } from "@/app/[lang]/components/Reusable/Components/ValuesGroup";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";

export default function Value({
  data,
  firstId,
}: {
  data: ValueProps;
  firstId: number;
}) {
  const imageUrl = data.contentImage.data
    ? getStrapiMedia(data.contentImage.data.attributes.url)
    : null;
  const renderSquare = () => {
    return data.id === firstId ? (
      <div className="w-[152px] lg:w-[358px] px-6 lg:px-10 flex  items-center justify-center aspect-square bg-[#F00000]">
        {data.contentText && (
          <p className="text-white font-bold text-center text-base lg:text-[32px] leading-[122.5%]">
            {data.contentText}
          </p>
        )}
      </div>
    ) : (
      <div className="w-[152px] lg:w-[358px] flex items-center flex-col gap-2 lg:gap-6 justify-center shadow-2xl aspect-square bg-white ">
        {imageUrl && (
          <div className="w-[56px] lg:w-[80px] aspect-square">
            <Image
              src={imageUrl || ""}
              alt={
                data.contentImage.data.attributes.alternativeText ||
                "company value picture"
              }
              width={80}
              height={80}
            />
          </div>
        )}
        {data.contentText && (
          <p className="w-full lg:w-3/4 text-black text-sm lg:text-base font-bold text-center">
            {data.contentText}
          </p>
        )}
      </div>
    );
  };
  return <div>{renderSquare()}</div>;
}
