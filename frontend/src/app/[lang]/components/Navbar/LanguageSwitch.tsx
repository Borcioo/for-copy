import { useState } from "react";

export default function LanguageSwitch({
  navType,
  options,
  selectedValue,
  setSelectedValue,
  path,
}: {
  navType: string;
  options: Array<{ value: string }>;
  selectedValue: string;
  setSelectedValue: (lang: string) => void;
  path: string;
}) {
  const [isSelectClicked, setIsSelectClicked] = useState<boolean>(false);
  const handleOptionSelect = (lang: string) => {
    // const currentPath = path.replace(/^\/[a-z]{2}\//, `/${lang.toLowerCase()}/`)
    // console.log(currentPath)
    setSelectedValue(lang);
  };
  const filterOptions = (
    options: Array<{ value: string }>,
    selectedValue: string,
  ) => {
    return options.filter((item) => item.value !== selectedValue);
  };

  const renderOptions = (options: Array<{ value: string }>) => {
    return options.map((item) => (
      <li
        key={item.value}
        className="w-full mx-auto text-center text-black text-xs pb-1 border-b border-black last:border-b-0"
      >
        <button
          onClick={() => {
            handleOptionSelect(item.value);
            setIsSelectClicked(false);
          }}
        >
          {item.value}
        </button>
      </li>
    ));
  };

  return (
    <div
      className={`${
        navType === "normal" ? "bg-[#F6F6F6]" : "bg-white"
      } h-8 w-16 flex justify-center items-center relative`}
    >
      <button
        className={`w-full h-full flex flex-row ${
          navType === "hamburger" ? "justify-start" : "justify-center"
        } cursor-pointer items-center`}
        onClick={() => {
          setIsSelectClicked(!isSelectClicked);
        }}
      >
        <div className="flex gap-2 flex-row items-center justify-between ml-4 md:ml-0">
          <p className={`text-xs text-left`}>{selectedValue}</p>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0V2.33333L9.6 2.33333V-1.04893e-10L12 0Z"
              fill="black"
            />
            <path
              d="M9.6 2.33333V4.66667L7.2 4.66667V2.33333L9.6 2.33333Z"
              fill="black"
            />
            <path d="M7.2 4.66667V7L4.8 7V4.66667L7.2 4.66667Z" fill="black" />
            <path
              d="M4.8 2.33333V4.66667L2.4 4.66667V2.33333L4.8 2.33333Z"
              fill="black"
            />
            <path
              d="M2.4 -4.19572e-10V2.33333L0 2.33333V-5.24465e-10L2.4 -4.19572e-10Z"
              fill="black"
            />
          </svg>
        </div>
      </button>
      <ul
        className={`transition ease-in-out duration-300 flex flex-col justify-center w-16 items-center border border-black gap-2 absolute top-full pt-2 left-0 
            ${isSelectClicked ? "opacity-1" : "opacity-0"}`}
      >
        {options && renderOptions(filterOptions(options, selectedValue))}
      </ul>
    </div>
  );
}
