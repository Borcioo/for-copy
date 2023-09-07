import {
  FlowTileProps,
  MouseState,
} from "@/app/[lang]/components/Home/Workflow/HomeWorkflow";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface TileProps {
  data: FlowTileProps;
  half: MouseState["half"];
  handleOnMouseOver: () => void;
  handleOnMouseOut: () => void;
}

export default function FlowTile({
  data,
  half,
  handleOnMouseOver,
  handleOnMouseOut,
}: TileProps) {
  const [render, setRender] = useState(false);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  return (
    <div
      onMouseOver={() => {
        handleOnMouseOver();
        setRender(true);
      }}
      onMouseOut={() => {
        handleOnMouseOut();
        setRender(false);
      }}
      className={`shadow-lg transition-all duration-300 text-[#F00000] 
            relative flex flex-col justify-center items-center w-[144px] h-[120px] lg:w-[220px] lg:h-[192px] gap-[3px] lg:gap-[18px]`}
    >
      {data.title && (
        <h1 className="font-bold text-[64px] leading-[64px] cursor-default ">
          {data.title}
        </h1>
      )}
      {data.subTitle && <p className="font-bold text-black">{data.subTitle}</p>}
      <div
        ref={parent}
        className={`${
          half === "hoverToLeft"
            ? "top-0 right-0 flex-row-reverse"
            : "top-0 left-0 flex-row"
        } 
                justify-start transition-all duration-300 z-50 absolute w-full h-full hidden desktopWork:flex items-center tileClass
                ${!render && "opacity-0"} ${
                  render ? "min-w-[830px]" : "min-w-[220px]"
                } ${half}`}
      >
        {render && (
          <>
            <div className="w-[220px] flex flex-col items-center justify-center h-[192px] gap-[18px]">
              {data.title && (
                <h1 className="font-bold text-[64px] leading-[64px] text-white cursor-default">
                  {data.title}
                </h1>
              )}
              {data.subTitle && (
                <p className="font-bold text-white">{data.subTitle}</p>
              )}
            </div>
            {data.description && (
              <p
                className={`${
                  !render && "opacity-0 hidden"
                } transition-all delay-300 w-[540px] max-h-[72px] text-white ${
                  half === "hoverToLeft" ? "pl-[57px]" : "pr-[57px]"
                } `}
              >
                {data.description}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
