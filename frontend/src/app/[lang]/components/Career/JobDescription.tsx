"use client";
import JobDescriptionItemList from "@/app/[lang]/components/Career/JobDescriptionItemList";
import ApplyButton from "@/app/[lang]/components/Career/ApplyButton";
import {
  RequirementProps,
  SingleJobProps,
} from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";

export default function JobDescription({
  data,
  applyButtonData,
}: {
  data: SingleJobProps;
  applyButtonData: { title: string; text: string };
}) {
  return (
    <div className="min-h-[1300px]">
      <h3 className="text-center text-[#F00000] font-bold text-[32px] leading-[122.5%] mt-16 lg:mt-[165px]">
        {data.title}
      </h3>
      <h3 className="w-full mx-auto text-center font-bold text-base lg:text-[32px] leading-[122.5%] mt-10 lg:mt-6 lg:max-w-[895px]">
        {data.subTitle}
      </h3>
      <div className="relative px-16 w-full mx-auto text-base flex-wrap text-center mt-4 lg:mt-10 lg:max-w-[895px]">
        <p>{data.description}</p>
        <ApplyButton applyButtonData={applyButtonData} />
      </div>
      {data.requirements.map((item: RequirementProps, index: number) => (
        <JobDescriptionItemList key={index} data={item} />
      ))}
      <p className="w-full lg:w-[1134px] text-center mt-10 px-8">
        {data.footerNotes}
      </p>
    </div>
  );
}

export interface JobSingleItemList {
  title: string;
  items: string[];
}
