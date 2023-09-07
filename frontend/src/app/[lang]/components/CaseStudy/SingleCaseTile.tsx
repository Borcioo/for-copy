import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import { CaseMainSectionProps } from "@/app/[lang]/components/CaseStudy/CaseMainSection";
import Image from "next/image";
import { ButtonProp } from "@/app/[lang]/components/Reusable/Components/Button";
import CaseButton from "@/app/[lang]/components/CaseStudy/CaseButton";

export default function SingleCaseTile({
  data,
  index,
}: {
  data: CaseMainSectionProps;
  index: number;
}) {
  const imageUrl = data?.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;

  return (
    <div
      className={`flex caseTile flex-wrap ${
        index % 2 === 0
          ? "xl:flex-row xl:pr-[99px]"
          : "xl:flex-row-reverse xl:pl-[99px]"
      } items-center justify-center gap-4 md:gap-[72px] flex-col `}
    >
      {imageUrl && (
        <div className="max-w-[375px] md:max-w-[485px]">
          <Image
            src={imageUrl || ""}
            alt={
              data.image.data.attributes.alternativeText ||
              "case study tile image"
            }
            width={486}
            height={325}
          />
        </div>
      )}
      <div className="flex flex-col">
        {data.company && (
          <p className="text-[14px] md:text-base">{data.company}</p>
        )}
        {data.title && (
          <h3 className="text-base md:text-[32px] md:leading-[122.5%] font-bold mt-2 md:mt-[38px] max-w-[279px] md:max-w-[506px]">
            {data.title}
          </h3>
        )}
        <div className="flex mt-[19px] md:mt-[64px] flex-row justify-between md:justify-center md:gap-[70px]">
          {data.buttons.length > 0 &&
            data.buttons.map((button: ButtonProp, index: number) => (
              <CaseButton
                data={button}
                key={index}
                index={index}
                customId={data.customId}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
