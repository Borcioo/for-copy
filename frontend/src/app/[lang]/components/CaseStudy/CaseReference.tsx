import { CasePersonProp } from "@/app/[lang]/components/CaseStudy/CaseMainSection";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";

export default function CaseReference({ data }: { data: CasePersonProp }) {
  const imageUrl = data.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;
  return (
    <div className="max-w-[940px] px-[32px] md:px-0 flex flex-col w-full">
      <div className="mt-[96px]">
        <svg
          width="123"
          height="112"
          viewBox="0 0 123 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="56" height="55" fill="#F00000" />
          <rect x="68" width="55" height="55" fill="#F00000" />
          <rect x="28" y="55" width="28" height="28" fill="#F00000" />
          <rect x="95" y="55" width="28" height="28" fill="#F00000" />
          <rect y="84" width="28" height="28" fill="#F00000" />
          <rect x="68" y="84" width="27" height="28" fill="#F00000" />
        </svg>
      </div>
      <div className="md:pl-[96px] min-h-[160px] mt-[48px] flex flex-col md:flex-row">
        <div className="flex flex-row gap-[23px] md:gap-[64px]">
          {imageUrl && (
            <div className="min-w-[100px] min-h-[100px]">
              <Image
                src={imageUrl || ""}
                alt={
                  data.image.data.attributes.alternativeText || "person image"
                }
                width={100}
                height={100}
              />
            </div>
          )}
          <div className="flex flex-col max-w-[766px]">
            <p className="font-bold text-base">{data.name}</p>
            <p className="text-base text-[#737373] pr-16 md:pr-0">
              {data.position}
            </p>
            <p className="hidden md:block mt-4">{data.description}</p>
          </div>
        </div>
        <p className="block md:hidden mt-4">{data.description}</p>
      </div>
    </div>
  );
}
