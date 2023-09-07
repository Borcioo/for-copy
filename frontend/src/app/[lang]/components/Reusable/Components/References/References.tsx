import React from "react";
import Carousel from "@/app/[lang]/components/Reusable/Components/References/Carousel";
import Button, {
  ButtonProp,
} from "@/app/[lang]/components/Reusable/Components/Button";
import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";

export interface SingleReferenceProps {
  name: string;
  jobPosition: string;
  description: string;
  avatar: ImageProp;
}

export interface HomeReferencesProps {
  title: string;
  subTitle: string;
  references: SingleReferenceProps[];
  buttons: ButtonProp[];
}

export default function References({ data }: { data: HomeReferencesProps }) {
  return (
    <div className="flex flex-col justify-center items-center mt-12 lg:mt-[133px]">
      {data.title && (
        <h2 className="font-bold text-[32px] px-[32px] lg:px-0 text-center leading-[122.5%] lg:text-[42px] lg:eading-[48px]">
          {data.title}
        </h2>
      )}
      {data.subTitle && (
        <p className="text-base mt-2 lg:mt-[32px]">{data.subTitle}</p>
      )}
      {data.references.length > 0 && <Carousel data={data.references} />}
      {data.buttons[0] && <Button data={data.buttons[0]} />}
    </div>
  );
}
