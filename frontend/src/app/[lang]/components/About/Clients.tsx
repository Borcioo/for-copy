import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";
import React from "react";
import { ClientImageProp } from "@/app/[lang]/components/Home/Clients/HomeClients";

export interface ClientsProps {
  title: string;
  clients: ClientImageProp[];
}

export default function Clients({ data }: { data: ClientsProps }) {
  return (
    <div className="flex flex-col justify-center items-center mt-[80px] lg:mt-[120px]">
      {data.title && (
        <h2 className="text-[32px] leading-[122.5%] lg:text-[42px] lg:leading-[48px] font-bold">
          {data.title}
        </h2>
      )}
      {data.clients.length > 0 && (
        <div className="flex flex-row justify-center items-center mt-10 lg:mt-0  flex-wrap w-full px-[32px]">
          {data.clients.map((item: ClientImageProp, index: number) => {
            const imageUrl = item.clientImage.data
              ? getStrapiMedia(item.clientImage.data.attributes.url)
              : null;
            return (
              <div
                key={index}
                className="flex justify-center mt-[48px] lg:mt-[95px] items-center"
              >
                {imageUrl && (
                  <div className=" flex justify-center items-center px-[60px]">
                    <Image
                      className=" h-fit object-cover"
                      src={imageUrl || ""}
                      alt={
                        item.clientImage.data.attributes.alternativeText ||
                        "client image"
                      }
                      width={150}
                      height={40}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
