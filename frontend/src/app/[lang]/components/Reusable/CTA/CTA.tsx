import { RedBarProps } from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ButtonProp } from "@/app/[lang]/components/Reusable/Components/Button";
import Button from "@/app/[lang]/components/Reusable/Components/Button";

export default function CTA({ data }: { data: RedBarProps }) {
  const imageUrl = data.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;
  return (
    <div className=" px-8 lg:px-0 flex-col lg:flex-row mt-[102px] lg:h-[349px] justify-center items-center lg:gap-[151px] flex bg-[#F00000] w-full">
      {data.text && (
        <p className="leading-[122.5%] mt-[21px] px-6 lg:mt-0 text-[32px] h-[195px] lg:text-[42px] text-white lg:w-[553px] lg:h-[144px] lg:px-2 font-bold lg:leading-[48px]">
          {data.text}
        </p>
      )}
      <div className=" flex-col-reverse lg:flex-row flex justify-center items-center gap-12">
        <div className="flex flex-col">
          <div className="flex gap-[24px] flex-col pb-[45px] lg:pb-0">
            {data.buttons.length > 0 &&
              data.buttons.map((item: ButtonProp, index: number) =>
                item.url ? (
                  <Link
                    key={index}
                    href={item.url}
                    className={`flex bg-[${item.hexColor}] justify-center items-center px-3 gap-4`}
                    style={{ background: item.hexColor }}
                  >
                    <Button data={item} />
                  </Link>
                ) : (
                  <div
                    key={index}
                    className={`flex bg-[${item.hexColor}] justify-center items-center px-3 gap-4`}
                    style={{ background: item.hexColor }}
                  >
                    <Button data={item} />
                  </div>
                ),
              )}
          </div>
        </div>
        {imageUrl && (
          <div className="w-[190px] lg:w-[190px] lg:h-[148px] ml-20 lg:mt-20">
            <Image
              src={imageUrl || ""}
              alt={
                data.image.data.attributes.alternativeText || "foot notes image"
              }
              width={200}
              height={200}
            />
          </div>
        )}
      </div>
    </div>
  );
}
