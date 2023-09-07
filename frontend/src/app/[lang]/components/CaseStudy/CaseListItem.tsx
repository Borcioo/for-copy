"use client";
import { CasePointProps } from "@/app/[lang]/components/CaseStudy/CaseMainSection";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";

export default function CaseListItem({
  data,
  length,
  index,
}: {
  data: CasePointProps;
  length: number;
  index: number;
}) {
  const imageUrl =
    data.image.data !== null
      ? getStrapiMedia(data.image.data.attributes.url)
      : null;

  const renderSection = () => {
    if (index !== length - 1) {
      return (
        <>
          <div className="w-full md:max-w-[940px]">
            <h3 className="text-[32px] leading-[122.5%] font-bold text-[#F00000]">
              {data?.title}
            </h3>
            <p className="mt-[40px] pl-8 md:pl-0 md:pr-20">
              {data?.description}
            </p>
          </div>
          <div className=" max-w-[940px] flex items-start flex-col">
            <p className="md:pl-[106px] font-bold mt-[64px]">
              {data?.subTitle}
            </p>
            <div className="flex flex-col md:px-[74px] gap-[16px] md:gap-[24px] mt-[48px]">
              {data?.caseList.map((item, index) => (
                <div className="flex flex-row gap-2" key={index}>
                  <div className="min-w-[24px] min-h-[24px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.4444 4H7.55556V5.77778H5.77778V7.55556H4V16.4444H5.77778V18.2222H7.55556V20H16.4444V18.2222H18.2222V16.4444H20V7.55556H18.2222V5.77778H16.4444V4ZM16.4444 5.77778V7.55556H18.2222V16.4444H16.4444V18.2222H7.55556V16.4444H5.77778V7.55556H7.55556V5.77778H16.4444ZM8.44444 11.1111H10.2222V12.8889H12V14.6667H10.2222V12.8889H8.44444V11.1111ZM15.5556 9.33333H13.7778V11.1111H12V12.8889H13.7778V11.1111H15.5556V9.33333Z"
                        fill="#F00000"
                      />
                    </svg>
                  </div>
                  <p className="md:pr-12">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 md:mt-[96px] max-w-[1140px] max-h-[540px]">
            {imageUrl && (
              <Image
                src={imageUrl || ""}
                alt={
                  data.image.data.attributes.alternativeText ||
                  "case study tile image"
                }
                width={1140}
                height={540}
              />
            )}
          </div>
        </>
      );
    } else {
      return (
        <div className="flex w-full items-center flex-col-reverse md:flex-row">
          <div className="mt-[96px] max-w-[961px] max-h-[760px]">
            {imageUrl && (
              <Image
                src={imageUrl || ""}
                alt={
                  data.image.data.attributes.alternativeText ||
                  "case study tile image"
                }
                width={961}
                height={760}
              />
            )}
          </div>
          <div className="md:pl-[81px]">
            <div className="max-w-[485px]">
              <h3 className="text-[32px] leading-[122.5%] font-bold text-[#F00000]">
                {data?.title}
              </h3>
              <p className="mt-[40px] pl-8 md:pl-0 md:pr-20">
                {data?.description}
              </p>
            </div>
            <div className="flex items-start flex-col max-w-[485px]">
              <div className="flex flex-col gap-[24px] mt-[48px]">
                {data?.caseList.map((item, index) => (
                  <div className="flex flex-row gap-2" key={index}>
                    <div className="min-w-[24px] min-h-[24px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 4H7.55556V5.77778H5.77778V7.55556H4V16.4444H5.77778V18.2222H7.55556V20H16.4444V18.2222H18.2222V16.4444H20V7.55556H18.2222V5.77778H16.4444V4ZM16.4444 5.77778V7.55556H18.2222V16.4444H16.4444V18.2222H7.55556V16.4444H5.77778V7.55556H7.55556V5.77778H16.4444ZM8.44444 11.1111H10.2222V12.8889H12V14.6667H10.2222V12.8889H8.44444V11.1111ZM15.5556 9.33333H13.7778V11.1111H12V12.8889H13.7778V11.1111H15.5556V9.33333Z"
                          fill="#F00000"
                        />
                      </svg>
                    </div>
                    <p className="pr-12">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="flex flex-col w-full items-center mt-[48px] md:mt-[104px]">
      {renderSection()}
      {/*xDDDD*/}
    </div>
  );
}
