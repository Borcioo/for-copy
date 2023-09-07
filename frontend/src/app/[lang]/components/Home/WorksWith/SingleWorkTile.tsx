import {
  HomeWorksWithCompanyListProps,
  HomeWorksWithListProps,
} from "@/app/[lang]/components/Home/WorksWith/HomeWorksWith";
import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";

export default function SingleWorkTile({
  data,
  activeId,
  setActiveId,
}: {
  data: HomeWorksWithCompanyListProps;
  activeId: number;
  setActiveId: (type: number) => void;
}) {
  const [show, setShow] = useState<boolean>(activeId === data.id);
  const parent = useRef(null);
  const handleTileClick = () => {
    if (activeId === data.id) {
      setActiveId(-1);
      setShow(false);
    } else {
      setActiveId(data.id);
      setShow(true);
    }
  };

  useEffect(() => {
    if (activeId !== data.id) {
      setShow(false);
    }
  }, [activeId]);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  return (
    <div
      ref={parent}
      className={`w-[311px] transition-all duration-300 lg:w-[551px] flex flex-col ${
        show && "shadow-2xl"
      }`}
    >
      <button
        className="flex flex-row py-[17px] bg-[#F00000] items-center justify-between cursor-pointer"
        onClick={handleTileClick}
      >
        <div className="text-base lg:text-[32px] lg:leading-[122.5%] flex flex-col items-start font-bold pl-[65px] text-white">
          {data.title && <p>{data.title}</p>}
          {data.subTitle && <p>{data.subTitle}</p>}
        </div>
        <svg
          className={`mr-[66px] transition-all duration-300 ${
            activeId === data.id && "rotate-[180deg]"
          }`}
          width="40"
          height="24"
          viewBox="0 0 40 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="8" height="8" fill="white" />
          <rect x="8" y="8" width="8" height="8" fill="white" />
          <rect x="16" y="16" width="8" height="8" fill="white" />
          <rect x="24" y="8" width="8" height="8" fill="white" />
          <rect x="32" width="8" height="8" fill="white" />
        </svg>
      </button>
      {show && (
        <div className="mt-[46px] mx-auto max-w-[311px] lg:max-w-[457px] flex flex-col gap-[46px] pb-[30px] lg:pb-[117px]">
          {data.textList.length > 0 &&
            data.textList.map((item: HomeWorksWithListProps, key: number) => (
              <>
                {item.text && (
                  <p className="text-[14px] px-[14px] lg:px-0 lg:text-base">
                    {item.text}
                  </p>
                )}
              </>
            ))}
        </div>
      )}
    </div>
  );
}
