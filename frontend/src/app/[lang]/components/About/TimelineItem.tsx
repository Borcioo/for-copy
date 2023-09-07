"use client";
import { useState } from "react";
import { TimelineItemProps } from "@/app/[lang]/components/About/Timeline";

export default function TimelineItem({
  data,
  index,
}: {
  data: TimelineItemProps;
  index: number;
}) {
  const [isResized, setIsResized] = useState<boolean>(false);

  const renderTimeLineItem = (index: number, data: TimelineItemProps) => {
    if (index % 2 === 0) {
      return (
        <li className="w-full md:w-[calc(50%+80px)] h-fit flex self-start md:self-end">
          <div className="flex justify-center relative min-w-[101px] md:min-w-[160px] h-full bg-[#F00000]">
            <span className="absolute flex items-center justify-center md:top-[30px] w-[16px] h-[16px] md:w-[34px] md:h-[34px] bg-white -right-[8px] md:-right-[17px]">
              <div className="bg-[#F00000] w-[9px] h-[9px] md:w-[20px] md:h-[20px]" />
            </span>
            <div className="flex flex-col items-center">
              {data.year && (
                <p className="text-[32] leading-[122.5%] md:text-[42px] md:leading-[48px] text-white font-bold">
                  {data.year}
                </p>
              )}
              {data.month && (
                <p className="text-base text-white"> {data.month}</p>
              )}
            </div>
          </div>
          <div className="max-w-full md:max-w-none md:mt-[30px]">
            {data.title && (
              <h3 className="flex items-center ml-[17px] md:ml-[65px] mb-1 text-base md:text-[32px] text-black leading-[122.5%] font-bold lg:max-w-[425px]">
                {data.title}
              </h3>
            )}
            <div className="flex flex-col items-center md:ml-[65px] lg:max-w-[425px] text-[14px] md:text-base mb-[42px] md:mb-0">
              {data.content && (
                <p
                  className={`ml-[17px] md:ml-0 ease-in-out duration-300 overflow-hidden ${
                    !isResized
                      ? "md:max-h-[50px] max-h-[40px]"
                      : "max-h-[300px]"
                  }`}
                >
                  {data.content}
                </p>
              )}
              <button
                className={`transition-all duration-300  ${
                  isResized ? "hover:-translate-y-1.5" : "hover:translate-y-1.5"
                }`}
                onClick={() => setIsResized((prevState) => !prevState)}
              >
                <svg
                  className={`ease-in-out duration-300 mt-[20px] ${
                    isResized && "rotate-180"
                  }`}
                  width="40"
                  height="24"
                  viewBox="0 0 40 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="8" height="8" fill="#F00000" />
                  <rect x="8" y="8" width="8" height="8" fill="#F00000" />
                  <rect x="16" y="16" width="8" height="8" fill="#F00000" />
                  <rect x="24" y="8" width="8" height="8" fill="#F00000" />
                  <rect x="32" width="8" height="8" fill="#F00000" />
                </svg>
              </button>
            </div>
          </div>
        </li>
      );
    }
    return (
      <li className="w-full md:w-[calc(50%+80px)] h-fit flex flex-row md:flex-row-reverse self-start">
        <div className="flex justify-center relative min-w-[101px] md:min-w-[160px] h-full bg-[#F00000]">
          <span className="absolute flex items-center justify-center md:top-[30px] w-[16px] h-[16px] md:w-[34px] md:h-[34px] bg-white -right-[8px] md:-left-[17px]">
            <div className="bg-[#F00000] w-[9px] h-[9px] md:w-[20px] md:h-[20px]" />
          </span>
          <div className="flex flex-col  items-center">
            {data.year && (
              <p className="text-[32] leading-[122.5%] md:text-[42px] md:leading-[48px] text-white font-bold">
                {data.year}
              </p>
            )}
            {data.month && <p className="text-base text-white">{data.month}</p>}
          </div>
        </div>
        <div className="max-w-full md:max-w-none md:mt-[30px]">
          {data.title && (
            <h3 className="flex items-center ml-[17px] md:ml-0 md:mr-[65px] mb-1 text-base md:text-[32px] text-black leading-[122.5%] font-bold lg:max-w-[425px]">
              {data.title}
            </h3>
          )}
          <div className="flex flex-col items-center md:ml-0 md:mr-[65px] lg:max-w-[425px] text-[14px] md:text-base mb-[42px] md:mb-0">
            {data.content && (
              <p
                className={`ml-[17px] md:ml-0  ease-in-out duration-300 overflow-hidden ${
                  !isResized ? "md:max-h-[50px] max-h-[40px] " : "max-h-[300px]"
                }`}
              >
                {data.content}
              </p>
            )}
            <button
              className={`transition-all duration-300  ${
                isResized ? "hover:-translate-y-1.5" : "hover:translate-y-1.5"
              }`}
              onClick={() => setIsResized((prevState) => !prevState)}
            >
              <svg
                className={`ease-in-out duration-300 mt-[20px] ${
                  isResized && "rotate-180"
                }`}
                width="40"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="8" height="8" fill="#F00000" />
                <rect x="8" y="8" width="8" height="8" fill="#F00000" />
                <rect x="16" y="16" width="8" height="8" fill="#F00000" />
                <rect x="24" y="8" width="8" height="8" fill="#F00000" />
                <rect x="32" width="8" height="8" fill="#F00000" />
              </svg>
            </button>
          </div>
        </div>
      </li>
    );
  };
  return <>{renderTimeLineItem(index, data)}</>;
}
