"use client";
import {
  ImageProp,
  PageProps,
} from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import {
  ChapterProp,
  DescriptionItem,
} from "@/app/[lang]/components/CaseStudy/CaseMainSection";
import { RedBarProps } from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";
import Link from "next/link";
import Image from "next/image";
import BlogPoint from "@/app/[lang]/components/Blog/BlogPoint";
import ChangeBlogButtons from "@/app/[lang]/components/Blog/ChangeBlogButtons";
import CTA from "@/app/[lang]/components/Reusable/CTA/CTA";
import Loader from "@/app/[lang]/components/Loader";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Chapter from "@/app/[lang]/components/CaseStudy/Chapter";
import {
  FlowTileProps,
  MouseState,
} from "@/app/[lang]/components/Home/Workflow/HomeWorkflow";
import FlowTile from "@/app/[lang]/components/Home/Workflow/FlowTile";

interface TextProp {
  text: string;
}

export interface ServiceActiveProps {
  title: string;
  descriptionList: DescriptionItem[];
  image: ImageProp;
  helpPoints: {
    title: string;
    textList: TextProp[];
  };
  chapters: {
    title: string;
    chapters: ChapterProp[];
  };
  workflow: {
    title: string;
    description: string;
    workflowList: FlowTileProps[];
  };
  cta: RedBarProps;
}

export default function ServiceActiveView({ params }: PageProps) {
  const [data, setData] = useState<ServiceActiveProps>();
  const fetchData = useCallback(async () => {
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/service-article/${params.slug}`;
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

  const imageUrl = data?.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;
  return (
    <>
      {data ? (
        <div className="w-full flex-col mt-[96px] flex items-center justify-center relative ">
          <div className="max-w-[904px] w-full items-center relative flex flex-col px-[32px] md:px-[20px]">
            <Link
              href="/uslugi"
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
            <h3 className="flex flex-row gap-[24px] text-base items-start justify-start md:text-[32px] md:leading-[122.5%] text-left font-bold w-full relative">
              <Link href="/uslugi" className="visible  lg:hidden">
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
            <div className="text-[14px] md:text-base flex flex-col gap-4 md:gap-8 mt-[48px] md:mt-[96px]">
              {data?.descriptionList.map((item, index) => (
                <p key={index}>{item.text}</p>
              ))}
            </div>
          </div>
          <div>
            {imageUrl && (
              <div className="max-w-[1133px] w-full mt-[80px]">
                <Image
                  src={imageUrl || ""}
                  alt={
                    data?.image.data.attributes.alternativeText ||
                    "person image"
                  }
                  width={1133}
                  height={755}
                />
              </div>
            )}
          </div>
          <div className="w-full items-center justify-center px-[32px] md:px-0 mt-[48px] md:mt-[119px]">
            {data.helpPoints.title && (
              <h2 className="text-center font-bold text-[32px] leading-[122.5%] md:text-[42px]">
                {data.helpPoints.title}
              </h2>
            )}
            <div className="max-w-[1264px] mx-auto flex flex-row flex-wrap mt-[36px] md:mt-[95px] gap-[38px]">
              {data.helpPoints.textList.map((item, index) => (
                <div
                  key={index}
                  className="max-w-[610px] w-full flex flex-row gap-[7px]"
                >
                  <svg
                    className="min-h-[16px] min-w-[16px] mt-[3px]"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4444 0H3.55556V1.77778H1.77778V3.55556H0V12.4444H1.77778V14.2222H3.55556V16H12.4444V14.2222H14.2222V12.4444H16V3.55556H14.2222V1.77778H12.4444V0ZM12.4444 1.77778V3.55556H14.2222V12.4444H12.4444V14.2222H3.55556V12.4444H1.77778V3.55556H3.55556V1.77778H12.4444ZM4.44444 7.11111H6.22222V8.88889H8V10.6667H6.22222V8.88889H4.44444V7.11111ZM11.5556 5.33333H9.77778V7.11111H8V8.88889H9.77778V7.11111H11.5556V5.33333Z"
                      fill="#F00000"
                    />
                  </svg>

                  <p className="text-[14px] md:text-base text-start pr-5">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-[48px] md:mt-[110px]">
            <h2 className="text-center font-bold text-[32px] leading-[122.5%] md:text-[42px]">
              {data.chapters.title}
            </h2>
            <div className="flex flex-row justify-center flex-wrap gap-[48px] md:gap-[30px] mt-6 md:mt-[72px]">
              {data?.chapters.chapters.map((item, index) => (
                <Chapter
                  title={item.title}
                  subTitle={item.subTitle}
                  description={item.description}
                  key={index}
                />
              ))}
            </div>
          </div>
          {data.workflow && (
            <div className="flex flex-col items-center justify-center mt-[48px] md:mt-[110px]">
              <h2 className="text-center text-[32px] leading-[122.5%] md:text-[42px] md:leading-[48px] font-bold ">
                {data.workflow.title}
              </h2>
              <p className="text-base text-center mt-[32px] max-w-[374px]">
                {data.workflow.description}
              </p>
              <div className="w-full max-w-[320px] lg:max-w-[1136px] flex flex-col justify-center items-center">
                <div
                  ref={wrapperRef}
                  onMouseMove={handleMouseMove}
                  className="w-full flex flex-wrap mt-12 justify-center items-center gap-[22px] lg:gap-[85px] lg:mt-[65px] lg:mb-[112px]"
                >
                  {data.workflow.workflowList.map(
                    (item: FlowTileProps, index: number) => (
                      <FlowTile
                        key={index}
                        handleOnMouseOver={handleOnMouseOver}
                        handleOnMouseOut={handleOnMouseOut}
                        half={mouseState.half}
                        data={item}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          )}
          {data?.cta && <CTA data={data.cta} />}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
