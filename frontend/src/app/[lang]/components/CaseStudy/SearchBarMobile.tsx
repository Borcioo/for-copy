"use client";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export interface searchType {
  text: string;
}

export interface SearchBarProps {
  searchTypes: searchType[];
}

export interface SearchProps {
  data: SearchBarProps;
  activeOption: searchType;
  handleOptionClick: (type: searchType) => void;
}

export default ({ data, activeOption, handleOptionClick }: SearchProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [parent, enableAnimations] = useAutoAnimate();
  return (
    <div className="flex lg:hidden w-full px-[32px] mt-[84px] gap-[126px] justify-center items-center">
      <div className="bg-[#F6F6F6] w-full">
        <div
          ref={parent}
          className="flex flex-row justify-between items-center px-[31px] min-h-[46px] relative"
        >
          {activeOption.text && (
            <p className=" ease-in-out duration-300 font-bold text-[#F00000]">
              {activeOption.text}
            </p>
          )}
          <button onClick={() => setIsClicked((prevState) => !prevState)}>
            <svg
              className={`ease-in-out duration-300 ${
                isClicked ? "rotate-180" : ""
              }`}
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="4" height="4" fill="#F00000" />
              <rect x="4" y="4" width="4" height="4" fill="#F00000" />
              <rect x="8" y="8" width="4" height="4" fill="#F00000" />
              <rect x="12" y="4" width="4" height="4" fill="#F00000" />
              <rect x="16" width="4" height="4" fill="#F00000" />
            </svg>
          </button>
          {isClicked && (
            <div className="absolute z-50 top-[46px] bg-white flex items-start flex-col left-0 w-full">
              {data.searchTypes.length > 0 &&
                data.searchTypes
                  .filter((item) => item.text !== activeOption.text)
                  .map((item, index) => (
                    <>
                      {item.text && (
                        <button
                          key={index}
                          onClick={() => {
                            handleOptionClick(item);
                            setIsClicked(false);
                          }}
                          className={`px-[31px] text-black text-[14px] font-bold py-[12px] leading-[21px]`}
                        >
                          {item.text}
                        </button>
                      )}
                    </>
                  ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
