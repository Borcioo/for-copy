import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import Button, {
  ButtonProp,
} from "@/app/[lang]/components/Reusable/Components/Button";
import AboutTile from "@/app/[lang]/components/Home/About/AboutTile";
import React from "react";

export interface HomeAboutValuesProps {
  title: string;
  description: string;
  icon: ImageProp;
}

export interface HomeAboutUsProps {
  title?: string;
  description?: string;
  aboutValues: HomeAboutValuesProps[];
  buttons: ButtonProp[];
}

export default function HomeAbout({ data }: { data: HomeAboutUsProps }) {
  return (
    <div className="flex flex-col justify-center items-center mt-[45px] lg:mt-[88px]">
      {data.title && (
        <h2 className="lg:text-[42px] lg:leading-[48px] font-bold">
          {data.title}
        </h2>
      )}
      {data.description && (
        <p className="text-base mt-2 lg:mt-[32px] mb-12 lg:mb-16">
          {data.description}
        </p>
      )}
      <div className="flex flex-row gap-[30px] items-center justify-center flex-wrap">
        {data.aboutValues.length > 0 &&
          data.aboutValues.map((item, index) => (
            <AboutTile data={item} key={index} />
          ))}
      </div>
      {data.buttons[0] ? (
        <div className="lg:mt-[112px]">
          <div className="mt-12 lg:mt-0">
            <Button data={data.buttons[0]} />
          </div>
        </div>
      ) : (
        <div className="mt-[40px]" />
      )}
    </div>
  );
}
