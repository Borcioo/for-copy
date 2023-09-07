"use client";
import {
  CasePersonProp,
  CasePointProps,
  ChapterProp,
  DescriptionItem,
  ProjectDetailProp,
} from "@/app/[lang]/components/CaseStudy/CaseMainSection";

import Chapter from "@/app/[lang]/components/CaseStudy/Chapter";
import CaseListItem from "@/app/[lang]/components/CaseStudy/CaseListItem";
import CaseReference from "@/app/[lang]/components/CaseStudy/CaseReference";
import React, { useCallback, useEffect, useState } from "react";
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";
import Link from "next/link";
import { RedBarProps } from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";
import CTA from "@/app/[lang]/components/Reusable/CTA/CTA";
import { PageProps } from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";

export interface ActiveViewProps {
  title: string;
  projectDetails: ProjectDetailProp[];
  descriptionList: DescriptionItem[];
  descriptionListSecond: DescriptionItem[];
  chapters: ChapterProp[];
  casePerson: CasePersonProp;
  casePoints: CasePointProps[];
  cta: RedBarProps;
}

export default ({ params }: PageProps) => {
  const [data, setData] = useState<ActiveViewProps>();
  const fetchData = useCallback(async () => {
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/case-study-articles/${params.slug}`;
      const urlParamsObject = {
        populate: "deep",
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);
      setData(responseData.data.attributes);
    } catch (error) {
      console.error(error);
    } finally {
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full flex-col mt-[96px] flex items-center justify-center relative ">
      <div className="max-w-[904px] w-full items-center relative flex flex-col px-[32px] md:px-[20px]">
        <Link
          href="/case-studies"
          className="hidden lg:block absolute top-0 left-0 md:left-[-72px]"
        >
          <svg
            width="18"
            height="30"
            viewBox="0 0 18 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 4.28571V0L13.5 0V4.28571L9 4.28571V8.57143H4.5V12.8571L0 12.8571V17.1429H4.5V21.4286H9V25.7143H13.5V30H18L18 25.7143H13.5L13.5 21.4286H9V17.1429H4.5L4.5 12.8571H9V8.57143H13.5V4.28571H18Z"
              fill="black"
            />
          </svg>
        </Link>
        <h3 className="flex flex-row gap-[24px] text-base items-start justify-center md:text-[32px] md:leading-[122.5%] text-left font-bold w-full relative">
          <Link href="/case-studies" className="visible  lg:hidden">
            <svg
              className="mt-1"
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 2.14286V0L6.75 0V2.14286L4.5 2.14286V4.28571H2.25V6.42857L0 6.42857V8.57143H2.25V10.7143H4.5V12.8571H6.75V15H9L9 12.8571H6.75L6.75 10.7143H4.5V8.57143H2.25L2.25 6.42857H4.5V4.28571H6.75V2.14286H9Z"
                fill="black"
              />
            </svg>
          </Link>
          <p className="max-w-[279px] md:max-w-none">{data?.title}</p>
        </h3>
        <div className="text-[14px] md:text-base flex w-full flex-row justify-center md:justify-normal text-base gap-[38px] md:gap-[120px] mt-[64px]">
          <div className="hidden md:flex flex-col gap-2">
            <p className="text-[#737373]">{data?.projectDetails[0].title}</p>
            <p>{data?.projectDetails[0].description}</p>
          </div>
          <div className="text-[14px] md:text-base  flex flex-col gap-10 md:gap-[48px]">
            <div className="md:hidden flex flex-col gap-2">
              <p className="text-[#737373] text-[14px] md:text-base ">
                {data?.projectDetails[0].title}
              </p>
              <p>{data?.projectDetails[0].description}</p>
            </div>
            {data?.projectDetails.slice(1, 4).map((item, index) => (
              <div
                key={index}
                className="flex text-[14px] md:text-base  flex-col gap-2"
              >
                <p className="text-[#737373]">{item.title}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col text-[14px] md:text-base gap-10  md:gap-[48px]">
            {data?.projectDetails.slice(-3).map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <p className="text-[#737373]">{item.title}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[14px] md:text-base flex flex-col gap-4 md:gap-8 mt-[48px] md:mt-[96px]">
          {data?.descriptionList.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))}
        </div>
      </div>
      <div className="w-full h-[602px] bg-blue-300 mt-[96px]" />
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-row justify-center flex-wrap gap-[48px] md:gap-[30px] mt-6 md:mt-[72px]">
          {data?.chapters.map((item, index) => (
            <Chapter
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
              key={index}
            />
          ))}
        </div>
        <div className="text-[14px] px-[32px] md:max-w-[940px] md:text-base flex flex-col gap-4 md:gap-8 mt-[48px] md:mt-[96px]">
          {data?.descriptionListSecond.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))}
        </div>
        <div className="md:max-w-[1138px] w-full h-[540px] bg-[#FFAAAA] mt-[48px] md:mt-[96px]" />
        <div className="w-full items-center justify-center px-[32px] md:px-0">
          {data?.casePoints.map((item, index) => (
            <CaseListItem
              key={index}
              data={item}
              index={index}
              length={data?.casePoints.length}
            />
          ))}
        </div>
        {data?.casePerson && <CaseReference data={data.casePerson} />}
      </div>
      {data?.cta && <CTA data={data.cta} />}
    </div>
  );
};
