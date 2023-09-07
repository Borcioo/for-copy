"use client";
import React, { useEffect, useRef, useState } from "react";
import FlowTile from "@/app/[lang]/components/Home/Workflow/FlowTile";
import Button, {
  ButtonProp,
} from "@/app/[lang]/components/Reusable/Components/Button";

export interface FlowTileProps {
  title: string;
  subTitle: string;
  description: string;
}

export interface HomeWorkflowProps {
  title: string;
  description: string;
  buttons: ButtonProp[];
  workflowList: FlowTileProps[];
}

export interface MouseState {
  inWrapper: boolean;
  half: "hoverToRight" | "hoverToLeft" | null;
}

export default function HomeWorkflow({ data }: { data: HomeWorkflowProps }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [mouseState, setMouseState] = useState<MouseState>({
    inWrapper: false,
    half: null,
  });
  const mouseStateRef = useRef<MouseState>({ inWrapper: false, half: null });

  const [isInside, setIsInside] = useState<MouseState["half"]>(null);
  const handleOnMouseOver = () => {
    setIsInside(mouseState.half);
  };
  const handleOnMouseOut = () => {
    setIsInside(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();

      const inWrapper =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      const halfScreenWidth = window.innerWidth / 2;
      const half =
        e.clientX <= halfScreenWidth ? "hoverToRight" : "hoverToLeft";

      mouseStateRef.current = {
        inWrapper,
        half: inWrapper ? half : null,
      };
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMouseState(mouseStateRef.current);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center flex-col items-center mt-[48px] lg:mt-[104px] overflow-hidden">
      <div className="w-full max-w-[320px] lg:max-w-[1136px] flex flex-col justify-center items-center">
        {data.title && (
          <h2 className="text-center font-bold text-black text-[32px] leading-tight lg:text-[42px] lg:leading-[48px]">
            {data.title}
          </h2>
        )}
        {data.description && (
          <p className="lg:max-w-[367px] text-center text-base mt-2 lg:mt-[32px]">
            {data.description}
          </p>
        )}
        <div
          ref={wrapperRef}
          onMouseMove={handleMouseMove}
          className="w-full flex flex-wrap mt-12 justify-center items-center gap-[22px] lg:gap-[85px] lg:mt-[65px] lg:mb-[112px]"
        >
          {data.workflowList.length > 0 &&
            data.workflowList.map((item: FlowTileProps, index: number) => (
              <FlowTile
                key={index}
                handleOnMouseOver={handleOnMouseOver}
                handleOnMouseOut={handleOnMouseOut}
                half={mouseState.half}
                data={item}
              />
            ))}
        </div>
      </div>
      {data.buttons[0] && (
        <div className="mt-12 lg:mt-0">
          <Button data={data.buttons[0]} />
        </div>
      )}
    </div>
  );
}
