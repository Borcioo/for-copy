"use client";
import { useState } from "react";
import TimelineItem from "@/app/[lang]/components/About/TimelineItem";

export interface TimelineItemProps {
  year: string;
  month: string;
  title: string;
  content: string;
}

export interface TimelineProps {
  timelineItems: TimelineItemProps[];
}

export default function Timeline({ data }: { data: TimelineProps }) {
  const [mode, setMode] = useState("desktop");

  return (
    <>
      <div className="w-full flex px-[32px] justify-start md:justify-center items-center mt-[80px] md:mt-[120px]">
        <div className="min-w-[101px] md:min-w-[160px] h-[52px] bg-[#F00000]" />
      </div>
      <ol className={`w-full flex flex-col px-[32px]`}>
        {data.timelineItems.length > 0 &&
          data.timelineItems.map((item, index) => (
            <TimelineItem data={item} index={index} key={index} />
          ))}
      </ol>
    </>
  );
}
