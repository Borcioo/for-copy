import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import React from "react";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";

export interface ClientImageProp {
  clientImage: ImageProp;
}

export interface HomeClientProps {
  title: string;
  titleRed: string;
  clients: ClientImageProp[];
}

export default function HomeClients({ data }: { data: HomeClientProps }) {
  return (
    <div className="flex py-[24px] px-[32px] lg:px-0 lg:py-[64px] justify-center items-center flex-wrap bg-[#F6F6F6] w-full mt-12 lg:mt-[100px]">
      <div className="flex flex-col w-fit font-bold text-[32px] leading-[122.5%] lg:text-[42px] lg:leading-[48px] text-center lg:text-left lg:mr-[98px]">
        {data.title && <h2 className="text-black">{data.title}</h2>}
        {data.titleRed && <h2 className="text-[#F00000]">{data.titleRed}</h2>}
      </div>
      <div className="flex flex-row justify-center items-center lg:gap-[122px] mt-10 lg:mt-0 gap-[26px] flex-wrap">
        {data.clients.length > 0 &&
          data.clients.map((item: ClientImageProp, index: number) => {
            const imageUrl = item.clientImage.data
              ? getStrapiMedia(item.clientImage.data.attributes.url)
              : null;
            return (
              <div
                key={index}
                className="flex justify-center items-center w-[150px] lg:w-[130px] h-[40px]"
              >
                {imageUrl && (
                  <Image
                    className="px-[32px] lg:px-0 h-fit object-cover"
                    src={imageUrl || ""}
                    alt={
                      item.clientImage.data.attributes.alternativeText ||
                      "client image"
                    }
                    width={150}
                    height={40}
                  />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
