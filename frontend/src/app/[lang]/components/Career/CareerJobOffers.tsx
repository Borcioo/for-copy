"use clinet";
import {
  JobsProps,
  SingleJobProps,
} from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";
import JobTile from "@/app/[lang]/components/Career/JobTile";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import JobDescription from "@/app/[lang]/components/Career/JobDescription";

export default function CareerJobOffers({
  data,
  activeTileId,
  setActiveTileId,
}: {
  data: JobsProps;
  activeTileId: number;
  setActiveTileId: (tileid: number) => void;
}) {
  const [animationParent] = useAutoAnimate();
  const applyButtonData = {
    title: data.applyTitle,
    text: data.applyText,
  };

  console.log(data.jobs);
  return (
    <div
      ref={animationParent}
      className="flex flex-col justify-center items-center mt-[56px] lg:mt-[165px]"
    >
      <p className="text-[32px] leading-[122.5%] lg:text-[42px] lg:leading-[48px] font-bold text-black">
        {data.title}
      </p>
      <div className="flex flex-row flex-wrap gap-[30px] mt-[40px] lg:mt-[95px]">
        {data.jobs.map((item: SingleJobProps, index: number) => (
          <JobTile
            key={index}
            tileTitle={item.title}
            tileSubTitle={item.additionalText}
            id={item.id}
            activeTileId={activeTileId}
            setActiveTileId={setActiveTileId}
          />
        ))}
      </div>
      {activeTileId !== -1 && (
        <JobDescription
          key={activeTileId}
          applyButtonData={applyButtonData}
          data={
            data.jobs.filter(
              (item: SingleJobProps) => item.id === activeTileId,
            )[0]
          }
        />
      )}
    </div>
  );
}
