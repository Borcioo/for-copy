import Button, {
  ButtonProp,
} from "@/app/[lang]/components/Reusable/Components/Button";
import { HomeSolutionTile } from "@/app/[lang]/components/Home/Solutions/HomeSolutions";
import SingleService from "@/app/[lang]/components/Home/Services/SingleService";
import React from "react";
import SingleForetoCompany from "@/app/[lang]/components/Home/ForetoGroup/SingleForetoCompany";
import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";

export interface HomeForetoCompanyTile {
  name: string;
  buttonText: string;
  values: string;
  description: string;
  image: ImageProp;
}

export interface HomeForetoGroupProps {
  title: string;
  tiles: HomeForetoCompanyTile[];
}

export default function HomeForetoGroup({
  data,
}: {
  data: HomeForetoGroupProps;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      {data.title && (
        <h2 className="text-center font-bold text-black text-[32px] leading-tight lg:text-[42px] lg:leading-[48px] mb-16">
          {data.title}
        </h2>
      )}
      <div className="flex justify-center items-center max-w-[1134px] flex-wrap gap-[30px]">
        {data.tiles.length > 0 &&
          data.tiles.map((item: HomeForetoCompanyTile, index: number) => (
            <SingleForetoCompany key={index} data={item} />
          ))}
      </div>
    </div>
  );
}
