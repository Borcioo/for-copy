"use client";
import {
  ImageProp,
  PageProps,
} from "@/app/[lang]/components/Reusable/Interfaces/Interfaces";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";
import {
  DescriptionItem,
  ProjectDetailProp,
} from "@/app/[lang]/components/CaseStudy/CaseMainSection";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import Image from "next/image";
import BlogPoint from "@/app/[lang]/components/Blog/BlogPoint";
import { ButtonProp } from "@/app/[lang]/components/Reusable/Components/Button";
import ChangeBlogButtons from "@/app/[lang]/components/Blog/ChangeBlogButtons";
import { RedBarProps } from "@/app/[lang]/[...localeSlug]/components/layouts/CareerLayout";
import CTA from "@/app/[lang]/components/Reusable/CTA/CTA";
import Loader from "@/app/[lang]/components/Loader";

export interface BlogPointProp {
  title: string;
  descriptionList: DescriptionItem[];
  descriptionListSecond: DescriptionItem[];
  dottedList: DescriptionItem[];
  image: ImageProp;
  row: boolean;
  buttons: ButtonProp[];
}

export default function BlogActiveView({ params }: PageProps) {
  const [data, setData] = useState<BlogActiveViewProps>();
  const fetchData = useCallback(async () => {
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/blog-articles/${params.slug}`;
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

  const imageUrl = data?.image.data
    ? getStrapiMedia(data.image.data.attributes.url)
    : null;
  return (
    <>
      {data ? (
        <div className="w-full flex-col mt-[96px] flex items-center justify-center relative ">
          <div className="max-w-[904px] w-full items-center relative flex flex-col px-[32px] md:px-[20px]">
            <Link
              href="/blog"
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
              <Link href="/blog" className="visible  lg:hidden">
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
              <div className="text-[14px] md:text-base  flex flex-row gap-10 md:gap-[70px]">
                {data?.blogDetails.map((item, index) => (
                  <div
                    key={index}
                    className={`flex text-[14px] md:text-base  flex-col gap-2 ${
                      index === 1 && "max-w-[130px]"
                    }`}
                  >
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
          <div className="w-full items-center justify-center px-[32px] md:px-0">
            {data?.blogPoints.map((item, index) => (
              <BlogPoint
                key={index}
                data={item}
                index={index}
                length={data?.blogPoints.length}
              />
            ))}
          </div>
          {data?.buttons && (
            <ChangeBlogButtons data={data.buttons} params={params.slug} />
          )}
          {data?.cta && <CTA data={data.cta} />}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export interface BlogActiveViewProps {
  title: string;
  blogDetails: ProjectDetailProp[];
  descriptionList: DescriptionItem[];
  descriptionListSecond: DescriptionItem[];
  image: ImageProp;
  blogPoints: BlogPointProp[];
  buttons: ButtonProp[];
  cta: RedBarProps;
}
