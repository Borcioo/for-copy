import { CharacterProps } from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";

export default function CareerCharacterSingleValue(data: CharacterProps) {
  const imageUrl = data?.icon.data
    ? getStrapiMedia(data.icon.data.attributes.url)
    : null;
  return (
    <div className="lg:w-[552px] py-4 lg:py-[30px] lg:h-[100px] mt-[18px] bg-[#F00000] flex items-center justify-start gap-[22px]">
      {imageUrl && (
        <div className="w-[24px] lg:w-[49px] ml-3 lg:ml-[26px] lg:pt-2 aspect-square">
          <Image
            src={imageUrl || ""}
            alt={data.icon.data.attributes.alternativeText || "character value"}
            width={80}
            height={80}
          />
        </div>
      )}
      {data.characterText && (
        <p className="text-base font-bold leading-normal lg:text-[32px] text-white lg:leading-[122.5%]">
          {data.characterText}
        </p>
      )}
    </div>
  );
}
