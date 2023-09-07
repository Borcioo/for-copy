import { useAutoAnimate } from "@formkit/auto-animate/react";

interface JobTileProps {
  id: number;
  tileTitle: string;
  tileSubTitle: string;
  activeTileId: number;
  setActiveTileId: (id: number) => void;
}

export default function JobTile(data: JobTileProps) {
  const [animationParent] = useAutoAnimate();
  const { id, tileTitle, tileSubTitle, activeTileId, setActiveTileId } = data;
  return (
    <button
      ref={animationParent}
      className={`transition-all justify-end ease-in-out duration-500 flex flex-col w-[152px] h-[112px] lg:w-[358px] lg:h-[224px] px-4 py-4 lg:py-[32px] lg:px-[35px] ${
        activeTileId === id ? "bg-[#F00000]" : "bg-[#F6F6F6]"
      }`}
      onClick={() => {
        setActiveTileId(id);
      }}
    >
      <div className="flex flex-row justify-center items-center lg:gap-[61px] relative">
        <p
          className={`transition-all ease-in-out duration-500 text-left text-base lg:text-[32px] font-bold ${
            activeTileId !== id ? "text-black" : "text-white"
          }  max-w[233px] leading-[122.5%]`}
        >
          {tileTitle}
        </p>
        <div className="w-[19px] h-[32px] lg:w-[36px] lg:h-[61px]">
          <svg
            className={`transition-all ease-in-out duration-500 ${
              activeTileId !== id && "opacity-0"
            }`}
            width="100%"
            height="100%"
            viewBox="0 0 36 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="4" height="36" fill="white" />
            <rect x="25" y="36" width="4" height="4" fill="white" />
            <rect x="29" y="36" width="4" height="4" fill="white" />
            <rect x="32" y="36" width="4" height="4" fill="white" />
            <rect x="32" y="32" width="4" height="4" fill="white" />
            <rect x="29" y="29" width="4" height="4" fill="white" />
            <rect x="25" y="25" width="4" height="4" fill="white" />
            <rect x="22" y="22" width="4" height="4" fill="white" />
            <rect x="18" y="18" width="4" height="4" fill="white" />
            <rect x="14" y="14" width="4" height="4" fill="white" />
            <rect x="11" y="11" width="4" height="4" fill="white" />
            <rect x="7" y="7" width="4" height="4" fill="white" />
            <rect x="4" y="4" width="4" height="4" fill="white" />
            <rect x="22" y="36" width="4" height="4" fill="white" />
            <rect y="39" width="4" height="4" fill="white" />
            <rect y="43" width="4" height="4" fill="white" />
            <rect y="47" width="4" height="4" fill="white" />
            <rect x="4" y="47" width="4" height="4" fill="white" />
            <rect x="7" y="43" width="4" height="4" fill="white" />
            <rect x="11" y="39" width="4" height="4" fill="white" />
            <rect x="14" y="43" width="4" height="4" fill="white" />
            <rect x="14" y="47" width="4" height="4" fill="white" />
            <rect x="18" y="50" width="4" height="4" fill="white" />
            <rect x="18" y="54" width="4" height="4" fill="white" />
            <rect x="22" y="57" width="4" height="4" fill="white" />
            <rect x="25" y="57" width="4" height="4" fill="white" />
            <rect x="29" y="54" width="4" height="4" fill="white" />
            <rect x="29" y="50" width="4" height="4" fill="white" />
            <rect x="25" y="47" width="4" height="4" fill="white" />
            <rect x="25" y="43" width="4" height="4" fill="white" />
            <rect x="22" y="39" width="4" height="4" fill="white" />
            <rect y="36" width="4" height="4" fill="white" />
          </svg>
        </div>
      </div>
      {activeTileId === id && (
        <p
          className={`transition ease-in-out duration-800 mt-[15px] lg:mt-[65px] flex flex-row  items-center justify-center gap-2 lg:gap-4 text-[10px] lg:text-sm text-white font-bold`}
        >
          {data.tileSubTitle}
          <svg
            className={`transition-all ease-in-out duration-500 ${
              activeTileId !== id && "opacity-0"
            }`}
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H2.66667V2.6H0V0Z" fill="white" />
            <path d="M2.66667 2.6H5.33333V5.2H2.66667V2.6Z" fill="white" />
            <path d="M5.33333 5.2H8V7.8H5.33333V5.2Z" fill="white" />
            <path d="M2.66667 7.8H5.33333V10.4H2.66667V7.8Z" fill="white" />
            <path d="M0 10.4H2.66667V13H0V10.4Z" fill="white" />
          </svg>
        </p>
      )}
    </button>
  );
}
