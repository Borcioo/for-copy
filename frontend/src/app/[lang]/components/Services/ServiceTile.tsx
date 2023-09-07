import React from "react";
import { ImageProp } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import { ButtonProp } from "@/app/[lang]/components/Reusable/Components/Button";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";
import ButtonNoPadding from "@/app/[lang]/components/Reusable/ButtonNoPadding";
import Link from "next/link";

export interface ServiceTileProps {
  title: string;
  description: string;
  image: ImageProp;
  buttons: ButtonProp[];
  slug: string;
}

function ServiceTile({
  data,
  index,
}: {
  index: number;
  data: ServiceTileProps;
}) {
  const imageUrl = data.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;
  console.log(data);
  return (
    <Link
      href={`/uslugi/${data.slug}`}
      className={`flex ${
        index % 2 === 0
          ? "flex-col lg:flex-row lg:pr-[99px]"
          : "flex-col lg:flex-row-reverse lg:pl-[99px]"
      } lg:shadow-lg lg:gap-[98px] items-center justify-center lg:max-w-[1134px] w-full lg:h-[448px]`}
    >
      {imageUrl && (
        <Image
          className="max-w-[375px] lg:max-w-[486px] lg:min-h-[448px] object-cover"
          src={imageUrl || ""}
          alt={data.image.data.attributes.alternativeText || "image"}
          width={486}
          height={448}
        />
      )}
      <div className="flex items-start flex-col px-[32px] mt-[16px] lg:mt-0 lg:px-0">
        <h3 className="font-bold text-[28px] lg:text-[32px] leading-[122.5%]">
          {data.title}
        </h3>
        <p className="mt-2 lg:mt-[31px] text-[14px]">{data.description}</p>
        <div className="flex mt-[24px] lg:mt-[19px] md:mt-[64px] flex-row justify-between md:justify-center md:gap-[70px]">
          {data.buttons.map((button: ButtonProp, index: number) => (
            <ButtonNoPadding data={button} key={index} />
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ServiceTile;
