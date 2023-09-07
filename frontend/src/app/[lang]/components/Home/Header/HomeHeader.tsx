import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ButtonProp } from "@/app/[lang]/components/Reusable/Components/Button";
import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";

export interface HomeHeaderProps {
  titleBlack: string;
  titleRed: string;
  description: string;
  homeButtons: ButtonProp[];
  image: ImageProp;
}

export default function HomeHeader({ data }: { data: HomeHeaderProps }) {
  const imageUrl = data?.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row justify-center gap-5  foretoHome:gap-[90px] h-fit">
      <div className="flex items-start justify-center flex-col lg:w-[455px] lg:gap-4">
        <div className="hidden lg:flex flex-col font-bold text-[64px] leading-[64px]">
          {data.titleBlack && <p className="text-black">{data.titleBlack}</p>}
          {data.titleRed && <p className="text-[#F00000]">{data.titleRed}</p>}
        </div>
        {data.description && (
          <p className="text-base lg:w-[430px] text-center lg:text-left px-[32px] lg:px-0 lg:pr-8">
            {data.description}
          </p>
        )}
        <div className="flex flex-col items-center mx-auto lg:mx-0 lg:items-start lg:flex-row gap-1 mt-[32px]">
          {data.homeButtons.length > 0 &&
            data.homeButtons.map((item: ButtonProp, index: number) => (
              <Link href={item.url} key={index}>
                <button
                  className={`px-[24px] py-[15px]  bg-[${item.hexColor}] flex items-center justify-center font-bold gap-4`}
                  style={{ color: item.textHexColor }}
                >
                  {item.text && <p className="text-base">{item.text}</p>}
                  <svg
                    width="13"
                    height="20"
                    viewBox="0 0 13 20"
                    fill="item.textHexColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 0H4.5V4H0.5V0Z" fill={item.textHexColor} />
                    <path d="M4.5 4H8.5V8H4.5V4Z" fill={item.textHexColor} />
                    <path d="M8.5 8H12.5V12H8.5V8Z" fill={item.textHexColor} />
                    <path d="M4.5 12H8.5V16H4.5V12Z" fill={item.textHexColor} />
                    <path d="M0.5 16H4.5V20H0.5V16Z" fill={item.textHexColor} />
                  </svg>
                </button>
              </Link>
            ))}
        </div>
      </div>
      {imageUrl && (
        <Image
          className="px-[32px] max-w-[329px] max-h-[329px]  lg:px-0 lg:max-w-[500px] lg:max-h-[500px] foretoHome:max-w-[600px] foretoHome:max-h-[600px]"
          src={imageUrl || ""}
          alt={data.image.data.attributes.alternativeText || "header image"}
          width={600}
          height={600}
        />
      )}
      <div className="lg:hidden text-center font-bold text-[42px] leading-[48px] lg:text-[64px] lg:leading-[64px] mt-8">
        {data.titleBlack && <p className="text-black">{data.titleBlack}</p>}
        {data.titleRed && <p className="text-[#F00000]">{data.titleRed}</p>}
      </div>
    </div>
  );
}
