import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import React from "react";
import SingleService from "@/app/[lang]/components/Home/Services/SingleService";
import Button, {
  ButtonProp,
} from "@/app/[lang]/components/Reusable/Components/Button";

export interface SingleServiceListProps {
  item: string;
}

export interface SingleServiceProps {
  serviceTitle: string;
  serviceImage: ImageProp;
  list: SingleServiceListProps[];
}

export interface HomeServicesProps {
  title: string;
  description: string;
  services: SingleServiceProps[];
  buttons: ButtonProp[];
}

export default function HomeServices({ data }: { data: HomeServicesProps }) {
  return (
    <div className="flex flex-col justify-center items-center mt-[48px] lg:mt-[104px]">
      {data.title && (
        <h2 className="text-center font-bold text-black text-[32px] leading-tight lg:text-[42px] lg:leading-[48px]">
          {data.title}
        </h2>
      )}
      {data.description && (
        <p className="mt-2 lg:mt-[32px] px-[32px] lg:px-0 text-center lg:w-[552px] lg:h-[72px] mx-auto">
          {data.description}
        </p>
      )}
      <div className="flex justify-center items-center max-w-[1134px] flex-wrap mt-16 gap-[30px]">
        {data.services.length > 0 &&
          data.services.map((item: SingleServiceProps, index: number) => (
            <SingleService key={index} data={item} />
          ))}
      </div>
      {data.buttons.length > 0 && (
        <div className="w-[375px] h-[240px] shadow-2xl lg:shadow-none items-center justify-center lg:items-baseline lg:w-auto lg:h-auto flex flex-col lg:flex-row gap-[20px] lg:my-[80px]">
          {data.buttons.map((item: ButtonProp, index: number) => (
            <Button key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}
